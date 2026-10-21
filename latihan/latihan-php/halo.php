<?php 
echo "Halo, Kopi Nusantara!"; 
?>

<!-- variabel -->
<?php 
$namaProduk = "Kopi Gayo"; 
$harga = 80000; 

echo "Produk: " . $namaProduk . ", harga: Rp " . $harga  . "<br>";
// atau dengan interpolasi string (hanya jalan di tanda kutip GANDA): 
echo "Produk: $namaProduk, harga: Rp $harga";
?>

<!-- array asosiatif -->
<?php 
$produk = [ 
"slug"  => "toraja", 
"nama"  => "Kopi Toraja", 
"harga" => 85000, 
]; 

echo "<br>";
echo $produk["nama"];     // Kopi Toraja 
echo "<br>";
echo $produk["harga"] = 90000; // mengubah nilai 
?>

<!-- array bersarang -->
<?php 
$daftarProduk = [ 
    ["slug" => "toraja", "nama" => "Kopi Toraja", "harga" => 85000], 
    ["slug" => "gayo",   "nama" => "Kopi Gayo",   "harga" => 80000], 
    ]; 
echo "<br>";
echo $daftarProduk[0]["harga"];   // Kopi Toraja 
?>

<!-- Materi 3: Percabangan, Perulangan, dan Fungsi -->
<?php 
$total = 50000; 
if ($total >= 200000) { 
    echo "<br>";
    echo "Diskon 10%"; 
    } elseif ($total >= 100000) { 
        echo "<br>";
        echo "Diskon 5%"; 
        } else { 
            echo "<br>";
            echo "Tidak ada diskon"; 
            }
?>

<!-- Perulangan array berindeks-->
<?php 
$kategori = ["arabika", "robusta"]; 
foreach ($kategori as $k) { 
    echo "<br>";
    echo $k . "\n"; 
    } 
    $produk = ["nama" => "Kopi Toraja", "harga" => 85000]; 
    foreach ($produk as $kunci => $nilai) { 
        echo "<br>";
        echo "$kunci: $nilai\n"; 
        } 
        ?>

<!-- Fungsi -->
<?php 
function hitungTotal(int $harga, int $jumlah): int { 
    return $harga * $jumlah; 
    } 
    echo "<br>";
    echo hitungTotal(85000, 2);   // 170000 
?>