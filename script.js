<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Scroll to Top Button</title>
  <style>
    /* Style konten agar panjang agar scroll  2000px */
    .content {
      height: 2500px;
      background: linear-gradient(white, lightgray);
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    /* Style tombol */
    #scrollTopBtn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: darkorchid;
      border: none;
      padding: 15px 20px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0.4; /* opacity default */
      transition: opacity 0.3s ease;
      display: none; /* tombol awalnya hidden */
      color: white;
      font-size: 18px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    }

    /* opacity 100% saat hover */
    #scrollTopBtn:hover {
      opacity: 1;
    }
  </style>
</head>
<body>

  <div class="content">
    <h1>Demo Halaman Scroll</h1>
    <p>Scroll ke bawah untuk melihat tombol muncul di kanan bawah.</p>
  </div>

  <button id="scrollTopBtn" title="Kembali ke atas" aria-label="Scroll to top">&#8679;</button>

  <script>
    // Mendapatkan tombol
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Fungsi untuk menampilkan/tidak tombol berdasarkan scroll
    // Menggunakan addEventListener untuk menghindari overwrite dan lebih robust
    window.addEventListener('scroll', function() {
      // Menggunakan window.pageYOffset untuk deteksi scroll yang lebih cross-browser
      if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Fungsi tombol ketika di klik kembali ke atas
    scrollTopBtn.addEventListener('click', function() {
      // Fallback untuk browser yang tidak mendukung smooth scroll
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Fallback: scroll instan
        window.scrollTo(0, 0);
      }
    });
  </script>

</body>
</html>
