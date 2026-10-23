<!-- PHP anang -->
<?php 
$kategori = ["arabika", "robusta", "liberika"]; 

$i = 1;
foreach ($kategori as $index) {
    // $index = $nomor + 1;
    echo $i . $index;
    }
?>

<!-- PHP ka jaim -->
<?php

$kategori = ["kopi robusta", "kopi bajawa", "Kopi Susu"];

foreach ($kategori as $index => $nama) {
    $nomor = $index + 1;
    echo "{$nomor}. {$nama} <br><br> ";
    echo $nama;
}   
?>