"use strict";


/* =========================================================
   KONFIGURASI WHATSAPP
   ========================================================= */

const WHATSAPP_NUMBER = "6289618602130";


/* =========================================================
   DATA PRODUK
   ========================================================= */

const STORE_DATA = {


  /* =======================================================
     GAME
     ======================================================= */

  game: {

    title: "Top Up Game",

    description:
      "Diamond, UC, Points & item game",

    icon: "🎮",


    products: [

      /* ================= FREE FIRE ================= */

      {

        id: "freefire",

        name: "Free Fire",

        image:
          "assets/game/freefire.png",

        targetLabel:
          "ID Player",

        targetPlaceholder:
          "Contoh: 123456789",

        targetHelp:
          "Masukkan ID Player Free Fire kamu.",

        server: false,


        denominations: [

          ["5 Diamond", 2000],

          ["12 Diamond", 4000],

          ["50 Diamond", 8000],

          ["70 Diamond", 10000],

          ["140 Diamond", 20000],

          ["355 Diamond", 50000]

        ]

      },


      /* ================= MOBILE LEGENDS ================= */

      {

        id: "mobile-legends",

        name: "Mobile Legends",

        image:
          "assets/game/mobile-legends.png",

        targetLabel:
          "User ID",

        targetPlaceholder:
          "Contoh: 123456789",

        targetHelp:
          "Masukkan User ID Mobile Legends.",

        server: true,


        denominations: [

          ["5 Diamond", 2000],

          ["12 Diamond", 4000],

          ["28 Diamond", 8000],

          ["59 Diamond", 15000],

          ["170 Diamond", 40000],

          ["296 Diamond", 65000]

        ]

      },


      /* ================= PUBG ================= */

      {

        id: "pubg-mobile",

        name: "PUBG Mobile",

        image:
          "assets/game/pubg-mobile.png",

        targetLabel:
          "ID Player",

        targetPlaceholder:
          "Contoh: 5123456789",

        targetHelp:
          "Masukkan ID PUBG Mobile.",

        server: false,


        denominations: [

          ["60 UC", 15000],

          ["325 UC", 70000],

          ["660 UC", 135000],

          ["1800 UC", 350000],

          ["3850 UC", 700000]

        ]

      },


      /* ================= CODM ================= */

      {

        id: "codm",

        name: "Call of Duty Mobile",

        image:
          "assets/game/codm.png",

        targetLabel:
          "UID",

        targetPlaceholder:
          "Masukkan UID CODM",

        targetHelp:
          "Masukkan UID akun CODM.",

        server: false,


        denominations: [

          ["31 CP", 7000],

          ["63 CP", 14000],

          ["128 CP", 28000],

          ["321 CP", 65000],

          ["645 CP", 125000]

        ]

      },


      /* ================= VALORANT ================= */

      {

        id: "valorant",

        name: "Valorant",

        image:
          "assets/game/valorant.png",

        targetLabel:
          "Riot ID",

        targetPlaceholder:
          "Contoh: FanzzTzy#ID",

        targetHelp:
          "Masukkan Riot ID / Riot Tag.",

        server: false,


        denominations: [

          ["475 VP", 55000],

          ["1000 VP", 105000],

          ["2050 VP", 210000],

          ["3650 VP", 365000],

          ["5350 VP", 525000]

        ]

      },


      /* ================= GENSHIN ================= */

      {

        id: "genshin",

        name: "Genshin Impact",

        image:
          "assets/game/genshin.png",

        targetLabel:
          "UID",

        targetPlaceholder:
          "Contoh: 800000000",

        targetHelp:
          "Masukkan UID Genshin Impact.",

        server: true,


        denominations: [

          ["60 Genesis Crystal", 16000],

          ["300 Genesis Crystal", 65000],

          ["980 Genesis Crystal", 160000],

          ["1980 Genesis Crystal", 330000]

        ]

      }

    ]

  },


  /* =======================================================
     PULSA
     ======================================================= */

  pulsa: {

    title: "Pulsa",

    description:
      "Pulsa semua operator",

    icon: "📱",


    products: [


      /* AXIS */

      {

        id: "axis",

        name: "AXIS",

        image:
          "assets/pulsa/axis.png",

        targetLabel:
          "Nomor HP",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor AXIS yang akan diisi.",

        server: false,


        denominations: [

          ["Pulsa 5K", 7000],

          ["Pulsa 10K", 12000],

          ["Pulsa 15K", 17000],

          ["Pulsa 20K", 22000],

          ["Pulsa 25K", 27000],

          ["Pulsa 50K", 52000],

          ["Pulsa 100K", 102000]

        ]

      },


      /* TRI */

      {

        id: "tri",

        name: "Tri (3)",

        image:
          "assets/pulsa/tri.png",

        targetLabel:
          "Nomor HP",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor Tri yang akan diisi.",

        server: false,


        denominations: [

          ["Pulsa 5K", 7000],

          ["Pulsa 10K", 12000],

          ["Pulsa 20K", 22000],

          ["Pulsa 25K", 27000],

          ["Pulsa 50K", 52000],

          ["Pulsa 100K", 102000]

        ]

      },


      /* SMARTFREN */

      {

        id: "smartfren",

        name: "Smartfren",

        image:
          "assets/pulsa/smartfren.png",

        targetLabel:
          "Nomor HP",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor Smartfren yang akan diisi.",

        server: false,


        denominations: [

          ["Pulsa 5K", 7000],

          ["Pulsa 10K", 12000],

          ["Pulsa 20K", 22000],

          ["Pulsa 25K", 27000],

          ["Pulsa 50K", 52000],

          ["Pulsa 100K", 102000]

        ]

      },


      /* TELKOMSEL */

      {

        id: "telkomsel",

        name: "Telkomsel",

        image:
          "assets/pulsa/telkomsel.png",

        targetLabel:
          "Nomor HP",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor Telkomsel yang akan diisi.",

        server: false,


        denominations: [

          ["Pulsa 5K", 7000],

          ["Pulsa 10K", 12000],

          ["Pulsa 20K", 22000],

          ["Pulsa 25K", 27000],

          ["Pulsa 50K", 52000],

          ["Pulsa 100K", 102000]

        ]

      }

    ]

  },


  /* =======================================================
     E-WALLET
     ======================================================= */

  ewallet: {

    title: "E-Wallet",

    description:
      "Isi saldo e-wallet",

    icon: "💳",


    products: [


      /* DANA */

      {

        id: "dana",

        name: "DANA",

        image:
          "assets/ewallet/dana.png",

        targetLabel:
          "Nomor DANA",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor HP akun DANA.",

        server: false,


        denominations: [

          ["Saldo 10K", 12000],

          ["Saldo 20K", 22000],

          ["Saldo 25K", 27000],

          ["Saldo 50K", 52000],

          ["Saldo 100K", 102000],

          ["Saldo 200K", 202000]

        ]

      },


      /* OVO */

      {

        id: "ovo",

        name: "OVO",

        image:
          "assets/ewallet/ovo.png",

        targetLabel:
          "Nomor OVO",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor HP akun OVO.",

        server: false,


        denominations: [

          ["Saldo 10K", 12000],

          ["Saldo 20K", 22000],

          ["Saldo 25K", 27000],

          ["Saldo 50K", 52000],

          ["Saldo 100K", 102000]

        ]

      },


      /* GOPAY */

      {

        id: "gopay",

        name: "GoPay",

        image:
          "assets/ewallet/gopay.png",

        targetLabel:
          "Nomor GoPay",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor HP akun GoPay.",

        server: false,


        denominations: [

          ["Saldo 10K", 12000],

          ["Saldo 20K", 22000],

          ["Saldo 50K", 52000],

          ["Saldo 100K", 102000],

          ["Saldo 200K", 202000]

        ]

      },


      /* SHOPEEPAY */

      {

        id: "shopeepay",

        name: "ShopeePay",

        image:
          "assets/ewallet/shopeepay.png",

        targetLabel:
          "Nomor ShopeePay",

        targetPlaceholder:
          "08xxxxxxxxxx",

        targetHelp:
          "Masukkan nomor HP akun ShopeePay.",

        server: false,


        denominations: [

          ["Saldo 10K", 12000],

          ["Saldo 20K", 22000],

          ["Saldo 50K", 52000],

          ["Saldo 100K", 102000],

          ["Saldo 200K", 202000]

        ]

      }

    ]

  },


  /* =======================================================
     VOUCHER
     ======================================================= */

  voucher: {

    title: "Voucher",

    description:
      "Voucher game & digital",

    icon: "🎟️",


    products: [


      /* GOOGLE PLAY */

      {

        id: "googleplay",

        name: "Google Play",

        image:
          "assets/voucher/googleplay.png",

        targetLabel:
          "Email / Akun Google",

        targetPlaceholder:
          "nama@email.com",

        targetHelp:
          "Masukkan email Google penerima.",

        server: false,


        denominations: [

          ["Voucher 5K", 7000],

          ["Voucher 10K", 12000],

          ["Voucher 20K", 22000],

          ["Voucher 50K", 52000],

          ["Voucher 100K", 102000]

        ]

      },


      /* GARENA */

      {

        id: "garena",

        name: "Garena Shell",

        image:
          "assets/voucher/garena.png",

        targetLabel:
          "Data Penerima",

        targetPlaceholder:
          "Masukkan data penerima",

        targetHelp:
          "Masukkan data yang diperlukan untuk voucher.",

        server: false,


        denominations: [

          ["Shell 33", 10000],

          ["Shell 66", 19000],

          ["Shell 165", 45000],

          ["Shell 330", 85000]

        ]

      },


      /* STEAM */

      {

        id: "steam",

        name: "Steam Wallet",

        image:
          "assets/voucher/steam.png",

        targetLabel:
          "Steam Account",

        targetPlaceholder:
          "Masukkan Steam ID / email",

        targetHelp:
          "Masukkan Steam ID atau email penerima.",

        server: false,


        denominations: [

          ["Wallet 12K", 15000],

          ["Wallet 45K", 50000],

          ["Wallet 60K", 65000],

          ["Wallet 90K", 95000],

          ["Wallet 120K", 125000]

        ]

      },


      /* ROBLOX */

      {

        id: "roblox",

        name: "Roblox",

        image:
          "assets/voucher/roblox.png",

        targetLabel:
          "Username Roblox",

        targetPlaceholder:
          "Masukkan username",

        targetHelp:
          "Masukkan username Roblox penerima.",

        server: false,


        denominations: [

          ["Robux 80", 15000],

          ["Robux 400", 65000],

          ["Robux 800", 125000],

          ["Robux 1700", 250000]

        ]

      }

    ]

  }

};


/* =========================================================
   STATE
   ========================================================= */

let currentCategory = "game";

let currentProduct = null;

let currentNominal = null;

let currentSlide = 0;

let sliderTimer = null;


/* =========================================================
   SHORTCUT
   ========================================================= */

const $ = (selector) => {

  return document.querySelector(selector);

};


/* =========================================================
   FORMAT RUPIAH
   ========================================================= */

function rupiah(value) {

  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }
  ).format(value);

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value).replace(
    /[&<>"']/g,
    (char) => ({

      "&": "&amp;",

      "<": "&lt;",

      ">": "&gt;",

      '"': "&quot;",

      "'": "&#039;"

    }[char])

  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  const toast = $("#toast");

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove("show");

      },
      2500
    );

}


/* =========================================================
   IMAGE PLACEHOLDER
   ========================================================= */

function placeholderImage(text) {

  const svg = `

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
    >

      <rect
        width="100%"
        height="100%"
        fill="#1a1a1f"
      />

      <circle
        cx="250"
        cy="200"
        r="90"
        fill="#ff3347"
        opacity=".12"
      />

      <text
        x="50%"
        y="54%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Arial"
        font-size="42"
        font-weight="700"
        fill="#ff5666"
      >
        ${escapeHTML(text.slice(0, 12))}
      </text>

    </svg>

  `;

  return (
    "data:image/svg+xml;charset=UTF-8,"
    +
    encodeURIComponent(svg)
  );

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function setupImageFallbacks(root = document) {

  root
    .querySelectorAll("img")
    .forEach((img) => {

      if (img.dataset.fallbackReady) {
        return;
      }

      img.dataset.fallbackReady = "1";

      img.addEventListener(
        "error",
        () => {

          img.src =
            placeholderImage(
              img.alt || "FanzzTzyStore"
            );

        },
        {
          once: true
        }
      );

    });

}


/* =========================================================
   RENDER CATEGORY
   ========================================================= */

function renderCategories() {

  const grid =
    $("#categoryGrid");

  grid.innerHTML =
    Object.entries(STORE_DATA)
      .map(
        ([key, category]) => `

          <button
            class="category-card"
            type="button"
            data-category="${key}"
          >

            <div class="category-icon">

              ${category.icon}

            </div>

            <h3>

              ${escapeHTML(
                category.title
              )}

            </h3>

            <p>

              ${escapeHTML(
                category.description
              )}

            </p>

          </button>

        `
      )
      .join("");


  grid
    .querySelectorAll(".category-card")
    .forEach((card) => {

      card.addEventListener(
        "click",
        () => {

          selectCategory(
            card.dataset.category
          );

        }
      );

    });

}


/* =========================================================
   SELECT CATEGORY
   ========================================================= */

function selectCategory(
  categoryKey,
  scroll = true
) {

  if (!STORE_DATA[categoryKey]) {
    return;
  }

  currentCategory =
    categoryKey;

  const category =
    STORE_DATA[categoryKey];


  $("#productSectionTitle")
    .textContent =
    category.title;


  $("#backToCategories")
    .classList
    .remove("hidden");


  renderProducts(
    category.products
  );


  if (scroll) {

    $("#products")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(products) {

  const grid =
    $("#productGrid");

  const empty =
    $("#emptyState");


  if (!products.length) {

    grid.innerHTML = "";

    empty
      .classList
      .remove("hidden");

    return;

  }


  empty
    .classList
    .add("hidden");


  grid.innerHTML =
    products
      .map(
        (product) => `

          <article
            class="product-card"
            tabindex="0"
            role="button"
            data-product-id="${escapeHTML(
              product.id
            )}"
            aria-label="${escapeHTML(
              product.name
            )}"
          >

            <div class="product-image-wrap">

              <img
                class="product-image"
                src="${escapeHTML(
                  product.image
                )}"
                alt="${escapeHTML(
                  product.name
                )}"
                loading="lazy"
              >

            </div>


            <div class="product-info">

              <h3>

                ${escapeHTML(
                  product.name
                )}

              </h3>

              <p>

                ${product.denominations.length}
                pilihan nominal

              </p>

            </div>

          </article>

        `
      )
      .join("");


  setupImageFallbacks(grid);


  grid
    .querySelectorAll(".product-card")
    .forEach((card) => {

      const action = () => {

        openDenominationModal(
          card.dataset.productId
        );

      };


      card.addEventListener(
        "click",
        action
      );


      card.addEventListener(
        "keydown",
        (event) => {

          if (
            event.key === "Enter"
            ||
            event.key === " "
          ) {

            event.preventDefault();

            action();

          }

        }
      );

    });

}


/* =========================================================
   GET PRODUCT
   ========================================================= */

function getProductById(productId) {

  for (
    const category
    of Object.values(STORE_DATA)
  ) {

    const found =
      category.products.find(
        (product) =>
          product.id === productId
      );


    if (found) {

      return found;

    }

  }


  return null;

}


/* =========================================================
   OPEN NOMINAL
   ========================================================= */

function openDenominationModal(productId) {

  const product =
    getProductById(productId);


  if (!product) {
    return;
  }


  currentProduct =
    product;


  const modal =
    $("#orderModal");


  $("#modalKicker")
    .textContent =
    STORE_DATA[
      currentCategory
    ]
      ?.title
      .toUpperCase()
      ||
      "ORDER";


  $("#modalTitle")
    .textContent =
    "Pilih Nominal";


  $("#modalProduct")
    .textContent =
    product.name;


  const form =
    $("#orderForm");


  const targetGroup =
    $("#targetFieldGroup");


  const serverGroup =
    $("#serverFieldGroup");


  const paymentGroup =
    $("#paymentSelect")
      .closest(".form-group");


  const summary =
    $(".order-summary");


  const primary =
    form.querySelector(
      ".primary-btn"
    );


  const note =
    form.querySelector(
      ".form-note"
    
