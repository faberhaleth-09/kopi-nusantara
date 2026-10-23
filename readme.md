# Kopi Nusantara

Halaman web statis toko biji kopi. Dibuat pada Modul kerja 1, Pelatihan Junior Web Developer, UPTD BLK Provinsi Gorontalo, Batch #5.

# Struktur Folder

- `index.html` : halaman utama
- `css/style.css` : gaya tampilan
- `img/` : gambar dan logo

## Cara Menjalankan

1. Salin folder proyek ke dalam folder `www` Laragon.
2. Jalankan Laragon (Start All)
3. Bukan `http://localhost/kopi-nusantara/` di browser.

## Penulis

Farhanah Yahya

markdown

## Backend (Bagian B2 — Flat-File JSON)
Proyek ini memiliki backend PHP, **tanpa basis data** — seluruh data
tersimpan di berkas JSON pada folder data/.

### Struktur Data
- data/produk.json — daftar produk (dan info situs/menu)
- data/transaksi.json — daftar transaksi (rincian produk bersarang di dalamnya)
- data/pengguna.json — daftar akun admin
- data/.htaccess — memproteksi folder ini dari akses langsung lewat browser

### Endpoint API
| Endpoint | Metode | Keterangan |
|---|---|---|
| api/produk.php | GET | Seluruh data produk, situs, dan menu |

### Menjalankan Proyek
1. Pastikan Laragon aktif (Apache + PHP 8.5). **Tidak perlu MariaDB.**
2. Buka http://localhost/kopi-nusantara/.

## BUG: H16-B01
a. bagian keranjang saat diletakan cursor tidak berubah warna, saya bingung stylenya diubah dimana karena style tombol tersebut tidak ada di css
b. bagian tombol tambah, kurang, dan hapus di bagian keranjang belanja tidak berfungsi sebagaimana mestinya