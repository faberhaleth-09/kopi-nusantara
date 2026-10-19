<?php
echo "Perulangan (foreach) untuk Array Asosiatif (Assosiative Array)\n";

//Data
$kopi_a=["nama" => "Kopi Toraja", "harga" => 85000];

//Logika
foreach ($kopi_a as $kunci => $nilai) {
    echo "$kunci : $nilai\n";
}
?>