// DATABASE PRODUK LENGKAP
const products = [
    // GAME
    { id: 'ff', name: 'Free Fire', category: 'game', img: 'assets/game/freefire.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=FF', idPlaceholder: 'Masukkan User ID FF', items: [
        { name: '5 💎', price: 'Rp 2.000' }, { name: '12 💎', price: 'Rp 4.000' }, { name: '50 💎', price: 'Rp 8.000' }, { name: '70 💎', price: 'Rp 10.000' }, { name: '140 💎', price: 'Rp 19.000' }, { name: '355 💎', price: 'Rp 48.000' }
    ]},
    { id: 'ml', name: 'Mobile Legends', category: 'game', img: 'assets/game/mobile-legends.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=ML', idPlaceholder: 'Masukkan User ID & Zone ID', items: [
        { name: '5 💎', price: 'Rp 1.500' }, { name: '12 💎', price: 'Rp 3.500' }, { name: '86 💎', price: 'Rp 20.000' }, { name: '172 💎', price: 'Rp 40.000' }, { name: '257 💎', price: 'Rp 60.000' }
    ]},
    { id: 'pubg', name: 'PUBG Mobile', category: 'game', img: 'assets/game/pubg-mobile.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=PUBG', idPlaceholder: 'Masukkan User ID PUBG', items: [
        { name: '60 UC', price: 'Rp 15.000' }, { name: '325 UC', price: 'Rp 75.000' }, { name: '660 UC', price: 'Rp 145.000' }
    ]},
    { id: 'codm', name: 'Call of Duty Mobile', category: 'game', img: 'assets/game/codm.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=CODM', idPlaceholder: 'Masukkan User ID CODM', items: [
        { name: '31 CP', price: 'Rp 5.000' }, { name: '62 CP', price: 'Rp 10.000' }, { name: '127 CP', price: 'Rp 20.000' }
    ]},
    { id: 'valorant', name: 'Valorant', category: 'game', img: 'assets/game/valorant.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=VAL', idPlaceholder: 'Masukkan Riot ID + Tag', items: [
        { name: '300 VP', price: 'Rp 35.000' }, { name: '625 VP', price: 'Rp 70.000' }, { name: '1125 VP', price: 'Rp 120.000' }
    ]},
    { id: 'genshin', name: 'Genshin Impact', category: 'game', img: 'assets/game/genshin.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=GI', idPlaceholder: 'Masukkan UID & Server', items: [
        { name: '60 Genesis Crystal', price: 'Rp 16.000' }, { name: '300 Genesis Crystal', price: 'Rp 79.000' }, { name: 'Welkin Moon', price: 'Rp 79.000' }
    ]},

    // PULSA
    { id: 'axis', name: 'Pulsa Axis', category: 'pulsa', img: 'assets/pulsa/axis.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=AXIS', idPlaceholder: 'Masukkan Nomor HP Axis', items: [
        { name: 'Pulsa 5.000', price: 'Rp 6.000' }, { name: 'Pulsa 10.000', price: 'Rp 11.000' }, { name: 'Pulsa 25.000', price: 'Rp 26.000' }, { name: 'Pulsa 50.000', price: 'Rp 51.000' }
    ]},
    { id: 'tri', name: 'Pulsa Tri (3)', category: 'pulsa', img: 'assets/pulsa/tri.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=TRI', idPlaceholder: 'Masukkan Nomor HP Tri', items: [
        { name: 'Pulsa 5.000', price: 'Rp 6.000' }, { name: 'Pulsa 10.000', price: 'Rp 11.000' }, { name: 'Pulsa 25.000', price: 'Rp 25.500' }
    ]},
    { id: 'smartfren', name: 'Pulsa Smartfren', category: 'pulsa', img: 'assets/pulsa/smartfren.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=SMART', idPlaceholder: 'Masukkan Nomor HP Smartfren', items: [
        { name: 'Pulsa 5.000', price: 'Rp 6.000' }, { name: 'Pulsa 10.000', price: 'Rp 11.000' }, { name: 'Pulsa 50.000', price: 'Rp 50.500' }
    ]},
    { id: 'telkomsel', name: 'Pulsa Telkomsel', category: 'pulsa', img: 'assets/pulsa/telkomsel.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=TSEL', idPlaceholder: 'Masukkan Nomor HP Telkomsel', items: [
        { name: 'Pulsa 5.000', price: 'Rp 6.500' }, { name: 'Pulsa 10.000', price: 'Rp 11.500' }, { name: 'Pulsa 25.000', price: 'Rp 26.000' }
    ]},

    // E-WALLET
    { id: 'dana', name: 'Saldo DANA', category: 'ewallet', img: 'assets/ewallet/dana.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=DANA', idPlaceholder: 'Masukkan Nomor Akun DANA', items: [
        { name: 'Saldo 10.000', price: 'Rp 11.000' }, { name: 'Saldo 20.000', price: 'Rp 21.000' }, { name: 'Saldo 50.000', price: 'Rp 51.000' }
    ]},
    { id: 'ovo', name: 'Saldo OVO', category: 'ewallet', img: 'assets/ewallet/ovo.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=OVO', idPlaceholder: 'Masukkan Nomor Akun OVO', items: [
        { name: 'Saldo 10.000', price: 'Rp 11.000' }, { name: 'Saldo 25.000', price: 'Rp 26.000' }, { name: 'Saldo 50.000', price: 'Rp 51.000' }
    ]},
    { id: 'gopay', name: 'Saldo GoPay', category: 'ewallet', img: 'assets/ewallet/gopay.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=GOPAY', idPlaceholder: 'Masukkan Nomor Akun GoPay', items: [
        { name: 'Saldo 10.000', price: 'Rp 11.000' }, { name: 'Saldo 20.000', price: 'Rp 21.000' }, { name: 'Saldo 50.000', price: 'Rp 51.000' }
    ]},
    { id: 'shopeepay', name: 'Saldo ShopeePay', category: 'ewallet', img: 'assets/ewallet/shopeepay.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=SPAY', idPlaceholder: 'Masukkan Nomor HP ShopeePay', items: [
        { name: 'Saldo 10.000', price: 'Rp 11.000' }, { name: 'Saldo 25.000', price: 'Rp 26.000' }
    ]},

    // VOUCHER
    { id: 'googleplay', name: 'Voucher Google Play', category: 'voucher', img: 'assets/voucher/googleplay.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=GP', idPlaceholder: 'Masukkan Nomor WA Penerima Voucher', items: [
        { name: 'Voucher Rp 20.000', price: 'Rp 21.500' }, { name: 'Voucher Rp 50.000', price: 'Rp 53.000' }, { name: 'Voucher Rp 100.000', price: 'Rp 105.000' }
    ]},
    { id: 'garena', name: 'Voucher Garena', category: 'voucher', img: 'assets/voucher/garena.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=GAR', idPlaceholder: 'Masukkan Nomor WA Penerima Code', items: [
        { name: '33 Shell', price: 'Rp 10.000' }, { name: '66 Shell', price: 'Rp 20.000' }, { name: '165 Shell', price: 'Rp 50.000' }
    ]},
    { id: 'steam', name: 'Steam Wallet', category: 'voucher', img: 'assets/voucher/steam.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=STEAM', idPlaceholder: 'Masukkan ID / Email Steam', items: [
        { name: 'IDR 12.000', price: 'Rp 14.000' }, { name: 'IDR 45.000', price: 'Rp 49.000' }, { name: 'IDR 90.000', price: 'Rp 98.000' }
    ]},
    { id: 'roblox', name: 'Roblox Gift Card', category: 'voucher', img: 'assets/voucher/roblox.png', fallback: 'https://via.placeholder.com/60/ff0055/fff?text=RBLX', idPlaceholder: 'Masukkan Nomor WA Penerima Code', items: [
        { name: '100 Robux', price: 'Rp 22.000' }, { name: '400 Robux', price: 'Rp 75.000' }, { name: '800 Robux', price: 'Rp 145.000' }
    ]}
];

// RENDER ITEM CARDS
function renderItems(data) {
    const grid = document.getElementById('itemGrid');
    grid.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.onclick = () => openModal(item);
        
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='${item.fallback}'">
            <h3>${item.name}</h3>
        `;
        grid.appendChild(card);
    });
}

// FILTER CATEGORY
function filterCategory(category, element) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if (category === 'all') {
        renderItems(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderItems(filtered);
    }
}

// FILTER SEARCH INPUT
function filterItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderItems(filtered);
}

// MODAL CONTROLLER
let selectedProduct = null;

function openModal(product) {
    selectedProduct = product;
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalImg').src = product.img;
    document.getElementById('modalImg').onerror = () => document.getElementById('modalImg').src = product.fallback;
    document.getElementById('idLabel').innerText = `1. ${product.idPlaceholder}`;
    
    // Render Nominals
    const nominalContainer = document.getElementById('nominalContainer');
    nominalContainer.innerHTML = '';
    
    document.getElementById('selectedNominal').value = '';
    document.getElementById('selectedHarga').value = '';

    product.items.forEach(sub => {
        const box = document.createElement('div');
        box.className = 'nominal-box';
        box.innerHTML = `
            <div class="title">${sub.name}</div>
            <div class="price">${sub.price}</div>
        `;
        box.onclick = () => {
            document.querySelectorAll('.nominal-box').forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
            document.getElementById('selectedNominal').value = sub.name;
            document.getElementById('selectedHarga').value = sub.price;
        };
        nominalContainer.appendChild(box);
    });

    document.getElementById('topupModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('topupModal').style.display = 'none';
}

// WINDOW CLICK OUTSIDE MODAL TO CLOSE
window.onclick = function(event) {
    const modal = document.getElementById('topupModal');
    if (event.target === modal) {
        closeModal();
    }
}

// SUBMIT ORDER TO WHATSAPP
function submitToWA(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const nominal = document.getElementById('selectedNominal').value;
    const harga = document.getElementById('selectedHarga').value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value;

    if (!nominal) {
        alert('Silakan pilih nominal terlebih dahulu!');
        return;
    }
    if (!payment) {
        alert('Silakan pilih metode pembayaran!');
        return;
    }

    // Nomor WA tujuan
    const targetWA = "6289618602130";

    // Format Pesan Otomatis
    const message = `${userId}\n${nominal}: ${harga}\n${payment}`;
    
    // Encode URL & Redirect
    const waURL = `https://wa.me/${targetWA}?text=${encodeURIComponent(message)}`;
    window.open(waURL, '_blank');
}

// SLIDER BANNER AUTOMATIC & MANUAL
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Auto Slide Setiap 4 Detik
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 4000);

// INITIAL RENDER
document.addEventListener('DOMContentLoaded', () => {
    renderItems(products);
});
     
