/* Ceren — 15 October 2026, 00:00 Europe/Istanbul (UTC+03:00) */
(function () {
  'use strict';
  const target = Date.parse('2026-10-15T00:00:00+03:00');
  const pad = n => String(n).padStart(2, '0');
  function initializeCountdown() {
    const root = document.documentElement;
    const overlay = document.getElementById('cerenCountdown');
    if (!overlay || !root.classList.contains('ceren-countdown-pending')) {
      if (overlay) overlay.remove();
      return;
    }
    const parts = ['cdDays','cdHours','cdMinutes','cdSeconds'].map(id => document.getElementById(id));
    let finished = false;
    function unlock() {
      if (finished) return;
      finished = true;
      clearInterval(timer);
      overlay.classList.add('cd-leaving');
      window.setTimeout(function () {
        overlay.remove();
        root.classList.remove('ceren-countdown-pending');
        document.dispatchEvent(new Event('cerenCountdownFinished'));
      }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 900);
    }
    function tick() {
      const remaining = Math.max(0, target - Date.now());
      if (remaining === 0) {
        parts.forEach(el => {if (el) el.textContent = '00';});
        unlock();
        return;
      }
      const seconds = Math.floor(remaining / 1000);
      const values = [
        Math.floor(seconds / 86400),
        Math.floor(seconds % 86400 / 3600),
        Math.floor(seconds % 3600 / 60),
        seconds % 60
      ];
      parts.forEach((el,i) => {if (el) el.textContent = pad(values[i]);});
    }
    const timer = window.setInterval(tick, 250);
    tick();
    document.addEventListener('visibilitychange', () => {if (!document.hidden) tick();});
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCountdown, {once:true});
  } else initializeCountdown();
})();
