function initializeCerenIntro() {
  const intro = document.getElementById('cerenIntro');
  if (!intro) return;
  const stages = Array.from(intro.querySelectorAll('.ci-stage'));
  const message = intro.querySelector('#ciTypeText');
  const skip = intro.querySelector('#ciSkip');
  const enter = intro.querySelector('#ciEnter');
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];
  let completed = false;
  let typingTimer;
  const later = (fn, ms) => { const t = window.setTimeout(fn,ms);timers.push(t);return t; };
  const stop = () => {timers.forEach(clearTimeout);clearInterval(typingTimer);};
  intro.hidden = false;
  document.documentElement.classList.add('intro-locked');
  document.body.classList.add('intro-locked');
  function stage(index) {
    stages.forEach((node,i) => {node.classList.toggle('active',i===index);node.classList.toggle('leaving',false);});
    if (index===3) enter.focus({preventScroll:true});
  }
  function typeLine(str, duration) {
    message.textContent='';
    const chars=Array.from(str);let idx=0;
    typingTimer=window.setInterval(() => {if(idx>=chars.length){clearInterval(typingTimer);return;}message.textContent+=chars[idx++];},Math.max(30,duration/chars.length));
  }
  function finish() {
    if (completed) return;
    completed=true;stop();
    intro.classList.add('opening');
    later(()=>{intro.hidden=true;intro.remove();document.documentElement.classList.remove('intro-locked');document.body.classList.remove('intro-locked');},reduced?260:1450);
  }
  skip.addEventListener('click',finish);
  enter.addEventListener('click',finish);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!completed)finish();});
  for(let i=0;i<24;i++) {
    const dot=document.createElement('i');dot.className='ci-part';
    dot.style.setProperty('--px',((i*47)%97+1)+'%');dot.style.setProperty('--py',((i*31+17)%89+4)+'%');
    dot.style.setProperty('--pd',(3+i%5)+'s');dot.style.setProperty('--pl',(-i*.37)+'s');
    intro.querySelector('.ci-particles').appendChild(dot);
  }
  if(reduced){stage(3);return;}
  stage(0);
  typeLine('Bazı insanlar dünyaya sadece bir kez gelir…',2350);
  later(()=>stage(1),2800);
  later(()=>stage(2),5600);
  later(()=>stage(3),8300);
}
function beginIntroWhenUnlocked() {
  if (document.documentElement.classList.contains('ceren-countdown-pending')) {
    document.addEventListener('cerenCountdownFinished', initializeCerenIntro, {once:true});
  } else {
    initializeCerenIntro();
  }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", beginIntroWhenUnlocked, {once:true}); else beginIntroWhenUnlocked();
