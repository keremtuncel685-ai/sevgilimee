/*
  CEREN — 99 dilde "Seni seviyorum".
  Tamamen yerel JavaScript: kutuphane, sunucu veya izin gerekmez.
  Cok alfabeli metinler kullanilir; cevirilerde konusmacinin cinsiyetine
  gore degisebilen diller icin sevgiliye hitap eden yaygin bicimler secilmistir.
*/
function initializeLove99() {
  'use strict';
  const messages = [
    ['Türkçe', 'Seni seviyorum'],
    ['İngilizce', 'I love you'],
    ['Fransızca', 'Je t’aime'],
    ['İspanyolca', 'Te amo'],
    ['İtalyanca', 'Ti amo'],
    ['Almanca', 'Ich liebe dich'],
    ['Portekizce', 'Eu te amo'],
    ['Hollandaca', 'Ik hou van jou'],
    ['İsveççe', 'Jag älskar dig'],
    ['Norveççe', 'Jeg elsker deg'],
    ['Danca', 'Jeg elsker dig'],
    ['Fince', 'Rakastan sinua'],
    ['İzlandaca', 'Ég elska þig'],
    ['İrlandaca', 'Tá grá agam duit'],
    ['İskoç Galcesi', 'Tha gaol agam ort'],
    ['Galce', 'Dw i’n dy garu di'],
    ['Lehçe', 'Kocham cię'],
    ['Çekçe', 'Miluji tě'],
    ['Slovakça', 'Ľúbim ťa'],
    ['Slovence', 'Ljubim te'],
    ['Hırvatça', 'Volim te'],
    ['Boşnakça', 'Volim te'],
    ['Sırpça', 'Волим те'],
    ['Karadağca', 'Volim te'],
    ['Makedonca', 'Те сакам'],
    ['Bulgarca', 'Обичам те'],
    ['Rumence', 'Te iubesc'],
    ['Macarca', 'Szeretlek'],
    ['Yunanca', 'Σ’ αγαπώ'],
    ['Arnavutça', 'Të dua'],
    ['Rusça', 'Я тебя люблю'],
    ['Ukraynaca', 'Я тебе кохаю'],
    ['Belarusça', 'Я цябе кахаю'],
    ['Litvanca', 'Aš tave myliu'],
    ['Letonca', 'Es tevi mīlu'],
    ['Estonca', 'Ma armastan sind'],
    ['Maltaca', 'Inħobbok'],
    ['Latince', 'Te amo'],
    ['Esperanto', 'Mi amas vin'],
    ['Katalanca', 'T’estimo'],
    ['Baskça', 'Maite zaitut'],
    ['Galiçyaca', 'Quérote'],
    ['Lüksemburgca', 'Ech hunn dech gär'],
    ['Faroece', 'Eg elski teg'],
    ['Yidiş', 'איך האָב דיך ליב'],
    ['İbranice', 'אני אוהב אותך'],
    ['Arapça', 'أحبك'],
    ['Farsça', 'دوستت دارم'],
    ['Urduca', 'میں تم سے محبت کرتا ہوں'],
    ['Hintçe', 'मैं तुमसे प्यार करता हूँ'],
    ['Bengalce', 'আমি তোমাকে ভালোবাসি'],
    ['Pencapça', 'ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ'],
    ['Guceratça', 'હું તને પ્રેમ કરું છું'],
    ['Marathice', 'मी तुझ्यावर प्रेम करतो'],
    ['Nepalce', 'म तिमीलाई माया गर्छु'],
    ['Sanskritçe', 'त्वां प्रेम करोमि'],
    ['Tamilce', 'நான் உன்னை காதலிக்கிறேன்'],
    ['Teluguca', 'నేను నిన్ను ప్రేమిస్తున్నాను'],
    ['Kannadaca', 'ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ'],
    ['Malayalamca', 'ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു'],
    ['Sinhala', 'මම ඔයාට ආදරෙයි'],
    ['Tayca', 'ฉันรักเธอ'],
    ['Laoca', 'ຂ້ອຍຮັກເຈົ້າ'],
    ['Kmerce', 'ខ្ញុំស្រឡាញ់អ្នក'],
    ['Birmanca', 'မင်းကိုချစ်တယ်'],
    ['Vietnamca', 'Anh yêu em'],
    ['Endonezce', 'Aku cinta kamu'],
    ['Malayca', 'Saya cintakan awak'],
    ['Filipince', 'Mahal kita'],
    ['Cava dili', 'Aku tresna karo kowe'],
    ['Sundaca', 'Abdi bogoh ka anjeun'],
    ['Çince (Mandarin)', '我爱你'],
    ['Kantonca', '我愛你'],
    ['Japonca', '愛してる'],
    ['Korece', '사랑해'],
    ['Moğolca', 'Би чамд хайртай'],
    ['Tibetçe', 'ང་ཁྱེད་ལ་དགའ།'],
    ['Kazakça', 'Мен сені сүйемін'],
    ['Kırgızca', 'Мен сени сүйөм'],
    ['Özbekçe', 'Men seni sevaman'],
    ['Türkmence', 'Men seni söýýärin'],
    ['Azerbaycanca', 'Mən səni sevirəm'],
    ['Uygurca', 'مەن سېنى سۆيىمەن'],
    ['Tatarca', 'Мин сине яратам'],
    ['Gürcüce', 'მიყვარხარ'],
    ['Ermenice', 'Ես քեզ սիրում եմ'],
    ['Kürtçe (Kurmancî)', 'Ez ji te hez dikim'],
    ['Svahili', 'Nakupenda'],
    ['Zuluca', 'Ngiyakuthanda'],
    ['Xhosaca', 'Ndiyakuthanda'],
    ['Afrikaans', 'Ek is lief vir jou'],
    ['Somalice', 'Waan ku jeclahay'],
    ['Amharca', 'እወድሻለሁ'],
    ['Yoruba', 'Mo nífẹ̀ẹ́ rẹ'],
    ['İgbo', 'A hụrụ m gị n’anya'],
    ['Hausaca', 'Ina son ki'],
    ['Malgaşça', 'Tiako ianao'],
    ['Hawaiice', 'Aloha wau iā ʻoe'],
    ['Maorice', 'Aroha ahau ki a koe'],
  ];

  const root = document.querySelector('#love99');
  if (!root) return;
  const wall = root.querySelector('#love99Wall');
  const language = root.querySelector('#love99Language');
  const current = root.querySelector('#love99Current');
  const count = root.querySelector('#love99Count');
  const bar = root.querySelector('#love99Bar');
  const button = root.querySelector('#love99Button');
  const path = root.querySelector('#love99Outline');
  const svg = root.querySelector('#love99Svg');
  const initialC = root.querySelector('#love99C');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = window.matchMedia('(max-width: 720px)');
  let runToken = 0;
  let started = false;
  let complete = false;
  let nodes = [];

  if (messages.length !== 99) console.warn('99 dil bekleniyor, bulunan:', messages.length);
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const graphemes = (str) => {
    if (typeof Intl.Segmenter === 'function') {
      return [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(str)].map(s => s.segment);
    }
    return Array.from(str);
  };

  function positionWall() {
    const cols = mobile.matches ? 5 : 9;
    const rows = Math.ceil(messages.length / cols);
    nodes.forEach((el, i) => {
      if (root.classList.contains('is-morphing')) return;
      const col = i % cols;
      const row = Math.floor(i / cols);
      // Dizgi duzgun fakat cetvelle cizilmis gibi durmasin.
      const dx = Math.sin(i * 7.13) * (mobile.matches ? 1.5 : .9);
      const dy = Math.cos(i * 4.37) * .55;
      el.style.left = `${4 + ((col + .5) / cols) * 92 + dx}%`;
      el.style.top = `${12 + ((row + .5) / rows) * 74 + dy}%`;
      el.style.setProperty('--heart-rotate', '0deg');
      el.style.transitionDelay = '0ms';
    });
  }

  function prepare() {
    wall.replaceChildren();
    nodes = messages.map((entry) => {
      const span = document.createElement('span');
      span.className = 'love99-word';
      span.textContent = entry[1];
      span.setAttribute('aria-hidden', 'true');
      wall.appendChild(span);
      return span;
    });
    root.classList.remove('is-morphing', 'is-complete');
    positionWall();
    language.textContent = '99 DİLDE TEK CÜMLE';
    current.textContent = '';
    count.textContent = '00';
    bar.style.width = '0%';
    initialC.textContent = '';
    button.textContent = 'KALBİ GÖSTER →';
    complete = false;
  }

  // Kalp tek bir cizgiyle cizilmiyor. 99 metin, 4 hafif farkli
  // boyuttaki kalp halkasina (25+25+25+24) yerlestiriliyor.
  // Kalbin merkezi bos, C harfi bu boslukta duruyor.
  function convertToHeart() {
    const rootRect = root.getBoundingClientRect();
    const rect = svg.getBoundingClientRect();
    const scale = Math.min(rect.width / 1000, rect.height / 900);
    const offX = (rect.width - 1000 * scale) / 2;
    const offY = (rect.height - 900 * scale) / 2;
    const length = path.getTotalLength();
    const ringCount = 3; // 99 yazıdan oluşan üç ince kalp halkası.
    const counts = [33, 33, 33];
    const ringScales = [.82, .94, 1.06];
    const svgCenterX = 500;
    const svgCenterY = 490;
    let wordIndex = 0;
    for (let ring = 0; ring < ringCount; ring++) {
      const amount = counts[ring];
      for (let index = 0; index < amount; index++) {
        const el = nodes[wordIndex];
        // Az kaydirilmis her halka kelimeleri cakistirmadan kalbin cevresine dizer.
        const ratio = ((index + (ring % 2 ? .42 : 0)) / amount + .004) % 1;
        const distance = ratio * length;
        const point = path.getPointAtLength(distance);
        const prev = path.getPointAtLength(Math.max(0, distance - 3));
        const next = path.getPointAtLength(Math.min(length, distance + 3));
        let rotate = Math.atan2(next.y - prev.y, next.x - prev.x) * 180 / Math.PI;
        if (rotate > 90) rotate -= 180;
        if (rotate < -90) rotate += 180;
        const factor = ringScales[ring];
        const x = svgCenterX + (point.x - svgCenterX) * factor;
        const y = svgCenterY + (point.y - svgCenterY) * factor;
        el.classList.add('is-visible');
        el.style.left = `${rect.left - rootRect.left + offX + x * scale}px`;
        el.style.top = `${rect.top - rootRect.top + offY + y * scale}px`;
        el.style.setProperty('--heart-rotate', `${rotate.toFixed(1)}deg`);
        el.style.setProperty('--heart-word-scale', mobile.matches ? '.88' : '1');
        el.style.transitionDelay = `${wordIndex * 9}ms`;
        wordIndex++;
      }
    }
  }

  async function finish(token) {
    if (token !== runToken) return;
    count.textContent = '99';
    bar.style.width = '100%';
    root.classList.add('is-morphing');
    convertToHeart();
    await wait(reduceMotion ? 30 : 3500);
    if (token !== runToken) return;
    root.classList.add('is-complete');
    initialC.textContent = 'C'; // Tek harflik beyaz daktilo finali.
    current.textContent = '';
    language.textContent = '';
    button.textContent = 'YENİDEN İZLE ↻';
    complete = true;
  }

  async function run() {
    started = true;
    const token = ++runToken;
    prepare();
    if (reduceMotion) {
      await finish(token);
      return;
    }
    // 99 cümle x 60ms = yaklaşık 5.94 saniye + 60ms final.
    // iPhone Safari için her kelimede uzun harf-beklemeleri yerine
    // iki kısa daktilo adımı kullanılıyor.
    const PER_LANGUAGE_MS = 60;
    for (let i = 0; i < messages.length; i++) {
      if (token !== runToken) return;
      const [lang, phrase] = messages[i];
      const letters = graphemes(phrase);
      language.textContent = lang;
      count.textContent = String(i + 1).padStart(2, '0');
      current.textContent = letters.slice(0, Math.ceil(letters.length / 2)).join('');
      await wait(24);
      if (token !== runToken) return;
      current.textContent = phrase;
      nodes[i].classList.add('is-visible');
      bar.style.width = `${((i + 1) / messages.length) * 100}%`;
      await wait(PER_LANGUAGE_MS - 24);
    }
    if (token !== runToken) return;
    await wait(60);
    await finish(token);
  }

  button.addEventListener('click', () => {
    if (complete) {
      run();
    } else {
      ++runToken;
      if (!started) started = true;
      nodes.forEach(el => el.classList.add('is-visible'));
      finish(runToken);
    }
  });

  // Kullanici bolume gelince otomatik baslar: sayfanin diger kisimlarini yavaslatmaz.
  prepare();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting) && !started) {
        observer.disconnect();
        run();
      }
    }, { threshold: .35 });
    observer.observe(root);
  } else {
    run();
  }
  window.addEventListener('resize', () => {
    if (root.classList.contains('is-morphing')) convertToHeart();
    else positionWall();
  }, { passive: true });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeLove99, {once:true}); else initializeLove99();
