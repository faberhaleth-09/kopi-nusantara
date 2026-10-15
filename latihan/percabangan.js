//Materi 5 Percabangan
/*
MULAI
    Diketahui Total = 150000,
    JIKA total >= 200000. MAKA TAMPILKAN "Diskon 10%"
    JIKA TIDAK, MAKA
    LAINNYA
    JIKA total >= 100000, MAKA TAMPILKAN "Diskon 5%",
    JIKA TIDAK, MAKA
    LAINNYA TAMPILKAN "Tidak ada diskon"

MULAI
    Input Harga
    Input Jumlah
    JIKA hargaPerBungkus bukan angka atau jumlah bukan angka atau hargaPerBungkus <= 0 atau jumlah <= 0. MAKA TAMPILKAN "Harga dan jumlah harus berupa angka lebih dari 0."
    JIKA total >= 200000. MAKA diskon 0.1
    JIKA TIDAK, MAKA 
    LAINNYA
    JIKA total >= 100000. MAKA diskon 0.05
    JIKA TIDAK, MAKA
    LAINNYA tidak diskon
    TOTAL BAYAR= total - diskon
    TAMPILKAN "Total Bayar"
SELESAI

    

*/
    

// IF Else

const total = 150000;

if (total >= 200000) {
    console.log("Diskon 10%");
} else if (total >= 100000) {
    console.log("Diskon 5%");
} else {
    console.log("Tidak ada Diskon");
}

// Switch Case

const kategori = "arabika";

switch (kategori) {
    case "arabika":
          console.log("Rasa lebih asam dan beraroma");
          console.log(` ${kategori} Rasa lebih asam dan beraroma`);
          break;
    case "robusta":
          console.log("Rasa lebih pahit dan kafein tinggi");
          break;
    default:
          console.log("Kategori tidak dikenal");

}

