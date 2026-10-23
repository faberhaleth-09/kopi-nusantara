function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

function tampilkanSapaan(nama) {
    console.log("Halo, " + nama + "!");
}

const total = hitungTotal(85000, 2);    //total bernilai 170000
tampilkanSapaan("Rahma");               //mencetak: Halo, Rahma!

// console.log(total);