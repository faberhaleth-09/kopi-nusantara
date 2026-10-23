<?php 
// Jalankan skrip ini di DUA jendela terminal secara hampir bersamaan 
// (lewat CLI: php uji_locking.php) untuk melihat proses kedua MENUNGGU. 
 
$path = __DIR__ . "/uji.lock"; 
if (!file_exists($path)) { 
    file_put_contents($path, ""); 
} 
 
$handle = fopen($path, "c+"); 
echo "Menunggu kunci...\n"; 
flock($handle, LOCK_EX); 
echo "Kunci didapat. Menahan selama 5 detik...\n"; 
sleep(5); 
flock($handle, LOCK_UN); 
fclose($handle); 
echo "Kunci dilepas.\n"; 