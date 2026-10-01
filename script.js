// DATA SELURUH PRODUK SESUAI FOLDER ASET
const productsData = [
  // --- GAME ---
  { id: 1, name: "Free Fire", category: "game", image: "assets/game/freefire.png" },
  { id: 2, name: "Mobile Legends", category: "game", image: "assets/game/mobile-legends.png" },
  { id: 3, name: "PUBG Mobile", category: "game", image: "assets/game/pubg-mobile.png" },
  { id: 4, name: "CODM", category: "game", image: "assets/game/codm.png" },
  { id: 5, name: "Valorant", category: "game", image: "assets/game/valorant.png" },
  { id: 6, name: "Genshin Impact", category: "game", image: "assets/game/genshin.png" },
  { id: 7, name: "eFootball", category: "game", image: "assets/game/efootball.png" },
  { id: 8, name: "Honkai Star Rail", category: "game", image: "assets/game/honkai-star-rail.png" },
  { id: 9, name: "Arena of Valor", category: "game", image: "assets/game/arena-of-valor.png" },
  { id: 10, name: "Point Blank", category: "game", image: "assets/game/point-blank.png" },
  { id: 11, name: "League of Legends", category: "game", image: "assets/game/league-of-legends.png" },
  { id: 12, name: "FIFA Mobile", category: "game", image: "assets/game/fifa-mobile.png" },
  { id: 13, name: "Sausage Man", category: "game", image: "assets/game/sausage-man.png" },
  { id: 14, name: "Ragnarok Origin", category: "game", image: "assets/game/ragnarok-origin.png" },
  { id: 15, name: "Clash of Clans", category: "game", image: "assets/game/clash-of-clans.png" },
  { id: 16, name: "Clash Royale", category: "game", image: "assets/game/clash-royale.png" },
  { id: 17, name: "Stumble Guys", category: "game", image: "assets/game/stumble-guys.png" },
  { id: 18, name: "Brawl Stars", category: "game", image: "assets/game/brawl-stars.png" },
  { id: 19, name: "Identity V", category: "game", image: "assets/game/identity-v.png" },
  { id: 20, name: "Speed Drifters", category: "game", image: "assets/game/speed-drifters.png" },

  // --- PULSA ---
  { id: 21, name: "Telkomsel", category: "pulsa", image: "assets/pulsa/telkomsel.png" },
  { id: 22, name: "Indosat", category: "pulsa", image: "assets/pulsa/indosat.png" },
  { id: 23, name: "XL Axiata", category: "pulsa", image: "assets/pulsa/xl.png" },
  { id: 24, name: "AXIS", category: "pulsa", image: "assets/pulsa/axis.png" },
  { id: 25, name: "Tri", category: "pulsa", image: "assets/pulsa/tri.png" },
  { id: 26, name: "Smartfren", category: "pulsa", image: "assets/pulsa/smartfren.png" },
  { id: 27, name: "by.U", category: "pulsa", image: "assets/pulsa/byu.png" },
  { id: 28, name: "Telkomsel Transfer", category: "pulsa", image: "assets/pulsa/telkomsel-transfer.png" },
  { id: 29, name: "Indosat Transfer", category: "pulsa", image: "assets/pulsa/indosat-transfer.png" },
  { id: 30, name: "XL Transfer", category: "pulsa", image: "assets/pulsa/xl-transfer.png" },
  { id: 31, name: "AXIS Transfer", category: "pulsa", image: "assets/pulsa/axis-transfer.png" },
  { id: 32, name: "Tri Transfer", category: "pulsa", image: "assets/pulsa/tri-transfer.png" },
  { id: 33, name: "Smartfren Transfer", category: "pulsa", image: "assets/pulsa/smartfren-transfer.png" },
  { id: 34, name: "Paket Data Telkomsel", category: "pulsa", image: "assets/pulsa/paket-data-telkomsel.png" },
  { id: 35, name: "Paket Data Indosat", category: "pulsa", image: "assets/pulsa/paket-data-indosat.png" },
  { id: 36, name: "Paket Data XL", category: "pulsa", image: "assets/pulsa/paket-data-xl.png" },
  { id: 37, name: "Paket Data AXIS", category: "pulsa", image: "assets/pulsa/paket-data-axis.png" },
  { id: 38, name: "Paket Data Tri", category: "pulsa", image: "assets/pulsa/paket-data-tri.png" },
  { id: 39, name: "Paket Data Smartfren", category: "pulsa", image: "assets/pulsa/paket-data-smartfren.png" },
  { id: 40, name: "Masa Aktif", category: "pulsa", image: "assets/pulsa/masa-aktif.png" },

  // --- EWALLET ---
  { id: 41, name: "DANA", category: "ewallet", image: "assets/ewallet/dana.png" },
  { id: 42, name: "OVO", category: "ewallet", image: "assets/ewallet/ovo.png" },
  { id: 43, name: "GoPay", category: "ewallet", image: "assets/ewallet/gopay.png" },
  { id: 44, name: "ShopeePay", category: "ewallet", image: "assets/ewallet/shopeepay.png" },
  { id: 45, name: "LinkAja", category: "ewallet", image: "assets/ewallet/linkaja.png" },
  { id: 46, name: "i.saku", category: "ewallet", image: "assets/ewallet/isaku.png" },
  { id: 47, name: "Maxim Driver", category: "ewallet", image: "assets/ewallet/maxim-driver.png" },
  { id: 48, name: "Maxim Passenger", category: "ewallet", image: "assets/ewallet/maxim-passenger.png" },
  { id: 49, name: "Gojek Driver", category: "ewallet", image: "assets/ewallet/gojek-driver.png" },
  { id: 50, name: "Grab Driver", category: "ewallet", image: "assets/ewallet/grab-driver.png" },
  { id: 51, name: "KasPro", category: "ewallet", image: "assets/ewallet/kaspro.png" },
  { id: 52, name: "DOKU", category: "ewallet", image: "assets/ewallet/doku.png" },
  { id: 53, name: "Sakuku", category: "ewallet", image: "assets/ewallet/sakuku.png" },
  { id: 54, name: "TapCash", category: "ewallet", image: "assets/ewallet/tapcash.png" },
  { id: 55, name: "e-Money Mandiri", category: "ewallet", image: "assets/ewallet/emoney-mandiri.png" },
  { id: 56, name: "Brizzi", category: "ewallet", image: "assets/ewallet/brizzi.png" },
  { id: 57, name: "Flazz BCA", category: "ewallet", image: "assets/ewallet/flazz-bca.png" },
  { id: 58, name: "AstroPay", category: "ewallet", image: "assets/ewallet/astro-pay.png" },
  { id: 59, name: "SeaBank", category: "ewallet", image: "assets/ewallet/seabank.png" },
  { id: 60, name: "Neobank", category: "ewallet", image: "assets/ewallet/neo-bank.png" },

  // --- VOUCHER ---
  { id: 61, name: "Google Play", category: "voucher", image: "assets/voucher/googleplay.png" },
  { id: 62, name: "Garena", category: "voucher", image: "assets/voucher/garena.png" },
  { id: 63, name: "Steam", category: "voucher", image: "assets/voucher/steam.png" },
  { id: 64, name: "Roblox", category: "voucher", image: "assets/voucher/roblox.png" },
  { id: 65, name: "UniPin", category: "voucher", image: "assets/voucher/unipin.png" },
  { id: 66, name: "Megaxus", category: "voucher", image: "assets/voucher/megaxus.png" },
  { id: 67, name: "PlayStation", category: "voucher", image: "assets/voucher/Playstation.png" },
  { id: 68, name: "Nintendo", category: "voucher", image: "assets/voucher/nintendo.png" },
  { id: 69, name: "Xbox", category: "voucher", image: "assets/voucher/xbox.png" },
  { id: 70, name: "Spotify", category: "voucher", image: "assets/voucher/spotify.png" },
  { id: 71, name: "Netflix", category: "voucher", image: "assets/voucher/netflix.png" },
  { id: 72, name: "Vidio", category: "voucher", image: "assets/voucher/vidio.png" },
  { id: 73, name: "Disney+", category: "voucher", image: "assets/voucher/disney.png" },
  { id: 74, name: "YouTube Premium", category: "voucher", image: "assets/voucher/youtube-premium.png" },
  { id: 75, name: "WeTV", category: "voucher", image: "assets/voucher/wetv.png" },
  { id: 76, name: "iQIYI", category: "voucher", image: "assets/voucher/iqiyi.png" },
  { id: 77, name: "Tinder", category: "voucher", image: "assets/voucher/Tinder.png" },
  { id: 78, name: "Razer Gold", category: "voucher", image: "assets/voucher/Razer-gold.png" },
  { id: 79, name: "Blizzard", category: "voucher", image: "assets/voucher/blizzard.png" },
  { id: 80, name: "EA Play", category: "voucher", image: "assets/voucher/EA-play.png" }
];

let currentCategory = 'semua';

// TAMPILKAN PRODUK
function displayProducts(items) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 20px;">Produk tidak ditemukan...</p>`;
    return;
  }

  items.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => orderViaWA(prod.name);
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" onerror="this.src='https://via.placeholder.com/150/232736/fff?text=${encodeURIComponent(prod.name)}'">
      <div class="product-title">${prod.name}</div>
      <div class="product-category">${prod.category.toUpperCase()}</div>
      <button class="btn-buy">Top Up</button>
    `;
    grid.appendChild(card);
  });
}

// FILTER KATEGORI
function filterCategory(cat, element) {
  currentCategory = cat;
  
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  applyFilters();
}

// FILTER PENCARIAN & KATEGORI GABUNGAN
function applyFilters() {
  const searchVal = document.getElementById('searchInput').value.toLowerCase();

  const filtered = productsData.filter(prod => {
    const matchCategory = (currentCategory === 'semua') || (prod.category === currentCategory);
    const matchSearch = prod.name.toLowerCase().includes(searchVal);
    return matchCategory && matchSearch;
  });

  displayProducts(filtered);
}

function filterProducts() {
  applyFilters();
}

// DIRECT WHATSAPP ORDER
function orderViaWA(productName) {
  const waNumber = "6289618602130";
  const message = encodeURIComponent(`Halo FanzzTzyStore, saya ingin top up/membeli ${productName}`);
  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
}

// BANNER SLIDER SCRIPT
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function setSlide(n) {
  showSlide(slideIndex = n);
}

setInterval(() => {
  moveSlide(1);
}, 4000);

// INITIAL RENDER
document.addEventListener('DOMContentLoaded', () => {
  displayProducts(productsData);
});
   
