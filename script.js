// Database Data Produk Beserta List Nominal Khusus Tiap Item
const products = [
    // --- GAME ---
    {
        id: 'ff', name: 'Free Fire', category: 'game', img: 'assets/game/freefire.png', label: 'ID Player',
        nominals: [
            { name: '5💎', price: 'rp2.000' },
            { name: '12💎', price: 'rp5.000' },
            { name: '50💎', price: 'rp15.000' },
            { name: '140💎', price: 'rp20.000' },
            { name: '355💎', price: 'rp50.000' }
        ]
    },
    {
        id: 'ml', name: 'Mobile Legends', category: 'game', img: 'assets/game/mobile-legends.png', label: 'ID & Zone ID',
        nominals: [
            { name: '5 💎', price: 'rp1.500' },
            { name: '86 💎', price: 'rp20.000' },
            { name: '172 💎', price: 'rp40.000' },
            { name: '257 💎', price: 'rp60.000' },
            { name: 'Weekly Diamond Pass', price: 'rp28.000' }
        ]
    },
    {
        id: 'pubg', name: 'PUBG Mobile', category: 'game', img: 'assets/game/pubg-mobile.png', label: 'ID Character',
        nominals: [
            { name: '60 UC', price: 'rp14.500' },
            { name: '325 UC', price: 'rp72.000' },
            { name: '660 UC', price: 'rp145.000' }
        ]
    },
    {
        id: 'codm', name: 'Call of Duty Mobile', category: 'game', img: 'assets/game/codm.png', label: 'OpenID',
        nominals: [
            { name: '31 CP', price: 'rp5.000' },
            { name: '62 CP', price: 'rp10.000' },
            { name: '128 CP', price: 'rp20.000' }
        ]
    },
    {
        id: 'valo', name: 'Valorant', category: 'game', img: 'assets/game/valorant.png', label: 'Riot ID',
        nominals: [
            { name: '125 VP', price: 'rp15.000' },
            { name: '420 VP', price: 'rp50.000' },
            { name: '700 VP', price: 'rp80.000' }
        ]
    },
    {
        id: 'genshin', name: 'Genshin Impact', category: 'game', img: 'assets/game/genshin.png', label: 'UID & Server',
        nominals: [
            { name: '60 Genesis Crystals', price: 'rp16.000' },
            { name: '300 Genesis Crystals', price: 'rp79.000' },
            { name: 'Blessing of the Welkin Moon', price: 'rp79.000' }
        ]
    },
    {
        id: 'efootball', name: 'eFootball', category: 'game', img: 'assets/game/efootball.png', label: 'User ID',
        nominals: [
            { name: '130 eFootball Coins', price: 'rp16.000' },
            { name: '550 eFootball Coins', price: 'rp65.000' }
        ]
    },
    {
        id: 'hsr', name: 'Honkai Star Rail', category: 'game', img: 'assets/game/honkai-star-rail.png', label: 'UID & Server',
        nominals: [
            { name: '60 Oneiric Shard', price: 'rp16.000' },
            { name: '300 Oneiric Shard', price: 'rp79.000' },
            { name: 'Express Supply Pass', price: 'rp79.000' }
        ]
    },
    {
        id: 'aov', name: 'Arena of Valor', category: 'game', img: 'assets/game/arena-of-valor.png', label: 'Player ID',
        nominals: [
            { name: '40 Voucher', price: 'rp10.000' },
            { name: '90 Voucher', price: 'rp20.000' }
        ]
    },
    {
        id: 'pb', name: 'Point Blank', category: 'game', img: 'assets/game/point-blank.png', label: 'ID Account',
        nominals: [
            { name: '1.200 PB Cash', price: 'rp10.000' },
            { name: '2.400 PB Cash', price: 'rp20.000' },
            { name: '6.000 PB Cash', price: 'rp50.000' }
        ]
    },
    { id: 'lol', name: 'League of Legends', category: 'game', img: 'assets/game/league-of-legends.png', label: 'Riot ID', nominals: [{ name: '205 RP', price: 'rp15.000' }] },
    { id: 'fifa', name: 'FIFA Mobile', category: 'game', img: 'assets/game/fifa-mobile.png', label: 'User ID', nominals: [{ name: '100 FC Points', price: 'rp16.000' }] },
    { id: 'sausage', name: 'Sausage Man', category: 'game', img: 'assets/game/sausage-man.png', label: 'User ID', nominals: [{ name: '60 Candy', price: 'rp14.000' }] },
    { id: 'ro', name: 'Ragnarok Origin', category: 'game', img: 'assets/game/ragnarok-origin.png', label: 'Secret Code & Server', nominals: [{ name: '71 Nyan Berry', price: 'rp16.000' }] },
    { id: 'coc', name: 'Clash of Clans', category: 'game', img: 'assets/game/clash-of-clans.png', label: 'Player Tag', nominals: [{ name: '80 Gems', price: 'rp16.000' }] },
    { id: 'cr', name: 'Clash Royale', category: 'game', img: 'assets/game/clash-royale.png', label: 'Player Tag', nominals: [{ name: '80 Gems', price: 'rp16.000' }] },
    { id: 'stumble', name: 'Stumble Guys', category: 'game', img: 'assets/game/stumble-guys.png', label: 'User ID', nominals: [{ name: '250 Gems', price: 'rp12.000' }] },
    { id: 'brawl', name: 'Brawl Stars', category: 'game', img: 'assets/game/brawl-stars.png', label: 'Player Tag', nominals: [{ name: '30 Gems', price: 'rp32.000' }] },
    { id: 'idv', name: 'Identity V', category: 'game', img: 'assets/game/identity-v.png', label: 'User ID & Server', nominals: [{ name: '60 Echoes', price: 'rp16.000' }] },
    { id: 'speed', name: 'Speed Drifters', category: 'game', img: 'assets/game/speed-drifters.png', label: 'Player ID', nominals: [{ name: '60 Diamond', price: 'rp14.000' }] },

    // --- PULSA ---
    {
        id: 'telkomsel', name: 'Telkomsel', category: 'pulsa', img: 'assets/pulsa/telkomsel.png', label: 'Nomor Telkomsel',
        nominals: [
            { name: 'Pulsa 5.000', price: 'rp6.500' },
            { name: 'Pulsa 10.000', price: 'rp11.500' },
            { name: 'Pulsa 25.000', price: 'rp26.000' },
            { name: 'Pulsa 50.000', price: 'rp50.500' }
        ]
    },
    {
        id: 'indosat', name: 'Indosat', category: 'pulsa', img: 'assets/pulsa/indosat.png', label: 'Nomor Indosat',
        nominals: [
            { name: 'Pulsa 5.000', price: 'rp6.500' },
            { name: 'Pulsa 10.000', price: 'rp11.500' },
            { name: 'Pulsa 25.000', price: 'rp25.800' }
        ]
    },
    { id: 'xl', name: 'XL Axiata', category: 'pulsa', img: 'assets/pulsa/xl.png', label: 'Nomor XL', nominals: [{ name: 'Pulsa 10.000', price: 'rp11.500' }] },
    { id: 'axis', name: 'Axis', category: 'pulsa', img: 'assets/pulsa/axis.png', label: 'Nomor Axis', nominals: [{ name: 'Pulsa 5.000', price: 'rp6.500' }] },
    { id: 'tri', name: 'Tri (3)', category: 'pulsa', img: 'assets/pulsa/tri.png', label: 'Nomor Tri', nominals: [{ name: 'Pulsa 5.000', price: 'rp6.300' }] },
    { id: 'smartfren', name: 'Smartfren', category: 'pulsa', img: 'assets/pulsa/smartfren.png', label: 'Nomor Smartfren', nominals: [{ name: 'Pulsa 10.000', price: 'rp11.000' }] },
    { id: 'byu', name: 'by.U', category: 'pulsa', img: 'assets/pulsa/byu.png', label: 'Nomor by.U', nominals: [{ name: 'Pulsa 10.000', price: 'rp11.500' }] },
    { id: 'tsel-trans', name: 'Telkomsel Transfer', category: 'pulsa', img: 'assets/pulsa/telkomsel-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'isat-trans', name: 'Indosat Transfer', category: 'pulsa', img: 'assets/pulsa/indosat-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'xl-trans', name: 'XL Transfer', category: 'pulsa', img: 'assets/pulsa/xl-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'axis-trans', name: 'Axis Transfer', category: 'pulsa', img: 'assets/pulsa/axis-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'tri-trans', name: 'Tri Transfer', category: 'pulsa', img: 'assets/pulsa/tri-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'smart-trans', name: 'Smartfren Transfer', category: 'pulsa', img: 'assets/pulsa/smartfren-transfer.png', label: 'Nomor HP', nominals: [{ name: 'Pulsa Transfer 20.000', price: 'rp21.000' }] },
    { id: 'pkg-tsel', name: 'Paket Data Telkomsel', category: 'pulsa', img: 'assets/pulsa/paket-data-telkomsel.png', label: 'Nomor HP', nominals: [{ name: 'Internet 1.5GB 3 Hari', price: 'rp12.000' }] },
    { id: 'pkg-isat', name: 'Paket Data Indosat', category: 'pulsa', img: 'assets/pulsa/paket-data-indosat.png', label: 'Nomor HP', nominals: [{ name: 'Freedom 3GB 30 Hari', price: 'rp25.000' }] },
    { id: 'pkg-xl', name: 'Paket Data XL', category: 'pulsa', img: 'assets/pulsa/paket-data-xl.png', label: 'Nomor HP', nominals: [{ name: 'Xtra Combo Flex 5GB', price: 'rp28.000' }] },
    { id: 'pkg-axis', name: 'Paket Data Axis', category: 'pulsa', img: 'assets/pulsa/paket-data-axis.png', label: 'Nomor HP', nominals: [{ name: 'Bronet 2GB 60 Hari', price: 'rp15.000' }] },
    { id: 'pkg-tri', name: 'Paket Data Tri', category: 'pulsa', img: 'assets/pulsa/paket-data-tri.png', label: 'Nomor HP', nominals: [{ name: 'Happy 5GB 3 Hari', price: 'rp14.000' }] },
    { id: 'pkg-smart', name: 'Paket Data Smartfren', category: 'pulsa', img: 'assets/pulsa/paket-data-smartfren.png', label: 'Nomor HP', nominals: [{ name: 'Unlimited Nonstop 6GB', price: 'rp32.000' }] },
    { id: 'masa-aktif', name: 'Perpanjang Masa Aktif', category: 'pulsa', img: 'assets/pulsa/masa-aktif.png', label: 'Nomor HP', nominals: [{ name: 'Masa Aktif 30 Hari', price: 'rp10.000' }] },

    // --- E-WALLET ---
    {
        id: 'dana', name: 'DANA', category: 'ewallet', img: 'assets/ewallet/dana.png', label: 'Nomor DANA',
        nominals: [
            { name: 'Saldo 10.000', price: 'rp10.500' },
            { name: 'Saldo 20.000', price: 'rp20.500' },
            { name: 'Saldo 50.000', price: 'rp50.500' }
        ]
    },
    {
        id: 'ovo', name: 'OVO', category: 'ewallet', img: 'assets/ewallet/ovo.png', label: 'Nomor OVO',
        nominals: [
            { name: 'Saldo 10.000', price: 'rp11.000' },
            { name: 'Saldo 20.000', price: 'rp21.000' }
        ]
    },
    { id: 'gopay', name: 'GoPay', category: 'ewallet', img: 'assets/ewallet/gopay.png', label: 'Nomor GoPay', nominals: [{ name: 'Saldo 10.000', price: 'rp11.000' }] },
    { id: 'shopeepay', name: 'ShopeePay', category: 'ewallet', img: 'assets/ewallet/shopeepay.png', label: 'Nomor ShopeePay', nominals: [{ name: 'Saldo 10.000', price: 'rp10.800' }] },
    { id: 'linkaja', name: 'LinkAja', category: 'ewallet', img: 'assets/ewallet/linkaja.png', label: 'Nomor LinkAja', nominals: [{ name: 'Saldo 10.000', price: 'rp10.800' }] },
    { id: 'isaku', name: 'i.Saku', category: 'ewallet', img: 'assets/ewallet/isaku.png', label: 'Nomor i.Saku', nominals: [{ name: 'Saldo 20.000', price: 'rp20.800' }] },
    { id: 'maxim-dr', name: 'Maxim Driver', category: 'ewallet', img: 'assets/ewallet/maxim-driver.png', label: 'ID Driver', nominals: [{ name: 'Saldo 10.000', price: 'rp11.000' }] },
    { id: 'maxim-ps', name: 'Maxim Passenger', category: 'ewallet', img: 'assets/ewallet/maxim-passenger.png', label: 'ID Customer', nominals: [{ name: 'Saldo 10.000', price: 'rp11.000' }] },
    { id: 'gojek-dr', name: 'Gojek Driver', category: 'ewallet', img: 'assets/ewallet/gojek-driver.png', label: 'Nomor HP Driver', nominals: [{ name: 'Saldo 20.000', price: 'rp21.000' }] },
    { id: 'grab-dr', name: 'Grab Driver', category: 'ewallet', img: 'assets/ewallet/grab-driver.png', label: 'Nomor HP Driver', nominals: [{ name: 'Saldo 20.000', price: 'rp21.000' }] },
    { id: 'kaspro', name: 'Kaspro', category: 'ewallet', img: 'assets/ewallet/kaspro.png', label: 'Nomor Kaspro', nominals: [{ name: 'Saldo 20.000', price: 'rp21.000' }] },
    { id: 'doku', name: 'DOKU', category: 'ewallet', img: 'assets/ewallet/doku.png', label: 'ID DOKU', nominals: [{ name: 'Saldo 20.000', price: 'rp21.000' }] },
    { id: 'sakuku', name: 'Sakuku', category: 'ewallet', img: 'assets/ewallet/sakuku.png', label: 'Nomor HP Sakuku', nominals: [{ name: 'Saldo 25.000', price: 'rp26.000' }] },
    { id: 'tapcash', name: 'TapCash BNI', category: 'ewallet', img: 'assets/ewallet/tapcash.png', label: 'Nomor Kartu', nominals: [{ name: 'Saldo 20.000', price: 'rp21.500' }] },
    { id: 'emoney', name: 'e-Money Mandiri', category: 'ewallet', img: 'assets/ewallet/emoney-mandiri.png', label: 'Nomor Kartu', nominals: [{ name: 'Saldo 20.000', price: 'rp21.500' }] },
    { id: 'brizzi', name: 'BRIZZI', category: 'ewallet', img: 'assets/ewallet/brizzi.png', label: 'Nomor Kartu', nominals: [{ name: 'Saldo 20.000', price: 'rp21.500' }] },
    { id: 'flazz', name: 'Flazz BCA', category: 'ewallet', img: 'assets/ewallet/flazz-bca.png', label: 'Nomor Kartu', nominals: [{ name: 'Saldo 20.000', price: 'rp21.500' }] },
    { id: 'astropay', name: 'AstroPay', category: 'ewallet', img: 'assets/ewallet/astro-pay.png', label: 'ID User', nominals: [{ name: 'Saldo $5', price: 'rp80.000' }] },
    { id: 'seabank', name: 'SeaBank Transfer', category: 'ewallet', img: 'assets/ewallet/seabank.png', label: 'Nomor Rekening', nominals: [{ name: 'Transfer 50.000', price: 'rp51.000' }] },
    { id: 'neobank', name: 'Neo Bank Transfer', category: 'ewallet', img: 'assets/ewallet/neo-bank.png', label: 'Nomor Rekening', nominals: [{ name: 'Transfer 50.000', price: 'rp51.000' }] },

    // --- VOUCHER ---
    {
        id: 'googleplay', name: 'Google Play Gift Card', category: 'voucher', img: 'assets/voucher/googleplay.png', label: 'Nomor WhatsApp',
        nominals: [
            { name: 'Voucher Rp20.000', price: 'rp21.500' },
            { name: 'Voucher Rp50.000', price: 'rp53.000' },
            { name: 'Voucher Rp100.000', price: 'rp104.000' }
        ]
    },
    {
        id: 'garena', name: 'Garena Shell', category: 'voucher', img: 'assets/voucher/garena.png', label: 'Nomor WhatsApp',
        nominals: [
            { name: '33 Shell', price: 'rp10.000' },
            { name: '66 Shell', price: 'rp20.000' },
            { name: '165 Shell', price: 'rp50.000' }
        ]
    },
    { id: 'steam', name: 'Steam Wallet IDR', category: 'voucher', img: 'assets/voucher/steam.png', label: 'Nomor WhatsApp', nominals: [{ name: 'Steam Wallet Rp12.000', price: 'rp14.000' }] },
    { id: 'roblox', name: 'Roblox Gift Card', category: 'voucher', img: 'assets/voucher/roblox.png', label: 'Nomor WhatsApp', nominals: [{ name: '80 Robux', price: 'rp18.000' }] },
    { id: 'unipin', name: 'UniPin Voucher', category: 'voucher', img: 'assets/voucher/unipin.png', label: 'Nomor WhatsApp', nominals: [{ name: '10.000 UniPin Credit', price: 'rp10.500' }] },
    { id: 'megaxus', name: 'Megaxus MI-Cash', category: 'voucher', img: 'assets/voucher/megaxus.png', label: 'Nomor WhatsApp', nominals: [{ name: '10.000 MI-Cash', price: 'rp10.500' }] },
    { id: 'psn', name: 'PlayStation Network Card', category: 'voucher', img: 'assets/voucher/Playstation.png', label: 'Nomor WhatsApp', nominals: [{ name: 'PSN IDR 100.000', price: 'rp110.000' }] },
    { id: 'nintendo', name: 'Nintendo eShop Card', category: 'voucher', img: 'assets/voucher/nintendo.png', label: 'Nomor WhatsApp', nominals: [{ name: '$10 eShop Card', price: 'rp160.000' }] },
    { id: 'xbox', name: 'Xbox Gift Card', category: 'voucher', img: 'assets/voucher/xbox.png', label: 'Nomor WhatsApp', nominals: [{ name: '$10 Xbox Gift Card', price: 'rp160.000' }] },
    { id: 'spotify', name: 'Spotify Premium Voucher', category: 'voucher', img: 'assets/voucher/spotify.png', label: 'Nomor WhatsApp', nominals: [{ name: '1 Bulan Individual', price: 'rp60.000' }] },
    { id: 'netflix', name: 'Netflix Gift Card', category: 'voucher', img: 'assets/voucher/netflix.png', label: 'Nomor WhatsApp', nominals: [{ name: 'Voucher Rp100.000', price: 'rp105.000' }] },
    { id: 'vidio', name: 'Vidio Premier Platinum', category: 'voucher', img: 'assets/voucher/vidio.png', label: 'Nomor WhatsApp', nominals: [{ name: '30 Hari Platinum', price: 'rp39.000' }] },
    { id: 'disney', name: 'Disney+ Hotstar', category: 'voucher', img: 'assets/voucher/disney.png', label: 'Nomor WhatsApp', nominals: [{ name: '1 Bulan Basic', price: 'rp65.000' }] },
    { id: 'ytpremium', name: 'YouTube Premium Voucher', category: 'voucher', img: 'assets/voucher/youtube-premium.png', label: 'Nomor WhatsApp', nominals: [{ name: '1 Bulan Individual', price: 'rp45.000' }] },
    { id: 'wetv', name: 'WeTV VIP', category: 'voucher', img: 'assets/voucher/wetv.png', label: 'Nomor WhatsApp', nominals: [{ name: '1 Bulan VIP', price: 'rp30.000' }] },
    { id: 'iqiyi', name: 'iQIYI VIP Standard', category: 'voucher', img: 'assets/voucher/iqiyi.png', label: 'Nomor WhatsApp', nominals: [{ name: '1 Bulan VIP', price: 'rp39.000' }] },
    { id: 'tinder', name: 'Tinder Plus/Gold', category: 'voucher', img: 'assets/voucher/Tinder.png', label: 'Nomor WhatsApp', nominals: [{ name: 'Tinder Plus 1 Bulan', price: 'rp60.000' }] },
    { id: 'razer', name: 'Razer Gold', category: 'voucher', img: 'assets/voucher/Razer-gold.png', label: 'Nomor WhatsApp', nominals: [{ name: 'Razer Gold Rp10.000', price: 'rp10.800' }] },
    { id: 'blizzard', name: 'Blizzard Balance Card', category: 'voucher', img: 'assets/voucher/blizzard.png', label: 'Nomor WhatsApp', nominals: [{ name: '$10 Blizzard Card', price: 'rp160.000' }] },
    { id: 'eaplay', name: 'EA Play Cash Card', category: 'voucher', img: 'assets/voucher/EA-play.png', label: 'Nomor WhatsApp', nominals: [{ name: 'EA Play 1 Bulan', price: 'rp70.000' }] }
];

let selectedProduct = null;

// Render Daftar Produk Ke Halaman
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    if(items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94a3b8;">Produk tidak ditemukan.</p>';
        return;
    }

    items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(p);
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/150?text=${encodeURIComponent(p.name)}'">
            <h4>${p.name}</h4>
        `;
        grid.appendChild(card);
    });
}

// Filter Berdasarkan Kategori Button
function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if(cat === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

// Filter Berdasarkan Search Bar
function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// Buka Modal Detail Top Up
function openModal(product) {
    selectedProduct = product;
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalImg').src = product.img;
    document.getElementById('modalImg').onerror = function() {
        this.src = `https://via.placeholder.com/150?text=${encodeURIComponent(product.name)}`;
    };
    document.getElementById('modalCategory').innerText = product.category.toUpperCase();
    document.getElementById('labelInputTarget').innerText = product.label + ':';
    
    // Render list nominal khusus produk yang dipilih
    const nominalContainer = document.getElementById('nominalGrid');
    nominalContainer.innerHTML = '';

    if (product.nominals && product.nominals.length > 0) {
        product.nominals.forEach((item, index) => {
            const id = `item_${index}`;
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="radio" id="${id}" name="nominal" value="${item.name}: ${item.price}" class="item-option" required>
                <label for="${id}" class="item-label">
                    <span>${item.name}</span>
                    <strong>${item.price}</strong>
                </label>
            `;
            nominalContainer.appendChild(div);
     
