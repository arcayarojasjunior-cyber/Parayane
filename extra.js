/* Ramo de rosas amarillas para el último pétalo */
(function () {
  var st = document.createElement('style');
  st.textContent =
    '.bouquet{width:160px;margin:-2px auto 8px;filter:drop-shadow(0 8px 10px rgba(120,80,10,.22))}' +
    '.bouquet svg{width:100%;height:auto;display:block}';
  document.head.appendChild(st);

  function rose(x, y, s) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M-24 -4C-26 -22 -8 -30 6 -27C22 -26 30 -10 26 6C24 22 6 28 -8 26C-22 24 -24 10 -24 -4Z" fill="#F7B900"/>' +
      '<g fill="none" stroke="#D68A00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M-8 -4C-8 -14 8 -16 12 -6C15 4 4 12 -4 8C-10 5 -6 -3 0 -2"/>' +
      '<path d="M-19 4C-15 18 4 24 16 16"/>' +
      '<path d="M-12 -18C-2 -24 14 -22 20 -10"/>' +
      '</g></g>';
  }

  function leaf(x, y, r, s) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ') scale(' + s + ')">' +
      '<path d="M0 0C10 -11 28 -10 38 0C28 10 10 11 0 0Z" fill="#6E9F4F"/>' +
      '<path d="M4 0H34" stroke="#4F7F3B" stroke-width="1.6" stroke-linecap="round"/></g>';
  }

  function bouquetSVG() {
    return '<svg viewBox="0 0 200 240" aria-hidden="true" focusable="false">' +
      leaf(38, 84, 200, 1) + leaf(162, 82, -20, 1) + leaf(70, 30, 235, 1) +
      leaf(132, 30, -55, 1) + leaf(26, 62, 185, .85) + leaf(176, 60, -5, .85) +
      leaf(90, 64, -115, .8) + leaf(112, 64, -65, .8) +
      rose(100, 38, .86) + rose(52, 62, .88) + rose(148, 60, .88) +
      '<path d="M16 100Q100 138 184 100L130 228Q100 238 70 228Z" fill="#F6B3C6" stroke="#E38FAA" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M48 118Q66 170 82 220M152 118Q134 170 118 220" fill="none" stroke="#EC9AB4" stroke-width="2" stroke-linecap="round"/>' +
      '<g fill="#EE93AE"><circle cx="56" cy="138" r="4.5"/><circle cx="144" cy="144" r="4.5"/><circle cx="82" cy="172" r="4"/><circle cx="120" cy="182" r="4"/><circle cx="100" cy="156" r="3.5"/><circle cx="96" cy="212" r="3"/></g>' +
      leaf(40, 116, 150, .9) + leaf(160, 116, 30, .9) +
      rose(58, 98, .92) + rose(142, 98, .92) + rose(100, 88, 1.02) +
      '<g fill="none" stroke="#B0506F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M100 198C84 186 70 194 78 204C84 212 96 204 100 198Z"/>' +
      '<path d="M100 198C116 186 130 194 122 204C116 212 104 204 100 198Z"/>' +
      '<path d="M100 200C97 210 92 216 88 222M100 200C103 210 108 216 112 222"/></g>' +
      '<circle cx="100" cy="199" r="4" fill="#B0506F"/>' +
      '</svg>';
  }

  var emoji = document.getElementById('msgEmoji');
  if (!emoji || typeof window.showMessage !== 'function') return;

  var box = document.createElement('div');
  box.className = 'bouquet';
  box.hidden = true;
  box.setAttribute('aria-hidden', 'true');
  box.innerHTML = bouquetSVG();
  emoji.parentNode.insertBefore(box, emoji);

  var original = window.showMessage;
  window.showMessage = function (i) {
    original(i);
    var last = (i === 3);
    box.hidden = !last;
    emoji.hidden = last;
  };
})();
