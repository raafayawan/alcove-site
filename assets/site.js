// Theme toggle with persistence. Defaults to dark (the app's home turf),
// but honours a stored choice or the OS preference on first load.
(function () {
  var KEY = 'alcove-site-theme';
  var root = document.documentElement;

  function apply(t) {
    root.setAttribute('data-theme', t);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = t === 'light' ? '☽' : '☀'; // moon / sun
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var initial = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  apply(initial);

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.theme-toggle');
    if (!t) return;
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (err) {}
  });
})();
