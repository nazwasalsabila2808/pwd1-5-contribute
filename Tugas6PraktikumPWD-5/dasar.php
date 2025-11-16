<?php
include 'dasar.php'; // Menggunakan file dasar.php

for ($i = 1; $i <= 10; $i++) {
    if (isEven($i)) {
        echo $i . "<br>";
    }
}
?>