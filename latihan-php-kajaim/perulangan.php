<?php

$kategori = ["kopi robusta", "kopi bajawa", "Kopi Susu"];

foreach ($kategori as $index => $nama) {
    $nomor = $index + 1;
    echo "{$nomor}. {$nama} <br><br> ";
    echo $nama;
}   