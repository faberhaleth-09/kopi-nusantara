// //cari produk berdasarkan slug
// function cariSlug() {
//   const input = document.getElementById("inputSlug").value.trim().toLower();
//   const hasil = PRODUCTS.find(function (p) {
//     return p.slug.toLowerCase() === input;
//   });

//   const hasilEl = document.getElementById(hasilCari);
//   if (hasil) {
//     hasilEl.innerHTML = `
//         <article class="card-search" style="background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${esc(hasil.gambar)}')">
//             <h3>${esc(hasil.nama)}</h3>
//             <p class="meta">${esc(hasil.asal)} &middot; ${esc(hasil.kategori)}</p>
//             <p class="price">${rupiah(hasil.harga)}</p>
//         </article>
//     `;
//   } else if (input === "") {
//         hasilEl.innerHTML = `<p>Masukkan nama produk yang ingin dicari.</p>`;
//   } else if {
//         hasilEl.innerHTML = `<p>Produk tidak ditemukan</p>`;
//   }
// }
