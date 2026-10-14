/* ============================================================
   CEREN — CHAPTER 22
   KİŞİSELLEŞTİRME ALANI
   Fotoğrafları index.html ile aynı klasöre koyup aşağıdaki isimleri kullan.
   Doğum günü mektubunu ve 22 nedeni dilediğin gibi değiştirebilirsin.
   ============================================================ */
const SITE = {
  name: "Ceren",
  relationshipSince: "2026-05-25",
  birthday: "2026-10-15",
  heroPhoto: "foto1.jpg", // Büyük ara bölüm fotoğrafı; foto1.jpg kullanılıyor
  song: "sarkimiz.mp3", // MP3 dosyası eklemen yeterli
  photos: [
    { file: "foto1.jpg", title: "Biz, yan yana", note: "İlk favorilerimden" },
    { file: "foto2.jpg", title: "Güzel bir gün", note: "Gülüşün hep böyle kalsın" },
    { file: "foto3.jpg", title: "Küçük mutluluklar", note: "Bize dair bir an" },
    { file: "foto4.jpg", title: "Sen gülünce", note: "Dünyam biraz daha güzel" },
    { file: "foto5.jpg", title: "En sevdiğim yer", note: "Yanında olmak" },
    { file: "foto6.jpg", title: "Dönüp bakınca", note: "İyi ki diyorum" },
    { file: "foto7.jpg", title: "Birlikte", note: "Daha nice anılara" },
    { file: "foto8.jpg", title: "Ve daha niceleri", note: "Hikâyemiz devam ediyor" }
  ],
  reasons: [
    "Gülüşün en sıradan günümü güzelleştiriyor.",
    "Yanındayken her şey daha huzurlu.",
    "Sesini duymak bile iyi geliyor.",
    "Gözlerinin içi güldüğünde dünya duruyor.",
    "Seninle kendim olabiliyorum.",
    "Küçücük şeyleri bile özel yapıyorsun.",
    "Birlikte hayal kurmak çok güzel.",
    "Güzel kalbin her seferinde beni etkiliyor.",
    "En sevdiğim tesadüfümsün.",
    "Sana sarılmak, eve dönmek gibi.",
    "Kahkahaların günümün en güzel sesi.",
    "Bana sevgiyi başka türlü hissettirdin.",
    "Seninle zamanın nasıl geçtiğini anlamıyorum.",
    "En çok seninle gülmek istiyorum.",
    "Her halinle çok güzelsin.",
    "Özlediğimde aklıma ilk sen geliyorsun.",
    "Yan yana susmak bile seninle güzel.",
    "Bana umut veren bir yanın var.",
    "En küçük anılarımız bile kıymetli.",
    "Birlikte geçecek yarınları merak ediyorum.",
    "Hayatımda olmanı çok seviyorum.",
    "Çünkü sen, sensin. Ve ben sana âşığım."
  ],
  letter: [
    "Bugün 22 yaşına giriyorsun. Belki bu satırları okurken yüzünde küçücük bir tebessüm olacak. Benim en çok istediğim şey de tam olarak bu: senin mutlu olman.",
    "25 Mayıs’tan beri… Kimi zaman kısacık, kimi zaman içine koca bir hikâye sığacak kadar uzun. Seninle geçen bu zamanda öğrendiğim bir şey var: Bazı insanlar hayatımıza öyle güzel dokunur ki, sıradan bir gün bile anlam kazanır.",
    "Biliyorum, bazen işlerimiz ve hayatın telaşı yüzünden istediğimiz kadar yan yana olamıyoruz. Ama günün sonunda aklımdan geçen yine sensin. Birlikte güldüğümüz anları, konuşmalarımızı, daha yaşayacağımız şeyleri düşünüyorum.",
    "Yeni yaşında gönlünden geçen bütün güzellikler seni bulsun. Kendini hiçbir zaman yalnız hissetme. Mutlu olduğunda o sevincini paylaşmak, yorulduğunda yanında olmak, güzel günlerinde seninle gülmek istiyorum.",
    "İyi ki doğdun sevgilim. İyi ki yollarımız kesişmiş, iyi ki 25 Mayıs’tan beri bu hikâyeyi beraber yazıyoruz. Daha anlatacak çok şeyimiz var. Seni çok seviyorum. ♡"
  ]
};

/* ============================================================
   UYGULAMA — BURADAN SONRASINI DEĞİŞTİRMENE GEREK YOK
   ============================================================ */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function tryImage(src, onSuccess) {
  const img = new Image();
  img.onload = () => onSuccess(src);
  img.onerror = () => {};
  img.src = src;
}

function setupPhotos() {
  const gradients = [
    'linear-gradient(145deg,#bd8c92,#dfbcb1 58%,#85566a)',
    'linear-gradient(145deg,#8d6472,#e7b8ae 58%,#d29aa7)',
    'linear-gradient(145deg,#dbc0b2,#a36b7d)',
    'linear-gradient(145deg,#cc9e99,#784558)',
    'linear-gradient(145deg,#aa7585,#e7c5b9)',
    'linear-gradient(145deg,#dac1b4,#865468)',
    'linear-gradient(145deg,#81505e,#e1b2a8)',
    'linear-gradient(145deg,#cb9ca5,#845564)'
  ];
  const gallery = $('#gallery');
  SITE.photos.forEach((photo, i) => {
    const card = document.createElement('button');
    card.className = 'gallery-card reveal';
    card.type = 'button';
    card.setAttribute('aria-label', `${i + 1}. fotoğraf: ${photo.title}`);
    const visual = document.createElement('span');
    visual.className = 'gallery-image';
    visual.style.background = gradients[i % gradients.length];
    const missing = document.createElement('span');
    missing.className = 'photo-missing';
    missing.textContent = String(i + 1).padStart(2,'0');
    visual.appendChild(missing);
    const shade = document.createElement('span');
    shade.className = 'gallery-shade';
    const text = document.createElement('span');
    text.className = 'gallery-text';
    const num = document.createElement('span');
    num.className = 'gallery-count';
    num.textContent = `MEMORY · ${String(i + 1).padStart(2, '0')}`;
    const title = document.createElement('span');
    title.className = 'gallery-title';
    title.textContent = photo.title;
    text.append(num, title);
    card.append(visual, shade, text);
    gallery.appendChild(card);
    tryImage(photo.file, (src) => {
      visual.style.background = `url("${src}") center / cover no-repeat`;
      missing.remove();
      card.addEventListener('click', () => openPhoto(src, photo));
    });
    card.addEventListener('click', () => {
      if (!visual.contains(missing)) return;
      // Fotoğraf eklenmemişse sessizce önizleme modunda kal.
      card.animate([{ transform:'scale(1)' },{ transform:'scale(.985)' },{ transform:'scale(1)' }],{ duration:280 });
    });
  });
  tryImage(SITE.heroPhoto, (src) => {
    const cover = $('#interludePhoto');
    cover.style.backgroundImage = `url("${src}")`;
    $('.interlude-placeholder', cover)?.remove();
  });
}

let openedReasons = new Set();
function setupReasons() {
  const grid = $('#reasonsGrid');
  SITE.reasons.slice(0,22).forEach((reason,i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'reason-card reveal';
    card.setAttribute('aria-pressed','false');
    card.setAttribute('aria-label',`${i + 1}. sevme nedeni, açmak için dokun`);
    const number = document.createElement('span');
    number.className = 'reason-number'; number.textContent = String(i + 1).padStart(2,'0');
    // Her kartın kendi fotoğrafı: neden01.jpg ... neden22.jpg
    const photoBox = document.createElement('span');
    photoBox.className = 'reason-photo';
    const photo = document.createElement('img');
    photo.src = `neden${String(i + 1).padStart(2,'0')}.jpg`;
    photo.alt = `${i + 1}. neden için fotoğraf`;
    photo.loading = 'lazy';
    photo.decoding = 'async';
    const placeholder = document.createElement('span');
    placeholder.className = 'reason-photo-placeholder';
    placeholder.textContent = `FOTOĞRAF ${String(i + 1).padStart(2,'0')}`;
    photo.onload = () => { placeholder.hidden = true; };
    photo.onerror = () => { photo.hidden = true; };
    photoBox.append(photo, placeholder);

    const prompt = document.createElement('span'); prompt.className = 'reason-prompt';
    prompt.textContent = 'BİR NEDEN GÖR';
    const plus = document.createElement('span'); plus.className = 'reason-plus'; plus.textContent = '+';
    prompt.appendChild(plus);
    const answer = document.createElement('span'); answer.className = 'reason-answer'; answer.textContent = reason;
    card.append(number, photoBox, prompt, answer);
    card.addEventListener('click', () => {
      const active = card.classList.toggle('is-revealed');
      card.setAttribute('aria-pressed', String(active));
      active ? openedReasons.add(i) : openedReasons.delete(i);
      $('#revealCount').textContent = `${openedReasons.size} / 22 açıldı`;
      if(openedReasons.size === 22) burstConfetti(100);
    });
    grid.appendChild(card);
  });
}

let previouslyFocused = null;
function openModal(id) {
  previouslyFocused = document.activeElement;
  const modal = $(`#${id}`);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  $('.modal-close',modal)?.focus();
}
function closeModal(id) {
  const modal = $(`#${id}`);
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  previouslyFocused?.focus();
}
function setupLetter() {
  const body = $('#letterBody');
  SITE.letter.forEach(paragraph => {
    const p = document.createElement('p'); p.textContent = paragraph; body.appendChild(p);
  });
  $('#openLetter').addEventListener('click', () => openModal('letterModal'));
  $('#closeLetter').addEventListener('click', () => closeModal('letterModal'));
  $$('[data-close-modal]').forEach(item => item.addEventListener('click', () => closeModal('letterModal')));
  $('#closePhoto').addEventListener('click', () => closeModal('photoModal'));
  $$('[data-close-photo]').forEach(item => item.addEventListener('click', () => closeModal('photoModal')));
  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
      if($('#letterModal').classList.contains('is-open')) closeModal('letterModal');
      if($('#photoModal').classList.contains('is-open')) closeModal('photoModal');
    }
    if(event.key === 'Tab') {
      const active = $('.modal.is-open'); if(!active) return;
      const items = $$('button:not([disabled]),a[href]',active);
      if(!items.length) return;
      if(event.shiftKey && document.activeElement === items[0]) { event.preventDefault();items.at(-1).focus(); }
      if(!event.shiftKey && document.activeElement === items.at(-1)) { event.preventDefault();items[0].focus(); }
    }
  });
}
function openPhoto(src, photo) {
  $('#expandedPhoto').src = src;
  $('#expandedPhoto').alt = photo.title;
  $('#expandedCaption').textContent = `${photo.title} — ${photo.note}`;
  openModal('photoModal');
}

function setupMusic() {
  const audio = $('#backgroundMusic');
  audio.src = SITE.song;
  audio.volume = .42;
  const button = $('#soundToggle');
  button.addEventListener('click', async () => {
    if(!audio.paused) { audio.pause(); setSound(false); return; }
    try { await audio.play(); setSound(true); }
    catch { setSound(false); $('#soundText').textContent = 'MP3 ekle'; }
  });
  function setSound(on) {
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label',on?'Müziği durdur':'Müziği başlat');
    $('#soundText').textContent = on ? 'Müziği kapat' : 'Müziği aç';
    $('#soundSymbol').textContent = on ? '♫' : '♪';
  }
  audio.addEventListener('ended',()=>setSound(false));
}

// Hafif, kütüphane gerektirmeyen konfeti. Retina ekranlara uyumlu.
const canvas = $('#confetti');
const ctx = canvas.getContext('2d');
let particles = [], animationRunning = false;
const palette = ['#e7a3b1','#fff4e5','#d3a08c','#f5c4cf','#dcb7b4','#a26c86'];
function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
function burstConfetti(amount=180) {
  if(reducedMotion) return;
  resizeCanvas();
  const w = window.innerWidth, h = window.innerHeight;
  for(let i=0; i<amount; i++) {
    const angle = -Math.PI * Math.random();
    const speed = 4 + Math.random()*10;
    particles.push({x:w/2+(Math.random()-.5)*90,y:h*.61,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed-2,
      gravity:.14+Math.random()*.13,drag:.994,rot:Math.random()*6,spin:(Math.random()-.5)*.25,
      size:4+Math.random()*8,color:palette[Math.floor(Math.random()*palette.length)],life:0,ttl:110+Math.random()*70});
  }
  if(!animationRunning) { animationRunning=true;requestAnimationFrame(drawConfetti); }
}
function drawConfetti() {
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  particles = particles.filter(p=>p.life<p.ttl && p.y < innerHeight+30);
  for(const p of particles){
    p.x+=p.vx;p.y+=p.vy;p.vx*=p.drag;p.vy+=p.gravity;p.rot+=p.spin;p.life++;
    ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);
    ctx.globalAlpha = Math.min(1,(p.ttl-p.life)/22);
    ctx.fillStyle=p.color;ctx.fillRect(-p.size/2,-p.size/3,p.size,p.size*.66);ctx.restore();
  }
  if(particles.length) requestAnimationFrame(drawConfetti);
  else { animationRunning=false;ctx.clearRect(0,0,innerWidth,innerHeight); }
}
function setupWishes() {
  const btn = $('#blowCandles');
  btn.addEventListener('click', () => {
    $('#cakeScene').classList.add('blown');
    $('#wishResult').textContent = 'Dileğin gerçek olsun sevgilim. İyi ki doğdun! ♡';
    btn.textContent = 'Yine kutlayalım ↗';
    burstConfetti(220);
  });
  $('#celebrateAgain').addEventListener('click', () => {
    burstConfetti(260);
    if(!reducedMotion) window.scrollTo({top:0,behavior:'smooth'});
  });
}
function setupScrollEffects() {
  // Fail-open: görünürlük için JS'ye bağımlılık yok. Observer varsa yalnızca
  // ekrana henüz gelmemiş öğelere yumuşak giriş animasyonu uygula.
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px 80px 0px' });
    reveals.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top > window.innerHeight + 35) element.classList.add('reveal-pending');
      revealObserver.observe(element);
    });
  } else {
    reveals.forEach(element => element.classList.add('is-visible'));
  }
  const progress = $('#readingProgress');
  let scrollTicking=false;
  const update = () => {
    const max = document.documentElement.scrollHeight-innerHeight;
    progress.style.width = `${max>0 ? scrollY/max*100 : 0}%`;
    scrollTicking=false;
  };
  addEventListener('scroll',()=>{
    if(!scrollTicking){requestAnimationFrame(update);scrollTicking=true;}
  },{passive:true});
  update();
  if(matchMedia('(pointer:fine)').matches && !reducedMotion) {
    const glow = $('#cursorGlow');
    document.addEventListener('pointermove', e => {
      glow.style.left=`${e.clientX}px`;
      glow.style.top=`${e.clientY}px`;
      glow.style.opacity='1';
    },{passive:true});
    document.addEventListener('pointerleave',()=>glow.style.opacity='0');
  }
}

setupPhotos();
setupReasons();
setupLetter();
setupMusic();
setupWishes();
setupScrollEffects();
window.addEventListener('resize',resizeCanvas,{passive:true});


/* ============================================================
   DOKUN / TIKLA: DOĞAL BEYAZ KALP 🤍
   iPhone Safari: native Apple Color Emoji.
   Windows/Android: cihazın kendi beyaz kalp emojisi.
   Pointer Events olan tarayıcılarda tek olay dinlenir;
   eski Safari için touchstart / mousedown yedeği vardır.
   ============================================================ */
function setupTapHearts() {
  const layer = document.getElementById('touchHearts');
  if (!layer) return;
  const maxHearts = 28;
  const heartDuration = reducedMotion ? 450 : 1100;
  let lastPointerTime = 0;

  function showHeart(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    const heart = document.createElement('span');
    heart.className = 'touch-heart';
    heart.textContent = '🤍'; // Gerçek Unicode emoji; iOS Safari'de iOS stilinde.
    heart.setAttribute('aria-hidden', 'true');
    heart.style.left = `${Math.max(19, Math.min(window.innerWidth - 19, x))}px`;
    heart.style.top = `${Math.max(20, Math.min(window.innerHeight - 20, y))}px`;
    heart.style.setProperty('--heart-size', `${33 + Math.floor(Math.random() * 9)}px`);
    const drift = Math.round((Math.random() - .5) * 40);
    heart.style.setProperty('--heart-drift', `${drift}px`);
    heart.style.setProperty('--heart-drift-half', `${Math.round(drift * .45)}px`);
    layer.appendChild(heart);

    // Çok hızlı dokunmalarda bile belleği şişirmeden akıcı çalışır.
    while (layer.childElementCount > maxHearts) layer.firstElementChild.remove();
    let removed = false;
    function remove() {
      if (removed) return;
      removed = true;
      heart.remove();
    }
    heart.addEventListener('animationend', remove, { once: true });
    window.setTimeout(remove, heartDuration + 180); // Safari için güvenlik.
  }

  if ('PointerEvent' in window) {
    document.addEventListener('pointerdown', (event) => {
      // Mac/Windows: sol tık; iPhone: parmak. Sağ tık / kalem silgisi hariç.
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (event.pointerType === 'pen' && event.button !== 0) return;
      lastPointerTime = Date.now();
      showHeart(event.clientX, event.clientY);
    }, { passive: true });
  } else {
    // Eski iOS Safari için çift tetiklemeyen dokunma / tıklama yedeği.
    document.addEventListener('touchstart', (event) => {
      lastPointerTime = Date.now();
      for (const touch of event.changedTouches) showHeart(touch.clientX, touch.clientY);
    }, { passive: true });
    document.addEventListener('mousedown', (event) => {
      if (event.button !== 0 || Date.now() - lastPointerTime < 700) return;
      showHeart(event.clientX, event.clientY);
    }, { passive: true });
  }

  // Klavye ile Enter/Space tıklaması da kalpsiz kalmasın.
  document.addEventListener('click', (event) => {
    if (event.detail !== 0) return; // Fiziksel dokunma/tıklamayı ikiye katlama.
    const rect = event.target.getBoundingClientRect();
    showHeart(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, { passive: true });
}

setupTapHearts();
