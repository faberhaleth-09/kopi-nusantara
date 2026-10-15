// 1. Memilih elemen
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const inputNama = document.getElementById("nama");
const tombol = document.getElementById("tombol");
const daftar = document.getElementById("daftar");
const tombolReset = document.getElementById("tombolReset");
const jumlah = document.getElementById("jumlah");

//2. Event klik pada tombol: membaca input, mengubah teks
tombol.addEventListener("click", function () { 
  const nama = inputNama.value.trim(); 
 
  if (nama === "") { 
    pesan.textContent = "Nama belum diisi."; 
  } else { 
    pesan.textContent = "Halo, " + nama + "!"; 
  } 
}); 

//3. Event klik pada judul: mengganti class
judul.addEventListener("click", function () { 
  judul.classList.toggle("aktif"); 
});

//4. Membuat elemen dari data (array PRODUCTS di data.js)
// PRODUCTS.forEach(function (p) {
//     const li = document.createElement("li");
//     li.textContent = p.nama + " (" + p.asal + ")";
//     daftar.appendChild(li);
// });

daftar.innerHTML = PRODUCTS.map(function (p) { 
  return `<li>${p.nama}</li>`; 
}).join("");

//Latihan 3.1
tombolReset.addEventListener("click", function () { 
  inputNama.value="";
  jumlah.textContent = "Jumlah Karakter:";
  pesan.textContent = "Nama belum diisi.";
});

//Latihan 3.2
inputNama.addEventListener("input", function () {
  jumlah.textContent="Jumlah Karakter:" + inputNama.value.length;
});

//Latihan 3.3
kopiRobusta = PRODUCTS.filter(function (p) {
  return p.kategori === "robusta";
});
console.table(kopiRobusta);

//Latihan 3.4

