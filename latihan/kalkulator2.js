// Kalkulator 2

//1. Input
const hargaPerBungkus = Number(prompt("harga perbungkus (Rp): "));
const jumlah = Number(prompt("Jumlah bungkus: "));

if (isNaN(hargaPerBungkus) || isNaN(jumlah) || hargaPerBungkus <= 0 || jumlah <=0) {
    alert("Harga dan jumlah harus berupa angka lebih dari 0.");
} else { 
    
 //2. Proses
const total = hargaPerBungkus * jumlah;
let diskon = 0;

if (total >= 200000) {
    diskon = total * 0.1;
} else if (total >= 100000) {
    diskon = total * 0.05;
}

const totalBayar = total - diskon;

//3. Output
console.log(`Total          : Rp ${total.toLocaleString("id-ID")}`);
console.log(`Diskon         : Rp ${diskon.toLocaleString("id-ID")}`);
console.log(`Total Bayar    : Rp ${totalBayar.toLocaleString("id-ID")}`);
alert(`Total Bayar          : Rp ${totalBayar.toLocaleString("id-ID")}`);
}

//LATIHAN SENDIRI DI RUMAH, KALAU SALAH HAPUS AJA

// MATERI 1
// for: jumlah pengulangan sudah diketahui
for (let i = 1; i <= 5; i++) {
    console.log("Bungkus ke-" + i)
}

// while: ulangi selama syarat benar
let sisa = 3;
while (sisa > 0) {
    console.log("Stok tersisa: " + sisa);
    sisa--;
}

// MATERI 2
// Fungsi dengan parameter dan nilai kembalian
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

// Prosedur: fungsi yang hanya melakukan sesuatu, tanpa return
function tampilkanSapaan(nama) {
    console.log("Halo, " + nama + "!");
}

const total = hitungTotal(85000, 2);    //total bernilai 170000
tampilkanSapaan("Rahma");               //mencetak: Halo, Rahma!

// MATERI 3
const kopi = ["Toraja", "Gayo", "Kintamani"];

console.log(kopi[0]);               //Toraja (indeks pertama = 0)
console.log(kopi.length);           // 3 (jumlah elemen)
kopi.push("Bajawa");                // menambah di akhir
console.log(kopi.includes("Gayo")); // true

for (const jenis of kopi) {
    console.log(jenis);
}

kopi.forEach(function (jenis, indeks) {
    console.log((indeks + 1) + "." + jenis);
});

const stok = [
    ["Toraja", 20],
    ["Gayo", 15],
];
console.log(stok[1][0]);    //Gayo (baris ke-1, kolom ke-0)
console.log(stok[0][1]);    //20

const harga = [85000, 60000, 90000, 80000];
harga.sort(function (a, b) {
    return a - b;       //naik (kecil ke besar)
});
console.log(harga);     //[60000, 80000, 85000, 90000]

//MATERI 4
const produk = {
    nama: "Kopi Toraja",
    asal: "Sulawesi Selatan",
    kategori: "arabika",
    harga: 85000,
};

console.log(produk.nama);   //Kopi Toraja
produk.harga = 90000;       //mengubah nilai properti

const arabika = PRODUCTS.filter(function (p) {
    return p.kategori === "arabika";
});

const gayo = PRODUCTS.find(function (p) {
    return p.slug === "gayo";
});

const namaSaja = PRODUCTS.map(function (p) {
    return p.nama;
});