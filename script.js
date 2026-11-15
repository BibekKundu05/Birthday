/* ======== EDIT ME ======== */
const CFG={
  name:"My Love",                       // her name
  from:"Bibek",                        // your name
  startDate:"2021-05-22",               // date you got together (YYYY-MM-DD)
  message:"Today the world got its most beautiful person.\nYou are my life, my love, my whole world.\nI made this tiny universe just for you.\nHappy Birthday, my everything. 💖\n— Bibek",
  photos:[                              // put images in assets/ : photo1.jpg … photo6.jpg
    {src:"photo2.jpg",cap:"The day I knew"},
    {src:"photo1.jpg",cap:"Your smile = my favorite place"},
    {src:"photo3.jpg",cap:"Us, being us"},
    {src:"photo4.jpg",cap:"My favorite"},
    {src:"photo5.jpg",cap:"Pure happiness"},
    {src:"photo6.jpg",cap:"Forever starts here"}
  ],
  reasons:["Your laugh fixes my worst days","You believe in me louder than I do","You make ordinary moments magic","Your kindness is unreal","You feel like home","The way you say my name","You're beautiful inside and out","You make me want to be better"],
  story:[["The day we met","I still remember the day our paths crossed, not knowing you would become such an important part of my life. What started as a simple meeting slowly turned into something so beautiful. Little did I know that one day, you would become my favourite person. And now, I’m forever grateful that we met."],["Our first meet","I remember how nervous and excited I was, wanting everything to be perfect. Every little moment with you felt special, and your smile made everything even more beautiful. I didn't know what the future held for us, but I knew I wanted to see you again. That day will always have a special place in my heart."],["Today","Another year of loving you, laughing with you, and making memories together. Every day with you gives me another reason to be grateful for having you in my life. No matter how much time passes, I hope I never stop making you feel loved and special. Here's to us, our beautiful journey, and a lifetime of choosing each other. ❤️"]],
  quiz:[["Where was our first date?",["Place A","Place B","Place C"],"Correct! (Every answer is right when it is about us 😉)"],["What is my favorite thing about you?",["Your smile","Your heart","Everything"],"Yes! And a thousand more things. 💖"],["Who loves who more?",["You love me","I love you","Both, forever"],"Trick question: I win. 😘"]],
  coupons:["Free hug, any time ✨","One movie night, you pick 🎬","A date, planned by me 🍽️","Breakfast in bed 🥞"],
  letters:[
    ["Open when you miss me","Close your eyes. I'm right there with you, holding your hand. Every minute apart just makes the next hug bigger."],
    ["Open when you're sad","You are loved beyond measure. This too shall pass, and I'll be with you through all of it. Always."],
    ["Open when you doubt yourself","You are brilliant, brave and rare. I see it every single day, even when you can't."],
    ["Open when you want to smile","Remember our silliest moment. Yes, that one. 😄 I'm smiling too."]
  ]
};
/* ========================== */
const $=s=>document.querySelector(s),rnd=(a,b)=>Math.random()*(b-a)+a;
document.title=`Happy Birthday, ${CFG.name} 💖`;$('#nm').textContent=CFG.name;

/* placeholder images (replaced automatically when your real photos exist) */
function ph(i){const h=[340,300,260,20,200,280][i%6];
 return 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h},80%,60%)"/><stop offset="1" stop-color="hsl(${h+60},70%,35%)"/></linearGradient></defs><rect width="600" height="800" fill="url(#g)"/><text x="300" y="400" font-size="150" text-anchor="middle">💖</text><text x="300" y="520" font-size="36" fill="#fff" text-anchor="middle" font-family="sans-serif">Photo ${i+1} goes here</text></svg>`)}

/* background: floating hearts & sparkles */
const bg=$('#bg'),bx=bg.getContext('2d'),fx=$('#fx'),fc=fx.getContext('2d');let W,H,P=[],F=[];
function rs(){W=bg.width=fx.width=innerWidth;H=bg.height=fx.height=innerHeight}rs();addEventListener('resize',rs);
const em=['💖','✨','💗','🌸','💫','🤍'];
for(let i=0;i<32;i++)P.push({x:rnd(0,W),y:rnd(0,H),s:rnd(12,30),v:rnd(.2,.8),e:em[i%6],a:rnd(.15,.5),p:rnd(0,6)});
function loop(){bx.clearRect(0,0,W,H);
 P.forEach(p=>{p.y-=p.v;p.x+=Math.sin(p.y/60+p.p)*.4;if(p.y<-40){p.y=H+40;p.x=rnd(0,W)}bx.globalAlpha=p.a;bx.font=p.s+'px serif';bx.fillText(p.e,p.x,p.y)});
 fc.clearRect(0,0,W,H);
 F=F.filter(f=>f.l>0);F.forEach(f=>{f.x+=f.vx;f.y+=f.vy;f.vy+=f.g;f.vx*=.99;f.l--;fc.globalAlpha=Math.min(1,f.l/30);fc.fillStyle=f.c;fc.beginPath();f.r?fc.arc(f.x,f.y,f.r,0,7):fc.fillRect(f.x,f.y,f.w,f.h);fc.fill()});
 requestAnimationFrame(loop)}loop();
const cols=['#ff5d8f','#ffd27a','#b79cff','#7af0ff','#fff','#ff9f68'];
function confetti(x=W/2,y=H/3,n=120){for(let i=0;i<n;i++){const a=rnd(0,7),s=rnd(3,12);F.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,g:.18,l:rnd(80,160),c:cols[i%6],w:rnd(5,10),h:rnd(4,12)})}}
function firework(x,y){const c=cols[Math.floor(rnd(0,6))];for(let i=0;i<90;i++){const a=i/90*6.283,s=rnd(2,7);F.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,g:.05,l:rnd(50,90),c,r:rnd(1.5,3)})}}
function show(n=8){for(let i=0;i<n;i++)setTimeout(()=>firework(rnd(W*.15,W*.85),rnd(H*.1,H*.5)),i*350)}

/* music: Happy Birthday melody synthesised in the browser */
let ac,playing=false,tmr;
const mel=[[392,.75],[392,.25],[440,1],[392,1],[523,1],[494,2],[392,.75],[392,.25],[440,1],[392,1],[587,1],[523,2],[392,.75],[392,.25],[784,1],[659,1],[523,1],[494,1],[440,2],[698,.75],[698,.25],[659,1],[523,1],[587,1],[523,2]];
function tune(){if(!playing)return;let t=ac.currentTime+.1;mel.forEach(([f,d])=>{const o=ac.createOscillator(),g=ac.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+d*.5-.02);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d*.5);t+=d*.5});tmr=setTimeout(tune,(t-ac.currentTime+1)*1000)}
function music(on){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();}catch(e){return}playing=on;clearTimeout(tmr);$('#mus').textContent=on?'🎵':'🔇';if(on){ac.resume();tune()}}
$('#mus').onclick=()=>music(!playing);

/* gate + typewriter */
$('#open').onclick=()=>{$('#gate').classList.add('off');music(true);confetti(W/2,H/2,200);show(6);
 let i=0;const el=$('#msg');(function t(){el.textContent=CFG.message.slice(0,i++);if(i<=CFG.message.length)setTimeout(t,55)})()};

/* days together counter */
function tick(){const d=Date.now()-new Date(CFG.startDate),s=Math.floor(d/1000);
 const v=[[Math.floor(s/86400),'days'],[Math.floor(s/3600)%24,'hours'],[Math.floor(s/60)%60,'mins'],[s%60,'secs']];
 $('#counter').innerHTML=v.map(([n,l])=>`<div><b>${n}</b>${l} loving you</div>`).join('')}
tick();setInterval(tick,1000);

/* gallery */
CFG.photos.forEach((p,i)=>{const d=document.createElement('div');d.className='photo';d.innerHTML=`<img src="${p.src}" alt="${p.cap}"><span>${p.cap}</span>`;
 const im=d.querySelector('img');im.onerror=()=>{im.onerror=null;im.src=ph(i)};
 d.onmousemove=e=>{const r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform=`perspective(700px) rotateY(${x*18}deg) rotateX(${-y*18}deg) scale(1.04)`};
 d.onmouseleave=()=>d.style.transform='';
 d.onclick=()=>{$('#lb img').src=im.src;$('#lb').classList.add('on');confetti(innerWidth/2,innerHeight/2,40)};
 $('#gal').append(d)});
$('#lb').onclick=()=>$('#lb').classList.remove('on');

/* cake */
for(let i=0;i<5;i++){const c=document.createElement('div');c.className='candle';c.innerHTML='<i></i>';c.onclick=()=>out(c);$('#candles').append(c)}
function out(c){c.classList.add('out');if(!document.querySelector('.candle:not(.out)')){confetti(W/2,H/2,250);show(10);$('#wish').innerHTML='🌟 Your wish is on its way. I promise to spend my life making it come true. 🌟'}}
$('#blow').onclick=()=>{[...document.querySelectorAll('.candle:not(.out)')].forEach((c,i)=>setTimeout(()=>out(c),i*250))};

/* reasons */
CFG.reasons.forEach(r=>{const d=document.createElement('div');d.className='flip';d.innerHTML=`<div><div class="f">💝</div><div class="b">${r}</div></div>`;d.onclick=e=>{d.classList.toggle('on');if(d.classList.contains('on'))confetti(e.clientX,e.clientY,25)};$('#reasons').append(d)});

/* letters */
CFG.letters.forEach(([t,b])=>{const d=document.createElement('div');d.className='env';d.innerHTML=`<b>💌 ${t}</b><div>${b}<br><i>— ${CFG.from}</i></div>`;d.onclick=()=>d.classList.toggle('on');$('#letters').append(d)});

/* heart catching game */
let run=false;$('#start').onclick=()=>{if(run)return;run=true;let sc=0,t=20;$('#sc').textContent=0;const g=$('#game');g.innerHTML='';
 const sp=setInterval(()=>{const h=document.createElement('span');h.className='hrt';h.textContent=['💖','💗','💘','💝'][Math.floor(rnd(0,4))];h.style.left=rnd(0,90)+'%';h.style.top='-50px';h.style.animationDuration=rnd(2.2,4)+'s';
  h.onpointerdown=e=>{sc++;$('#sc').textContent=sc;confetti(e.clientX,e.clientY,10);h.remove()};g.append(h);setTimeout(()=>h.remove(),4200)},380);
 const cd=setInterval(()=>{$('#tm').textContent=--t;if(t<=0){clearInterval(sp);clearInterval(cd);run=false;g.innerHTML=`<p style="margin-top:130px;font-family:Caveat;font-size:2rem;padding:20px">You caught ${sc} hearts 💖<br>…but you already own the only one that matters.</p>`;show(5)}},1000)};

/* sky of stars */
let sn=0;$('#sky').onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),s=document.createElement('span');s.className='star';s.textContent=['⭐','✨','💫','🌟'][sn%4];s.style.left=e.clientX-r.left-10+'px';s.style.top=e.clientY-r.top-10+'px';s.style.fontSize=rnd(16,34)+'px';e.currentTarget.append(s);$('#sn').textContent=++sn;firework(e.clientX,e.clientY)};

/* the final question */
const no=$('#no');function dodge(){no.style.position='fixed';no.style.left=rnd(10,innerWidth-90)+'px';no.style.top=rnd(10,innerHeight-60)+'px'}
no.onmouseenter=dodge;no.onclick=dodge;no.ontouchstart=e=>{e.preventDefault();dodge()};
$('#yes').onclick=()=>{no.style.display='none';$('#fin').innerHTML=`I knew it. 💖 I love you to the moon and back, ${CFG.name}.<br>Happy Birthday!`;confetti(W/2,H/2,400);show(20);setInterval(()=>confetti(rnd(0,W),-10,30),900)};

/* particle heart */
(function(){const c=$('#heartc'),x=c.getContext('2d');let w,h,ps=[],m={x:-999,y:-999};
function init(){w=c.width=c.clientWidth;h=c.height=c.clientHeight;ps=[];for(let i=0;i<650;i++){const t=rnd(0,6.283),r=Math.pow(Math.random(),.35);ps.push({hx:16*Math.pow(Math.sin(t),3)*r,hy:-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*r,x:rnd(0,w),y:rnd(0,h),vx:0,vy:0,c:cols[i%3]})}}
init();addEventListener('resize',init);
c.onpointermove=e=>{const r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top};c.onpointerleave=()=>m.x=-999;
c.onclick=()=>ps.forEach(p=>{p.vx=rnd(-18,18);p.vy=rnd(-18,18)});
(function f(){x.clearRect(0,0,w,h);const sc=Math.min(w,h)/40*(1+.06*Math.sin(Date.now()/230));
ps.forEach(p=>{const tx=w/2+p.hx*sc,ty=h/2+p.hy*sc,dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy)||1;if(d<70){p.vx+=dx/d*2.5;p.vy+=dy/d*2.5}p.vx+=(tx-p.x)*.03;p.vy+=(ty-p.y)*.03;p.vx*=.88;p.vy*=.88;p.x+=p.vx;p.y+=p.vy;x.fillStyle=p.c;x.fillRect(p.x,p.y,3,3)});requestAnimationFrame(f)})()})();

/* story timeline */
CFG.story.forEach(([t,b])=>{const d=document.createElement('div');d.innerHTML=`<b>${t}</b><br>${b}`;$('#story').append(d)});

/* quiz */
let qi=0;function qz(){const q=CFG.quiz,b=$('#quiz');
 if(qi>=q.length){b.innerHTML='<h2>100% 💯</h2><p>You know us perfectly. Of course you do.</p>';confetti(W/2,H/2,150);show(4);return}
 b.innerHTML=`<p style="font-size:1.3rem;margin-bottom:10px">${q[qi][0]}</p>`+q[qi][1].map(o=>`<button class="opt">${o}</button>`).join('')+'<p id="qr" style="font-family:Caveat;font-size:1.6rem;min-height:2em"></p>';
 b.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{b.querySelectorAll('.opt').forEach(x=>x.disabled=true);$('#qr').textContent=q[qi][2];confetti(innerWidth/2,innerHeight/2,40);qi++;setTimeout(qz,2200)})}qz();

/* scratch coupons */
CFG.coupons.forEach(t=>{const d=document.createElement('div');d.className='scr';d.innerHTML=`<div>${t}</div><canvas width="220" height="130"></canvas>`;
 const c=d.querySelector('canvas'),x=c.getContext('2d'),g=x.createLinearGradient(0,0,220,130);g.addColorStop(0,'#c9c9d6');g.addColorStop(1,'#8e8ea3');x.fillStyle=g;x.fillRect(0,0,220,130);x.fillStyle='#444';x.font='16px sans-serif';x.textAlign='center';x.fillText('✨ scratch me ✨',110,70);
 let n=0,dn=0;c.onpointermove=e=>{if(!e.buttons)return;const r=c.getBoundingClientRect();x.globalCompositeOperation='destination-out';x.beginPath();x.arc((e.clientX-r.left)*220/r.width,(e.clientY-r.top)*130/r.height,16,0,7);x.fill();if(++n>45&&!dn){dn=1;c.style.transition='opacity .6s';c.style.opacity=0;confetti(e.clientX,e.clientY,60)}};
 $('#cpn').append(d)});

/* blow out candles with a real breath */
$('#mic').onclick=async()=>{try{const s=await navigator.mediaDevices.getUserMedia({audio:true}),a=new AudioContext(),n=a.createAnalyser();a.createMediaStreamSource(s).connect(n);const d=new Uint8Array(n.fftSize);$('#wish').textContent='Take a deep breath and blow on your mic… 🎤';
 const iv=setInterval(()=>{const c=document.querySelector('.candle:not(.out)');if(!c){clearInterval(iv);s.getTracks().forEach(t=>t.stop());return}n.getByteTimeDomainData(d);let m=0;d.forEach(v=>m+=Math.abs(v-128));if(m/d.length>14)out(c)},250)}catch(e){$('#wish').textContent='Mic not allowed. Tap the flames instead 💖'}};

/* heart cursor trail */
let last=0;addEventListener('pointermove',e=>{if(Date.now()-last<60)return;last=Date.now();const s=document.createElement('span');s.textContent='💕';Object.assign(s.style,{position:'fixed',left:e.clientX+'px',top:e.clientY+'px',pointerEvents:'none',zIndex:80,fontSize:'14px',transition:'all 1s',opacity:1});document.body.append(s);requestAnimationFrame(()=>{s.style.transform=`translateY(-40px) scale(1.6)`;s.style.opacity=0});setTimeout(()=>s.remove(),1000)});
