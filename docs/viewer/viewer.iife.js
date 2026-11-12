var BlueprintsViewerBundle=(()=>{var Xh=Object.defineProperty;var Av=Object.getOwnPropertyDescriptor;var Rv=Object.getOwnPropertyNames;var Cv=Object.prototype.hasOwnProperty;var Pv=(n,e)=>{for(var t in e)Xh(n,t,{get:e[t],enumerable:!0})},Iv=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Rv(e))!Cv.call(n,r)&&r!==t&&Xh(n,r,{get:()=>e[r],enumerable:!(i=Av(e,r))||i.enumerable});return n};var Lv=n=>Iv(Xh({},"__esModule",{value:!0}),n);var TC={};Pv(TC,{mountViewer:()=>EC});var Qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xg=0,Df=1,yg=2;var Xa=1,_g=2,Lo=3,ii=0,Sn=1,Ot=2,pi=0,Yi=1,Nf=2,Of=3,Uf=4,Vc=5;var Ii=100,vg=101,bg=102,Mg=103,Sg=104,qa=200,ts=201,wg=202,Eg=203,$a=204,Do=205,Tg=206,Ya=207,Ag=208,Rg=209,Cg=210,Pg=211,Ig=212,Lg=213,Dg=214,yc=0,_c=1,vc=2,xo=3,bc=4,Mc=5,Sc=6,wc=7,Gc=0,Ng=1,Og=2,mi=0,Ff=1,Bf=2,kf=3,No=4,zf=5,Hf=6,Vf=7,vf="attached",Ug="detached",Gf=300,Cs=301,Oo=302,Wc=303,Xc=304,Ri=1e3,hi=1001,yo=1002,$t=1003,qc=1004;var Ps=1005;var Yt=1006,Uo=1007;var gi=1008;var Nn=1009,Wf=1010,Xf=1011,Fo=1012,$c=1013,Li=1014,Wn=1015,Zn=1016,Yc=1017,Zc=1018,Is=1020,qf=35902,$f=35899,Yf=1021,Zf=1022,wn=1023,br=1026,Ir=1027,Kc=1028,jc=1029,ns=1030,Jc=1031;var Qc=1033,Za=33776,Ka=33777,ja=33778,Ja=33779,eu=35840,tu=35841,nu=35842,iu=35843,ru=36196,su=37492,ou=37496,au=37488,lu=37489,Qa=37490,cu=37491,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,gu=37814,xu=37815,yu=37816,_u=37817,vu=37818,bu=37819,Mu=37820,Su=37821,wu=36492,Eu=36494,Tu=36495,Au=36283,Ru=36284,el=36285,Cu=36286;var Ss=2300,ws=2301,gc=2302,bf=2303,Mf=2400,Sf=2401,wf=2402,Fg=2500;var Kf=0,tl=1,Bo=2,Bg=3200;var nl=0,kg=1,Di="",At="srgb",Vn="srgb-linear",xa="linear",Dt="srgb";var xc=7680;var zg=519,Hg=512,Vg=513,Gg=514,jf=515,Wg=516,Xg=517,Jf=518,Qf=519,ed=35044;var td="300 es",fi=2e3,_o=2001;function Dv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qg(){let n=vo("canvas");return n.style.display="block",n}var Em={},bo=null;function ya(...n){let e="THREE."+n.shift();bo?bo("log",e,...n):console.log(e,...n)}function $g(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function nt(...n){n=$g(n);let e="THREE."+n.shift();if(bo)bo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=$g(n);let e="THREE."+n.shift();if(bo)bo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){let e=n.join(" ");e in Em||(Em[e]=!0,nt(...n))}function Yg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Zg={[yc]:yc,[vc]:Sc,[bc]:bc,[xo]:Mc,[_c]:_c,[Sc]:vc,[wc]:wc,[Mc]:xo},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tm=1234567,mo=Math.PI/180,Es=180/Math.PI;function Zi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function nd(n,e){return(n%e+e)%e}function Ov(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Uv(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function Fv(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function Bv(n,e=1){return e-Math.abs(nd(n,e*2)-e)}function kv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vv(n,e){return n+Math.random()*(e-n)}function Gv(n){return n*(.5-Math.random())}function Wv(n){n!==void 0&&(Tm=n);let e=Tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xv(n){return n*mo}function qv(n){return n*Es}function $v(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Yv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function id(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zv(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rd(n,e){if(e.constructor===Float32Array)return n;let t=Pu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function sd(n,e){if(e.constructor===Float32Array)return n;let t=Pu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var is={DEG2RAD:mo,RAD2DEG:Es,generateUUID:Zi,clamp:ct,euclideanModulo:nd,mapLinear:Ov,inverseLerp:Uv,lerp:ga,damp:Fv,pingpong:Bv,smoothstep:kv,smootherstep:zv,randInt:Hv,randFloat:Vv,randFloatSpread:Gv,seededRandom:Wv,degToRad:Xv,radToDeg:qv,isPowerOfTwo:$v,ceilPowerOfTwo:Yv,floorPowerOfTwo:id,setQuaternionFromProperEuler:Zv,normalize:sd,denormalize:rd},Xe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Am.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qh=new I,Am=new Zt,lt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],x=r[0],g=r[3],p=r[6],b=r[1],S=r[4],v=r[7],M=r[2],E=r[5],y=r[8];return s[0]=o*x+a*b+l*M,s[3]=o*g+a*S+l*E,s[6]=o*p+a*v+l*y,s[1]=c*x+u*b+h*M,s[4]=c*g+u*S+h*E,s[7]=c*p+u*v+h*y,s[2]=f*x+d*b+m*M,s[5]=f*g+d*S+m*E,s[8]=f*p+d*v+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($h.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($h.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$h=new lt,Rm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){let n={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?xa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vn]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var mt=Kv();function vr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ys,Ec=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=vo("canvas")),Ys.width=e.width,Ys.height=e.height;let r=Ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vr(t[i]/255)*255):t[i]=vr(t[i]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jv=0,Mo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yh(r[o].image)):s.push(Yh(r[o]))}else s=Yh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Yh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ec.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var Jv=0,Zh=new I,hn=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=hi,r=hi,s=Yt,o=gi,a=wn,l=Nn,c=n.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Zi(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Gf;hn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,M=(p+1)/2,E=(u+f)/4,y=(h+x)/4,w=(m+g)/4;return S>v&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=y/i):v>M?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=E/r,s=w/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=y/s,r=w/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Tc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var it=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qv,e,eb)}lookAt(e,t,i){let r=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Hr.crossVectors(i,ei),Hr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Hr.crossVectors(i,ei)),Hr.normalize(),Bl.crossVectors(ei,Hr),r[0]=Hr.x,r[4]=Bl.x,r[8]=ei.x,r[1]=Hr.y,r[5]=Bl.y,r[9]=ei.y,r[2]=Hr.z,r[6]=Bl.z,r[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],b=i[3],S=i[7],v=i[11],M=i[15],E=r[0],y=r[4],w=r[8],D=r[12],N=r[1],k=r[5],q=r[9],z=r[13],O=r[2],Y=r[6],ee=r[10],j=r[14],ye=r[3],ie=r[7],V=r[11],ne=r[15];return s[0]=o*E+a*N+l*O+c*ye,s[4]=o*y+a*k+l*Y+c*ie,s[8]=o*w+a*q+l*ee+c*V,s[12]=o*D+a*z+l*j+c*ne,s[1]=u*E+h*N+f*O+d*ye,s[5]=u*y+h*k+f*Y+d*ie,s[9]=u*w+h*q+f*ee+d*V,s[13]=u*D+h*z+f*j+d*ne,s[2]=m*E+x*N+g*O+p*ye,s[6]=m*y+x*k+g*Y+p*ie,s[10]=m*w+x*q+g*ee+p*V,s[14]=m*D+x*z+g*j+p*ne,s[3]=b*E+S*N+v*O+M*ye,s[7]=b*y+S*k+v*Y+M*ie,s[11]=b*w+S*q+v*ee+M*V,s[15]=b*D+S*z+v*j+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],b=l*d-c*f,S=a*d-c*h,v=a*f-l*h,M=o*d-c*u,E=o*f-l*u,y=o*h-a*u;return t*(x*b-g*S+p*v)-i*(m*b-g*M+p*E)+r*(m*S-x*M+p*y)-s*(m*v-x*E+g*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=t*a-i*o,S=t*l-r*o,v=t*c-s*o,M=i*l-r*a,E=i*c-s*a,y=r*c-s*l,w=u*x-h*m,D=u*g-f*m,N=u*p-d*m,k=h*g-f*x,q=h*p-d*x,z=f*p-d*g,O=b*z-S*q+v*k+M*N-E*D+y*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/O;return e[0]=(a*z-l*q+c*k)*Y,e[1]=(r*q-i*z-s*k)*Y,e[2]=(x*y-g*E+p*M)*Y,e[3]=(f*E-h*y-d*M)*Y,e[4]=(l*N-o*z-c*D)*Y,e[5]=(t*z-r*N+s*D)*Y,e[6]=(g*v-m*y-p*S)*Y,e[7]=(u*y-f*v+d*S)*Y,e[8]=(o*q-a*N+c*w)*Y,e[9]=(i*N-t*q-s*w)*Y,e[10]=(m*E-x*v+p*b)*Y,e[11]=(h*v-u*E-d*b)*Y,e[12]=(a*D-o*k-l*w)*Y,e[13]=(t*k-i*D+r*w)*Y,e[14]=(x*S-m*M-g*b)*Y,e[15]=(u*M-h*S+f*b)*Y,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,x=o*u,g=o*h,p=a*h,b=l*c,S=l*u,v=l*h,M=i.x,E=i.y,y=i.z;return r[0]=(1-(x+p))*M,r[1]=(d+v)*M,r[2]=(m-S)*M,r[3]=0,r[4]=(d-v)*E,r[5]=(1-(f+p))*E,r[6]=(g+b)*E,r[7]=0,r[8]=(m+S)*y,r[9]=(g-b)*y,r[10]=(1-(f+x))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Zs.set(r[0],r[1],r[2]).length(),a=Zs.set(r[4],r[5],r[6]).length(),l=Zs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ei.copy(this);let c=1/o,u=1/a,h=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,t.setFromRotationMatrix(Ei),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===fi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===_o)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fi,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===fi)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===_o)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zs=new I,Ei=new it,Qv=new I(0,0,0),eb=new I(1,1,1),Hr=new I,Bl=new I,ei=new I,Pm=new it,Im=new Zt,Vi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tb=0,Lm=new I,Ks=new Zt,pr=new it,kl=new I,ra=new I,nb=new I,ib=new Zt,Dm=new I(1,0,0),Nm=new I(0,1,0),Om=new I(0,0,1),Um={type:"added"},rb={type:"removed"},js={type:"childadded",child:null},Kh={type:"childremoved",child:null},Wt=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Vi,i=new Zt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new lt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kl.copy(e):kl.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ra,kl,this.up):pr.lookAt(kl,ra,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),Ks.setFromRotationMatrix(pr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),js.child=e,this.dispatchEvent(js),js.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rb),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function jh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=mt.workingColorSpace){if(e=nd(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jh(o,s,e+1/3),this.g=jh(o,s,e),this.b=jh(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Kg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return mt.workingToColorSpace(Pn.copy(this),e),Math.round(ct(Pn.r*255,0,255))*65536+Math.round(ct(Pn.g*255,0,255))*256+Math.round(ct(Pn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Pn.copy(this),t);let i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=At){mt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,r=Pn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(zl);let i=ga(Vr.h,zl.h,t),r=ga(Vr.s,zl.s,t),s=ga(Vr.l,zl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new qe;qe.NAMES=Kg;var Gn=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new I,mr=new I,Jh=new I,gr=new I,Js=new I,Qs=new I,Fm=new I,Qh=new I,ef=new I,tf=new I,nf=new wt,rf=new wt,sf=new wt,zi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ti.subVectors(e,t),r.cross(Ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ti.subVectors(r,t),mr.subVectors(i,t),Jh.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(mr),l=Ti.dot(Jh),c=mr.dot(mr),u=mr.dot(Jh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,t,i,r){return Ti.subVectors(i,t),mr.subVectors(e,t),Ti.cross(mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Ti.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Js.subVectors(r,i),Qs.subVectors(s,i),Qh.subVectors(e,i);let l=Js.dot(Qh),c=Qs.dot(Qh);if(l<=0&&c<=0)return t.copy(i);ef.subVectors(e,r);let u=Js.dot(ef),h=Qs.dot(ef);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Js,o);tf.subVectors(e,s);let d=Js.dot(tf),m=Qs.dot(tf);if(m>=0&&d<=m)return t.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Qs,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Fm.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Fm,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Vl.subVectors(this.max,sa),eo.subVectors(e.a,sa),to.subVectors(e.b,sa),no.subVectors(e.c,sa),Gr.subVectors(to,eo),Wr.subVectors(no,to),ys.subVectors(eo,no);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ys.z,ys.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ys.z,0,-ys.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ys.y,ys.x,0];return!of(t,eo,to,no,Vl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,eo,to,no,Vl))?!1:(Gl.crossVectors(Gr,Wr),t=[Gl.x,Gl.y,Gl.z],of(t,eo,to,no,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xr=[new I,new I,new I,new I,new I,new I,new I,new I],Ai=new I,Hl=new Nt,eo=new I,to=new I,no=new I,Gr=new I,Wr=new I,ys=new I,sa=new I,Vl=new I,Gl=new I,_s=new I;function of(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_s.fromArray(n,s);let a=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var sn=new I,Wl=new Xe,ob=0,Ht=class extends Ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ed,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Pu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.array)}};var va=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},ab=new Nt,oa=new I,af=new I,yn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ab.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(af)),this.expandByPoint(oa.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lb=0,ui=new it,lf=new Wt,io=new I,ti=new Nt,aa=new Nt,gn=new I,kt=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?ba:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ti.min,aa.min),ti.expandByPoint(gn),gn.addVectors(ti.max,aa.max),ti.expandByPoint(gn)):(ti.expandByPoint(aa.min),ti.expandByPoint(aa.max))}ti.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gn.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(e,c),gn.add(io)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new I,l[D]=new I;let u=new I,h=new I,f=new I,d=new Xe,m=new Xe,x=new Xe,g=new I,p=new I;function b(D,N,k){c[D]=c[N]=c[k]=1,u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,N),x.fromBufferAttribute(s,k),h.sub(u),f.sub(u),m.sub(d),x.sub(d);let q=1/(m.x*x.y-x.x*m.y);isFinite(q)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(q),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(q),a[D].add(g),a[N].add(g),a[k].add(g),l[D].add(p),l[N].add(p),l[k].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,N=S.length;D<N;++D){let k=S[D],q=k.start,z=k.count;for(let O=q,Y=q+z;O<Y;O+=3)b(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new I,M=new I,E=new I,y=new I;function w(D){E.fromBufferAttribute(r,D),y.copy(E);let N=a[D];v.copy(N),v.sub(E.multiplyScalar(E.dot(N))).normalize(),M.crossVectors(y,N);let q=M.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,q)}for(let D=0,N=i.count;D<N;++D)c[D]&&w(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Ht(f,u,h)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Bm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Bm(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Zi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Hn=new I,In=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Pu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.data.array)}},cf=new I,cb=new I,ub=new lt,xn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=cf.subVectors(i,t).cross(cb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(cf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ub.getNormalMatrix(e),r=this.coplanarPoint(cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hb=0,Ln=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Yi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Do,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xc,this.stencilZFail=xc,this.stencilZPass=xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Eo=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ro,la=new I,so=new I,oo=new I,ao=new Xe,ca=new Xe,jg=new it,Xl=new I,ua=new I,ql=new I,km=new Xe,uf=new Xe,zm=new Xe,Ma=class extends Wt{constructor(e=new Eo){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $r(t,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new In(i,3,0,!1)),ro.setAttribute("uv",new In(i,2,3,!1))}this.geometry=ro,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),so.setFromMatrixScale(this.matrixWorld),jg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&so.multiplyScalar(-oo.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;$l(Xl.set(-.5,-.5,0),oo,o,so,r,s),$l(ua.set(.5,-.5,0),oo,o,so,r,s),$l(ql.set(.5,.5,0),oo,o,so,r,s),km.set(0,0),uf.set(1,0),zm.set(1,1);let a=e.ray.intersectTriangle(Xl,ua,ql,!1,la);if(a===null&&($l(ua.set(-.5,.5,0),oo,o,so,r,s),uf.set(0,1),a=e.ray.intersectTriangle(Xl,ql,ua,!1,la),a===null))return;let l=e.ray.origin.distanceTo(la);l<e.near||l>e.far||t.push({distance:l,point:la.clone(),uv:zi.getInterpolation(la,Xl,ua,ql,km,uf,zm,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function $l(n,e,t,i,r,s){ao.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ca.x=s*ao.x-r*ao.y,ca.y=r*ao.x+s*ao.y):ca.copy(ao),n.copy(e),n.x+=ca.x,n.y+=ca.y,n.applyMatrix4(jg)}var yr=new I,hf=new I,Yl=new I,Zl=new I,Gi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){hf.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),Zl.copy(this.origin).sub(hf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Yl),a=Zl.dot(this.direction),l=-Zl.dot(Yl),c=Zl.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(hf).addScaledVector(Yl,f),d}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);let i=yr.dot(this.direction),r=yr.dot(yr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=i.x-o.x,b=i.y-o.y,S=i.z-o.z,v=Math.abs(l),M=Math.abs(c),E=Math.abs(u),y,w,D,N,k,q,z,O,Y,ee,j,ye;if(v>=M&&v>=E?(D=l,q=h,Y=m,ye=p,l>=0?(y=c,w=u,N=f,k=d,z=x,O=g,ee=b,j=S):(y=u,w=c,N=d,k=f,z=g,O=x,ee=S,j=b)):M>=E?(D=c,q=f,Y=x,ye=b,c>=0?(y=u,w=l,N=d,k=h,z=g,O=m,ee=S,j=p):(y=l,w=u,N=h,k=d,z=m,O=g,ee=p,j=S)):(D=u,q=d,Y=g,ye=S,u>=0?(y=l,w=c,N=h,k=f,z=m,O=x,ee=p,j=b):(y=c,w=l,N=f,k=h,z=x,O=m,ee=b,j=p)),D===0)return null;let ie=y/D,V=w/D,ne=1/D,we=N-ie*q,Ne=k-V*q,Q=z-ie*Y,_e=O-V*Y,oe=ee-ie*ye,H=j-V*ye,te=oe*_e-H*Q,Ie=we*H-Ne*oe,We=Q*Ne-_e*we;if(r){if(te<0||Ie<0||We<0)return null}else if((te<0||Ie<0||We<0)&&(te>0||Ie>0||We>0))return null;let Oe=te+Ie+We;if(Oe===0)return null;let Ge=ne*(te*q+Ie*Y+We*ye);return(Oe>0?Ge<0:Ge>0)?null:this.at(Ge/Oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hm=new it,vs=new Gi,Kl=new yn,Vm=new I,jl=new I,Jl=new I,Ql=new I,ff=new I,ec=new I,Gm=new I,tc=new I,ht=class extends Wt{constructor(e=new kt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(ff.fromBufferAttribute(h,e),o?ec.addScaledVector(ff,u):ec.addScaledVector(ff.sub(t),u))}t.add(ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(Kl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Kl,Vm)===null||vs.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(Hm.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Hm),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let E=a.getX(v),y=a.getX(v+1),w=a.getX(v+2);r=nc(this,p,e,i,c,u,h,E,y,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);r=nc(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=S;v<M;v+=3){let E=v,y=v+1,w=v+2;r=nc(this,p,e,i,c,u,h,E,y,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=g,S=g+1,v=g+2;r=nc(this,o,e,i,c,u,h,b,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function fb(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ii,a),l===null)return null;tc.copy(a),tc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(tc);return c<t.near||c>t.far?null:{distance:c,point:tc.clone(),object:n}}function nc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,jl),n.getVertexPosition(l,Jl),n.getVertexPosition(c,Ql);let u=fb(n,e,t,i,jl,Jl,Ql,Gm);if(u){let h=new I;zi.getBarycoord(Gm,jl,Jl,Ql,h),r&&(u.uv=zi.getInterpolatedAttribute(r,a,l,c,h,new Xe)),s&&(u.uv1=zi.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};zi.getNormal(jl,Jl,Ql,f.normal),u.face=f,u.barycoord=h}return u}var ha=new wt,Wm=new wt,Xm=new wt,db=new wt,qm=new it,ic=new I,df=new yn,$m=new it,pf=new Gi,Sa=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vf,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ic),this.boundingBox.expandByPoint(ic)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ic),this.boundingSphere.expandByPoint(ic)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),df.copy(this.boundingSphere),df.applyMatrix4(r),e.ray.intersectsSphere(df)!==!1&&($m.copy(r).invert(),pf.copy(e.ray).applyMatrix4($m),!(this.boundingBox!==null&&pf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ug?this.bindMatrixInverse.copy(this.bindMatrix).invert():nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Wm.fromBufferAttribute(r.attributes.skinIndex,e),Xm.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ha.copy(t),t.set(0,0,0,0)):(ha.set(t.x,t.y,t.z,1),t.set(0,0,0)),ha.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Xm.getComponent(s);if(o!==0){let a=Wm.getComponent(s);qm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(db.copy(ha).applyMatrix4(qm),o)}}return t.isVector4&&(t.w=ha.w),t.applyMatrix4(this.bindMatrixInverse)}},To=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ao=class extends hn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=$t,u=$t,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ym=new it,pb=new it,wa=class n{constructor(e=[],t=[]){this.uuid=Zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new it;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:pb;Ym.multiplyMatrices(a,t[s]),Ym.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ao(t,e,e,wn,Wn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(nt("Skeleton: No bone found with UUID:",s),o=new To),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Mr=class extends Ht{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lo=new it,Zm=new it,rc=[],Km=new Nt,mb=new it,fa=new ht,da=new yn,Ts=class extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,mb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),Km.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(Km)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),da.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,lo),Zm.multiplyMatrices(i,lo),fa.matrixWorld=Zm,fa.raycast(e,rc);for(let o=0,a=rc.length;o<a;o++){let l=rc[o];l.instanceId=s,l.object=this,t.push(l)}rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ao(new Float32Array(r*this.count),r,this.count,Kc,Wn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new yn,gb=new Xe(.5,.5),sc=new I,Yr=class{constructor(e=new xn,t=new xn,i=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],b=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-u,p-m,M-b).normalize(),r[1].setComponents(c+o,d+u,p+m,M+b).normalize(),r[2].setComponents(c+a,d+h,p+x,M+S).normalize(),r[3].setComponents(c-a,d-h,p-x,M-S).normalize(),i)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),t===fi)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(t===_o)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=gb.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jm=new it,Rc=class n{constructor(){this.coordinateSystem=fi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];jm.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Yr),i[r].setFromProjectionMatrix(jm,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Yr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Sr=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cc=new I,Pc=new I,Jm=new it,pa=new Gi,oc=new yn,mf=new I,Qm=new I,Wi=class extends Wt{constructor(e=new kt,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Cc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Gt(i,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(r),oc.radius+=s,e.ray.intersectsSphere(oc)===!1)return;Jm.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Jm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),b=u.getX(x+1),S=ac(this,e,pa,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=ac(this,e,pa,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=ac(this,e,pa,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ac(this,e,pa,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ac(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Cc.fromBufferAttribute(a,r),Pc.fromBufferAttribute(a,s),t.distanceSqToSegment(Cc,Pc,mf,Qm)>i)return;mf.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(mf);if(!(c<e.near||c>e.far))return{distance:c,point:Qm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var eg=new I,tg=new I,Ea=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)eg.fromBufferAttribute(t,r),tg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+eg.distanceTo(tg);e.setAttribute("lineDistance",new Gt(i,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ro=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ng=new it,Ef=new Gi,lc=new yn,cc=new I,Aa=class extends Wt{constructor(e=new kt,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;ng.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(ng);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);cc.fromBufferAttribute(h,g),ig(cc,g,l,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)cc.fromBufferAttribute(h,m),ig(cc,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ig(n,e,t,i,r,s,o){let a=Ef.distanceSqToPoint(n);if(a<t){let l=new I;Ef.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends hn{constructor(e=[],t=Cs,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wr=class extends hn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Er=class extends hn{constructor(e,t,i=Li,r,s,o,a=$t,l=$t,c,u=br,h=1){if(u!==br&&u!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ca=class extends Er{constructor(e,t=Li,i=Cs,r,s,o=$t,a=$t,l,c=br){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pa=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xi=class n extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function m(x,g,p,b,S,v,M,E,y,w,D){let N=v/y,k=M/w,q=v/2,z=M/2,O=E/2,Y=y+1,ee=w+1,j=0,ye=0,ie=new I;for(let V=0;V<ee;V++){let ne=V*k-z;for(let we=0;we<Y;we++){let Ne=we*N-q;ie[x]=Ne*b,ie[g]=ne*S,ie[p]=O,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[g]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(we/y),h.push(1-V/w),j+=1}}for(let V=0;V<w;V++)for(let ne=0;ne<y;ne++){let we=f+ne+Y*V,Ne=f+ne+Y*(V+1),Q=f+(ne+1)+Y*(V+1),_e=f+(ne+1)+Y*V;l.push(we,Ne,_e),l.push(Ne,Q,_e),ye+=6}a.addGroup(d,ye,D),d+=ye,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var uc=new I,hc=new I,gf=new I,fc=new zi,Ia=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(mo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f=new Map,d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=fc;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),fc.getNormal(gf),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let S=(b+1)%3,v=h[b],M=h[S],E=fc[u[b]],y=fc[u[S]],w=`${v}_${M}`,D=`${M}_${v}`,N=f.get(D);N?(gf.dot(N.normal)<=s&&(d.push(E.x,E.y,E.z),d.push(y.x,y.y,y.z)),f.set(D,null)):f.has(w)||f.set(w,{index0:c[b],index1:c[S],normal:gf.clone()})}}for(let m of f.values())if(m){let{index0:x,index1:g}=m;uc.fromBufferAttribute(a,x),hc.fromBufferAttribute(a,g),d.push(uc.x,uc.y,uc.z),d.push(hc.x,hc.y,hc.z)}this.setAttribute("position",new Gt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var di=class n extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let v=S*h-s;m.push(v,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,v=b+c*(p+1),M=b+1+c*(p+1),E=b+1+c*p;d.push(S,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var La=class n extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let b=[],S=p/i,v=o+S*a,M=e*Math.cos(v),E=Math.sqrt(e*e-M*M),y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let D=w/t,N=r+D*s;h.x=-E*Math.cos(N),h.y=M,h.z=E*Math.sin(N),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(D+y,1-S),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let S=u[p][b+1],v=u[p][b],M=u[p+1][b],E=u[p+1][b+1];(p!==0||o>0)&&d.push(S,v,E),(p!==i-1||l<Math.PI)&&d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Da=class extends kt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new I,s=new I;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,d=h.count;for(let m=f,x=f+d;m<x;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),b=a.getX(m+(g+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,b),rg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),rg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function rg(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(sg(r))r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(sg(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function On(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let r in i)e[r]=i[r]}return e}function sg(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function xb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var il={clone:Ls,merge:On},yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new I().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new it().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ic=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Na=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lc=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ma(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function vb(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function og(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function bb(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var qi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nc=class extends qi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sf:s=e,a=2*t-i;break;case wf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sf:o=e,l=2*i-t;break;case wf:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)s[M]=p*o[u+M]+b*o[c+M]+S*o[l+M]+v*o[h+M];return s}},Oc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Uc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fc=class extends qi{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-t)/(r-t),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,b=h[p],S=h[p+1],v=e*f+m*2,M=u[v],E=u[v+1],y=Sb(i,t,b,M,r);s[m]=Jg(y,x,S,E,g)}return s}};function Jg(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function Mb(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Sb(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Jg(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let l=Mb(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Yn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),ma(e.settings)&&(i.settings={inTangents:qr(e.settings.inTangents,Array),outTangents:qr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break;case bf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return nt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return gc;case this.InterpolantFactoryMethodBezier:return bf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;ma(this.settings)&&(ag(this.settings.inTangents,e),ag(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;ma(this.settings)&&(lg(this.settings.inTangents,e),lg(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Nv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===gc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,ma(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ag(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function lg(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=ws;var Tr=class extends Yn{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Ss;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Oa.prototype.ValueTypeName="color";var Ar=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Ar.prototype.ValueTypeName="number";var Bc=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Rr=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Yn{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Ss;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Yn{constructor(e,t,i,r){super(e,t,i,r)}};Zr.prototype.ValueTypeName="vector";var Ua=class{constructor(e="",t=-1,i=[],r=Fg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Zi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Eb(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(Yn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=vb(l);l=og(l,1,u),c=og(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function wb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Oa;case"quaternion":return Rr;case"bool":case"boolean":return Tr;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Eb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wb(n.type);if(n.times===void 0){let i=[],r=[];bb(n.keys,i,r,"value"),n.times=i,n.values=r}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),ma(n.settings)&&(t.settings={inTangents:qr(n.settings.inTangents,Float32Array),outTangents:qr(n.settings.outTangents,Float32Array)}),t}var Hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(cg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!cg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function cg(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kc=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qg=new kc,$i=class{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r={},Tf=class extends Error{constructor(e,t){super(e),this.response=t}},Co=class extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Hi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:i,onError:r});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=_r[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){b();function b(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{x+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let E=0,y=u.length;E<y;E++){let w=u[E];w.onProgress&&w.onProgress(M)}p.enqueue(v),b()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Tf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Hi.add(`file:${e}`,c);let u=_r[e];delete _r[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=_r[e];if(u===void 0)throw this.manager.itemError(e),c;delete _r[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var co=new WeakMap,zc=class extends $i{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=co.get(o);h===void 0&&(h=[],co.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=vo("img");function l(){u(),t&&t(this);let h=co.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}co.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Hi.remove(`image:${e}`);let f=co.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}co.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Fa=class extends $i{constructor(e){super(e)}load(e,t,i,r){let s=new hn,o=new zc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},As=class extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var xf=new it,ug=new I,hg=new I,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(ug),hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){xf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===_o||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dc=new I,pc=new Zt,ki=new I,Ba=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,pc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(dc,pc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,pc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xr=new I,fg=new Xe,dg=new Xe,un=class extends Ba{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,fg,dg),t.subVectors(dg,fg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Af=class extends Po{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Es*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ka=class extends As{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Af}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Rf=class extends Po{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends As{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends Ba{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cf=class extends Po{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Cf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},za=class extends As{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ha=class extends kt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var yf=new WeakMap,Va=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{yf.has(o)===!0?(r&&r(yf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),yf.set(l,c),Hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var uo=-90,ho=1,Io=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(uo,ho,e,t);r.layers=this.layers,this.add(r);let s=new un(uo,ho,e,t);s.layers=this.layers,this.add(s);let o=new un(uo,ho,e,t);o.layers=this.layers,this.add(o);let a=new un(uo,ho,e,t);a.layers=this.layers,this.add(a);let l=new un(uo,ho,e,t);l.layers=this.layers,this.add(l);let c=new un(uo,ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Hc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ad="\\[\\]\\.:\\/",Tb=new RegExp("["+ad+"]","g"),ld="[^"+ad+"]",Ab="[^"+ad.replace("\\.","")+"]",Rb=/((?:WC+[\/:])*)/.source.replace("WC",ld),Cb=/(WCOD+)?/.source.replace("WCOD",Ab),Pb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),Ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),Lb=new RegExp("^"+Rb+Cb+Pb+Ib+"$"),Db=["material","materials","bones","map"],Pf=class{constructor(e,t,i){let r=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tb,"")}static parseTrackName(e){let t=Lb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Db.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Pf;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RC=new Float32Array(1);var jr=class extends $r{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var pg=new it,ni=class{constructor(e,t,i=0,r=1/0){this.ray=new Gi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pg),this}intersectObject(e,t=!0,i=[]){return If(e,this,i,t),i.sort(mg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)If(e[r],this,i,t);return i.sort(mg),i}};function mg(n,e){return n.distance-e.distance}function If(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)If(s[o],e,t,!0)}}var Jr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lf=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};var gg=new I,mc=new I,fo=new I,po=new I,_f=new I,Nb=new I,Ob=new I,Ga=class{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gg.subVectors(e,this.start),mc.subVectors(this.end,this.start);let i=mc.dot(mc);if(i===0)return 0;let s=mc.dot(gg)/i;return t&&(s=ct(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Nb,i=Ob){let r=10000000000000001e-32,s,o,a=this.start,l=e.start,c=this.end,u=e.end;fo.subVectors(c,a),po.subVectors(u,l),_f.subVectors(a,l);let h=fo.dot(fo),f=po.dot(po),d=po.dot(_f);if(h<=r&&f<=r)return t.copy(a),i.copy(l),t.distanceToSquared(i);if(h<=r)s=0,o=d/f,o=ct(o,0,1);else{let m=fo.dot(_f);if(f<=r)o=0,s=ct(-m/h,0,1);else{let x=fo.dot(po),g=h*f-x*x;g!==0?s=ct((x*d-m*f)/g,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=ct(-m/h,0,1)):o>1&&(o=1,s=ct((x-m)/h,0,1))}}return t.copy(a).addScaledVector(fo,s),i.copy(l).addScaledVector(po,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Wa=class extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function cd(n,e,t,i){let r=Ub(i);switch(t){case Yf:return n*e;case Kc:return n*e/r.components*r.byteLength;case jc:return n*e/r.components*r.byteLength;case ns:return n*e*2/r.components*r.byteLength;case Jc:return n*e*2/r.components*r.byteLength;case Zf:return n*e*3/r.components*r.byteLength;case wn:return n*e*4/r.components*r.byteLength;case Qc:return n*e*4/r.components*r.byteLength;case Za:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(n,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(n,8)*Math.max(e,8)/2;case ru:case su:case au:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ou:case Qa:case cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wu:case Eu:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Au:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case el:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ub(n){switch(n){case Nn:case Wf:return{byteLength:1,components:1};case Fo:case Xf:case Zn:return{byteLength:2,components:1};case Yc:case Zc:return{byteLength:2,components:4};case Li:case $c:case Wn:return{byteLength:4,components:1};case qf:case $f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function b0(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bb(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
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
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jb=`#ifdef USE_IRIDESCENCE
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
#endif`,Qb=`#ifdef USE_BUMPMAP
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,PM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,UM=`uniform sampler2D dfgLUT;
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
}`,FM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
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
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
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
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
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
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SS=`float getShadowMask() {
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
}`,wS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ES=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HS=`uniform float backgroundBlurriness;
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
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
}`,jS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,QS=`uniform vec3 diffuse;
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define LAMBERT
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
}`,nw=`#define MATCAP
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
}`,iw=`#define MATCAP
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
}`,rw=`#define NORMAL
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
}`,sw=`#define NORMAL
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
}`,ow=`#define PHONG
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
}`,aw=`#define PHONG
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
}`,lw=`#define STANDARD
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
}`,cw=`#define STANDARD
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
}`,uw=`#define TOON
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
}`,hw=`#define TOON
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
}`,fw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,pw=`#include <common>
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
}`,mw=`uniform vec3 color;
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
}`,gw=`uniform float rotation;
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
}`,xw=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:kb,alphahash_pars_fragment:zb,alphamap_fragment:Hb,alphamap_pars_fragment:Vb,alphatest_fragment:Gb,alphatest_pars_fragment:Wb,aomap_fragment:Xb,aomap_pars_fragment:qb,batching_pars_vertex:$b,batching_vertex:Yb,begin_vertex:Zb,beginnormal_vertex:Kb,bsdfs:jb,iridescence_fragment:Jb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:oM,color_vertex:aM,common:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:hM,emissivemap_fragment:fM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:PM,envmap_vertex:vM,fog_vertex:bM,fog_pars_vertex:MM,fog_fragment:SM,fog_pars_fragment:wM,gradientmap_pars_fragment:EM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:CM,lights_toon_fragment:IM,lights_toon_pars_fragment:LM,lights_phong_fragment:DM,lights_phong_pars_fragment:NM,lights_physical_fragment:OM,lights_physical_pars_fragment:UM,lights_fragment_begin:FM,lights_fragment_maps:BM,lights_fragment_end:kM,lightprobes_pars_fragment:zM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:qM,map_particle_fragment:$M,map_particle_pars_fragment:YM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:jM,morphcolor_vertex:JM,morphnormal_vertex:QM,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:oS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:hS,opaque_fragment:fS,packing:dS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:xS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:vS,shadowmap_pars_vertex:bS,shadowmap_vertex:MS,shadowmask_pars_fragment:SS,skinbase_vertex:wS,skinning_pars_vertex:ES,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:PS,tonemapping_pars_fragment:IS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:NS,uv_pars_vertex:OS,uv_vertex:US,worldpos_vertex:FS,background_vert:BS,background_frag:kS,backgroundCube_vert:zS,backgroundCube_frag:HS,cube_vert:VS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distance_vert:qS,distance_frag:$S,equirect_vert:YS,equirect_frag:ZS,linedashed_vert:KS,linedashed_frag:jS,meshbasic_vert:JS,meshbasic_frag:QS,meshlambert_vert:ew,meshlambert_frag:tw,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:rw,meshnormal_frag:sw,meshphong_vert:ow,meshphong_frag:aw,meshphysical_vert:lw,meshphysical_frag:cw,meshtoon_vert:uw,meshtoon_frag:hw,points_vert:fw,points_frag:dw,shadow_vert:pw,shadow_frag:mw,sprite_vert:gw,sprite_frag:xw},ze={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Xn={basic:{uniforms:On([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:On([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:On([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:On([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:On([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new qe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:On([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:On([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:On([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:On([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:On([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:On([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:On([ze.common,ze.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:On([ze.lights,ze.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Xn.physical={uniforms:On([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Iu={r:0,b:0,g:0},yw=new it,M0=new lt;M0.set(-1,0,0,0,1,0,0,0,1);function _w(n,e,t,i,r,s){let o=new qe(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(b){let S=!1,v=d(b);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new ht(new Xi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ls(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M0),c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ht(new di(2,2),new _n({name:"BackgroundMaterial",uniforms:Ls(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,S){b.getRGB(Iu,od(n)),t.buffers.color.setClear(Iu.r,Iu.g,Iu.b,S,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:x,dispose:p}}function vw(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(k,q,z,O,Y){let ee=!1,j=h(k,O,z,q);s!==j&&(s=j,c(s.object)),ee=d(k,O,z,Y),ee&&m(k,O,z,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(k,q,z,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function h(k,q,z,O){let Y=O.wireframe===!0,ee=i[q.id];ee===void 0&&(ee={},i[q.id]=ee);let j=k.isInstancedMesh===!0?k.id:0,ye=ee[j];ye===void 0&&(ye={},ee[j]=ye);let ie=ye[z.id];ie===void 0&&(ie={},ye[z.id]=ie);let V=ie[Y];return V===void 0&&(V=f(l()),ie[Y]=V),V}function f(k){let q=[],z=[],O=[];for(let Y=0;Y<t;Y++)q[Y]=0,z[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:O,object:k,attributes:{},index:null}}function d(k,q,z,O){let Y=s.attributes,ee=q.attributes,j=0,ye=z.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let ne=Y[ie],we=ee[ie];if(we===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(we=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(we=k.instanceColor)),ne===void 0||ne.attribute!==we||we&&ne.data!==we.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function m(k,q,z,O){let Y={},ee=q.attributes,j=0,ye=z.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let ne=ee[ie];ne===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor));let we={};we.attribute=ne,ne&&ne.data&&(we.data=ne.data),Y[ie]=we,j++}s.attributes=Y,s.attributesNum=j,s.index=O}function x(){let k=s.newAttributes;for(let q=0,z=k.length;q<z;q++)k[q]=0}function g(k){p(k,0)}function p(k,q){let z=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;z[k]=1,O[k]===0&&(n.enableVertexAttribArray(k),O[k]=1),Y[k]!==q&&(n.vertexAttribDivisor(k,q),Y[k]=q)}function b(){let k=s.newAttributes,q=s.enabledAttributes;for(let z=0,O=q.length;z<O;z++)q[z]!==k[z]&&(n.disableVertexAttribArray(z),q[z]=0)}function S(k,q,z,O,Y,ee,j){j===!0?n.vertexAttribIPointer(k,q,z,Y,ee):n.vertexAttribPointer(k,q,z,O,Y,ee)}function v(k,q,z,O){x();let Y=O.attributes,ee=z.getAttributes(),j=q.defaultAttributeValues;for(let ye in ee){let ie=ee[ye];if(ie.location>=0){let V=Y[ye];if(V===void 0&&(ye==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),ye==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),V!==void 0){let ne=V.normalized,we=V.itemSize,Ne=e.get(V);if(Ne===void 0)continue;let Q=Ne.buffer,_e=Ne.type,oe=Ne.bytesPerElement,H=_e===n.INT||_e===n.UNSIGNED_INT||V.gpuType===$c;if(V.isInterleavedBufferAttribute){let te=V.data,Ie=te.isInterleavedBuffer===!0?te.stride:te.itemSize,We=V.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let Oe=0;Oe<ie.locationSize;Oe++)p(ie.location+Oe,te.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Oe=0;Oe<ie.locationSize;Oe++)g(ie.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Oe=0;Oe<ie.locationSize;Oe++)S(ie.location+Oe,we/ie.locationSize,_e,ne,Ie*oe,(We+we/ie.locationSize*Oe)*oe,H)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)p(ie.location+te,V.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<ie.locationSize;te++)g(ie.location+te);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let te=0;te<ie.locationSize;te++)S(ie.location+te,we/ie.locationSize,_e,ne,we*oe,we/ie.locationSize*te*oe,H)}}else if(j!==void 0){let ne=j[ye];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(ie.location,ne);break;case 3:n.vertexAttrib3fv(ie.location,ne);break;case 4:n.vertexAttrib4fv(ie.location,ne);break;default:n.vertexAttrib1fv(ie.location,ne)}}}}b()}function M(){D();for(let k in i){let q=i[k];for(let z in q){let O=q[z];for(let Y in O){let ee=O[Y];for(let j in ee)u(ee[j].object),delete ee[j];delete O[Y]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let q=i[k.id];for(let z in q){let O=q[z];for(let Y in O){let ee=O[Y];for(let j in ee)u(ee[j].object),delete ee[j];delete O[Y]}}delete i[k.id]}function y(k){for(let q in i){let z=i[q];for(let O in z){let Y=z[O];if(Y[k.id]===void 0)continue;let ee=Y[k.id];for(let j in ee)u(ee[j].object),delete ee[j];delete Y[k.id]}}}function w(k){for(let q in i){let z=i[q],O=k.isInstancedMesh===!0?k.id:0,Y=z[O];if(Y!==void 0){for(let ee in Y){let j=Y[ee];for(let ye in j)u(j[ye].object),delete j[ye];delete Y[ee]}delete z[O],Object.keys(z).length===0&&delete i[q]}}}function D(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function bw(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Mw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(y){return!(y!==wn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let w=y===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Nn&&y!==Wn&&!w&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:E}}function Sw(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xn,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let b=s?0:i,S=b*4,v=p.clippingState||null;l.value=v,v=u(m,f,S,d);for(let M=0;M!==S;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var ol=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:pi});s.uniforms.tEquirect.value=t;let o=new ht(r,s),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Yt),new Io(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},e0=256,ww=3,Ew=20,S0=256,w0=16,Tw=3,Aw=new I,Rw=new qe,zo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Io(1,10,null),this._boxMesh=new ht(new Xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Aw}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Rw));let g=new Io(i,r,u);return g.position.copy(a),g.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(e0,id(e))}_fromTexture(e,t){e.mapping===Cs||e.mapping===Oo?this._setSize(e.image.length===0?e0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=t0(e,!1,!1),i=Math.log2(e)-ww;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=t0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cs||e.mapping===Oo?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=n0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cw(),this._integrationMaterial=Pw());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/w0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Tw)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(S0*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Iw());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function t0(n,e,t){return new ol(n,{minFilter:gi,generateMipmaps:e,type:Zn,colorSpace:Vn,depthBuffer:t})}function al(n,e,t){return new _n({name:n,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:Sn,blending:pi,depthTest:!1,depthWrite:!1})}function Cw(){return al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${S0}u

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
	`)}function Pw(){return al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:w0}},`

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
	`)}function Iw(){return al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ew}
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
	`)}function n0(){return al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function i0(){return al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Wc||d===Xc)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new ol(m.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Wc||d===Xc,x=d===Cs||d===Oo;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new zo(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new zo(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Wc?f.mapping=Cs:d===Xc&&(f.mapping=Oo),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Dw(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ms("WebGLRenderer: "+i+" extension not supported."),r}}}function Nw(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(m=>delete r[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete r[m.id],o.unregister(m);let x=s.get(m);x&&(e.remove(x),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return r[x.id]!==void 0||(x.addEventListener("dispose",a),r[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(m){let x=m.attributes;for(let g in x)e.update(x[g],n.ARRAY_BUFFER)}function h(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let b=x!==null?x.array.length:g.array.length/3-1,S=g.count>=65535?ba:va,v=new S(Math.ceil(b/3)*6,1),M=v.array;if(x!==null){let y=x.array;p=x.version;for(let w=0,D=0;w<b;w+=3){let N=y[w+0],k=y[w+1],q=y[w+2];M[D++]=N,M[D++]=k,M[D++]=k,M[D++]=q,M[D++]=q,M[D++]=N}}else{p=g.version;for(let y=0,w=0;y<b;y+=3){let D=y+0,N=y+1,k=y+2;M[w++]=D,M[w++]=N,M[w++]=N,M[w++]=k,M[w++]=k,M[w++]=D}}v.version=p;let E=s.get(m);E&&e.remove(E),s.set(m,v)}function f(m){let x=s.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&h(m)}else h(m);return s.get(m)}function d(){for(let m in r){let x=r[m].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function Ow(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,h*o,d),t.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Uw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fw(n,e,t){let i=new WeakMap,r=new wt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let D=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*M*4*h),y=new _a(E,v,M,h);y.type=Wn,y.needsUpdate=!0;let w=S*4;for(let N=0;N<h;N++){let k=g[N],q=p[N],z=b[N],O=v*M*4*N;for(let Y=0;Y<k.count;Y++){let ee=Y*w;d===!0&&(r.fromBufferAttribute(k,Y),E[O+ee+0]=r.x,E[O+ee+1]=r.y,E[O+ee+2]=r.z,E[O+ee+3]=0),m===!0&&(r.fromBufferAttribute(q,Y),E[O+ee+4]=r.x,E[O+ee+5]=r.y,E[O+ee+6]=r.z,E[O+ee+7]=0),x===!0&&(r.fromBufferAttribute(z,Y),E[O+ee+8]=r.x,E[O+ee+9]=r.y,E[O+ee+10]=r.z,E[O+ee+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new Xe(v,M)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Bw(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var kw={[Ff]:"LINEAR_TONE_MAPPING",[Bf]:"REINHARD_TONE_MAPPING",[kf]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Hf]:"AGX_TONE_MAPPING",[Vf]:"NEUTRAL_TONE_MAPPING",[zf]:"CUSTOM_TONE_MAPPING"};function zw(n,e,t,i,r,s){let o=new on(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new kt;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ht(u,h),d=new Pi(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,b=null,S=[],v=!1;this.setSize=function(M,E){o.setSize(M,E),a!==null&&a.setSize(M,E),l!==null&&l.setSize(M,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(M,E)}},this.setEffects=function(M){S=M,v=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new on(E,y,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new on(E,y,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&S.some(D=>D.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Er(E,y),s===!0&&(c.format=Ir,c.type=Is)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let D=0;D<S.length;D++){let N=S[D];N.setSize&&N.setSize(E,y),w&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(M,E){if(g||M.toneMapping===mi&&S.length===0)return!1;if(b=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return v===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(M,E){M.toneMapping=p,g=!0;let y=o,w=a;for(let D=0;D<S.length;D++){let N=S[D];N.enabled!==!1&&(N.render(M,w,y,E),N.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},mt.getTransfer(m)===Dt&&(h.defines.SRGB_TRANSFER="");let D=kw[x];D&&(h.defines[D]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(b),M.render(f,d),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var E0=new hn,T0=new Er(1,1),A0=new Ca(1),R0=new _a,C0=new Ac,P0=new Ra,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),l0=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nu(n,e){let t=s0[e];t===void 0&&(t=new Int32Array(e),s0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function Gw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function Ww(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function Xw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;l0.set(i),n.uniformMatrix2fv(this.addr,!1,l0),pn(t,i)}}function qw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;a0.set(i),n.uniformMatrix3fv(this.addr,!1,a0),pn(t,i)}}function $w(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;o0.set(i),n.uniformMatrix4fv(this.addr,!1,o0),pn(t,i)}}function Yw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function jw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function Jw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function eE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function tE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function Ou(n){return n.version===0&&(n.compareFunction=Qf,n.needsUpdate=!0),n}function nE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Ou(T0):s=E0,t.setTexture2D(e||s,r)}function iE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||C0,r)}function rE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Ou(A0):s=P0,t.setTextureCube(e||s,r)}function sE(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||R0,r)}function oE(n){switch(n){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return Ww;case 35674:return Xw;case 35675:return qw;case 35676:return $w;case 5124:case 35670:return Yw;case 35667:case 35671:return Zw;case 35668:case 35672:return Kw;case 35669:case 35673:return jw;case 5125:return Jw;case 36294:return Qw;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}function aE(n,e){n.uniform1fv(this.addr,e)}function lE(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function cE(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function uE(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function hE(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fE(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dE(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pE(n,e){n.uniform1iv(this.addr,e)}function mE(n,e){n.uniform2iv(this.addr,e)}function gE(n,e){n.uniform3iv(this.addr,e)}function xE(n,e){n.uniform4iv(this.addr,e)}function yE(n,e){n.uniform1uiv(this.addr,e)}function _E(n,e){n.uniform2uiv(this.addr,e)}function vE(n,e){n.uniform3uiv(this.addr,e)}function bE(n,e){n.uniform4uiv(this.addr,e)}function ME(n,e,t){let i=this.cache,r=e.length,s=Nu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ou(T0):o=E0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function SE(n,e,t){let i=this.cache,r=e.length,s=Nu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||C0,s[o])}function wE(n,e,t){let i=this.cache,r=e.length,s=Nu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ou(A0):o=P0;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function EE(n,e,t){let i=this.cache,r=e.length,s=Nu(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||R0,s[o])}function TE(n){switch(n){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return hE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return _E;case 36295:return vE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return EE}}var fd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oE(t.type)}},dd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TE(t.type)}},pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ud=/(\w+)(\])?(\[|\.)?/g;function c0(n,e){n.seq.push(e),n.map[e.id]=e}function AE(n,e,t){let i=n.name,r=i.length;for(ud.lastIndex=0;;){let s=ud.exec(i),o=ud.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){c0(t,c===void 0?new fd(a,n,e):new dd(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new pd(a),c0(t,h)),t=h}}}var ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);AE(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function u0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var RE=37297,CE=0;function PE(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var h0=new lt;function IE(n){mt._getMatrix(h0,mt.workingColorSpace,n);let e=`mat3( ${h0.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function f0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+PE(n.getShaderSource(e),a)}else return s}function LE(n,e){let t=IE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var DE={[Ff]:"Linear",[Bf]:"Reinhard",[kf]:"Cineon",[No]:"ACESFilmic",[Hf]:"AgX",[Vf]:"Neutral",[zf]:"Custom"};function NE(n,e){let t=DE[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lu=new I;function OE(){mt.getLuminanceCoefficients(Lu);let n=Lu.x.toFixed(4),e=Lu.y.toFixed(4),t=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function FE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sl(n){return n!==""}function d0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function p0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(n){return n.replace(kE,zE)}function zE(n,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return md(t)}var HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(n){return n.replace(HE,VE)}function VE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var GE={[Xa]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function WE(n){return GE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XE={[Oo]:"ENVMAP_MODE_REFRACTION"};function qE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":XE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $E={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Ng]:"ENVMAP_BLENDING_MIX",[Og]:"ENVMAP_BLENDING_ADD"};function YE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$E[n.combine]||"ENVMAP_BLENDING_NONE"}function ZE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=WE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=qE(t),h=YE(t),f=UE(t),d=FE(s),m=r.createProgram(),x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(sl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(sl).join(`
`),g.length>0&&(g+=`
`)):(x=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),g=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?dt.tonemapping_pars_fragment:"",t.toneMapping!==mi?NE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,LE("linearToOutputTexel",t.outputColorSpace),OE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sl).join(`
`)),o=md(o),o=d0(o,t),o=p0(o,t),a=md(a),a=d0(a,t),a=p0(a,t),o=m0(o),a=m0(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=p+x+o,S=p+g+a,v=u0(r,r.VERTEX_SHADER,b),M=u0(r,r.FRAGMENT_SHADER,S);r.attachShader(m,v),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(N){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(m)||"",q=r.getShaderInfoLog(v)||"",z=r.getShaderInfoLog(M)||"",O=k.trim(),Y=q.trim(),ee=z.trim(),j=!0,ye=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,v,M);else{let ie=f0(r,v,"vertex"),V=f0(r,M,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+ie+`
`+V)}else O!==""?nt("WebGLProgram: Program Info Log:",O):(Y===""||ee==="")&&(ye=!1);ye&&(N.diagnostics={runnable:j,programLog:O,vertexShader:{log:Y,prefix:x},fragmentShader:{log:ee,prefix:g}})}r.deleteShader(v),r.deleteShader(M),y=new ko(r,m),w=BE(r,m)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,RE)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=M,this}var KE=0,gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xd(e),t.set(e,i)),i}},xd=class{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}};function jE(n){return n===ns||n===Qa||n===el}function JE(n,e,t,i,r,s){let o=new So,a=new gd,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,D,N,k,q){let z=N.fog,O=k.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||Y,ee),ye=f[y.type],ie=i.precision;y.precision!==null&&(ie=i.getMaxPrecision(y.precision),ie!==y.precision&&nt("WebGLProgram.getParameters:",y.precision,"not supported, using",ie,"instead."));let V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=V!==void 0?V.length:0,we=0;O.morphAttributes.position!==void 0&&(we=1),O.morphAttributes.normal!==void 0&&(we=2),O.morphAttributes.color!==void 0&&(we=3);let Ne,Q,_e,oe;if(ye){let De=Xn[ye];Ne=De.vertexShader,Q=De.fragmentShader}else{Ne=y.vertexShader,Q=y.fragmentShader;let De=a.getVertexShaderStage(y),ot=a.getFragmentShaderStage(y);a.update(y,De,ot),_e=De.id,oe=ot.id}let H=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,We=k.isBatchedMesh===!0,Oe=!!y.map,Ge=!!y.matcap,tt=!!j,He=tt&&j.isPMREMTexture===!0,Mt=!!y.aoMap,ut=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,Ke=!!y.normalMap,vt=!!y.displacementMap,me=!!y.emissiveMap,Qe=!!y.metalnessMap,et=!!y.roughnessMap,Se=y.anisotropy>0,C=y.clearcoat>0,re=y.diffuseRoughness>0,K=y.dispersion>0,Pe=y.retroreflectivity>0,J=y.iridescence>0,be=y.sheen>0,xe=y.transmission>0,Le=Se&&!!y.anisotropyMap,P=C&&!!y.clearcoatMap,T=C&&!!y.clearcoatNormalMap,Z=C&&!!y.clearcoatRoughnessMap,ge=re&&!!y.diffuseRoughnessMap,de=J&&!!y.iridescenceMap,he=J&&!!y.iridescenceThicknessMap,Me=be&&!!y.sheenColorMap,ce=be&&!!y.sheenRoughnessMap,ue=!!y.specularMap,B=!!y.specularColorMap,L=!!y.specularIntensityMap,W=xe&&!!y.transmissionMap,G=xe&&!!y.thicknessMap,pe=!!y.gradientMap,Ee=!!y.alphaMap,Ae=y.alphaTest>0,Re=!!y.alphaHash,Ue=!!y.extensions,$=mi;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($=n.toneMapping);let Ce=He?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,$e={shaderID:ye,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:Q,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ie,batching:We,batchingColor:We&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:Ge,envMap:tt,envMapMode:tt&&j.mapping,envMapPMREM:He,envMapMaxLod:He?Ce.length-1:null,envMapSize:He?Ce[0].width:null,aoMap:Mt,lightMap:ut,bumpMap:pt,normalMap:Ke,displacementMap:vt,emissiveMap:me,normalMapObjectSpace:Ke&&y.normalMapType===kg,normalMapTangentSpace:Ke&&y.normalMapType===nl,packedNormalMap:Ke&&y.normalMapType===nl&&jE(y.normalMap.format),metalnessMap:Qe,roughnessMap:et,anisotropy:Se,anisotropyMap:Le,clearcoat:C,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:Z,diffuseRoughness:re,diffuseRoughnessMap:ge,dispersion:K,retroreflection:Pe,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:he,sheen:be,sheenColorMap:Me,sheenRoughnessMap:ce,specularMap:ue,specularColorMap:B,specularIntensityMap:L,transmission:xe,transmissionMap:W,thicknessMap:G,gradientMap:pe,opaque:y.transparent===!1&&y.blending===Yi&&y.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ae,alphaHash:Re,combine:y.combine,mapUv:Oe&&d(y.map.channel),aoMapUv:Mt&&d(y.aoMap.channel),lightMapUv:ut&&d(y.lightMap.channel),bumpMapUv:pt&&d(y.bumpMap.channel),normalMapUv:Ke&&d(y.normalMap.channel),displacementMapUv:vt&&d(y.displacementMap.channel),emissiveMapUv:me&&d(y.emissiveMap.channel),metalnessMapUv:Qe&&d(y.metalnessMap.channel),roughnessMapUv:et&&d(y.roughnessMap.channel),anisotropyMapUv:Le&&d(y.anisotropyMap.channel),clearcoatMapUv:P&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(y.sheenRoughnessMap.channel),specularMapUv:ue&&d(y.specularMap.channel),specularColorMapUv:B&&d(y.specularColorMap.channel),specularIntensityMapUv:L&&d(y.specularIntensityMap.channel),transmissionMapUv:W&&d(y.transmissionMap.channel),thicknessMapUv:G&&d(y.thicknessMap.channel),alphaMapUv:Ee&&d(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ke||Se),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Oe||Ee),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&Ke===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:te,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.filter(De=>De.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Dt,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===Dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&y.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function x(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)w.push(D),w.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(w,y),p(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let w=f[y.type],D;if(w){let N=Xn[w];D=il.clone(N.uniforms)}else D=y.uniforms;return D}function S(y,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new ZE(n,w,y,r),c.push(D),u.set(w,D)),D}function v(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:b,acquireProgram:S,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:E}}function QE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function y0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function l(f,d,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let S=a(f,d,m,x,g,p);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):t.push(S)}function c(f,d,m,x,g,p){let b=a(f,d,m,x,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?r.unshift(b):t.unshift(b)}function u(f,d){t.length>1&&t.sort(f||e1),i.length>1&&i.sort(d||x0),r.length>1&&r.sort(d||x0)}function h(){for(let f=e,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function t1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new y0,n.set(i,[o])):r>=s.length?(o=new y0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function n1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function i1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var r1=0;function s1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function o1(n){let e=new n1,t=i1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new it,o=new it;function a(c){let u=0,h=0,f=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,S=0,v=0,M=0,E=0,y=0,w=0,D=0,N=0;c.sort(s1);for(let q=0,z=c.length;q<z;q++){let O=c[q],Y=O.color,ee=O.intensity,j=O.distance,ye=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ns?ye=O.shadow.map.texture:ye=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=Y.r*ee,h+=Y.g*ee,f+=Y.b*ee;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(O.sh.coefficients[ie],ee);N++}else if(O.isSunLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let V=O.shadow,ne=t.get(O);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[m]=ne,i.sunShadowMap[m]=ye;let we=V.getViewportCount();for(let Ne=0;Ne<we;Ne++)i.sunShadowMatrix[x+Ne]=V.getMatrix(Ne),i.sunShadowCascade[x+Ne]=V._cascadeData[Ne];x+=we,m++}i.sun[d]=ie,d++}else if(O.isDirectionalLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let V=O.shadow,ne=t.get(O);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=ye,i.directionalShadowMatrix[g]=O.shadow.matrix,M++}i.directional[g]=ie,g++}else if(O.isSpotLight){let ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(Y).multiplyScalar(ee),ie.distance=j,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,i.spot[b]=ie;let V=O.shadow;if(O.map&&(i.spotLightMap[w]=O.map,w++,V.updateMatrices(O),O.castShadow&&D++),i.spotLightMatrix[b]=V.matrix,O.castShadow){let ne=t.get(O);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,i.spotShadow[b]=ne,i.spotShadowMap[b]=ye,y++}b++}else if(O.isRectAreaLight){let ie=e.get(O);ie.color.copy(Y).multiplyScalar(ee),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=ie,S++}else if(O.isPointLight){let ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){let V=O.shadow,ne=t.get(O);ne.shadowIntensity=V.intensity,ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ye,i.pointShadowMatrix[p]=O.shadow.matrix,E++}i.point[p]=ie,p++}else if(O.isHemisphereLight){let ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(ee),ie.groundColor.copy(O.groundColor).multiplyScalar(ee),i.hemi[v]=ie,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let k=i.hash;(k.sunLength!==d||k.directionalLength!==g||k.pointLength!==p||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==v||k.numSunShadows!==m||k.numDirectionalShadows!==M||k.numPointShadows!==E||k.numSpotShadows!==y||k.numSpotMaps!==w||k.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=g,i.spot.length=b,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+w-D,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=N,k.sunLength=d,k.directionalLength=g,k.pointLength=p,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=v,k.numSunShadows=m,k.numDirectionalShadows=M,k.numPointShadows=E,k.numSpotShadows=y,k.numSpotMaps=w,k.numLightProbes=N,i.version=r1++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let v=c[b];if(v.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function _0(n){let e=new o1(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function l(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function a1(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new _0(n),e.set(r,[a])):s>=o.length?(a=new _0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var l1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
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
}`,u1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],h1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],v0=new it,rl=new I,hd=new I;function f1(n,e,t){let i=new Yr,r=new Xe,s=new Xe,o=new wt,a=new Lc,l=new Dc,c={},u=t.maxTextureSize,h={[ii]:Sn,[Sn]:ii,[Ot]:Ot},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:l1,fragmentShader:c1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new kt;m.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let p=this.type;this.render=function(E,y,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===_g&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xa);let D=n.getRenderTarget(),N=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),q=n.state;q.setBlending(pi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=p!==this.type;z&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Y=E.length;O<Y;O++){let ee=E[O],j=ee.shadow;if(j===void 0){nt("WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let ye=j.getFrameExtents();r.multiply(ye),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ye.x),r.x=s.x*ye.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ye.y),r.y=s.y*ye.y,j.mapSize.y=s.y));let ie=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ie,j.map===null||z===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Lo){if(ee.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new on(r.x,r.y,{format:ns,type:Zn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),j.map.texture.name=ee.name+".shadowMap",j.map.depthTexture=new Er(r.x,r.y,Wn),j.map.depthTexture.name=ee.name+".shadowMapDepth",j.map.depthTexture.format=br,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=$t,j.map.depthTexture.magFilter=$t}else ee.isPointLight?(j.map=new ol(r.x),j.map.depthTexture=new Ca(r.x,Li)):(j.map=new on(r.x,r.y),j.map.depthTexture=new Er(r.x,r.y,Li)),j.map.depthTexture.name=ee.name+".shadowMap",j.map.depthTexture.format=br,this.type===Xa?(j.map.depthTexture.compareFunction=ie?Jf:jf,j.map.depthTexture.minFilter=Yt,j.map.depthTexture.magFilter=Yt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=$t,j.map.depthTexture.magFilter=$t);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);let V=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ee.isPointLight!==!0&&j.updateMatrices(ee,w);let ne=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:w.layers;for(let we=0;we<V;we++){let Ne=j.getCamera(we);if(ee.isPointLight){let Q=j.camera,_e=j.matrix,oe=ee.distance||Q.far;oe!==Q.far&&(Q.far=oe,Q.updateProjectionMatrix()),rl.setFromMatrixPosition(ee.matrixWorld),Q.position.copy(rl),hd.copy(Q.position),hd.add(u1[we]),Q.up.copy(h1[we]),Q.lookAt(hd),Q.updateMatrixWorld(),_e.makeTranslation(-rl.x,-rl.y,-rl.z),v0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(v0,Q.coordinateSystem,Q.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,we),n.clear();else{we===0&&(n.setRenderTarget(j.map),n.clear());let Q=j.getViewport(we);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),q.viewport(o)}i=j.getFrustum(we),v(y,w,Ne,ee,ne,this.type)}j.isPointLightShadow!==!0&&this.type===Lo&&b(j,w),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(D,N,k)};function b(E,y){let w=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(r.x,r.y,{format:ns,type:Zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(y,null,w,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(y,null,w,d,x,null)}function S(E,y,w,D){let N=null,k=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)N=k;else if(N=w.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let q=N.uuid,z=y.uuid,O=c[q];O===void 0&&(O={},c[q]=O);let Y=O[z];Y===void 0&&(Y=N.clone(),O[z]=Y,y.addEventListener("dispose",M)),N=Y}if(N.visible=y.visible,N.wireframe=y.wireframe,D===Lo?N.side=y.shadowSide!==null?y.shadowSide:y.side:N.side=y.shadowSide!==null?y.shadowSide:h[y.side],N.alphaMap=y.alphaMap,N.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,N.map=y.map,N.clipShadows=y.clipShadows,N.clippingPlanes=y.clippingPlanes,N.clipIntersection=y.clipIntersection,N.displacementMap=y.displacementMap,N.displacementScale=y.displacementScale,N.displacementBias=y.displacementBias,N.wireframeLinewidth=y.wireframeLinewidth,N.linewidth=y.linewidth,w.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let q=n.properties.get(N);q.light=w}return N}function v(E,y,w,D,N,k){if(E.visible===!1)return;if(E.layers.test(N)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Lo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let ee=O.groups;for(let j=0,ye=ee.length;j<ye;j++){let ie=ee[j],V=Y[ie.materialIndex];if(V&&V.visible){let ne=S(E,V,D,k);E.onBeforeShadow(n,E,y,w,O,ne,ie),n.renderBufferDirect(w,null,O,ne,E,ie),E.onAfterShadow(n,E,y,w,O,ne,ie)}}}else if(Y.visible){let ee=S(E,Y,D,k);E.onBeforeShadow(n,E,y,w,O,ee,null),n.renderBufferDirect(w,null,O,ee,E,null),E.onAfterShadow(n,E,y,w,O,ee,null)}}let z=E.children;for(let O=0,Y=z.length;O<Y;O++)v(z[O],y,w,D,N,k)}function M(E){E.target.removeEventListener("dispose",M);for(let w in c){let D=c[w],N=E.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}function d1(n,e){function t(){let L=!1,W=new wt,G=null,pe=new wt(0,0,0,0);return{setMask:function(Ee){G!==Ee&&!L&&(n.colorMask(Ee,Ee,Ee,Ee),G=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,Ae,Re,Ue,$){$===!0&&(Ee*=Ue,Ae*=Ue,Re*=Ue),W.set(Ee,Ae,Re,Ue),pe.equals(W)===!1&&(n.clearColor(Ee,Ae,Re,Ue),pe.copy(W))},reset:function(){L=!1,G=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,W=!1,G=null,pe=null,Ee=null;return{setReversed:function(Ae){if(W!==Ae){let Re=e.get("EXT_clip_control");Ae?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),W=Ae;let Ue=Ee;Ee=null,this.setClear(Ue)}},getReversed:function(){return W},setTest:function(Ae){Ae?te(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Ae){G!==Ae&&!L&&(n.depthMask(Ae),G=Ae)},setFunc:function(Ae){if(W&&(Ae=Zg[Ae]),pe!==Ae){switch(Ae){case yc:n.depthFunc(n.NEVER);break;case _c:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case xo:n.depthFunc(n.LEQUAL);break;case bc:n.depthFunc(n.EQUAL);break;case Mc:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Ee!==Ae&&(Ee=Ae,W&&(Ae=1-Ae),n.clearDepth(Ae))},reset:function(){L=!1,G=null,pe=null,Ee=null,W=!1}}}function r(){let L=!1,W=null,G=null,pe=null,Ee=null,Ae=null,Re=null,Ue=null,$=null;return{setTest:function(Ce){L||(Ce?te(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Ce){W!==Ce&&!L&&(n.stencilMask(Ce),W=Ce)},setFunc:function(Ce,$e,De){(G!==Ce||pe!==$e||Ee!==De)&&(n.stencilFunc(Ce,$e,De),G=Ce,pe=$e,Ee=De)},setOp:function(Ce,$e,De){(Ae!==Ce||Re!==$e||Ue!==De)&&(n.stencilOp(Ce,$e,De),Ae=Ce,Re=$e,Ue=De)},setLocked:function(Ce){L=Ce},setClear:function(Ce){$!==Ce&&(n.clearStencil(Ce),$=Ce)},reset:function(){L=!1,W=null,G=null,pe=null,Ee=null,Ae=null,Re=null,Ue=null,$=null}}}let s=new t,o=new i,a=new r,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,S=null,v=null,M=null,E=null,y=null,w=new qe(0,0,0),D=0,N=!1,k=null,q=null,z=null,O=null,Y=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ye=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(ie)[1]),j=ye>=1):ie.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),j=ye>=2);let V=null,ne={},we=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Q=new wt().fromArray(we),_e=new wt().fromArray(Ne);function oe(L,W,G,pe){let Ee=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(L,Ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<G;Re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(W+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Ae}let H={};H[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),H[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),H[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(xo),pt(!1),Ke(Df),te(n.CULL_FACE),Mt(pi);function te(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ie(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function We(L,W){return f[L]!==W?(n.bindFramebuffer(L,W),f[L]=W,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=W),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=W),!0):!1}function Oe(L,W){let G=m,pe=!1;if(L){G=d.get(W),G===void 0&&(G=[],d.set(W,G));let Ee=L.textures;if(G.length!==Ee.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Re=Ee.length;Ae<Re;Ae++)G[Ae]=n.COLOR_ATTACHMENT0+Ae;G.length=Ee.length,pe=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,pe=!0);pe&&n.drawBuffers(G)}function Ge(L){return x!==L?(n.useProgram(L),x=L,!0):!1}let tt={[Ii]:n.FUNC_ADD,[vg]:n.FUNC_SUBTRACT,[bg]:n.FUNC_REVERSE_SUBTRACT};tt[Mg]=n.MIN,tt[Sg]=n.MAX;let He={[qa]:n.ZERO,[ts]:n.ONE,[wg]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[Cg]:n.SRC_ALPHA_SATURATE,[Ag]:n.DST_COLOR,[Tg]:n.DST_ALPHA,[Eg]:n.ONE_MINUS_SRC_COLOR,[Do]:n.ONE_MINUS_SRC_ALPHA,[Rg]:n.ONE_MINUS_DST_COLOR,[Ya]:n.ONE_MINUS_DST_ALPHA,[Pg]:n.CONSTANT_COLOR,[Ig]:n.ONE_MINUS_CONSTANT_COLOR,[Lg]:n.CONSTANT_ALPHA,[Dg]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,W,G,pe,Ee,Ae,Re,Ue,$,Ce){if(L===pi){g===!0&&(Ie(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),L!==Vc){if(L!==p||Ce!==N){if((b!==Ii||M!==Ii)&&(n.blendEquation(n.FUNC_ADD),b=Ii,M=Ii),Ce)switch(L){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nf:n.blendFunc(n.ONE,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Of:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uf:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}S=null,v=null,E=null,y=null,w.set(0,0,0),D=0,p=L,N=Ce}return}Ee=Ee||W,Ae=Ae||G,Re=Re||pe,(W!==b||Ee!==M)&&(n.blendEquationSeparate(tt[W],tt[Ee]),b=W,M=Ee),(G!==S||pe!==v||Ae!==E||Re!==y)&&(n.blendFuncSeparate(He[G],He[pe],He[Ae],He[Re]),S=G,v=pe,E=Ae,y=Re),(Ue.equals(w)===!1||$!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,$),w.copy(Ue),D=$),p=L,N=!1}function ut(L,W){L.side===Ot?Ie(n.CULL_FACE):te(n.CULL_FACE);let G=L.side===Sn;W&&(G=!G),pt(G),L.blending===Yi&&L.transparent===!1?Mt(pi):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){k!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),k=L)}function Ke(L){L!==xg?(te(n.CULL_FACE),L!==q&&(L===Df?n.cullFace(n.BACK):L===yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),q=L}function vt(L){L!==z&&(j&&n.lineWidth(L),z=L)}function me(L,W,G){L?(te(n.POLYGON_OFFSET_FILL),(O!==W||Y!==G)&&(O=W,Y=G,o.getReversed()&&(W=-W,G=-G),n.polygonOffset(W,G))):Ie(n.POLYGON_OFFSET_FILL)}function Qe(L){L?te(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function et(L){L===void 0&&(L=n.TEXTURE0+ee-1),V!==L&&(n.activeTexture(L),V=L)}function Se(L,W,G){G===void 0&&(V===null?G=n.TEXTURE0+ee-1:G=V);let pe=ne[G];pe===void 0&&(pe={type:void 0,texture:void 0},ne[G]=pe),(pe.type!==L||pe.texture!==W)&&(V!==G&&(n.activeTexture(G),V=G),n.bindTexture(L,W||H[L]),pe.type=L,pe.texture=W)}function C(){let L=ne[V];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Pe(){try{n.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function J(){try{n.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function be(){try{n.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Le(){try{n.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function P(){try{n.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function T(){try{n.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function Z(){try{n.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function ge(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function de(L,W){h[L]!==W&&(n.pixelStorei(L,W),h[L]=W)}function he(L){Q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function Me(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ce(L,W){let G=c.get(W);G===void 0&&(G=new WeakMap,c.set(W,G));let pe=G.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(W,L.name),n.uniformBlockBinding(W,pe,pe),G.set(L,pe))}function ue(L,W,G){let Ee=c.get(W).get(L);l[Ee]!==G&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ee,G),l[Ee]=G)}function B(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,ne={},f={},l={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,S=null,v=null,M=null,E=null,y=null,w=new qe(0,0,0),D=0,N=!1,k=null,q=null,z=null,O=null,Y=null,Q.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Ie,bindFramebuffer:We,drawBuffers:Oe,useProgram:Ge,setBlending:Mt,setMaterial:ut,setFlipSided:pt,setCullFace:Ke,setLineWidth:vt,setPolygonOffset:me,setScissorTest:Qe,activeTexture:et,bindTexture:Se,unbindTexture:C,compressedTexImage2D:re,compressedTexImage3D:K,texImage2D:T,texImage3D:Z,pixelStorei:de,getParameter:ge,updateUBOMapping:ce,uniformBlockBinding:ue,texStorage2D:Le,texStorage3D:P,texSubImage2D:Pe,texSubImage3D:J,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:he,viewport:Me,reset:B}}function p1(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,x=new FinalizationRegistry(P=>m.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return g?new OffscreenCanvas(P,T):vo("canvas")}function b(P,T,Z){let ge=1,de=Le(P);if((de.width>Z||de.height>Z)&&(ge=Z/Math.max(de.width,de.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(ge*de.width),Me=Math.floor(ge*de.height);f===void 0&&(f=p(he,Me));let ce=T?p(he,Me):f;return ce.width=he,ce.height=Me,ce.getContext("2d").drawImage(P,0,0,he,Me),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+he+"x"+Me+")."),ce}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,T,Z,ge,de,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Me;ge&&(Me=e.get("EXT_texture_norm16"),Me||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=T;if(T===n.RED&&(Z===n.FLOAT&&(ce=n.R32F),Z===n.HALF_FLOAT&&(ce=n.R16F),Z===n.UNSIGNED_BYTE&&(ce=n.R8),Z===n.UNSIGNED_SHORT&&Me&&(ce=Me.R16_EXT),Z===n.SHORT&&Me&&(ce=Me.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.R8UI),Z===n.UNSIGNED_SHORT&&(ce=n.R16UI),Z===n.UNSIGNED_INT&&(ce=n.R32UI),Z===n.BYTE&&(ce=n.R8I),Z===n.SHORT&&(ce=n.R16I),Z===n.INT&&(ce=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(ce=n.RG32F),Z===n.HALF_FLOAT&&(ce=n.RG16F),Z===n.UNSIGNED_BYTE&&(ce=n.RG8),Z===n.UNSIGNED_SHORT&&Me&&(ce=Me.RG16_EXT),Z===n.SHORT&&Me&&(ce=Me.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RG16UI),Z===n.UNSIGNED_INT&&(ce=n.RG32UI),Z===n.BYTE&&(ce=n.RG8I),Z===n.SHORT&&(ce=n.RG16I),Z===n.INT&&(ce=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),Z===n.UNSIGNED_INT&&(ce=n.RGB32UI),Z===n.BYTE&&(ce=n.RGB8I),Z===n.SHORT&&(ce=n.RGB16I),Z===n.INT&&(ce=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ce=n.RGBA32UI),Z===n.BYTE&&(ce=n.RGBA8I),Z===n.SHORT&&(ce=n.RGBA16I),Z===n.INT&&(ce=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&Me&&(ce=Me.RGB16_EXT),Z===n.SHORT&&Me&&(ce=Me.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),T===n.RGBA){let ue=he?xa:mt.getTransfer(de);Z===n.FLOAT&&(ce=n.RGBA32F),Z===n.HALF_FLOAT&&(ce=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ce=ue===Dt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Me&&(ce=Me.RGBA16_EXT),Z===n.SHORT&&Me&&(ce=Me.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(P,T){let Z;return P?T===null||T===Li||T===Is?Z=n.DEPTH24_STENCIL8:T===Wn?Z=n.DEPTH32F_STENCIL8:T===Fo&&(Z=n.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Is?Z=n.DEPTH_COMPONENT24:T===Wn?Z=n.DEPTH_COMPONENT32F:T===Fo&&(Z=n.DEPTH_COMPONENT16),Z}function w(P,T){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==$t&&P.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function D(P){let T=new WeakRef(P);i.get(P).__ref=T,m.add(T),x.register(P,T,T)}function N(P){let T=i.get(P).__ref;T!==void 0&&(m.delete(T),x.unregister(T))}function k(P){z(P.target)}function q(P){O(P.target)}function z(P){P.removeEventListener("dispose",k),N(P),ee(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&h.delete(P)}function O(P){P.removeEventListener("dispose",q),N(P),ye(P)}function Y(){for(let P of m){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):z(T))}m.clear(),h.clear()}function ee(P){let T=i.get(P);if(T.__webglInit===void 0)return;let Z=P.source,ge=d.get(Z);if(ge){let de=ge[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&j(P),Object.keys(ge).length===0&&d.delete(Z)}i.remove(P)}function j(P){let T=i.get(P);n.deleteTexture(T.__webglTexture);let Z=P.source,ge=d.get(Z);delete ge[T.__cacheKey],o.memory.textures--}function ye(P){let T=i.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Z=P.depthTexture;if(Z&&Z.renderTarget===P&&z(Z),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let he=0;he<T.__webglFramebuffer[de].length;he++)n.deleteFramebuffer(T.__webglFramebuffer[de][he]);else n.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)n.deleteFramebuffer(T.__webglFramebuffer[de]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ge=P.textures;for(let de=0,he=ge.length;de<he;de++){let Me=i.get(ge[de]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(ge[de])}i.remove(P)}let ie=0;function V(){ie=0}function ne(){return ie}function we(P){ie=P}function Ne(){let P=ie;return P>=r.maxTextures&&nt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),ie+=1,P}function Q(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function _e(P,T){let Z=i.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){let ge=P.image;if(ge===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Z,P,T);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function oe(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ut(Z,P,T);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function H(P,T){let Z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){ut(Z,P,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function te(P,T){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){pt(Z,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}let Ie={[Ri]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},We={[$t]:n.NEAREST,[qc]:n.NEAREST_MIPMAP_NEAREST,[Ps]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Uo]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Oe={[Hg]:n.NEVER,[Qf]:n.ALWAYS,[Vg]:n.LESS,[jf]:n.LEQUAL,[Gg]:n.EQUAL,[Jf]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function Ge(P,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===Uo||T.magFilter===Ps||T.magFilter===gi||T.minFilter===Yt||T.minFilter===Uo||T.minFilter===Ps||T.minFilter===gi)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Ie[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ie[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ie[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,We[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,We[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==Ps&&T.minFilter!==gi||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function tt(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",k),D(T));let ge=T.source,de=d.get(ge);de===void 0&&(de={},d.set(ge,de));let he=Q(T);if(he!==P.__cacheKey){de[he]===void 0&&(de[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),de[he].usedTimes++;let Me=de[P.__cacheKey];Me!==void 0&&(de[P.__cacheKey].usedTimes--,Me.usedTimes===0&&j(T)),P.__cacheKey=he,P.__webglTexture=de[he].texture}return Z}function He(P,T,Z){return Math.floor(Math.floor(P/Z)/T)}function Mt(P,T,Z,ge){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,ge,T.data);else{he.sort((L,W)=>L.start-W.start);let Me=0;for(let L=1;L<he.length;L++){let W=he[Me],G=he[L],pe=W.start+W.count,Ee=He(G.start,T.width,4),Ae=He(W.start,T.width,4);G.start<=pe+1&&Ee===Ae&&He(G.start+G.count-1,T.width,4)===Ee?W.count=Math.max(W.count,G.start+G.count-W.start):(++Me,he[Me]=G)}he.length=Me+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),B=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let L=0,W=he.length;L<W;L++){let G=he[L],pe=Math.floor(G.start/4),Ee=Math.ceil(G.count/4),Ae=pe%T.width,Re=Math.floor(pe/T.width),Ue=Ee,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,Ae,Re,Ue,$,Z,ge,T.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,B)}}function ut(P,T,Z){let ge=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=n.TEXTURE_3D);let de=tt(P,T),he=T.source;t.bindTexture(ge,P.__webglTexture,n.TEXTURE0+Z);let Me=i.get(he);if(he.version!==Me.__version||de===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let $=mt.getPrimaries(mt.workingColorSpace),Ce=T.colorSpace===Di?null:mt.getPrimaries(T.colorSpace),$e=T.colorSpace===Di||$===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ue=b(T.image,!1,r.maxTextureSize);ue=xe(T,ue);let B=s.convert(T.format,T.colorSpace),L=s.convert(T.type),W=E(T.internalFormat,B,L,T.normalized,T.colorSpace,T.isVideoTexture);Ge(ge,T);let G,pe=T.mipmaps,Ee=T.isVideoTexture!==!0,Ae=Me.__version===void 0||de===!0,Re=he.dataReady,Ue=w(T,ue);if(T.isDepthTexture)W=y(T.format===Ir,T.type),Ae&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,W,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,W,ue.width,ue.height,0,B,L,null));else if(T.isDataTexture)if(pe.length>0){Ee&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ue,W,pe[0].width,pe[0].height);for(let $=0,Ce=pe.length;$<Ce;$++)G=pe[$],Ee?Re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,G.width,G.height,B,L,G.data):t.texImage2D(n.TEXTURE_2D,$,W,G.width,G.height,0,B,L,G.data);T.generateMipmaps=!1}else Ee?(Ae&&t.texStorage2D(n.TEXTURE_2D,Ue,W,ue.width,ue.height),Re&&Mt(T,ue,B,L)):t.texImage2D(n.TEXTURE_2D,0,W,ue.width,ue.height,0,B,L,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ee&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,W,pe[0].width,pe[0].height,ue.depth);for(let $=0,Ce=pe.length;$<Ce;$++)if(G=pe[$],T.format!==wn)if(B!==null)if(Ee){if(Re)if(T.layerUpdates.size>0){let $e=cd(G.width,G.height,T.format,T.type);for(let De of T.layerUpdates){let ot=G.data.subarray(De*$e/G.data.BYTES_PER_ELEMENT,(De+1)*$e/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,De,G.width,G.height,1,B,ot)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,G.width,G.height,ue.depth,B,G.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,W,G.width,G.height,ue.depth,0,G.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,G.width,G.height,ue.depth,B,L,G.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,W,G.width,G.height,ue.depth,0,B,L,G.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ee&&Ae&&t.texStorage2D(n.TEXTURE_2D,Ue,W,pe[0].width,pe[0].height);for(let $=0,Ce=pe.length;$<Ce;$++)G=pe[$],T.format!==wn?B!==null?Ee?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,G.width,G.height,B,G.data):t.compressedTexImage2D(n.TEXTURE_2D,$,W,G.width,G.height,0,G.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,G.width,G.height,B,L,G.data):t.texImage2D(n.TEXTURE_2D,$,W,G.width,G.height,0,B,L,G.data)}else if(T.isDataArrayTexture)if(Ee){if(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,W,ue.width,ue.height,ue.depth),Re)if(T.layerUpdates.size>0){let $=cd(ue.width,ue.height,T.format,T.type);for(let Ce of T.layerUpdates){let $e=ue.data.subarray(Ce*$/ue.data.BYTES_PER_ELEMENT,(Ce+1)*$/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ue.width,ue.height,1,B,L,$e)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,B,L,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,W,ue.width,ue.height,ue.depth,0,B,L,ue.data);else if(T.isData3DTexture)Ee?(Ae&&t.texStorage3D(n.TEXTURE_3D,Ue,W,ue.width,ue.height,ue.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,B,L,ue.data)):t.texImage3D(n.TEXTURE_3D,0,W,ue.width,ue.height,ue.depth,0,B,L,ue.data);else if(T.isFramebufferTexture){if(Ae)if(Ee)t.texStorage2D(n.TEXTURE_2D,Ue,W,ue.width,ue.height);else{let $=ue.width,Ce=ue.height;for(let $e=0;$e<Ue;$e++)t.texImage2D(n.TEXTURE_2D,$e,W,$,Ce,0,B,L,null),$>>=1,Ce>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ue.parentNode!==$){$.appendChild(ue),h.add(T),$.onpaint=Ce=>{let $e=Ce.changedElements;for(let De of h)$e.includes(De.image)&&(De.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{let $e=n.RGBA,De=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,$e,De,ot,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Ee&&Ae){let $=Le(pe[0]);t.texStorage2D(n.TEXTURE_2D,Ue,W,$.width,$.height)}for(let $=0,Ce=pe.length;$<Ce;$++)G=pe[$],Ee?Re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,B,L,G):t.texImage2D(n.TEXTURE_2D,$,W,B,L,G);T.generateMipmaps=!1}else if(Ee){if(Ae){let $=Le(ue);t.texStorage2D(n.TEXTURE_2D,Ue,W,$.width,$.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,B,L,ue)}else t.texImage2D(n.TEXTURE_2D,0,W,B,L,ue);S(T)&&T.mipmapsAutoUpdate===!0&&v(ge),Me.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function pt(P,T,Z){if(T.image.length!==6)return;let ge=tt(P,T),de=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);let he=i.get(de);if(de.version!==he.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);let Me=mt.getPrimaries(mt.workingColorSpace),ce=T.colorSpace===Di?null:mt.getPrimaries(T.colorSpace),ue=T.colorSpace===Di||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let B=T.isCompressedTexture||T.image[0].isCompressedTexture,L=T.image[0]&&T.image[0].isDataTexture,W=[];for(let De=0;De<6;De++)!B&&!L?W[De]=b(T.image[De],!0,r.maxCubemapSize):W[De]=L?T.image[De].image:T.image[De],W[De]=xe(T,W[De]);let G=W[0],pe=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),Ae=E(T.internalFormat,pe,Ee,T.normalized,T.colorSpace),Re=T.isVideoTexture!==!0,Ue=he.__version===void 0||ge===!0,$=de.dataReady,Ce=w(T,G);Ge(n.TEXTURE_CUBE_MAP,T);let $e;if(T.isDepthTexture){if(Ae=y(T.format===Ir,T.type),Ue)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ae,G.width,G.height);else for(let De=0;De<6;De++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,G.width,G.height,0,pe,Ee,null)}else if(B){Re&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ae,G.width,G.height);for(let De=0;De<6;De++){$e=W[De].mipmaps;for(let ot=0;ot<$e.length;ot++){let Pt=$e[ot];T.format!==wn?pe!==null?Re?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,0,0,Pt.width,Pt.height,pe,Pt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,Ae,Pt.width,Pt.height,0,Pt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,0,0,Pt.width,Pt.height,pe,Ee,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot,Ae,Pt.width,Pt.height,0,pe,Ee,Pt.data)}}}else{if($e=T.mipmaps,Re&&Ue){$e.length>0&&Ce++;let De=Le(W[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ae,De.width,De.height)}for(let De=0;De<6;De++)if(L){Re?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,W[De].width,W[De].height,pe,Ee,W[De].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,W[De].width,W[De].height,0,pe,Ee,W[De].data);for(let ot=0;ot<$e.length;ot++){let Xt=$e[ot].image[De].image;Re?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,0,0,Xt.width,Xt.height,pe,Ee,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,Ae,Xt.width,Xt.height,0,pe,Ee,Xt.data)}}else{Re?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,pe,Ee,W[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ae,pe,Ee,W[De]);for(let ot=0;ot<$e.length;ot++){let Pt=$e[ot];Re?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,0,0,pe,Ee,Pt.image[De]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,ot+1,Ae,pe,Ee,Pt.image[De])}}}S(T)&&T.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),he.__version=de.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ke(P,T,Z,ge,de,he){let Me=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ue=E(Z.internalFormat,Me,ce,Z.normalized,Z.colorSpace),B=i.get(T),L=i.get(Z);if(L.__renderTarget=T,!B.__hasExternalTextures){let W=Math.max(1,T.width>>he),G=Math.max(1,T.height>>he);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,he,ue,W,G,T.depth,0,Me,ce,null):t.texImage2D(de,he,ue,W,G,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,de,L.__webglTexture,0,Pe(T)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,de,L.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(P,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){let ge=T.depthTexture,de=ge&&ge.isDepthTexture?ge.type:null,he=y(T.stencilBuffer,de),Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;J(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(T),he,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(T),he,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,he,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{let ge=T.textures;for(let de=0;de<ge.length;de++){let he=ge[de],Me=s.convert(he.format,he.colorSpace),ce=s.convert(he.type),ue=E(he.internalFormat,Me,ce,he.normalized,he.colorSpace);J(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe(T),ue,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe(T),ue,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ue,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(P,T,Z){let ge=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(T.depthTexture);de.__renderTarget=T;let he=ge?T.depthTexture.image[0]:T.depthTexture.image;(!de.__webglTexture||he.width!==T.width||he.height!==T.height)&&(he.width=T.width,he.height=T.height,T.depthTexture.needsUpdate=!0),ge?te(T.depthTexture,0):_e(T.depthTexture,0);let Me=de.__webglTexture,ce=Pe(T),ue=ge?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,B=T.depthTexture.format===Ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===br)J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,ue,Me,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,B,ue,Me,0);else if(T.depthTexture.format===Ir)J(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,ue,Me,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,B,ue,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(P){let T=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let ge=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){let de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",de)};ge.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=ge}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)me(T.__webglFramebuffer[ge],P,ge);else P.texture.mipmaps.length>0?me(T.__webglFramebuffer[0],P,0):me(T.__webglFramebuffer,P,0);else if(Z){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=n.createRenderbuffer(),vt(T.__webglDepthbuffer[ge],P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),vt(T.__webglDepthbuffer,P,!1);else{let de=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,T,Z){let ge=i.get(P);T!==void 0&&Ke(ge.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Qe(P)}function Se(P){let T=P.texture,Z=i.get(P),ge=i.get(T);P.addEventListener("dispose",q),D(P);let de=P.textures,he=P.isWebGLCubeRenderTarget===!0,Me=de.length>1;if(Me||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=T.version,o.memory.textures++),he){Z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0){Z.__webglFramebuffer[ce]=[];for(let ue=0;ue<T.mipmaps.length;ue++)Z.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else Z.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)Z.__webglFramebuffer[ce]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,ue=de.length;ce<ue;ce++){let B=i.get(de[ce]);B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&J(P)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ce=0;ce<de.length;ce++){let ue=de[ce];Z.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);let B=s.convert(ue.format,ue.colorSpace),L=s.convert(ue.type),W=E(ue.internalFormat,B,L,ue.normalized,ue.colorSpace,P.isXRRenderTarget===!0),G=Pe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,G,W,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)Ke(Z.__webglFramebuffer[ce][ue],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else Ke(Z.__webglFramebuffer[ce],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(T)?v(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ce=0,ue=de.length;ce<ue;ce++){let B=de[ce],L=i.get(B),W=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(W,L.__webglTexture),Ge(W,B),Ke(Z.__webglFramebuffer,P,B,n.COLOR_ATTACHMENT0+ce,W,0),S(B)&&v(W)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ge.__webglTexture),Ge(ce,T),T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)Ke(Z.__webglFramebuffer[ue],P,T,n.COLOR_ATTACHMENT0,ce,ue);else Ke(Z.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ce,0);S(T)?v(ce):T.mipmaps.length>0&&n.texParameteri(ce,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Qe(P)}function C(P){let T=P.textures;for(let Z=0,ge=T.length;Z<ge;Z++){let de=T[Z];if(S(de)&&de.mipmapsAutoUpdate===!0){let he=M(P),Me=i.get(de).__webglTexture;t.bindTexture(he,Me),v(he),t.unbindTexture()}}}let re=[];function K(P){if(P.samples>0){if(J(P)===!1){let T=P.textures,Z=P.width,ge=P.height,de=n.COLOR_BUFFER_BIT,he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),ce=T.length>1;if(ce)for(let B=0;B<T.length;B++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let B=0;B<T.length;B++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[B]);let L=i.get(T[B]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,de,n.NEAREST),l===!0&&(re.length=0,re.push(n.COLOR_ATTACHMENT0+B),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&re.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let B=0;B<T.length;B++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,Me.__webglColorRenderbuffer[B]);let L=i.get(T[B]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Pe(P){return Math.min(r.maxSamples,P.samples)}function J(P){let T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(P){let T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function xe(P,T){let Z=P.colorSpace,ge=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Vn&&Z!==Di&&(mt.getTransfer(Z)===Dt?(ge!==wn||de!==Nn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",Z)),T}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=V,this.getTextureUnits=ne,this.setTextureUnits=we,this.setTexture2D=_e,this.setTexture2DArray=oe,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=et,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=J,this.dispose=Y}function m1(n,e){function t(i,r=Di){let s,o=mt.getTransfer(r);if(i===Nn)return n.UNSIGNED_BYTE;if(i===Yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$f)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===Zf)return n.RGB;if(i===wn)return n.RGBA;if(i===br)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===Za||i===Ka||i===ja||i===Ja)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eu||i===tu||i===nu||i===iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===su||i===ou||i===au||i===lu||i===Qa||i===cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ru||i===su)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ou)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===au)return s.COMPRESSED_R11_EAC;if(i===lu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Qa)return s.COMPRESSED_RG11_EAC;if(i===cu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu||i===xu||i===yu||i===_u||i===vu||i===bu||i===Mu||i===Su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mu)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Su)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wu||i===Eu||i===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wu)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Au||i===Ru||i===el||i===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
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

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new _n({vertexShader:g1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_d=class extends Ci{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new yd,p={},b=t.getContextAttributes(),S=null,v=null,M=[],E=[],y=new Xe,w=null,D=null,N=new un;N.viewport=new wt;let k=new un;k.viewport=new wt;let q=[N,k],z=new Hc,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _e=M[Q];return _e===void 0&&(_e=new wo,M[Q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Q){let _e=M[Q];return _e===void 0&&(_e=new wo,M[Q]=_e),_e.getGripSpace()},this.getHand=function(Q){let _e=M[Q];return _e===void 0&&(_e=new wo,M[Q]=_e),_e.getHandSpace()};function ee(Q){let _e=E.indexOf(Q.inputSource);if(_e===-1)return;let oe=M[_e];oe!==void 0&&(oe.update(Q.inputSource,Q.frame,c||o),oe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ye);for(let Q=0;Q<M.length;Q++){let _e=E[Q];_e!==null&&(E[Q]=null,M[Q].disconnect(_e))}O=null,Y=null,g.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(S),d=null,f=null,h=null,r=null,v=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ye),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,H=null,te=null;b.depth&&(te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?Ir:br,H=b.stencil?Is:Li);let Ie={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new on(f.textureWidth,f.textureHeight,{format:wn,type:Nn,depthTexture:new Er(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new on(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ye(Q){for(let _e=0;_e<Q.removed.length;_e++){let oe=Q.removed[_e],H=E.indexOf(oe);H>=0&&(E[H]=null,M[H].disconnect(oe))}for(let _e=0;_e<Q.added.length;_e++){let oe=Q.added[_e],H=E.indexOf(oe);if(H===-1){for(let Ie=0;Ie<M.length;Ie++)if(Ie>=E.length){E.push(oe),H=Ie;break}else if(E[Ie]===null){E[Ie]=oe,H=Ie;break}if(H===-1)break}let te=M[H];te&&te.connect(oe)}}function ie(Q,_e){_e===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_e.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let _e=Q.near,oe=Q.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),z.near=k.near=N.near=_e,z.far=k.far=N.far=oe,(O!==z.near||Y!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,Y=z.far),z.layers.mask=Q.layers.mask|6,N.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let H=Q.parent,te=z.cameras;ie(z,H);for(let Ie=0;Ie<te.length;Ie++)ie(te[Ie],H);z.projectionMatrix.copy(N.projectionMatrix),z.projectionMatrixInverse.copy(N.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),V(Q,z,H)};function V(Q,_e,oe){oe===null?Q.matrix.copy(_e.matrixWorld):(Q.matrix.copy(oe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_e.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let ne=null;function we(Q,_e){if(u=_e.getViewerPose(c||o),m=_e,u!==null){let oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let H=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,H=!0);for(let Oe=0;Oe<oe.length;Oe++){let Ge=oe[Oe],tt=null;if(d!==null)tt=d.getViewport(Ge);else{let Mt=h.getViewSubImage(f,Ge);tt=Mt.viewport,Oe===0&&(e.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(v))}let He=q[Oe];He===void 0&&(He=new un,He.layers.enable(Oe),He.viewport=new wt,q[Oe]=He),He.matrix.fromArray(Ge.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ge.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(z.matrix.copy(He.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),H===!0&&z.cameras.push(He)}let te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Oe=h.getDepthInformation(oe[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,r.renderState)}if(te&&te.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<oe.length;Oe++){let Ge=oe[Oe].camera;if(Ge){let tt=p[Ge];tt||(tt=new Pa,p[Ge]=tt);let He=h.getCameraImage(Ge);tt.sourceTexture=He}}}}for(let oe=0;oe<M.length;oe++){let H=E[oe],te=M[oe];H!==null&&te!==void 0&&te.update(H,_e,c||o)}ne&&ne(Q,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),m=null}let Ne=new b0;Ne.setAnimationLoop(we),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}},y1=new it,I0=new lt;I0.set(-1,0,0,0,1,0,0,0,1);function _1(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,od(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(I0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v1(n,e,t,i){let r={},s={};function o(b,S){let v=S.program;i.uniformBlockBinding(b,v,r[b.id])}function a(b,S){let v=r[b.id];v===void 0&&(m(b),v=l(b),r[b.id]=v,b.addEventListener("dispose",g));let M=S.program;i.updateUBOMapping(b,M);let E=e.render.frame;s[b.id]!==E&&(c(b),s[b.id]=E)}function l(b){let S=n.createBuffer(),v=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(b){let S=r[b.id],v=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,y=v.length;E<y;E++){let w=v[E];if(Array.isArray(w))for(let D=0,N=w.length;D<N;D++)u(w[D],E,D,M);else u(w,E,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,S,v,M){if(f(b,S,v,M)===!0){let E=b.__offset,y=b.value;if(Array.isArray(y)){let w=0;for(let D=0;D<y.length;D++){let N=y[D],k=x(N,!0);h(N,b.__data,w),w+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function h(b,S,v){typeof b=="number"||typeof b=="boolean"?S[v]=b:b.isMatrix3?(S[v]=b.elements[0],S[v+1]=b.elements[1],S[v+2]=b.elements[2],S[v+3]=0,S[v+4]=b.elements[3],S[v+5]=b.elements[4],S[v+6]=b.elements[5],S[v+7]=0,S[v+8]=b.elements[6],S[v+9]=b.elements[7],S[v+10]=b.elements[8],S[v+11]=0):ArrayBuffer.isView(b)?S.set(b.subarray(0,S.length-v),v):b.toArray(S,v)}function f(b,S,v,M){let E=b.value,y=S+"_"+v;if(Array.isArray(E)){M[y]===void 0&&(M[y]=[]);let w=M[y],D=!1;for(let N=0;N<E.length;N++)d(E[N],w,N)===!0&&(D=!0);return D}return d(E,M,y)}function d(b,S,v){if(S[v]===void 0)return typeof b=="number"||typeof b=="boolean"?S[v]=b:ArrayBuffer.isView(b)?S[v]=b.slice():S[v]=b.clone(),!0;{let M=S[v];if(typeof b=="number"||typeof b=="boolean"){if(M!==b)return S[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(M.equals(b)===!1)return M.copy(b),!0}}return!1}function m(b){let S=b.uniforms,v=0,M=16;for(let y=0,w=S.length;y<w;y++){let D=Array.isArray(S[y])?S[y]:[S[y]];for(let N=0,k=D.length;N<k;N++){let q=D[N],z=Array.isArray(q.value)?q.value:[q.value],O=Array.isArray(S[y])||Array.isArray(q.value),Y=v;for(let j=0,ye=z.length;j<ye;j++){let ie=z[j],V=x(ie,O),ne=v%M,we=ne%V.boundary,Ne=ne+we;v+=we,Ne!==0&&M-Ne<V.storage&&(v+=M-Ne),j===0&&(Y=v),v+=V.storage}let ee=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new ee((v-Y)/Float32Array.BYTES_PER_ELEMENT),q.__offset=Y}}let E=v%M;return E>0&&(v+=M-E),b.__size=v,b.__cache={},this}function x(b,S){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",b),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(b){let S=b.target;S.removeEventListener("dispose",g),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);r={},s={}}return{bind:o,update:a,dispose:p}}var b1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function M1(){return Ki===null&&(Ki=new Ao(b1,16,16,ns,Zn),Ki.name="DFG_LUT",Ki.minFilter=Yt,Ki.magFilter=Yt,Ki.wrapS=hi,Ki.wrapT=hi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Du=class{constructor(e={}){let{canvas:t=qg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Nn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Qc,Jc,jc]),p=new Set([Nn,Li,Fo,Is,Yc,Zc]),b=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,E=null,y=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,q=null,z=null,O=null,Y=null;this._outputColorSpace=At;let ee=0,j=0,ye=null,ie=-1,V=null,ne=new wt,we=new wt,Ne=null,Q=new qe(0),_e=0,oe=t.width,H=t.height,te=1,Ie=null,We=null,Oe=new wt(0,0,oe,H),Ge=new wt(0,0,oe,H),tt=!1,He=new Yr,Mt=new Rc,ut=!1,pt=!1,Ke=new it,vt=new I,me=new wt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Se(){return ye===null?te:1}let C=i;function re(A,X){return t.getContext(A,X)}let K,Pe,J,be,xe,Le,P,T,Z,ge,de,he,Me,ce,ue,B,L,W,G,pe,Ee,Ae,Re;try{let A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",De,!1),C===null){let X="webgl2";if(C=re(X,A),C===null)throw re(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(A){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",De,!1),st("WebGLRenderer: "+A.message),A}function Ue(){K=new Dw(C),K.init(),Ee=new m1(C,K),Pe=new Mw(C,K,e,Ee),J=new d1(C,K),Pe.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),z=C.createFramebuffer(),O=C.createFramebuffer(),Y=C.createFramebuffer(),be=new Uw(C),xe=new QE,Le=new p1(C,K,J,xe,Pe,Ee,be),P=new Lw(N),T=new Bb(C),Ae=new vw(C,T),Z=new Nw(C,T,be,Ae),ge=new Bw(C,Z,T,Ae,be),W=new Fw(C,Pe,Le),ue=new Sw(xe),de=new JE(N,P,K,Pe,Ae,ue),he=new _1(N,xe),Me=new t1,ce=new a1(K),L=new _w(N,P,J,ge,m,l),B=new f1(N,ge,Pe),Re=new v1(C,be,Pe,J),G=new bw(C,K,be),pe=new Ow(C,K,be),be.programs=de.programs,N.capabilities=Pe,N.extensions=K,N.properties=xe,N.renderLists=Me,N.shadowMap=B,N.state=J,N.info=be}x!==Nn&&(D=new zw(x,t.width,t.height,a,r,s));let $=new _d(N,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(oe,H,!1))},this.getSize=function(A){return A.set(oe,H)},this.setSize=function(A,X,fe=!0){if($.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,H=X,t.width=Math.floor(A*te),t.height=Math.floor(X*te),fe===!0&&(t.style.width=A+"px",t.style.height=X+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(oe*te,H*te).floor()},this.setDrawingBufferSize=function(A,X,fe){oe=A,H=X,te=fe,t.width=Math.floor(A*fe),t.height=Math.floor(X*fe),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(x===Nn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ne)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,X,fe,se){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,X,fe,se),J.viewport(ne.copy(Oe).multiplyScalar(Se()).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,X,fe,se){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,X,fe,se),J.scissor(we.copy(Ge).multiplyScalar(Se()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){J.setScissorTest(tt=A)},this.setOpaqueSort=function(A){Ie=A},this.setTransparentSort=function(A){We=A},this.getClearColor=function(A){return A.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,fe=!0){let se=0;if(A){let ae=!1;if(ye!==null){let Be=ye.texture.format;ae=g.has(Be)}if(ae){let Be=ye.texture.type,Ze=p.has(Be),Fe=L.getClearColor(),ke=L.getClearAlpha(),Je=Fe.r,at=Fe.g,ft=Fe.b;Ze?(b[0]=Je,b[1]=at,b[2]=ft,b[3]=ke,C.clearBufferuiv(C.COLOR,0,b)):(S[0]=Je,S[1]=at,S[2]=ft,S[3]=ke,C.clearBufferiv(C.COLOR,0,S))}else se|=C.COLOR_BUFFER_BIT}X&&(se|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&C.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",De,!1),L.dispose(),Me.dispose(),ce.dispose(),Le.dispose(),xe.dispose(),P.dispose(),ge.dispose(),Z.dispose(),Ae.dispose(),Re.dispose(),de.dispose(),$.dispose(),$.removeEventListener("sessionstart",Fr),$.removeEventListener("sessionend",ea),vn.stop()};function Ce(A){A.preventDefault(),ya("WebGLRenderer: Context Lost."),k=!0}function $e(){ya("WebGLRenderer: Context Restored."),k=!1;let A=be.autoReset,X=B.enabled,fe=B.autoUpdate,se=B.needsUpdate,ae=B.type;Ue(),be.autoReset=A,B.enabled=X,B.autoUpdate=fe,B.needsUpdate=se,B.type=ae}function De(A){st("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){let X=A.target;X.removeEventListener("dispose",ot),Pt(X)}function Pt(A){Xt(A),xe.remove(A)}function Xt(A){let X=xe.get(A).programs;X!==void 0&&(X.forEach(function(fe){de.releaseProgram(fe)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,fe,se,ae,Be){X===null&&(X=Qe);let Ze=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Fe=ms(A,X,fe,se,ae);J.setMaterial(se,Ze);let ke=fe.index,Je=1;if(se.wireframe===!0){if(ke=Z.getWireframeAttribute(fe),ke===void 0)return;Je=2}let at=fe.drawRange,ft=fe.attributes.position,je=at.start*Je,xt=(at.start+at.count)*Je;Be!==null&&(je=Math.max(je,Be.start*Je),xt=Math.min(xt,(Be.start+Be.count)*Je)),ke!==null?(je=Math.max(je,0),xt=Math.min(xt,ke.count)):ft!=null&&(je=Math.max(je,0),xt=Math.min(xt,ft.count));let Jt=xt-je;if(Jt<0||Jt===1/0)return;Ae.setup(ae,se,Fe,fe,ke);let Ft,Bt=G;if(ke!==null&&(Ft=T.get(ke),Bt=pe,Bt.setIndex(Ft)),ae.isMesh)se.wireframe===!0?(J.setLineWidth(se.wireframeLinewidth*Se()),Bt.setMode(C.LINES)):Bt.setMode(C.TRIANGLES);else if(ae.isLine){let ln=se.linewidth;ln===void 0&&(ln=1),J.setLineWidth(ln*Se()),ae.isLineSegments?Bt.setMode(C.LINES):ae.isLineLoop?Bt.setMode(C.LINE_LOOP):Bt.setMode(C.LINE_STRIP)}else ae.isPoints?Bt.setMode(C.POINTS):ae.isSprite&&Bt.setMode(C.TRIANGLES);if(ae.isBatchedMesh)if(K.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let ln=ae._multiDrawStarts,Ye=ae._multiDrawCounts,tn=ae._multiDrawCount,yt=ke?T.get(ke).bytesPerElement:1,lr=xe.get(se).currentProgram.getUniforms();for(let cn=0;cn<tn;cn++)lr.setValue(C,"_gl_DrawID",cn),Bt.render(ln[cn]/yt,Ye[cn])}else if(ae.isInstancedMesh)Bt.renderInstances(je,Jt,ae.count);else if(fe.isInstancedBufferGeometry){let ln=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,ln);Bt.renderInstances(je,Jt,Ye)}else Bt.render(je,Jt)};function oi(A,X,fe,se){q!==null&&A.isNodeMaterial&&q.setObject(se,A),ut===!0&&ue.setState(A,fe,!1),A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,ds(A,X,se),A.side=ii,A.needsUpdate=!0,ds(A,X,se),A.side=Ot):ds(A,X,se)}this.compile=function(A,X,fe=null){fe===null&&(fe=A),q!==null&&q.renderStart(A,X,fe),E=ce.get(fe),E.init(X),w.push(E),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(E.pushLight(ae),ae.castShadow&&E.pushShadow(ae))}),A!==fe&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(E.pushLight(ae),ae.castShadow&&E.pushShadow(ae))}),E.setupLights(),q!==null&&q.updateLights(E.state.lightsArray),pt=this.localClippingEnabled,ut=ue.init(this.clippingPlanes,pt),ut===!0&&ue.setGlobalState(this.clippingPlanes,X),q!==null&&B.render(E.state.shadowsArray,fe,X);let se=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Be=ae.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){let Fe=Be[Ze];oi(Fe,fe,X,ae),se.add(Fe)}else oi(Be,fe,X,ae),se.add(Be)}),E=w.pop(),q!==null&&q.renderEnd(),se},this.compileAsync=function(A,X,fe=null){let se=this.compile(A,X,fe);return new Promise(ae=>{function Be(){if(se.forEach(function(Ze){let ke=xe.get(Ze).currentProgram;(ke===void 0||ke.isReady())&&se.delete(Ze)}),se.size===0){ae(A);return}setTimeout(Be,10)}K.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ai=null;function li(A){ai&&ai(A)}function Fr(){vn.stop()}function ea(){vn.start()}let vn=new b0;vn.setAnimationLoop(li),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(A){ai=A,$.setAnimationLoop(A),A===null?vn.stop():vn.start()},$.addEventListener("sessionstart",Fr),$.addEventListener("sessionend",ea),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(A,X);let fe=$.enabled===!0&&$.isPresenting===!0,se=D!==null&&(ye===null||fe)&&D.begin(N,ye);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(X),X=$.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,X,ye),E=ce.get(A,w.length),E.init(X),E.state.textureUnits=Le.getTextureUnits(),w.push(E),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Mt.setFromArrayCamera(X):He.setFromProjectionMatrix(Ke,fi,X.reversedDepth),pt=this.localClippingEnabled,ut=ue.init(this.clippingPlanes,pt),M=Me.get(A,y.length),M.init(),y.push(M),this.info.render.frame++,$.enabled===!0&&$.isPresenting===!0){let Ze=N.xr.getDepthSensingMesh();Ze!==null&&ci(Ze,X,-1/0,N.sortObjects)}ci(A,X,0,N.sortObjects),M.finish(),q!==null&&q.updateLights(E.state.lightsArray),N.sortObjects===!0&&M.sort(Ie,We),et=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,et&&L.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),ut===!0&&ue.beginShadows();let ae=E.state.shadowsArray;if(B.render(ae,A,X),ut===!0&&ue.endShadows(),(se&&D.hasRenderPass())===!1){let Ze=M.opaque,Fe=M.transmissive;if(E.setupLights(),X.isArrayCamera){let ke=X.cameras;if(Fe.length>0)for(let Je=0,at=ke.length;Je<at;Je++){let ft=ke[Je];Sl(Ze,Fe,A,ft)}et&&L.render(A);for(let Je=0,at=ke.length;Je<at;Je++){let ft=ke[Je];Hs(M,A,ft,ft.viewport)}}else Fe.length>0&&Sl(Ze,Fe,A,X),et&&L.render(A),Hs(M,A,X)}ye!==null&&j===0&&(Le.updateMultisampleRenderTarget(ye),Le.updateRenderTargetMipmap(ye)),se&&D.end(N),A.isScene===!0&&A.onAfterRender(N,A,X),Ae.resetDefaultState(),ie=-1,V=null,w.pop(),w.length>0?(E=w[w.length-1],Le.setTextureUnits(E.state.textureUnits),ut===!0&&ue.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,q!==null&&q.renderEnd()};function ci(A,X,fe,se){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){let Ze=X.isArrayCamera?Mt:He;if(!A.frustumCulled||A.intersectsFrustum(Ze)){se&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ke);let Fe=ge.update(A),ke=A.material;ke.visible&&M.push(A,Fe,ke,fe,me.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){let Ze=X.isArrayCamera?Mt:He;if(!A.frustumCulled||A.intersectsFrustum(Ze)){let Fe=ge.update(A),ke=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),me.copy(Fe.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(Ke)),Array.isArray(ke)){let Je=Fe.groups;for(let at=0,ft=Je.length;at<ft;at++){let je=Je[at],xt=ke[je.materialIndex];xt&&xt.visible&&M.push(A,Fe,xt,fe,me.z,je,X)}}else ke.visible&&M.push(A,Fe,ke,fe,me.z,null,X)}}}let Be=A.children;for(let Ze=0,Fe=Be.length;Ze<Fe;Ze++)ci(Be[Ze],X,fe,se)}function Hs(A,X,fe,se){let{opaque:ae,transmissive:Be,transparent:Ze}=A;E.setupLightsView(fe),ut===!0&&ue.setGlobalState(N.clippingPlanes,fe),se&&J.viewport(ne.copy(se)),ae.length>0&&fs(ae,X,fe),Be.length>0&&fs(Be,X,fe),Ze.length>0&&fs(Ze,X,fe),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Sl(A,X,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[se.id]===void 0){let je=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[se.id]=new on(1,1,{generateMipmaps:!0,type:je?Zn:Nn,minFilter:gi,samples:Math.max(4,Pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Be=E.state.transmissionRenderTarget[se.id],Ze=se.viewport||ne;Be.setSize(Ze.z*N.transmissionResolutionScale,Ze.w*N.transmissionResolutionScale);let Fe=N.getRenderTarget(),ke=N.getActiveCubeFace(),Je=N.getActiveMipmapLevel();N.setRenderTarget(Be),N.getClearColor(Q),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),et&&L.render(fe);let at=N.toneMapping;N.toneMapping=mi;let ft=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),E.setupLightsView(se),ut===!0&&ue.setGlobalState(N.clippingPlanes,se),fs(A,fe,se),Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be),K.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let xt=0,Jt=X.length;xt<Jt;xt++){let Ft=X[xt],{object:Bt,geometry:ln,material:Ye,group:tn}=Ft;if(Ye.side===Ot&&Bt.layers.test(se.layers)){let yt=Ye.side;Ye.side=Sn,Ye.needsUpdate=!0,Br(Bt,fe,se,ln,Ye,tn),Ye.side=yt,Ye.needsUpdate=!0,je=!0}}je===!0&&(Le.updateMultisampleRenderTarget(Be),Le.updateRenderTargetMipmap(Be))}N.setRenderTarget(Fe,ke,Je),N.setClearColor(Q,_e),ft!==void 0&&(se.viewport=ft),N.toneMapping=at}function fs(A,X,fe){let se=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Be=A.length;ae<Be;ae++){let Ze=A[ae],{object:Fe,geometry:ke,group:Je}=Ze,at=Ze.material;at.allowOverride===!0&&se!==null&&(at=se),Fe.layers.test(fe.layers)&&Br(Fe,X,fe,ke,at,Je)}}function Br(A,X,fe,se,ae,Be){q!==null&&ae.isNodeMaterial&&q.setObject(A,ae),A.onBeforeRender(N,X,fe,se,ae,Be),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(N,X,fe,se,A,Be),ae.transparent===!0&&ae.side===Ot&&ae.forceSinglePass===!1?(ae.side=Sn,ae.needsUpdate=!0,N.renderBufferDirect(fe,X,se,ae,A,Be),ae.side=ii,ae.needsUpdate=!0,N.renderBufferDirect(fe,X,se,ae,A,Be),ae.side=Ot):N.renderBufferDirect(fe,X,se,ae,A,Be),A.onAfterRender(N,X,fe,se,ae,Be)}function Vs(A){let X=0;for(let fe of A)fe.texture!==null&&X++;return X}function ds(A,X,fe){X.isScene!==!0&&(X=Qe);let se=xe.get(A),ae=E.state.lights,Be=E.state.shadowsArray,Ze=ae.state.version,Fe=de.getParameters(A,ae.state,Be,X,fe,E.state.lightProbeGridArray),ke=de.getProgramCacheKey(Fe),Je=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,se.fog=X.fog;let at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=P.get(A.envMap||se.environment,at),se.envMapRotation=se.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",ot),Je=new Map,se.programs=Je,se.programVariants=new Map);let ft=Je.get(ke);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===Ze)return ps(A,Fe),ft}else Fe.uniforms=de.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,fe,Fe),A.onBeforeCompile(Fe,N),ft=de.acquireProgram(Fe,ke),Je.set(ke,ft),se.uniforms=Fe.uniforms;let je=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ue.uniform),ps(A,Fe),se.needsLights=El(A),se.lightsStateVersion=Ze,se.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.sunLights.value=ae.state.sun,je.sunLightShadows.value=ae.state.sunShadow,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.sunShadowMatrix.value=ae.state.sunShadowMatrix,je.sunShadowCascade.value=ae.state.sunShadowCascade,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.numLightProbeGrids=Vs(E.state.lightProbeGridArray),se.currentProgram=ft,se.uniformsList=null,ft}function Eh(A,X,fe,se,ae){let Be=xe.get(A),Ze=Be.currentProgram.id+","+se+","+ae,Fe=Be.programVariants.get(Ze);return Fe===void 0?(Fe=ds(A,X,fe),Be.programVariants.set(Ze,Fe)):(Be.currentProgram=Fe,Be.uniformsList=null,Be.outputColorSpace=se,Be.toneMapping=ae),Fe}function wl(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ps(A,X){let fe=xe.get(A);fe.outputColorSpace=X.outputColorSpace,fe.batching=X.batching,fe.batchingColor=X.batchingColor,fe.instancing=X.instancing,fe.instancingColor=X.instancingColor,fe.instancingMorph=X.instancingMorph,fe.skinning=X.skinning,fe.morphTargets=X.morphTargets,fe.morphNormals=X.morphNormals,fe.morphColors=X.morphColors,fe.morphTargetsCount=X.morphTargetsCount,fe.numClippingPlanes=X.numClippingPlanes,fe.numIntersection=X.numClipIntersection,fe.vertexAlphas=X.vertexAlphas,fe.vertexTangents=X.vertexTangents,fe.toneMapping=X.toneMapping}function ms(A,X,fe,se,ae){X.isScene!==!0&&(X=Qe),Le.resetTextureUnits();let Be=X.fog,Ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?X.environment:null,Fe=ye===null?N.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:mt.workingColorSpace,ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Je=P.get(se.envMap||Ze,ke),at=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ft=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!fe.morphAttributes.position,xt=!!fe.morphAttributes.normal,Jt=!!fe.morphAttributes.color,Ft=mi;se.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ft=N.toneMapping);let Bt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,ln=Bt!==void 0?Bt.length:0,Ye=xe.get(se),tn=E.state.lights;if(ut===!0&&(pt===!0||A!==V)){let Vt=A===V&&se.id===ie;ue.setState(se,A,Vt)}let yt=!1,lr=!1;se.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==tn.state.version||ae.isBatchedMesh&&Ye.batching===!1||!ae.isBatchedMesh&&Ye.batching===!0||ae.isBatchedMesh&&Ye.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ye.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ye.instancing===!1||!ae.isInstancedMesh&&Ye.instancing===!0||ae.isSkinnedMesh&&Ye.skinning===!1||!ae.isSkinnedMesh&&Ye.skinning===!0||ae.isInstancedMesh&&Ye.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ye.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ye.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ye.instancingMorph===!1&&ae.morphTexture!==null||Ye.envMap!==Je||se.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==at||Ye.vertexTangents!==ft||Ye.morphTargets!==je||Ye.morphNormals!==xt||Ye.morphColors!==Jt||Ye.morphTargetsCount!==ln||Ye.numLightProbeGrids!==Vs(E.state.lightProbeGridArray)?yt=!0:(Ye.outputColorSpace!==Fe||Ye.toneMapping!==Ft)&&(lr=!0):(yt=!0,Ye.__version=se.version);let cn=Ye.currentProgram;(yt===!0||lr===!0)&&(cn=lr===!0?Eh(se,X,ae,Fe,Ft):ds(se,X,ae),q&&se.isNodeMaterial&&q.onUpdateProgram(se,cn,Ye));let cr=!1,Fi=!1,bi=!1,_t=cn.getUniforms(),nn=Ye.uniforms;if(J.useProgram(cn.program)&&(cr=!0,Fi=!0,bi=!0),se.id!==ie&&(ie=se.id,Fi=!0),cr||V!==A){J.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(C,"projectionMatrix",A.projectionMatrix),_t.setValue(C,"viewMatrix",A.matrixWorldInverse);let qt=_t.map.cameraPosition;qt!==void 0&&qt.setValue(C,vt.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&_t.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Fi=!0,bi=!0)}if(Ye.needsLights&&(tn.state.sunShadowMap.length>0&&_t.setValue(C,"sunShadowMap",tn.state.sunShadowMap,Le),tn.state.directionalShadowMap.length>0&&_t.setValue(C,"directionalShadowMap",tn.state.directionalShadowMap,Le),tn.state.spotShadowMap.length>0&&_t.setValue(C,"spotShadowMap",tn.state.spotShadowMap,Le),tn.state.pointShadowMap.length>0&&_t.setValue(C,"pointShadowMap",tn.state.pointShadowMap,Le)),ae.isSkinnedMesh){_t.setOptional(C,ae,"bindMatrix"),_t.setOptional(C,ae,"bindMatrixInverse");let Vt=ae.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),_t.setValue(C,"boneTexture",Vt.boneTexture,Le))}ae.isBatchedMesh&&(_t.setOptional(C,ae,"batchingTexture"),_t.setValue(C,"batchingTexture",ae._matricesTexture,Le),_t.setOptional(C,ae,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",ae._indirectTexture,Le),_t.setOptional(C,ae,"batchingColorTexture"),ae._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",ae._colorsTexture,Le));let qn=fe.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&W.update(ae,fe,cn),(Fi||Ye.receiveShadow!==ae.receiveShadow)&&(Ye.receiveShadow=ae.receiveShadow,_t.setValue(C,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&X.environment!==null&&(nn.envMapIntensity.value=X.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=M1()),Fi){if(_t.setValue(C,"toneMappingExposure",N.toneMappingExposure),Ye.needsLights&&gs(nn,bi),Be&&se.fog===!0&&he.refreshFogUniforms(nn,Be),he.refreshMaterialUniforms(nn,se,te,H,E.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){let Vt=v,qt=0;for(let bn of E.state.lightProbeGridArray)bn.texture!==null&&(Vt.textures[qt]=bn.texture,Vt.min[qt]=bn.boundingBox.min,Vt.max[qt]=bn.boundingBox.max,Vt.resolution[qt]=bn.resolution,qt++);for(let bn in Vt)Vt[bn].length=qt;nn.probesSH.value=Vt.textures,nn.probesMin.value=Vt.min,nn.probesMax.value=Vt.max,nn.probesResolution.value=Vt.resolution}ko.upload(C,wl(Ye),nn,Le)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ko.upload(C,wl(Ye),nn,Le),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&_t.setValue(C,"center",ae.center),_t.setValue(C,"modelViewMatrix",ae.modelViewMatrix),_t.setValue(C,"normalMatrix",ae.normalMatrix),_t.setValue(C,"modelMatrix",ae.matrixWorld),se.uniformsGroups!==void 0){let Vt=se.uniformsGroups;for(let qt=0,bn=Vt.length;qt<bn;qt++){let kr=Vt[qt];Re.update(kr,cn),Re.bind(kr,cn)}}return cn}function gs(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function El(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ye},this.setRenderTargetTextures=function(A,X,fe){let se=xe.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),xe.get(A.texture).__webglTexture=X,xe.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let fe=xe.get(A);fe.__webglFramebuffer=X,fe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,fe=0){ye=A,ee=X,j=fe;let se=null,ae=!1,Be=!1;if(A){let Fe=xe.get(A);if(Fe.__useDefaultFramebuffer!==void 0){J.bindFramebuffer(C.FRAMEBUFFER,Fe.__webglFramebuffer),ne.copy(A.viewport),we.copy(A.scissor),Ne=A.scissorTest,J.viewport(ne),J.scissor(we),J.setScissorTest(Ne),ie=-1;return}else if(Fe.__webglFramebuffer===void 0)Le.setupRenderTarget(A);else if(Fe.__hasExternalTextures)Le.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let at=A.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&xe.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(A)}}let ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Be=!0);let Je=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?se=Je[X][fe]:se=Je[X],ae=!0):A.samples>0&&Le.useMultisampledRTT(A)===!1?se=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?se=Je[fe]:se=Je,ne.copy(A.viewport),we.copy(A.scissor),Ne=A.scissorTest}else ne.copy(Oe).multiplyScalar(te).floor(),we.copy(Ge).multiplyScalar(te).floor(),Ne=tt;if(fe!==0&&(se=z),J.bindFramebuffer(C.FRAMEBUFFER,se)&&J.drawBuffers(A,se),J.viewport(ne),J.scissor(we),J.setScissorTest(Ne),ae){let Fe=xe.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,fe)}else if(Be){let Fe=X;for(let ke=0;ke<A.textures.length;ke++){let Je=xe.get(A.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Je.__webglTexture,fe,Fe)}}else if(A!==null&&fe!==0){let Fe=xe.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fe.__webglTexture,fe)}ie=-1};function ar(A){let X=xe.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=Pe.textureFormatReadable(A.format),X.__typeReadable=Pe.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,fe,se,ae,Be,Ze,Fe=0){if(!(A&&A.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(ke=ke[Ze],Array.isArray(ke)&&(ke=ke[0])),ke){J.bindFramebuffer(C.FRAMEBUFFER,ke);try{let Je=A.textures[Fe],at=Je.format,ft=Je.type;A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe);let je=ar(Je);if(je.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-se&&fe>=0&&fe<=A.height-ae&&C.readPixels(X,fe,se,ae,Ee.convert(at),Ee.convert(ft),Be)}finally{let Je=ye!==null?xe.get(ye).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,X,fe,se,ae,Be,Ze,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(ke=ke[Ze],Array.isArray(ke)&&(ke=ke[0])),ke)if(X>=0&&X<=A.width-se&&fe>=0&&fe<=A.height-ae){J.bindFramebuffer(C.FRAMEBUFFER,ke);let Je=A.textures[Fe],at=Je.format,ft=Je.type;A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe);let je=ar(Je);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.bufferData(C.PIXEL_PACK_BUFFER,Be.byteLength,C.STREAM_READ),C.readPixels(X,fe,se,ae,Ee.convert(at),Ee.convert(ft),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Jt=ye!==null?xe.get(ye).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,Jt);let Ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Yg(C,Ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Be),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(xt),C.deleteSync(Ft),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,fe=0){let se=Math.pow(2,-fe),ae=Math.floor(A.image.width*se),Be=Math.floor(A.image.height*se),Ze=X!==null?X.x:0,Fe=X!==null?X.y:0;Le.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,fe,0,0,Ze,Fe,ae,Be),J.unbindTexture()},this.copyTextureToTexture=function(A,X,fe=null,se=null,ae=0,Be=0){let Ze,Fe,ke,Je,at,ft,je,xt,Jt,Ft=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(fe!==null)Ze=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,ke=fe.isBox3?fe.max.z-fe.min.z:1,Je=fe.min.x,at=fe.min.y,ft=fe.isBox3?fe.min.z:0;else{let _t=Math.pow(2,-ae);Ze=Math.floor(Ft.width*_t),Fe=Math.floor(Ft.height*_t),A.isDataArrayTexture?ke=Ft.depth:A.isData3DTexture?ke=Math.floor(Ft.depth*_t):ke=1,Je=0,at=0,ft=0}se!==null?(je=se.x,xt=se.y,Jt=se.z):(je=0,xt=0,Jt=0);let Bt=Ee.convert(X.format),ln=Ee.convert(X.type),Ye;X.isData3DTexture?(Le.setTexture3D(X,0),Ye=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Le.setTexture2DArray(X,0),Ye=C.TEXTURE_2D_ARRAY):(Le.setTexture2D(X,0),Ye=C.TEXTURE_2D),J.activeTexture(C.TEXTURE0),J.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),J.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),J.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);let tn=J.getParameter(C.UNPACK_ROW_LENGTH),yt=J.getParameter(C.UNPACK_IMAGE_HEIGHT),lr=J.getParameter(C.UNPACK_SKIP_PIXELS),cn=J.getParameter(C.UNPACK_SKIP_ROWS),cr=J.getParameter(C.UNPACK_SKIP_IMAGES);J.pixelStorei(C.UNPACK_ROW_LENGTH,Ft.width),J.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ft.height),J.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),J.pixelStorei(C.UNPACK_SKIP_ROWS,at),J.pixelStorei(C.UNPACK_SKIP_IMAGES,ft);let Fi=A.isDataArrayTexture||A.isData3DTexture,bi=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let _t=xe.get(A),nn=xe.get(X),qn=xe.get(_t.__renderTarget),Vt=xe.get(nn.__renderTarget);J.bindFramebuffer(C.READ_FRAMEBUFFER,qn.__webglFramebuffer),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let qt=0;qt<ke;qt++)Fi&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(A).__webglTexture,ae,ft+qt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(X).__webglTexture,Be,Jt+qt)),C.blitFramebuffer(Je,at,Je+Ze,at+Fe,je,xt,je+Ze,xt+Fe,C.DEPTH_BUFFER_BIT,C.NEAREST);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||xe.has(A)){let _t=xe.get(A),nn=xe.get(X);J.bindFramebuffer(C.READ_FRAMEBUFFER,O),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,Y);for(let qn=0;qn<ke;qn++)Fi?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.__webglTexture,ae,ft+qn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_t.__webglTexture,ae),bi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,Be,Jt+qn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,Be),ae!==0?C.blitFramebuffer(Je,at,Je+Ze,at+Fe,je,xt,je+Ze,xt+Fe,C.COLOR_BUFFER_BIT,C.NEAREST):bi?C.copyTexSubImage3D(Ye,Be,je,xt,Jt+qn,Je,at,Ze,Fe):C.copyTexSubImage2D(Ye,Be,je,xt,Je,at,Ze,Fe);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else bi?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Ye,Be,je,xt,Jt,Ze,Fe,ke,Bt,ln,Ft.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(Ye,Be,je,xt,Jt,Ze,Fe,ke,Bt,Ft.data):C.texSubImage3D(Ye,Be,je,xt,Jt,Ze,Fe,ke,Bt,ln,Ft):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Be,je,xt,Ze,Fe,Bt,ln,Ft.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Be,je,xt,Ft.width,Ft.height,Bt,Ft.data):C.texSubImage2D(C.TEXTURE_2D,Be,je,xt,Ze,Fe,Bt,ln,Ft);J.pixelStorei(C.UNPACK_ROW_LENGTH,tn),J.pixelStorei(C.UNPACK_IMAGE_HEIGHT,yt),J.pixelStorei(C.UNPACK_SKIP_PIXELS,lr),J.pixelStorei(C.UNPACK_SKIP_ROWS,cn),J.pixelStorei(C.UNPACK_SKIP_IMAGES,cr),Be===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&C.generateMipmap(Ye),J.unbindTexture()},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&Le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Le.setTextureCube(A,0):A.isData3DTexture?Le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Le.setTexture2DArray(A,0):Le.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){ee=0,j=0,ye=null,J.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};function D0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new kt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in h.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(h.morphAttributes[m]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=L0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let m=L0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function L0(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Ht(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);a.setComponent(f+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function vd(n,e){if(e===Kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Bo||e===tl){let t=n.getIndex();if(t===null){let s=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);n.setIndex(s),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===Bo)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(r),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function N0(n){let e=new Map,t=new Map,i=n.clone();return O0(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function O0(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)O0(n.children[i],e.children[i],t)}var Uu=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Fu(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fu(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hd(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Pr.extractUrlBase(e);o=Pr.resolveURL(c,this.path)}else o=Pr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Co(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===z0){try{o[gt.KHR_BINARY_GLTF]=new Vd(e)}catch(h){r&&r(h);return}s=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:o[h]=new Ed;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Gd(s,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[h]=new Wd;break;case gt.KHR_MESH_QUANTIZATION:o[h]=new Xd;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function S1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function jt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wd=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Vn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rs(u),c.distance=h;break;case"spot":c=new ka(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Ed=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,i){let r=[];e.color=new qe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}},Td=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Ad=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(s,s)}return Promise.all(r)}},Rd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Pd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Id=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Vn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Dd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(s[0],s[1],s[2],Vn),Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Od=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(s[0],s[1],s[2],Vn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(r)}},Ud=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let i=jt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},Bd=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},kd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},zd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}},Fu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Hd=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==xi.TRIANGLES&&c.mode!==xi.TRIANGLE_STRIP&&c.mode!==xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new it,g=new I,p=new Zt,b=new I(1,1,1),S=new Ts(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(g,p,b));let v=null;for(let M in l)if(M==="_COLOR_0"){let E=l[M];S.instanceColor=new Mr(E.array,E.itemSize,E.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let y=S.geometry;v=new kt,v.name=y.name;for(let w in y.attributes)v.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)v.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)v.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),S.geometry=v}let E=l[M];v.setAttribute(M,new Mr(E.array,E.itemSize,E.normalized))}Wt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},z0="glTF",ll=12,U0={JSON:1313821514,BIN:5130562},Vd=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ll),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-ll,s=new DataView(e,ll),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===U0.JSON){let c=new Uint8Array(e,ll+o,a);this.content=i.decode(c)}else if(l===U0.BIN){let c=ll+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=$d[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=$d[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],d=Vo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},a,c,Vn,f)})})}},Wd=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Bu=class extends qi{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,b=1-g,S=p-f+h;for(let v=0;v!==a;v++){let M=o[x+v+a],E=o[x+v+l]*u,y=o[m+v+a],w=o[m+v]*u;s[v]=b*M+S*E+g*y+p*w}return s}},w1=new Zt,qd=class extends Bu{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return w1.fromArray(s).normalize().toArray(s),s}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},F0={9728:$t,9729:Yt,9984:qc,9985:Uo,9986:Ps,9987:gi},B0={33071:hi,33648:yo,10497:Ri},bd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E1={CUBICSPLINE:void 0,LINEAR:ws,STEP:Ss},Md={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T1(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function Ds(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ji(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A1(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function R1(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C1(n){let e,t=n.extensions&&n.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sd(t.attributes):e=n.indices+":"+Sd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Sd(n.targets[i]);return e}function Sd(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Yd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P1(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var I1=new it,Zd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new S1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?(this.textureLoader=new Fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Va(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Co(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ds(s,a,r),ji(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Pr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=bd[r.type],a=Vo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Ht(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=bd[r.type],c=Vo[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,S=t.cache.get(b);S||(x=new c(a,p*d,r.count*d/u),S=new $r(x,d/u),t.cache.add(b,S)),g=new In(S,l,f%d/u,m)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),g=new Ht(x,l,m);if(r.sparse!==void 0){let p=bd.SCALAR,b=Vo[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,M=new b(o[1],S,r.sparse.count*p),E=new c(o[2],v,r.sparse.count*l);a!==null&&(g=new Ht(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let y=0,w=M.length;y<w;y++){let D=M[y];if(g.setX(D,E[y*l]),l>=2&&g.setY(D,E[y*l+1]),l>=3&&g.setZ(D,E[y*l+2]),l>=4&&g.setW(D,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=F0[f.magFilter]||Yt,u.minFilter=F0[f.minFilter]||gi,u.wrapS=B0[f.wrapS]||Ri,u.wrapT=B0[f.wrapT]||Ri,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==Yt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){let p=new hn(g);p.needsUpdate=!0,d(p)}),t.load(Pr.resolveURL(f,s.path),x,void 0,m)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),ji(f,o),f.userData.mimeType=o.mimeType||P1(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ro,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Sr,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Dn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let h=r[gt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Vn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ot);let u=s.alphaMode||Md.OPAQUE;if(u===Md.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Md.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==an){let h=s.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],Vn)}return s.emissiveTexture!==void 0&&o!==an&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ds(r,h,s),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return k0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=C1(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=k0(new kt,c,t),c.mode===xi.TRIANGLE_STRIP?f=f.then(d=>vd(d,tl)):c.mode===xi.TRIANGLE_FAN&&(f=f.then(d=>vd(d,Bo))),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?T1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=o[d],p,b=c[d];if(g.mode===xi.TRIANGLES||g.mode===xi.TRIANGLE_STRIP||g.mode===xi.TRIANGLE_FAN||g.mode===void 0){let S=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&v?new Sa(x,b):new ht(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===xi.LINES)p=new Ea(x,b);else if(g.mode===xi.LINE_STRIP)p=new Wi(x,b);else if(g.mode===xi.LINE_LOOP)p=new Ta(x,b);else if(g.mode===xi.POINTS)p=new Aa(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&R1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ji(p,s),g.extensions&&Ds(r,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ds(r,h[0],s),h[0];let f=new Et;s.extensions&&Ds(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(is.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Pi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ji(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new it;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wa(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],m=r.samplers[d.sampler],x=d.target,g=x.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,b=r.parameters!==void 0?r.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let S=0,v=f.length;S<v;S++){let M=f[S],E=d[S],y=m[S],w=x[S],D=g[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let N=i._createAnimationTracks(M,E,y,w,D);if(N)for(let k=0;k<N.length;k++)p.push(N[k])}let b=new Ua(s,void 0,p);return ji(b,r),b})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,I1)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new To:c.length>1?u=new Et:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ji(u,s),s.extensions&&Ds(i,u,s),s.matrix!==void 0){let h=new it;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Et;i.name&&(s.name=r.createUniqueName(i.name)),ji(s,i),i.extensions&&Ds(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(N0(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof Ln||f instanceof hn)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}rs[s.path]===rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(rs[s.path]){case rs.weights:u=Ar;break;case rs.rotation:u=Rr;break;case rs.translation:case rs.scale:u=Zr;break;default:i.itemSize===1?u=Ar:u=Zr;break}let h=r.interpolation!==void 0?E1[r.interpolation]:ws,f=this._getArrayFromAccessor(i);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+rs[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Yd(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Rr?qd:Bu;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function L1(n,e,t){let i=e.attributes,r=new Nt;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Yd(Vo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Yd(Vo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new yn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function k0(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=$d[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return mt.workingColorSpace!==Vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),ji(n,e),L1(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?A1(n,e.targets,t):n})}var H0={type:"change"},jd={type:"start"},G0={type:"end"},ku=new Gi,V0=new xn,D1=Math.cos(70*is.DEG2RAD),mn=new I,jn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kd=1e-6,zu=class extends Wa{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Zt,this._lastTargetPosition=new I,this._quat=new Zt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jr,this._sphericalDelta=new Jr,this._scale=1,this._panOffset=new I,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new I,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O1.bind(this),this._onPointerDown=N1.bind(this),this._onPointerUp=U1.bind(this),this._onContextMenu=G1.bind(this),this._onMouseWheel=k1.bind(this),this._onKeyDown=z1.bind(this),this._onTouchStart=H1.bind(this),this._onTouchMove=V1.bind(this),this._onMouseDown=F1.bind(this),this._onMouseMove=B1.bind(this),this._interceptControlDown=W1.bind(this),this._interceptControlUp=X1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(H0),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),r<-Math.PI?r+=jn:r>Math.PI&&(r-=jn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=mn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ku.origin.copy(this.object.position),ku.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ku.direction))<D1?this.object.lookAt(this.target):(V0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ku.intersectPlane(V0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kd||this._lastTargetPosition.distanceToSquared(this.target)>Kd?(this.dispatchEvent(H0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;mn.copy(r).sub(this.target);let s=mn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function N1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function O1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function U1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(G0),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case Qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case Qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(jd)}function B1(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function k1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(jd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(G0))}function z1(n){this.enabled!==!1&&this._handleKeyDown(n)}function H1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(jd)}function V1(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function G1(n){this.enabled!==!1&&n.preventDefault()}function W1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hu=class extends Gn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Xi;e.deleteAttribute("uv");let t=new Dn({side:Sn}),i=new Dn,r=new Rs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ht(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ts(e,i,6),a=new Wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ht(e,Go(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ht(e,Go(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ht(e,Go(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ht(e,Go(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ht(e,Go(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ht(e,Go(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Go(n){return new Na({color:0,emissive:16777215,emissiveIntensity:n})}var Un=Uint8Array,ri=Uint16Array,ip=Int32Array,rp=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),sp=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),W0=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),K0=function(n,e){for(var t=new ri(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new ip(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},j0=K0(rp,2),q1=j0.b,Qd=j0.r;q1[28]=258,Qd[258]=28;var J0=K0(sp,0),DI=J0.b,X0=J0.r,ep=new ri(32768);for(Ct=0;Ct<32768;++Ct)Lr=(Ct&43690)>>1|(Ct&21845)<<1,Lr=(Lr&52428)>>2|(Lr&13107)<<2,Lr=(Lr&61680)>>4|(Lr&3855)<<4,ep[Ct]=((Lr&65280)>>8|(Lr&255)<<8)>>1;var Lr,Ct,hl=(function(n,e,t){for(var i=n.length,r=0,s=new ri(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new ri(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ri(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[ep[h]>>l]=c}else for(a=new ri(i),r=0;r<i;++r)n[r]&&(a[r]=ep[o[n[r]-1]++]>>15-n[r]);return a}),Ns=new Un(288);for(Ct=0;Ct<144;++Ct)Ns[Ct]=8;var Ct;for(Ct=144;Ct<256;++Ct)Ns[Ct]=9;var Ct;for(Ct=256;Ct<280;++Ct)Ns[Ct]=7;var Ct;for(Ct=280;Ct<288;++Ct)Ns[Ct]=8;var Ct,Vu=new Un(32);for(Ct=0;Ct<32;++Ct)Vu[Ct]=5;var Ct,$1=hl(Ns,9,0);var Y1=hl(Vu,5,0);var Q0=function(n){return(n+7)/8|0},ex=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Un(n.subarray(e,t))};var Z1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Gu=function(n,e,t){var i=new Error(e||Z1[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Gu),!t)throw i;return i};var Dr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},cl=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},Jd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:nx,l:0};if(r==1){var o=new Un(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,E){return M.f-E.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var d=new ri(f+1),m=tp(t[u-1],d,0);if(m>e){var i=0,x=0,g=m-e,p=1<<g;for(s.sort(function(E,y){return d[y.s]-d[E.s]||E.f-y.f});i<r;++i){var b=s[i].s;if(d[b]>e)x+=p-(1<<m-d[b]),d[b]=e;else break}for(x>>=g;x>0;){var S=s[i].s;d[S]<e?x-=1<<e-d[S]++-1:++i}for(;i>=0&&x;--i){var v=s[i].s;d[v]==e&&(--d[v],++x)}m=e}return{t:new Un(d),l:m}},tp=function(n,e,t){return n.s==-1?Math.max(tp(n.l,e,t+1),tp(n.r,e,t+1)):e[n.s]=t},q0=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new ri(++e),i=0,r=n[0],s=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},ul=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},tx=function(n,e,t){var i=t.length,r=Q0(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},$0=function(n,e,t,i,r,s,o,a,l,c,u){Dr(e,u++,t),++r[256];for(var h=Jd(r,15),f=h.t,d=h.l,m=Jd(s,15),x=m.t,g=m.l,p=q0(f),b=p.c,S=p.n,v=q0(x),M=v.c,E=v.n,y=new ri(19),w=0;w<b.length;++w)++y[b[w]&31];for(var w=0;w<M.length;++w)++y[M[w]&31];for(var D=Jd(y,7),N=D.t,k=D.l,q=19;q>4&&!N[W0[q-1]];--q);var z=c+5<<3,O=ul(r,Ns)+ul(s,Vu)+o,Y=ul(r,f)+ul(s,x)+o+14+3*q+ul(y,N)+2*y[16]+3*y[17]+7*y[18];if(l>=0&&z<=O&&z<=Y)return tx(e,u,n.subarray(l,l+c));var ee,j,ye,ie;if(Dr(e,u,1+(Y<O)),u+=2,Y<O){ee=hl(f,d,0),j=f,ye=hl(x,g,0),ie=x;var V=hl(N,k,0);Dr(e,u,S-257),Dr(e,u+5,E-1),Dr(e,u+10,q-4),u+=14;for(var w=0;w<q;++w)Dr(e,u+3*w,N[W0[w]]);u+=3*q;for(var ne=[b,M],we=0;we<2;++we)for(var Ne=ne[we],w=0;w<Ne.length;++w){var Q=Ne[w]&31;Dr(e,u,V[Q]),u+=N[Q],Q>15&&(Dr(e,u,Ne[w]>>5&127),u+=Ne[w]>>12)}}else ee=$1,j=Ns,ye=Y1,ie=Vu;for(var w=0;w<a;++w){var _e=i[w];if(_e>255){var Q=_e>>18&31;cl(e,u,ee[Q+257]),u+=j[Q+257],Q>7&&(Dr(e,u,_e>>23&31),u+=rp[Q]);var oe=_e&31;cl(e,u,ye[oe]),u+=ie[oe],oe>3&&(cl(e,u,_e>>5&8191),u+=sp[oe])}else cl(e,u,ee[_e]),u+=j[_e]}return cl(e,u,ee[256]),u+j[256]},K1=new ip([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),nx=new Un(0),j1=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Un(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=K1[e-1],f=h>>13,d=h&8191,m=(1<<t)-1,x=s.p||new ri(32768),g=s.h||new ri(m+1),p=Math.ceil(t/3),b=2*p,S=function(He){return(n[He]^n[He+1]<<p^n[He+2]<<b)&m},v=new ip(25e3),M=new ri(288),E=new ri(32),y=0,w=0,D=s.i||0,N=0,k=s.w||0,q=0;D+2<o;++D){var z=S(D),O=D&32767,Y=g[z];if(x[O]=Y,g[z]=O,k<=D){var ee=o-D;if((y>7e3||N>24576)&&(ee>423||!c)){u=$0(n,l,0,v,M,E,w,N,q,D-q,u),N=y=w=0,q=D;for(var j=0;j<286;++j)M[j]=0;for(var j=0;j<30;++j)E[j]=0}var ye=2,ie=0,V=d,ne=O-Y&32767;if(ee>2&&z==S(D-ne))for(var we=Math.min(f,ee)-1,Ne=Math.min(32767,D),Q=Math.min(258,ee);ne<=Ne&&--V&&O!=Y;){if(n[D+ye]==n[D+ye-ne]){for(var _e=0;_e<Q&&n[D+_e]==n[D+_e-ne];++_e);if(_e>ye){if(ye=_e,ie=ne,_e>we)break;for(var oe=Math.min(ne,_e-2),H=0,j=0;j<oe;++j){var te=D-ne+j&32767,Ie=x[te],We=te-Ie&32767;We>H&&(H=We,Y=te)}}}O=Y,Y=x[O],ne+=O-Y&32767}if(ie){v[N++]=268435456|Qd[ye]<<18|X0[ie];var Oe=Qd[ye]&31,Ge=X0[ie]&31;w+=rp[Oe]+sp[Ge],++M[257+Oe],++E[Ge],k=D+ye,++y}else v[N++]=n[D],++M[n[D]]}}for(D=Math.max(D,k);D<o;++D)v[N++]=n[D],++M[n[D]];u=$0(n,l,c,v,M,E,w,N,q,D-q,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=g,s.p=x,s.i=D,s.w=k)}else{for(var D=s.w||0;D<o+c;D+=65535){var tt=D+65535;tt>=o&&(l[u/8|0]=c,tt=o),u=tx(l,u+1,n.subarray(D,tt))}s.i=o}return ex(a,0,i+Q0(u)+r)},J1=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),Q1=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=J1[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var eT=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Un(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return j1(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},ix=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var En=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function tT(n,e){return eT(n,e||{},0,0)}var rx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=ix(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new Un(0),a],rx(s,o,t,i))}},Y0=typeof TextEncoder<"u"&&new TextEncoder,nT=typeof TextDecoder<"u"&&new TextDecoder,iT=0;try{nT.decode(nx,{stream:!0}),iT=1}catch{}function fl(n,e){if(e){for(var t=new Un(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Y0)return Y0.encode(n);for(var r=n.length,s=new Un(n.length+(n.length>>1)),o=0,a=function(u){s[o++]=u},i=0;i<r;++i){if(o+5>s.length){var l=new Un(o+8+(r-i<<1));l.set(s),s=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return ex(s,0,o)}var np=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Gu(9),e+=i+4}return e},Z0=function(n,e,t,i,r,s,o,a){var l=i.length,c=t.extra,u=a&&a.length,h=np(c);En(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&Gu(10),En(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(En(n,e,t.crc),En(n,e+4,s<0?-s-2:s),En(n,e+8,t.size)),En(n,e+12,l),En(n,e+14,h),e+=16,o!=null&&(En(n,e,u),En(n,e+6,t.attrs),En(n,e+10,o),e+=14),n.set(i,e),e+=l,h)for(var m in c){var x=c[m],g=x.length;En(n,e,+m),En(n,e+2,g),n.set(x,e+4),e+=4+g}return u&&(n.set(a,e),e+=u),e},rT=function(n,e,t,i,r){En(n,e,101010256),En(n,e+8,t),En(n,e+10,t),En(n,e+12,i),En(n,e+16,r)};function sx(n,e){e||(e={});var t={},i=[];rx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=fl(o),f=h.length,d=c.comment,m=d&&fl(d),x=m&&m.length,g=np(c.extra);f>65535&&Gu(11);var p=u?tT(l,c):l,b=p.length,S=Q1();S.p(l),i.push(ix(c,{size:l.length,crc:S.d(),c:p,f:h,m,u:f!=o.length||m&&d.length!=x,o:r,compression:u})),r+=30+f+g+b,s+=76+2*(f+g)+(x||0)+b}for(var v=new Un(s+22),M=r,E=s-r,y=0;y<i.length;++y){var h=i[y];Z0(v,h.o,h,h.f,h.u,h.c.length);var w=30+h.f.length+np(h.extra);v.set(h.c,h.o+w),Z0(v,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+w+(h.m?h.m.length:0)}return rT(v,r,i.length,E,M),v}var Fn=class{constructor(e,t="",i=[],r=[]){this.name=e,this.type=t,this.metadata=i,this.properties=r,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(u=>{let h=u.key,f=u.value;if(Array.isArray(f)){let d=[];return d.push(`${h} = {`),f.forEach(m=>{d.push(`${t}		${m}`)}),d.push(`${t}	}`),d.join(`
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
${t}}`}},Xu=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,r={},s="model.usda";r[s]=null;let o=oT(e,t.animations);t.animationTracks=o;let a=new Fn("Root","Xform"),l=new Fn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",u=new Fn(c,"Xform");u.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),u.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(u.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),u.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(u);let h,f={},d={};e.isScene?fx(e,u,f,i,r,t):dx(e,u,f,i,r,t);let m=mT(f,d,t.quickLookCompatible),x=o.size>0?{fps:t.animationFrameRate,endTimeCode:aT(t.animations)*t.animationFrameRate}:null;h=hx(x)+`
`+a.toString()+`

`+m.toString(),r[s]=fl(h),h=null;for(let p in d){let b=d[p];if(b.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");b=await this.textureUtils.decompress(b)}let S=sT(b.image,b.flipY,t.maxTextureSize),v=b.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",M=await new Promise(E=>S.toBlob(E,v));r[`textures/Texture_${p}.${ux(b)}`]=new Uint8Array(await M.arrayBuffer())}let g=0;for(let p in r){let b=r[p],S=34+p.length;g+=S;let v=g&63;if(v!==4){let M=64-v,E=new Uint8Array(M);r[p]=[b,{extra:{12345:E}}]}g=b.length}return sx(r,{level:0,mtime:new Date})}};function cx(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function ux(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function sT(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);let s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var bt=7;function hx(n=null){return`#usda 1.0
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
`}function oT(n,e){let t=new Map;for(let i=0;i<e.length;i++){let r=e[i];for(let s=0;s<r.tracks.length;s++){let o=r.tracks[s],a=Lt.parseTrackName(o.name),l=Lt.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let u=t.get(l);u===void 0&&(u={},t.set(l,u)),u[c]=o}}return t}function aT(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function ox(n,e,t,i){let r=t.times,s=t.values,o=[];for(let a=0;a<r.length;a++){let l=a*3;o.push(`${(r[a]*i).toPrecision(bt)}: (${s[l].toPrecision(bt)}, ${s[l+1].toPrecision(bt)}, ${s[l+2].toPrecision(bt)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function lT(n,e){let t=n.times,i=n.values,r=[];for(let s=0;s<t.length;s++){let o=s*4;r.push(`${(t[s]*e).toPrecision(bt)}: (${i[o+3].toPrecision(bt)}, ${i[o].toPrecision(bt)}, ${i[o+1].toPrecision(bt)}, ${i[o+2].toPrecision(bt)})`)}return`quatf xformOp:orient.timeSamples = {
	${r.join(`,
	`)},
}`}function fx(n,e,t,i,r,s){for(let o=0,a=n.children.length;o<a;o++)dx(n.children[o],e,t,i,r,s)}function dx(n,e,t,i,r,s){if(n.visible===!1&&s.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let h=0;h<c.length;h++){let f=c[h];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let u=c.map(h=>t[h.uuid]);if(l===!1){let h=`geometries/Geometry_${a.id}.usda`;if(!(h in r)){let f=hT(a);r[h]=fl(hx()+`
`+f.toString())}}o=cT(n,a,u,i,s)}else n.isCamera?o=yT(n,i,s):o=mx(n,i,s);e.addChild(o),fx(n,o,t,i,r,s)}function px(n,e,t){let i=t.animationTracks.get(e),r=e.pivot!==null;if(!r&&i===void 0){let c=uT(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let s=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(ox("xformOp:translate","float3",i.position,s)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(bt)}, ${o.y.toPrecision(bt)}, ${o.z.toPrecision(bt)})`),r){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(bt)}, ${c.y.toPrecision(bt)}, ${c.z.toPrecision(bt)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(lT(i.quaternion,s)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(bt)}, ${a.x.toPrecision(bt)}, ${a.y.toPrecision(bt)}, ${a.z.toPrecision(bt)})`),i!==void 0&&i.scale!==void 0?n.addProperty(ox("xformOp:scale","float3",i.scale,s)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(bt)}, ${l.y.toPrecision(bt)}, ${l.z.toPrecision(bt)})`),r?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function mx(n,e,t){let i=cx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Fn(i,"Xform");return px(r,n,t),r}function cT(n,e,t,i,r){let s=mx(n,i,r);return t.length===1?(s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):s.addChild(gx(e,t)),s}function uT(n){let e=n.elements;return`( ${Wu(e,0)}, ${Wu(e,4)}, ${Wu(e,8)}, ${Wu(e,12)} )`}function Wu(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function hT(n){let e=new Fn("Geometry"),t=gx(n);return e.addChild(t),e}function gx(n,e=null){let t="Geometry",i=n.attributes,r=i.position.count,s=new Fn(t,"Mesh");s.addProperty(`int[] faceVertexCounts = [${fT(n)}]`),s.addProperty(`int[] faceVertexIndices = [${dT(n)}]`),s.addProperty(`normal3f[] normals = [${op(i.normal,r)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${op(i.position,r)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&s.addProperty(`texCoord2f[] primvars:st${l} = [${pT(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${op(o,r)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let u=a[c],h=e[u.materialIndex];if(h===void 0)continue;let f=Math.floor(u.start/3),d=Math.min(f+Math.floor(u.count/3),l),m=[];for(let g=f;g<d;g++)m.push(g);let x=new Fn(`subset_${c}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${m.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${h.id}>`),s.addChild(x)}}return s}function fT(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function dT(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function op(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision(bt)}, ${s.toPrecision(bt)}, ${o.toPrecision(bt)})`)}return t.join(", ")}function pT(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision(bt)}, ${1-r.toPrecision(bt)})`)}return e.join(", ")}function mT(n,e,t=!1){let i=new Fn("Materials");for(let r in n){let s=n[r];i.addChild(gT(s,e,t))}return i}function gT(n,e,t=!1){let i=new Fn(`Material_${n.id}`,"Material");function r(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let u=o.channel>0?"st"+o.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),m=o.rotation,x=Math.sin(m),g=Math.cos(m);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=x/f.x,d.y+=g-1):(d.x+=x*f.x,d.y+=(1-g)*f.y);let p=new Fn(`PrimvarReader_${a}`,"Shader");p.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),p.addProperty("float2 inputs:fallback = (0.0, 0.0)"),p.addProperty(`string inputs:varname = "${u}"`),p.addProperty("float2 outputs:result");let b=new Fn(`Transform2d_${a}`,"Shader");b.addProperty('uniform token info:id = "UsdTransform2d"'),b.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),b.addProperty(`float inputs:rotation = ${(m*(180/Math.PI)).toFixed(bt)}`),b.addProperty(`float2 inputs:scale = ${lx(f)}`),b.addProperty(`float2 inputs:translation = ${lx(d)}`),b.addProperty("float2 outputs:result");let S=new Fn(`Texture_${o.id}_${a}`,"Shader");if(S.addProperty('uniform token info:id = "UsdUVTexture"'),S.addProperty(`asset inputs:file = @textures/Texture_${c}.${ux(o)}@`),S.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let v=a==="diffuse"?n.opacity:1;S.addProperty(`float4 inputs:scale = ${xT(l,v)}`)}if(a==="normal"){let v=n.normalScale.x;S.addProperty(`float4 inputs:scale = (${2*v}, ${2*v}, 2, 1)`),S.addProperty(`float4 inputs:bias = (${-v}, ${-v}, -1, 0)`)}return S.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Di?"raw":"sRGB"}"`),S.addProperty(`token inputs:wrapS = "${h[o.wrapS]}"`),S.addProperty(`token inputs:wrapT = "${h[o.wrapT]}"`),S.addProperty("float outputs:r"),S.addProperty("float outputs:g"),S.addProperty("float outputs:b"),S.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&S.addProperty("float outputs:a"),[p,b,S]}n.side===Ot&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let s=new Fn("PreviewSurface","Shader");if(s.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(s.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),s.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),r(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):s.addProperty(`color3f inputs:diffuseColor = ${ax(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){s.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new qe(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);r(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&s.addProperty(`color3f inputs:emissiveColor = ${ax(n.emissive)}`)}if(n.normalMap&&(s.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),r(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){s.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new qe(o,o,o);r(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){s.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new qe(n.roughness,n.roughness,n.roughness);r(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){s.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new qe(n.metalness,n.metalness,n.metalness);r(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(s.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),s.addProperty("float inputs:opacityThreshold = 0.0001"),r(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):s.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){s.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new qe(n.clearcoat,n.clearcoat,n.clearcoat);r(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){s.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new qe(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);r(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else s.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);s.addProperty(`float inputs:ior = ${n.ior}`)}return s.addProperty("int inputs:useSpecularWorkflow = 0"),s.addProperty("token outputs:surface"),i.addChild(s),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function ax(n){return`(${n.r}, ${n.g}, ${n.b})`}function xT(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function lx(n){return`(${n.x}, ${n.y})`}function yT(n,e,t){let i=cx(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let r=new Fn(i,"Camera");px(r,n,t);let s=n.isOrthographicCamera?"orthographic":"perspective";r.addProperty(`token projection = "${s}"`);let o=`(${n.near.toPrecision(bt)}, ${n.far.toPrecision(bt)})`;r.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(bt):a=n.getFilmWidth().toPrecision(bt),r.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(bt):l=n.getFilmHeight().toPrecision(bt),r.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(bt);r.addProperty(`float focalLength = ${c}`);let u=n.focus.toPrecision(bt);r.addProperty(`float focusDistance = ${u}`)}return r}var xx=new Nt,qu=new I,Ni=class extends Ha{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Gt(e,3)),this.setAttribute("uv",new Gt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new jr(t,6,1);return this.setAttribute("instanceStart",new In(i,3,0)),this.setAttribute("instanceEnd",new In(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new jr(t,6,1);return this.setAttribute("instanceColorStart",new In(i,3,0)),this.setAttribute("instanceColorEnd",new In(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Da(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),xx.setFromBufferAttribute(t),this.boundingBox.union(xx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qu.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qu)),qu.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(qu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};ze.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Xe},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:il.merge([ze.common,ze.fog,ze.line]),vertexShader:`
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
		`};var Ji=class extends _n{constructor(e){super({type:"LineMaterial",uniforms:il.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ap=new wt,yx=new I,_x=new I,Tn=new wt,An=new wt,Qi=new wt,lp=new I,cp=new it,Rn=new Ga,vx=new I,$u=new Nt,Yu=new yn,er=new wt,tr,Os;function bx(n,e,t){return er.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),er.multiplyScalar(1/er.w),er.x=Os/t.width,er.y=Os/t.height,er.applyMatrix4(n.projectionMatrixInverse),er.multiplyScalar(1/er.w),Math.abs(Math.max(er.x,er.y))}function _T(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Rn.start.fromBufferAttribute(r,a),Rn.end.fromBufferAttribute(s,a),Rn.applyMatrix4(t);let c=new I,u=new I;tr.distanceSqToSegment(Rn.start,Rn.end,u,c),u.distanceTo(c)<Os*.5&&e.push({point:u,pointOnLine:c,distance:tr.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function vT(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-e.near;tr.at(1,Qi),Qi.w=1,Qi.applyMatrix4(e.matrixWorldInverse),Qi.applyMatrix4(i),Qi.multiplyScalar(1/Qi.w),Qi.x*=s.x/2,Qi.y*=s.y/2,Qi.z=0,lp.copy(Qi),cp.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(Tn.fromBufferAttribute(l,f),An.fromBufferAttribute(c,f),Tn.w=1,An.w=1,Tn.applyMatrix4(cp),An.applyMatrix4(cp),Tn.z>h&&An.z>h)continue;if(Tn.z>h){let S=Tn.z-An.z,v=(Tn.z-h)/S;Tn.lerp(An,v)}else if(An.z>h){let S=An.z-Tn.z,v=(An.z-h)/S;An.lerp(Tn,v)}Tn.applyMatrix4(i),An.applyMatrix4(i),Tn.multiplyScalar(1/Tn.w),An.multiplyScalar(1/An.w),Tn.x*=s.x/2,Tn.y*=s.y/2,An.x*=s.x/2,An.y*=s.y/2,Rn.start.copy(Tn),Rn.start.z=0,Rn.end.copy(An),Rn.end.z=0;let x=Rn.closestPointToPointParameter(lp,!0);Rn.at(x,vx);let g=is.lerp(Tn.z,An.z,x),p=g>=-1&&g<=1,b=lp.distanceTo(vx)<Os*.5;if(p&&b){Rn.start.fromBufferAttribute(l,f),Rn.end.fromBufferAttribute(c,f),Rn.start.applyMatrix4(o),Rn.end.applyMatrix4(o);let S=new I,v=new I;tr.distanceSqToSegment(Rn.start,Rn.end,v,S),t.push({point:v,pointOnLine:S,distance:tr.origin.distanceTo(v),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var ss=class extends ht{constructor(e=new Ni,t=new Ji({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)yx.fromBufferAttribute(t,o),_x.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+yx.distanceTo(_x);let s=new jr(r,2,1);return e.setAttribute("instanceDistanceStart",new In(s,1,0)),e.setAttribute("instanceDistanceEnd",new In(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;tr=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Os=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Yu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Os*.5;else{let h=Math.max(r.near,Yu.distanceToPoint(tr.origin));c=bx(r,h,l.resolution)}if(Yu.radius+=c,tr.intersectsSphere(Yu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),$u.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Os*.5;else{let h=Math.max(r.near,$u.distanceToPoint(tr.origin));u=bx(r,h,l.resolution)}$u.expandByScalar(u),tr.intersectsBox($u)!==!1&&(i?_T(this,t):vT(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ap),this.material.uniforms.resolution.value.set(ap.z,ap.w))}};var wx="blueprints.edgeMode",bT="blueprints.edgesEnabled",Us="none",Fs="transparent",pl="opaque",MT=20,Ex=2.5,Tx=0,Ku=35e-5,hp=2e-6;function ST(n){let t=(Array.isArray(n?.material)?n.material[0]:n?.material)?.userData?.layerDepthBias??0;return(Number(t)+1)*hp}var dl=1,Ax=4,wT=.0012,ET=.0036,TT=.02,AT=.0035,Mx=.012;function Sx(n){return n===Us||n===Fs||n===pl?n:n==="1"||n==="true"?Fs:n==="0"||n==="false"?Us:null}function Rx(){try{let n=Sx(localStorage.getItem(wx));if(n)return n;let e=Sx(localStorage.getItem(bT));if(e)return dp(e),e}catch{}return Fs}function dp(n){try{localStorage.setItem(wx,n)}catch{}}function Bn(n){return!!(n&&n.userData&&n.userData.isEdgeOverlay)}function Cx(n){let e=n?.getAttribute?.("position");if(!e||!e.count)return new Float32Array(0);let t=new Ia(n,MT),i=t.getAttribute("position"),r=i&&i.array?i.array instanceof Float32Array?i.array.slice():Float32Array.from(i.array):new Float32Array(0);return t.dispose(),r}function RT(n,e){if(!e.length)return n;if(!n.length)return e;let t=new Float32Array(n.length+e.length);return t.set(n,0),t.set(e,n.length),t}var Zu=new I;function Px(n){let e=[];for(let t=0;t+5<n.length;t+=6){let i=n[t],r=n[t+1],s=n[t+2],o=n[t+3],a=n[t+4],l=n[t+5],c=o-i,u=a-r,h=l-s,f=Math.hypot(c,u,h);f<1e-6||e.push({ax:i,ay:r,az:s,bx:o,by:a,bz:l,dx:c/f,dy:u/f,dz:h/f,len:f})}return e}function CT(n,e,t,i,r,s){let o=d=>Math.round(d/5e-4),a=o(n),l=o(e),c=o(t),u=o(i),h=o(r),f=o(s);if(a>u||a===u&&l>h||a===u&&l===h&&c>f){let d=a;a=u,u=d;let m=l;l=h,h=m;let x=c;c=f,f=x}return`${a},${l},${c},${u},${h},${f}`}function Ix(n){let e=Px(n),t=[],i=new Set;for(let r=0;r<e.length;r++){let s=e[r];for(let o=r+1;o<e.length;o++){let a=e[o];if(Math.abs(s.dx*a.dx+s.dy*a.dy+s.dz*a.dz)<.985)continue;let c=s.ax-a.ax,u=s.ay-a.ay,h=s.az-a.az,f=c*s.dx+u*s.dy+h*s.dz,d=c-f*s.dx,m=u-f*s.dy,x=h-f*s.dz,g=Math.hypot(d,m,x);if(g<wT||g>ET)continue;let p=(a.ax-s.ax)*s.dx+(a.ay-s.ay)*s.dy+(a.az-s.az)*s.dz,b=(a.bx-s.ax)*s.dx+(a.by-s.ay)*s.dy+(a.bz-s.az)*s.dz,S=Math.max(0,Math.min(p,b)),v=Math.min(s.len,Math.max(p,b));if(v-S<TT)continue;let M=-d/g*(g*.5),E=-m/g*(g*.5),y=-x/g*(g*.5),w=s.ax+s.dx*S+M,D=s.ay+s.dy*S+E,N=s.az+s.dz*S+y,k=s.ax+s.dx*v+M,q=s.ay+s.dy*v+E,z=s.az+s.dz*v+y,O=CT(w,D,N,k,q,z);i.has(O)||(i.add(O),t.push(w,D,N,k,q,z))}}return new Float32Array(t)}function PT(n){let e=n.getAttribute("position"),t=n.getIndex(),i=0,r=0,s=0,o=t?t.count:e.count,a=c=>{let u=t?t.getX(c):c;return[e.getX(u),e.getY(u),e.getZ(u)]};for(let c=0;c+2<o;c+=3){let u=a(c),h=a(c+1),f=a(c+2),d=h[0]-u[0],m=h[1]-u[1],x=h[2]-u[2],g=f[0]-u[0],p=f[1]-u[1],b=f[2]-u[2];i+=m*b-x*p,r+=x*g-d*b,s+=d*p-m*g}let l=Math.hypot(i,r,s)||1;return{x:i/l,y:r/l,z:s/l}}function IT(n,e){let t=n.getAttribute("position"),i,r,s;Math.abs(e.z)<.9?(i=-e.y,r=e.x,s=0):(i=0,r=-e.z,s=e.y);let o=Math.hypot(i,r,s)||1;i/=o,r/=o,s/=o;let a=e.y*s-e.z*r,l=e.z*i-e.x*s,c=e.x*r-e.y*i,u=1/0,h=-1/0,f=1/0,d=-1/0;for(let m=0;m<t.count;m++){let x=t.getX(m),g=t.getY(m),p=t.getZ(m),b=x*i+g*r+p*s,S=x*a+g*l+p*c;b<u&&(u=b),b>h&&(h=b),S<f&&(f=S),S>d&&(d=S)}return Math.min(h-u,d-f)}function LT(n){let e=n.getAttribute("position");if(!e||e.count<3)return!1;let t=PT(n),i=IT(n,t);return t.z>.5?i>Mx:t.z<-.5||(n.boundingBox||n.computeBoundingBox(),n.boundingBox.max.z-n.boundingBox.min.z<.05)?!1:i>Mx}function Lx(n,e){n.updateWorldMatrix(!0,!1);let t=n.matrixWorld,i=new Float32Array(e.length);for(let r=0;r<e.length;r+=3)Zu.set(e[r],e[r+1],e[r+2]).applyMatrix4(t),i[r]=Zu.x,i[r+1]=Zu.y,i[r+2]=Zu.z;return i}function DT(n,e,t){if(!t||t.length<6)return n;let i=Lx(e,n),r=Px(t),s=[];for(let o=0;o+5<n.length;o+=6){let a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],h=i[o+4],f=i[o+5],d=u-a,m=h-l,x=f-c,g=Math.hypot(d,m,x);if(g<1e-6)continue;let p=d/g,b=m/g,S=x/g,v=!1;for(let M of r){if(Math.abs(p*M.dx+b*M.dy+S*M.dz)<.95)continue;let y=a-M.ax,w=l-M.ay,D=c-M.az,N=y*M.dx+w*M.dy+D*M.dz,k=y-N*M.dx,q=w-N*M.dy,z=D-N*M.dz;if(Math.hypot(k,q,z)>AT)continue;let O=(a-M.ax)*M.dx+(l-M.ay)*M.dy+(c-M.az)*M.dz,Y=(u-M.ax)*M.dx+(h-M.ay)*M.dy+(f-M.az)*M.dz,ee=Math.min(O,Y),j=Math.max(O,Y);if(Math.min(j,M.len)-Math.max(ee,0)>.01){v=!0;break}}v||s.push(n[o],n[o+1],n[o+2],n[o+3],n[o+4],n[o+5])}return new Float32Array(s)}function NT(n,e){if(!n)return;let t=Math.max(0,Math.min(1,Number(e)||0));t<1?(n.transparent=!0,n.opacity=t,n.depthWrite=!1):(n.transparent=!1,n.opacity=1),n.needsUpdate=!0}function OT(n){if(!n?.visible)return 0;let e=Array.isArray(n.material)?n.material[0]:n.material;return e&&e.transparent&&typeof e.opacity=="number"?e.opacity:1}function UT(n,e=Fs){return e===Us?0:e===pl?n?.visible===!1?0:1:OT(n)}function fp(n,e,t=1,i=hp){let r=Math.max(0,Math.min(1,Number(t)||0)),s=Number.isFinite(i)?i:hp,o=new Ji({color:Tx,linewidth:Ex,worldUnits:!1,toneMapped:!1,depthTest:!0,depthWrite:!1,transparent:r<1,opacity:r<1?r:1,clippingPlanes:n,clipIntersection:!1});return o.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace(`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );`,`vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
			start.z += ${Ku};
			end.z += ${Ku};`),a.fragmentShader=a.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
			#if ${gp}
				gl_FragDepth -= ${s};
			#else
				gl_FragDepth = gl_FragCoord.z - ${s};
			#endif`)},o.customProgramCacheKey=()=>`bp-edge-depth-bias-r${Ax}-${s}-${Ku}`,e&&o.resolution.set(e.x,e.y),o}function Dx(n,e,t,i){let r=Math.max(0,Math.min(1,Number(e)||0)),s=fp(t,null,r);s.depthTest=!1,s.depthWrite=!1,s.transparent=!0,s.opacity=r;let o=s.onBeforeCompile?.bind(s),a=s.customProgramCacheKey?.bind(s);s.customProgramCacheKey=()=>`${a?a():"edge"}|peelEdge1`,s.onBeforeCompile=(u,h)=>{o?.(u,h),u.uniforms.uPeelStage=i.stage,u.uniforms.tPrevViewZ=i.prevZ,u.uniforms.tPeelViewZ=i.peelZ,u.uniforms.tOpaqueViewZ=i.opaqueZ,u.uniforms.uViewZEps=i.eps,u.uniforms.uBpPeelRes=i.resolution,u.vertexShader=u.vertexShader.replace("void main() {",`varying float vBpEdgeViewZ;
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
			gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},s.needsUpdate=!0;let l=new Ni;l.setPositions(n);let c=new ss(l,s);return c.frustumCulled=!1,c.matrixAutoUpdate=!1,c.renderOrder=1e3,c.raycast=()=>{},c.userData.isPeeledEdgeBatch=!0,c}function ju(n){if(!n)return;n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material;if(Array.isArray(e))for(let t of e)t?.dispose?.();else e?.dispose?.()}function Nx(n){if(!n)return;let e=[];n.traverse(t=>{Bn(t)&&e.push(t)});for(let t of e)ju(t)}function os(n,e){n&&n.traverse(t=>{Bn(t)&&(t.visible=e)})}function Ox(n,e,t){if(!n)return;let i=Math.max(1,e),r=Math.max(1,t);n.traverse(s=>{if(!Bn(s)||!s.material)return;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a?.resolution&&a.resolution.set(i,r)})}function pp(n,e){if(!n)return;let t=e||[];n.traverse(i=>{if(!Bn(i)||!i.material)return;let r=Array.isArray(i.material)?i.material:[i.material];for(let s of r){if(!s)continue;let o=s.clippingPlanes?s.clippingPlanes.length:0;s.clippingPlanes=t,s.clipIntersection=!1,o!==t.length&&(s.needsUpdate=!0)}})}function FT(n,e,t){let i=n.userData.bpHardEdgePositions;return i instanceof Float32Array||(i=Cx(n.geometry),n.userData.bpHardEdgePositions=i),e==="grout"?Ix(i):e==="tile"||e==="floor_tile"||e==="wall_tile"?LT(n.geometry)?DT(i,n,t):new Float32Array(0):i}function BT(n,e,t,i,r){n.updateWorldMatrix(!0,!1);let s=FT(n,i,r),o=Ju(t,n.matrixWorld),a=Fx(n.geometry,o),l=RT(s,a),c=new Ni,u=e.geometry;l.length>=6?(c.setPositions(l),e.geometry=c,e.computeLineDistances()):e.geometry=c,u?.dispose?.()}function kT(n){let e=[],t=n.get("grout")||[];for(let i of t){if(!i||!i.isMesh||!i.geometry)continue;let r=i.userData.bpHardEdgePositions;r instanceof Float32Array||(r=Cx(i.geometry),i.userData.bpHardEdgePositions=r);let s=Ix(r);if(s.length<6)continue;let o=Lx(i,s);for(let a=0;a<o.length;a++)e.push(o[a])}return new Float32Array(e)}function Ux(n,e,t={}){let i=t.clippingPlanes??[],r=t.resolution||null,s=t.edgeMode??Fs,o=e?kT(n):new Float32Array(0);for(let[a,l]of n)for(let c of l){if(!c||!c.isMesh||!c.geometry||Bn(c))continue;let u=null;for(let d of c.children)if(Bn(d)){u=d;break}if(!e){u&&ju(u);continue}u&&!u.isLineSegments2&&(ju(u),u=null);let h=UT(c,s),f=ST(c);if(u){let d=u.material,m=d?.customProgramCacheKey?.(),x=`bp-edge-depth-bias-r${Ax}-${f}-${Ku}`;if(!d||typeof d.customProgramCacheKey!="function"||m!==x){ju(u);let g=fp(i,r,h,f),p=new Ni;u=new ss(p,g),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(dl),c.add(u)}else d.color&&d.color.setHex(Tx),typeof d.linewidth=="number"&&(d.linewidth=Ex),d.clippingPlanes=i,d.clipIntersection=!1,r&&d.resolution&&d.resolution.set(r.x,r.y),NT(d,h),d.needsUpdate=!0}else{let d=fp(i,r,h,f),m=new Ni;u=new ss(m,d),u.name=`${a}__edges`,u.userData.isEdgeOverlay=!0,u.userData.edgeLabel=a,u.raycast=()=>{},u.renderOrder=1e3,u.layers.set(dl),c.add(u)}u.layers.set(dl),BT(c,u,i,a,o)}}function zT(n){if(!n.isMesh||Bn(n))return!1;let e=Array.isArray(n.material)?n.material[0]:n.material;return!!(e&&e.transparent&&e.opacity<1-1e-4)}function mp(n,e,t,i,r={}){if(!i)return;let s=!!r.reuseDepth,o=!1;if(i.traverse(x=>{Bn(x)&&(o=!0)}),!o){up(n);return}let a=n.autoClear,l=e.background,c=e.overrideMaterial,u=t.layers.mask;if(e.background=null,n.autoClear=!1,s){os(i,!0),t.layers.set(dl),n.render(e,t),t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,up(n);return}os(i,!1);let h=[];i.traverse(x=>{!zT(x)||x.visible===!1||(h.push(x),x.visible=!1)});let f=[],d=new Set;e.traverse(x=>{if(!x.isMesh||Bn(x)||x.visible===!1)return;let g=Array.isArray(x.material)?x.material:[x.material];for(let p of g)!p||d.has(p)||(d.add(p),f.push({mat:p,colorWrite:p.colorWrite!==!1,depthWrite:p.depthWrite!==!1}),p.colorWrite=!1,p.depthWrite=!0)}),e.overrideMaterial=null,n.clearDepth();try{n.render(e,t)}finally{for(let x of f)x.mat.colorWrite=x.colorWrite,x.mat.depthWrite=x.depthWrite;for(let x of h)x.visible=!0}os(i,!0);let m=[];r.opaqueEdgesOnly&&i.traverse(x=>{if(!Bn(x))return;let g=Array.isArray(x.material)?x.material[0]:x.material;g&&g.transparent&&g.opacity<1-1e-4&&(m.push(x),x.visible=!1)}),t.layers.set(dl);try{n.render(e,t)}finally{for(let x of m)x.visible=!0}t.layers.mask=u,e.background=l,e.overrideMaterial=c,n.autoClear=a,up(n)}function up(n){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}var Bx=!0,kx=5,_p=12,HT=_p,Hx=.001,VT=.5,GT=1;function zx(n){let e=String(n.length);for(let t of n){let i=Array.isArray(t.material)?"m":t.material?.id??0;e+=`|${t.id}:${i}:${t.geometry?.id??0}`;let r=t.children;if(r)for(let s=0;s<r.length;s++){let o=r[s];o?.userData?.isEdgeOverlay&&(e+=`>${o.id}:${o.geometry?.id??0}`)}}return e}var Qu=1e5,Oi={value:0},en={tPrevViewZ:{value:null},tPeelViewZ:{value:null},tOpaqueViewZ:{value:null},uViewZEps:{value:Hx},uResolution:{value:new Xe(1,1)}};function xp(n){let e=n?.userData?.shader;if(!e?.uniforms)return;let t=e.uniforms;t.uPeelStage&&(t.uPeelStage.value=Oi.value),t.tPrevViewZ&&(t.tPrevViewZ.value=en.tPrevViewZ.value),t.tPeelViewZ&&(t.tPeelViewZ.value=en.tPeelViewZ.value),t.tOpaqueViewZ&&(t.tOpaqueViewZ.value=en.tOpaqueViewZ.value),t.uViewZEps&&(t.uViewZEps.value=en.uViewZEps.value),t.uResolution&&t.uResolution.value.copy(en.uResolution.value)}function ml(n){if(!n||n.userData.depthPeelPatched)return;n.userData.depthPeelPatched=!0;let e=n.customProgramCacheKey?.bind(n);n.customProgramCacheKey=()=>`${e?e():n.type}|depthPeel11|${n.defines?.USE_BP_PEEL?1:0}`;let t=n.onBeforeCompile?.bind(n);n.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uPeelStage=Oi,i.uniforms.tPrevViewZ=en.tPrevViewZ,i.uniforms.tPeelViewZ=en.tPeelViewZ,i.uniforms.tOpaqueViewZ=en.tOpaqueViewZ,i.uniforms.uViewZEps=en.uViewZEps,i.uniforms.uResolution=en.uResolution,n.userData.shader=i,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
			if (peelZ > ${(Qu*.5).toFixed(1)}) discard;
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
#endif`)},n.needsUpdate=!0}function yp(n,e){for(let t of n){if(!t)continue;let i=!!(t.defines&&Object.prototype.hasOwnProperty.call(t.defines,"USE_BP_PEEL"));e!==i&&(t.defines||(t.defines={}),e?t.defines.USE_BP_PEEL="1":delete t.defines.USE_BP_PEEL,t.needsUpdate=!0)}}function Vx(n){let e=new Xe,t=new qe,i=null,r=null,s=null,o=null,a=null,l=null,c=new Pi(-1,1,1,-1,0,1),u=new Gn,h=new _n({uniforms:{tOpaque:{value:null},tAccum:{value:null},uBackground:{value:new qe(1118481)}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new ht(new di(2,2),h);u.add(f);let d=new _n({uniforms:{tSrc:{value:null}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:Vc,blendSrc:Ya,blendDst:ts,blendSrcAlpha:Ya,blendDstAlpha:ts,blendEquation:Ii}),m=new ht(new di(2,2),d),x=new Gn;x.add(m);let g=new _n({uniforms:{uValue:{value:0}},vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:pi}),p=new ht(new di(2,2),g),b=new Gn;b.add(p);let S=new _n({vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      }
    `,depthTest:!1,depthWrite:!1,toneMapped:!1,blending:pi}),v=new ht(new di(2,2),S),M=new Gn;M.add(v);function E(){n.state.buffers.color.setMask(!0),n.state.buffers.depth.setMask(!0)}function y(C){E();let re=n.autoClear;n.setRenderTarget(C),n.autoClear=!1,n.render(M,c),n.autoClear=re}let w=new _n({vertexShader:`
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
    `,depthTest:!0,depthWrite:!0,toneMapped:!1,side:Ot,clipping:!0,blending:pi});function D(C,re,K={}){g.uniforms.uValue.value=re;let Pe=n.autoClear;E(),n.setRenderTarget(C),K.clearDepth&&(n.setClearColor(0,1),n.clear(!1,!0,!1)),n.autoClear=!1,n.render(b,c),n.autoClear=Pe}function N(){i?.dispose(),r?.dispose(),s?.dispose(),o?.dispose(),a?.dispose(),l?.dispose(),i=null,r=null,s=null,o=null,a=null,l=null}let k=0;function q(C,re,K){let Pe=Math.max(1,Math.floor(C)),J=Math.max(1,Math.floor(re)),be=Math.min(1,Math.max(.25,K)),xe=Math.max(1,Math.floor(Pe*be)),Le=Math.max(1,Math.floor(J*be));if(i&&i.width===Pe&&i.height===J&&s&&s.width===xe&&s.height===Le&&k===be)return;N(),k=be,i=new on(Pe,J,{format:wn,type:Nn,colorSpace:At,depthBuffer:!0,stencilBuffer:!1});let P={format:wn,type:Wn,depthBuffer:!0,stencilBuffer:!1,magFilter:$t,minFilter:$t};r=new on(xe,Le,P),s=new on(xe,Le,P),o=new on(xe,Le,P),a=new on(xe,Le,{format:wn,type:Zn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),l=new on(xe,Le,{format:wn,type:Zn,colorSpace:At,depthBuffer:!1,stencilBuffer:!1,magFilter:Yt,minFilter:Yt}),h.uniforms.tOpaque.value=i.texture,h.uniforms.tAccum.value=a.texture,en.tOpaqueViewZ.value=r.texture,en.uResolution.value.set(xe,Le)}function z(C){let re=[],K=[];return C?(C.traverse(Pe=>{if(!Pe.isMesh||!Pe.visible||Bn(Pe))return;let J=Pe,be=Array.isArray(J.material)?J.material:[J.material],xe=!1;for(let Le of be)if(Le&&Le.transparent&&Le.opacity<1-1e-4){xe=!0;break}xe?K.push(J):re.push(J)}),{opaque:re,transparent:K}):{opaque:re,transparent:K}}function O(C,re){for(let K of C)K.visible=re}function Y(C,re){C.blending=re.blending,C.blendSrc=re.blendSrc,C.blendDst=re.blendDst,C.blendSrcAlpha=re.blendSrcAlpha,C.blendDstAlpha=re.blendDstAlpha,C.blendEquation=re.blendEquation,C.blendEquationAlpha=re.blendEquation}let ee={meshes:[],sources:[],key:""},j={meshes:[],sources:[],key:""},ye="",ie="",V=new Gn,ne=new Gn,we=new Gn,Ne=[];function Q(C){for(let re of C.meshes)re.geometry.dispose();C.meshes=[],C.sources=[],C.key=""}function _e(){for(let C of Ne){we.remove(C),C.geometry?.dispose?.();let re=C.material;if(Array.isArray(re))for(let K of re)K?.dispose?.();else re?.dispose?.()}Ne=[]}function oe(){Q(ee),Q(j),_e(),ye="",ie=""}function H(C){if(_e(),!C.length)return;let re=new Map,K=new I;for(let J of C){let be=null;for(let Me of J.children)if(Bn(Me)){be=Me;break}if(!be?.geometry)continue;let xe=be.material,Le=xe&&xe.transparent&&typeof xe.opacity=="number"?xe.opacity:1;if(!(Le<1-1e-4))continue;let P=be.geometry.getAttribute("instanceStart"),T=be.geometry.getAttribute("instanceEnd");if(!P||!T||!P.count)continue;let Z=Le.toFixed(3),ge=re.get(Z);ge||(ge={opacity:Le,planes:xe.clippingPlanes||[],chunks:[]},re.set(Z,ge)),J.updateWorldMatrix(!0,!1);let de=P.count,he=new Float32Array(de*6);for(let Me=0;Me<de;Me++)K.fromBufferAttribute(P,Me).applyMatrix4(J.matrixWorld),he[Me*6]=K.x,he[Me*6+1]=K.y,he[Me*6+2]=K.z,K.fromBufferAttribute(T,Me).applyMatrix4(J.matrixWorld),he[Me*6+3]=K.x,he[Me*6+4]=K.y,he[Me*6+5]=K.z;ge.chunks.push(he)}let Pe={stage:Oi,prevZ:en.tPrevViewZ,peelZ:en.tPeelViewZ,opaqueZ:en.tOpaqueViewZ,eps:en.uViewZEps,resolution:en.uResolution};for(let J of re.values()){let be=0;for(let T of J.chunks)be+=T.length;if(be<6)continue;let xe=new Float32Array(be),Le=0;for(let T of J.chunks)xe.set(T,Le),Le+=T.length;let P=Dx(xe,J.opacity,J.planes,Pe);we.add(P),Ne.push(P)}}function te(C,re,K,Pe){if(!K.length)return;let J=`${zx(K)}#${zx(re)}`;Pe&&Pe===ye&&J===ie&&ee.meshes.length||(Oe(ee,C,K),Oe(j,C,re),ee.sources.length===K.length&&j.sources.length===re.length&&(H(K),ye=Pe||"",ie=J))}function Ie(C){return Object.keys(C.attributes).sort().join(",")}function We(C){let re=C.geometry,K=re.index?re.toNonIndexed():re.clone();return K.applyMatrix4(C.matrixWorld),K}function Oe(C,re,K){let Pe=String(K.length);for(let be of K){let xe=Array.isArray(be.material)?"m":be.material?.id||0;Pe+=`.${be.id}:${xe}`}if(Pe===C.key)return;re.updateWorldMatrix(!0,!0),Q(C),C.key=Pe;let J=new Map;for(let be of K){if(!be.geometry||Array.isArray(be.material)||!be.material)continue;let xe=`${be.material.uuid}:${Ie(be.geometry)}`,Le=J.get(xe);Le||(Le={mat:be.material,meshes:[]},J.set(xe,Le)),Le.meshes.push(be)}for(let be of J.values()){let xe=[];try{for(let T of be.meshes)xe.push(We(T));let Le=D0(xe,!1);if(!Le)continue;let P=new ht(Le,be.mat);P.frustumCulled=!1,P.matrixAutoUpdate=!1,P.renderOrder=0,P.userData.isPeelBatch=!0,C.meshes.push(P),C.sources.push(...be.meshes)}catch{}finally{for(let Le of xe)Le.dispose()}}}function Ge(C,re,K,Pe){if(!C.meshes.length||C.sources.length!==re.length)return n.render(K,Pe),!1;V.environment=K.environment,V.environmentIntensity=K.environmentIntensity,V.fog=K.fog;let J=[];for(let be of K.children)be.isLight&&J.push(be);for(let be of J)V.add(be);for(let be of C.meshes)V.add(be);n.render(V,Pe);for(let be of C.meshes)V.remove(be);for(let be of J)K.add(be);return!0}function tt(C,re,K){Ge(ee,K,C,re)}function He(C,re,K){K.length&&Ge(j,K,C,re)}function Mt(C,re,K){if(!j.meshes.length||j.sources.length!==re.length)return!1;ne.overrideMaterial=K;for(let Pe of j.meshes)ne.add(Pe);n.render(ne,C),ne.overrideMaterial=null;for(let Pe of j.meshes)ne.remove(Pe);return!0}function ut(C){let re=new Set;for(let K of C){let Pe=Array.isArray(K.material)?K.material:[K.material];for(let J of Pe)J&&re.add(J)}return[...re]}function pt(C,re,K){if(!K)return;let Pe=K.visible,J=C.background,be=n.autoClear;K.visible=!1,C.background=null,n.autoClear=!1,E(),n.clearDepth(),n.render(C,re),K.visible=Pe,C.background=J,n.autoClear=be}function Ke(C){return C.children.filter(re=>re.userData?.blueprintAnnotations)}function vt(C,re){for(let K of C)K.visible=re}function me(C,re,K){Ke(C).some(Pe=>Pe.visible)&&pt(C,re,K)}function Qe(C,re,K,Pe={}){os(K,!1);let J=Ke(C),be=J.map(xe=>xe.visible);vt(J,!1),n.setRenderTarget(null),n.autoClear=!0,n.render(C,re),Pe.skipEdges||mp(n,C,re,K,{reuseDepth:!!Pe.reuseDepth}),J.forEach((xe,Le)=>{xe.visible=be[Le]}),me(C,re,K)}function et(C,re,K,Pe,J={}){if(!(Bx&&(typeof Pe=="function"?Pe():!!Pe)))return Oi.value=0,Qe(C,re,K,{reuseDepth:!0}),!1;if(J.quality!=="high"){Oi.value=0,Qe(C,re,K,{reuseDepth:!0});let $=J.batchKey||"";if(K&&!J.deferPrime&&$!==ye){let Ce=z(K);te(K,Ce.opaque,Ce.transparent,$)}return!0}let{opaque:xe,transparent:Le}=z(K);if(!Le.length)return Oi.value=0,Qe(C,re,K,{reuseDepth:!0}),!1;K&&te(K,xe,Le,J.batchKey||"");let P=J.quality==="high",T=P?GT:VT,Z=P?_p:kx;n.getDrawingBufferSize(e),q(e.x,e.y,T);let ge=n.autoClear,de=n.toneMapping,he=C.background;he instanceof qe?t.copy(he):t.set(1118481),h.uniforms.uBackground.value.copy(t);let Me=[];for(let $ of[...xe,...Le])Me.push({mesh:$,visible:$.visible});let ce=ut(Le),ue=[];for(let $ of ce)ml($),ue.push({mat:$,snap:{blending:$.blending,blendSrc:$.blendSrc,blendDst:$.blendDst,blendSrcAlpha:$.blendSrcAlpha,blendDstAlpha:$.blendDstAlpha,blendEquation:$.blendEquation,blendEquationAlpha:$.blendEquationAlpha,depthWrite:$.depthWrite,depthTest:$.depthTest,transparent:$.transparent,opacity:$.opacity,colorWrite:$.colorWrite,side:$.side,forceSinglePass:$.forceSinglePass}});yp(ce,!0);let B=new Map;for(let $ of Le)B.set($,$.onBeforeRender),$.onBeforeRender=function($e,De,ot,Pt,Xt,oi){let ai=Array.isArray(Xt)?Xt:[Xt];for(let Fr of ai)Fr&&xp(Fr);let li=B.get($);typeof li=="function"&&li.call(this,$e,De,ot,Pt,Xt,oi)};let L=null;for(let $ of ce)if($.clippingPlanes?.length){L=$.clippingPlanes;break}if(!L)for(let $ of xe){let Ce=Array.isArray($.material)?$.material:[$.material];for(let $e of Ce)if($e?.clippingPlanes?.length){L=$e.clippingPlanes;break}if(L)break}w.clippingPlanes=L||[],w.clipIntersection=!1,C.background=null,n.autoClear=!0,Oi.value=0;let W=[];for(let $ of C.children)$!==K&&($.isLight||(W.push({obj:$,visible:$.visible}),$.visible=!1));function G(){for(let[$,Ce]of B)$.onBeforeRender=Ce}function pe(){for(let{mat:$,snap:Ce}of ue)Y($,Ce),$.blendEquationAlpha=Ce.blendEquationAlpha,$.depthWrite=Ce.depthWrite,$.depthTest=Ce.depthTest,$.transparent=Ce.transparent,$.opacity=Ce.opacity,$.colorWrite=Ce.colorWrite!==!1,$.side=Ce.side,$.forceSinglePass=Ce.forceSinglePass,$.needsUpdate=!0;for(let{mesh:$,visible:Ce}of Me)$.visible=Ce;for(let{obj:$,visible:Ce}of W)$.visible=Ce;return G(),yp(ce,!1),Oi.value=0,C.background=he,C.overrideMaterial=null,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,Qe(C,re,K),n.autoClear=ge,!1}if(O(Le,!1),O(xe,!0),os(K,!1),E(),n.setRenderTarget(i),n.setClearColor(0,0),n.clear(),He(C,re,xe),n.setRenderTarget(r),n.setClearColor(0,1),D(r,Qu,{clearDepth:!0}),P){let $=new Float32Array(4);try{n.readRenderTargetPixels(r,2,2,1,1,$)}catch{$[0]=0}if(!Number.isFinite($[0])||$[0]<Qu*.5)return pe()}let Ee=C.overrideMaterial;n.setRenderTarget(r),n.autoClear=!1,Mt(re,xe,w)||(C.overrideMaterial=w,n.render(C,re),C.overrideMaterial=Ee),n.autoClear=!0,en.tOpaqueViewZ.value=r.texture,y(a),D(o,0),en.tPrevViewZ.value=o.texture,O(xe,!1),O(Le,!0),os(K,!1);let Ae=!1;for(let $=0;$<Z;$++){en.tPrevViewZ.value=o.texture,en.tPeelViewZ.value=o.texture,Oi.value=1;for(let{mat:De}of ue)De.depthWrite=!0,De.depthTest=!0,De.colorWrite=!0,De.transparent=!0,De.forceSinglePass=!0,Y(De,{blending:pi,blendSrc:ts,blendDst:qa,blendSrcAlpha:ts,blendDstAlpha:qa,blendEquation:Ii}),xp(De);E(),n.setRenderTarget(s),n.setClearColor(0,1),n.clear(!1,!0,!1),D(s,Qu),n.setRenderTarget(s),n.autoClear=!1,tt(C,re,Le),n.autoClear=!0,en.tPeelViewZ.value=s.texture,Oi.value=2;for(let{mat:De}of ue)De.depthWrite=!1,De.depthTest=!1,De.colorWrite=!0,De.transparent=!0,De.forceSinglePass=!0,Y(De,{blending:Yi,blendSrc:$a,blendDst:Do,blendSrcAlpha:ts,blendDstAlpha:Do,blendEquation:Ii}),xp(De);y(l);let Ce=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(l),tt(C,re,Le),n.autoClear=Ce,Ne.length&&l){for(let ot of Ne)ot.material?.resolution?.set(l.width,l.height);let De=re.layers.mask;re.layers.set(0),n.autoClear=!1,n.render(we,re),re.layers.mask=De,n.autoClear=!0}Ae=!0,d.uniforms.tSrc.value=l.texture,n.setRenderTarget(a),n.autoClear=!1,n.render(x,c),n.autoClear=!0;let $e=o;o=s,s=$e}if(!Ae)return pe();for(let{mat:$,snap:Ce}of ue)Y($,Ce),$.blendEquationAlpha=Ce.blendEquationAlpha,$.depthWrite=Ce.depthWrite,$.depthTest=Ce.depthTest,$.transparent=Ce.transparent,$.opacity=Ce.opacity,$.colorWrite=Ce.colorWrite!==!1,$.side=Ce.side,$.forceSinglePass=Ce.forceSinglePass;for(let{mesh:$,visible:Ce}of Me)$.visible=Ce;for(let{obj:$,visible:Ce}of W)$.visible=Ce;G(),os(K,!0),yp(ce,!1),Oi.value=0,C.background=he,n.toneMapping=de,n.setRenderTarget(null),n.autoClear=!0,n.render(u,c);let Re=Ke(C),Ue=Re.map($=>$.visible);return vt(Re,!1),P&&K&&mp(n,C,re,K,{opaqueEdgesOnly:Ne.length>0}),Re.forEach(($,Ce)=>{$.visible=Ue[Ce]}),me(C,re,K),n.autoClear=ge,!0}function Se(){oe(),N(),h.dispose(),f.geometry.dispose(),d.dispose(),m.geometry.dispose(),g.dispose(),p.geometry.dispose(),S.dispose(),v.geometry.dispose(),w.dispose()}return{render:et,dispose:Se,MAX_PEELS:HT,MAX_PEELS_FAST:kx,MAX_PEELS_HIGH:_p,VIEW_Z_EPSILON:Hx,USE_DEPTH_PEEL:Bx}}var Wx="blueprints.materialMode",eh="solid",gl="realistic",WT={floor:[230,115,20],eps:[70,230,25],masonry:[225,70,40],column:[225,70,40],venec:[200,55,35],plaster:[255,225,120],furniture:[255,150,0],cabinet:[214,148,40],worktop:[236,233,226],hob:[24,24,27],appliance:[176,190,205],sink:[40,185,195],rug:[150,70,175],light:[255,210,40],door:[210,140,70],wall_plate:[200,85,10],pocket_frame:[235,185,80],wall_gkf:[230,230,235],rafters:[200,85,10],plenum_wool:[0,210,155],racking_strap:[70,70,80],tie_rod:[35,38,44],slope_light:[28,28,30],roofing:[235,15,15],glazing:[140,210,255],slope_naturheld_140:[15,85,245],slope_gkf:[230,230,235],slope_cd:[120,120,130],slope_nonius:[90,90,100],soffit_naturheld_140:[15,85,245],soffit_mineral_wool:[0,210,155],soffit_ud:[120,120,130],soffit_gkf:[230,230,235],soffit_cd:[120,120,130],soffit_nonius:[90,90,100],soffit_duct:[168,176,188],bass_mineral_wool:[0,210,155],bass_gkb:[230,230,235],bass_cd:[120,120,130],bass_wall_hanger:[90,90,100],tile:[222,205,176],grout:[48,46,44],drain:[176,184,190],fixture:[236,236,232],prewall:[196,184,168],screen:[170,210,220],profile:[190,196,200],vanity:[186,140,90]},XT={floor:0,eps:1,masonry:2,column:2,venec:2,plaster:3,pocket_frame:4,wall_gkf:4,bass_gkb:4,slope_gkf:4,soffit_gkf:4,furniture:6,cabinet:6,worktop:6,hob:7,appliance:7,sink:7,rug:1,light:8,door:6,soffit_ud:8,slope_cd:8,soffit_cd:8,bass_cd:8,slope_nonius:9,soffit_nonius:9,soffit_duct:9,bass_wall_hanger:9,racking_strap:9,tie_rod:9,slope_light:8,wall_plate:9,plenum_wool:10,soffit_mineral_wool:10,bass_mineral_wool:10,rafters:11,roofing:12,slope_naturheld_140:13,soffit_naturheld_140:13,glazing:14,tile:0,grout:0,drain:0,fixture:6,prewall:5,screen:14,profile:7,vanity:6},qT=2e-6,$T=3,gp="defined( USE_LOGARITHMIC_DEPTH_BUFFER ) || defined( USE_LOGDEPTHBUF )";function bp(n,e=0){if(n.userData.layerDepthPatched)return;let t=Math.max(0,Math.round(Number(e)||0));if(n.userData.layerDepthBias=t,!(t>0))return;n.userData.layerDepthPatched=!0;let i=n.onBeforeCompile?.bind(n),r=n.customProgramCacheKey?.bind(n),s=qT.toExponential(8);n.onBeforeCompile=(o,a)=>{i?.(o,a),o.fragmentShader=o.fragmentShader.replace("#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
#if ${gp}
	{
		float bpFaceBias = ${t}.0 * ${s};
		float bpGraze = min(bpFaceBias, 0.35 * fwidth(gl_FragDepth));
		gl_FragDepth -= bpFaceBias + bpGraze;
	}
#endif`)},n.customProgramCacheKey=()=>`${r?r():n.type}|bpLayerDepth-r${$T}-${t}`,n.needsUpdate=!0}var YT=[];function Xx(n,e,t){let i=new Set(n),r=Array.isArray(e)&&e.length?e:YT,s=typeof t=="function"?t:l=>l;function o(l){let c=[];for(let u of l){if(typeof u=="string"){if(!i.has(u))continue;i.delete(u),c.push({type:"leaf",id:u,label:s(u)});continue}let h=o(u.children||[]);h.length&&c.push({type:"group",id:u.id,label:s(u.id),children:h})}return c}let a=o(r);if(i.size){let l=[...i].sort((c,u)=>c.localeCompare(u)).map(c=>({type:"leaf",id:c,label:s(c)}));a.push({type:"group",id:"other",label:s("other"),children:l})}return a}function qx(n,e){if(!n||typeof n!="object")return{};let t=new Map;for(let r of e)r.type==="group"&&t.set(r.id,th(r));let i={};for(let[r,s]of Object.entries(n)){let o=t.get(r);if(o&&o.length)for(let a of o)i[a]=s;else i[r]=s}return i}function th(n){if(n.type==="leaf")return[n.id];let e=[];for(let t of n.children)e.push(...th(t));return e}function ZT(n,e,t="transparent"){if(t==="none")return;let i=t==="opaque"?1:Math.max(0,Math.min(1,Number(e)||0));for(let r of n.children||[]){if(!r?.userData?.isEdgeOverlay||!r.material)continue;let s=Array.isArray(r.material)?r.material:[r.material];for(let o of s)o&&(i<1?(o.transparent=!0,o.opacity=i,o.depthWrite=!1):(o.transparent=!1,o.opacity=1),o.needsUpdate=!0)}}function Nr(n,e,t={}){let i=Math.max(0,Math.min(1,Number(e)||0)),r=t.edgeMode??"transparent";for(let s of n){if(!s)continue;if(i<=0||s.userData?.bpIfcHidden){s.visible=!1;continue}if(s.visible=!0,!s.isMesh)continue;let o=Array.isArray(s.material)?s.material:[s.material];for(let a of o)a&&(i<1?(a.transparent=!0,a.opacity=i,a.depthWrite=!1,a.depthTest=!0,a.side=Ot,a.forceSinglePass=!0,a.userData.needsDepthPeel=!0):(a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.side=Ot,a.forceSinglePass=!1,a.blending=Yi,a.userData.needsDepthPeel=!1),a.needsUpdate=!0);typeof s.userData.opaqueRenderOrder!="number"&&(s.userData.opaqueRenderOrder=s.renderOrder||0),s.renderOrder=i<1?0:s.userData.opaqueRenderOrder,ZT(s,i,r);for(let a of s.children||[]){if(!a?.userData?.isSectionCap||!a.material)continue;a.visible=!0,a.renderOrder=s.renderOrder;let l=Array.isArray(a.material)?a.material:[a.material];for(let c of l)c&&(c.opacity=i,c.transparent=i<1,c.depthWrite=i>=1,c.depthTest=!0,c.forceSinglePass=i<1,c.side=Ot,c.needsUpdate=!0)}}}var KT={floor:{color:[230,115,20],roughness:.68,metalness:0,map:"wood"},eps:{color:[70,230,25],roughness:.94,metalness:0,map:"foam"},masonry:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},column:{color:[225,70,40],roughness:.9,metalness:0,map:"masonry"},venec:{color:[200,55,35],roughness:.9,metalness:0,map:"masonry"},plaster:{color:[255,225,120],roughness:.92,metalness:0,map:"plaster"},furniture:{color:[255,150,0],roughness:.38,metalness:0,clearcoat:.35,clearcoatRoughness:.28,map:"wood"},cabinet:{color:[214,148,40],roughness:.4,metalness:0,clearcoat:.3,clearcoatRoughness:.3,map:"wood"},worktop:{color:[236,233,226],roughness:.3,metalness:0,clearcoat:.4,clearcoatRoughness:.2,map:"plaster"},hob:{color:[24,24,27],roughness:.1,metalness:0,clearcoat:.8,clearcoatRoughness:.05,map:"none"},appliance:{color:[176,190,205],roughness:.28,metalness:.65,map:"metal"},sink:{color:[40,185,195],roughness:.22,metalness:.15,map:"none"},rug:{color:[150,70,175],roughness:.92,metalness:0,map:"none"},light:{color:[255,210,40],roughness:.35,metalness:.2,map:"metal"},wall_plate:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},pocket_frame:{color:[235,185,80],roughness:.7,metalness:0,map:"plaster"},wall_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},rafters:{color:[200,85,10],roughness:.55,metalness:0,map:"wood"},plenum_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},racking_strap:{color:[70,70,80],roughness:.45,metalness:.8,map:"metal"},tie_rod:{color:[35,38,44],roughness:.35,metalness:.9,map:"metal"},slope_light:{color:[28,28,30],roughness:.4,metalness:.6,map:"metal"},roofing:{color:[235,15,15],roughness:.32,metalness:.45,map:"metal"},glazing:{color:[140,210,255],roughness:.08,metalness:.05,map:"none"},slope_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},slope_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},slope_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},slope_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},soffit_naturheld_140:{color:[15,85,245],roughness:.78,metalness:.08,map:"plaster"},soffit_ud:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_gkf:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},soffit_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},soffit_nonius:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},soffit_duct:{color:[168,176,188],roughness:.35,metalness:.85,map:"metal"},bass_mineral_wool:{color:[0,210,155],roughness:.97,metalness:0,map:"wool"},bass_gkb:{color:[230,230,235],roughness:.88,metalness:0,map:"plaster"},bass_cd:{color:[120,120,130],roughness:.35,metalness:.7,map:"metal"},bass_wall_hanger:{color:[90,90,100],roughness:.4,metalness:.75,map:"metal"},tile:{color:[222,205,176],roughness:.42,metalness:0,map:"none"},grout:{color:[48,46,44],roughness:.9,metalness:0,map:"none"},drain:{color:[176,184,190],roughness:.28,metalness:.7,map:"metal"},fixture:{color:[236,236,232],roughness:.35,metalness:0,map:"none"},prewall:{color:[196,184,168],roughness:.8,metalness:0,map:"none"},screen:{color:[170,210,220],roughness:.08,metalness:.05,map:"none"},profile:{color:[190,196,200],roughness:.25,metalness:.85,map:"metal"},vanity:{color:[186,140,90],roughness:.55,metalness:0,map:"wood"}},vp=new Map;function jT(n){if(!n||n==="none")return null;let e=vp.get(n);if(e)return e;let t=128,i=document.createElement("canvas");i.width=t,i.height=t;let r=i.getContext("2d");if(!r)return null;if(n==="wood"){r.fillStyle="#c49858",r.fillRect(0,0,t,t);for(let o=0;o<t;o++){let a=Math.sin(o*.35)*8+Math.sin(o*.11)*4,l=130+o*17%50;r.strokeStyle=`rgba(${l-40}, ${l-60}, ${l-100}, 0.55)`,r.lineWidth=1.2,r.beginPath(),r.moveTo(0,o+a*.15),r.lineTo(t,o-a*.1),r.stroke()}for(let o=0;o<60;o++){let a=o*37%t,l=o*53%t;r.fillStyle="rgba(70, 40, 15, 0.22)",r.fillRect(a,l,2,7+o%5)}}else if(n==="foam"){r.fillStyle="#9ed468",r.fillRect(0,0,t,t);for(let o=0;o<t;o+=7)for(let a=0;a<t;a+=7){let l=o/7%2*3.5,c=2.4+a*o%5*.2;r.beginPath(),r.arc(a+l+3.5,o+3.5,c,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.55)",r.fill(),r.strokeStyle="rgba(40,90,30,0.35)",r.stroke()}}else if(n==="plaster"){let o=r.createImageData(t,t);for(let a=0;a<o.data.length;a+=4){let l=200+a*13%45;o.data[a]=l,o.data[a+1]=l-10,o.data[a+2]=l-22,o.data[a+3]=255}r.putImageData(o,0,0)}else if(n==="wool"){r.fillStyle="#88c860",r.fillRect(0,0,t,t);for(let o=0;o<1400;o++){let a=o*47%t,l=o*91%t;r.fillStyle=o%3===0?"rgba(255,255,255,0.4)":"rgba(30,70,20,0.28)",r.fillRect(a,l,1+o%2,2+o%3)}}else if(n==="metal"){let o=r.createLinearGradient(0,0,t,t);o.addColorStop(0,"#a02820"),o.addColorStop(.4,"#f07060"),o.addColorStop(.55,"#701810"),o.addColorStop(1,"#d04838"),r.fillStyle=o,r.fillRect(0,0,t,t);for(let a=0;a<t;a+=9)r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(0,a,t,2),r.fillStyle="rgba(0,0,0,0.28)",r.fillRect(0,a+4,t,2)}else if(n==="masonry"){r.fillStyle="#b88868",r.fillRect(0,0,t,t);let o=16,a=32;for(let l=0;l<t/o;l++){let c=l%2*(a/2);for(let u=-1;u<t/a+1;u++){let h=u*a+c,f=l*o;r.fillStyle=`rgba(${170+(l+u)%3*18}, ${110+l%4*10}, ${70+u%3*12}, 0.75)`,r.fillRect(h+1,f+1,a-2,o-2),r.strokeStyle="rgba(70,45,30,0.55)",r.strokeRect(h+.5,f+.5,a-1,o-1)}}}else return null;let s=new wr(i);return s.colorSpace=At,s.wrapS=Ri,s.wrapT=Ri,s.repeat.set(2.5,2.5),s.needsUpdate=!0,vp.set(n,s),s}function Gx(n){return new qe(n[0]/255,n[1]/255,n[2]/255)}function JT(n){return WT[n]||[160,160,160]}function QT(n,e,t=0){n.side=Ot,t>0?(n.polygonOffset=!0,n.polygonOffsetFactor=-t,n.polygonOffsetUnits=-t*2):(n.polygonOffset=!1,n.polygonOffsetFactor=0,n.polygonOffsetUnits=0),e?(n.clippingPlanes=e,n.clipIntersection=!1):n.clippingPlanes=[],bp(n,t),ml(n),n.needsUpdate=!0}function $x(n){n.computeBoundingBox();let e=n.boundingBox,t=new I;e.getSize(t);let i=Math.max(t.x,1e-6),r=Math.max(t.y,1e-6),s=Math.max(t.z,1e-6),o=Math.max(i,r,s);n.getAttribute("normal")||n.computeVertexNormals();let a=n.getAttribute("position"),l=n.getAttribute("normal");if(!a)return o;let c=n.getAttribute("uv");if(c&&c.count===a.count)return o;let u=new Float32Array(a.count*2),h=new I;for(let f=0;f<a.count;f++){h.fromBufferAttribute(a,f);let d=Math.abs(l.getX(f)),m=Math.abs(l.getY(f)),x=Math.abs(l.getZ(f)),g,p;m>=d&&m>=x?(g=(h.x-e.min.x)/i,p=(h.z-e.min.z)/s):d>=x?(g=(h.z-e.min.z)/s,p=(h.y-e.min.y)/r):(g=(h.x-e.min.x)/i,p=(h.y-e.min.y)/r),u[f*2]=g,u[f*2+1]=p}return n.setAttribute("uv",new Ht(u,2)),o}function eA(n,e){let t=jT(n);if(!t)return null;let i=t.clone();i.needsUpdate=!0;let r=Math.max(1.2,Math.min(12,e/400));return i.repeat.set(r,r),i}function Yx(n,e,t={}){let i=t.clippingPlanes??null,r=e===gl,s=t.opacityByLabel??null,o=t.edgeMode??"transparent";for(let[a,l]of n){let c=JT(a),u=XT[a]??0,h=1e3;if(r)for(let p of l)p.isMesh&&p.geometry&&(h=Math.max(h,$x(p.geometry)));let f=1,d;if(r){let p=KT[a]||{color:c,roughness:.7,metalness:0,map:"none"};f=typeof p.opacity=="number"?p.opacity:1;let b=Gx(p.color),S=eA(p.map||"none",h);p.clearcoat?d=new fn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,clearcoat:p.clearcoat,clearcoatRoughness:p.clearcoatRoughness??.3,envMapIntensity:.85}):d=new Dn({color:b,map:S,roughness:p.roughness,metalness:p.metalness,envMapIntensity:p.metalness>.05?1.1:.55})}else d=new an({color:Gx(c)});QT(d,i,u),d.userData.presetOpacity=f;let m=new Set;for(let p of l){if(!p.isMesh)continue;let b=p.material;if(b){let S=Array.isArray(b)?b:[b];for(let v of S)m.add(v)}p.material=d,p.userData.opaqueRenderOrder=u,p.renderOrder=u}for(let p of m)p!==d&&(p.map&&[...vp.values()].includes(p.map)?p.map=null:p.map&&(p.map.dispose?.(),p.map=null),p.dispose?.());let x=1;s&&(s instanceof Map?x=s.has(a)?s.get(a):1:typeof s[a]=="number"&&(x=s[a]));let g=Math.max(0,Math.min(1,f*(Number(x)||0)));Nr(l,g,{edgeMode:o})}}function Zx(n,e){let i=(Array.isArray(n)?n:[n]).map(r=>{if(!r)return new Dn({color:13421772,roughness:.65,metalness:0,side:ii});let s=r.color?r.color.clone():new qe(13421772),o=typeof r.roughness=="number"?r.roughness:.65,a=typeof r.metalness=="number"?r.metalness:0,l=null;r.map&&e&&($x(e),l=r.map.clone(),l.needsUpdate=!0);let c=new Dn({color:s,map:l,roughness:o,metalness:a,side:ii,transparent:!!r.transparent,opacity:typeof r.opacity=="number"?r.opacity:1});return c.clippingPlanes=null,c.clipIntersection=!1,c});return Array.isArray(n)?i:i[0]}function Kx(){try{let n=localStorage.getItem(Wx);if(n===gl||n===eh)return n}catch{}return eh}function jx(n){try{localStorage.setItem(Wx,n)}catch{}}var nr=1e-5,Jx=new WeakMap;function si(n,e,t,i){let r=t/(t-i);return n.clone().lerp(e,r)}function tA(n,e,t){let[i,r,s]=n,o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=e.distanceToPoint(s),c=o>=-nr,u=a>=-nr,h=l>=-nr,f=(c?1:0)+(u?1:0)+(h?1:0);if(f===3){t.push([i,r,s]);return}if(f===0)return;let d=[i,r,s],m=[o,a,l],x=[c,u,h];if(f===1){let S=x.findIndex(Boolean),v=(S+1)%3,M=(S+2)%3,E=d[S],y=si(d[S],d[v],m[S],m[v]),w=si(d[S],d[M],m[S],m[M]);t.push([E,y,w]);return}let g=x.findIndex(S=>!S),p=(g+1)%3,b=(g+2)%3;if(x[p]){let S=d[p],v=d[b],M=si(d[g],d[p],m[g],m[p]),E=si(d[g],d[b],m[g],m[b]);t.push([S,v,M]),t.push([v,E,M])}else{let S=d[b],v=si(d[g],d[p],m[g],m[p]),M=si(d[g],d[b],m[g],m[b]);t.push([S,v,M])}}function nA(n,e){let[t,i,r]=n,s=e.distanceToPoint(t),o=e.distanceToPoint(i),a=e.distanceToPoint(r),l=s>=-nr,c=o>=-nr,u=a>=-nr,h=(l?1:0)+(c?1:0)+(u?1:0);if(h===0||h===3)return null;let f=[t,i,r],d=[s,o,a],m=[l,c,u];if(h===1){let b=m.findIndex(Boolean),S=(b+1)%3,v=(b+2)%3;return[si(f[b],f[S],d[b],d[S]),si(f[b],f[v],d[b],d[v])]}let x=m.findIndex(b=>!b),g=(x+1)%3,p=(x+2)%3;return m[g]?[si(f[x],f[g],d[x],d[g]),si(f[x],f[p],d[x],d[p])]:[si(f[x],f[g],d[x],d[g]),si(f[x],f[p],d[x],d[p])]}function iA(n,e,t){let i=n.clone(),r=e.clone();for(let s of t){let o=s.distanceToPoint(i),a=s.distanceToPoint(r),l=o>=-nr,c=a>=-nr;if(l&&c)continue;if(!l&&!c)return null;let u=si(i,r,o,a);l?r=u:i=u}return i.distanceToSquared(r)<nr*nr?null:[i,r]}function rA(n,e){let t=n;for(let i of e){let r=[];for(let s of t)tA(s,i,r);if(t=r,t.length===0)break}return t}function sA(n,e){let t=n.getAttribute("position");if(!t)return[];let i=new I,r=[],s=n.getIndex();function o(a,l,c){r.push([i.fromBufferAttribute(t,a).applyMatrix4(e).clone(),i.fromBufferAttribute(t,l).applyMatrix4(e).clone(),i.fromBufferAttribute(t,c).applyMatrix4(e).clone()])}if(s)for(let a=0;a<s.count;a+=3)o(s.getX(a),s.getX(a+1),s.getX(a+2));else for(let a=0;a<t.count;a+=3)o(a,a+1,a+2);return r}function oA(n){let e=n.getAttribute("position");if(!e)return[];let t=new I,i=[],r=n.getIndex();function s(o,a,l){i.push([t.fromBufferAttribute(e,o).clone(),t.fromBufferAttribute(e,a).clone(),t.fromBufferAttribute(e,l).clone()])}if(r)for(let o=0;o<r.count;o+=3)s(r.getX(o),r.getX(o+1),r.getX(o+2));else for(let o=0;o<e.count;o+=3)s(o,o+1,o+2);return i}var Bs=1e-6,Qx=2e-4,aA=2e-4,ey=new WeakMap;function lA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(6)},${t.normal.y.toFixed(6)},${t.normal.z.toFixed(6)},${t.constant.toFixed(6)};`;return e}function ty(n){let e=t=>Math.round(t/Bs);return`${e(n.x)},${e(n.y)},${e(n.z)}`}function ry(n,e){let t=lA(e),i=ey.get(n);if(i&&i.key===t)return i;let r=[],s=[],o=Jx.get(n);if(o||(o=oA(n),Jx.set(n,o)),o.length&&e?.length)for(let l=0;l<e.length;l++){let c=e[l],u=e.filter((f,d)=>d!==l),h=[];for(let f of o){let d=nA(f,c);if(!d)continue;let m=u.length?iA(d[0],d[1],u):d;m&&(h.push(m),r.push(m[0].x,m[0].y,m[0].z,m[1].x,m[1].y,m[1].z))}s.push(h)}let a={key:t,segments:new Float32Array(r),perPlane:s};return ey.set(n,a),a}function cA(n,e,t){let i=new Map;for(let l of n.keys())i.set(l,l);function r(l){let c=l;for(;i.get(c)!==c;){let u=i.get(i.get(c));i.set(c,u),c=u}return c}function s(l){let c=r(l),u=0;for(let h of t.get(c)||[])e[h].dead||u++;return u}function o(){let l=[];for(let c of n.keys())r(c)===c&&s(c)%2&&l.push(c);return l}let a=Qx*Qx;for(let l=0;l<e.length+2;l++){let c=o();if(c.length<2)break;let u=-1,h=-1,f=1/0;for(let p=0;p<c.length;p++){let b=n.get(c[p]);for(let S=p+1;S<c.length;S++){let v=n.get(c[S]),M=b.x-v.x,E=b.y-v.y,y=b.z-v.z,w=M*M+E*E+y*y;w<f&&(f=w,u=p,h=S)}}if(f>a)break;let d=c[u],m=c[h],x=n.get(d),g=n.get(m);x.add(g).multiplyScalar(.5);for(let p of t.get(m)||[]){let b=e[p];if(b.dead)continue;let S=r(b.a===m?b.b:b.a);if(S===d){b.dead=!0;continue}b.a=d,b.b=S,t.has(d)||t.set(d,[]),t.get(d).push(p)}i.set(m,d)}}function uA(n){let e=new Map,t=[],i=new Map;for(let[o,a]of n){let l=ty(o),c=ty(a);if(l===c)continue;e.has(l)||e.set(l,o.clone()),e.has(c)||e.set(c,a.clone());let u=t.length;t.push({a:l,b:c,used:!1,dead:!1}),i.has(l)||i.set(l,[]),i.has(c)||i.set(c,[]),i.get(l).push(u),i.get(c).push(u)}cA(e,t,i);function r(o,a){let l=i.get(o)||[],c=-1,u=-1/0,h=e.get(o),f=a?e.get(a):null;for(let d of l){if(t[d].used||t[d].dead)continue;if(!f)return d;let m=t[d],x=m.a===o?m.b:m.a,g=e.get(x),p=h.x-f.x,b=h.y-f.y,S=h.z-f.z,v=g.x-h.x,M=g.y-h.y,E=g.z-h.z,y=p*v+b*M+S*E;y>u&&(u=y,c=d)}return c}let s=[];for(let o=0;o<t.length;o++){if(t[o].used||t[o].dead)continue;let a=[],l=[],c=o,u=t[c].a,h=u,f=null,d=!1,m=t.length+2;for(let x=0;x<m;x++){t[c].used=!0,l.push(c),a.push(e.get(u).clone());let g=t[c].a===u?t[c].b:t[c].a;if(g===h){d=!0;break}let p=r(g,u);if(p<0)break;f=u,u=g,c=p}d&&a.length>=3&&s.push(a)}return s}function hA(n){let e=n.clone().normalize(),t=Math.abs(e.x)<.9?new I(1,0,0):new I(0,1,0),i=new I().crossVectors(t,e).normalize(),r=new I().crossVectors(e,i).normalize();return{u:i,v:r,n:e}}function fA(n,e,t,i){return n.map(r=>{let s=r.clone().sub(e);return{x:s.dot(t),y:s.dot(i),p3:r}})}function dA(n){let e=0;for(let t=0;t<n.length;t++){let i=(t+1)%n.length;e+=n[t].x*n[i].y-n[i].x*n[t].y}return e*.5}function pA(n){return dA(n)<0&&n.reverse(),n}function ny(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){let o=t[r].y,a=t[s].y,l=t[r].x,c=t[s].x;o>e!=a>e&&n<(c-l)*(e-o)/(a-o+0)+l&&(i=!i)}return i}function Or(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function mA(n,e,t,i){let r=Or(n,e,t),s=Or(n,e,i),o=Or(t,i,n),a=Or(t,i,e);return r*s<0&&o*a<0}function iy(n,e,t,i){let r=t.length;for(let s=0;s<r;s++){let o=(s+1)%r;if(!(i>=0&&(s===i||o===i))&&mA(n,e,t[s],t[o]))return!0}return!1}function gA(n,e){let t=0;for(let f=1;f<e.length;f++)e[f].x>e[t].x&&(t=f);let i=e[t],r=-1,s=1/0,o=n.length;for(let f=0;f<o;f++){let d=n[f],m=n[(f+1)%o];if(d.y>i.y==m.y>i.y)continue;let x=m.y-d.y;if(Math.abs(x)<1e-15)continue;let g=(i.y-d.y)/x;if(g<-1e-8||g>1+1e-8)continue;let p=d.x+g*(m.x-d.x);p>=i.x-1e-8&&p<s&&(s=p,r=f)}let a=[];r>=0&&a.push(r,(r+1)%o);let l=0,c=1/0;for(let f=0;f<o;f++){let d=(n[f].x-i.x)**2+(n[f].y-i.y)**2;d<c&&(c=d,l=f)}a.push(l);let u=-1;for(let f of a)if(!iy(i,n[f],n,f)&&!iy(i,n[f],e,t)){u=f;break}if(u<0)return null;let h=[];for(let f=0;f<o;f++)if(h.push(n[f]),f===u){for(let d=0;d<e.length;d++)h.push(e[(t-d+e.length)%e.length]);h.push(e[t]),h.push(n[f])}return h}function Mp(n,e){return(n.x-e.x)**2+(n.y-e.y)**2<=Bs*Bs}function xA(n,e,t,i){if(Mp(n,e)||Mp(n,t)||Mp(n,i))return!1;let r=Or(e,t,n),s=Or(t,i,n),o=Or(i,e,n),a=r<-1e-14||s<-1e-14||o<-1e-14,l=r>1e-14||s>1e-14||o>1e-14;return!(a&&l)}function yA(n){let e=[];for(let r of n){let s=e[e.length-1];s&&(s.x-r.x)**2+(s.y-r.y)**2<Bs*Bs||e.push(r)}if(e.length>=2){let r=e[0],s=e[e.length-1];(r.x-s.x)**2+(r.y-s.y)**2<Bs*Bs&&e.pop()}let t=[],i=e.length*e.length+8;for(;e.length>3&&i-- >0;){let r=!1,s=e.length;for(let o=0;o<s;o++){let a=(o+s-1)%s,l=(o+1)%s,c=e[a],u=e[o],h=e[l],f=Or(c,u,h);if(f<-1e-14)continue;if(f<=1e-14){e.splice(o,1),r=!0;break}let d=!1;for(let m=0;m<s;m++)if(!(m===o||m===a||m===l)&&xA(e[m],c,u,h)){d=!0;break}if(!d){t.push([c.p3,u.p3,h.p3]),e.splice(o,1),r=!0;break}}if(!r)break}return e.length===3&&Or(e[0],e[1],e[2])>1e-14&&t.push([e[0].p3,e[1].p3,e[2].p3]),t}function _A(n,e,t){if(!n.length)return[];let{u:i,v:r,n:s}=hA(e.normal),o=n[0][0],a=n.map(u=>pA(fA(u,o,i,r))),l=a.map((u,h)=>{let f=u[0],d=0;for(let m=0;m<a.length;m++)m!==h&&ny(f.x,f.y,a[m])&&d++;return d}),c=[];for(let u=0;u<a.length;u++){if(l[u]%2!==0)continue;let h=a[u].slice();for(let d=0;d<a.length;d++){if(l[d]!==l[u]+1||!ny(a[d][0].x,a[d][0].y,h))continue;let m=gA(h,a[d]);m&&(h=m)}let f=yA(h);for(let d of f)c.push(d.map(m=>m.clone().addScaledVector(s,t)))}return c}function sy(n,e){return!n||!e?.length?[]:ry(n,e).perPlane}function oy(n,e,t=0){if(!n?.length||!e)return new Float32Array(0);let i=uA(n),r=_A(i,e,aA+Math.max(0,t));if(!r.length)return new Float32Array(0);let s=new Float32Array(r.length*9),o=0;for(let[a,l,c]of r)s[o++]=a.x,s[o++]=a.y,s[o++]=a.z,s[o++]=l.x,s[o++]=l.y,s[o++]=l.z,s[o++]=c.x,s[o++]=c.y,s[o++]=c.z;return s}function Fx(n,e){return!n||!e?.length?new Float32Array(0):ry(n,e).segments}function Ju(n,e){if(!n?.length)return[];let t=new it().copy(e).invert();return n.map(i=>i.clone().applyMatrix4(t))}function vA(n){let e=new Float32Array(n.length*9),t=0;for(let[r,s,o]of n)e[t++]=r.x,e[t++]=r.y,e[t++]=r.z,e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=o.x,e[t++]=o.y,e[t++]=o.z;let i=new kt;return i.setAttribute("position",new Ht(e,3)),i.computeVertexNormals(),i}function ay(n,e){if(!n.visible||!n.geometry)return null;let t=sA(n.geometry,n.matrixWorld);if(t.length===0)return null;let i=e.length?rA(t,e):t;if(i.length===0)return null;let r=vA(i),s=Zx(n.material,r),o=new ht(r,s);return o.name=n.name,o}var bA=5e-5;function ih(n){return!!(n&&n.userData&&n.userData.isSectionCap)}function Sp(n){return n?Array.isArray(n)?n[0]||null:n:null}function cy(n,e){let t;return n.isMeshPhysicalMaterial?t=new fn:n.isMeshStandardMaterial?t=new Dn:t=new an,n.color&&t.color&&t.color.copy(n.color),n.map&&"map"in t&&(t.map=n.map),typeof n.roughness=="number"&&"roughness"in t&&(t.roughness=n.roughness),typeof n.metalness=="number"&&"metalness"in t&&(t.metalness=n.metalness),typeof n.clearcoat=="number"&&"clearcoat"in t&&(t.clearcoat=n.clearcoat,t.clearcoatRoughness=n.clearcoatRoughness??.3),typeof n.envMapIntensity=="number"&&"envMapIntensity"in t&&(t.envMapIntensity=n.envMapIntensity),t.opacity=typeof n.opacity=="number"?n.opacity:1,t.transparent=!!n.transparent,t.depthWrite=n.depthWrite!==!1,t.depthTest=n.depthTest!==!1,t.side=Ot,t.forceSinglePass=!!n.forceSinglePass,t.toneMapped=n.toneMapped!==!1,t.polygonOffset=!!n.polygonOffset,t.polygonOffsetFactor=n.polygonOffsetFactor||0,t.polygonOffsetUnits=n.polygonOffsetUnits||0,t.clippingPlanes=e,t.clipIntersection=!1,bp(t,n.userData?.layerDepthBias||0),ml(t),t.needsUpdate=!0,t}function nh(n){n.parent?.remove(n),n.geometry?.dispose?.();let e=n.material,t=Array.isArray(e)?e:[e];for(let i of t)i&&(i.map=null),i?.dispose?.()}function MA(n){let e="";for(let t of n)e+=`${t.normal.x.toFixed(5)},${t.normal.y.toFixed(5)},${t.normal.z.toFixed(5)},${t.constant.toFixed(5)};`;return e}function SA(n,e){if(!n)return null;for(let t of n.children)if(t.userData?.isSectionCap&&t.userData.capLabel===e)return t;return null}function uy(n,e){let t=new Set;for(let i of n){let r=i.parent;if(!r||t.has(r))continue;t.add(r);let s=SA(r,e);if(s)return s}return null}function ly(n,e,t){n.visible=!0;for(let i of n.children){if(!i.isMesh)continue;let r=Sp(i.material);r&&(e.color&&r.color&&r.color.copy(e.color),r.opacity=typeof e.opacity=="number"?e.opacity:1,r.transparent=!!e.transparent,r.depthWrite=e.depthWrite!==!1,r.depthTest=e.depthTest!==!1,r.forceSinglePass=!!e.forceSinglePass,r.side=Ot,r.needsUpdate=!0,i.visible=!0,i.renderOrder=t)}}function wA(n,e,t,i){let r=e.filter(d=>d?.isMesh&&d.visible&&!ih(d)&&d.geometry),s=uy(e,n);if(!r.length||!t.length){s&&nh(s);return}let o=r[0],a=o.parent;if(!a)return;s&&s.parent!==a&&nh(s);let l=s&&s.parent===a?s:new Et;for(let d of[...l.children])nh(d);l.parent||(l.name=`${n}__caps`,l.userData.isSectionCap=!0,l.userData.capLabel=n,a.add(l));let c=Sp(o.material);if(!c)return;a.updateWorldMatrix(!0,!0);let u=new it().copy(a.matrixWorld).invert(),h=typeof o.userData.opaqueRenderOrder=="number"?o.userData.opaqueRenderOrder:o.renderOrder||0,f=t.map(()=>[]);for(let d of r){d.updateWorldMatrix(!0,!1);let m=Ju(t,d.matrixWorld),x=sy(d.geometry,m);for(let g=0;g<t.length;g++){let p=x[g]||[];for(let[b,S]of p)f[g].push([b.clone().applyMatrix4(d.matrixWorld),S.clone().applyMatrix4(d.matrixWorld)])}}for(let d=0;d<t.length;d++){let m=oy(f[d],t[d],h*bA);if(m.length<9)continue;for(let b=0;b<m.length;b+=3){let S=new I(m[b],m[b+1],m[b+2]).applyMatrix4(u);m[b]=S.x,m[b+1]=S.y,m[b+2]=S.z}let x=new kt;x.setAttribute("position",new Ht(m,3)),x.computeVertexNormals();let g=t.filter((b,S)=>S!==d),p=new ht(x,cy(c,g));p.name=`${n}__cap${d}`,p.userData.isSectionCap=!0,p.userData.capPlaneIndex=d,p.userData.capLabel=n,p.renderOrder=o.renderOrder,p.raycast=()=>{},l.add(p)}l.userData.bpCapSig=i,l.userData.bpCapMatUuid=c.uuid,l.visible=l.children.length>0}function wp(n,e){let t=e||[],i=MA(t);for(let[r,s]of n){let o=(s||[]).filter(u=>u&&!ih(u));if(!o.length)continue;let a=o.filter(u=>u.visible),l=uy(o,r);if(!t.length||!a.length){l&&nh(l);continue}let c=Sp(a[0].material);if(l&&l.userData.bpCapSig===i&&c&&l.userData.bpCapMatUuid===c.uuid&&l.children.length){ly(l,c,a[0].renderOrder||0);continue}if(l&&l.userData.bpCapSig===i&&c&&l.children.length){for(let u of l.children){if(!u.isMesh)continue;let h=u.material,f=u.userData.capPlaneIndex,d=typeof f=="number"?t.filter((x,g)=>g!==f):t;u.material=cy(c,d);let m=Array.isArray(h)?h:[h];for(let x of m)x&&(x.map=null),x?.dispose?.()}l.userData.bpCapMatUuid=c.uuid,ly(l,c,a[0].renderOrder||0);continue}wA(r,o,t,i)}}var EA=2,TA=.45,hy=.015;function Ep(n){let e=new Nt().setFromObject(n);if(e.isEmpty())return{cx:0,cz:0,minY:0,spanM:0,scale:1,liftM:hy};let t=new I;e.getSize(t);let i=Math.max(t.x,t.y,t.z,1e-9),r=i>EA?TA/i:1;return{cx:(e.min.x+e.max.x)/2,cz:(e.min.z+e.max.z)/2,minY:e.min.y,spanM:i,scale:r,liftM:hy}}function fy(n,e=Ep(n)){let{cx:t,cz:i,minY:r,scale:s,liftM:o}=e;return n.position.set(-t*s,-r*s+o,-i*s),n.scale.setScalar(s),n.updateMatrixWorld(!0),e}var AA=`
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
`,dy=!1;function RA(){if(dy)return;dy=!0;let n=document.createElement("style");n.id="bp-viewer-chrome",n.textContent=AA,document.head.appendChild(n)}function py(n){RA();let e=document.getElementById("sheet"),t=document.getElementById("sheet-handle"),i=document.getElementById("sheet-scroll"),r=window.matchMedia("(min-width: 768px)"),s=window.matchMedia("(prefers-color-scheme: dark)"),o=[],a="peek";function l(){return r.matches}function c(){return a}function u(){for(let me of o)me(a)}function h(me){o.push(me),me(a)}function f(){if(!e||!i)return;let me=document.getElementById("sheet-inspector"),Qe=document.getElementById("sheet-main");if(me&&!me.hidden&&Qe?.hidden){let P=parseFloat(e.style.getPropertyValue("--sheet-partial-h"));if(Number.isFinite(P)&&P>0)return P}let et=document.getElementById("section-view"),Se=document.getElementById("section-cuts"),C=t?.offsetHeight||22,re=16,K=0;if(et&&(K+=et.offsetHeight),Se){let P=Se.querySelector(".sheet-title"),T=Se.querySelector(".cut-row");K+=32,P&&(K+=P.offsetHeight+8),T?K+=T.offsetHeight:K+=Se.offsetHeight}let Pe=C+K+re,J=window.innerHeight||640,be=Math.round(J*.28),xe=Math.round(J*.45),Le=Math.max(be,Math.min(xe,Math.round(Pe)));return e.style.setProperty("--sheet-partial-h",`${Le}px`),Le}function d(){f(),!l()&&a==="partial"&&u()}function m(me){let Qe=getComputedStyle(document.documentElement).getPropertyValue(`--safe-${me}`).trim(),et=parseFloat(Qe);return Number.isFinite(et)?et:0}function x(){let me={top:0,right:0,bottom:0,left:0};if(!e)return me;if(l()){if(a!=="open")return me;let et=e.offsetWidth||0;return{top:0,right:Math.max(0,Math.round(et)),bottom:0,left:0}}if(a!=="partial")return me;let Qe=Math.round(Q()+m("b"));return{top:0,right:0,bottom:Math.max(0,Math.min(window.innerHeight-80,Qe)),left:0}}function g(me,Qe={}){if(!e)return;(l()?["closed","open"]:["peek","partial","full"]).includes(me)||(me=l()?"open":"peek"),a=me,e.dataset.detent=me,e.classList.toggle("sheet-open",me!=="peek"&&me!=="closed"),document.body.classList.toggle("sheet-open",me!=="peek"&&me!=="closed"),v(),Qe.silent||u()}function p(){l()?g("open"):g("peek"),f()}let b=document.getElementById("top-chrome"),S=document.getElementById("sheet-toggle");if(!S&&b){let me=b.querySelector(".top-chrome-end");me||(me=document.createElement("div"),me.className="top-chrome-end",b.append(me)),S=document.createElement("button"),S.type="button",S.id="sheet-toggle",S.className="chrome-btn sheet-toggle",me.append(S)}function v(){if(!S)return;let me=a==="open";S.setAttribute("aria-expanded",me?"true":"false"),S.setAttribute("aria-label",me?"Hide controls":"Show controls"),S.title=me?"Hide controls":"Show controls",S.textContent=me?"\u203A":"\u2039"}S?.addEventListener("click",()=>{l()&&g(a==="open"?"closed":"open")});let M=!1,E=null,y=!1,w=!1,D=0,N=0,k=0,q=0,z="peek",O=0,Y=0,ee=0,j=0,ye=0,ie=null,V=12,ne=28,we='input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';function Ne(){return Math.max(t?.offsetHeight||34,34)+8}function Q(){return f()||window.innerHeight*.38}function _e(){let me=window.innerHeight||640;return Math.min(me*.92,me-72)}function oe(){return e?.offsetWidth||0}function H(me){return me instanceof Element?!!me.closest(we):!1}function te(){if(l()){g(a==="open"?"closed":"open");return}g(a==="peek"?"partial":a==="partial"?"full":"peek")}function Ie(){e&&(e.style.transform="",e.style.opacity="",e.style.pointerEvents="")}function We(me,Qe,et){if(e){M=!0,y=!1,E=Qe,w=!1,z=a,D=me.clientY,N=me.clientX,O=D,Y=N,ee=performance.now(),j=0,ye=0,q=et,ie=me.pointerId,e.classList.add("is-dragging"),e.style.transform=`translateX(${q}px)`,e.style.pointerEvents="auto";try{e.setPointerCapture(me.pointerId)}catch{}}}function Oe(me){if(!(!e||!t)&&!(me.target!==t&&!t.contains(me.target)&&me.target!==e)){M=!0,y=!1,E="narrow",w=!1,z=a,e.classList.add("is-dragging"),D=me.clientY,N=me.clientX,O=D,Y=N,ee=performance.now(),j=0,ye=0,k=e.getBoundingClientRect().height,ie=me.pointerId;try{t.setPointerCapture(me.pointerId)}catch{}me.preventDefault()}}function Ge(me){if(!e||me.pointerType==="mouse"&&me.button!==0||me.target instanceof Element&&me.target.closest(".chrome-btn"))return;let Qe=oe();if(a==="closed"){let et=window.innerWidth-ne-m("r");if(me.clientX<et)return;We(me,"wide-open",Qe),me.preventDefault();return}e.contains(me.target)&&(H(me.target)||(M=!0,y=!0,E="wide-close",w=!1,z=a,D=me.clientY,N=me.clientX,O=D,Y=N,ee=performance.now(),j=0,ye=0,q=0,ie=me.pointerId))}function tt(me){l()?Ge(me):Oe(me)}function He(me){if(!M||!e||ie!=null&&me.pointerId!==ie)return;let Qe=performance.now(),et=Math.max(1,Qe-ee),Se=Math.hypot(me.clientX-N,me.clientY-D);if(y){if(Se<=V)return;let Pe=me.clientX-N,J=me.clientY-D;if(Math.abs(Pe)<Math.abs(J)*1.15||Pe<=0){M=!1,y=!1,E=null,ie=null;return}y=!1,w=!0,e.classList.add("is-dragging"),i&&(i.style.overflow="hidden");try{e.setPointerCapture(me.pointerId)}catch{}me.preventDefault()}if(Se>V&&(w=!0),E==="narrow"){let Pe=D-me.clientY;j=(O-me.clientY)/et*1e3,O=me.clientY,ee=Qe;let J=Ne(),be=_e(),xe=Math.max(J,Math.min(be,k+Pe));e.style.height=`${xe}px`;return}let C=me.clientX-N;ye=(me.clientX-Y)/et*1e3,Y=me.clientX,ee=Qe;let re=oe(),K=Math.max(0,Math.min(re,q+C));e.style.transform=`translateX(${K}px)`}function Mt(me,Qe){let et=[{name:"peek",h:Ne()},{name:"partial",h:Q()},{name:"full",h:_e()}],Se=Math.max(0,et.findIndex(be=>be.name===z)),C=et[Se].h;if(Math.abs(me-C)<36&&Math.abs(Qe)<1100)return z;let re=me+Qe*.05,K=(et[0].h+et[1].h)/2,Pe=(et[1].h+et[2].h)/2,J=re<K?0:re<Pe?1:2;if(J>Se+1&&(J=Se+1),J<Se-1&&(J=Se-1),J===2&&Se<2){let be=Pe+(et[2].h-Pe)*.25;me<be&&Qe<1400&&(J=1)}return et[J].name}function ut(me,Qe){let et=oe();return et<=0||Math.abs(me-(z==="closed"?et:0))<28&&Math.abs(Qe)<800?z:Qe>900?"closed":Qe<-900?"open":me>et*.45?"closed":"open"}function pt(me){if(!M||!e||ie!=null&&me.pointerId!==ie)return;let Qe=E,et=y;if(M=!1,y=!1,E=null,ie=null,e.classList.remove("is-dragging"),i&&(i.style.overflow=""),et&&!w)return;if(!w){Qe==="narrow"?(e.style.height="",te()):Qe==="wide-open"?(Ie(),g("open")):Ie();return}if(Qe==="narrow"){let re=e.getBoundingClientRect().height;e.style.height="",g(Mt(re,j));return}let Se=/translateX\(([-\d.]+)px\)/.exec(e.style.transform||""),C=Se?parseFloat(Se[1]):0;Ie(),g(ut(C,ye))}t?.addEventListener("pointerdown",me=>{l()||tt(me)}),t?.addEventListener("pointermove",He),t?.addEventListener("pointerup",pt),t?.addEventListener("pointercancel",pt),t&&t.setAttribute("aria-label","Sheet handle \u2014 tap to resize, drag to adjust"),document.addEventListener("pointerdown",me=>{l()&&Ge(me)},{capture:!0}),document.addEventListener("pointermove",He,{capture:!0}),document.addEventListener("pointerup",pt,{capture:!0}),document.addEventListener("pointercancel",pt,{capture:!0});let Ke=()=>{e&&(e.style.height=""),Ie(),i&&(i.style.overflow=""),p()};r.addEventListener?r.addEventListener("change",Ke):r.addListener(Ke);function vt(){n(s.matches)}return vt(),s.addEventListener?s.addEventListener("change",vt):s.addListener(vt),window.addEventListener("resize",()=>{f(),u()}),p(),v(),{getDetent:c,getSafeInsets:x,onDetentChange:h,refreshPartialHeight:d,setDetent:g}}function rh(n={}){let e=n.min??0,t=n.max??1,i=n.step??.001,r=!!n.thumbScrubOnly,s=xl(n.value??e,e,t),o=document.createElement("div");o.className="coop-range",o.setAttribute("role","slider"),o.tabIndex=0,n.ariaLabel&&o.setAttribute("aria-label",n.ariaLabel),o.setAttribute("aria-valuemin",String(e)),o.setAttribute("aria-valuemax",String(t));let a=document.createElement("div");a.className="coop-range-track";let l=document.createElement("div");l.className="coop-range-fill";let c=document.createElement("div");c.className="coop-range-thumb",a.append(l,c),o.append(a);let u=10,h=14,f=null,d=0,m=0,x=!1,g=!1,p=!1,b=!0;function S(){let O=`${(t===e?0:(s-e)/(t-e))*100}%`;l.style.width=O,c.style.left=O,o.setAttribute("aria-valuenow",String(s));let Y=n.formatAriaValue?.(s)??String(s);o.setAttribute("aria-valuetext",Y)}function v(z,O){let Y=typeof c.getBoundingClientRect=="function"?c.getBoundingClientRect():null;return!Y||!(Y.width>0)||!(Y.height>0)?!0:z>=Y.left-h&&z<=Y.right+h&&O>=Y.top-h&&O<=Y.bottom+h}function M(z,O="input"){let Y=CA(xl(z,e,t),e,t,i);if(Y===s&&O==="silent"){S();return}s=Y,S(),(O==="input"||O==="change")&&n.onInput?.(s),O==="change"&&n.onChange?.(s)}function E(z){let O=a.getBoundingClientRect(),Y=Math.max(O.width,1),ee=xl((z-O.left)/Y,0,1);return e+ee*(t-e)}function y(z){if(f==null)return;let O=g;f=null,x=!1,g=!1,b=!0,O&&n.onScrubEnd?.(),z&&O&&n.onChange?.(s)}function w(z){f==null&&(z.pointerType==="mouse"&&z.button!==0||(f=z.pointerId,d=z.clientX,m=z.clientY,p=!1,x=!1,g=!1,b=!r||v(z.clientX,z.clientY)))}function D(z){if(f!==z.pointerId)return;let O=z.clientX-d,Y=z.clientY-m;if(!p&&Math.hypot(O,Y)>u&&(p=!0),!x){if(!p)return;if(z.pointerType==="touch"&&Math.abs(Y)>=Math.abs(O)){y(!1);return}if(!b){y(!1);return}x=!0,g=!0,n.onScrubStart?.();try{o.setPointerCapture(z.pointerId)}catch{}}M(E(z.clientX),"input"),z.preventDefault()}function N(z){if(f===z.pointerId){if(!p&&!g){f=null,x=!1,g=!1,b=!0,n.onTap?.();return}y(!0)}}function k(z){f===z.pointerId&&y(!1)}function q(z){let O=t-e,Y=i>0?i:O/100,ee=O/10,j=s;switch(z.key){case"ArrowLeft":case"ArrowDown":j=s-Y;break;case"ArrowRight":case"ArrowUp":j=s+Y;break;case"PageDown":j=s-ee;break;case"PageUp":j=s+ee;break;case"Home":j=e;break;case"End":j=t;break;case"Enter":case" ":z.preventDefault(),n.onTap?.();return;default:return}z.preventDefault(),M(j,"change")}return o.addEventListener("pointerdown",w),o.addEventListener("pointermove",D),o.addEventListener("pointerup",N),o.addEventListener("pointercancel",k),o.addEventListener("keydown",q),S(),{el:o,get value(){return s},set value(z){M(z,"silent")},refresh(){S()}}}function xl(n,e,t){return Math.min(t,Math.max(e,n))}function CA(n,e,t,i){if(!(i>0))return xl(n,e,t);let r=Math.round((n-e)/i),s=Number((e+r*i).toPrecision(12));return xl(s,e,t)}var my="blueprints.locale",PA={shell:"Shell",slopes:"Slopes",soffit:"Soffit",bass_traps:"Bass traps",furniture:"Furniture",interior:"Interior",cabinet:"Cabinets",worktop:"Worktop",hob:"Hob",appliance:"Appliances",sink:"Sink",rug:"Rug",light:"Lights",door:"Door",other:"Other",floor:"Floor",masonry:"Masonry",column:"Column",venec:"Ring beam",eps:"EPS",plaster:"Plaster",wall_plate:"Wall plate",rafters:"Rafters",roofing:"Roofing build-up",plenum_wool:"Mineral wool \u03BB 0.039",racking_strap:"Racking strap",tie_rod:"Tie rod \xD814",slope_light:"Slope spotlight",pocket_frame:"Pocket-door frame",wall_gkf:"GKF plasterboard",glazing:"Glazing",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF plasterboard",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 on the wall plate",vapour_brake_tape:"Vapour brake bond tape",eave_acrylic:"Acrylic bead (planned cut)",joint_screw:"Screws",slope_direct_hanger:"Direct hanger 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Mineral wool \u03BB 0.039",soffit_ud:"UD channel",soffit_gkf:"GKF plasterboard",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiral duct \xD8160",bass_mineral_wool:"Mineral wool \u03BB 0.039",bass_gkb:"GKB plasterboard",bass_cw:"CW stud",bass_uw:"UW track",bass_strut:"CW strut to wall",bass_angle:"Wall angle",bass_anchor:"Anchor into the block",bass_tape:"Sealing tape",bass_acrylic:"Acrylic joint",bathroom:"Bathroom 1.20",tile:"Tiles",grout:"Grout",drain:"Floor drain",fixture:"Sanitary fixture",prewall:"Pre-wall",screen:"Shower screen",profile:"Sloped edge profile",vanity:"Vanity cabinet"},IA={shell:"Ob\xE1lka",slopes:"\u0160ikminy",soffit:"Podhled",bass_traps:"Basstrapy",furniture:"N\xE1bytek",interior:"Interi\xE9r",cabinet:"Sk\u0159\xED\u0148ky",worktop:"Pracovn\xED deska",hob:"Varn\xE1 deska",appliance:"Spot\u0159ebi\u010De",sink:"D\u0159ez",rug:"Koberec",light:"Sv\xEDtidla",door:"Dve\u0159e",other:"Ostatn\xED",floor:"Podlaha",masonry:"Zdivo",column:"Sloup",venec:"V\u011Bnec",eps:"EPS",plaster:"Om\xEDtka",wall_plate:"Pozednice",rafters:"Krokve",roofing:"St\u0159e\u0161n\xED skladba",plenum_wool:"Miner\xE1ln\xED vata \u03BB 0,039",racking_strap:"Zav\u011Btrovac\xED p\xE1ska",tie_rod:"T\xE1hlo \xF814",slope_light:"Bodovka na \u0161ikmin\u011B",pocket_frame:"Pouzdro",wall_gkf:"GKF s\xE1drokarton",glazing:"Zasklen\xED",slope_naturheld_140:"NaturHeld 140",slope_gkf:"GKF s\xE1drokarton",slope_cd:"CD Rigips 60\xD727",slope_foil:"Jutafol N AL 170 Speci\xE1l",eave_ud:"UD 28/27 na pozednici",vapour_brake_tape:"Lepic\xED p\xE1ska paroz\xE1brany",eave_acrylic:"Akrylov\xFD tmel (\u0159ez)",joint_screw:"\u0160rouby",slope_direct_hanger:"P\u0159\xEDm\xFD z\xE1v\u011Bs 200",slope_nonius:"Nonius 440",soffit_naturheld_140:"NaturHeld 140",soffit_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",soffit_ud:"UD profil",soffit_gkf:"GKF s\xE1drokarton",soffit_cd:"CD Rigips 60\xD727",soffit_nonius:"Nonius 440",soffit_duct:"Spiro \xD8160",bass_mineral_wool:"Miner\xE1ln\xED vata \u03BB 0,039",bass_gkb:"GKB s\xE1drokarton",bass_cw:"CW stojka",bass_uw:"UW profil",bass_strut:"CW vzp\u011Bra do zdi",bass_angle:"\xDAheln\xEDk do zdi",bass_anchor:"Hmo\u017Edinka do zdiva",bass_tape:"T\u011Bsnic\xED p\xE1ska",bass_acrylic:"Akrylov\xFD spoj",bathroom:"Koupelna 1.20",tile:"Dla\u017Eba",grout:"Sp\xE1ry",drain:"Podlahov\xE1 vpus\u0165",fixture:"Za\u0159izovac\xED p\u0159edm\u011Bt",prewall:"P\u0159\xEDzd\xEDvka",screen:"Sprchov\xE9 sklo",profile:"Sp\xE1dov\xE1 li\u0161ta",vanity:"Sk\u0159\xED\u0148ka umyvadla"},LA={"ui.view":"View","ui.sections":"Cuts","ui.parts":"Parts","ui.materials":"Materials","ui.edges":"Edges","ui.language":"Language","ui.solid":"Solid","ui.realistic":"Realistic","ui.edgesNone":"None","ui.edgesTransparent":"Transparent","ui.edgesOpaque":"Opaque","ui.iso":"Iso","ui.front":"Front","ui.side":"Side","ui.top":"Top","ui.fov":"FOV","ui.sync":"Sync","ui.measure":"Measure","ui.ar":"AR","ui.cut":"Cut","ui.removeSection":"Remove","ui.hideControls":"Hide controls","ui.showControls":"Show controls","ui.dragSheet":"Drag controls sheet","ui.drawing":"Drawing","ui.labels":"Labels","ui.inspector":"Inspector","ui.menu":"Menu","ui.showAll":"Show all","ui.hideThis":"Hide this","ui.unhideThis":"Unhide this","ui.hideOthers":"Hide all others","ui.unhideOthers":"Unhide all others","ui.expand":"Expand","ui.collapse":"Collapse","ui.globalId":"GlobalId","ui.type":"Type","ui.name":"Name","ui.storey":"Storey","ui.space":"Space","ui.dimensions":"Dimensions","ui.note":"Note","ui.reveal":"Show in inspector","ui.frame":"Frame","ui.noIfc":"No IFC record","ui.open":"Open","ui.close":"Close","ui.turnOn":"Turn on","ui.turnOff":"Turn off","ui.press":"Press","ui.spatial":"Spatial","ui.groups":"Groups","ui.info":"Info","ui.parentGroups":"Parent groups","ui.childGroups":"Child groups","ui.childElements":"Child elements","home.title":"Home","home.live":"Live","home.off":"Off","home.on":"On","home.statusOff":"Offline model. Taps only change this view.","home.statusConnecting":"Connecting to Home\u2026","home.statusLive":"Live: state from Home. Taps send commands.","home.statusLiveNoSim":"Live: state from Home. Rocker presses are off on this server.","home.statusUnreachable":"Home unreachable. Showing the offline model; retrying.","home.failed":"Home refused the command","home.deviceOffline":"Device offline (last known state)","home.unknown":"Unknown","home.level":"Level","home.warm":"Warm","home.cool":"Cool","home.lastEvent":"Last event","home.noEvents":"No presses yet","home.contactClosed":"Closed (contact)","home.contactOpen":"Open (no contact)","home.occupied":"Occupied","home.vacant":"Vacant","home.closedPct":"Closed","home.up":"Up","home.down":"Down","home.stop":"Stop","scene.overview":"Overview","scene.opening":"Door and window","scene.posts":"120 mm posts","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 floor tiles","scene.bathroom":"1.20 room","scene.bathroom-door":"1.20 door and slope"},DA={"ui.view":"Pohled","ui.sections":"\u0158ezy","ui.parts":"D\xEDly","ui.materials":"Materi\xE1ly","ui.edges":"Hrany","ui.language":"Jazyk","ui.solid":"Pln\xE9","ui.realistic":"Realistick\xE9","ui.edgesNone":"\u017D\xE1dn\xE9","ui.edgesTransparent":"Pr\u016Fhledn\xE9","ui.edgesOpaque":"Nepr\u016Fhledn\xE9","ui.iso":"Iso","ui.front":"\u010Celo","ui.side":"Bok","ui.top":"P\u016Fdorys","ui.fov":"FOV","ui.sync":"Sjednotit","ui.measure":"M\u011B\u0159en\xED","ui.ar":"AR","ui.cut":"\u0158ez","ui.removeSection":"Odstranit","ui.hideControls":"Skr\xFDt ovl\xE1d\xE1n\xED","ui.showControls":"Zobrazit ovl\xE1d\xE1n\xED","ui.dragSheet":"P\u0159et\xE1hnout panel","ui.drawing":"V\xFDkres","ui.labels":"Popisky","ui.inspector":"Inspektor","ui.menu":"Nab\xEDdka","ui.showAll":"Zobrazit v\u0161e","ui.hideThis":"Skr\xFDt toto","ui.unhideThis":"Zobrazit toto","ui.hideOthers":"Skr\xFDt ostatn\xED","ui.unhideOthers":"Zobrazit ostatn\xED","ui.expand":"Rozbalit","ui.collapse":"Sbalit","ui.globalId":"GlobalId","ui.type":"Typ","ui.name":"N\xE1zev","ui.storey":"Podla\u017E\xED","ui.space":"M\xEDstnost","ui.dimensions":"Rozm\u011Bry","ui.note":"Pozn\xE1mka","ui.reveal":"Zobrazit v inspektoru","ui.frame":"P\u0159ej\xEDt k prvku","ui.noIfc":"Bez IFC z\xE1znamu","ui.open":"Otev\u0159\xEDt","ui.close":"Zav\u0159\xEDt","ui.turnOn":"Zapnout","ui.turnOff":"Vypnout","ui.press":"Stisknout","ui.spatial":"Prostor","ui.groups":"Skupiny","ui.info":"Info","ui.parentGroups":"Nad\u0159azen\xE9 skupiny","ui.childGroups":"Podskupiny","ui.childElements":"Prvky","home.title":"D\u016Fm","home.live":"\u017Div\u011B","home.off":"Vyp.","home.on":"Zap.","home.statusOff":"Offline model. Klepnut\xED m\u011Bn\xED jen tento pohled.","home.statusConnecting":"P\u0159ipojuji se k Home\u2026","home.statusLive":"\u017Div\u011B: stav z Home. Klepnut\xED pos\xEDlaj\xED p\u0159\xEDkazy.","home.statusLiveNoSim":"\u017Div\u011B: stav z Home. Stisky vyp\xEDna\u010D\u016F jsou na tomto serveru vypnut\xE9.","home.statusUnreachable":"Home nedostupn\xFD. Zobrazuji offline model a zkou\u0161\xEDm znovu.","home.failed":"Home p\u0159\xEDkaz odm\xEDtl","home.deviceOffline":"Za\u0159\xEDzen\xED offline (posledn\xED zn\xE1m\xFD stav)","home.unknown":"Nezn\xE1m\xFD","home.level":"Jas","home.warm":"Tepl\xE1","home.cool":"Studen\xE1","home.lastEvent":"Posledn\xED ud\xE1lost","home.noEvents":"Zat\xEDm bez stisku","home.contactClosed":"Zav\u0159eno (kontakt)","home.contactOpen":"Otev\u0159eno (bez kontaktu)","home.occupied":"Obsazeno","home.vacant":"Volno","home.closedPct":"Zav\u0159eno","home.up":"Nahoru","home.down":"Dol\u016F","home.stop":"Stop","scene.overview":"Celkov\u011B","scene.opening":"Dve\u0159e a okno","scene.posts":"Sloupky 120","scene.soffit":"Podhled","scene.gable":"\u0160t\xEDt","scene.sikmina-lattice":"\u0160ikmina \u2014 ro\u0161t","scene.sikmina-section":"\u0160ikmina \u2014 \u0159ez","scene.bass-kitchen":"Basov\xE1 past \u2014 kuchy\u0148","scene.bass-living":"Basov\xE1 past \u2014 ob\xFDv\xE1k","scene.bass-kitchen-elevation":"Kuchy\u0148 \u2014 pohled","scene.bass-kitchen-section":"Kuchy\u0148 \u2014 \u0159ez","scene.bass-living-elevation":"Ob\xFDv\xE1k \u2014 pohled","scene.bass-living-section":"Ob\xFDv\xE1k \u2014 \u0159ez","scene.ties-front":"T\xE1hla a sv\u011Btla \u2014 pohled","scene.ties-plan":"T\xE1hla a sv\u011Btla \u2014 p\u016Fdorys","scene.ties-section":"T\xE1hlo \u2014 \u0159ez","scene.kitchen-living":"Kuchy\u0148 k ob\xFDv\xE1ku","scene.living-kitchen":"Ob\xFDv\xE1k ke kuchyni","scene.kitchen-run":"Kuchy\u0148sk\xE1 linka","scene.bathroom-floor":"1.20 dla\u017Eba","scene.bathroom":"1.20 koupelna","scene.bathroom-door":"1.20 pr\xE1h a sp\xE1d"},Tp={en:{...LA,...PA},cs:{...DA,...IA}},Wo=gy(),Ap=new Set;function gy(){try{let n=typeof navigator<"u"&&navigator.language||"";if(String(n).toLowerCase().startsWith("cs"))return"cs"}catch{}return"en"}function NA(){try{let n=localStorage.getItem(my);if(n==="en"||n==="cs")return n}catch{}return gy()}function OA(n){try{localStorage.setItem(my,n)}catch{}}function sh(){return Wo}function xy(n){if(!(n!=="en"&&n!=="cs")&&n!==Wo){Wo=n,OA(n);for(let e of Ap)try{e()}catch{}}}function Rp(n){return Ap.add(n),()=>Ap.delete(n)}function yy(){return Wo=NA(),Wo}function Ut(n){let e=Tp[Wo]||Tp.en;if(Object.prototype.hasOwnProperty.call(e,n))return e[n];let t=Tp.en;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.startsWith("scene.")?n.slice(6):n}function Cp(n){let e=n||document;e.querySelectorAll("[data-i18n]").forEach(t=>{let i=t.getAttribute("data-i18n");i&&(t.textContent=Ut(i))}),e.querySelectorAll("[data-i18n-aria]").forEach(t=>{let i=t.getAttribute("data-i18n-aria");i&&t.setAttribute("aria-label",Ut(i))}),e.querySelectorAll("[data-i18n-title]").forEach(t=>{let i=t.getAttribute("data-i18n-title");i&&t.setAttribute("title",Ut(i))})}var Pp=44,oh=.05,UA=.05;function ah(n){let e=n&&n.material;if(!e)return!1;let t=Array.isArray(e)?e:[e];return t.length?t.every(i=>i&&i.visible!==!1&&!(i.transparent&&(i.opacity??1)<.99)):!1}function vy(n,e,t={}){let i=t.isOccluder||ah,r=t.tolerance??oh,s=1/0;for(let o of n){let a=Number.isFinite(o.distance)?o.distance:0;if(a>s+r)break;let l=e(o);if(l)return{hit:o,claim:l,wallT:s};s===1/0&&i(o.object)&&(s=a)}return{hit:null,claim:null,wallT:s}}function by(n,e,t={}){let i=(t.diameterPx??Pp)/2,r=t.depthTie??UA,s=[];for(let c of n){if(!c||!Number.isFinite(c.x)||!Number.isFinite(c.y)||!(c.depth>0))continue;let u=Math.hypot(c.x-e.x,c.y-e.y);u>i||s.push({c,dist:u})}let o=t.isOccluded?s.filter(c=>!t.isOccluded(c.c)):s;if(!o.length)return null;let a=o[0];for(let c of o)c.c.depth<a.c.depth&&(a=c);let l=null;for(let c of o)(c.c.depth<=a.c.depth+r||a.c.group!=null&&c.c.group===a.c.group)&&(!l||c.dist<l.dist||c.dist===l.dist&&c.c.depth<l.c.depth)&&(l=c);return l?l.c:null}var Jn=new I;function My(n,e,t){e.updateMatrixWorld?.(),Jn.copy(n).applyMatrix4(e.matrixWorldInverse);let i=-Jn.z;return!(i>0)||(Jn.copy(n).project(e),!(Math.abs(Jn.x)<=1&&Math.abs(Jn.y)<=1)||!(Jn.z>=-1&&Jn.z<=1))?null:{x:(Jn.x+1)/2*t.w,y:(1-Jn.y)/2*t.h,depth:i}}var as=new ni,_y=new Xe;function Sy(n,e,t,i,r={}){let s=r.keep||(()=>!0),o=r.isOccluder||ah,a=r.tolerance??oh,l;if(e.isOrthographicCamera)Jn.copy(n).project(e),_y.set(Jn.x,Jn.y),as.setFromCamera(_y,e),l=Jn.copy(n).sub(as.ray.origin).dot(as.ray.direction);else{let u=new I().setFromMatrixPosition(e.matrixWorld),h=Jn.copy(n).sub(u);if(l=h.length(),l<1e-9)return!1;as.set(u,h.normalize())}as.camera=e,as.near=0,as.far=Math.max(0,l);let c=as.intersectObject(t,!0);for(let u of c){if(u.distance>=l-a)break;if(!(!s(u.object)||i(u.object))&&o(u.object))return!0}return!1}function wy(n,e,t){let i=n.getCenter(new I),r=n.getSize(new I),s=r.y/4,o=r.x>=r.z?new I(1,0,0):new I(0,0,1);o.dot(t)<0&&o.negate();let a=Math.max(r.x,r.z)/4,l=[];return e.forEach((c,u)=>{let h=i.clone();e.length>1&&h.addScaledVector(o,u===0?-a:a),l.push({rocker:c,position:"up",center:h.clone().setY(h.y+s)}),l.push({rocker:c,position:"down",center:h.clone().setY(h.y-s)})}),l}function ks(n){return!!(n&&n.userData&&n.userData.bpHitProxy)}function ls(n){if(!n||!n.visible||ks(n))return!1;let e=n.userData||{};return!(e.bpIfcHidden||e.isEdgeOverlay||e.isSectionCap||e.isPeeledEdgeBatch)}function Ey(){let n=[];function e(l){n.push(l),n.sort((c,u)=>(u.priority||0)-(c.priority||0))}function t(l,c){for(let u of n){let h=u.claim?.(l,c);if(h)return h}return null}function i(l,c){let u=[];for(let h of l)c&&!c(h)||u.push(h);return u}function r(l){let{camera:c,root:u,tap:h,size:f}=l||{};if(!c||!u||!h||!f)return null;let d=[];for(let b of n){let S=b.targets?.(l);if(Array.isArray(S))for(let v of S){if(!v?.center)continue;let M=My(v.center,c,f);M&&d.push({...v,...M,handler:b})}}if(!d.length)return null;let m=b=>ls(b),x=by(d,h,{diameterPx:l.diameterPx??Pp,isOccluded:b=>Sy(b.center,c,u,S=>!!b.owns?.(S),{keep:m})});if(!x)return null;let g={...x.hit,point:x.hit?.point??x.center,extended:!0},p=x.handler.claim?.(g,l);return p?{hit:g,claim:p,target:x}:null}function s(l,c,u,h={}){let f=i(l,u),d=vy(f,g=>t(g,c),{isOccluder:g=>ah(g)});if(d.claim)return{kind:"direct",hit:d.hit,claim:d.claim};let m={...c,maxT:d.wallT+oh};for(let g of n)if(h.run?g.fallback?.(f,m):g.probe?.(f,m))return{kind:"fallback"};let x=r(c);if(x)return{kind:"extended",hit:x.hit,claim:x.claim};for(let g of f){let p=t(g,c);if(p)return{kind:"legacy",hit:g,claim:p}}return null}function o(l,c,u){let h=s(l,c,u,{run:!0});if(h?.kind==="fallback")return!0;if(h?.claim)return h.claim.onTap(),!0;let f=i(l,u);for(let d of n)if(d.fallback?.(f,c))return!0;return!1}function a(l,c,u){let h=s(l,c,u);return h?.claim?Array.isArray(h.claim.actions)?h.claim.actions.slice():[]:[]}return{register:e,dispatch:o,actionsFor:a,resolve:s,handlers:n}}var Ty=8,FA=56,Ay=14,Ip=11,Ry=.5,BA=1e-4,lh=128,kA=.028,zA=5,HA=.995,VA=.999,Cy=18,GA=22,WA=14,Lp=new Xe,Py=new ni,yi=new I,_i=new I,rr=new I,kn=new I,$o=new I,ir=new I,Xo=new I,qo=new I,zt=new I,Iy=new I,Yo=new I,XA=new xn;function Dp(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:"\u2014 mm"}function Np(n){return n.pointerType==="touch"}function Op(n){return n.pointerType==="mouse"||n.pointerType==="pen"}function Ly(){return typeof window<"u"&&window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}function zy(n){let{scene:e,canvas:t,getCamera:i,controls:r,getRoot:s,getClipPlanes:o,onLiveLength:a,onActiveChange:l}=n,c="idle",u=!1,h=!1,f=0,d=0,m=null,x=null,g=null,p=null,b=null,S=null,v=null,M="mouse",E=0,y=0,w=!1,D=!1,N=new Et;N.name="MeasureOverlay",N.renderOrder=10,e.add(N);let k=new Et;k.name="MeasureDimensions",e.add(k);let q=Oy(16766474),z=Oy(3458905),O=Uy(16766474,.75),Y=KA(16766474);N.add(q,z,O,Y),q.visible=!1,z.visible=!1,O.visible=!1,Y.visible=!1;let ee=YA(t),j=[];function ye(){return u}function ie(Se){let C=!!Se;if(C===u){C&&ne();return}if(u=C,u)if(r.enabled=!1,c="placeFirst",V(),b=null,S=null,Ly()){let re=Math.max(1,t.clientWidth),K=Math.max(1,t.clientHeight);Ne(re*.5,K*.5,!0)}else we();else r.enabled=!0,c="idle",V(),b=null,S=null,v=null,D=!1,we(),a?.(null);l?.(u),ne(),_e()}function V(){h=!1,m=null,x=null,g=null,p=null}function ne(){c==="placeSecond"&&b&&m?a?.(Dp(b.distanceTo(m))):u&&a?.(null)}function we(){ee.hidden=!0,q.visible=!1,Y.visible=!1}function Ne(Se,C,re=!1){f=Se,d=C,h=!0;let K=Oe(Se,C);if(K){let Pe=K.point.clone(),J=K.kind,be=K.edgeDir;if(p=null,c==="placeSecond"&&b){let xe=Ge(b,S,K);xe&&(Pe=xe.foot,J="perp",be=xe.edgeDir,p=xe.edgeDir.clone())}m=Pe,x=J,g=be}else re?m||(x=null,g=null,p=null):(m=null,x=null,g=null,p=null);_e(),ne()}function Q(Se,C){let re=Ie(C)*zA;Se.scale.setScalar(Math.max(re,1e-6))}function _e(){if(!u){we(),z.visible=!1,O.visible=!1,Y.visible=!1;return}b?(z.visible=!0,z.position.copy(b),Q(z,b)):z.visible=!1,h?(ee.hidden=!1,Ny(ee,t,f,d,x),m?(q.visible=!0,q.position.copy(m),Q(q,m),ZA(q,x)):q.visible=!1):we(),c==="placeSecond"&&b&&m?(By(O,b,m),O.visible=!0):O.visible=!1,c==="placeSecond"&&x==="perp"&&b&&m&&p?(Fy(Y,b,m,p,Ie),Y.visible=!0):Y.visible=!1}function oe(Se){let C=t.getBoundingClientRect();return{x:Se.clientX-C.left,y:Se.clientY-C.top}}function H(Se,C,re){return re==="touch"?{x:Se,y:C-FA}:{x:Se,y:C}}function te(Se){let C=o()||[];for(let re of C)if(re.distanceToPoint(Se)<-BA)return!1;return!0}function Ie(Se){let C=i(),re=Math.max(1,t.clientHeight);if(C.isOrthographicCamera)return 2*((C.top-C.bottom)/(2*Math.max(C.zoom,1e-6)))/re;let K=C.position.distanceTo(Se),Pe=C.fov*Math.PI/180;return 2*Math.tan(Pe/2)*K/re/Math.max(C.zoom,1e-6)}function We(Se,C){C.copy(Se).project(i());let re=Math.max(1,t.clientWidth),K=Math.max(1,t.clientHeight);return C.x=(C.x*.5+.5)*re,C.y=(-C.y*.5+.5)*K,C}function Oe(Se,C){let re=s();if(!re)return null;let K=t.getBoundingClientRect();Lp.x=Se/Math.max(1,K.width)*2-1,Lp.y=-(C/Math.max(1,K.height))*2+1,Py.setFromCamera(Lp,i());let Pe=Py.intersectObject(re,!0),J=null;for(let Re of Pe)if(!(!Re.object.visible||ks(Re.object))&&te(Re.point)){J=Re;break}if(!J)return null;let be=J.object,xe=be.geometry;if(!xe?.getAttribute("position"))return{point:J.point.clone(),kind:"face",edgeDir:null,mesh:be,triVerts:null,faceNormal:null};be.updateWorldMatrix(!0,!1);let Le=Ie(J.point),P=Le*Ay,T=Le*Ip,Z=xe.getAttribute("position"),ge=xe.getIndex(),de=J.faceIndex,he=[];if(J.face)yi.fromBufferAttribute(Z,J.face.a).applyMatrix4(be.matrixWorld),_i.fromBufferAttribute(Z,J.face.b).applyMatrix4(be.matrixWorld),rr.fromBufferAttribute(Z,J.face.c).applyMatrix4(be.matrixWorld),he.push(yi.clone(),_i.clone(),rr.clone());else if(typeof de=="number"){let Re,Ue,$;ge?(Re=ge.getX(de*3),Ue=ge.getX(de*3+1),$=ge.getX(de*3+2)):(Re=de*3,Ue=de*3+1,$=de*3+2),yi.fromBufferAttribute(Z,Re).applyMatrix4(be.matrixWorld),_i.fromBufferAttribute(Z,Ue).applyMatrix4(be.matrixWorld),rr.fromBufferAttribute(Z,$).applyMatrix4(be.matrixWorld),he.push(yi.clone(),_i.clone(),rr.clone())}let Me=null;he.length===3&&(Me=new I().subVectors(he[1],he[0]).cross(kn.subVectors(he[2],he[0])).normalize(),Me.lengthSq()<1e-12&&(Me=null));let ce=Se,ue=C,B=null;function L(Re){if(!te(Re)||Re.distanceToSquared(J.point)>P*P*4)return;We(Re,qo);let Ue=Math.hypot(qo.x-ce,qo.y-ue);Ue>Ay||(!B||Ue<B.distPx)&&(B={point:Re.clone(),distPx:Ue})}for(let Re of he)L(Re);let W=P*P*4,G=Z.count,pe=G>8e3?2:1;for(let Re=0;Re<G;Re+=pe)kn.fromBufferAttribute(Z,Re).applyMatrix4(be.matrixWorld),!(kn.distanceToSquared(J.point)>W)&&L(kn);if(B)return{point:B.point,kind:"vertex",edgeDir:null,mesh:be,triVerts:he.length?he:null,faceNormal:Me};let Ee=null;function Ae(Re,Ue){zt.copy(Ue).sub(Re);let $=zt.lengthSq();if($<1e-18)return;let Ce=kn.copy(J.point).sub(Re).dot(zt)/$;if(Ce=Math.min(1,Math.max(0,Ce)),$o.copy(Re).addScaledVector(zt,Ce),!te($o)||$o.distanceToSquared(J.point)>T*T*4)return;We($o,qo);let $e=Math.hypot(qo.x-ce,qo.y-ue);if($e>Ip)return;We(Re,ir),We(Ue,Xo);let De=Xo.x-ir.x,ot=Xo.y-ir.y,Pt=De*De+ot*ot;if(Pt>1e-6){let Xt=((ce-ir.x)*De+(ue-ir.y)*ot)/Pt;Xt=Math.min(1,Math.max(0,Xt));let oi=ir.x+De*Xt,ai=ir.y+ot*Xt;if(Math.hypot(ce-oi,ue-ai)>Ip)return}(!Ee||$e<Ee.distPx)&&(Ee={point:$o.clone(),distPx:$e,dir:zt.clone().normalize()})}return he.length===3&&(Ae(he[0],he[1]),Ae(he[1],he[2]),Ae(he[2],he[0])),Ee?{point:Ee.point,kind:"edge",edgeDir:Ee.dir,mesh:be,triVerts:he.length?he:null,faceNormal:Me}:{point:J.point.clone(),kind:"face",edgeDir:null,mesh:be,triVerts:he.length?he:null,faceNormal:Me}}function Ge(Se,C,re){if(!re.mesh||!re.triVerts||re.triVerts.length!==3||!re.faceNormal||re.faceNormal.lengthSq()<1e-12)return null;let K=Ie(Se),Pe=K*WA,J=Math.max(K*2,1e-5);if(Math.abs(ch(Se,re.triVerts[0],re.faceNormal))>J)return null;let be=tt(re.mesh,re.triVerts[0],re.faceNormal,J);if(!be.length)return null;let xe=[];for(let T of be)Dy(Se,T.a,T.b)<=Pe&&xe.push(T.dir.clone());if(C&&C.lengthSq()>1e-12&&xe.push(C.clone().normalize()),!xe.length)return null;let Le=K*Cy,P=null;for(let T of xe)if(!(T.lengthSq()<1e-12)){T.normalize();for(let Z of be){if(Math.abs(Z.dir.dot(T))<HA||Dy(Se,Z.a,Z.b)<=Pe)continue;let ge=qA(Se,Z.a,Z.b);if(!te(ge)||Se.distanceTo(ge)*1e3<Ry||(zt.copy(ge).sub(Se),zt.lengthSq()<1e-16)||(zt.normalize(),Math.abs(zt.dot(T))>.08))continue;let he=re.point.distanceTo(ge);We(re.point,ir),We(ge,Xo);let Me=Math.hypot(ir.x-Xo.x,ir.y-Xo.y);if(he>Le*1.35&&Me>Cy)continue;let ce=Me+he/Math.max(K,1e-9);(!P||ce<P.score)&&(P={foot:ge.clone(),edgeDir:T.clone(),score:ce})}}return P?{foot:P.foot,edgeDir:P.edgeDir}:null}function tt(Se,C,re,K){let Pe=Se.geometry,J=Pe?.getAttribute("position");if(!J)return[];Se.updateWorldMatrix(!0,!1);let be=Pe.getIndex(),xe=new Map,Le=Math.max(K*.25,1e-5);function P(he,Me,ce){Yo.subVectors(Me,he).cross(kn.subVectors(ce,he)),!(Yo.lengthSq()<1e-16)&&(Yo.normalize(),!(Math.abs(Yo.dot(re))<VA)&&(Math.abs(ch(he,C,re))>K||Math.abs(ch(Me,C,re))>K||Math.abs(ch(ce,C,re))>K||(T(he,Me),T(Me,ce),T(ce,he))))}function T(he,Me){if(zt.copy(Me).sub(he),zt.lengthSq()<1e-16)return;let ce=$A(he,Me,Le);xe.has(ce)||xe.set(ce,{a:he.clone(),b:Me.clone(),dir:zt.clone().normalize()})}let Z=be?be.count/3:J.count/3,ge=12e3,de=Z>ge?Math.ceil(Z/ge):1;for(let he=0;he<Z;he+=de){let Me,ce,ue;if(be){let B=he*3;Me=be.getX(B),ce=be.getX(B+1),ue=be.getX(B+2)}else Me=he*3,ce=he*3+1,ue=he*3+2;yi.fromBufferAttribute(J,Me).applyMatrix4(Se.matrixWorld),_i.fromBufferAttribute(J,ce).applyMatrix4(Se.matrixWorld),rr.fromBufferAttribute(J,ue).applyMatrix4(Se.matrixWorld),P(yi,_i,rr)}return[...xe.values()]}function He(){if(m){if(c==="placeFirst"){b=m.clone(),S=g?g.clone():null,c="placeSecond",p=null,(Np({pointerType:M})||!Ly())&&(h=!1,m=null,x=null,g=null,we()),_e(),ne();return}if(c==="placeSecond"&&b){if(b.distanceTo(m)*1e3<Ry)return;Mt(b,m),ie(!1)}}}function Mt(Se,C){let re=new Et;re.name="Dimension";let K=Uy(16752394,1);By(K,Se,C),K.visible=!0;let Pe=Se.clone().lerp(C,.5),J=Se.distanceTo(C),be=jA(Dp(J));be.position.copy(Pe),re.add(K,be),k.add(re),j.push({group:re,sprite:be,mid:Pe.clone(),span:J}),ut(be,Se,C,Pe,J)}function ut(Se,C,re,K,Pe){let J=i();if(J.getWorldDirection(Iy),zt.copy(re).sub(C),zt.lengthSq()<1e-16){Se.position.copy(K);return}zt.normalize(),kn.crossVectors(zt,Iy),kn.lengthSq()<1e-10&&kn.copy(J.up),kn.normalize();let be=Math.max(Pe*kA,Ie(K)*18);Se.position.copy(K).addScaledVector(kn,be);let xe=Ie(Se.position)*56;Se.scale.set(xe*2.2,xe,1)}function pt(){z.visible&&b&&Q(z,b),q.visible&&m&&Q(q,m),h&&Ny(ee,t,f,d,x),Y.visible&&b&&m&&p&&x==="perp"&&Fy(Y,b,m,p,Ie);for(let Se of j){let re=Se.group.children[0].geometry.getAttribute("position");yi.fromBufferAttribute(re,0),_i.fromBufferAttribute(re,1),ut(Se.sprite,yi,_i,Se.mid,Se.span)}}function Ke(Se){if(!u||c==="idle"||!Op(Se)||v!==null)return;let{x:C,y:re}=oe(Se),K=H(C,re,Se.pointerType);Ne(K.x,K.y,!0)}function vt(Se){if(!u||c==="idle"||Se.button!==void 0&&Se.button!==0||v!==null)return;v=Se.pointerId,M=Se.pointerType||"mouse";let{x:C,y:re}=oe(Se);E=C,y=re,w=!1,D=!1;try{t.setPointerCapture(Se.pointerId)}catch{}if(Op(Se)){let K=H(C,re,M);Ne(K.x,K.y,!0)}Se.preventDefault()}function me(Se){if(!u)return;if(v===null){Ke(Se);return}if(v!==Se.pointerId)return;let{x:C,y:re}=oe(Se);if(Math.hypot(C-E,re-y)>=Ty&&(w=!0,D=!0),Np(Se)){if(!D)return;let Pe=H(C,re,"touch");Ne(Pe.x,Pe.y,!0)}else if(Op(Se)){let Pe=H(C,re,M);Ne(Pe.x,Pe.y,!0)}Se.preventDefault()}function Qe(Se){if(!u||v!==Se.pointerId)return;let{x:C,y:re}=oe(Se);Math.hypot(C-E,re-y)>=Ty&&(w=!0,D=!0),v=null;try{t.releasePointerCapture(Se.pointerId)}catch{}if(Np(Se)){w?D=!1:(D=!1,h&&m&&He()),Se.preventDefault();return}!w&&m&&He(),D=!1,Se.preventDefault()}function et(Se){v===Se.pointerId&&(v=null,D=!1)}return t.addEventListener("pointerdown",vt),t.addEventListener("pointermove",me),t.addEventListener("pointerup",Qe),t.addEventListener("pointercancel",et),{isActive:ye,setActive:ie,update:pt,formatMm:Dp}}function ch(n,e,t){return XA.setFromNormalAndCoplanarPoint(t,e).distanceToPoint(n)}function Dy(n,e,t){zt.copy(t).sub(e);let i=zt.lengthSq();if(i<1e-18)return n.distanceTo(e);let r=kn.copy(n).sub(e).dot(zt)/i;return r=Math.min(1,Math.max(0,r)),$o.copy(e).addScaledVector(zt,r).distanceTo(n)}function qA(n,e,t){zt.copy(t).sub(e);let i=zt.lengthSq();if(i<1e-18)return e.clone();let r=kn.copy(n).sub(e).dot(zt)/i;return r=Math.min(1,Math.max(0,r)),e.clone().addScaledVector(zt,r)}function $A(n,e,t){let i=Math.round(n.x/t),r=Math.round(n.y/t),s=Math.round(n.z/t),o=Math.round(e.x/t),a=Math.round(e.y/t),l=Math.round(e.z/t);return i<o||i===o&&r<a||i===o&&r===a&&s<=l?`${i},${r},${s}|${o},${a},${l}`:`${o},${a},${l}|${i},${r},${s}`}function YA(n){let e=document.getElementById("measure-crosshair");return e||(e=document.createElement("div"),e.id="measure-crosshair",e.className="measure-crosshair",e.hidden=!0,e.setAttribute("aria-hidden","true"),e.innerHTML='<span class="measure-crosshair-h"></span><span class="measure-crosshair-v"></span><span class="measure-crosshair-dot"></span>',(n.parentElement||document.body).appendChild(e),e)}function Ny(n,e,t,i,r){let s=e.getBoundingClientRect();n.style.left=`${s.left+t}px`,n.style.top=`${s.top+i}px`,n.dataset.snap=r||"none"}function Oy(n){let e=new La(1,16,12),t=new an({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),i=new ht(e,t);return i.renderOrder=20,i.visible=!1,i}function ZA(n,e){let t=n.material;e==="vertex"?t.color.setHex(16729402):e==="edge"||e==="perp"?t.color.setHex(16766474):t.color.setHex(6607615)}function Uy(n,e){let t=new kt,i=new Float32Array(6);t.setAttribute("position",new Ht(i,3));let r=new Sr({color:n,transparent:e<1,opacity:e,depthTest:!1,depthWrite:!1}),s=new Wi(t,r);return s.renderOrder=19,s.frustumCulled=!1,s.visible=!1,s}function KA(n){let e=new kt,t=new Float32Array(9);e.setAttribute("position",new Ht(t,3));let i=new Sr({color:n,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95}),r=new Wi(e,i);return r.renderOrder=22,r.frustumCulled=!1,r.visible=!1,r}function Fy(n,e,t,i,r){let s=r(t)*GA;if(zt.copy(e).sub(t),zt.lengthSq()<1e-16){n.visible=!1;return}if(zt.normalize(),kn.copy(i).normalize(),Yo.crossVectors(kn,zt),Yo.lengthSq()<1e-12){n.visible=!1;return}yi.copy(t).addScaledVector(kn,s),_i.copy(t),rr.copy(t).addScaledVector(zt,s);let o=n.geometry.getAttribute("position");o.setXYZ(0,yi.x,yi.y,yi.z),o.setXYZ(1,_i.x,_i.y,_i.z),o.setXYZ(2,rr.x,rr.y,rr.z),o.needsUpdate=!0,n.geometry.computeBoundingSphere()}function By(n,e,t){let i=n.geometry.getAttribute("position");i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.geometry.computeBoundingSphere()}function jA(n){let e=document.createElement("canvas");e.width=lh*2,e.height=lh;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);let o=18,a=14;t.font=`600 ${Math.round(lh*.42)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;let l=t.measureText(n),c=Math.ceil(l.width),u=Math.round(lh*.42),h=c+o*2,f=u+a*2,d=(e.width-h)/2,m=(e.height-f)/2,x=18;t.fillStyle="rgba(28, 28, 30, 0.78)",ky(t,d,m,h,f,x),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.22)",t.lineWidth=2,ky(t,d,m,h,f,x),t.stroke(),t.fillStyle="#f5f5f7",t.textAlign="center",t.textBaseline="middle",t.fillText(n,e.width/2,e.height/2+1)}let i=new wr(e);i.colorSpace=At,i.needsUpdate=!0;let r=new Eo({map:i,depthTest:!1,depthWrite:!1,transparent:!0}),s=new Ma(r);return s.renderOrder=21,s.center.set(.5,.5),s}function ky(n,e,t,i,r,s){let o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+r,o),n.arcTo(e+i,t+r,e,t+r,o),n.arcTo(e,t+r,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath()}function uh(n){if(n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1||n.consumed)return"ignore";if(Math.hypot(n.dx??0,n.dy??0)>(n.slop??12))return"drag";let t=n.longPressMs??500;return!n.released&&(n.dt??0)>=t?"longpress":n.released?"tap":"pending"}function Ui(n){let e=String(n||"").replace(/_(\d+)$/,""),t=e.split("__").filter(i=>i.length>0);return t.length>=2?{part:t[0],element:t.slice(1).join("__")}:{part:e||"part",element:null}}function Hy(n){let e="part",t=n;for(;t;){let i=t.name||"";if(!(i.endsWith("__edges")||!!t.userData?.isEdgeOverlay)&&i){let s=Ui(i);if(s.part&&(e=s.part),s.element)return{part:s.part,element:s.element}}t=t.parent||null}return{part:e,element:null}}var fh=12,JA=500,QA=Math.PI/2,eR=.03,Vy=.001;function tR(n){let e=Math.min(1,Math.max(0,n));return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function nR(n){return n.blocked||n.modifiers||n.button!==void 0&&n.button!==0||(n.pointers??1)>1?"ignore":Math.hypot(n.dx,n.dy)>fh?"drag":"tap"}function dh(n,e){return(e>=0?1:-1)*n*QA}function iR(n,e=null){let t=n.length,i=new Map,r=a=>{let l=i.has(a)?i.get(a):a;return l!==a?(l=r(l),i.set(a,l)):i.has(a)||i.set(a,a),l},s=(a,l)=>{let c=r(a),u=r(l);c!==u&&i.set(c,u)};if(e){let a=new Map,l=1e4,c=e.count??n.reduce((u,h)=>Math.max(u,h),0)+1;for(let u=0;u<c;u++){let h=`${Math.round(e.getX(u)*l)},${Math.round(e.getY(u)*l)},${Math.round(e.getZ(u)*l)}`,f=a.get(h);f===void 0?a.set(h,u):s(u,f)}}for(let a=0;a+2<t;a+=3)s(n[a],n[a+1]),s(n[a+1],n[a+2]);let o=new Map;for(let a=0;a+2<t;a+=3){let l=r(n[a]),c=o.get(l);c||(c=[],o.set(l,c)),c.push(a)}return[...o.values()]}function Gy(n){let e=n.geometry,t=e?.getIndex?.(),i=e?.getAttribute?.("position");if(!t||!i||!n.parent)return[n];let r=iR(t.array,i);if(r.length<2)return[n];let s=e.getAttribute("normal"),o=[];for(let a of r){let l=new Map,c=[],u=[],h=[],f=x=>{let g=l.get(x);return g!==void 0||(g=c.length/3,l.set(x,g),c.push(i.getX(x),i.getY(x),i.getZ(x)),s&&u.push(s.getX(x),s.getY(x),s.getZ(x))),g};for(let x of a)h.push(f(t.getX(x)),f(t.getX(x+1)),f(t.getX(x+2)));let d=new kt;d.setAttribute("position",new Gt(c,3)),u.length&&d.setAttribute("normal",new Gt(u,3)),d.setIndex(h);let m=new ht(d,n.material);m.name=n.name,m.position.copy(n.position),m.quaternion.copy(n.quaternion),m.scale.copy(n.scale),m.visible=n.visible,n.parent.add(m),o.push(m)}return n.parent.remove(n),e.dispose?.(),o}function rR(n,e=[]){let t=[];n.traverse(s=>{let o=s.name||"";if(Ui(o).part!=="door")return;let a=s.parent?.name||"";Ui(a).part!=="door"&&t.push(s)});let i=new Set((e||[]).filter(s=>s&&s.kind==="drawer"&&s.element).map(s=>String(s.element)));i.size&&n.traverse(s=>{let o=Ui(s.name||"");!o.element||!i.has(o.element)||Ui(s.parent?.name||"").element!==o.element&&t.push(s)});let r=[];for(let s of t){if(s.isMesh){r.push(...Gy(s));continue}let o=[];if(s.traverse(a=>{a.isMesh&&o.push(a)}),o.length===1){let a=Gy(o[0]);if(a.length>1){r.push(...a);continue}}r.push(s)}return r}function sR(n,e,t=eR){let i=[];for(let a of n)for(let l of e){if(!l)continue;let c=l.kind==="drawer"&&Array.isArray(l.slide),u=qy(l)||$y(l);if(!c&&!u&&(l.kind!=="hinged"||!l.hinge))continue;let h=l.center;if(!Array.isArray(h)||h.length<3)continue;let f=a.center.x-Number(h[0]),d=a.center.y-Number(h[1]),m=a.center.z-Number(h[2]),x=Math.hypot(f,d,m);x<=t&&i.push({distance:x,entry:a,record:l})}i.sort((a,l)=>a.distance-l.distance);let r=new Set,s=new Set,o=[];for(let a of i)r.has(a.entry)||s.has(a.record.id)||(r.add(a.entry),s.add(a.record.id),o.push({entry:a.entry,record:a.record}));return o}function oR(n){return n.updateWorldMatrix(!0,!0),new Nt().setFromObject(n).getCenter(new I)}function aR(n,e){let t=n.parent;if(!t)return null;if(e.kind==="drawer")return lR(n,e);if(qy(e))return dR(n,e);if($y(e))return fR(n,e);let i=new Et;i.name=`hinge:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=new I(Number(e.hinge[0]),Number(e.hinge[1]),Number(e.hinge[2]));i.position.copy(t.worldToLocal(r)),i.updateWorldMatrix(!0,!1),i.attach(n);let s={id:e.id,pivot:i,host:n,sign:Number(e.sign)>=0?1:-1,goal:0,anim:null},o=a=>{a.userData.bpDoor=s};return o(i),n.traverse(o),s}function lR(n,e){let t=n.parent;if(!t)return null;let i=new Et;i.name=`drawer:${e.id}`,t.add(i),t.updateWorldMatrix(!0,!1);let r=e.center.map(Number),s=e.slide.map(Number),o=t.worldToLocal(new I(r[0],r[1],r[2])),a=t.worldToLocal(new I(r[0]+s[0],r[1]+s[1],r[2]+s[2]));i.updateWorldMatrix(!0,!1),i.attach(n);let l={id:e.id,kind:"drawer",pivot:i,host:n,slideLocal:a.sub(o),sign:1,goal:0,anim:null},c=u=>{u.userData.bpDoor=l};return c(i),n.traverse(c),l}function qy(n){return!!(n&&n.kind==="sliding"&&Array.isArray(n.start)&&Array.isArray(n.end)&&Array.isArray(n.panels)&&n.panels.length>0)}var cR=new I(1,0,0);function $y(n){return!!(n&&n.kind==="sectional"&&["start","end","bottom","top","inward"].every(e=>Array.isArray(n[e]))&&Number(n.sections)>=1)}function uR(n,e,t){if(n<=e||t<=0)return{y:n,z:0,tilt:0};let i=Math.PI/2*t;if(n<=e+i){let r=(n-e)/t;return{y:e+t*Math.sin(r),z:t*(1-Math.cos(r)),tilt:r}}return{y:e+t,z:t+(n-e-i),tilt:Math.PI/2}}function hR(n,e){return n+Math.PI/2*Math.max(0,e)}function fR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=M=>t.worldToLocal(new I(Number(M[0]),Number(M[1]),Number(M[2]))),r=i(e.start),s=i(e.end),o=i(e.bottom),a=i(e.top),l=i([Number(e.bottom[0])+Number(e.inward[0]),Number(e.bottom[1])+Number(e.inward[1]),Number(e.bottom[2])+Number(e.inward[2])]),c=s.clone().sub(r),u=a.clone().sub(o),h=u.length();if(c.lengthSq()<1e-12||h<1e-6)return null;c.normalize(),u.normalize();let f=l.sub(o);if(f.addScaledVector(u,-f.dot(u)).addScaledVector(c,-f.dot(c)),f.lengthSq()<1e-12)return null;f.normalize();let d=new I().crossVectors(u,f),m=new it().makeBasis(d,u,f),x=new Et;x.name=n.name,x.position.copy(o),x.quaternion.setFromRotationMatrix(m),t.add(x),x.updateWorldMatrix(!0,!1),x.attach(n);let g=Math.max(1,Math.round(Number(e.sections))),p=h/g,b=Math.max(0,Number(e.bend)||0),S=[];for(let M=0;M<g;M++){let E=M===0?n:n.clone(!0),y=new Et;y.name=`section:${e.id}:${M}`;let w=new Et;w.position.y=-p/2,w.scale.y=1/g,y.add(w),x.add(y),w.add(E),S.push({pivot:y,s0:(M+.5)*p})}let v={id:e.id,kind:"sectional",pivot:x,host:x,sections:S,rise:h,bend:b,travel:hR(h,b),sign:1,goal:0,anim:null};return Yy(v,0),x.traverse(M=>{M.userData.bpDoor=v}),v}function Yy(n,e){for(let t of n.sections){let i=uR(t.s0+e*n.travel,n.rise,n.bend);t.pivot.position.set(0,i.y,i.z),t.pivot.rotation.set(i.tilt,0,0)}}function dR(n,e){let t=n.parent;if(!t)return null;t.updateWorldMatrix(!0,!1),n.updateWorldMatrix(!0,!0);let i=d=>t.worldToLocal(new I(Number(d[0]),Number(d[1]),Number(d[2]))),r=i(e.start),o=i(e.end).clone().sub(r);if(o.lengthSq()<1e-12)return null;let a=o.clone().normalize(),l=new Zt().setFromUnitVectors(cR,a),c=new Et;c.name=n.name,t.add(c);let u=e.panels.map((d,m)=>m===0?n:n.clone(!0)),h=[];e.panels.forEach((d,m)=>{let x=Array.isArray(d.span)?d.span.map(Number):[0,1],g=Array.isArray(d.slide)?d.slide:[0,0,0],p=i([Number(e.start[0])+Number(g[0]),Number(e.start[1])+Number(g[1]),Number(e.start[2])+Number(g[2])]).sub(r),b=new Et;b.name=`slide:${e.id}:${m}`,c.add(b);let S=new Et;S.position.copy(r),S.quaternion.copy(l),b.add(S),b.updateWorldMatrix(!0,!0);let v=u[m];v!==n&&(t.add(v),v.updateWorldMatrix(!0,!0)),S.attach(v),S.scale.x=Math.max(.001,x[1]-x[0]);let M=o.clone().multiplyScalar(x[0]);b.position.copy(M),h.push({pivot:b,base:M,slideLocal:p,span:x})});let f={id:e.id,kind:"sliding",pivot:c,host:c,panels:h,sign:1,goal:0,anim:null};return c.traverse(d=>{d.userData.bpDoor=f}),f}function sr(n,e){let t=n.anim;if(!t)return n.goal;let i=(e-t.t0)/JA;return i>=1?(n.anim=null,n.goal=t.to,t.to):t.from+(t.to-t.from)*tR(i)}var Wy=new Zt,yl=new I;function pR(n,e){if(n.quaternion.identity(),Math.abs(e)<=1e-8)return;let t=n.parent;yl.set(0,1,0),t&&(t.updateWorldMatrix(!0,!1),t.getWorldQuaternion(Wy).invert(),yl.applyQuaternion(Wy)),!(yl.lengthSq()<1e-12)&&(yl.normalize(),n.rotateOnAxis(yl,e))}function mR(n,e){let t=sr(n,e);if(n.sections)return Yy(n,t),t;if(n.panels){for(let i of n.panels)i.pivot.position.copy(i.base).addScaledVector(i.slideLocal,t);return t}return n.slideLocal?(n.pivot.position.copy(n.slideLocal).multiplyScalar(t),t):(pR(n.pivot,dh(t,n.sign)),t)}function gR(n,e){let t=sr(n,e),i=n.goal>.5?0:1;n.goal=i,n.anim={from:t,to:i,t0:e}}function xR(n,e){let t=sr(n,e);return t<=.001?!1:(n.goal>.5&&(n.goal=0,n.anim={from:t,to:0,t0:e}),!0)}var hh=new I,yR=new an({side:Ot,transparent:!0,opacity:0,depthWrite:!1});function _R(n){let e=[];if(n.updateWorldMatrix(!0,!0),n.traverse(g=>{g.isMesh&&g.geometry?.getAttribute?.("position")&&e.push(g)}),!e.length)return null;let t=new I,i=new I,r=new I;if(e[0].updateWorldMatrix(!0,!1),e[0].matrixWorld.extractBasis(t,i,r),t.lengthSq()<1e-12||i.lengthSq()<1e-12||r.lengthSq()<1e-12)return null;t.normalize(),i.normalize(),r.normalize();let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let g of e){let p=g.geometry;p.boundingBox||p.computeBoundingBox();let b=p.boundingBox,S=[b.min.x,b.max.x],v=[b.min.y,b.max.y],M=[b.min.z,b.max.z];for(let E of S)for(let y of v)for(let w of M){hh.set(E,y,w).applyMatrix4(g.matrixWorld);let D=hh.dot(t),N=hh.dot(i),k=hh.dot(r);D<s&&(s=D),N<o&&(o=N),k<a&&(a=k),D>l&&(l=D),N>c&&(c=N),k>u&&(u=k)}}let h=[(l-s)/2,(c-o)/2,(u-a)/2];if(h.some(g=>!(g>1e-6)))return null;let f=(s+l)/2,d=(o+c)/2,m=(a+u)/2;return{center:new I(t.x*f+i.x*d+r.x*m,t.y*f+i.y*d+r.y*m,t.z*f+i.z*d+r.z*m),axes:[t,i,r],half:h}}function vR(n,e){let t=new Xi(n.half[0]*2,n.half[1]*2,n.half[2]*2),i=new ht(t,yR);return i.name=e||"opening",i.matrix.makeBasis(n.axes[0],n.axes[1],n.axes[2]),i.matrix.setPosition(n.center),i.matrixAutoUpdate=!1,i.matrixWorld.copy(i.matrix),i.matrixWorldNeedsUpdate=!1,i.visible=!1,i.frustumCulled=!1,i.userData.bpHitProxy=!0,i.raycast=()=>{},i}function bR(n,e){let t=n.origin,i=n.direction,r=0,s=1/0;for(let o=0;o<3;o++){let a=e.axes[o],l=a.x*(e.center.x-t.x)+a.y*(e.center.y-t.y)+a.z*(e.center.z-t.z),c=a.x*i.x+a.y*i.y+a.z*i.z,u=e.half[o];if(Math.abs(c)>1e-8){let h=(l+u)/c,f=(l-u)/c;if(h>f){let d=h;h=f,f=d}if(h>r&&(r=h),f<s&&(s=f),r>s)return null}else if(-l-u>0||-l+u<0)return null}return s<0?null:{tEnter:r,tExit:s}}function MR(n){if(!n.length)return null;let e=n[0];for(let t of n)t.tEnter>e.tEnter&&(e=t);return e.binding}function Xy(n){let e=n;for(;e;){if(e.userData?.bpDoor&&!ks(e))return e.userData.bpDoor;e=e.parent}return null}function SR(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function wR(n){return ls(n.object)}function ER(n){n.proxy?.geometry?.dispose?.(),n.proxy=null,n.obb=null}function Zy(n){let e=Array.isArray(n.records)?n.records:[],t=n.canvas,i=n.isBlocked||(()=>!1),r=[],s=new ni,o=new Xe,a=null,l=0,c=null;function u(){c&&clearTimeout(c),c=null}function h(M,E,y){try{n.onToggle?.(M,{from:E,to:y})}catch(w){console.warn("door onToggle",w)}}let f=Ey();f.register({id:"door",priority:100,claim(M,E){let y=Xy(M.object);if(!y||y.host?.userData?.bpIfcHidden)return null;let w=E.now??performance.now(),D=sr(y,w)>Vy,N=()=>{let k=E.now??performance.now(),q=sr(y,k);gR(y,k),h(y,q,y.goal)};return{onTap:N,actions:[{id:"door",labelKey:D?"ui.close":"ui.open",run:N}]}},targets(){let M=[];for(let E of r){let y=E.host;if(!y||y.userData?.bpIfcHidden||!SR(y))continue;let w=new Nt().setFromObject(y);if(w.isEmpty())continue;let D=w.getCenter(new I);M.push({center:D,group:`door:${E.id}`,hit:{object:y,point:D},owns:N=>Xy(N)===E})}return M}});function d(M){let E=[],y=Number.isFinite(M.maxT)?M.maxT:1/0;for(let w of r){if(!w.obb||w.host?.userData?.bpIfcHidden||sr(w,M.now)<=Vy)continue;let D=bR(M.raycaster.ray,w.obb);!D||D.tEnter>y||E.push({binding:w,tEnter:D.tEnter})}return MR(E)}f.register({id:"opening",priority:10,probe:(M,E)=>!!d(E),fallback(M,E){let y=d(E);if(!y)return!1;let w=sr(y,E.now);return xR(y,E.now)?(h(y,w,0),!0):!1}});function m(M){for(let w of r)ER(w);if(r.length=0,!M||!e.length)return 0;M.updateWorldMatrix(!0,!0);let y=rR(M,e).map(w=>({host:w,center:oR(w)}));for(let w of sR(y,e)){let D=aR(w.entry.host,w.record);if(!D)continue;let N=D.kind==="drawer"?null:_R(D.host);D.obb=N,D.proxy=N?vR(N,`opening:${D.id}`):null,r.push(D)}return r.length}function x(M){let E=!1;for(let y of r){let w=!!y.anim;!w&&y.shown===y.goal||(mR(y,M),y.shown=y.anim?null:y.goal,w&&(E=!0))}return E}function g(M){if(!(M.button!==void 0&&M.button!==0)){if(l+=1,l>1){a=null;return}a={id:M.pointerId,x:M.clientX,y:M.clientY,moved:0,pointers:1,modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey,consumed:!1},u(),c=setTimeout(()=>{c=null,!(!a||a.consumed||uh({dt:500,dx:a.moved,dy:0,pointers:l,button:0,blocked:i(),modifiers:a.modifiers,released:!1})!=="longpress")&&(a.consumed=!0,n.onLongPress?.({clientX:a.x,clientY:a.y,pointerId:a.id}))},500)}}function p(M){if(!a||M.pointerId!==a.id)return;let E=Math.hypot(M.clientX-a.x,M.clientY-a.y);E>a.moved&&(a.moved=E),a.moved>fh&&u()}function b(M){if(l=Math.max(0,l-1),u(),!a||M.pointerId!==a.id)return;let E=a;if(a=null,E.consumed)return;let y=Math.max(E.moved,Math.hypot(M.clientX-E.x,M.clientY-E.y));nR({dx:y,dy:0,pointers:l>0?2:1,button:M.button,blocked:i(),modifiers:M.altKey||M.ctrlKey||M.metaKey||M.shiftKey})==="tap"&&v(M)}function S(){l=Math.max(0,l-1),a=null}function v(M){let E=n.getCamera();if(!E||!r.length)return;let y=t.getBoundingClientRect(),w=y.width||t.clientWidth||1,D=y.height||t.clientHeight||1;o.x=(M.clientX-y.left)/w*2-1,o.y=-((M.clientY-y.top)/D)*2+1,s.setFromCamera(o,E);let k=r[0]?.pivot?.parent;for(;k?.parent;)k=k.parent;if(!k)return;let q=s.intersectObject(k,!0);f.dispatch(q,{raycaster:s,now:performance.now(),camera:E,root:k,tap:{x:M.clientX-y.left,y:M.clientY-y.top},size:{w,h:D}},wR)}return t.addEventListener("pointerdown",g,!0),t.addEventListener("pointermove",p,!0),t.addEventListener("pointerup",b,!0),t.addEventListener("pointercancel",S,!0),t.addEventListener("contextmenu",M=>M.preventDefault()),{bind:m,step:x,bindings:r,taps:f}}var TR=.8,AR=.4,Ky=.01,RR=1e-9;function Up(n){let e=Array.isArray(n?.slide)?n.slide.map(Number):[];return e.length===3&&e.some(t=>Math.abs(t)>RR)}function CR(n){return n?n.operable===!1?!1:Array.isArray(n.panels)&&n.panels.some(Up):!0}function PR(n,e){let t=Array.isArray(n?.panels)?n.panels:[],i=-1,r=1/0;return t.forEach((s,o)=>{if(!Array.isArray(s.min)||!Array.isArray(s.max))return;let a=!0,l=0;for(let c=0;c<3;c++){let u=Number(s.min[c])-Ky,h=Number(s.max[c])+Ky;(e[c]<u||e[c]>h)&&(a=!1);let f=(Number(s.min[c])+Number(s.max[c]))/2;l+=(e[c]-f)**2}a&&l<r&&(i=o,r=l)}),i}var jy=new Nt,vl=new I;function IR(n){let e=n.geometry;return e&&!e.boundingBox&&e.computeBoundingBox?.(),n.updateWorldMatrix?.(!0,!1),e?.boundingBox?(jy.copy(e.boundingBox).applyMatrix4(n.matrixWorld),jy.getCenter(vl)):n.getWorldPosition(vl),[vl.x,vl.y,vl.z]}function Jy(n=[]){let e=new Map;for(let d of Array.isArray(n)?n:[])d&&d.id&&e.set(String(d.id),d);let t=new Map;function i(d){let m=0;for(let g of d){let p=g.geometry;p&&!p.boundingBox&&p.computeBoundingBox?.(),p?.boundingBox&&(m=Math.max(m,p.boundingBox.max.x-p.boundingBox.min.x))}let x=(m||AR)*TR;return{record:null,moving:d.map(g=>({mesh:g,slideLocal:new I(x,0,0),panel:0})),fixed:new Set,panelOf:new Map(d.map(g=>[g,0]))}}function r(d,m){let x=[],g=new Set,p=new Map;for(let b of m){let S=IR(b),v=PR(d,S),M=v>=0?d.panels[v]:null;if(p.set(b,v),!M||!Up(M)){g.add(b);continue}let E=M.slide.map(Number),y=b.parent,w=new I(E[0],E[1],E[2]);if(y){y.updateWorldMatrix(!0,!1);let D=y.worldToLocal(new I(S[0],S[1],S[2]));w=y.worldToLocal(new I(S[0]+E[0],S[1]+E[1],S[2]+E[2])).sub(D)}x.push({mesh:b,slideLocal:w,panel:v})}return{record:d,moving:x,fixed:g,panelOf:p}}function s(d,m){let x=t.get(d);if(x)return x;let g=e.get(String(d))||null,p=g?r(g,m):i(m);for(let{mesh:b}of p.moving)b.userData.bpSlideOrigin||(b.userData.bpSlideOrigin=b.position.clone());return x={...p,goal:0,anim:null,shown:0},t.set(d,x),x}function o(d){return e.get(String(d))||null}function a(d){return CR(o(d))}function l(d,m){if(!a(d))return[];let x=s(d,m),g=new Set(x.moving.map(p=>p.mesh));return m.filter(p=>g.has(p))}function c(d,m,x){let g=new Set(l(d,m));if(!g.size)return!1;if(!x)return!0;for(let p=x;p;p=p.parent)if(g.has(p))return!0;return!1}function u(d,m,x,g){if(!a(d))return!1;let p=s(d,m);if(!p.moving.length)return!1;let b=sr(p,g);return p.goal=x?1:0,p.anim={from:b,to:p.goal,t0:g},p.shown=null,!0}function h(d){let x=o(d)?.panels?.find(Up);return x?x.slide.map(Number):null}function f(d){let m=!1;for(let x of t.values()){if(!x.anim&&x.shown===x.goal)continue;let g=sr(x,d);for(let{mesh:p,slideLocal:b}of x.moving)p.position.copy(p.userData.bpSlideOrigin).addScaledVector(b,g);x.shown=x.anim?null:x.goal,m=!0}return m}return{slide:u,step:f,slides:t,isOperable:a,operableMeshes:l,acceptsHit:c,slideOf:h,recordOf:o}}var LR=700,DR=36,Zo=36;function NR(n,e=!1){let t=Math.min(Math.max(n,0),1),i=t<.2?1:1-(t-.2)/.8;if(e)return{opacity:i,rise:0,scale:1};let r=1-(1-t)*(1-t),s=t<.15?.7+.3*t/.15:1;return{opacity:i,rise:DR*r,scale:s}}function Qy(n,e){let t=e.x-n.x,i=e.y-n.y;return Math.hypot(t,i)<1e-6?null:Math.atan2(i,t)*180/Math.PI}function OR(n){return n==="down"?90:-90}function e_(n,e,t){let i=n[0]-e[0],r=n[2]-e[2],s=Math.cos(t),o=Math.sin(t);return[e[0]+s*i+o*r,n[1],e[2]-o*i+s*r]}function UR(n,e,t){let i=Qy(n,e);if(i==null)return null;let r=e.x-n.x,s=e.y-n.y,o=(n.x+e.x)/2,a=(n.y+e.y)/2,c=r*(t.y-a)-s*(t.x-o)>=0?1:-1;return{angle:i+45*c,bend:c}}function FR(n=LR){let e=[],t=1;return{items:e,add(i,r){let s={id:t++,t0:i,data:r};return e.push(s),s},step(i){let r=[],s=[];for(let o=e.length-1;o>=0;o-=1)(i-e[o].t0)/n>=1&&s.push(...e.splice(o,1));for(let o of e)r.push({item:o,t:(i-o.t0)/n});return{alive:r,expired:s}}}}var BR="http://www.w3.org/2000/svg",Fp='fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"',kR={arrow:`<path ${Fp} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,hinge:`<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/><path ${Fp} d="M17 5.5 L28 13 L17 20.5 Z"/>`,ring:`<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${Fp}/>`},cs=null;function zR(n=globalThis){try{let e=n.navigator;if(e&&typeof e.vibrate=="function"&&e.vibrate(10))return"vibrate";let t=n.document,i=n.matchMedia?.("(pointer: coarse)")?.matches;if(!t||!i)return"none";if(!cs){cs=t.createElement("label"),cs.setAttribute("aria-hidden","true"),cs.style.display="none";let r=t.createElement("input");r.type="checkbox",r.setAttribute("switch",""),cs.appendChild(r)}return t.head.appendChild(cs),cs.click(),cs.remove(),"ios-switch"}catch{return"none"}}function t_(n){let e=n.document||globalThis.document,t=n.now||(()=>performance.now()),i=n.requestFrame||(p=>globalThis.requestAnimationFrame(p)),r=n.reducedMotion||(()=>!!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),s=n.haptics||(()=>zR()),o=FR(),a=new I,l=null,c=!1;function u(){return l||(l=e.createElement("div"),l.className="bp-feedback",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"fixed",left:"0",top:"0",width:"0",height:"0",pointerEvents:"none",zIndex:"40"}),e.body.appendChild(l),l)}function h(p){let b=n.getCamera();if(!b||(Array.isArray(p)?a.set(p[0],p[1],p[2]):a.copy(p),b.updateMatrixWorld?.(),a.project(b),!Number.isFinite(a.x)||a.z>1||a.z<-1))return null;let S=n.canvas.getBoundingClientRect();return{x:S.left+(a.x+1)/2*S.width,y:S.top+(1-a.y)/2*S.height}}function f(p,b){let S=h(p),v=Array.isArray(p)?new I(...p):p.clone(),M=Array.isArray(b)?new I(...b):b.clone(),E=M.length();if(E<1e-9)return null;let y=h(v.add(M.multiplyScalar(.1/E)));return!S||!y?null:Qy(S,y)}function d(p){if(p.haptic!==!1)try{s()}catch{}try{return m(p)}catch(b){return console.warn("feedback",b),null}}function m(p){if(!e?.body||!p?.worldPos)return null;let b="arrow",S=-90,v=1;if(p.kind==="switch"||p.kind==="lift")S=OR(p.direction||"up");else if(p.kind==="slide"){let D=p.worldDir?f(p.worldPos,p.worldDir):null;if(D==null)return null;S=D}else if(p.kind==="hinge"){let D=h(p.worldPos),N=p.to?h(p.to):null,k=p.hinge?h(p.hinge):null,q=D&&N&&k?UR(D,N,k):null;if(!q)return null;b="hinge",S=q.angle,v=q.bend}else p.kind==="light"&&(b="ring",S=0);let M=Array.isArray(p.worldPos)?new I(...p.worldPos):p.worldPos.clone();if(p.kind==="hinge"&&p.to){let D=Array.isArray(p.to)?new I(...p.to):p.to;M.lerp(D,.5)}let E=e.createElement("div");E.className=`bp-feedback-item bp-feedback-${p.kind}`,Object.assign(E.style,{position:"absolute",left:"0",top:"0",width:`${Zo}px`,height:`${Zo}px`,marginLeft:`${-Zo/2}px`,marginTop:`${-Zo/2}px`,willChange:"transform, opacity",filter:"drop-shadow(0 1px 2px rgba(0,0,0,.45))"});let y=e.createElementNS(BR,"svg");y.setAttribute("viewBox","0 0 32 32"),y.setAttribute("width",String(Zo)),y.setAttribute("height",String(Zo)),y.style.overflow="visible",y.style.transform=`rotate(${S}deg) scale(1, ${v})`,y.innerHTML=kR[b],E.appendChild(y),u().appendChild(E);let w=o.add(t(),{el:E,anchor:M,kind:p.kind});return x(w,0),c||(c=!0,i(g)),w}function x(p,b){let{el:S,anchor:v,kind:M}=p.data,E=h(v);if(!E){S.style.opacity="0";return}let y=NR(b,r()),w=M==="light"?.8+.7*Math.min(Math.max(b,0),1):y.scale,D=M==="light"?0:y.rise;S.style.opacity=String(y.opacity),S.style.transform=`translate(${E.x.toFixed(1)}px, ${(E.y-D).toFixed(1)}px) scale(${w.toFixed(3)})`}function g(){let{alive:p,expired:b}=o.step(t());for(let S of b)S.data.el.remove();for(let{item:S,t:v}of p)x(S,v);p.length?i(g):c=!1}return{showFeedback:d,count:()=>o.items.length,tick:g}}var HR=[{type:"IfcLightFixture",id:"light",priority:60,labelKey:(n,e)=>e.isOn?.(n)?"ui.turnOff":"ui.turnOn",run:(n,e,t,i)=>i.onLight?.(n,e,t)},{type:"IfcSwitchingDevice",id:"switch",priority:70,labelKey:()=>"ui.press",run:(n,e,t,i)=>i.onSwitch?.(n,e,t),actions:(n,e,t,i)=>i.switchActions?.(n,e,t)},{type:"IfcActuator",id:"cover",priority:55,liveOnly:!0,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onCover?.(n,e,t),actions:(n,e,t,i)=>i.coverActions?.(n,e,t)},{type:"IfcWindow",id:"window",priority:50,labelKey:(n,e)=>e.isOpen?.(n)?"ui.close":"ui.open",run:(n,e,t,i)=>i.onWindow?.(n,e,t),accepts:(n,e,t)=>t.windowAccepts?t.windowAccepts(n,e):!0}];function n_(n,e){for(let t of HR)n.register({id:t.id,priority:t.priority,claim(i,r){let s=e.elementOf?.(i.object);if(!s||s.type!==t.type||t.liveOnly&&!e.isLive?.(s)||t.accepts&&!t.accepts(s,i,e))return null;let o=()=>t.run(s,i,r,e),a=t.actions?.(s,i,r,e);return{onTap:o,actions:Array.isArray(a)&&a.length?a:[{id:t.id,labelKey:t.labelKey(s,e),run:o}]}},targets(i){let r=e.targetsFor?.(t.type,i);return Array.isArray(r)?t.liveOnly?r.filter(s=>e.isLive?.(s.element)):r:[]}})}var VR="https://home-test.tail9f879b.ts.net",r_="blueprints.homeMode",GR=new Set(["IfcLightFixture","IfcSwitchingDevice","IfcSensor","IfcActuator"]),i_=[2e3,5e3,15e3,3e4,6e4],WR=5e3;function s_(n){for(let e of Object.values(n?.elements||{}))if(e&&GR.has(e.type||""))return!0;return!1}function o_(n={}){let e;try{e=new URLSearchParams(n.search||"")}catch{e=new URLSearchParams}let t="live",i=null;try{i=n.storage?.getItem(r_)??null}catch{i=null}(i==="off"||i==="live")&&(t=i);let r=(e.get("home")||"").trim().toLowerCase();(r==="off"||r==="live")&&(t=r);let s=VR,o=(e.get("homeUrl")||"").trim();if(o)try{let a=new URL(o);(a.protocol==="https:"||a.protocol==="http:")&&(s=a.href.replace(/\/+$/,""))}catch{}return{mode:t,baseUrl:s}}function a_(n,e){try{n?.setItem(r_,e)}catch{}}function XR(n){let e=new URL(n.replace(/\/+$/,"")+"/events");return e.protocol=e.protocol==="http:"?"ws:":"wss:",e.href}function qR(n,e,t=""){return`${n.replace(/\/+$/,"")}/devices/${encodeURIComponent(e)}${t}`}function $R(n,e){return`${n.replace(/\/+$/,"")}/simulate/devices/${encodeURIComponent(e)}/press`}var ph=4868682;function Bp(n){let e=[[2200,16751135],[3e3,16758835],[4e3,16766814],[5e3,16773816],[6500,15266303]],t=Number.isFinite(n)?Math.min(Math.max(n,e[0][0]),e.at(-1)[0]):3e3,i=0;for(;i<e.length-2&&t>e[i+1][0];)i+=1;let[r,s]=e[i],[o,a]=e[i+1],l=(t-r)/(o-r),c=(h,f)=>h>>f&255,u=h=>Math.round(c(s,h)+(c(a,h)-c(s,h))*l);return u(16)<<16|u(8)<<8|u(0)}function kp(n){let e=n?.state||{},t=!!(n?.online&&e.onOff?.onOff===!0),i=e.levelControl?.currentLevel,r=Number.isFinite(i)?Math.min(Math.max(i/254,0),1):1,s=e.colorControl?.colorTemperatureMireds,o=Number.isFinite(s)&&s>0?Math.round(1e6/s):null,a=t?Bp(o):ph;return{on:t,level:r,kelvin:o,color:a}}function bl(n){return n?.objectType==="DoublePushButton"?["rocker-1","rocker-2"]:["rocker"]}function l_(n,e){let t=bl(n);return{rocker:t.length>1?t[e.side<0?0:1]:t[0],position:e.dy>=0?"up":"down",kind:"short"}}function c_(n,e){if(!n)return[];let t=[];n.online||t.push(e("home.deviceOffline"));let i=n.state||{};switch(n.deviceType){case"ColorTemperatureLight":{let r=i.onOff?.onOff;t.push(r==null?e("home.unknown"):e(r?"home.on":"home.off"));let s=kp({...n,online:!0});Number.isFinite(i.levelControl?.currentLevel)&&t.push(`${e("home.level")} ${Math.round(s.level*100)} %`),s.kelvin&&t.push(`${s.kelvin} K`);let o=i.derived?.channels;o&&t.push(`${e("home.warm")} ${Math.round(o.warm)} % \xB7 ${e("home.cool")} ${Math.round(o.cool)} %`);break}case"GenericSwitch":{let r=i.switch?.lastEvent;r?t.push(`${e("home.lastEvent")}: ${r.rocker} ${r.position} ${r.event}`):t.push(e("home.noEvents"));break}case"ContactSensor":{let r=i.booleanState?.stateValue;t.push(r==null?e("home.unknown"):e(r?"home.contactClosed":"home.contactOpen"));break}case"OccupancySensor":{let r=i.occupancySensing?.occupancy;t.push(r==null?e("home.unknown"):r.occupied?e("home.occupied"):e("home.vacant"));break}case"WindowCovering":{let r=i.windowCovering?.currentPositionLiftPercent100ths;t.push(r==null?e("home.unknown"):`${e("home.closedPct")} ${Math.round(r/100)} %`);break}default:break}return t}function u_(n){let e=n.fetchImpl||globalThis.fetch?.bind(globalThis),t=n.WebSocketImpl||globalThis.WebSocket,i=n.setTimer||((v,M)=>setTimeout(v,M)),r=n.clearTimer||(v=>clearTimeout(v)),s=new Map,o="off",a=!1,l=!1,c=0,u=0,h=null,f=null;function d(v,M){if(!(o===v&&!M)){o=v;try{n.onStatus?.(v,M)}catch(E){console.error("home onStatus",E)}}}function m(v,...M){try{v?.(...M)}catch(E){console.error("home handler",E)}}function x(v){if(!l||v!==u)return;let M=i_[Math.min(c,i_.length-1)];c+=1,f=i(()=>{f=null,l&&v===u&&b(v)},M)}function g(v){if(!v||typeof v.globalId!="string")return;let M=s.get(v.globalId);s.set(v.globalId,v),m(n.onDevice,v,M)}function p(v){let M;try{M=JSON.parse(typeof v=="string"?v:String(v))}catch{return}if(!(!M||typeof M!="object"))if(M.type==="snapshot"&&Array.isArray(M.devices)){c=0;for(let E of M.devices)g(E);d("live"),m(n.onSnapshot,M.devices)}else M.type==="state"&&M.device?g(M.device):M.type==="switch"&&M.event&&m(n.onSwitch,M.event)}async function b(v){if(!e||!t){d("unreachable","no fetch/WebSocket");return}d(o==="live"?"connecting":o==="unreachable"?"unreachable":"connecting");let M=null;try{let y=typeof AbortController=="function"?new AbortController:null,w=i(()=>y?.abort(),WR);try{let D=await e(`${n.baseUrl.replace(/\/+$/,"")}/health`,{signal:y?.signal,cache:"no-store"});D.ok&&(M=await D.json())}finally{r(w)}}catch{M=null}if(!l||v!==u)return;if(!M||M.status!=="ok"){d("unreachable"),x(v);return}a=!!M.simulation;let E;try{E=new t(XR(n.baseUrl))}catch{d("unreachable"),x(v);return}h=E,E.onmessage=y=>{v===u&&p(y.data)},E.onclose=()=>{h===E&&(h=null),!(!l||v!==u)&&(d(o==="live"?"connecting":"unreachable"),x(v))},E.onerror=()=>{}}async function S(v,M){if(!e||o!=="live")return{ok:!1,status:0};try{let E=await e(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),y="";if(!E.ok)try{let w=await E.json();y=w?.error?.message||w?.error?.code||""}catch{}return{ok:E.ok,status:E.status,error:y}}catch(E){return{ok:!1,status:0,error:String(E?.message||E)}}}return{start(){l||(l=!0,c=0,u+=1,b(u))},stop(){l=!1,u+=1,f!=null&&r(f),f=null;let v=h;h=null;try{v?.close()}catch{}s.clear(),a=!1,d("off")},status:()=>o,isLive:()=>o==="live",simulation:()=>a,device:v=>o==="live"?s.get(v):void 0,lastKnown:v=>s.get(v),devices:()=>[...s.values()],command:(v,M)=>S(qR(n.baseUrl,v,"/commands"),M),press:(v,M)=>S($R(n.baseUrl,v),M)}}var YR=new Set(["IfcGroup","IfcSystem","IfcZone","IfcDistributionSystem","IfcDistributionCircuit","IfcBuildingSystem","IfcStructuralAnalysisModel"]);function vi(n){return YR.has(n?.type)}function mh(n,e){return e?Array.isArray(n.groups)?n.groups.includes(e):vi(n.elements?.[e]):!1}function f_(n){let e=n&&n.elements&&typeof n.elements=="object"?n.elements:{},t=Array.isArray(n?.roots)?n.roots.filter(r=>e[r]):[],i=Array.isArray(n?.groups)?n.groups.filter(r=>e[r]):Object.values(e).filter(vi).map(r=>r.globalId);return{elements:e,roots:t,groups:i}}function gh(n,e){let t=[];for(let i of Object.values(n.elements)){if(!i)continue;let r=i.parentId||null;(r===e||!r&&i.containerId===e)&&t.push(i)}return t.sort((i,r)=>{let s=(i.order??0)-(r.order??0);return s||String(i.name||"").localeCompare(String(r.name||""))}),t.map(i=>i.globalId)}function zp(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=s.parentId||s.containerId||null}return t.reverse(),t}function Hp(n,e){return zp(n,e).slice(0,-1)}function Vp(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of gh(n,s))r(a,o+1)};for(let s of n.roots)r(s,0);return t}function xh(n,e){let t=n.elements[e];if(t&&Array.isArray(t.childGroupIds))return m_(n,t.childGroupIds.filter(r=>n.elements[r]));let i=[];for(let r of Object.values(n.elements)){if(!vi(r))continue;(r.parentGroupIds||r.groups||[]).includes(e)&&i.push(r)}return i.sort(p_),i.map(r=>r.globalId)}function ZR(n){let t=(Array.isArray(n.groups)?n.groups.filter(i=>n.elements[i]):Object.values(n.elements).filter(vi).map(i=>i.globalId)).filter(i=>{let r=n.elements[i];return!(r.parentGroupIds||r.groups||[]).some(o=>mh(n,o))});return m_(n,t)}function KR(n,e){let t=[],i=new Set,r=e||null;for(;r&&n.elements[r]&&!i.has(r);){i.add(r),t.push(r);let s=n.elements[r];r=(s.parentGroupIds||s.groups||[]).find(a=>mh(n,a))||null}return t.reverse(),t}function d_(n,e){return KR(n,e).slice(0,-1)}function Gp(n,e){let t=[],i=new Set,r=(s,o)=>{if(!(!s||i.has(s)||!n.elements[s])&&(i.add(s),t.push({id:s,depth:o}),!!e.has(s)))for(let a of xh(n,s))r(a,o+1)};for(let s of ZR(n))r(s,0);return t}function p_(n,e){let t=s=>{let o=s?.id||"";return o==="GRP-FURNITURE"?0:o==="GRP-ELECTRICAL"?1:10},i=t(n)-t(e);if(i)return i;let r=(n.order??0)-(e.order??0);return r||String(n.name||"").localeCompare(String(e.name||""))}function m_(n,e){let t=[],i=new Set;for(let r of e)!r||i.has(r)||!n.elements[r]||(i.add(r),t.push(r));return t.sort((r,s)=>p_(n.elements[r],n.elements[s])),t}function g_(n){return Math.min(Math.max(0,n),4)*12}function x_(n,e,t,i,r=44,s=4){if(i<=0)return{start:0,end:0};let o=n-t,a=Math.max(0,Math.floor(o/r)-s),l=Math.min(i,Math.ceil((o+e)/r)+s);return{start:a,end:Math.max(a,l)}}var h_=new WeakMap;function jR(n,e){let t=n.elements[e];if(t&&(Array.isArray(t.memberIds)||Array.isArray(t.childGroupIds)))return[...t.childGroupIds||[],...t.memberIds||[]].filter(s=>s&&n.elements[s]);let i=h_.get(n.elements);if(!i){i=new Map;for(let r of Object.values(n.elements))for(let s of r?.groups||[])i.has(s)||i.set(s,[]),i.get(s).push(r.globalId);h_.set(n.elements,i)}return i.get(e)||[]}function us(n,e){let t=[],i=[e],r=new Set;for(;i.length;){let s=i.pop();if(!(!s||r.has(s)||!n.elements[s])){r.add(s),t.push(s);for(let o of gh(n,s))i.push(o);for(let o of jR(n,s))i.push(o)}}return t}function y_(n,e){let t=null,i=null,r=new Set,s=n.elements[e]?.containerId||n.elements[e]?.parentId||null;for(;s&&n.elements[s]&&!r.has(s);){r.add(s);let o=n.elements[s];o.type==="IfcSpace"&&!i&&(i=o),o.type==="IfcBuildingStorey"&&!t&&(t=o),s=o.containerId||o.parentId||null}return{storey:t,space:i}}function __(n){if(!n)return[];let e=[];n.description&&e.push(String(n.description)),n.role&&e.push(`Role: ${n.role}`),n.objectType&&n.objectType!==n.role&&e.push(`Object type: ${n.objectType}`),n.predefinedType&&n.predefinedType!==n.role&&e.push(`Predefined type: ${n.predefinedType}`),n.tag&&e.push(`Tag: ${n.tag}`);for(let t of n.circuits||[])e.push(`Circuit: ${t}`);for(let t of n.cables||[])e.push(`Cable: ${t}`);for(let t of n.propertySets||[]){let i=Object.entries(t.properties||{}).filter(([r])=>r!=="id");if(i.length){e.push(String(t.name||"Pset"));for(let[r,s]of i)e.push(`${r}: ${v_(s)}`)}}return e}function v_(n){if(typeof n=="number"){if(!Number.isFinite(n))return"";let e=Math.round(n*1e3)/1e3;return String(e)}return typeof n=="boolean"?n?"true":"false":n==null?"":String(n)}function b_(n,e){return n&&n===e?"frame":"pulse"}function M_(n){return n?(n.dimensions||[]).filter(e=>e&&e.value!=null&&e.value!=="").map(e=>`${e.name}: ${v_(e.value)}`):[]}function S_(n){let e=document.getElementById("sheet-scroll");if(!e)return{reveal(){},open(){},inspect(){},refresh(){}};let t=document.createElement("div");for(t.id="sheet-main";e.firstChild;)t.append(e.firstChild);let i=document.createElement("button");i.type="button",i.className="ifc-entry",i.dataset.noSheetDrag="true";let r=document.createElement("span");r.dataset.i18n="ui.inspector",r.textContent=n.t("ui.inspector");let s=document.createElement("span");s.className="ifc-entry-chevron",s.setAttribute("aria-hidden","true"),s.textContent="\u203A",i.append(r,s),t.append(i);let o=document.createElement("div");o.id="sheet-inspector",o.hidden=!0,o.dataset.noSheetDrag="true";let a=document.createElement("div");a.className="ifc-toolbar";let l=document.createElement("button");l.type="button",l.className="ifc-back",l.dataset.noSheetDrag="true";let c=document.createElement("button");c.type="button",c.className="ifc-show-all",c.hidden=!0,c.dataset.noSheetDrag="true",a.append(l,c);let u=document.createElement("div");u.className="seg ifc-tabs",u.dataset.noSheetDrag="true";let h=document.createElement("button");h.type="button";let f=document.createElement("button");f.type="button",u.append(h,f);let d=document.createElement("div");d.className="ifc-crumbs",d.dataset.noSheetDrag="true";let m=document.createElement("div");m.className="ifc-tree";let x=document.createElement("div");x.className="ifc-panes";let g=document.createElement("div");g.className="ifc-panes-track";let p=ye(),b=ye();g.append(p.root,b.root),x.append(g),m.append(x);let S=document.createElement("div");S.className="ifc-info",S.hidden=!0;let v=document.createElement("div");v.className="ifc-head",v.append(a,u,d),o.append(v,m,S),e.append(t,o);let M=document.createElement("div");M.id="ifc-row-menu",M.hidden=!0,M.className="ifc-menu",document.body.append(M);let E=new Set,y=new Set,w="spatial",D=null,N=null,k=null,q=0,z=null,O=[],Y=!1,ee="",j={spatial:0,groups:0};function ye(){let B=document.createElement("div");B.className="ifc-pane";let L=document.createElement("div");L.className="ifc-list";let W=document.createElement("div");W.className="ifc-list-spacer";let G=document.createElement("div");return G.className="ifc-list-window",L.append(W,G),B.append(L),{root:B,list:L,spacer:W,windowEl:G}}function ie(){o.hidden=!0,t.hidden=!1,K(),Pe()}function V(){t.hidden=!0,o.hidden=!1,H(),requestAnimationFrame(()=>H())}function ne(){n.openSheet(),V(),e.scrollTop=0}i.addEventListener("click",()=>ne()),l.addEventListener("click",()=>{if(z){J();return}ie(),e.scrollTop=0}),c.addEventListener("click",()=>{n.visibility.showAll(),n.onVisibility(),H()}),h.addEventListener("click",()=>we("spatial")),f.addEventListener("click",()=>we("groups"));function we(B,{animate:L=!0,keepScroll:W=!1}={}){B!=="spatial"&&B!=="groups"||w!==B&&(z||(j[w]=e.scrollTop),w=B,L||g.classList.add("is-instant"),z?g.classList.toggle("is-groups",w==="groups"):(H(),W||(e.scrollTop=j[B]||0),He()),L||requestAnimationFrame(()=>g.classList.remove("is-instant")))}function Ne(B){let L=n.index.elements[B];return L&&(L.name||L.id||L.type)||B}function Q(){return w==="groups"?N:D}function _e(B){w==="groups"?N=B:D=B}function oe(){if(d.replaceChildren(),w!=="spatial"||z){d.hidden=!0;return}let B=D?zp(n.index,D):[];if(!B.length){d.hidden=!0;return}d.hidden=!1,B.forEach((L,W)=>{if(W){let pe=document.createElement("span");pe.className="ifc-crumb-sep",pe.textContent="\u203A",d.append(pe)}let G=document.createElement("button");G.type="button",G.className="ifc-crumb",G.textContent=Ne(L),G.addEventListener("click",()=>{D=L;for(let pe of Hp(n.index,L))E.add(pe);H(),Qe(L)}),d.append(G)})}function H(){let B=!!z||Y;if(B){let L=O.length?O[O.length-1]:null;l.textContent=L?`\u2039 ${Ne(L)}`:`\u2039 ${n.t("ui.inspector")}`}else l.textContent=`\u2039 ${n.t("ui.menu")}`;c.textContent=n.t("ui.showAll"),c.hidden=!n.visibility.anyHidden(),r.textContent=n.t("ui.inspector"),h.textContent=n.t("ui.spatial"),f.textContent=n.t("ui.groups"),h.classList.toggle("is-active",w==="spatial"),f.classList.toggle("is-active",w==="groups"),u.hidden=B,m.hidden=B,S.hidden=!B,g.classList.toggle("is-groups",w==="groups"),oe(),B?Le():He()}function te(B){let L=e.getBoundingClientRect();return B.getBoundingClientRect().top-L.top+e.scrollTop}function Ie(){let B=e.getBoundingClientRect();return v.getBoundingClientRect().bottom-B.top+6}function We(){return w==="groups"?b:p}function Oe(){return w==="groups"?Gp(n.index,y):Vp(n.index,E)}function Ge(B){return w==="groups"?xh(n.index,B):gh(n.index,B)}function tt(B,L,W){if(B.spacer.style.height=`${L.length*44}px`,!W){B.windowEl.replaceChildren();return}let G=x_(e.scrollTop,e.clientHeight||320,te(B.list),L.length,44);B.windowEl.replaceChildren(),B.windowEl.style.transform=`translateY(${G.start*44}px)`;for(let pe=G.start;pe<G.end;pe++)B.windowEl.append(Mt(L[pe]))}function He(){let B=Vp(n.index,E),L=Gp(n.index,y),W=w==="groups"?L:B;x.style.height=`${W.length*44}px`,tt(p,B,w==="spatial"),tt(b,L,w==="groups")}function Mt(B){let L=n.index.elements[B.id],W=Ge(B.id),G=document.createElement("div");if(G.className="ifc-row",G.dataset.id=B.id,G.style.paddingLeft=`${g_(B.depth)+8}px`,G.style.height=`${44}px`,(B.id===k||B.id===Q())&&G.classList.add("is-target"),n.visibility.isHidden(B.id)&&G.classList.add("is-hidden"),W.length){let Re=document.createElement("button");Re.type="button",Re.className="ifc-disclosure";let Ue=(w==="groups"?y:E).has(B.id);Re.textContent=Ue?"\u25BE":"\u203A",Re.setAttribute("aria-expanded",Ue?"true":"false"),Re.setAttribute("aria-label",Ue?n.t("ui.collapse"):n.t("ui.expand")),Re.addEventListener("click",$=>{$.stopPropagation();let Ce=w==="groups"?y:E;Ce.has(B.id)?Ce.delete(B.id):Ce.add(B.id),H()}),G.append(Re)}else{let Re=document.createElement("span");Re.className="ifc-disclosure-spacer",G.append(Re)}let pe=document.createElement("span");pe.className="ifc-row-text";let Ee=document.createElement("span");Ee.className="ifc-row-name",Ee.textContent=Ne(B.id);let Ae=document.createElement("span");return Ae.className="ifc-row-meta",Ae.textContent=L?.type||"",pe.append(Ee,Ae),G.append(pe),vt(G,B.id),G}let ut=0;function pt(B){let L=performance.now();if(L-ut<40)return;ut=L;let W=b_(Q(),B);_e(B),n.onFrame(B,{move:W==="frame"}),me(B),oe(),He()}function Ke(B){return B instanceof Element&&!!B.closest(".ifc-disclosure")}function vt(B,L){let W=null,G=0,pe=()=>{G&&window.clearTimeout(G),G=0},Ee=(Ue,$,Ce)=>{Ke(Ce)||(pe(),W={x:Ue,y:$,moved:0,consumed:!1},G=window.setTimeout(()=>{G=0,!(!W||W.consumed||uh({dt:500,dx:W.moved,dy:0,released:!1})!=="longpress")&&(W.consumed=!0,Se(L,W.x,W.y))},500))},Ae=(Ue,$)=>{if(!W)return;let Ce=Math.hypot(Ue-W.x,$-W.y);Ce>W.moved&&(W.moved=Ce),W.moved>12&&pe()},Re=(Ue,$,Ce)=>{pe();let $e=W;W=null,!(!$e||$e.consumed||Ke(Ce)||Math.max($e.moved,Math.hypot(Ue-$e.x,$-$e.y))>12)&&pt(L)};B.addEventListener("pointerdown",Ue=>{Ue.button!==void 0&&Ue.button!==0||Ee(Ue.clientX,Ue.clientY,Ue.target)}),B.addEventListener("pointermove",Ue=>Ae(Ue.clientX,Ue.clientY)),B.addEventListener("pointerup",Ue=>{Ue.pointerType!=="touch"&&Re(Ue.clientX,Ue.clientY,Ue.target)}),B.addEventListener("pointercancel",()=>pe()),B.addEventListener("touchend",Ue=>{let $=Ue.changedTouches[0];$&&Re($.clientX,$.clientY,Ue.target)},{passive:!0})}function me(B){k=B,q&&window.clearTimeout(q),q=window.setTimeout(()=>{k===B&&(k=null),z||He()},1600),z||He()}function Qe(B){let W=Oe().findIndex(pe=>pe.id===B);if(W<0)return;let G=te(We().list)+W*44;e.scrollTop=Math.max(0,G-Ie()),He()}let et=!1;function Se(B,L,W){M.replaceChildren(),M.hidden=!1,et=!1,re("ui.info",()=>be(B,{fromMenu:!0}));let G=n.visibility.isHidden(B);re(G?"ui.unhideThis":"ui.hideThis",()=>{G?n.visibility.unhide(B):n.visibility.hide(B),C()}),re("ui.hideOthers",()=>{n.visibility.hideOthers(B),C()}),re("ui.unhideOthers",()=>{n.visibility.unhideOthers(B),C()}),he(M,L,W)}function C(){n.onVisibility(),K(),H()}function re(B,L){let W=document.createElement("button");W.type="button",W.className="ifc-menu-btn",W.textContent=n.t(B);let G=!1,pe=Ee=>{Ee.preventDefault(),Ee.stopPropagation(),!G&&(G=!0,L())};W.addEventListener("touchend",pe),W.addEventListener("click",pe),M.append(W)}function K(){M.hidden=!0,M.replaceChildren()}function Pe(){z=null,O=[],Y=!1,ee="",S.replaceChildren()}function J(){if(O.length){z=O.pop(),xe(z,{switchTab:!0,openInfo:!1,animate:!0}),H();return}Pe(),H(),requestAnimationFrame(()=>{let B=Q();B&&Qe(B)})}function be(B,L={}){n.index.elements[B]&&(K(),Y=!1,ee="",L.push&&z&&z!==B?O.push(z):L.fromMenu&&(O=[]),z=B,xe(B,{switchTab:!0,openInfo:!1,animate:!0}),n.openSheet(),V(),H())}function xe(B,L={}){if(!n.index.elements[B])return;let W=mh(n.index,B),G=W?"groups":"spatial";if(L.switchTab!==!1&&w!==G&&we(G,{animate:L.animate!==!1,keepScroll:!0}),W){for(let pe of d_(n.index,B))y.add(pe);N=B}else{for(let pe of Hp(n.index,B))E.add(pe);D=B}if(k=B,L.openInfo){be(B,{push:!0});return}z||(H(),requestAnimationFrame(()=>Qe(B)))}function Le(){S.replaceChildren();let B=z?n.index.elements[z]:null;if(!B){Z(n.t("ui.noIfc"),ee||"");return}let L=document.createElement("button");L.type="button",L.className="ifc-info-swap";let W=document.createElement("div");W.className="ifc-kicker";let G=document.createElement("div");G.className="ifc-name";let pe=B.name||B.id||"",Ee=B.globalId||"",Ae=!1,Re=0,Ue=()=>{W.hidden=!Ae,W.textContent=Ae?n.t("ui.globalId"):"",G.textContent=Ae?Ee:pe,G.className=Ae?"ifc-gid":"ifc-name",L.setAttribute("aria-label",Ae?pe:n.t("ui.globalId"))},$=oi=>{oi.preventDefault(),oi.stopPropagation();let ai=performance.now();ai-Re<80||(Re=ai,Ae=!Ae,Ue())};Ue(),L.append(W,G),L.addEventListener("touchend",$),L.addEventListener("click",$);let Ce=document.createElement("div");Ce.className="ifc-info-title",Ce.append(L),S.append(Ce),Z(n.t("ui.type"),B.type||"");let $e=y_(n.index,B.globalId);$e.storey&&Z(n.t("ui.storey"),$e.storey.name||$e.storey.id),$e.space&&Z(n.t("ui.space"),$e.space.name||$e.space.id);let De=M_(B);De.length&&ge(n.t("ui.dimensions"),De);let ot=__(B);ot.length&&ge(n.t("ui.note"),ot);let Pt=n.liveLines?.(B)||[];Pt.length&&ge(n.t("home.live"),Pt),vi(B)?(de(n.t("ui.parentGroups"),B.parentGroupIds||B.groups||[]),de(n.t("ui.childGroups"),B.childGroupIds||xh(n.index,B.globalId)),de(n.t("ui.childElements"),B.memberIds||[])):de(n.t("ui.groups"),B.groups||[]);let Xt=n.actionsFor?.(B)||[];T(Xt),T(P(B.globalId))}function P(B){if(!B||!n.index.elements[B])return[];let L=n.visibility.isHidden(B);return[{id:"frame",labelKey:"ui.frame",run:()=>n.onFrame(B,{move:!0})},{id:"hide",labelKey:L?"ui.unhideThis":"ui.hideThis",run:()=>{L?n.visibility.unhide(B):n.visibility.hide(B)}},{id:"hideOthers",labelKey:"ui.hideOthers",run:()=>n.visibility.hideOthers(B)},{id:"unhideOthers",labelKey:"ui.unhideOthers",run:()=>n.visibility.unhideOthers(B)}]}function T(B){if(!B.length)return;let L=document.createElement("div");L.className="ifc-actions";for(let W of B){let G=document.createElement("button");G.type="button",G.className="ifc-action",G.textContent=W.label||n.t(W.labelKey),G.addEventListener("click",pe=>{pe.preventDefault(),pe.stopPropagation(),W.run(),n.onVisibility(),H()}),L.append(G)}S.append(L)}function Z(B,L){let W=document.createElement("div");W.className="ifc-line";let G=document.createElement("div");G.className="ifc-kicker",G.textContent=B;let pe=document.createElement("div");pe.className="ifc-value",pe.textContent=L,W.append(G,pe),S.append(W)}function ge(B,L){let W=document.createElement("div");W.className="ifc-line";let G=document.createElement("div");G.className="ifc-kicker",G.textContent=B;let pe=document.createElement("div");pe.className="ifc-note",pe.textContent=L.join(`
`),W.append(G,pe),S.append(W)}function de(B,L){let W=(L||[]).filter(Ee=>n.index.elements[Ee]);if(!W.length)return;let G=document.createElement("div");G.className="ifc-info-section";let pe=document.createElement("div");pe.className="ifc-kicker",pe.textContent=B,G.append(pe);for(let Ee of W){let Ae=document.createElement("button");Ae.type="button",Ae.className="ifc-info-link";let Re=document.createElement("span");Re.className="ifc-row-name",Re.textContent=Ne(Ee);let Ue=document.createElement("span");Ue.className="ifc-row-meta",Ue.textContent=n.index.elements[Ee]?.type||"",Ae.append(Re,Ue),Ae.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),xe(Ee,{switchTab:!0,openInfo:!0,animate:!0})}),G.append(Ae)}S.append(G)}function he(B,L,W){B.hidden=!1,B.style.left="0px",B.style.top="0px";let G=B.getBoundingClientRect(),pe=8,Ee=Math.max(pe,window.innerWidth-G.width-pe),Ae=Math.min(Math.max(pe,L),Ee),Re=W+8;Re+G.height>window.innerHeight-pe&&(Re=Math.max(pe,W-G.height-8)),B.style.left=`${Ae}px`,B.style.top=`${Re}px`}function Me(B,L={}){K();let W=B?.globalId;W&&n.index.elements[W]?(Y=!1,ee="",O=[],z=W,xe(W,{switchTab:!0,openInfo:!1,animate:!1}),n.onFrame?.(W,{move:!1})):(z=null,O=[],Y=!0,ee=L.partName||""),n.openSheet(),V(),H()}function ce(B){n.index.elements[B]&&(Pe(),n.openSheet(),V(),xe(B,{switchTab:!0,openInfo:!1,animate:!1}))}e.addEventListener("scroll",()=>{!o.hidden&&!z&&!Y&&He()},{passive:!0});let ue=B=>B instanceof Node?!(!M.hidden&&M.contains(B)):!0;return document.addEventListener("pointerup",()=>{M.hidden||(et=!0)},!0),document.addEventListener("pointerdown",B=>{let L=B.target;!M.hidden&&et&&ue(L)&&K()},!0),{open:ne,refresh:H,inspect:Me,reveal:ce,isInspectorOpen:()=>!o.hidden}}function w_(n){let e=new Set;function t(){return Object.keys(n.elements)}return{isHidden(i){let r=n.elements[i];if(vi(r)){let s=us(n,i).filter(o=>o!==i&&!vi(n.elements[o]));return s.length?s.every(o=>e.has(o)):e.has(i)}return e.has(i)},anyHidden(){return e.size>0},hiddenIds(){return[...e]},hide(i){for(let r of us(n,i))(!vi(n.elements[r])||r===i)&&e.add(r)},unhide(i){for(let r of us(n,i))e.delete(r)},hideOthers(i){let r=new Set(us(n,i));for(let s of t())r.has(s)||vi(n.elements[s])||e.add(s)},unhideOthers(i){let r=new Set(us(n,i));for(let s of t())r.has(s)||vi(n.elements[s])||e.delete(s)},showAll(){e.clear()}}}var Yp=.3,R_=1.5,JR=.5,Wp=new Xe,QR=new I,Mh=new I,Xp=new I,yh=new I,_h=new I,jo=new I,vh=new I,qp=new Zt,E_=new Zt,bh=new Zt,T_=new Zt,$p=new Jr,eC=new I(0,1,0),A_=new ni;function tC(n,e,t=Yp,i=R_){let r=Number.isFinite(e)&&e>0?e:0,s=Number.isFinite(n)&&n>0?n:null;return s!=null&&s>=t?s:s!=null?Math.max(i,t):r>=t?r:Math.max(i,t)}function nC(n,e,t=Yp,i=R_){return Number.isFinite(n)&&n>.001?n:e>=t?null:Math.max(i,t)}function iC(n,e,t=Yp,i=JR){return Number.isFinite(n)&&n>0?!(e>0)||e<t?!0:n<e*i:!1}function rC(n,e,t,i=1){let r=2*Math.PI*i/Math.max(1,t);return{theta:-n*r,phi:-e*r}}function sC(n,e,t,i,r){if(!i&&!r||(_h.copy(n.position).sub(t),_h.lengthSq()<1e-12))return!1;jo.copy(n.up),jo.lengthSq()<1e-12?jo.set(0,1,0):jo.normalize(),T_.setFromUnitVectors(jo,eC),yh.copy(_h).applyQuaternion(T_),$p.setFromVector3(yh);let s=1e-6;return r=Math.min(Math.PI-s,Math.max(s,$p.phi+r))-$p.phi,qp.setFromAxisAngle(jo,i),vh.set(1,0,0).applyQuaternion(n.quaternion).applyQuaternion(qp),vh.lengthSq()<1e-12?!1:(vh.normalize(),E_.setFromAxisAngle(vh,r),bh.copy(E_).multiply(qp),yh.copy(_h).applyQuaternion(bh),n.position.copy(t).add(yh),e.sub(t).applyQuaternion(bh).add(t),n.quaternion.premultiply(bh),!0)}function oC(n,e,t){return!(t>0)||(n.getWorldDirection(Mh),Xp.copy(n.position).addScaledVector(Mh,t),Xp.distanceToSquared(e)<1e-12)?!1:(e.copy(Xp),!0)}function aC(n,e){let t=n.material,i=Array.isArray(t)?t:[t];for(let r of i){let s=r&&r.clippingPlanes;if(s){for(let o of s)if(o.distanceToPoint(e)<-1e-4)return!1}}return!0}function lC(n,e,t,i,r){if(!e||!t||e.isOrthographicCamera)return null;let s=n.getBoundingClientRect(),o=s.width||n.clientWidth||1,a=s.height||n.clientHeight||1;Wp.x=(i-s.left)/o*2-1,Wp.y=-((r-s.top)/a)*2+1,t.updateWorldMatrix(!0,!0),A_.setFromCamera(Wp,e);let l=A_.intersectObject(t,!0);e.getWorldDirection(Mh);for(let c of l){let u=c.object;if(!u.visible||ks(u))continue;let h=u.userData;if(h&&(h.isEdgeOverlay||h.isSectionCap||h.isPeeledEdgeBatch)||!aC(u,c.point))continue;let f=c.distance;if(!(f>1e-4))continue;let d=QR.copy(c.point).sub(e.position).dot(Mh);if(d>1e-4)return{point:c.point.clone(),slant:f,depth:d}}return null}function cC(n){let{canvas:e,controls:t}=n,i=n.isBlocked||(()=>!1),r=new Map,s=null;function o(){return t.enabled!==!1&&!i()}function a(){let v=n.getCamera();return!!(v&&v.isPerspectiveCamera)}function l(v,M){return lC(e,n.getCamera(),n.getRoot(),v,M)}function c(v){let M=n.getCamera();!M||!a()||v==null||oC(M,t.target,v)}function u(v,M){let E=n.getCamera();if(!E||!a())return;let y=l(v,M),w=E.position.distanceTo(t.target);c(tC(y?y.slant:null,w))}function h(v,M){let E=n.getCamera();if(!E||!a())return;let y=l(v,M),w=E.position.distanceTo(t.target);c(nC(y?y.depth:null,w))}function f(){s=null,t.enableRotate=!0}function d(v){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),!o()){f(),t.zoomToCursor=!1;return}if(!a()){f(),t.zoomToCursor=!1;return}if(r.size>=2){f(),t.zoomToCursor=!0;let N=m(v);u(N.x,N.y);return}let M=v.pointerType==="touch",E=v.button??0;if(!M&&E===2){f(),h(v.clientX,v.clientY);return}if(!M&&E===1){f(),u(v.clientX,v.clientY);return}if(!M&&E!==0)return;if(!M&&(v.shiftKey||v.ctrlKey||v.metaKey)){f(),h(v.clientX,v.clientY);return}let y=n.getCamera(),w=l(v.clientX,v.clientY),D=y?y.position.distanceTo(t.target):0;if(!w||!iC(w.slant,D)){f();return}t.enableRotate=!1,s={id:v.pointerId,x:v.clientX,y:v.clientY,lastX:v.clientX,lastY:v.clientY,point:w.point.clone(),dragging:!1},t.dispatchEvent({type:"start"})}function m(v){let M=v.clientX,E=v.clientY,y=1;for(let[w,D]of r)w!==v.pointerId&&(M+=D.x,E+=D.y,y+=1);return{x:M/y,y:E/y}}function x(v){let M=r.get(v.pointerId);if(M&&(M.x=v.clientX,M.y=v.clientY),!s||v.pointerId!==s.id||r.size!==1||!o())return;let E=n.getCamera();if(!E)return;let y=v.clientX-s.lastX,w=v.clientY-s.lastY;if(!s.dragging){if(Math.hypot(v.clientX-s.x,v.clientY-s.y)<=fh)return;s.dragging=!0}if(!y&&!w)return;let D=rC(y,w,e.clientHeight||1,t.rotateSpeed);sC(E,t.target,s.point,D.theta,D.phi),E.lookAt(t.target),s.lastX=v.clientX,s.lastY=v.clientY}function g(v){r.delete(v.pointerId),s&&s.id===v.pointerId&&f(),r.size<2&&(t.zoomToCursor=!1),r.size===0&&(t.enableRotate=!0)}function p(v){g(v)}function b(v){if(!o()||!a()){t.zoomToCursor=!1;return}if(t.state!==-1||s&&s.dragging){t.zoomToCursor=!1;return}t.zoomToCursor=!0,u(v.clientX,v.clientY)}function S(){r.size<2&&(t.zoomToCursor=!1)}return{onPointerDown:d,onPointerMove:x,onPointerUp:g,onPointerCancel:p,onWheel:b,onWheelDone:S}}function C_(n){let e=cC(n),t={capture:!0};return n.canvas.addEventListener("pointerdown",e.onPointerDown,t),n.canvas.addEventListener("pointermove",e.onPointerMove,t),n.canvas.addEventListener("pointerup",e.onPointerUp,t),n.canvas.addEventListener("pointercancel",e.onPointerCancel,t),n.canvas.addEventListener("wheel",e.onWheel,t),n.canvas.addEventListener("wheel",e.onWheelDone),e}var Jo=class extends Ni{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){let t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Sh=class extends ss{constructor(e=new Jo,t=new Ji({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var uC='-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',hC=420,fC=36,dC=new I,P_=new I,I_=new I,Zp=new I,zs=new I,hs=new I;function Jp(n){return new I(n[0]*.001,n[2]*.001,-n[1]*.001)}function Kp(n,e){if(typeof n=="number"&&Number.isFinite(n))return n;if(typeof n!="string")return e;let t=n.trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(t)?Number.parseInt(t,16):e}function L_(n){let e=[];if(Array.isArray(n.anchor)&&n.anchor.length>=3&&e.push(n.anchor),Array.isArray(n.tips))for(let t of n.tips)Array.isArray(t)&&t.length>=3&&e.push(t);return e.length?e:[n.anchor]}function pC(n){let e=Math.abs(n)*1e3;return Number.isFinite(e)?Math.abs(e-Math.round(e))<.05?`${Math.round(e)} mm`:e>=100?`${e.toFixed(1)} mm`:`${e.toFixed(2)} mm`:""}function wh(n,e){return n==null?"":typeof n=="string"?n:String(n[e==="cs"?"cs":"en"]||n.en||n.cs||"")}function mC(n){if(!Number.isFinite(n)||n<=0)return"";let e=n*1e3/hC,t=Math.max(1,Math.round(e));return Number.isFinite(t)?`1:${t}`:""}function gC(n,e){if(e==="plate")return fC;let t=Math.min(Math.max(1,n.clientWidth),Math.max(1,n.clientHeight));return Math.round(Math.min(14,Math.max(12,t*.034)))}function Qo(n,e,t,i="center",r=null,s=1){let o=Number.isFinite(s)&&s>0?s:1,a=Math.max(8,Math.round(t*o)),l=n.map(y=>String(y)).filter(y=>y.length),c=document.createElement("canvas"),u=c.getContext("2d"),h=`600 ${a}px ${uC}`,f=Math.ceil(a*.35),d=Math.ceil(a*.2),m=Math.ceil(a*1.25);u&&(u.font=h);let x=a;if(u)for(let y of l)x=Math.max(x,u.measureText(y).width);let g=Math.ceil(x+f*2),p=Math.ceil(Math.max(l.length,1)*m+d*2),b=2;c.width=g*b,c.height=p*b;let S=c.getContext("2d");if(S){S.scale(b,b),S.clearRect(0,0,g,p);let y=e==="plate";S.font=h,S.textAlign="left",S.textBaseline="middle",S.lineJoin="round",S.miterLimit=2,S.lineWidth=Math.max(2,a*.28),S.strokeStyle=y?"#ffffff":"rgba(0,0,0,0.92)",S.fillStyle=r||(y?"#141414":"#f7f7f8"),l.forEach((w,D)=>{let N=f,k=d+m*D+m*.5;S.strokeText(w,N,k),S.fillText(w,N,k)})}let v=new wr(c);v.colorSpace=At,v.flipY=!0,v.needsUpdate=!0;let M=new an({map:v,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ot}),E=new ht(new di(1,1),M);return E.renderOrder=30,E.frustumCulled=!1,E.userData.cssWidth=g,E.userData.cssHeight=p,E.userData.anchor=i,E.userData.fill=r,E.userData.fontScale=o,E}function jp(n){return`#${(n>>>0).toString(16).padStart(6,"0")}`}function or(n,e=!1){let t=new Jo;t.setPositions([0,0,0,0,0,0]);let i=new Ji({color:n,linewidth:e?2.4:1.75,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1,worldUnits:!1,dashed:!!e,dashSize:.08,gapSize:.06,dashScale:1});e&&(i.dashed=!0);let r=new Sh(t,i);return r.renderOrder=25,r.frustumCulled=!1,r.computeLineDistances(),r}function Ur(n,e,t){n.geometry.setPositions([e.x,e.y,e.z,t.x,t.y,t.z]),n.computeLineDistances()}function D_(n){let{scene:e,getCamera:t,getCanvas:i,getLocale:r,getVisibleWidthM:s,getTarget:o}=n,a=n.getExaggeration||(()=>1),l=new Et;l.name="Annotations",l.userData.blueprintAnnotations=!0,e.add(l);let c=null,u="viewer",h=!0,f=0,d=[],m=null,x=null,g=null;function p(){return u==="plate"?1315860:15921908}function b(V){return V&&V.color!=null?Kp(V.color,p()):c&&c.annotationColor!=null?Kp(c.annotationColor,p()):p()}function S(V){return jp(b(V))}function v(V){let ne=Number(V&&V.size);return Number.isFinite(ne)&&ne>0?ne:1}function M(V){V.traverse(ne=>{ne.geometry&&ne.geometry.dispose();let we=ne.material;we&&(we.map&&we.map.dispose(),we.dispose())})}function E(){for(let V of[...l.children])l.remove(V),M(V);d=[],m=null,x=null,g=null}function y(){return gC(i(),u)}function w(){l.visible=!!c&&h}function D(){if(E(),f=y(),!c){w();return}let V=r(),ne=p(),we=f,Ne=Array.isArray(c.annotations)?c.annotations:[];for(let H of Ne)if(!(!H||typeof H!="object")){if(H.kind==="callout"&&Array.isArray(H.anchor)){let te=wh(H.text,V);if(!te)continue;let Ie=Qo(te.split(`
`),u,we,"center",S(H),v(H)),We=(H.leader===!1?[]:L_(H)).map(()=>or(b(H)));l.add(...We,Ie),d.push({kind:"callout",sprite:Ie,lines:We,data:H})}else if(H.kind==="dim"&&Array.isArray(H.a)&&Array.isArray(H.b)){let te=b(H),Ie=Qo(["0"],u,we,"center",jp(te),v(H)),We=or(te),Oe=or(te),Ge=or(te),tt=or(te),He=or(te);l.add(We,Oe,Ge,tt,He,Ie),d.push({kind:"dim",sprite:Ie,lines:[We,Oe,Ge,tt,He],data:H})}else if(H.kind==="line"&&Array.isArray(H.points)&&H.points.length>=2){let te=Kp(H.color,p()),We=[or(te,!!H.dashed)];H.arrow&&We.push(or(te,!1),or(te,!1));let Oe=null,Ge=wh(H.text,V);Ge&&(Oe=Qo(Ge.split(`
`),u,we,"center",jp(te),v(H))),l.add(...We),Oe&&l.add(Oe),d.push({kind:"line",sprite:Oe,lines:We,data:H})}}let Q=wh(c.title,V),_e=c.project?String(c.project):"",oe=[...Q.split(`
`),_e].filter(Boolean);oe.length&&(m=Qo(oe,u,we,"topleft"),l.add(m)),x=Qo(["1:1"],u,we,"bottomleft"),g=or(ne),l.add(g,x),w()}function N(V){let ne=Jp(V),we=a();return we!==1&&(ne.y*=we),ne}function k(V,ne=dC){return ne.copy(V).project(t())}function q(V,ne,we,Ne=new I){return Ne.set(V,ne,we).unproject(t())}function z(V){let ne=t(),we=i(),Ne=Math.max(1,we.clientHeight);if(ne.isOrthographicCamera){let oe=Math.max(ne.zoom,1e-6);return(ne.top-ne.bottom)/oe/Ne}let Q=Math.max(ne.position.distanceTo(V),1e-4),_e=(ne.fov||45)*Math.PI/180;return 2*Math.tan(_e/2)*Q/Ne}let O=new I,Y=new I;function ee(V,ne){let we=t(),Ne=z(ne),Q=Ne*V.userData.cssWidth,_e=Ne*V.userData.cssHeight;O.set(1,0,0).applyQuaternion(we.quaternion),Y.set(0,1,0).applyQuaternion(we.quaternion);let oe=V.userData.anchor||"center";V.position.copy(ne),oe==="topleft"?(V.position.addScaledVector(O,Q*.5),V.position.addScaledVector(Y,-_e*.5)):oe==="bottomleft"&&(V.position.addScaledVector(O,Q*.5),V.position.addScaledVector(Y,_e*.5)),V.quaternion.copy(we.quaternion),V.scale.set(Q,_e,1)}function j(){let V=i(),ne=Math.max(1,V.width),we=Math.max(1,V.height);l.traverse(Ne=>{let Q=Ne.material;Q&&Q.resolution&&Q.resolution.set(ne,we)})}function ye(V,ne){let we=Qo(ne,u,f||y(),V.userData.anchor,V.userData.fill,V.userData.fontScale||1);V.material.map?.dispose(),V.material.dispose(),V.material=we.material,V.userData.cssWidth=we.userData.cssWidth,V.userData.cssHeight=we.userData.cssHeight,we.geometry.dispose()}function ie(){if(!c||!h||(y()!==f&&D(),!l.visible))return;j();let ne=r();t().updateMatrixWorld();for(let oe of d)if(oe.kind==="callout"){let H=N(oe.data.anchor),te=k(H,P_),Ie=Array.isArray(oe.data.offset)?oe.data.offset:[.08,.06],We=te.x+Number(Ie[0]||0)*2,Oe=te.y+Number(Ie[1]||0)*2,Ge=q(We,Oe,te.z,I_);ee(oe.sprite,Ge);let tt=z(Ge),He=tt*oe.sprite.userData.cssWidth*.5,Mt=L_(oe.data);for(let ut=0;ut<oe.lines.length;ut+=1){let pt=N(Mt[ut]||oe.data.anchor);zs.copy(Ge).sub(pt);let Ke=zs.length();Ke>He+tt?(zs.setLength(Ke-He),zs.add(pt)):zs.copy(Ge),Ur(oe.lines[ut],pt,zs)}}else if(oe.kind==="dim"){let H=N(oe.data.a),te=N(oe.data.b),Ie=k(H,P_),We=k(te,I_),Oe=We.x-Ie.x,Ge=We.y-Ie.y,tt=Math.hypot(Oe,Ge)||1e-6;Oe/=tt,Ge/=tt;let He=Number(oe.data.offset)||.04,Mt=-Ge*He*2,ut=Oe*He*2,pt=(Ie.z+We.z)*.5,Ke=q(Ie.x+Mt,Ie.y+ut,pt,new I),vt=q(We.x+Mt,We.y+ut,pt,new I),me=z(Ke),Qe=me*6,et=me*8;hs.copy(Ke).sub(H);let Se=hs.length()||1;hs.multiplyScalar((Se+et)/Se);let C=H.clone().add(hs);hs.copy(vt).sub(te);let re=hs.length()||1;hs.multiplyScalar((re+et)/re);let K=te.clone().add(hs),Pe=H.clone().lerp(Ke,Math.min(.85,Qe/Se)),J=te.clone().lerp(vt,Math.min(.85,Qe/re));Ur(oe.lines[0],Pe,C),Ur(oe.lines[1],J,K),Ur(oe.lines[2],Ke,vt);let be=me*10,Le=q(Ie.x+Mt-Ge*.012,Ie.y+ut+Oe*.012,pt,new I).sub(Ke);Le.lengthSq()<1e-16?Le.set(0,be,0):Le.setLength(be),Ur(oe.lines[3],Ke.clone().sub(Le),Ke.clone().add(Le)),Ur(oe.lines[4],vt.clone().sub(Le),vt.clone().add(Le)),Zp.copy(Ke).lerp(vt,.5);let P=q(Ie.x+Mt-Ge*.03,Ie.y+ut+Oe*.03,pt,new I).sub(q(Ie.x+Mt,Ie.y+ut,pt,new I));P.lengthSq()>1e-12&&Zp.add(P);let Z=wh(oe.data.text,ne)||pC(H.distanceTo(te));oe.sprite.userData.labelText!==Z&&(ye(oe.sprite,[Z]),oe.sprite.userData.labelText=Z),ee(oe.sprite,Zp)}else if(oe.kind==="line"){let H=oe.data.points.map(Ie=>N(Ie)),te=[];for(let Ie of H)te.push(Ie.x,Ie.y,Ie.z);if(oe.lines[0].geometry.setPositions(te),oe.lines[0].computeLineDistances(),oe.data.arrow&&H.length>=2&&oe.lines.length>=3){let Ie=H[H.length-2],We=H[H.length-1],Oe=We.clone().sub(Ie);if(Oe.lengthSq()>1e-12){Oe.normalize();let Ge=z(We),tt=Oe.clone().multiplyScalar(-Ge*16),He=new I().crossVectors(Oe,t().up).normalize().multiplyScalar(Ge*7);He.lengthSq()<1e-16&&He.set(Ge*7,0,0),Ur(oe.lines[1],We,We.clone().add(tt).add(He)),Ur(oe.lines[2],We,We.clone().add(tt).sub(He))}}if(oe.sprite){let Ie=H[0].clone().lerp(H[H.length-1],.5);ee(oe.sprite,Ie)}}let Ne=k(o(),zs).z;if(m){let oe=q(-.94,.9,Ne,new I);ee(m,oe)}let Q=s(),_e=mC(Q??NaN);if(x&&g){let oe=Q!=null&&Q>8?2:1,H=q(-.9,-.86,Ne,new I),te=q(-.9+.08,-.86,Ne,new I).sub(H),Ie=z(H),We=Q&&Q>0?oe/Q*Math.max(1,i().clientWidth):80;te.lengthSq()>1e-12?te.setLength(Math.max(We*Ie,Ie*40)):te.set(Ie*80,0,0),Ur(g,H,H.clone().add(te));let Oe=x.userData.labelText,Ge=_e?`${_e}  \xB7  ${Math.round(oe*1e3)} mm`:"";Oe!==Ge&&(ye(x,Ge?[Ge]:["\u2014"]),x.userData.labelText=Ge);let tt=q(-.9,-.8,Ne,new I).sub(H);ee(x,H.clone().add(tt))}}return{group:l,setSpec(V){c=V&&typeof V=="object"?V:null,D(),ie()},setInk(V){u=V==="plate"?"plate":"viewer",D(),ie()},setVisible(V){h=!!V,w(),l.visible&&ie()},isVisible(){return h},relocalize(){D(),ie()},glyphBoundsNdc(){let V=i(),ne=Math.max(1,V.clientWidth),we=Math.max(1,V.clientHeight),Ne=1/0,Q=-1/0,_e=1/0,oe=-1/0,H=!1;for(let te of d){let Ie=te.sprite;if(!Ie||Ie===m||Ie===x||te.kind!=="callout"&&te.kind!=="dim"&&te.kind!=="line")continue;let We=k(Ie.position),Oe=(Ie.userData.cssWidth||0)/ne,Ge=(Ie.userData.cssHeight||0)/we;Ne=Math.min(Ne,We.x-Oe),Q=Math.max(Q,We.x+Oe),_e=Math.min(_e,We.y-Ge),oe=Math.max(oe,We.y+Ge),H=!0}return H?{minX:Ne,maxX:Q,minY:_e,maxY:oe}:null},update:ie,clear(){c=null,E(),l.visible=!1}}}function N_(n){return n/25.4*72}function Qp(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}function xC(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");return t?(t.drawImage(n,0,0),new Promise((i,r)=>{e.toBlob(s=>{s?i(s):r(new Error("PNG capture failed"))},"image/png")})):Promise.reject(new Error("2D canvas unavailable"))}async function yC(n){let e=await createImageBitmap(n),t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("2D canvas unavailable");return i.drawImage(e,0,0),e.close?.(),i.getImageData(0,0,t.width,t.height)}async function _C(n){if(typeof CompressionStream>"u")return{bytes:n,filter:""};let e=new Blob([n]).stream().pipeThrough(new CompressionStream("deflate"));return{bytes:new Uint8Array(await new Response(e).arrayBuffer()),filter:"/Filter /FlateDecode "}}function Ml(n){return typeof n=="string"?new TextEncoder().encode(n):n}async function vC(n){let e=n.width,t=n.height,i=n.data,r=new Uint8Array(e*t*3);for(let v=0,M=0;v<i.length;v+=4,M+=3){let E=i[v+3]/255;r[M]=Math.round(i[v]*E+255*(1-E)),r[M+1]=Math.round(i[v+1]*E+255*(1-E)),r[M+2]=Math.round(i[v+2]*E+255*(1-E))}let{bytes:s,filter:o}=await _C(r),a=N_(420),l=N_(297),c=`q
${a.toFixed(3)} 0 0 ${l.toFixed(3)} 0 0 cm
/Im0 Do
Q
`,u=new TextEncoder().encode(c),h=[],f=0;function d(v){h.push(v),f+=v.length}let m=[0];function x(v,M){m[v]=f,d(Ml(`${v} 0 obj
`));for(let E of M)d(Ml(E));d(Ml(`
endobj
`))}d(Ml(`%PDF-1.4
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
`,d(Ml(p));let b=new Uint8Array(f),S=0;for(let v of h)b.set(v,S),S+=v.length;return new Blob([b],{type:"application/pdf"})}async function O_(n){let e=await xC(n),t=await yC(e),i=await vC(t);return{png:e,pdf:i}}var em="scene";function wC(){try{return(new URLSearchParams(location.search).get(em)||"").trim()}catch{return""}}function F_(n){try{let e=new URL(location.href),t=n!=null?String(n).trim():"";t?e.searchParams.set(em,t):e.searchParams.delete(em);let i=`${e.pathname}${e.search}${e.hash}`,r=`${location.pathname}${location.search}${location.hash}`;i!==r&&history.replaceState(null,"",i)}catch{}}function EC(n,e,t={}){let i=Array.isArray(t.scenes)?t.scenes:[],r=Array.isArray(t.partGroups)?t.partGroups:[],s=Array.isArray(t.doors)?t.doors:[],o=Array.isArray(t.windows)?t.windows:[],a=f_(t.ifc),l=new Map,c=()=>{},u=String(t.scene!=null?t.scene:wC()).trim();yy(),Cp(document);let h=[],f=null,d=1842206,m=!0,x=Kx(),g=Rx(),p=new Map,b=new Map,S=new Map,v=new Map,M=new Set,E=new Map,y=new Map,w=new Map,D=new Set,N=null;N=py(_=>{m=_,d=_?1842206:15263981,f&&(f.background=new qe(d)),document.documentElement.style.colorScheme=_?"dark":"light",p.size&&A()});let k=new Du({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0});k.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.outputColorSpace=At,k.toneMapping=No,k.toneMappingExposure=1.05,k.localClippingEnabled=!0;let q=Vx(k);f=new Gn,f.background=new qe(d);let z=1,O=new Et;O.name="VerticalExaggeration",f.add(O);function Y(_){let R=Number(_);z=Number.isFinite(R)&&R>0?R:1,O.scale.set(1,z,1)}let ee=30,j=120,ye=75,ie=125,V="perspective",ne=ye,we=ye,Ne=1,Q=!1,_e=new un(45,1,.01,1e6),oe=new Pi(-1,1,1,-1,.01,1e6),H=_e,te=new zu(H,n);te.enableDamping=!1,te.screenSpacePanning=!0;let Ie=()=>!1,We=Zy({canvas:n,getCamera:()=>H,records:s,isBlocked:()=>Ie(),onLongPress:_=>c(_),onToggle:(_,R)=>cv(_,R)}),Oe=t_({canvas:n,getCamera:()=>H});window.blueprintsFeedback=Oe;let Ge=new Map,tt=new Map,He=Jy(o),Mt={on:!0,level:1,color:Bp(3e3)},ut={on:!1,level:1,color:ph},pt=new Map,Ke=null,vt=_=>_&&Ke?Ke.device(_.globalId):void 0;n_(We.taps,{elementOf:_=>Pl(_),isOn:_=>!!Ge.get(_.globalId),isOpen:_=>{let R=vt(_);if(R?.deviceType==="WindowCovering"){let F=R.state?.windowCovering?.targetPositionLiftPercent100ths;return F!=null&&F<5e3}return!!tt.get(_.globalId)},isLive:_=>!!vt(_),onLight:_=>rv(_),onSwitch:(_,R)=>fv(_,R),switchActions:_=>dv(_),onCover:_=>pv(_),coverActions:_=>mv(_),onWindow:_=>gv(_),windowAccepts:(_,R)=>hv(_,R?.object),targetsFor:(_,R)=>av(_,R)});let me=D_({scene:f,getCamera:()=>H,getCanvas:()=>n,getLocale:sh,getVisibleWidthM:()=>{if(!H.isOrthographicCamera)return null;let _=Math.max(H.zoom,1e-6);return(H.right-H.left)/_},getTarget:()=>te.target,getExaggeration:()=>z}),Qe=null,et=null;f.add(new za(16777215,.45));let Se=new Kr(16777215,1.15);Se.position.set(.6,1,.4),f.add(Se);let C=new Kr(16777215,.4);C.position.set(-.5,.2,-.6),f.add(C);let re=new zo(k);f.environment=re.fromScene(new Hu,.04).texture,re.dispose();let K=null;C_({canvas:n,controls:te,getCamera:()=>H,getRoot:()=>K,isBlocked:()=>Ie()||te.enabled===!1});let Pe=new Nt,J=new I,be=new I,xe=new I,Le=new I,P=new I,T=[],Z=1,ge=!1,de=!1,he=!1;new Uu().parse(e,"",_=>{K=_.scene,O.add(K),We.bind(K),K.traverse(F=>{if(!F.isMesh)return;let U=Hy(F);F.userData.bpPart=U.part,F.userData.bpElementKey=U.element,U.element&&(l.has(U.element)||l.set(U.element,[]),l.get(U.element).push(F));let le=U.part;if(p.has(le)||p.set(le,[]),p.get(le).push(F),F.material){let ve=Array.isArray(F.material)?F.material:[F.material];for(let Te of ve)"side"in Te&&(Te.side=Ot)}}),Hs(),X(),fe(),Ze(),Nh();let R=at(u);R&&(Fe=`scene:${String(R.id).trim()}`),Ft(),ea(),yt(),bn(),A(),R&&Br(R),ft(),N?.refreshPartialHeight(),V_(),G_(),Xs(),qs()},_=>{ce(String(_?.message||_))});function ce(_){let R=document.getElementById("err");R&&(R.style.display="block",R.textContent=_)}function ue(){K&&(Pe.setFromObject(K),Pe.getSize(J),Pe.getCenter(be))}function B(){let _=Math.max(1,n.clientWidth),R=Math.max(1,n.clientHeight);return _/R}function L(_,R){let F=_*Math.PI/180;return 2*Math.atan(Math.tan(F/2)/Math.max(R,1e-6))}function W(){let _=B();_e.aspect=_,_e.fov=L(ne,_)*180/Math.PI,_e.updateProjectionMatrix()}function G(_,R){let F=B(),U=Math.max(_,1e-6)*Math.tan(R/2),le=U*F;oe.left=-le,oe.right=le,oe.top=U,oe.bottom=-U,oe.updateProjectionMatrix()}function pe(){let _=B(),F=Math.max(oe.top,1e-6)*_;oe.left=-F,oe.right=F,oe.updateProjectionMatrix()}function Ee(_,R){let F=B(),U=Math.max(_,1e-6),ve=Math.max(R,1e-6),Te=ve*F;Te<U&&(Te=U,ve=Te/Math.max(F,1e-6)),Ne=1,oe.left=-Te,oe.right=Te,oe.top=ve,oe.bottom=-ve,oe.updateProjectionMatrix(),$()}function Ae(_){let R=Math.max(_,1e-4),F=xe.copy(H.position).sub(te.target);F.lengthSq()<1e-12?F.set(0,0,1):F.normalize(),H.position.copy(te.target).addScaledVector(F,R)}function Re(_){_!==H&&(_.position.copy(H.position),_.quaternion.copy(H.quaternion),_.up.copy(H.up),_.near=H.near,_.far=H.far,H=_,te.object=H,te.update())}function Ue(){let _=Math.abs(ur)>.05||Math.abs(hr)>.05||Math.abs(Mi-1)>.001?Mi:1;return Ne*_}function $(){H.zoom=Ue(),H.updateProjectionMatrix()}function Ce(){if(Q||de||!H.isOrthographicCamera)return;let _=Math.abs(ur)>.05||Math.abs(hr)>.05||Math.abs(Mi-1)>.001?Mi:1;Ne=Math.max(H.zoom/Math.max(_,1e-6),1e-6)}function $e(){if(V==="ortho")return;we=ne;let _=H.position.distanceTo(te.target),R=L(ne,B());G(_,R),Ne=1,ci(()=>{Q=!0,Re(oe),V="ortho",$(),Q=!1}),li()}function De(_){if(V!=="ortho")return;let R=Xt(_??we),F=Math.max(oe.top,1e-6)/Math.max(Ne,1e-6),U=L(R,B()),le=F/Math.max(Math.tan(U/2),1e-8);ne=R,we=R,Ne=1,ci(()=>{Q=!0,Re(_e),V="perspective",W(),Ae(le),$(),vn(),te.update(),Q=!1}),li()}function ot(_,R={}){let F=Xt(_);if(V==="ortho"){De(F);return}let U=B(),le=L(ne,U),ve=L(F,U),Te=H.position.distanceTo(te.target);ne=F,we=F,ci(()=>{if(W(),R.reframe!==!1){let Ve=Math.tan(le/2)/Math.max(Math.tan(ve/2),1e-8);Ae(Te*Ve),vn(),te.update()}$()}),li()}function Pt(){V==="ortho"?De(we):$e()}function Xt(_){return Math.min(j,Math.max(ee,_))}function oi(){return V==="ortho"?ie:ne}function ai(_){return _>j?"ISO":`${Math.round(_)}\xB0`}function li(){Qe&&(Qe.value=oi()),et&&(et.textContent=V==="ortho"?"ISO":`${Math.round(ne)}\xB0`),Qe?.refresh()}function Fr(_){if(_>j){V!=="ortho"?$e():li();return}let R=Xt(_);V==="ortho"?De(R):ot(R,{reframe:!0})}function ea(){let _=document.getElementById("fov");if(!_)return;_.replaceChildren();let R=document.createElement("div");R.className="fov-row";let F=document.createElement("span");F.className="fov-label",F.textContent=Ut("ui.fov"),et=document.createElement("span"),et.className="fov-value",et.textContent=`${Math.round(ne)}\xB0`,Qe=rh({min:ee,max:ie,step:1,value:oi(),ariaLabel:"Field of view",formatAriaValue:ai,onInput:Te=>Fr(Te),onChange:Te=>Fr(Te),onTap:()=>Pt()}),Qe.el.classList.add("fov-range");let U=document.createElement("div");U.className="fov-detent",U.setAttribute("aria-hidden","true");let le=(j-ee)/(ie-ee);U.style.left=`${le*100}%`,Qe.el.querySelector(".coop-range-track")?.append(U),R.append(F,Qe.el,et),_.append(R),li()}function vn(){let _=Math.max(J.x,J.y,J.z,.01),R=H.position.distanceTo(te.target),F=Math.round(Math.min(Math.max(R/200,_/5e3,.001),R/10)*1e4)/1e4,U=Math.round(Math.max(R+_*4,_*8,10)*1e4)/1e4;H.near===F&&H.far===U||(H.near=F,H.far=U,H.updateProjectionMatrix())}function ci(_){de=!0;try{_()}finally{requestAnimationFrame(()=>{de=!1})}}W();function Hs(){K&&(ci(()=>{ue(),te.target.copy(be);let R=Math.max(J.x,J.y,J.z,1)*1.85;H.position.set(be.x+R*.75,be.y+R*.55,be.z+R*.75),vn(),te.update()}),cr())}function Sl(){for(let _ of p.keys())b.set(_,1),S.set(_,1),Nr(p.get(_)||[],1,{edgeMode:g});ue(),ms()}function fs(_){if(K){if(ke=null,me.clear(),Y(1),Sl(),Xs(),qs(),_e.up.set(0,1,0),oe.up.set(0,1,0),H.up.set(0,1,0),_==="iso"){Hs();return}ci(()=>{ue();let R=Math.max(J.x,J.y,J.z,1),F=R*1.85,U=be;_==="front"?H.position.set(U.x,U.y,U.z+F):_==="top"?H.position.set(U.x,U.y+F,U.z+R*.01):_==="side"&&H.position.set(U.x-F,U.y,U.z),te.target.copy(U),vn(),te.update()}),cr()}}function Br(_){if(!K||!_)return;ke=_,Y(_.verticalExaggeration);let R=z;if(_.opacityDefault!=null||_.opacity&&typeof _.opacity=="object"){let ve=_.opacityDefault!=null?Number(_.opacityDefault):1,Te=_.opacity&&typeof _.opacity=="object"?_.opacity:{},Ve=qx(Te,h);for(let rt of p.keys()){let St=Object.prototype.hasOwnProperty.call(Ve,rt)?Ve[rt]:ve;Vs(rt,St,{skipUi:!0,skipClip:!0})}ue(),ms()}if(Object.prototype.hasOwnProperty.call(_,"cuts")){let ve=Array.isArray(_.cuts)?_.cuts:[];T.length=0;for(let Te of ve){let Ve=Te?.normal;if(!Array.isArray(Ve)||Ve.length<3)continue;let rt=new I(Number(Ve[0])||0,Number(Ve[1])||0,Number(Ve[2])||0);if(rt.lengthSq()<1e-12)continue;rt.normalize();let St=null,Qt=Math.min(1,Math.max(0,Number(Te.t)||0));if(Array.isArray(Te.anchor)&&Te.anchor.length>=3){St=Jp(Te.anchor),St.y*=R;let{near:zn,far:Tt}=nn(rt),Kt=St.dot(rt);Qt=Math.min(1,Math.max(0,(Kt-zn)/Math.max(Tt-zn,1e-6)))}T.push({id:Z++,normal:rt,t:Qt,anchor:St,locked:!0,label:ln(rt)})}ge=!1,qt(),yt(),bn(),N?.refreshPartialHeight()}_.projection==="ortho"?V!=="ortho"?$e():li():_.hFovDeg!=null&&Number.isFinite(Number(_.hFovDeg))&&ot(Number(_.hFovDeg),{reframe:!1});let U=_.camera;U&&Array.isArray(U.target)&&Array.isArray(U.position)&&ci(()=>{Q=!0;let ve=new I(0,1,0);Array.isArray(U.up)&&U.up.length>=3&&(ve.set(Number(U.up[0])||0,Number(U.up[1])||0,Number(U.up[2])||0),ve.lengthSq()<1e-12?ve.set(0,1,0):ve.normalize()),_e.up.copy(ve),oe.up.copy(ve),H.up.copy(ve),te.target.set(Number(U.target[0])||0,(Number(U.target[1])||0)*R,Number(U.target[2])||0),H.position.set(Number(U.position[0])||0,(Number(U.position[1])||0)*R,Number(U.position[2])||0),H.lookAt(te.target),V==="ortho"&&Array.isArray(U.orthoFit)&&U.orthoFit.length>=2&&Ee(Number(U.orthoFit[0])||.1,(Number(U.orthoFit[1])||.1)*R),ue(),vn(),te.update(),Q=!1}),cr();let le=_.edges;(le==="none"||le==="transparent"||le==="opaque")&&(g=le,ar()),me.setSpec(_),Xs(),qs()}function Vs(_,R,F={}){let U=Math.max(0,Math.min(1,Number(R)||0));b.set(_,U),U>0&&S.set(_,U),F.detach&&M.add(_),Nr(p.get(_)||[],U,{edgeMode:g}),!F.skipClip&&(ue(),F.skipUi||ms())}function ds(_,R,F){let U=Math.max(0,Math.min(1,Number(R)||0));F&&v.set(F,U);for(let le of _)M.has(le)||(b.set(le,U),U>0&&S.set(le,U),Nr(p.get(le)||[],U,{edgeMode:g}));ue(),ms()}function Eh(_,R,F){M.delete(_);let U=F.filter(ve=>!M.has(ve)),le=ps(R,U);b.set(_,le),le>0&&S.set(_,le),Nr(p.get(_)||[],le,{edgeMode:g}),ue(),ms()}function wl(_){if(!_.length)return 1;let R=b.get(_[0])??1;for(let F=1;F<_.length;F++){let U=b.get(_[F])??1;if(Math.abs(U-R)>1e-4)return NaN}return R}function ps(_,R){let F=R.filter(le=>!M.has(le)),U=wl(F.length?F:R);return Number.isNaN(U)?v.get(_)??1:U}function ms(){for(let[_,R]of E)R.value=(b.get(_)??1)*100;for(let[_,R]of y){let F=(R.el.dataset.leaves||"").split(",").map(U=>U.trim()).filter(Boolean);R.value=ps(_,F)*100}for(let[_,R]of w){let F=M.has(_);R.hidden=!F,R.setAttribute("aria-hidden",F?"false":"true")}}function gs(){return T.filter(_=>_.locked).map(_=>qn(_))}function El(){let _=new Xe;return k.getDrawingBufferSize(_),{x:_.x,y:_.y}}function ar(){if(p.size){if(g===Us){Nx(K);return}Ux(p,!0,{clippingPlanes:gs(),resolution:El(),edgeMode:g})}}function A(){p.size&&(Yx(p,x,{isDark:m,clippingPlanes:gs(),opacityByLabel:b,edgeMode:g}),x===gl?(k.toneMapping=No,k.toneMappingExposure=1.05):(k.toneMapping=mi,k.toneMappingExposure=1),ar(),wp(p,gs()),iv())}function X(){let _=document.getElementById("mats");if(_){_.replaceChildren();for(let[R,F]of[[eh,"ui.solid"],[gl,"ui.realistic"]]){let U=document.createElement("button");U.type="button",U.dataset.mode=R,U.textContent=Ut(F),R===x&&U.classList.add("is-active"),U.addEventListener("click",()=>{x=R,jx(R),_.querySelectorAll("button").forEach(le=>{le.classList.toggle("is-active",le.dataset.mode===R)}),A()}),_.append(U)}}}function fe(){let _=document.getElementById("edges");if(_){_.replaceChildren();for(let[R,F]of[[Us,"ui.edgesNone"],[Fs,"ui.edgesTransparent"],[pl,"ui.edgesOpaque"]]){let U=document.createElement("button");U.type="button",U.dataset.edgeMode=R,U.textContent=Ut(F),R===g&&U.classList.add("is-active"),U.addEventListener("click",()=>{g=R,dp(R),_.querySelectorAll("button").forEach(le=>{le.classList.toggle("is-active",le.dataset.edgeMode===R)}),ar(),hm()}),_.append(U)}}}function se(_,R,F,U){let le=document.createElement("div");le.className="part-opacity-wrap";let ve,Te=()=>{if(ve.value/100>0)U(0);else{let rt=F();U(rt>0?rt:1)}};return ve=rh({min:0,max:100,step:1,value:Math.round(R),ariaLabel:_,formatAriaValue:Ve=>`${Math.round(Ve)}%`,thumbScrubOnly:!0,onInput:Ve=>U(Ve/100),onChange:Ve=>U(Ve/100),onTap:Te}),ve.el.classList.add("part-opacity"),le.append(ve.el),{wrap:le,range:ve}}function ae(){let _=document.getElementById("parts");if(!_)return;_.style.removeProperty("--part-name-col");let R=0;for(let F of _.querySelectorAll(".part-name")){if(F.closest(".part-children")?.hidden)continue;let le=F.style.width;F.style.width="max-content",R=Math.max(R,Math.ceil(F.getBoundingClientRect().width)),F.style.width=le}R>0&&_.style.setProperty("--part-name-col",`${R}px`)}function Be(_,R,F,U=null){if(_.type==="leaf"){let It=document.createElement("div");It.className="part-row part-leaf",It.style.setProperty("--part-depth",String(F)),It.dataset.leaf=_.id;let Ol=document.createElement("span");Ol.className="part-disclosure-spacer",Ol.setAttribute("aria-hidden","true");let Ul=document.createElement("span");Ul.className="part-name",Ul.textContent=_.label;let{wrap:Sm,range:wm}=se(`${_.label} opacity`,(b.get(_.id)??1)*100,()=>S.get(_.id)??1,Fl=>Vs(_.id,Fl,{detach:!!U}));wm.el.dataset.leaf=_.id,E.set(_.id,wm);let wi=null;if(U){wi=document.createElement("button"),wi.type="button",wi.className="part-sync",wi.textContent=Ut("ui.sync"),wi.setAttribute("aria-label",`${Ut("ui.sync")} ${_.label}`);let Fl=M.has(_.id);wi.hidden=!Fl,wi.setAttribute("aria-hidden",Fl?"false":"true"),wi.addEventListener("click",Tv=>{Tv.stopPropagation(),Eh(_.id,U.groupId,U.leafIds)}),w.set(_.id,wi)}wi?It.append(Ol,Ul,Sm,wi):It.append(Ol,Ul,Sm),R.append(It);return}let le=th(_),ve=document.createElement("div");ve.className="part-group",ve.dataset.group=_.id;let Te=document.createElement("div");Te.className="part-row part-group-row",Te.style.setProperty("--part-depth",String(F)),Te.setAttribute("role","button"),Te.tabIndex=0;let Ve=document.createElement("button");Ve.type="button",Ve.className="part-disclosure",Ve.setAttribute("aria-label",`Expand ${_.label}`),Ve.setAttribute("aria-expanded","false");let rt=document.createElement("span");rt.className="part-name",rt.textContent=_.label;let St=ps(_.id,le)||1;St<=0&&(St=1);let{wrap:Qt,range:zn}=se(`${_.label} opacity`,ps(_.id,le)*100,()=>St,It=>{It>0&&(St=It),ds(le,It,_.id)});zn.el.dataset.group=_.id,zn.el.dataset.leaves=le.join(","),y.set(_.id,zn),Qt.addEventListener("click",It=>It.stopPropagation()),Qt.addEventListener("pointerdown",It=>It.stopPropagation());let Tt=document.createElement("div");Tt.className="part-children",Tt.hidden=!0;function Kt(It){It?D.add(_.id):D.delete(_.id),Tt.hidden=!It,ve.classList.toggle("is-expanded",It),Ve.setAttribute("aria-expanded",It?"true":"false"),Ve.setAttribute("aria-label",It?`Collapse ${_.label}`:`Expand ${_.label}`),requestAnimationFrame(()=>ae())}function Wh(){Kt(!D.has(_.id))}Ve.addEventListener("click",It=>{It.stopPropagation(),Wh()}),Te.addEventListener("click",It=>{Qt.contains(It.target)||Wh()}),Te.addEventListener("keydown",It=>{(It.key==="Enter"||It.key===" ")&&(It.preventDefault(),Wh())}),Te.append(Ve,rt,Qt),ve.append(Te,Tt),R.append(ve);let Ev={groupId:_.id,leafIds:le};for(let It of _.children)Be(It,Tt,F+1,Ev);Kt(D.has(_.id))}function Ze(){let _=document.getElementById("parts");if(!_)return;_.replaceChildren(),E.clear(),y.clear(),w.clear();for(let F of p.keys())b.has(F)||(b.set(F,1),Nr(p.get(F)||[],1,{edgeMode:g})),S.has(F)||S.set(F,1);let R=Xx(p.keys(),r,Ut);h=R;for(let F of R)Be(F,_,0,null);requestAnimationFrame(()=>ae())}let Fe="iso",ke=null,Je=!1;function at(_){let R=String(_||"").trim();if(!R)return null;for(let F of i)if(String(F?.id||"").trim()===R)return F;return null}function ft(){let _=Fe;_&&_.startsWith("scene:")?F_(_.slice(6)):F_(null)}function je(){return document.querySelectorAll("#cams button, #scenes button")}function xt(){Fe!=null&&(Fe=null,je().forEach(_=>{_.classList.remove("is-active")}),ft())}function Jt(){let _=document.getElementById("scenes");if(!_){let R=document.getElementById("cams");_=document.createElement("div"),_.id="scenes",_.className="scene-list",R?.insertAdjacentElement("afterend",_)}return _}function Ft(){let _=document.getElementById("cams");if(!_)return;_.replaceChildren();let R=Jt();R.replaceChildren();function F(U,le,ve,Te){let Ve=document.createElement("button");Ve.type="button",Ve.dataset.preset=le,Ve.textContent=ve,le===Fe&&Ve.classList.add("is-active"),Ve.addEventListener("click",()=>{Fe=le,je().forEach(rt=>{rt.classList.toggle("is-active",rt.dataset.preset===le)}),Te(),ft()}),U.append(Ve)}for(let[U,le]of[["iso","ui.iso"],["front","ui.front"],["side","ui.side"],["top","ui.top"]])F(_,U,Ut(le),()=>fs(U));for(let U of i){let le=String(U?.id||"").trim();if(!le)continue;let ve=Ut(`scene.${le}`);F(R,`scene:${le}`,ve,()=>Br(U))}R.hidden=R.childElementCount===0}function Bt(_=xe){return _.copy(te.target).sub(H.position).normalize()}function ln(_){let R=Math.hypot(_.x,_.z),F=(Math.atan2(_.x,_.z)*180/Math.PI+360)%360,U=Math.atan2(_.y,R)*180/Math.PI,le=Math.abs(U).toFixed(0),ve=U>=0?"\u2191":"\u2193";return`${F.toFixed(0)}\xB0 / ${le}\xB0${ve}`}function Ye(){return T.some(_=>!_.locked)}function tn(){return T.filter(_=>_.locked)}function yt(){Ye()||!(tn().length===0||ge)||T.push({id:Z++,normal:new I(0,0,1),t:0,locked:!1,label:Ut("ui.cut")})}function lr(_){let R=document.getElementById("cuts");if(!R)return;let F=R.querySelector(`[data-cut-id="${_.id}"]`);if(!F){bn();return}let U=F.querySelector(".cut-label");if(U&&(U.textContent=_.locked?_.label:Ut("ui.cut")),_.locked&&!F.querySelector(".cut-remove")){let le=document.createElement("button");le.type="button",le.className="cut-remove",le.setAttribute("aria-label",Ut("ui.removeSection")),le.textContent="\xD7",le.addEventListener("click",()=>_t(_.id)),F.append(le)}}function cn(_){_.locked||(Bt(_.normal),_.locked=!0,_.label=ln(_.normal),ge=!1,qt(),lr(_))}function cr(){tn().length!==0&&(Ye()||(ge=!0,!he&&(yt(),bn())))}function Fi(){ge&&(Ye()||tn().length!==0&&(yt(),bn()))}function bi(_,R){let F=T.find(U=>U.id===_);if(F){if(F.locked||cn(F),F.t=Math.min(1,Math.max(0,Number(R))),F.anchor=null,he){Vt();return}qt()}}function _t(_){let R=T.findIndex(F=>F.id===_);R<0||(T.splice(R,1),tn().length===0?(ge=!1,Ye()||yt()):ge&&!Ye()&&yt(),qt(),bn(),N?.refreshPartialHeight())}function nn(_){if(ue(),Pe.isEmpty())return{near:-1,far:1};let R=Pe.min,F=Pe.max,U=1/0,le=-1/0;for(let Ve=0;Ve<2;Ve++)for(let rt=0;rt<2;rt++)for(let St=0;St<2;St++){P.set(Ve?F.x:R.x,rt?F.y:R.y,St?F.z:R.z);let Qt=P.dot(_);Qt<U&&(U=Qt),Qt>le&&(le=Qt)}let Te=Math.max(le-U,1e-6)*.02;return{near:U-Te,far:le+Te}}function qn(_){if(_.anchor)return new xn().setFromNormalAndCoplanarPoint(_.normal,_.anchor);let{near:R,far:F}=nn(_.normal),U=R+(F-R)*_.t;return Le.copy(_.normal).multiplyScalar(U),new xn().setFromNormalAndCoplanarPoint(_.normal,Le)}function Vt(){let _=gs();return K&&(K.traverse(R=>{if(!R.isMesh||!R.material||Bn(R)||ih(R))return;let F=Array.isArray(R.material)?R.material:[R.material];for(let U of F){if(!U)continue;let le=U.clippingPlanes?U.clippingPlanes.length:0;U.clippingPlanes=_,U.clipIntersection=!1,le!==_.length&&(U.needsUpdate=!0)}}),pp(K,_)),_}function qt(){let _=Vt();K&&(wp(p,_),g!==Us?ar():pp(K,_))}function bn(){let _=document.getElementById("cuts");if(_){_.replaceChildren();for(let R of T){let F=document.createElement("div");F.className="cut-row",F.dataset.cutId=String(R.id);let U=document.createElement("span");U.className="cut-label",U.textContent=R.locked?R.label:Ut("ui.cut");let le=()=>{he&&(he=!1,qt(),Fi())},ve=rh({min:0,max:1,step:.001,value:R.t,ariaLabel:R.locked?`Section ${R.label}`:"Section cut",onScrubStart:()=>{he=!0,R.locked||cn(R)},onScrubEnd:le,onInput:Te=>bi(R.id,Te),onChange:Te=>{bi(R.id,Te),le()}});if(F.append(U,ve.el),R.locked){let Te=document.createElement("button");Te.type="button",Te.className="cut-remove",Te.setAttribute("aria-label",Ut("ui.removeSection")),Te.textContent="\xD7",Te.addEventListener("click",()=>_t(R.id)),F.append(Te)}_.append(F)}N?.refreshPartialHeight()}}let kr=!1,Th=new I,Ah=new I,tm=!1;n.addEventListener("pointerdown",()=>{kr=!0},{capture:!0});let nm=()=>{kr=!1};window.addEventListener("pointerup",nm,{capture:!0}),window.addEventListener("pointercancel",nm,{capture:!0}),te.addEventListener("start",()=>{xt(),kr=!0}),te.addEventListener("change",()=>{Ce()}),te.addEventListener("end",()=>{kr=!1,!de&&cr()});let Mi=1,ur=0,hr=0,Rh=1,Ch=0,Ph=0,Ih=1,Lh=0,Dh=0,xs=0,B_=280;function k_(){let _=Math.max(1,n.clientWidth),R=Math.max(1,n.clientHeight);if(!N)return{zoom:1,offX:0,offY:0,w:_,h:R};let{bottom:F,right:U}=N.getSafeInsets();if(F<=0&&U<=0)return{zoom:1,offX:0,offY:0,w:_,h:R};let le=Math.max(1,_-U),ve=Math.max(1,R-F),Te=Math.min(le/_,ve/R),Ve=U/2,rt=F/2;return{zoom:Te,offX:Ve,offY:rt,w:_,h:R}}function im(_,R){ci(()=>{Q=!0,Math.abs(ur)>.05||Math.abs(hr)>.05||Math.abs(Mi-1)>.001?(H.zoom=Ne*Mi,H.setViewOffset(_,R,ur,hr,_,R)):(H.clearViewOffset(),H.zoom=Ne,Mi=1,ur=0,hr=0),H.updateProjectionMatrix(),Q=!1})}function rm(_=!0){let{zoom:R,offX:F,offY:U,w:le,h:ve}=k_();if(Rh=R,Ch=F,Ph=U,!_){Mi=R,ur=F,hr=U,xs=0,im(le,ve);return}Ih=Mi,Lh=ur,Dh=hr,xs=performance.now()}function z_(_){if(!xs)return;let R=Math.min(1,(_-xs)/B_),F=1-(1-R)**3;Mi=Ih+(Rh-Ih)*F,ur=Lh+(Ch-Lh)*F,hr=Dh+(Ph-Dh)*F;let U=Math.max(1,n.clientWidth),le=Math.max(1,n.clientHeight);im(U,le),R>=1&&(xs=0)}function Tl(){let _=Math.max(1,n.clientWidth),R=Math.max(1,n.clientHeight);k.setSize(_,R,!1),V==="perspective"?W():pe(),rm(!1);let F=El();Ox(K,F.x,F.y)}Tl(),window.addEventListener("resize",Tl),N?.onDetentChange(()=>{rm(!0)});let $n=document.getElementById("ar"),Mn=document.getElementById("measure"),ta=!1,Al=()=>Ut("ui.measure");function Nh(){let _=document.getElementById("locale");if(_){_.replaceChildren();for(let[R,F]of[["cs","CS"],["en","EN"]]){let U=document.createElement("button");U.type="button",U.dataset.locale=R,U.textContent=F,R===sh()&&U.classList.add("is-active"),U.addEventListener("click",()=>{xy(R)}),_.append(U)}}}function H_(){Cp(document),$n&&!ta&&($n.textContent=Ut("ui.ar")),Mn&&(Mn.textContent=Al()),Xs(),qs(),me.relocalize();try{X(),fe(),Ft(),ea(),Ze(),bn(),Nh(),_m()}catch(_){console.error("relocalizeUi",_);try{Nh()}catch{}}N?.refreshPartialHeight()}Rp(()=>H_());function V_(){$n&&($n.hidden=!1,ta||($n.textContent=Ut("ui.ar")))}function G_(){Mn&&(Mn.hidden=!1,Mn.textContent=Al())}let Gs=document.getElementById("drawing"),zr=document.getElementById("labels"),Ws=!0;function Xs(){Gs&&(Gs.hidden=!1,Gs.disabled=!ke||Rl,Gs.textContent=Ut("ui.drawing"))}function qs(){if(!zr)return;let _=!!ke;zr.hidden=!_,zr.disabled=!_,zr.setAttribute("aria-pressed",Ws?"true":"false"),zr.classList.toggle("is-active",_&&Ws),zr.textContent=Ut("ui.labels")}function W_(){try{let _=new URLSearchParams(window.location.search).get("m");if(_&&_.trim())return _.trim()}catch{}return"model"}function X_(){let R=1,F=1.35;for(let U=0;U<6;U+=1){me.update();let le=me.glyphBoundsNdc();if(!le)return;let ve=Math.max(-1+.04-le.minX,le.maxX-(1-.04),-1+.04-le.minY,le.maxY-(1-.04),0);if(ve<.012||R>=F-.01)return;let Te=Math.min(F/R,Math.max(1.05,1+ve*1.6));R*=Te,H.isOrthographicCamera?(oe.left*=Te,oe.right*=Te,oe.top*=Te,oe.bottom*=Te,oe.updateProjectionMatrix()):(xe.copy(H.position).sub(te.target).multiplyScalar(Te),H.position.copy(te.target).add(xe),vn())}}function sm(){xs=0,Mi=1,ur=0,hr=0,Rh=1,Ch=0,Ph=0,H.clearViewOffset(),H.zoom=Ne,H.updateProjectionMatrix()}let Rl=!1;async function om(){if(Rl||!K||!ke)return null;Rl=!0,Xs(),Je=!0;let _=ke,R=g,F=f.background,U=k.getPixelRatio(),le=n.style.width,ve=n.style.height,Te=N?.getDetent?.()??null,Ve=Si?.isActive()??!1,rt=me.isVisible();try{Ve&&Si?.setActive(!1),me.setVisible(!0),N?.setDetent("closed"),n.style.width=`${2400}px`,n.style.height=`${1697}px`,k.setPixelRatio(1),Tl(),sm(),g=pl,ar(),f.background=new qe(16777215),me.setInk("plate"),Br(_),sm(),X_(),me.update(),q.render(f,H,K,um,{quality:"high"});let{png:St,pdf:Qt}=await O_(n),zn=`${W_()}_${String(_.id||"scene")}`;return{png:St,pdf:Qt,stem:zn}}finally{n.style.width=le,n.style.height=ve,k.setPixelRatio(U),g=R,f.background=F,me.setInk("viewer"),me.setVisible(rt),Te&&N?.setDetent(Te),Tl(),ar(),_&&Br(_),Ve&&Si?.setActive(!0),Je=!1,Rl=!1,Xs(),qs(),requestAnimationFrame(Nl)}}window.blueprintCaptureDrawing=async()=>{let _=await om();return _?{png:_.png,pdf:_.pdf,stem:_.stem}:null},window.blueprintSetView=(_={})=>{if(!K||!_)return!1;let R=_.projection==="ortho"?"ortho":"perspective",F=Number.isFinite(Number(_.hFovDeg))?Number(_.hFovDeg):ne;return R==="perspective"&&V==="ortho"&&De(F),R==="perspective"&&ot(F,{reframe:!1}),ci(()=>{Q=!0;let U=new I(0,1,0);if(Array.isArray(_.up)&&_.up.length>=3&&(U.set(Number(_.up[0])||0,Number(_.up[1])||0,Number(_.up[2])||0),U.lengthSq()>1e-12?U.normalize():U.set(0,1,0)),_e.up.copy(U),oe.up.copy(U),H.up.copy(U),Array.isArray(_.target)&&te.target.set(Number(_.target[0])||0,Number(_.target[1])||0,Number(_.target[2])||0),Array.isArray(_.position)&&H.position.set(Number(_.position[0])||0,Number(_.position[1])||0,Number(_.position[2])||0),H.lookAt(te.target),R==="ortho"){let le=H.position.distanceTo(te.target),ve=L(F,B());G(le,ve),Ne=1,V!=="ortho"&&(Re(oe),V="ortho"),$(),li()}ue(),vn(),te.update(),Q=!1}),rn=!0,!0},zr&&zr.addEventListener("click",()=>{Ws=!Ws,me.setVisible(Ws),qs()}),Gs&&Gs.addEventListener("click",()=>{(async()=>{let _=await om();_&&(Qp(_.png,`${_.stem}.png`),Qp(_.pdf,`${_.stem}.pdf`))})()});let Si=null;f&&(Si=zy({scene:f,canvas:n,getCamera:()=>H,controls:te,getRoot:()=>K,getClipPlanes:()=>gs(),onLiveLength:_=>{Mn&&(_?(Mn.textContent=_,Mn.classList.add("is-live")):(Mn.textContent=Al(),Mn.classList.remove("is-live")))},onActiveChange:_=>{rn=!0,Mn&&(Mn.classList.toggle("is-active",_),Mn.setAttribute("aria-pressed",_?"true":"false"),_||(Mn.textContent=Al(),Mn.classList.remove("is-live")))}})),Mn&&Mn.addEventListener("click",()=>{Si&&Si.setActive(!Si.isActive())}),Ie=()=>!!Si?.isActive();function am(){if(!K)return null;K.updateWorldMatrix(!0,!0);let _=tn().map(le=>qn(le)),R=new Et;if(R.name="ARContent",K.traverse(le=>{if(!le.isMesh||!le.visible||Bn(le))return;let ve=ay(le,_);ve&&R.add(ve)}),!R.children.length)return null;R.updateMatrixWorld(!0);let F=Ep(R),U=new Et;return U.name="ARExport",U.add(R),fy(R,F),U.userData.arPlacement=F,U}async function lm(){if(ta||!K)return;ta=!0;let _=$n?.textContent||"AR";$n&&($n.disabled=!0,$n.textContent="\u2026");try{let R=am();if(!R)throw new Error("Nothing visible to export. Show at least one part.");let U=await new Xu().parseAsync(R,{quickLookCompatible:!0,includeAnchoringProperties:!0,ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}}),le=new Blob([U],{type:"model/vnd.usdz+zip"}),ve=URL.createObjectURL(le),Te=document.createElement("a");Te.rel="ar",Te.href=ve,Te.download="view.usdz";let Ve=document.createElement("img");Ve.alt="AR",Te.appendChild(Ve),document.body.appendChild(Te),Te.click(),Te.remove(),setTimeout(()=>URL.revokeObjectURL(ve),6e4)}catch(R){ce(String(R?.message||R))}finally{ta=!1,$n&&($n.disabled=!1,$n.textContent=_)}}$n&&$n.addEventListener("click",()=>{lm()});let cm={scene:f,get camera(){return H},controls:te,parts:p,partOpacity:b,cuts:T,scenes:i,setPartOpacity:Vs,setCameraPreset:fs,applyScene:Br,setHFov:ot,toggleFovIso:Pt,get projection(){return V},get hFovDeg(){return ne},setCutT:bi,removeCut:_t,frameIso:Hs,openArQuickLook:lm,buildArExportScene:am,getPeelQuality:()=>ia};window.BlueprintsViewer=cm;function um(){for(let _ of b.values())if(_<1-1e-4)return!0;return!1}function hm(){for(let[_,R]of p){let F=b.get(_)??1;Nr(R,F,{edgeMode:g})}}let fm=!1,rn=!0,fr=null,Cl=w_(a),Oh=new ni,Uh=new Xe,Fh=S_({index:a,visibility:Cl,t:Ut,openSheet(){let _=window.matchMedia("(min-width: 768px)").matches;N?.setDetent(_?"open":"partial")},onFrame:(_,R)=>{R?.move?J_(_):j_(_)},onVisibility:()=>ev(),actionsFor:_=>xv(_),liveLines:_=>{let R=Ke?.lastKnown(_.globalId);return R?c_(R,Ut):[]}});function Pl(_){let R=_;for(;R;){let F=R.userData?.bpElementKey||Ui(R.name||"").element;if(F){for(let U of Object.values(a.elements))if(U.id===F)return U}R=R.parent}return null}function dm(_){return _?l.get(_)||[]:[]}function Qn(_){if(!_)return[];let R=dm(_.id);if(R.length)return R;let F=[];for(let U of us(a,_.globalId)){let le=a.elements[U];le&&le!==_&&F.push(...dm(le.id))}return F}function $s(_){let R=new Nt,F=new I;for(let U of _){let le=U.geometry;if(!le)continue;le.boundingBox||le.computeBoundingBox();let ve=le.boundingBox;if(ve){U.updateWorldMatrix(!0,!1);for(let Te of[ve.min.x,ve.max.x])for(let Ve of[ve.min.y,ve.max.y])for(let rt of[ve.min.z,ve.max.z])F.set(Te,Ve,rt).applyMatrix4(U.matrixWorld),R.expandByPoint(F)}}return R}let q_=480,Bi=null;function $_(_){let R=Math.min(1,Math.max(0,_));return R<.5?4*R*R*R:1-(-2*R+2)**3/2}function Y_(_){let R=_.getSize(P),F=Math.max(R.x,R.y,R.z,.2),U=_.getCenter(new I),le=H.position.clone().sub(te.target);le.lengthSq()<1e-8?le.set(.75,.55,.75):le.normalize();let ve;if(H.isOrthographicCamera)ve=Math.max(H.position.distanceTo(te.target),F*1.4);else{let Te=(H.fov||45)*Math.PI/180;ve=Math.max(F*.62/Math.max(Math.tan(Te/2),.001),F*1.25)}return{center:U,position:U.clone().addScaledVector(le,ve),span:F}}function Z_(_){Bi={t0:performance.now(),fromPos:H.position.clone(),toPos:_.position,fromTarget:te.target.clone(),toTarget:_.center,span:_.span},rn=!0}function K_(_){if(!Bi)return;let R=Math.min(1,(_-Bi.t0)/q_),F=$_(R);H.position.lerpVectors(Bi.fromPos,Bi.toPos,F),te.target.lerpVectors(Bi.fromTarget,Bi.toTarget,F),H.isOrthographicCamera&&Ee(Bi.span*.62,Bi.span*.62),de=!0,te.update(),ue(),vn(),rn=!0,R>=1&&(Bi=null,requestAnimationFrame(()=>{de=!1}))}function j_(_){let R=Qn(a.elements[_]);R.length&&pm(R),rn=!0}function J_(_){let R=a.elements[_],F=Qn(R);if(!F.length)return;let U=$s(F);U.isEmpty()||(Z_(Y_(U)),pm(F),rn=!0)}function pm(_){fr&&mm();let R=[];for(let F of _){if(!F.isMesh||!F.material)continue;let U=Array.isArray(F.material)?F.material:[F.material],le=U.map(ve=>{let Te=ve.clone();return Te.emissive?(Te.emissive.setHex(16756768),Te.emissiveIntensity=0):Te.color&&(Te.userData.bpPulseBase=Te.color.getHex()),R.push(Te),Te});F.userData.bpPulseMaterial=U,F.material=le.length===1?le[0]:le}fr={meshes:_,clones:R,t0:performance.now()}}function mm(){if(fr){for(let _ of fr.meshes){let R=_.userData.bpPulseMaterial;R&&(_.material=R.length===1?R[0]:R),delete _.userData.bpPulseMaterial}for(let _ of fr.clones)_.dispose?.();fr=null}}function Q_(_){if(!fr)return;let R=(_-fr.t0)/900;if(R>=1){mm(),rn=!0;return}let F=Math.sin(Math.min(R,1)*Math.PI);for(let U of fr.clones)U.emissive?U.emissiveIntensity=.85*F:U.color&&U.userData.bpPulseBase!=null&&U.color.setHex(U.userData.bpPulseBase).offsetHSL(.08,.2,.18*F);rn=!0}function ev(){let _=new Set;for(let R of Object.values(a.elements))Cl.isHidden(R.globalId)&&R.id&&_.add(R.id);for(let[R,F]of l){let U=_.has(R);for(let le of F){le.userData.bpIfcHidden=U;for(let ve of le.children||[])(ve?.userData?.isEdgeOverlay||ve?.userData?.isSectionCap)&&(ve.visible=!U)}}for(let R of We.bindings){let F=Ui(R.host?.name||"").element,U=!!(F&&_.has(F));R.host&&(R.host.userData.bpIfcHidden=U)}for(let[R,F]of p)Nr(F,b.get(R)??1,{edgeMode:g});rn=!0}function tv(_,R){let U=(Array.isArray(_.material)?_.material:[_.material]).map(le=>{if(!le)return le;if(le.userData.bpOwned)return R(le);let ve=le.clone();return ve.userData.bpOwned=!0,R(ve)});_.material=U.length===1?U[0]:U}function Il(_,R){let F="restore"in R&&R.restore,U=!F&&!!R.on;Ge.set(_.globalId,U),F?pt.delete(_.globalId):pt.set(_.globalId,R);let le=F?1:Math.min(Math.max(R.level??1,0),1),ve=new qe(F?0:R.color);U&&ve.lerp(new qe(ph),.35*(1-le));for(let Te of Qn(_))tv(Te,Ve=>(Ve.color&&(Ve.userData.bpLightBase==null&&(Ve.userData.bpLightBase=Ve.color.getHex()),F?Ve.color.setHex(Ve.userData.bpLightBase):Ve.color.copy(ve)),Ve.emissive&&(U?(Ve.emissive.copy(ve),Ve.emissiveIntensity=.3+.35*le):(Ve.emissive.setHex(0),Ve.emissiveIntensity=0)),Ve));rn=!0}function nv(_){let R=!Ge.get(_.globalId);Il(_,R?Mt:ut)}function iv(){for(let[_,R]of[...pt]){let F=a.elements[_];F&&Il(F,R)}}function Ll(_){_?.ok||(console.warn("Home command failed",_),Gh=`${Ut("home.failed")}${_?.status?` (${_.status})`:""}${_?.error?`: ${_.error}`:""}`,na(),window.setTimeout(()=>{Gh="",na()},4e3))}function rv(_){if(lv(_),vt(_)?.deviceType!=="ColorTemperatureLight"){nv(_);return}Ke.command(_.globalId,{type:"toggle"}).then(Ll)}function sv(_,R){let F=Qn(_);if(!R?.point||!F.length)return{dy:1,side:-1};let le=$s(F).getCenter(new I),ve=new I().setFromMatrixColumn(H.matrixWorld,0),Te=R.point.clone().sub(le);return{dy:Te.y,side:Te.dot(ve)}}let gm=new Map;function ov(_){let R=gm.get(_);return R||(R=Object.values(a.elements).filter(F=>F.type===_),gm.set(_,R)),R}function av(_,R){let F=R?.camera||H,U=new I().setFromMatrixColumn(F.matrixWorld,0),le=[];for(let ve of ov(_)){if(Cl.isHidden(ve.globalId))continue;let Te=Qn(ve).filter(Tt=>{if(!ls(Tt))return!1;for(let Kt=Tt;Kt;Kt=Kt.parent)if(!Kt.visible)return!1;return!0});if(_==="IfcWindow"){let Tt=new Set(He.operableMeshes(ve.id,Qn(ve)));for(let Kt=Te.length-1;Kt>=0;Kt--)Tt.has(Te[Kt])||Te.splice(Kt,1)}if(!Te.length)continue;let Ve=$s(Te);if(Ve.isEmpty())continue;let rt=new Set(Te),St=Tt=>{for(let Kt=Tt;Kt;Kt=Kt.parent)if(rt.has(Kt))return!0;return Pl(Tt)===ve},Qt=Te[0],zn=_==="IfcSwitchingDevice"?wy(Ve,bl(ve),U).map(Tt=>Tt.center):[Ve.getCenter(new I)];for(let Tt of zn)le.push({element:ve,center:Tt,group:ve.globalId,hit:{object:Qt,point:Tt},owns:St})}return le}let Bh=new Map;function kh(_,R,F=!0){let U=Qn(_);if(!U.length)return;let le=$s(U),ve=le.getCenter(new I),Te=le.getSize(new I),Ve=R.position==="down"?-1:1;ve.y+=Ve*Te.y/4;let rt=bl(_);if(rt.length>1){let St=new I().setFromMatrixColumn(H.matrixWorld,0);if(St.y=0,St.lengthSq()>1e-9){St.normalize();let Qt=R.rocker===rt[0]?-1:1;ve.addScaledVector(St,Qt*Math.max(Te.x,Te.z)/4)}}Oe.showFeedback({worldPos:ve,kind:"switch",direction:R.position,haptic:F})}function lv(_){let R=Qn(_);R.length&&Oe.showFeedback({worldPos:$s(R).getCenter(new I),kind:"light"})}function cv(_,R){if(!_?.host||R.from===R.to)return;let F=new Nt().setFromObject(_.host);if(F.isEmpty())return;let U=F.getCenter(new I),le=R.to>R.from;if(_.sections){Oe.showFeedback({worldPos:U,kind:"lift",direction:le?"up":"down"});return}if(_.panels){let rt=_.pivot.parent;if(!rt)return;rt.updateWorldMatrix(!0,!1),_.panels.forEach((St,Qt)=>{let zn=new Nt().setFromObject(St.pivot);if(zn.isEmpty())return;let Tt=St.slideLocal.clone().transformDirection(rt.matrixWorld);le||Tt.negate();let Kt=zn.getCenter(new I);Oe.showFeedback({worldPos:Kt,kind:"slide",worldDir:Tt,haptic:Qt===0})});return}if(_.slideLocal){let rt=_.pivot.parent;if(!rt)return;rt.updateWorldMatrix(!0,!1);let St=_.slideLocal.clone().transformDirection(rt.matrixWorld);le||St.negate(),Oe.showFeedback({worldPos:U,kind:"slide",worldDir:St});return}let ve=_.pivot.getWorldPosition(new I),Te=dh(R.to,_.sign)-dh(R.from,_.sign),Ve=e_(U.toArray(),ve.toArray(),Te);Oe.showFeedback({worldPos:U,kind:"hinge",hinge:ve,to:Ve})}function uv(_,R){let F=Qn(_),U=He.operableMeshes(_.id,F),le=U[0];if(!le?.parent)return;let ve=He.slideOf(_.id),Te;ve?(Te=new I(ve[0],ve[1],ve[2]).normalize(),R||Te.negate()):(le.parent.updateWorldMatrix(!0,!1),Te=new I(R?1:-1,0,0).transformDirection(le.parent.matrixWorld)),Oe.showFeedback({worldPos:$s(U).getCenter(new I),kind:"slide",worldDir:Te})}function hv(_,R){return _?He.acceptsHit(_.id,Qn(_),R):!1}function xm(_,R){kh(_,R),zh(_),Bh.set(_.globalId,performance.now()),Ke.press(_.globalId,R).then(Ll)}function fv(_,R){let F=vt(_),U=l_(_,sv(_,R));if(F?.deviceType!=="GenericSwitch"||!Ke.simulation()){kh(_,U),zh(_);return}xm(_,U)}function dv(_){if(vt(_)?.deviceType!=="GenericSwitch"||!Ke.simulation())return null;let F=bl(_),U=[];return F.forEach((le,ve)=>{for(let Te of["up","down"]){let Ve=Ut(Te==="up"?"home.up":"home.down");U.push({id:`switch-${le}-${Te}`,labelKey:Te==="up"?"home.up":"home.down",label:F.length>1?`${ve+1} ${Ve}`:Ve,run:()=>xm(_,{rocker:le,position:Te,kind:"short"})})}}),U}function pv(_){let R=vt(_);if(R?.deviceType!=="WindowCovering")return;let F=R.state?.windowCovering?.targetPositionLiftPercent100ths,U=F!=null&&F<5e3;Ke.command(_.globalId,{type:U?"coverClose":"coverOpen"}).then(Ll)}function mv(_){return vt(_)?.deviceType!=="WindowCovering"?null:[["coverOpen","ui.open"],["coverClose","ui.close"],["coverStop","home.stop"]].map(([F,U])=>({id:F,labelKey:U,run:()=>Ke.command(_.globalId,{type:F}).then(Ll)}))}function zh(_){for(let R of Qn(_)){if(R.userData.bpPressing)continue;R.userData.bpPressing=!0;let F=R.position.y;R.position.y=F-.004,window.setTimeout(()=>{R.position.y=F,R.userData.bpPressing=!1,rn=!0},160)}rn=!0}function gv(_){let R=!tt.get(_.globalId);He.slide(_.id,Qn(_),R,performance.now())&&(uv(_,R),tt.set(_.globalId,R),rn=!0)}function xv(_){if(!_)return[];let R={now:performance.now()},F=U=>ls(U.object);for(let U of Qn(_)){let ve=We.taps.resolve([{object:U}],R,F)?.claim?.actions;if(Array.isArray(ve)&&ve.length)return ve.slice()}return[]}function yv(_){if(Ie())return;let R=H;if(!R||!K)return;let F=n.getBoundingClientRect(),U=F.width||n.clientWidth||1,le=F.height||n.clientHeight||1;Uh.x=(_.clientX-F.left)/U*2-1,Uh.y=-((_.clientY-F.top)/le)*2+1,Oh.setFromCamera(Uh,R);let ve=Oh.intersectObject(K,!0).filter(Tt=>ls(Tt.object)),Te=K;for(;Te.parent;)Te=Te.parent;let Ve={raycaster:Oh,now:performance.now(),camera:R,root:Te,tap:{x:_.clientX-F.left,y:_.clientY-F.top},size:{w:U,h:le}},rt=We.taps.resolve(ve,Ve,Tt=>ls(Tt.object));if(rt&&(rt.kind==="direct"||rt.kind==="extended")&&rt.hit?.object){let Tt=rt.hit.object,Kt=Tt.userData?.bpPart||Ui(Tt.name||"").part;Fh.inspect(Pl(Tt),{partName:Kt});return}let St=ve[0];if(!St)return;let Qt=Pl(St.object),zn=St.object.userData?.bpPart||Ui(St.object.name||"").part;Fh.inspect(Qt,{partName:zn})}c=yv;let Hh=o_({search:typeof location<"u"?location.search:"",storage:typeof localStorage<"u"?localStorage:null}),ym=s_(a),Vh=Hh.mode,Gh="",dr=null;function _v(_){let R=a.elements[_.globalId];R&&_.deviceType==="ColorTemperatureLight"&&Il(R,kp(_))}function vv(){for(let _ of[...Ge.keys()]){let R=a.elements[_];R&&Il(R,{restore:!0})}}function na(){if(!dr)return;let _=Ke?Ke.status():"off",R=_==="live"?Ke.simulation()?"home.statusLive":"home.statusLiveNoSim":_==="connecting"?"home.statusConnecting":_==="unreachable"?"home.statusUnreachable":"home.statusOff";dr.textContent=Gh||Ut(R),dr.dataset.status=_,dr.title=_==="off"?"":Hh.baseUrl}function _m(){if(!ym)return;let _=document.getElementById("section-home");if(!_){let U=document.getElementById("section-locale");if(!U?.parentNode)return;_=document.createElement("section"),_.className="sheet-section",_.id="section-home",U.parentNode.insertBefore(_,U)}_.replaceChildren();let R=document.createElement("h2");R.className="sheet-title",R.textContent=Ut("home.title");let F=document.createElement("div");F.className="seg",F.id="home-mode",F.setAttribute("role","group"),F.setAttribute("aria-label",Ut("home.title"));for(let[U,le]of[["live","home.live"],["off","home.off"]]){let ve=document.createElement("button");ve.type="button",ve.dataset.homeMode=U,ve.textContent=Ut(le),U===Vh&&ve.classList.add("is-active"),ve.addEventListener("click",()=>bv(U)),F.append(ve)}dr=document.createElement("p"),dr.className="home-status",dr.setAttribute("aria-live","polite"),dr.style.cssText="margin:0.5rem 0 0;font-size:0.76rem;line-height:1.35;color:var(--fg-secondary)",_.append(R,F,dr),na()}function bv(_){Vh=_,a_(typeof localStorage<"u"?localStorage:null,_),document.querySelectorAll("#home-mode button").forEach(R=>{R.classList.toggle("is-active",R.dataset.homeMode===_)}),Ke&&(_==="live"?Ke.start():(Ke.stop(),vv()),na())}ym&&(Ke=u_({baseUrl:Hh.baseUrl,onStatus:()=>{na(),rn=!0},onDevice:_=>_v(_),onSwitch:_=>{if(_.event!=="initialPress")return;let R=a.elements[_.globalId],F=performance.now()-(Bh.get(_.globalId)??-1/0)<3e3;Bh.delete(_.globalId),R&&!F&&((_.position==="up"||_.position==="down")&&kh(R,{rocker:_.rocker,position:_.position},!1),zh(R))}}),_m(),Vh==="live"&&Ke.start(),window.blueprintsHome=Ke),Rp(()=>Fh.refresh());let vm=null,bm=null,ia="fast",Mm=null,Dl=!1;n.addEventListener("pointermove",()=>{Si?.isActive()&&(rn=!0)}),n.addEventListener("pointerup",()=>{Si?.isActive()&&(rn=!0)});function Mv(){let _=H.view;return[H.position.x,H.position.y,H.position.z,H.quaternion.x,H.quaternion.y,H.quaternion.z,H.quaternion.w,H.zoom,H.near,H.far,H.fov||0,H.left,H.right,H.top,H.bottom,te.target.x,te.target.y,te.target.z,n.width,n.height,_&&_.enabled?1:0,_?_.offsetX:0,_?_.offsetY:0,_?_.fullWidth:0,_?_.fullHeight:0,V==="ortho"?1:0]}function Sv(){let _=Mv(),R=vm,F=!R||R.length!==_.length;if(!F&&R){for(let U=0;U<_.length;U++)if(_[U]!==R[U]){F=!0;break}}return F&&(vm=_),F}function wv(){let _=[x,g,sh(),Ws?"1":"0",String(d)],R=f?.background;R&&R.isColor&&_.push(R.getHexString());for(let[U,le]of b)_.push(U,Number(le).toFixed(3));for(let U of T)_.push(String(U.id),U.locked?"1":"0",Number(U.t).toFixed(4));let F=Cl.hiddenIds();return _.push(F.length?F.slice().sort().join(","):"-"),_.join("|")}function Nl(){if(Je)return;let _=performance.now();We.step(_)&&(rn=!0),He.step(_)&&(rn=!0),Q_(_),K_(_),z_(_),te.update(),K&&vn(),tm||(Th.copy(H.position),Ah.copy(te.target),tm=!0);let R=H.position.distanceToSquared(Th)>1e-8||te.target.distanceToSquared(Ah)>1e-8;Th.copy(H.position),Ah.copy(te.target);let F=wv(),U=F!==bm,le=Sv();if(U&&(Dl=!0),ia=!kr&&!R&&!U&&!he&&!xs&&!Dl?"high":"fast",!rn&&!U&&!le&&!(ia!==Mm)&&!Dl){requestAnimationFrame(Nl);return}rn=!1,bm=F,Mm=ia,U||(Dl=!1),Si?.update(),me.update();let Ve=q.render(f,H,K,um,{quality:ia,batchKey:F,deferPrime:U||he});fm&&!Ve&&hm(),fm=Ve,requestAnimationFrame(Nl)}return Nl(),cm}return Lv(TC);})();
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
