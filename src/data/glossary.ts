export interface GlossaryTerm {
  term: string;
  slug: string;
  category:
    | "Dasar Web"
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Security"
    | "Performance"
    | "Tools"
    | "System Design"
    | "AI"
    | "General";
  shortDefinition: string;
  fullExplanation: string;
  codeExample?: string;
  language?: string;
  relatedTerms: string[];
}

// ============================================================
// GLOSSARY WEB DEVELOPMENT
// ============================================================
// Kumpulan istilah teknis dari semua modul pembelajaran.
// Setiap istilah dilengkapi dengan definisi singkat,
// penjelasan lengkap, contoh kode (jika relevan), dan
// istilah terkait.
// ============================================================

export const glossaryTerms: GlossaryTerm[] = [
  // ── Dasar Web ───────────────────────────────────────────
  {
    term: "API",
    slug: "api",
    category: "Dasar Web",
    shortDefinition: "Antarmuka yang memungkinkan dua aplikasi berkomunikasi satu sama lain.",
    fullExplanation:
      "API (Application Programming Interface) adalah sekumpulan aturan dan protokol yang memungkinkan aplikasi saling berkomunikasi. API mendefinisikan metode dan format data yang bisa diminta serta respons yang akan diterima. Dalam konteks web, API biasanya merujuk pada REST API atau GraphQL yang memungkinkan frontend berkomunikasi dengan backend melalui HTTP requests. API juga digunakan untuk integrasi dengan layanan pihak ketiga seperti payment gateway, SMS service, atau social media login.",
    codeExample: `// Contoh REST API dengan fetch
const response = await fetch('https://api.example.com/users', {
  method: 'GET',
  headers: { 'Authorization': 'Bearer ' + token }
});
const users = await response.json();`,
    language: "typescript",
    relatedTerms: ["REST", "GraphQL", "Endpoint", "HTTP Request", "JSON"],
  },
  {
    term: "Browser (Client)",
    slug: "browser-client",
    category: "Dasar Web",
    shortDefinition: "Software yang digunakan user untuk mengakses website (Chrome, Firefox, Safari).",
    fullExplanation:
      "Browser adalah software yang menginterpretasikan kode web (HTML, CSS, JavaScript) dan menampilkannya sebagai halaman visual yang bisa diinteraksi user. Browser bertindak sebagai client dalam arsitektur client-server. Browser mengirim HTTP requests ke server, menerima responses, lalu merender konten. Browser modern juga menyediakan Developer Tools (DevTools) untuk debugging, localStorage/sessionStorage untuk penyimpanan data lokal, dan berbagai API web seperti geolocation, camera, dan push notifications.",
    relatedTerms: ["Server", "HTTP", "DOM", "Rendering"],
  },
  {
    term: "Cache",
    slug: "cache",
    category: "Dasar Web",
    shortDefinition: "Penyimpanan sementara data yang sering diakses agar lebih cepat diambil berikutnya.",
    fullExplanation:
      "Cache adalah mekanisme penyimpanan sementara untuk data yang sering diakses. Tanpa cache, setiap request harus mengambil data dari sumber utama (database, API eksternal) yang lebih lambat. Dengan cache, data yang sudah pernah diambil disimpan di lokasi yang lebih cepat diakses (memory, browser storage, CDN). Ada beberapa jenis cache: browser cache (untuk static assets), application cache (Redis/Memcached), CDN cache, dan database query cache. Cache selalu punya TTL (Time To Live) — berapa lama data dianggap valid sebelum harus di-refresh.",
    codeExample: `// Cache-aside pattern
async function getData(key: string) {
  let data = await redis.get(key);
  if (!data) {
    data = await db.query(key);
    await redis.setex(key, 300, JSON.stringify(data));
  }
  return JSON.parse(data);
}`,
    language: "typescript",
    relatedTerms: ["CDN", "Redis", "TTL", "Cache Invalidation", "Performance"],
  },
  {
    term: "CDN (Content Delivery Network)",
    slug: "cdn",
    category: "Dasar Web",
    shortDefinition: "Jaringan server di seluruh dunia yang mendistribusikan konten secara cepat ke user terdekat.",
    fullExplanation:
      "CDN adalah jaringan server yang tersebar di lokasi geografis berbeda di seluruh dunia. Tujuannya adalah mendistribusikan konten website (gambar, video, CSS, JS) dari server terdekat dengan lokasi user. Misalnya user di Jakarta mengakses website yang server utamanya di Amerika — tanpa CDN, semua asset harus ditransfer dari Amerika (lambat). Dengan CDN, asset disajikan dari edge server terdekat (misalnya Singapura), mengurangi latency secara drastis. CDN populer: CloudFlare, AWS CloudFront, Fastly, Akamai.",
    relatedTerms: ["Cache", "Edge Server", "Latency", "Static Assets"],
  },
  {
    term: "Client-Side Rendering (CSR)",
    slug: "client-side-rendering",
    category: "Dasar Web",
    shortDefinition: "Render halaman di browser menggunakan JavaScript setelah HTML dasar di-load.",
    fullExplanation:
      "Client-Side Rendering (CSR) adalah pendekatan di mana browser menerima HTML minimal (hampir kosong) dan JavaScript bundle, kemudian JavaScript yang menangani rendering seluruh konten halaman secara dinamis. Framework seperti React, Vue, dan Angular umumnya menggunakan CSR secara default. Keuntungan CSR: interaktivitas tinggi, transisi halaman mulus seperti aplikasi native, mengurangi beban server. Kekurangan: waktu First Contentful Paint (FCP) lebih lambat karena harus download dan eksekusi JS dulu, SEO bisa terganggu karena bot crawler mungkin tidak menunggu JS dieksekusi.",
    relatedTerms: ["Server-Side Rendering", "Hydration", "SPA", "FCP"],
  },
  {
    term: "Cookie",
    slug: "cookie",
    category: "Dasar Web",
    shortDefinition: "Data kecil yang disimpan browser dan dikirim ke server dengan setiap request.",
    fullExplanation:
      "Cookie adalah potongan data kecil (maksimal ~4KB) yang disimpan browser atas permintaan server. Setiap kali browser mengakses website, cookie otomatis dikirim bersama request. Cookie umumnya digunakan untuk: autentikasi (session ID), tracking user behavior, dan menyimpan preferensi user. Cookie bisa diatur atribut keamanannya: HttpOnly (tidak bisa diakses JavaScript — melindungi dari XSS), Secure (hanya dikirim via HTTPS), SameSite (melindungi dari CSRF), dan Expires/Max-Age (waktu kadaluarsa).",
    codeExample: `// Set cookie dengan Hono
import { setCookie, getCookie } from 'hono/cookie';

// Set secure cookie
setCookie(c, 'sessionId', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict',
  maxAge: 60 * 60 * 24 * 7, // 7 hari
});

// Baca cookie
const sessionId = getCookie(c, 'sessionId');`,
    language: "typescript",
    relatedTerms: ["Session", "LocalStorage", "XSS", "CSRF", "JWT"],
  },
  {
    term: "CORS (Cross-Origin Resource Sharing)",
    slug: "cors",
    category: "Dasar Web",
    shortDefinition: "Mekanisme browser yang mengontrol resource boleh diakses dari domain lain.",
    fullExplanation:
      "CORS adalah kebijakan keamanan browser yang membatasi resource (API, font, gambar) agar hanya bisa diakses dari domain yang sama. Secara default, browser memblokir request dari website A ke API di website B (origin berbeda). Untuk mengizinkan, server harus mengirim header CORS yang spesifik: Access-Control-Allow-Origin (domain mana yang diizinkan), Access-Control-Allow-Methods (HTTP methods yang diperbolehkan), Access-Control-Allow-Headers (headers kustom yang diizinkan). Preflight request (OPTIONS) dikirim browser terlebih dahulu untuk memeriksa izin sebelum request sebenarnya.",
    codeExample: `// CORS middleware dengan Hono
import { cors } from 'hono/cors';

app.use(cors({
  origin: ['https://frontend.com', 'https://app.com'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
}));`,
    language: "typescript",
    relatedTerms: ["Origin", "Preflight", "HTTP Headers", "Security"],
  },
  {
    term: "DNS (Domain Name System)",
    slug: "dns",
    category: "Dasar Web",
    shortDefinition: "Sistem yang menerjemahkan nama domain (google.com) menjadi alamat IP.",
    fullExplanation:
      "DNS adalah sistem penamaan hierarkis yang menerjemahkan nama domain yang mudah diingat manusia (seperti google.com) menjadi alamat IP numerik (seperti 142.250.185.78) yang dimengerti komputer. Prosesnya: user ketik domain → browser cek cache lokal → tanya DNS resolver (biasanya ISP) → resolver tanya root server → root arahkan ke TLD server (.com) → TLD arahkan ke authoritative server domain → dapat IP → browser connect ke server. DNS propagation (waktu perubahan DNS menyebar ke seluruh dunia) bisa memakan waktu 24-48 jam. DNS record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (email), TXT (verifikasi).",
    relatedTerms: ["Domain", "IP Address", "Server", "HTTP"],
  },
  {
    term: "Endpoint",
    slug: "endpoint",
    category: "Dasar Web",
    shortDefinition: "URL spesifik di API tempat request dikirim untuk operasi tertentu.",
    fullExplanation:
      "Endpoint adalah URL spesifik dalam API yang merepresentasikan satu operasi atau resource. Misalnya dalam REST API, endpoint /users bisa menangani GET (list users), POST (buat user), endpoint /users/:id menangani GET (detail user), PUT (update user), DELETE (hapus user). Endpoint adalah titik kontak antara client dan server — client mengirim request ke endpoint, server memproses dan mengembalikan response. Desain endpoint yang baik: konsisten, predictable, menggunakan kata benda (bukan kata kerja), dan versioning (/api/v1/users).",
    codeExample: `// RESTful endpoints
GET    /api/v1/users       -> List semua user
POST   /api/v1/users       -> Buat user baru
GET    /api/v1/users/:id   -> Detail user
PUT    /api/v1/users/:id   -> Update user
DELETE /api/v1/users/:id   -> Hapus user`,
    language: "text",
    relatedTerms: ["API", "REST", "HTTP Methods", "Route"],
  },
  {
    term: "HTTP (HyperText Transfer Protocol)",
    slug: "http",
    category: "Dasar Web",
    shortDefinition: "Protokol komunikasi antara browser (client) dan server di web.",
    fullExplanation:
      "HTTP adalah protokol komunikasi utama di World Wide Web. HTTP bekerja dengan model request-response: client mengirim request ke server, server memproses dan mengirim response kembali. HTTP/1.1 adalah versi yang paling lama digunakan. HTTP/2 (2015) memperkenalkan multiplexing (banyak request dalam satu connection), server push, dan header compression. HTTP/3 (2022) menggunakan QUIC protocol (berbasis UDP) untuk latensi lebih rendah. HTTPS adalah HTTP dengan enkripsi TLS/SSL — semua data dienkripsi sehingga aman dari penyadapan.",
    relatedTerms: ["HTTPS", "Request", "Response", "Server", "Browser"],
  },
  {
    term: "HTTPS",
    slug: "https",
    category: "Dasar Web",
    shortDefinition: "Versi aman dari HTTP dengan enkripsi data antara browser dan server.",
    fullExplanation:
      "HTTPS (HTTP Secure) adalah HTTP dengan lapisan enkripsi TLS (Transport Layer Security) atau SSL (Secure Sockets Layer, versi lama). Enkripsi memastikan data yang dikirim antara browser dan server tidak bisa dibaca pihak ketiga (ISP, hacker di public WiFi). HTTPS juga memverifikasi identitas server melalui sertifikat SSL/TLS yang diterbitkan Certificate Authority (CA) terpercaya. Browser menampilkan gembok hijau untuk HTTPS valid. HTTPS wajib untuk: login form, payment, data sensitif, dan SEO (Google memberi ranking lebih tinggi ke website HTTPS). Let's Encrypt menyediakan sertifikat SSL gratis.",
    relatedTerms: ["HTTP", "TLS/SSL", "Certificate", "Security"],
  },
  {
    term: "IP Address",
    slug: "ip-address",
    category: "Dasar Web",
    shortDefinition: "Alamat unik yang mengidentifikasi setiap perangkat di jaringan internet.",
    fullExplanation:
      "IP Address adalah alamat numerik unik yang diberikan ke setiap perangkat yang terhubung ke jaringan internet. IPv4 menggunakan format 32-bit (misalnya 192.168.1.1) — total ~4.3 miliar alamat, yang sudah hampir habis. IPv6 menggunakan 128-bit (misalnya 2001:0db8:85a3::8a2e:0370:7334) — jumlah alamat hampir tak terbatas. IP address bisa publik (terlihat dari internet) atau private (hanya dalam jaringan lokal seperti 192.168.x.x). IP address bukan identitas permanen — ISP bisa mengubah IP publik user secara dinamis.",
    relatedTerms: ["DNS", "Server", "Domain", "Network"],
  },
  {
    term: "JSON (JavaScript Object Notation)",
    slug: "json",
    category: "Dasar Web",
    shortDefinition: "Format pertukaran data berbasis teks yang mudah dibaca manusia dan diparsing mesin.",
    fullExplanation:
      "JSON adalah format data berbasis teks yang terinspirasi dari sintaks object JavaScript. JSON menjadi format pertukaran data paling populer di web karena ringan, mudah dibaca, dan didukung hampir semua bahasa pemrograman. Struktur JSON: key-value pairs (object) atau ordered list (array). Tipe data yang didukung: string, number, boolean, null, object, dan array. JSON.parse() mengubah string JSON jadi object JavaScript. JSON.stringify() mengubah object JavaScript jadi string JSON. JSON tidak mendukung komentar, undefined, atau function.",
    codeExample: `// Struktur JSON
{
  "id": 1,
  "nama": "Budi Santoso",
  "email": "budi@example.com",
  "isActive": true,
  "alamat": {
    "kota": "Jakarta",
    "kodePos": 12345
  },
  "hobi": ["coding", "gaming", "membaca"]
}

// Parsing di JavaScript
const data = JSON.parse(jsonString);
const json = JSON.stringify(data);`,
    language: "json",
    relatedTerms: ["API", "REST", "XML", "Data Format"],
  },
  {
    term: "Latency",
    slug: "latency",
    category: "Dasar Web",
    shortDefinition: "Waktu yang dibutuhkan data untuk berpindah dari sumber ke tujuan.",
    fullExplanation:
      "Latency adalah waktu delay antara action user dan response sistem — diukur dalam milidetik (ms). Latency rendah = responsif, latency tinggi = lambat. Beberapa jenis latency: Network latency (waktu data berpindah melalui jaringan — dipengaruhi jarak fisik), Server latency (waktu server memproses request — dipengaruhi CPU, memory, query optimization), dan DNS latency (waktu DNS lookup). Latency tipikal: < 50ms (excellent), 50-200ms (good), 200-500ms (poor), > 500ms (bad). Latency tidak bisa dihilangkan sepenuhnya karena dibatasi oleh kecepatan cahaya.",
    relatedTerms: ["Bandwidth", "RTT", "CDN", "Performance"],
  },
  {
    term: "Load Balancing",
    slug: "load-balancing",
    category: "Dasar Web",
    shortDefinition: "Distribusi traffic ke beberapa server untuk menghindari overload pada satu server.",
    fullExplanation:
      "Load balancing adalah teknik mendistribusikan incoming traffic (requests) ke beberapa server backend agar tidak ada satu server yang menerima beban terlalu berat. Load balancer berdiri di depan server backend sebagai reverse proxy. Algoritma load balancing: Round Robin (giliran bergantian), Least Connections (ke server dengan koneksi paling sedikit), IP Hash (user dari IP yang sama selalu ke server yang sama — untuk session consistency), dan Weighted (server lebih kuat dapat lebih banyak traffic). Load balancer juga melakukan health check — kalau satu server mati, traffic dialihkan ke server lain (failover).",
    relatedTerms: ["Server", "Scalability", "Reverse Proxy", "Failover"],
  },
  {
    term: "LocalStorage",
    slug: "localstorage",
    category: "Dasar Web",
    shortDefinition: "Penyimpanan data di browser yang persisten meski halaman ditutup.",
    fullExplanation:
      "LocalStorage adalah API browser untuk menyimpan data key-value secara persisten di browser user. Data tetap ada meski browser ditutup dan dibuka lagi (tidak expire). Kapasitas ~5-10MB per domain. LocalStorage bersifat synchronous dan hanya bisa menyimpan string — object harus di-serialize dengan JSON.stringify() terlebih dahulu. Cocok untuk: menyimpan preferensi user (dark mode, bahasa), caching data yang jarang berubah, menyimpan draft form. Tidak cocok untuk: data sensitif (bisa diakses JavaScript), data besar (blocking UI), data yang perlu di-share antar tab (gunakan IndexedDB atau server).",
    codeExample: `// Simpan data ke LocalStorage
localStorage.setItem('theme', 'dark');
localStorage.setItem('user', JSON.stringify({ id: 1, nama: 'Budi' }));

// Ambil data
const theme = localStorage.getItem('theme');
const user = JSON.parse(localStorage.getItem('user') || '{}');

// Hapus data
localStorage.removeItem('theme');
localStorage.clear(); // Hapus semua`,
    language: "javascript",
    relatedTerms: ["SessionStorage", "Cookie", "IndexedDB", "Cache"],
  },
  {
    term: "REST (Representational State Transfer)",
    slug: "rest",
    category: "Dasar Web",
    shortDefinition: "Gaya arsitektur API yang menggunakan HTTP methods untuk operasi CRUD pada resource.",
    fullExplanation:
      "REST adalah gaya arsitektur untuk mendesain API yang menggunakan HTTP methods (GET, POST, PUT, DELETE) untuk melakukan operasi pada resource. RESTful API menggunakan noun (kata benda) bukan verb (kata kerja) di URL-nya — contohnya /users bukan /getUsers. Principles REST: Stateless (server tidak menyimpan state client antara requests), Cacheable (responses bisa di-cache), Client-Server (terpisah), Uniform Interface (konsisten), Layered System (client tidak perlu tahu struktur server). REST menggunakan format data JSON atau XML. REST adalah pendekatan API paling populer di web development.",
    codeExample: `// RESTful API principles
GET    /posts        -> Baca semua post
GET    /posts/123    -> Baca post dengan ID 123
POST   /posts        -> Buat post baru
PUT    /posts/123    -> Update post 123 (full)
PATCH  /posts/123    -> Update post 123 (partial)
DELETE /posts/123    -> Hapus post 123`,
    language: "text",
    relatedTerms: ["API", "HTTP Methods", "CRUD", "Endpoint", "GraphQL"],
  },
  {
    term: "Server",
    slug: "server",
    category: "Dasar Web",
    shortDefinition: "Komputer yang menyimpan file website, menjalankan aplikasi, dan merespons request dari client.",
    fullExplanation:
      "Server adalah komputer (fisik atau virtual) yang berjalan 24/7 menyimpan data, menjalankan aplikasi, dan melayani request dari client (browser, mobile app). Server bisa berupa: Web Server (menyajikan static files — Nginx, Apache), Application Server (menjalankan logic aplikasi — Node.js, Bun), Database Server (menyimpan dan mengelola data — PostgreSQL, MySQL), dan File Server (menyimpan upload user). Dalam konteks cloud, server bisa virtual (VPS, EC2) atau serverless (Cloudflare Workers, AWS Lambda) di mana kamu tidak mengelola hardware sama sekali.",
    relatedTerms: ["Client", "HTTP", "Database", "Hosting"],
  },
  {
    term: "Server-Side Rendering (SSR)",
    slug: "server-side-rendering",
    category: "Dasar Web",
    shortDefinition: "Render halaman di server sebelum dikirim ke browser sehingga konten langsung terlihat.",
    fullExplanation:
      "Server-Side Rendering (SSR) adalah pendekatan di mana server merender halaman HTML lengkap sebelum mengirimkannya ke browser. Browser menerima HTML yang sudah berisi konten, sehingga user bisa melihat konten lebih cepat (First Contentful Paint lebih baik) dan SEO lebih optimal karena bot crawler bisa membaca konten langsung. Framework seperti Next.js, Nuxt.js, dan SvelteKit mendukung SSR. Setelah HTML di-load, JavaScript mengambil alih (hydration) untuk menjadikan halaman interaktif. Trade-off SSR: server lebih sibuk, hosting lebih mahal, tapi UX dan SEO lebih baik.",
    relatedTerms: ["Client-Side Rendering", "Hydration", "SEO", "FCP"],
  },
  {
    term: "Session",
    slug: "session",
    category: "Dasar Web",
    shortDefinition: "Periode interaksi antara user dan aplikasi yang diidentifikasi oleh session ID.",
    fullExplanation:
      "Session adalah mekanisme untuk menyimpan state user selama berinteraksi dengan aplikasi. HTTP bersifat stateless — setiap request tidak tahu apa-apa tentang request sebelumnya. Session mengatasi ini dengan memberi user session ID (biasanya di cookie) yang mereferensi data tersimpan di server (memory, Redis, atau database). Data session bisa berisi: user ID, role, cart contents, form progress. Session berakhir saat user logout atau setelah periode inactive tertentu (session timeout). Stateless alternative: JWT token yang menyimpan semua data di token itu sendiri — tidak perlu storage server.",
    codeExample: `// Session dengan Hono
import { sessionMiddleware } from 'hono-sessions';

app.use(sessionMiddleware({
  store: new RedisStore(redis),
  encryptionKey: process.env.SESSION_SECRET,
  expireAfterSeconds: 3600, // 1 jam
}));

app.post('/login', async (c) => {
  const session = c.get('session');
  session.set('userId', user.id);
  session.set('role', user.role);
});`,
    language: "typescript",
    relatedTerms: ["Cookie", "JWT", "Authentication", "Redis"],
  },
  {
    term: "SPA (Single Page Application)",
    slug: "spa",
    category: "Dasar Web",
    shortDefinition: "Aplikasi web yang berjalan dalam satu halaman — tidak perlu reload saat navigasi.",
    fullExplanation:
      "SPA adalah aplikasi web yang berjalan dalam satu halaman HTML saja. Saat user berpindah halaman (navigasi), konten diubah secara dinamis menggunakan JavaScript tanpa full page reload dari server. Router (seperti React Router) menangani perubahan URL dan merender komponen yang sesuai. Keuntungan SPA: transisi halaman mulus seperti aplikasi native, state di-maintain antar navigasi, lebih sedikit request ke server. Kekurangan: bundle JavaScript lebih besar, initial load lebih lambat, SEO lebih sulit (perlu SSR atau prerendering). Contoh SPA: Gmail, Google Maps, dashboard admin.",
    relatedTerms: ["Client-Side Rendering", "Router", "Hydration", "MPA"],
  },
  {
    term: "Status Code HTTP",
    slug: "status-code-http",
    category: "Dasar Web",
    shortDefinition: "Kode numerik yang menunjukkan hasil dari HTTP request (sukses, error, redirect).",
    fullExplanation:
      "Status code adalah kode numerik 3-digit yang server kirim dalam response HTTP untuk menunjukkan hasil request. Kategori: 1xx Informational (100 Continue), 2xx Success (200 OK, 201 Created, 204 No Content), 3xx Redirection (301 Moved Permanently, 302 Found, 304 Not Modified), 4xx Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity), 5xx Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable). Status code membantu client menangani response dengan tepat — misalnya retry untuk 5xx, redirect untuk 3xx, tampilkan error message untuk 4xx.",
    relatedTerms: ["HTTP", "API", "Error Handling"],
  },
  {
    term: "URL (Uniform Resource Locator)",
    slug: "url",
    category: "Dasar Web",
    shortDefinition: "Alamat lengkap suatu resource di internet (website, gambar, API endpoint).",
    fullExplanation:
      "URL adalah alamat lengkap yang menunjuk ke resource tertentu di internet. Struktur URL: protocol (https://) + domain (www.example.com) + port (:443) + path (/blog/post-1) + query string (?category=tech&page=2) + fragment (#comments). Protocol menentukan bagaimana client berkomunikasi dengan server (http, https, ftp). Domain di-resolve ke IP address oleh DNS. Path menunjuk lokasi resource di server. Query string mengirim parameter tambahan (key-value pairs). Fragment mengarah ke bagian spesifik halaman (tidak dikirim ke server). URL encoding mengubah karakter spesial (%20 untuk spasi, %3F untuk ?).",
    codeExample: `// Struktur URL
https://www.example.com:443/api/users?page=1&limit=10#results
\____/   \_____________/  \_________________________/ \____/
  |           |                       |                  |
Protocol    Domain              Path + Query        Fragment`,
    language: "text",
    relatedTerms: ["DNS", "Domain", "HTTP", "Query String"],
  },

  // ── Frontend ────────────────────────────────────────────
  {
    term: "Component",
    slug: "component",
    category: "Frontend",
    shortDefinition: "Blok UI yang independen, reusable, dan mengenkapsulasi struktur, style, dan logic.",
    fullExplanation:
      "Component adalah konsep fundamental di modern frontend development. Component adalah blok UI yang independen yang mengenkapsulasi struktur (HTML/template), styling (CSS), dan behavior (JavaScript) dalam satu unit. Component bisa digunakan kembali (reusable) di berbagai tempat dalam aplikasi. Setiap component punya state (data internal) dan props (data dari parent). Component bisa memiliki lifecycle (mount, update, unmount). Contoh component: Button, Card, Navbar, Modal. Component-based architecture membuat kode lebih terorganisir, mudah di-maintain, dan mudah di-test.",
    codeExample: `// React Component
function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Penggunaan
<Button label="Simpan" onClick={handleSave} variant="primary" />`,
    language: "tsx",
    relatedTerms: ["Props", "State", "React", "JSX"],
  },
  {
    term: "CSS",
    slug: "css",
    category: "Frontend",
    shortDefinition: "Bahasa stylesheet untuk mengatur tampilan visual elemen HTML.",
    fullExplanation:
      "CSS (Cascading Style Sheets) adalah bahasa untuk menggambarkan presentasi dokumen HTML — warna, font, layout, animasi, dan semua aspek visual. CSS bekerja berdasarkan selector (menarget elemen HTML) dan declaration block (properti + nilai). Konsep kunci: Specificity (seberapa spesifik selector — ID > class > element), Cascade (urutan styling — later styles override earlier), Inheritance (properti tertentu diwariskan ke child elements). CSS modern: Flexbox (layout 1D), Grid (layout 2D), Custom Properties (CSS variables), Container Queries, dan @layer untuk mengelola cascade. Preprocessor seperti Sass dan Less menambah fitur: variables, nesting, mixins, partials.",
    codeExample: `/* CSS modern dengan Flexbox dan Custom Properties */
:root {
  --primary-color: #3b82f6;
  --spacing: 1rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing);
}

.card {
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacing) * 2);
  border-radius: 8px;
  background: var(--primary-color);
}`,
    language: "css",
    relatedTerms: ["HTML", "Flexbox", "Grid", "Tailwind CSS", "Responsive Design"],
  },
  {
    term: "DOM (Document Object Model)",
    slug: "dom",
    category: "Frontend",
    shortDefinition: "Representasi struktur HTML sebagai tree of objects yang bisa dimanipulasi JavaScript.",
    fullExplanation:
      "DOM adalah representasi tree-like dari struktur HTML dokumen di memory. Setiap elemen HTML (tag), atribut, dan text node menjadi node dalam tree. DOM adalah interface programming untuk web page — JavaScript bisa mengakses dan memanipulasi DOM untuk mengubah konten, struktur, dan style halaman secara dinamis. Virtual DOM (konsep React) adalah representasi DOM di memory JavaScript. Saat state berubah, React membandingkan Virtual DOM baru dengan yang lama (diffing), lalu hanya mengupdate DOM nyata yang berubah (reconciliation) — ini jauh lebih efisien daripada manipulasi DOM langsung.",
    codeExample: `// DOM manipulation vanilla JS
const element = document.getElementById('app');
element.textContent = 'Hello World';
element.classList.add('active');
element.style.color = 'red';

// Membuat elemen baru
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);`,
    language: "javascript",
    relatedTerms: ["Virtual DOM", "HTML", "JavaScript", "Rendering"],
  },
  {
    term: "Flexbox",
    slug: "flexbox",
    category: "Frontend",
    shortDefinition: "Sistem layout CSS satu dimensi untuk mengatur alignment dan distribusi ruang antar item.",
    fullExplanation:
      "Flexbox (Flexible Box Layout) adalah sistem layout CSS satu dimensi (satu baris atau satu kolom) yang memudahkan pengaturan alignment, spacing, dan distribusi ruang antar item dalam container. Container ditandai dengan display: flex. Property utama pada container: flex-direction (row/column), justify-content (alignment sumbu utama — flex-start, center, space-between), align-items (alignment sumbu silang), flex-wrap (wrap/nowrap). Property pada item: flex-grow (seberapa banyak item bisa tumbuh), flex-shrink (seberapa banyak item bisa mengecil), flex-basis (ukuran awal), order (urutan item). Flexbox ideal untuk: navbar, card layouts, centering elements, sidebar layouts.",
    codeExample: `/* Flexbox untuk navbar */
.navbar {
  display: flex;
  justify-content: space-between; /* Logo kiri, menu kanan */
  align-items: center;            /* Vertically center */
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem; /* Jarak antar link */
  list-style: none;
}

/* Centering dengan Flexbox */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
    language: "css",
    relatedTerms: ["CSS", "Grid", "Layout", "Responsive Design"],
  },
  {
    term: "Grid (CSS Grid)",
    slug: "css-grid",
    category: "Frontend",
    shortDefinition: "Sistem layout CSS dua dimensi (baris dan kolom) untuk desain kompleks.",
    fullExplanation:
      "CSS Grid Layout adalah sistem layout dua dimensi yang menangani baris dan kolom secara bersamaan. Berbeda dengan Flexbox yang satu dimensi, Grid bisa mengatur layout kompleks seperti dashboard, gallery foto, dan magazine-style layouts. Container ditandai dengan display: grid. Property utama: grid-template-columns (definisi kolom — repeat(3, 1fr), repeat(auto-fit, minmax(200px, 1fr))), grid-template-rows (definisi baris), gap (jarak antar cell), grid-area (penamaan area). Grid juga mendukung implicit grid (item yang melebihi definisi otomatis ditambahkan), dan subgrid (nested grid yang mengikuti grid parent).",
    codeExample: `/* CSS Grid untuk dashboard */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar + konten */
  grid-template-rows: 60px 1fr;      /* Header + konten */
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  min-height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }`,
    language: "css",
    relatedTerms: ["CSS", "Flexbox", "Layout", "Responsive Design"],
  },
  {
    term: "HTML",
    slug: "html",
    category: "Frontend",
    shortDefinition: "Bahasa markup untuk membuat struktur dan konten halaman web.",
    fullExplanation:
      "HTML (HyperText Markup Language) adalah bahasa markup standard untuk membuat halaman web. HTML menggunakan tags untuk mendefinisikan elemen: heading (<h1>-<h6>), paragraf (<p>), link (<a>), gambar (<img>), form (<form>, <input>), dan lainnya. Semantic HTML menggunakan tags yang menggambarkan maknanya (<article>, <nav>, <aside>, <header>, <footer>, <main>) bukan hanya <div> generic. Semantic HTML penting untuk: accessibility (screen reader memahami struktur), SEO (search engine memahami konten), dan maintainability. HTML5 memperkenalkan banyak fitur baru: video/audio native, canvas, localStorage, geolocation API, dan WebSocket.",
    codeExample: `<!-- Semantic HTML structure -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Saya</title>
</head>
<body>
  <header>
    <nav><!-- Navigation links --></nav>
  </header>
  <main>
    <article>
      <h1>Judul Artikel</h1>
      <p>Konten artikel...</p>
    </article>
    <aside><!-- Sidebar content --></aside>
  </main>
  <footer><!-- Footer content --></footer>
</body>
</html>`,
    language: "html",
    relatedTerms: ["CSS", "JavaScript", "Semantic HTML", "DOM"],
  },
  {
    term: "Hydration",
    slug: "hydration",
    category: "Frontend",
    shortDefinition: "Proses meng-attach event listener dan state ke HTML yang sudah di-render server.",
    fullExplanation:
      "Hydration adalah proses di mana framework JavaScript (React, Vue, Svelte) meng-attach event listener dan reactivity system ke HTML yang sudah di-render oleh server (SSR). Bayangkan HTML dari server seperti patung kering — hydration adalah proses memberinya 'kehidupan' dengan menambahkan interaktivitas. Tanpa hydration, halaman terlihat tapi tidak interaktif (tombol tidak bisa diklik, form tidak berfungsi). Proses hydration: framework membandingkan DOM yang ada dengan Virtual DOM, meng-attach event listener, dan meng-setup state management. Partial hydration (Astro, Qwik) hanya menghidrasi komponen yang benar-benar butuh interaktivitas — sisanya tetap static HTML.",
    relatedTerms: ["Server-Side Rendering", "Virtual DOM", "SPA", "Islands Architecture"],
  },
  {
    term: "JSX",
    slug: "jsx",
    category: "Frontend",
    shortDefinition: "Sintaks extension JavaScript yang memungkinkan penulisan HTML-like code di dalam JS.",
    fullExplanation:
      "JSX (JavaScript XML) adalah sintaks extension untuk JavaScript yang memungkinkan developer menulis markup yang mirip HTML langsung di dalam kode JavaScript. JSX adalah sintactic sugar untuk React.createElement() — setiap tag JSX dikompilasi menjadi pemanggilan fungsi tersebut. JSX memudahkan visualisasi struktur UI karena markup dan logic berada di file yang sama. JSX bukan template engine — di dalam JSX bisa menulis JavaScript expression apa pun dengan curly braces {}. JSX harus punya satu root element (atau React Fragment <>). Attribute JSX menggunakan camelCase (className, onClick, htmlFor) bukan kebab-case. JSX harus di-transpile (Babel, SWC) sebelum bisa dijalankan browser.",
    codeExample: `// JSX di React
function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio || 'Tidak ada bio'}</p>
      <button onClick={() => follow(user.id)}>
        Follow
      </button>
    </div>
  );
}`,
    language: "tsx",
    relatedTerms: ["React", "Component", "TSX", "Babel"],
  },
  {
    term: "Props",
    slug: "props",
    category: "Frontend",
    shortDefinition: "Data yang dikirim dari parent component ke child component sebagai argument.",
    fullExplanation:
      "Props (properties) adalah mekanisme untuk mengirim data dari parent component ke child component di framework seperti React dan Vue. Props bersifat read-only — child component tidak boleh mengubah props-nya. Jika child perlu mengubah data, gunakan callback function (event) yang dikirim sebagai prop. Props bisa berupa tipe data apa pun: string, number, boolean, array, object, function, bahkan component lain. TypeScript membuat props lebih aman dengan mendefinisikan interface/tipe untuk setiap component. Props spreading ({...props}) memungkinkan meneruskan semua props ke child element. Default props bisa diberikan dengan destructuring: function Button({ size = 'md' }).",
    codeExample: `// Definisi component dengan props (TypeScript)
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;     // Optional
  onAction: () => void;  // Callback
  tags: string[];
}

function Card({ title, description, imageUrl, onAction, tags }: CardProps) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <button onClick={onAction}>Lihat Detail</button>
    </div>
  );
}`,
    language: "tsx",
    relatedTerms: ["Component", "State", "TypeScript", "React"],
  },
  {
    term: "React",
    slug: "react",
    category: "Frontend",
    shortDefinition: "Library JavaScript untuk membangun UI berbasis component.",
    fullExplanation:
      "React adalah library JavaScript yang dikembangkan Facebook (Meta) untuk membangun user interface berbasis component. React menggunakan Virtual DOM untuk update efisien, JSX untuk declarative UI, dan unidirectional data flow (data mengalir dari parent ke child via props). Konsep kunci React: Components (blok UI reusable), State (data yang bisa berubah dan trigger re-render), Props (data dari parent ke child), Hooks (useState, useEffect, useContext — menambah state dan lifecycle ke functional components), dan Context API (state sharing tanpa prop drilling). React ecosystem mencakup: React Router (routing), Redux/Zustand (state management), Next.js (framework full-stack), dan React Query (server state management).",
    codeExample: `// React Component dengan Hooks
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Tambah
      </button>
    </div>
  );
}`,
    language: "tsx",
    relatedTerms: ["JSX", "Component", "Hooks", "Virtual DOM", "State"],
  },
  {
    term: "Responsive Design",
    slug: "responsive-design",
    category: "Frontend",
    shortDefinition: "Desain yang menyesuaikan tampilan berdasarkan ukuran layar perangkat.",
    fullExplanation:
      "Responsive Design adalah pendekatan desain web yang memastikan halaman terlihat dan berfungsi baik di semua ukuran layar — dari ponsel kecil sampai monitor besar. Teknik utama: CSS Media Queries (menerapkan style berbeda berdasarkan ukuran viewport), Flexible Grid (layout yang menyesuaikan, bukan fixed width), Flexible Images (gambar yang tidak melebihi container width), dan Mobile-First (desain untuk mobile dulu, lalu tambah fitur untuk layar lebih besar). Breakpoint umum: sm (640px), md (768px), lg (1024px), xl (1280px). Container Queries (CSS baru) memungkinkan styling berdasarkan ukuran container, bukan viewport. Testing responsive: Chrome DevTools Device Mode, BrowserStack, testing di device nyata.",
    codeExample: `/* Responsive dengan Media Queries */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Tailwind approach */
// className="p-4 md:p-8 lg:px-12 max-w-full md:max-w-3xl lg:max-w-5xl mx-auto"`,
    language: "css",
    relatedTerms: ["CSS", "Media Query", "Mobile-First", "Flexbox", "Grid"],
  },
  {
    term: "State",
    slug: "state",
    category: "Frontend",
    shortDefinition: "Data yang berubah seiring waktu dan menyebabkan UI di-render ulang.",
    fullExplanation:
      "State adalah data dalam aplikasi yang bisa berubah seiring waktu dan ketika berubah, UI di-render ulang untuk mencerminkan data terbaru. Dalam React, state dikelola dengan useState hook (state lokal component) atau useReducer (state kompleks). State bisa: Local State (hanya digunakan component itu — form input, toggle), Lifted State (di-share antar sibling components via parent), Global State (diakses dari mana saja — Zustand, Redux, Context API). Pentingnya immutable update: state tidak diubah langsung (state.value = 5 — jangan!), tapi diganti dengan nilai baru (setState({ ...state, value: 5 })). Server State (data dari API) sebaiknya dikelola dengan library khusus seperti TanStack Query.",
    codeExample: `// React useState
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);

// Immutable update untuk object
setUser(prev => ({ ...prev, name: 'Budi' }));

// Immutable update untuk array
setItems(prev => [...prev, newItem]);
setItems(prev => prev.filter(item => item.id !== id));`,
    language: "typescript",
    relatedTerms: ["Props", "React", "useState", "Global State", "Re-render"],
  },
  {
    term: "Tailwind CSS",
    slug: "tailwind-css",
    category: "Frontend",
    shortDefinition: "Utility-first CSS framework untuk styling cepat dengan class utilities.",
    fullExplanation:
      "Tailwind CSS adalah CSS framework yang menggunakan pendekatan utility-first — menyediakan class-class kecil yang masing-masing melakukan satu hal spesifik (misalnya flex, pt-4, text-center, bg-blue-500). Developer membangun UI dengan menggabungkan utility classes langsung di HTML/JSX, tanpa menulis CSS custom. Keuntungan: development lebih cepat (tidak perlu switch file antara CSS dan HTML), file size kecil di production (hanya class yang dipakai di-include, sisanya di-remove oleh PurgeCSS/JIT), konsisten (design system terdefinisi), dan responsive mudah (prefix sm:, md:, lg:). Tailwind juga menyediakan component primitives melalui @tailwindcss/forms, @tailwindcss/typography, dan Headless UI.",
    codeExample: `<!-- Tailwind CSS utility classes -->
<div class="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-lg">
  <div class="flex items-center gap-3">
    <img src="avatar.jpg" class="w-10 h-10 rounded-full object-cover" />
    <div>
      <h3 class="font-semibold text-gray-900">Budi Santoso</h3>
      <p class="text-sm text-gray-500">Software Engineer</p>
    </div>
  </div>
  <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
    Follow
  </button>
</div>`,
    language: "html",
    relatedTerms: ["CSS", "Utility-First", "Responsive Design", "shadcn/ui"],
  },
  {
    term: "TypeScript",
    slug: "typescript",
    category: "Frontend",
    shortDefinition: "Superset JavaScript dengan static type checking untuk kode lebih aman.",
    fullExplanation:
      "TypeScript adalah superset JavaScript yang menambahkan static type system. Kode TypeScript dikompilasi menjadi JavaScript sebelum dijalankan. Type checking terjadi saat compile time (bukan runtime) — menangkap bug sebelum aplikasi di-deploy. Fitur utama: Type annotations (let name: string), Interfaces (definisi bentuk object), Generics (tipe yang bisa diparameterisasi — Promise<T>, Array<T>), Union Types (string | number), Type Inference (TypeScript bisa menebak tipe tanpa annotation), dan Decorators. TypeScript meningkatkan developer experience dengan autocomplete, refactoring aman, dan dokumentasi otomatis. Hampir semua library modern menyediakan type definitions (.d.ts files).",
    codeExample: `// TypeScript basics
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional
}

// Function dengan typed parameters dan return type
function getUserById(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(res => res.json());
}

// Generic function
function wrapInArray<T>(value: T): T[] {
  return [value];
}
// Usage: wrapInArray(5) -> number[]
//         wrapInArray('hi') -> string[]`,
    language: "typescript",
    relatedTerms: ["JavaScript", "Interface", "Generic", "Type Checking"],
  },
  {
    term: "Virtual DOM",
    slug: "virtual-dom",
    category: "Frontend",
    shortDefinition: "Representasi DOM di memory JavaScript yang memungkinkan update efisien.",
    fullExplanation:
      "Virtual DOM adalah teknik di mana framework (React, Vue) menyimpan representasi DOM di memory JavaScript sebagai object tree (bukan mengakses DOM browser langsung). Saat state berubah: framework membuat Virtual DOM baru, membandingkan dengan Virtual DOM sebelumnya (diffing algorithm — O(n) complexity), menentukan minimal changes yang perlu dilakukan, lalu mengupdate DOM nyata (reconciliation). Ini jauh lebih efisien daripada manipulasi DOM langsung yang lambat. Virtual DOM bukan teknologi browser — itu adalah pattern yang diimplementasikan library. Alternatif modern: Signals (Solid.js, Preact) yang lebih granular — hanya mengupdate bagian DOM yang terkait tanpa Virtual DOM tree comparison.",
    relatedTerms: ["DOM", "React", "Re-render", "Hydration"],
  },

  // ── Backend ─────────────────────────────────────────────
  {
    term: "Authentication",
    slug: "authentication",
    category: "Backend",
    shortDefinition: "Proses memverifikasi identitas user (siapa dia).",
    fullExplanation:
      "Authentication adalah proses memverifikasi identitas user — memastikan user adalah siapa yang dia klaim. Metode authentication: Password-based (user mengirim email+password, server verifikasi dengan hash yang tersimpan), Token-based (server mengirim token setelah login sukses, token dikirim client di setiap request — JWT adalah format token paling populer), OAuth (login via third-party seperti Google, GitHub — user tidak perlu membuat password baru), dan Multi-Factor Authentication (MFA — memerlukan verifikasi tambahan seperti OTP, fingerprint). Jangan pernah menyimpan password plain text — selalu hash dengan bcrypt, Argon2, atau scrypt.",
    codeExample: `// Password hashing dengan bcrypt
import { hash, compare } from 'bcrypt';

// Saat registrasi
const hashedPassword = await hash(password, 12); // 12 = salt rounds

// Saat login
const isValid = await compare(inputPassword, storedHash);
if (!isValid) throw new Error('Invalid credentials');`,
    language: "typescript",
    relatedTerms: ["Authorization", "JWT", "OAuth", "Bcrypt", "Session"],
  },
  {
    term: "Authorization",
    slug: "authorization",
    category: "Backend",
    shortDefinition: "Proses menentukan apa yang boleh dilakukan user setelah dia terautentikasi.",
    fullExplanation:
      "Authorization adalah proses menentukan hak akses user setelah identitasnya terverifikasi (authentication selesai). Authorization menjawab pertanyaan 'User ini boleh melakukan apa?' Contoh: User A boleh mengedit post sendiri tapi tidak post orang lain. User admin boleh mengakses dashboard, user biasa tidak. Pendekatan authorization: RBAC (Role-Based Access Control — hak berdasarkan role: admin, editor, viewer), ABAC (Attribute-Based Access Control — hak berdasarkan atribut: user department, time of day, location), dan ACL (Access Control List — daftar spesifik siapa bisa akses apa). Middleware authorization ditempatkan setelah authentication middleware di route handler.",
    codeExample: `// RBAC Middleware dengan Hono
app.use('/admin/*', async (c, next) => {
  const user = c.get('user');
  if (user.role !== 'admin') {
    return c.json({ error: 'Forbidden' }, 403);
  }
  await next();
});

// Resource-level authorization
app.put('/posts/:id', async (c) => {
  const post = await getPost(c.req.param('id'));
  const user = c.get('user');
  
  // User hanya boleh edit post sendiri
  if (post.authorId !== user.id && user.role !== 'admin') {
    return c.json({ error: 'Unauthorized' }, 403);
  }
  // ...
});`,
    language: "typescript",
    relatedTerms: ["Authentication", "RBAC", "Middleware", "Permission"],
  },
  {
    term: "Bun",
    slug: "bun",
    category: "Backend",
    shortDefinition: "JavaScript runtime dan toolkit all-in-one yang cepat (bisa ganti Node.js).",
    fullExplanation:
      "Bun adalah JavaScript runtime modern yang dibangun dari nol menggunakan Zig dan JavaScriptCore (engine Safari) — bukan V8 (engine Chrome) yang dipakai Node.js. Bun mengklaim 3-4x lebih cepat dari Node.js dalam banyak benchmark. Bun bukan cuma runtime — dia juga bundler, test runner, dan package manager (npm-compatible). Bun punya native TypeScript support (tidak perlu ts-node atau tsc), built-in APIs yang kompatibel dengan Node.js, dan Web APIs seperti fetch, WebSocket, dan ReadableStream. Bun adalah alternatif modern untuk Node.js dengan fokus pada kecepatan dan developer experience.",
    codeExample: `# Bun CLI commands
bun run index.ts          # Jalankan TypeScript langsung
bun install               # Install dependencies (5x lebih cepat dari npm)
bun test                  # Run tests built-in
bun build index.ts        # Bundle untuk production
bun --hot run server.ts   # Hot reload`,
    language: "bash",
    relatedTerms: ["Node.js", "JavaScript Runtime", "TypeScript", "Hono"],
  },
  {
    term: "CRUD",
    slug: "crud",
    category: "Backend",
    shortDefinition: "Empat operasi dasar pada data: Create, Read, Update, Delete.",
    fullExplanation:
      "CRUD adalah singkatan dari empat operasi dasar yang bisa dilakukan pada data dalam aplikasi: Create (membuat data baru — INSERT di database, POST di REST API), Read (membaca/membaca data — SELECT di database, GET di REST API), Update (mengubah data yang sudah ada — UPDATE di database, PUT/PATCH di REST API), dan Delete (menghapus data — DELETE di database dan REST API). CRUD adalah fondasi hampir setiap aplikasi — dari blog sederhana sampai enterprise system. Implementasi CRUD melibatkan: API endpoints, database queries, validation, dan error handling.",
    codeExample: `// CRUD operations (REST + SQL)
// CREATE  -> POST   /posts     -> INSERT INTO posts ...
// READ    -> GET    /posts     -> SELECT * FROM posts
// READ    -> GET    /posts/:id -> SELECT * FROM posts WHERE id = ?
// UPDATE  -> PATCH  /posts/:id -> UPDATE posts SET ... WHERE id = ?
// DELETE  -> DELETE /posts/:id -> DELETE FROM posts WHERE id = ?`,
    language: "text",
    relatedTerms: ["REST", "API", "Database", "HTTP Methods"],
  },
  {
    term: "Environment Variable",
    slug: "environment-variable",
    category: "Backend",
    shortDefinition: "Variabel yang nilainya diatur di luar aplikasi (biasanya berisi konfigurasi rahasia).",
    fullExplanation:
      "Environment Variable (env var) adalah variabel yang nilainya diatur di environment sistem operasi, bukan dihardcode di source code. Env vars digunakan untuk konfigurasi yang berbeda antar environment (development, staging, production) dan menyimpan secrets (API keys, database credentials, JWT secret). Jangan pernah commit file .env ke Git! Gunakan .env.example sebagai template. File .env di-load saat aplikasi startup menggunakan library seperti dotenv. Di production, env vars biasanya diatur melalui platform (Vercel, Railway, AWS) atau secret manager (AWS Secrets Manager, HashiCorp Vault).",
    codeExample: `# .env (JANGAN DI-COMMIT!)
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
JWT_SECRET=super-secret-key-change-in-production
PORT=3000
NODE_ENV=development

# Penggunaan di kode
const port = process.env.PORT || 3000;`,
    language: "text",
    relatedTerms: ["dotenv", "Secret", "Config", "Deployment"],
  },
  {
    term: "Hono",
    slug: "hono",
    category: "Backend",
    shortDefinition: "Web framework untuk edge computing — lightweight, cepat, dan modern.",
    fullExplanation:
      "Hono adalah web framework JavaScript/TypeScript yang lightweight dan ultra-fast, didesain untuk edge computing (Cloudflare Workers, Deno Deploy, Vercel Edge, Bun). Hono means 'flame' in Japanese. Fitur: Middleware support, TypeScript-first, multiple platform (Bun, Deno, Node.js, Edge), built-in validators, JWT helper, dan JSX support. Hono disebut 'The small, simple, and ultrafast web framework' — performanya mendekati native. Routing: app.get(), app.post(), app.use() untuk middleware. Hono mirip Express.js tapi lebih modern dan cepat.",
    codeExample: `import { Hono } from 'hono';

const app = new Hono();

// Middleware
app.use('*', logger(), cors(), prettyJSON());

// Routes
app.get('/', (c) => c.text('Hello Hono!'));
app.get('/users/:id', (c) => {
  const id = c.req.param('id');
  return c.json({ id, name: 'Budi' });
});

app.post('/users', async (c) => {
  const body = await c.req.json();
  // ...
  return c.json({ created: true }, 201);
});

export default app;`,
    language: "typescript",
    relatedTerms: ["Bun", "Middleware", "Routing", "Edge Computing"],
  },
  {
    term: "JWT (JSON Web Token)",
    slug: "jwt",
    category: "Backend",
    shortDefinition: "Token terenkripsi yang menyimpan data user untuk autentikasi stateless.",
    fullExplanation:
      "JWT (JSON Web Token) adalah standar terbuka (RFC 7519) untuk membuat token access yang mengandung claims (informasi) sebagai objek JSON. JWT terdiri dari 3 bagian yang dipisahkan titik (.): Header (algoritma dan tipe token), Payload (data/claims: user ID, role, expiry), dan Signature (hash untuk verifikasi integritas). JWT ditandatangani oleh server menggunakan secret key — tidak bisa diubah client tanpa membuat signature invalid. Keuntungan JWT: stateless (server tidak perlu database untuk verifikasi token), bisa di-pass antar services (microservices), dan self-contained (semua info ada di token). Kekurangan: tidak bisa di-revoke secara instant (harus menunggu expire atau maintain blacklist).",
    codeExample: `// JWT structure (decoded)
// HEADER:    { "alg": "HS256", "typ": "JWT" }
// PAYLOAD:   { "sub": "123", "name": "Budi", "iat": 1715424000 }
// SIGNATURE: HMACSHA256(base64(header) + "." + base64(payload), secret)

// Hasil: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMifQ.signature`,
    language: "text",
    relatedTerms: ["Authentication", "Token", "Session", "Authorization"],
  },
  {
    term: "Middleware",
    slug: "middleware",
    category: "Backend",
    shortDefinition: "Fungsi yang dieksekusi di tengah request dan response untuk tugas umum.",
    fullExplanation:
      "Middleware adalah fungsi yang dieksekusi di antara request masuk dan response keluar. Middleware bisa memodifikasi request/response, menghentikan request (misalnya kalau tidak terautentikasi), atau melakukan tugas logging/monitoring. Urutan middleware penting — dieksekusi secara sequential. Contoh middleware: Authentication (verifikasi token), Authorization (cek permission), CORS (tambah headers), Body Parser (parse JSON/form data), Rate Limiter (batasi request per IP), Logger (catat setiap request), Error Handler (tangani error terpusat). Di Hono: app.use('*', middleware) untuk global, app.use('/admin/*', middleware) untuk route spesifik.",
    codeExample: `// Middleware dengan Hono
// 1. Logging middleware
app.use('*', async (c, next) => {
  const start = Date.now();
  await next(); // Lanjut ke handler berikutnya
  const duration = Date.now() - start;
  console.log(\`\${c.req.method} \${c.req.path} - \${duration}ms\`);
});

// 2. Auth middleware
app.use('/api/*', async (c, next) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return c.json({ error: 'Unauthorized' }, 401);
  
  const payload = await verify(token, secret);
  c.set('userId', payload.sub);
  await next();
});`,
    language: "typescript",
    relatedTerms: ["Hono", "Request", "Response", "Authentication"],
  },
  {
    term: "Migration (Database)",
    slug: "database-migration",
    category: "Backend",
    shortDefinition: "File yang merekam dan menerapkan perubahan schema database secara terkontrol.",
    fullExplanation:
      "Database Migration adalah file yang mendefinisikan perubahan schema database (tambah tabel, tambah kolom, ubah tipe data, buat index) dalam bentuk kode — bisa dijalankan (up) dan di-rollback (down). Migration memastikan schema database konsisten antar environment (dev, staging, production) dan antar developer dalam tim. Tanpa migration, perubahan database harus diterapkan manual — rentan error dan tidak terdokumentasi. Tools migration populer: Drizzle Kit, Prisma Migrate, Knex migrations, Laravel Migrations, Flyway, Liquibase. Migration harus di-commit ke version control bersama kode aplikasi.",
    codeExample: `// Drizzle migration example
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Run migration: npx drizzle-kit migrate`,
    language: "typescript",
    relatedTerms: ["Database", "Schema", "Drizzle ORM", "Version Control"],
  },
  {
    term: "ORM (Object-Relational Mapping)",
    slug: "orm",
    category: "Backend",
    shortDefinition: "Library yang memetakan tabel database ke object dalam kode programming.",
    fullExplanation:
      "ORM adalah teknik/library yang memungkinkan developer berinteraksi dengan database menggunakan object dan method di bahasa pemrograman, bukan menulis SQL mentah. ORM memetakan tabel database ke class/object, baris ke instance, dan kolom ke property. Keuntungan ORM: produktivitas (tidak perlu menulis SQL berulang), type safety (dengan TypeScript), database agnostic (ganti DB tanpa ubah kode), dan auto-generated queries. Kekurangan: overhead performa (ORM generate SQL yang mungkin tidak optimal), learning curve, dan abstraction leak (kompleksitas SQL tersembunyi). ORM populer: Drizzle (TypeScript, lightweight), Prisma (schema-first), TypeORM (decorator-based), Sequelize, dan SQLAlchemy (Python).",
    codeExample: `// Drizzle ORM example
import { eq } from 'drizzle-orm';
import { users } from './schema';

// SELECT * FROM users WHERE id = 1
const user = await db.select().from(users).where(eq(users.id, 1));

// INSERT INTO users (email, name) VALUES (...)
await db.insert(users).values({ email: 'budi@mail.com', name: 'Budi' });

// UPDATE users SET name = 'Budi Baru' WHERE id = 1
await db.update(users).set({ name: 'Budi Baru' }).where(eq(users.id, 1));

// DELETE FROM users WHERE id = 1
await db.delete(users).where(eq(users.id, 1));`,
    language: "typescript",
    relatedTerms: ["Database", "SQL", "Drizzle ORM", "Prisma", "TypeScript"],
  },
  {
    term: "Rate Limiting",
    slug: "rate-limiting",
    category: "Backend",
    shortDefinition: "Membatasi jumlah request yang boleh dilakukan client dalam periode waktu tertentu.",
    fullExplanation:
      "Rate Limiting adalah teknik membatasi jumlah request yang client (user/IP) boleh kirim ke server dalam periode waktu tertentu. Tujuannya: mencegah abuse (brute force, scraping), melindungi server dari overload, dan fair usage (satu user tidak memakan semua resources). Strategi rate limiting: Fixed Window (counter reset per interval), Sliding Window (lebih akurat, melacak timestamp setiap request), Token Bucket (user punya 'token' yang di-refill per interval — Google Cloud API pakai ini), dan Leaky Bucket (request masuk queue dan diproses dengan rate konstan). Implementasi bisa menggunakan Redis (store counter), in-memory (tapi tidak scalable multi-server), atau library seperti express-rate-limit.",
    codeExample: `// Rate limiting dengan Redis
async function rateLimit(key: string, max: number, windowSeconds: number) {
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, windowSeconds);
  }
  if (current > max) {
    const ttl = await redis.ttl(key);
    throw new Error(\`Rate limit exceeded. Retry in \${ttl}s\`);
  }
  return { remaining: max - current, resetIn: windowSeconds };
}

// Penggunaan: rateLimit(\`rate:\${ip}\`, 100, 60) // 100 requests per 60s`,
    language: "typescript",
    relatedTerms: ["Redis", "Security", "Middleware", "DDoS"],
  },
  {
    term: "Validation",
    slug: "validation",
    category: "Backend",
    shortDefinition: "Pemeriksaan data input untuk memastikan sesuai format, tipe, dan aturan yang diharapkan.",
    fullExplanation:
      "Validation adalah proses memeriksa data yang masuk (dari form, API request) untuk memastikan sesuai dengan aturan bisnis dan format yang diharapkan. Validation harus dilakukan di server (bukan hanya di client — client-side validation bisa di-bypass). Aspek yang divalidasi: Type (apakah string, number, boolean?), Format (email valid? URL valid?), Length (password minimal 8 karakter?), Range (umur antara 18-100?), Required (field wajib diisi?), dan Custom Rules (password harus mengandung huruf besar dan angka?). Library validation populer: Zod (TypeScript-first, powerful), Joi, Yup, class-validator, dan express-validator. Zod sangat populer karena bisa infer TypeScript type dari schema.",
    codeExample: `// Validasi dengan Zod
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(8, 'Minimal 8 karakter'),
  age: z.number().int().min(18, 'Harus 18+'),
  role: z.enum(['user', 'admin']),
});

// Validasi input
const result = userSchema.safeParse(req.body);
if (!result.success) {
  return c.json({ errors: result.error.flatten() }, 400);
}
// result.data sekarang typed dan valid`,
    language: "typescript",
    relatedTerms: ["Zod", "TypeScript", "Security", "Sanitization"],
  },
  {
    term: "WebSocket",
    slug: "websocket",
    category: "Backend",
    shortDefinition: "Protokol komunikasi dua arah real-time antara client dan server.",
    fullExplanation:
      "WebSocket adalah protokol komunikasi yang menyediakan channel dua arah (full-duplex) antara client dan server melalui satu koneksi TCP yang persisten. Berbeda dengan HTTP yang request-response (client minta, server jawab, selesai), WebSocket memungkinkan server mengirim data ke client kapan saja (real-time). Use cases: chat application, live notifications, real-time collaboration (Google Docs), live score update, stock price ticker. Proses: client kirim HTTP request dengan header Upgrade: websocket → server terima dan meng-upgrade koneksi → channel terbuka untuk komunikasi dua arah. Library: Socket.IO (fallback ke polling kalau WebSocket tidak tersedia), ws (native WebSocket), dan PartyKit (cloud-based WebSocket).",
    codeExample: `// WebSocket server (ws library)
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // Broadcast ke semua client yang terhubung
    wss.clients.forEach(client => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({ type: 'chat', message: data.toString() }));
      }
    });
  });
});`,
    language: "typescript",
    relatedTerms: ["Real-Time", "Socket.IO", "TCP", "HTTP Upgrade"],
  },

  // ── Database ────────────────────────────────────────────
  {
    term: "Database",
    slug: "database",
    category: "Database",
    shortDefinition: "Sistem penyimpanan data terstruktur yang bisa di-query dan dimanipulasi.",
    fullExplanation:
      "Database adalah sistem perangkat lunak yang menyimpan, mengelola, dan mengambil data secara terstruktur. Data disimpan dalam tables (relational) atau collections (NoSQL) dan bisa diakses menggunakan query language. Database menangani: data persistence (data tetap ada meski aplikasi restart), concurrent access (banyak user akses bersamaan), data integrity (constraint, validation), dan backup/recovery. Database bisa self-hosted (di server sendiri) atau managed (cloud service seperti AWS RDS, Supabase, PlanetScale).",
    relatedTerms: ["SQL", "PostgreSQL", "NoSQL", "ORM", "Query"],
  },
  {
    term: "Index (Database)",
    slug: "database-index",
    category: "Database",
    shortDefinition: "Struktur data yang mempercepat pencarian di database — seperti index di belakang buku.",
    fullExplanation:
      "Index adalah struktur data tambahan (biasanya B-Tree atau Hash) yang database gunakan untuk mempercepat operasi SELECT, WHERE, JOIN, dan ORDER BY. Tanpa index, database harus melakukan full table scan (memeriksa setiap baris satu per satu — O(n)). Dengan index, database bisa menemukan data dalam O(log n). Tipe index: B-Tree Index (default, bagus untuk range queries — WHERE age > 18), Hash Index (bagus untuk equality — WHERE email = 'x'), GIN Index (untuk full-text search dan array), dan Partial Index (hanya index subset data). Trade-off: setiap index memperlambat INSERT/UPDATE/DELETE karena index juga harus di-update. Jangan buat index di semua kolom — hanya kolom yang sering di-query.",
    codeExample: `-- Membuat index
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_created ON posts(created_at DESC);
CREATE UNIQUE INDEX idx_slug ON articles(slug);

-- Composite index (multi-column)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Check query plan
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'budi@mail.com';
-- Harus menunjukkan "Index Scan" bukan "Seq Scan"`,
    language: "sql",
    relatedTerms: ["Query Optimization", "B-Tree", "SQL", "Performance"],
  },
  {
    term: "NoSQL",
    slug: "nosql",
    category: "Database",
    shortDefinition: "Database non-relational yang tidak menggunakan tabel dan SQL — fleksibel untuk data tidak terstruktur.",
    fullExplanation:
      "NoSQL (Not Only SQL) adalah kategori database yang tidak menggunakan model relasional traditional (tabel dengan baris dan kolom). NoSQL designed untuk: data yang tidak terstruktur, skala horizontal (mudah ditambah server), dan flexible schema. Tipe NoSQL: Document Store (MongoDB — data dalam format JSON-like document), Key-Value Store (Redis, DynamoDB — simpel, sangat cepat), Column-Family Store (Cassandra — untuk big data, time-series), dan Graph Database (Neo4j — untuk data dengan banyak relasi). Kapan pakai NoSQL: data tidak terstruktur (log, sensor data), perlu skala horizontal, dan development cepat (no schema migration). Kapan pakai SQL: data terstruktur dengan relasi kompleks, butuh ACID transactions, dan reporting/complex queries.",
    codeExample: `// MongoDB (Document Store)
db.users.insertOne({
  name: "Budi",
  email: "budi@mail.com",
  addresses: [
    { city: "Jakarta", zip: "12345" },
    { city: "Bandung", zip: "67890" }
  ],
  metadata: { loginCount: 5, lastLogin: new Date() }
});

// Redis (Key-Value)
await redis.set('session:abc123', JSON.stringify(userData), 'EX', 3600);`,
    language: "javascript",
    relatedTerms: ["MongoDB", "Redis", "SQL", "Document Store"],
  },
  {
    term: "PostgreSQL",
    slug: "postgresql",
    category: "Database",
    shortDefinition: "Database relational open-source yang powerful dengan fitur advanced.",
    fullExplanation:
      "PostgreSQL (sering disebut Postgres) adalah sistem database relational open-source yang paling advanced dan feature-rich. PostgreSQL mendukung: ACID transactions, complex queries, JSON/JSONB (menyimpan dan query data semi-structured), full-text search, geospatial data (PostGIS extension), custom data types, stored procedures (PL/pgSQL), dan replication. JSONB memungkinkan PostgreSQL bersaing dengan document databases untuk use case tertentu. PostgreSQL juga mendukung advanced indexing: B-tree, Hash, GiST, SP-GiST, GIN, dan BRIN. PostgreSQL adalah pilihan default untuk banyak aplikasi modern karena kombinasi reliability, feature completeness, dan ecosystem yang kuat.",
    codeExample: `-- PostgreSQL JSONB query
SELECT * FROM products
WHERE attributes @> '{"color": "red"}'::jsonb;

-- Full-text search
SELECT * FROM articles
WHERE to_tsvector('indonesian', title || ' ' || content)
  @@ to_tsquery('indonesian', 'web & development');`,
    language: "sql",
    relatedTerms: ["SQL", "Database", "JSONB", "ACID"],
  },
  {
    term: "Query",
    slug: "query",
    category: "Database",
    shortDefinition: "Permintaan ke database untuk mengambil, memanipulasi, atau mengelola data.",
    fullExplanation:
      "Query adalah perintah yang dikirim ke database untuk melakukan operasi pada data. Query bisa: SELECT (mengambil data), INSERT (menambah data), UPDATE (mengubah data), DELETE (menghapus data), CREATE (membuat tabel/database), ALTER (mengubah struktur), dan DROP (menghapus tabel/database). Query SQL bisa sederhana (SELECT * FROM users) atau kompleks dengan JOIN, subquery, CTE (Common Table Expression), window functions, dan aggregate functions (COUNT, SUM, AVG, MAX, MIN). Query yang tidak dioptimasi (missing index, SELECT *, N+1 problem) adalah penyebab paling umum aplikasi lambat.",
    codeExample: `-- Query SQL dasar
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC
LIMIT 10;`,
    language: "sql",
    relatedTerms: ["SQL", "CRUD", "Index", "Query Optimization"],
  },
  {
    term: "SQL (Structured Query Language)",
    slug: "sql",
    category: "Database",
    shortDefinition: "Bahasa standar untuk mengelola dan memanipulasi database relational.",
    fullExplanation:
      "SQL adalah bahasa declarative untuk berinteraksi dengan database relational. SQL terdiri dari beberapa sub-bahasa: DDL (Data Definition Language — CREATE, ALTER, DROP untuk struktur), DML (Data Manipulation Language — SELECT, INSERT, UPDATE, DELETE untuk data), DCL (Data Control Language — GRANT, REVOKE untuk akses), dan TCL (Transaction Control Language — COMMIT, ROLLBACK untuk transaksi). SQL bersifat declarative — kamu menyebutkan APA yang mau (SELECT name FROM users) bukan BAGAIMANA cara mendapatkannya (database engine yang menentukan execution plan). SQL dialects: PostgreSQL, MySQL, SQL Server, SQLite — sintaksnya mirip tapi ada perbedaan.",
    codeExample: `-- DDL: Membuat tabel
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- DML: Operasi data
INSERT INTO users (email, name) VALUES ('budi@mail.com', 'Budi');
SELECT * FROM users WHERE email LIKE '%@gmail.com';
UPDATE users SET name = 'Budi Baru' WHERE id = 1;
DELETE FROM users WHERE id = 1;`,
    language: "sql",
    relatedTerms: ["Database", "PostgreSQL", "Query", "CRUD"],
  },
  {
    term: "Transaction",
    slug: "transaction",
    category: "Database",
    shortDefinition: "Satu unit kerja database yang harus berhasil semua atau gagal semua (atomic).",
    fullExplanation:
      "Transaction adalah sekumpulan operasi database yang diperlakukan sebagai satu unit kerja — semua berhasil (COMMIT) atau semua dibatalkan (ROLLBACK). Transaction mengikuti prinsip ACID: Atomicity (all or nothing — tidak ada setengah berhasil), Consistency (database tetap dalam state valid), Isolation (transaksi tidak saling mengganggu), Durability (data yang di-commit tetap ada meski sistem crash). Transaction penting untuk operasi finansial (transfer bank — kurangi saldo A dan tambah saldo B harus atomic), inventory management, dan data integrity. Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable (paling aman, paling lambat).",
    codeExample: `-- Transfer uang dengan transaction
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 'A';
  UPDATE accounts SET balance = balance + 100 WHERE id = 'B';
  INSERT INTO transactions (from_acc, to_acc, amount) VALUES ('A', 'B', 100);
COMMIT;

-- Kalau ada error antara BEGIN dan COMMIT:
ROLLBACK; -- Semua perubahan dibatalkan`,
    language: "sql",
    relatedTerms: ["ACID", "Database", "Rollback", "Commit"],
  },

  // ── DevOps ──────────────────────────────────────────────
  {
    term: "CI/CD (Continuous Integration/Continuous Deployment)",
    slug: "ci-cd",
    category: "DevOps",
    shortDefinition: "Automated pipeline untuk testing dan deployment kode setiap ada perubahan.",
    fullExplanation:
      "CI/CD adalah praktik automasi dalam software development. Continuous Integration (CI): setiap kali developer push kode ke repository, sistem otomatis menjalankan: linting, type checking, unit tests, integration tests, dan build. Ini menangkap error lebih awal. Continuous Deployment (CD): setelah CI berhasil, kode otomatis di-deploy ke staging/production tanpa intervensi manual. Tools CI/CD: GitHub Actions, GitLab CI, CircleCI, Travis CI, Jenkins, dan Vercel/Railway/Netlify (built-in CI/CD). Pipeline CI/CD didefinisikan dalam file YAML di repository. CI/CD mengurangi human error dalam deployment, mempercepat release cycle, dan memungkinkan rollback otomatis kalau deployment gagal.",
    codeExample: `# GitHub Actions workflow
name: CI/CD Pipeline
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run lint
      - run: bun run test
      - run: bun run build`,
    language: "yaml",
    relatedTerms: ["GitHub Actions", "Testing", "Deployment", "Automation"],
  },
  {
    term: "Container (Docker)",
    slug: "docker-container",
    category: "DevOps",
    shortDefinition: "Package aplikasi beserta dependensinya agar berjalan konsisten di mana saja.",
    fullExplanation:
      "Container adalah unit software yang mengemas kode aplikasi beserta semua dependensinya (runtime, libraries, config) sehingga aplikasi berjalan sama di environment mana pun — laptop developer, staging server, maupun production. Container mirip VM (Virtual Machine) tapi lebih lightweight karena berbagi OS kernel host — tidak perlu OS guest sendiri. Docker adalah platform containerization paling populer. Dockerfile mendefinisikan cara membangun image (blueprint container). Docker Compose mengelola multi-container application. Container memudahkan: deployment konsisten, scaling (jalankan banyak instance), dan microservices architecture. Container registry: Docker Hub, GitHub Container Registry, AWS ECR.",
    codeExample: `# Dockerfile untuk aplikasi Bun
FROM oven/bun:1 AS base
WORKDIR /app
COPY package*.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]`,
    language: "dockerfile",
    relatedTerms: ["Docker", "Containerization", "Deployment", "Microservices"],
  },
  {
    term: "Git",
    slug: "git",
    category: "DevOps",
    shortDefinition: "Sistem version control untuk melacak perubahan kode dan kolaborasi tim.",
    fullExplanation:
      "Git adalah distributed version control system yang mencatat setiap perubahan pada file — memungkinkan developer melihat siapa yang mengubah apa, kapan, dan mengapa. Setiap developer punya copy lengkap repository (history, branches) di lokal. Konsep kunci: Repository (folder yang dilacak Git), Commit (snapshot perubahan dengan message), Branch (jalur pengembangan terpisah), Merge (menggabungkan branch), Pull Request (permintaan menggabungkan kode — dengan code review), dan Remote (repository pusat di GitHub/GitLab). Git Workflow populer: Git Flow (feature branches, develop, main, release, hotfix), GitHub Flow (main + feature branches + PR), dan Trunk-Based Development (semua push ke main dengan feature flags).",
    codeExample: `# Git workflow dasar
git clone https://github.com/user/repo.git
git checkout -b feature/login   # Buat branch baru
git add .                       # Stage perubahan
git commit -m "feat: add login" # Commit
git push origin feature/login   # Push ke remote
git checkout main
git pull origin main            # Pull perubahan terbaru`,
    language: "bash",
    relatedTerms: ["GitHub", "Branch", "Commit", "Pull Request", "Version Control"],
  },
  {
    term: "Reverse Proxy",
    slug: "reverse-proxy",
    category: "DevOps",
    shortDefinition: "Server yang menerima request dari client dan meneruskannya ke server backend.",
    fullExplanation:
      "Reverse Proxy adalah server yang berdiri di depan server aplikasi, menerima request dari client, dan meneruskannya ke server backend yang sesuai. Client hanya berinteraksi dengan reverse proxy — mereka tidak tahu server backend mana yang melayani request. Fungsi reverse proxy: Load Balancing (distribusi ke multiple backend), SSL Termination (handle HTTPS, backend bisa pakai HTTP), Caching (cache response di edge), Compression (kompres response), dan Security (sembunyikan IP backend dari publik). Reverse Proxy populer: Nginx, Apache, HAProxy, Caddy (auto HTTPS), dan Traefik (cloud-native, container-aware).",
    relatedTerms: ["Nginx", "Load Balancing", "Server", "SSL Termination"],
  },
  {
    term: "Serverless",
    slug: "serverless",
    category: "DevOps",
    shortDefinition: "Model computing di mana developer tidak mengelola server — platform mengelola infrastruktur.",
    fullExplanation:
      "Serverless adalah model cloud computing di mana developer menulis dan deploy kode tanpa mengelola server sama sekali. Cloud provider yang menangani: provisioning, scaling, patching, dan maintenance. Developer hanya membayar untuk waktu eksekusi (pay-per-use) — kalau tidak ada request, tidak ada biaya. Tipe serverless: FaaS (Function as a Service — AWS Lambda, Cloudflare Workers, Vercel Functions — kode berjalan sebagai function individual), BaaS (Backend as a Service — Firebase, Supabase — backend services siap pakai), dan Edge Functions (berjalan di edge locations terdekat user — latensi ultra-rendah). Limitasi serverless: cold start (delay saat function pertama kali dijalankan setelah idle), execution timeout, dan vendor lock-in.",
    relatedTerms: ["Cloud", "FaaS", "Edge Computing", "AWS Lambda"],
  },

  // ── Security ────────────────────────────────────────────
  {
    term: "Bcrypt",
    slug: "bcrypt",
    category: "Security",
    shortDefinition: "Algoritma hashing password yang lambat sengaja untuk melawan brute force.",
    fullExplanation:
      "Bcrypt adalah algoritma password hashing yang dirancang khusus untuk lambat — sengaja. Hashing adalah proses satu arah: password diubah jadi string acak yang tidak bisa dikembalikan ke password asli. Bcrypt menggunakan salt (random value) untuk memastikan password yang sama menghasilkan hash yang berbeda. Faktor cost (salt rounds) menentukan seberapa lambat proses hashing — bisa di-adjust seiring hardware menjadi lebih cepat (10 rounds ~ 100ms, 12 rounds ~ 400ms). Lambatnya bcrypt melindungi dari brute force attack (mencoba jutaan password) karena setiap percobaan memakan waktu. Alternatif modern: Argon2 (winner Password Hashing Competition 2015), scrypt.",
    codeExample: `import { hash, compare } from 'bcrypt';

// Hash password (12 rounds)
const hashedPassword = await hash('password123', 12);
// Hasil: $2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiAYMyzJ/IqG

// Verifikasi
const isMatch = await compare('password123', hashedPassword); // true`,
    language: "typescript",
    relatedTerms: ["Password Hashing", "Authentication", "Salt", "Security"],
  },
  {
    term: "CSP (Content Security Policy)",
    slug: "csp",
    category: "Security",
    shortDefinition: "HTTP header yang mengontrol resource (script, style, image) mana yang boleh di-load.",
    fullExplanation:
      "Content Security Policy (CSP) adalah HTTP security header yang memberi kontrol granular atas resource apa yang boleh di-load dan dieksekusi oleh browser. CSP adalah defense-in-depth terhadap XSS — bahkan jika attacker berhasil menyisipkan script, CSP memblokir eksekusinya. Direktif CSP: default-src (fallback), script-src (sumber script yang diizinkan — bisa whitelist domain atau nonce-based), style-src, img-src, connect-src (AJAX/fetch), font-src, frame-src, dan report-uri (URL untuk laporan violation). Implementasi: mulai dengan report-only mode (tidak memblokir, hanya melaporkan), lalu enforce setelah konfigurasi benar. nonce-based CSP: server generate random nonce per request, inline script harus punya atribut nonce yang cocok.",
    codeExample: `# Header CSP
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-abc123' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https: data:;
  connect-src 'self' https://api.example.com;
  report-uri /csp-report`,
    language: "text",
    relatedTerms: ["XSS", "Security Headers", "HTTPS", "Security"],
  },
  {
    term: "CSRF (Cross-Site Request Forgery)",
    slug: "csrf",
    category: "Security",
    shortDefinition: "Serangan yang memaksa user terautentikasi melakukan action tidak diinginkan.",
    fullExplanation:
      "CSRF adalah serangan di mana attacker memaksa user yang sudah login ke website untuk melakukan action tidak diinginkan — tanpa user sadari. Contoh: User login ke bank.com dan tidak logout. Attacker kirim email dengan link/image yang mengirim request ke bank.com/transfer?to=attacker&amount=1000. Browser user otomatis mengirim cookie session ke bank.com → transfer berhasil. Mitigasi CSRF: CSRF Token (server generate token unik per session, form harus include token — token di header/form body tidak bisa dibaca attacker cross-origin), SameSite Cookie (SameSite=Lax/Strict — cookie tidak dikirim saat request dari domain lain), dan Validate Origin/Referer Header (pastikan request berasal dari domain yang sama).",
    relatedTerms: ["XSS", "Cookie", "SameSite", "Security"],
  },
  {
    term: "OWASP Top 10",
    slug: "owasp-top-10",
    category: "Security",
    shortDefinition: "Daftar 10 ancaman security paling kritis di aplikasi web — diupdate setiap 2-3 tahun.",
    fullExplanation:
      "OWASP (Open Web Application Security Project) Top 10 adalah daftar 10 risiko security paling kritis untuk aplikasi web — diupdate setiap beberapa tahun berdasarkan data dari jutaan aplikasi. Daftar terbaru (2021): A01 Broken Access Control (user bisa akses resource yang tidak seharusnya), A02 Cryptographic Failures (data sensitif tidak dienkripsi), A03 Injection (SQL, NoSQL, Command, LDAP injection), A04 Insecure Design (flaw dalam desain aplikasi), A05 Security Misconfiguration (default credentials, error message expose info), A06 Vulnerable Components (dependency yang punya vulnerability), A07 Auth Failures (autentikasi lemah), A08 Data Integrity Failures (data bisa diubah tanpa izin), A09 Logging Failures (tidak ada audit trail), A10 SSRF (Server-Side Request Forgery — server membuat request ke internal resources).",
    relatedTerms: ["Security", "XSS", "SQL Injection", "Vulnerability"],
  },
  {
    term: "Rate Limiting",
    slug: "rate-limiting-security",
    category: "Security",
    shortDefinition: "Membatasi jumlah request dari satu sumber untuk mencegah abuse.",
    fullExplanation:
      "(Lihat definisi lengkap di kategori Backend)",
    relatedTerms: ["Backend", "DDoS", "Brute Force"],
  },
  {
    term: "XSS (Cross-Site Scripting)",
    slug: "xss",
    category: "Security",
    shortDefinition: "Serangan menyisipkan malicious script ke website untuk dieksekusi di browser user.",
    fullExplanation:
      "XSS adalah serangan client-side di mana attacker menyisipkan malicious script (biasanya JavaScript) ke dalam website yang trusted. Script berjalan di browser user dengan privileges dari website tersebut — bisa mencuri cookies, session tokens, keylog input, atau melakukan action atas nama user. Jenis XSS: Stored XSS (script disimpan di database — paling berbahaya karena affect semua user yang mengunjungi page), Reflected XSS (script di URL — biasanya via phishing link), dan DOM-based XSS (script memanipulasi DOM client-side tanpa melalui server). Mitigasi: Escape Output (jangan render user input sebagai HTML), Content Security Policy (CSP), DOMPurify (sanitize HTML), HttpOnly Cookie (cookie tidak bisa diakses JavaScript).",
    codeExample: `// ❌ VULNERABLE: Directly rendering user input
document.innerHTML = userInput;

// ✅ SAFE: Escaping with textContent
element.textContent = userInput;

// ✅ SAFE: Sanitizing HTML with DOMPurify
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirtyHtml);`,
    language: "typescript",
    relatedTerms: ["CSP", "CSRF", "Security", "Cookie"],
  },

  // ── Performance ─────────────────────────────────────────
  {
    term: "Code Splitting",
    slug: "code-splitting",
    category: "Performance",
    shortDefinition: "Memecah bundle JavaScript menjadi chunk kecil yang di-load sesuai kebutuhan.",
    fullExplanation:
      "Code Splitting adalah teknik memecah JavaScript bundle yang besar menjadi chunk-chunk yang lebih kecil, di-load secara lazy (hanya saat dibutuhkan). Tanpa code splitting, seluruh aplikasi di-download saat user pertama kali membuka halaman — meski user hanya melihat homepage. Dengan code splitting: route-based splitting (setiap halaman/routing jadi chunk terpisah — di-load saat user navigasi ke route tersebut), component-based splitting (modal, chart, heavy component di-load saat dibutuhkan), dan library splitting (load library hanya di halaman yang menggunakannya). React mendukung code splitting via React.lazy() + Suspense, atau framework seperti Next.js yang melakukannya otomatis per page.",
    codeExample: `// Code splitting di React
import { lazy, Suspense } from 'react';

// Lazy load — chunk terpisah
const Dashboard = lazy(() => import('./Dashboard'));
const HeavyChart = lazy(() => import('./HeavyChart'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
      <HeavyChart />
    </Suspense>
  );
}`,
    language: "tsx",
    relatedTerms: ["Lazy Loading", "Bundle", "Chunk", "Suspense"],
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    category: "Performance",
    shortDefinition: "3 metrik Google untuk mengukur pengalaman user: LCP, FID/INP, dan CLS.",
    fullExplanation:
      "Core Web Vitals adalah 3 metrik performa yang Google gunakan untuk mengukur pengalaman user di website (dan mempengaruhi SEO ranking). LCP (Largest Contentful Paint — waktu elemen terbesar terlihat, ideal < 2.5 detik), INP (Interaction to Next Paint — menggantikan FID tahun 2024, mengukur responsivitas interaksi, ideal < 200ms), dan CLS (Cumulative Layout Shift — seberapa banyak layout bergerak saat loading, ideal < 0.1). Metrik pendukung: FCP (First Contentful Paint — konten pertama terlihat), TTFB (Time to First Byte — waktu server merespons), dan FID (First Input Delay — waktu browser merespons interaksi pertama — deprecated 2024). Tools pengukuran: PageSpeed Insights, Lighthouse, Chrome DevTools, Web Vitals Extension, dan Search Console.",
    relatedTerms: ["LCP", "INP", "CLS", "SEO", "Lighthouse"],
  },
  {
    term: "Lazy Loading",
    slug: "lazy-loading",
    category: "Performance",
    shortDefinition: "Menunda load resource (gambar, component, data) sampai benar-benar dibutuhkan.",
    fullExplanation:
      "Lazy Loading adalah teknik menunda pembebanan resource sampai resource tersebut benar-benar dibutuhkan — biasanya saat masuk viewport atau saat user melakukan action tertentu. Tanpa lazy loading, semua gambar di halaman di-download sekalipun user tidak scroll ke bawah. Dengan lazy loading: gambar di-download saat hampir masuk viewport. Implementasi: Images (loading=\"lazy\" attribute native di browser, atau Intersection Observer API untuk kontrol lebih), Components (React.lazy() + Suspense, dynamic import()), Routes (split per route), dan Data (infinite scroll, pagination). Lazy loading mengurangi initial page load time, menghemat bandwidth user (terutama mobile), dan mengurangi beban server.",
    codeExample: `// Lazy loading gambar (native)
<img src="image.jpg" loading="lazy" alt="Description" />

// Lazy loading component (React)
const HeavyMap = lazy(() => import('./HeavyMap'));

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreData();
    }
  });
});
observer.observe(document.querySelector('.load-trigger'));`,
    language: "javascript",
    relatedTerms: ["Code Splitting", "Intersection Observer", "Performance"],
  },
  {
    term: "Lighthouse",
    slug: "lighthouse",
    category: "Performance",
    shortDefinition: "Tool open-source Google untuk mengaudit performa, accessibility, SEO, dan best practices.",
    fullExplanation:
      "Lighthouse adalah tool auditing otomatis dari Google untuk mengukur kualitas halaman web. Lighthouse memberi score 0-100 untuk 4 kategori: Performance (kecepatan loading dan interaktivitas — berdasarkan Core Web Vitals), Accessibility (WCAG compliance — kontras warna, ARIA labels, keyboard navigation), Best Practices (security, modern web standards), dan SEO (mobile-friendly, meta tags, structured data). Lighthouse tersedia di: Chrome DevTools (tab Lighthouse), CLI (npm install -g lighthouse), PageSpeed Insights (web), dan CI/CD. Lighthouse juga memberi rekomendasi spesifik untuk improvement: optimize images, remove unused JavaScript, reduce server response time, dll. Score 90-100 = good, 50-89 = needs improvement, 0-49 = poor.",
    relatedTerms: ["Core Web Vitals", "Performance", "SEO", "Accessibility"],
  },

  // ── Tools ───────────────────────────────────────────────
  {
    term: "Chrome DevTools",
    slug: "chrome-devtools",
    category: "Tools",
    shortDefinition: "Set tools bawaan Chrome untuk debugging, profiling, dan menganalisis halaman web.",
    fullExplanation:
      "Chrome DevTools adalah set tool debugging dan profiling yang terintegrasi di Google Chrome. Tab utama: Elements (inspect dan edit DOM/CSS secara real-time — perubahan terlihat langsung tanpa reload), Console (lihat log, jalankan JavaScript, debug errors), Network (monitor semua HTTP request — lihat timing, size, headers, response), Performance (record dan analisis runtime performance — lihat flame chart), Application (lihat LocalStorage, SessionStorage, IndexedDB, Cookies, Service Workers), and Lighthouse (audit performa, a11y, SEO). Shortcuts: F12 atau Ctrl+Shift+I (Windows), Cmd+Option+I (Mac). DevTools adalah tool paling powerful dan sering digunakan sehari-hari oleh web developer.",
    relatedTerms: ["Debugging", "Performance", "Network", "Console"],
  },
  {
    term: "ESLint",
    slug: "eslint",
    category: "Tools",
    shortDefinition: "Linter JavaScript/TypeScript untuk menemukan bug dan menegakkan code style.",
    fullExplanation:
      "ESLint adalah tool static analysis untuk JavaScript dan TypeScript yang menemukan bug (variabel tidak terpakai, unreachable code, potential null reference), menegakkan code style (indentasi, quote style, naming convention), dan mencegah anti-pattern. ESLint bisa dikonfigurasi dengan file .eslintrc — menggabungkan rules dari berbagai preset: eslint:recommended (rules umum), plugin:@typescript-eslint/recommended (TypeScript), plugin:react-hooks/recommended (React hooks), dan plugin:prettier/recommended (integrasi Prettier). ESLint bisa dijalankan via CLI (npx eslint .), IDE integration (VS Code extension — error muncul saat coding), dan CI/CD pipeline (gagal build kalau ada error).",
    codeExample: `// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}`,
    language: "json",
    relatedTerms: ["Prettier", "TypeScript", "Linting", "VS Code"],
  },
  {
    term: "npm (Node Package Manager)",
    slug: "npm",
    category: "Tools",
    shortDefinition: "Package manager untuk JavaScript — mengelola dependencies dan scripts project.",
    fullExplanation:
      "npm adalah package manager default untuk Node.js/JavaScript — terinstall otomatis saat install Node.js. npm mengelola: Dependencies (library yang project butuhkan — tercatat di package.json dan package-lock.json), Scripts (perintah custom — npm run dev, npm run build, npm run test), dan Publishing (mempublikasikan package ke npm registry — npm publish). Alternatif package manager: yarn (Facebook — faster, workspaces), pnpm (performa lebih baik — shared dependencies, disk space efficient), dan bun (all-in-one — install sangat cepat). npm registry (npmjs.com) adalah repository publik terbesar untuk package — berisi jutaan library open-source. Semantic Versioning (SemVer): MAJOR.MINOR.PATCH — dipakai untuk menentukan versi dependency.",
    codeExample: `# npm commands
npm install              # Install semua dependencies
npm install react        # Install package baru
npm install -D typescript # Install dev dependency
npm run dev              # Jalankan script "dev"
npm audit                # Cek vulnerability
npm outdated             # Cek package yang perlu update`,
    language: "bash",
    relatedTerms: ["Node.js", "Package", "Yarn", "pnpm", "Bun"],
  },
  {
    term: "Prettier",
    slug: "prettier",
    category: "Tools",
    shortDefinition: "Code formatter otomatis untuk menjaga konsistensi style kode.",
    fullExplanation:
      "Prettier adalah opinionated code formatter yang secara otomatis memformat kode sesuai aturan yang konsisten — menggantikan debat tentang style (single quote vs double quote, tab vs space, trailing comma). Prettier mendukung: JavaScript, TypeScript, JSX, Vue, HTML, CSS, SCSS, JSON, Markdown, dan banyak lagi. Integrasi: VS Code (format on save — Ctrl+S langsung format), CLI (npx prettier --write .), pre-commit hook (Husky + lint-staged — format sebelum commit), dan CI/CD. Prettier bukan linter — dia tidak menemukan bug, hanya memformat. Kombinasi Prettier + ESLint adalah best practice: ESLint untuk menemukan bug, Prettier untuk formatting.",
    codeExample: `// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}`,
    language: "json",
    relatedTerms: ["ESLint", "Formatting", "VS Code", "Code Style"],
  },
  {
    term: "Vite",
    slug: "vite",
    category: "Tools",
    shortDefinition: "Build tool modern yang cepat — dev server instant, hot reload, dan bundling efisien.",
    fullExplanation:
      "Vite (bahasa Prancis untuk 'fast') adalah build tool dan development server untuk project modern JavaScript/TypeScript. Dibuat oleh Evan You (creator Vue.js). Keunggulan Vite: Dev Server cepat (menggunakan native ES Modules — tidak perlu bundling saat development, HMR (Hot Module Replacement) near-instant — perubahan kode terlihat tanpa full page reload), Optimized Build (menggunakan Rollup untuk production build — highly optimized), dan TypeScript support out of the box. Vite menggantikan tool lama seperti Create React App (CRA) dan Webpack untuk banyak project. Vite juga mendukung plugin ecosystem yang kaya: @vitejs/plugin-react, official plugins untuk Vue, Svelte, dan plugin community untuk banyak use case.",
    codeExample: `# Setup project dengan Vite
npm create vite@latest my-app -- --template react-ts

# Commands
cd my-app
npm install
npm run dev      # Dev server (instant)
npm run build    # Production build
npm run preview  # Preview production build`,
    language: "bash",
    relatedTerms: ["Build Tool", "Bundler", "HMR", "ES Modules"],
  },
  {
    term: "VS Code",
    slug: "vs-code",
    category: "Tools",
    shortDefinition: "Code editor gratis dari Microsoft — paling populer untuk web development.",
    fullExplanation:
      "VS Code (Visual Studio Code) adalah code editor gratis, open-source, dan cross-platform dari Microsoft. VS Code adalah editor paling populer untuk web development karena: Lightweight tapi powerful, IntelliSense (autocomplete cerdas berdasarkan TypeScript definitions), Debugging built-in (breakpoints, watch variables, call stack — untuk JavaScript, TypeScript, Node.js, dan banyak bahasa lain), Git integration (diff, commit, branch management langsung di editor), Extensions marketplace (ribuan extension: Prettier, ESLint, Tailwind CSS IntelliSense, Thunder Client, GitLens), dan Terminal integrated (tidak perlu switch window). Tips produktivitas: Ctrl+P (quick open file), Ctrl+Shift+F (search across files), F12 (go to definition), Alt+Click (multiple cursor).",
    relatedTerms: ["Editor", "Debugging", "Git", "Extensions"],
  },

  // ── System Design ───────────────────────────────────────
  {
    term: "CAP Theorem",
    slug: "cap-theorem",
    category: "System Design",
    shortDefinition: "Dalam sistem terdistribusi, kamu hanya bisa pilih 2 dari 3: Consistency, Availability, Partition Tolerance.",
    fullExplanation:
      "CAP Theorem (Eric Brewer, 2000) menyatakan bahwa dalam distributed system, tidak mungkin secara simultan menjamin ketiga hal: Consistency (semua node melihat data yang sama setiap saat — read selalu mengembalikan data terbaru), Availability (setiap request mendapat response, meskipun beberapa node down), dan Partition Tolerance (sistem tetap berfungsi meski terjadi network failure antar node). Karena network partition tidak bisa dihindari, dalam praktiknya sistem harus memilih antara CP (Consistency + Partition Tolerance — PostgreSQL, HBase) atau AP (Availability + Partition Tolerance — Cassandra, DynamoDB). Di dunia nyata, sistem sering mengadopsi approach 'eventual consistency' (AP) untuk skala besar — data mungkin tidak konsisten sesaat tapi akhirnya akan konsisten.",
    relatedTerms: ["System Design", "Distributed System", "Consistency", "Availability"],
  },
  {
    term: "Microservices",
    slug: "microservices",
    category: "System Design",
    shortDefinition: "Arsitektur aplikasi terdiri dari services kecil yang independen, masing-masing punya responsibility spesifik.",
    fullExplanation:
      "Microservices adalah gaya arsitektur di mana aplikasi dipecah menjadi services kecil yang independen — masing-masing punya database sendiri, bisa di-deploy dan di-scale secara mandiri. Sebaliknya dari Monolith (satu codebase, satu deploy unit). Keuntungan microservices: Independent deploy (deploy satu service tanpa affect service lain), Technology diversity (setiap service bisa pakai tech stack berbeda), Scalability (scale hanya service yang butuh), dan Team autonomy (tim kecil own service masing-masing). Kekurangan: Distributed complexity (network latency, failure handling, distributed tracing), Data consistency (tidak bisa foreign key antar database), Operational overhead (monitoring banyak services, DevOps lebih kompleks), dan Testing (integration testing antar services sulit). Bukan silver bullet — monolith masih cocok untuk banyak use case.",
    relatedTerms: ["Monolith", "API Gateway", "Service Discovery", "Distributed System"],
  },
  {
    term: "Monolith",
    slug: "monolith",
    category: "System Design",
    shortDefinition: "Arsitektur aplikasi di mana semua komponen berada dalam satu codebase dan di-deploy sebagai satu unit.",
    fullExplanation:
      "Monolith adalah arsitektur di mana seluruh aplikasi (frontend, backend, business logic, data access) berada dalam satu codebase dan di-deploy sebagai satu unit. Semua modul berbagi database yang sama. Keuntungan monolith: Simpler development (satu repo, satu deploy pipeline), Easier debugging (tidak perlu trace antar services), Better performance (tidak ada network calls antar modul), dan Transaction management sederhana (ACID database transaction). Kekurangan: Scalability terbatas (harus scale seluruh aplikasi meski hanya satu fitur yang ramai), Tight coupling (perubahan di satu modul bisa affect modul lain), dan Deployment risk (satu bug bisa down seluruh aplikasi). Best practice: Modular Monolith — monolith dengan batasan modul yang jelas, bisa dipecah ke microservices nanti kalau perlu.",
    relatedTerms: ["Microservices", "System Design", "Architecture"],
  },
  {
    term: "Pub/Sub (Publish-Subscribe)",
    slug: "pub-sub",
    category: "System Design",
    shortDefinition: "Pattern komunikasi di mana publisher mengirim message ke topic tanpa tahu siapa subscriber.",
    fullExplanation:
      "Pub/Sub adalah messaging pattern di mana sender (publisher) dan receiver (subscriber) tidak tahu keberadaan satu sama lain — mereka terhubung melalui topic/channel perantara. Publisher mengirim message ke topic → message broker meneruskan ke semua subscriber yang subscribe ke topic tersebut. Keuntungan: Loose coupling (publisher dan subscriber independen), Scalability (banyak subscriber bisa menerima message sama), dan Flexibility (subscriber bisa ditambah/dihapus tanpa affect publisher). Use cases: real-time notifications, event-driven architecture, log aggregation, dan cache invalidation. Implementasi: Redis Pub/Sub, Apache Kafka, Google Pub/Sub, AWS SNS, dan RabbitMQ.",
    relatedTerms: ["Message Queue", "Event-Driven", "Redis", "Kafka"],
  },
  {
    term: "Redis",
    slug: "redis",
    category: "System Design",
    shortDefinition: "In-memory data store yang super cepat — untuk caching, session, pub/sub, dan queue.",
    fullExplanation:
      "Redis (REmote DIctionary Server) adalah in-memory data store yang menyimpan data di RAM — membuatnya sangat cepat (microsecond latency). Redis bukan cuma cache — dia juga: Key-Value Store (strings, numbers, JSON), Data Structures (lists, sets, sorted sets, hashes), Pub/Sub (real-time messaging), Streams (log data structure — seperti Kafka ringan), dan Rate Limiting (counter dengan expiry). Redis persisten opsional (RDB snapshot, AOF log). Use case: Session store, Cache dengan TTL, Real-time leaderboard (sorted sets), Rate limiting counter, Job queue, dan Real-time analytics. Di production, Redis biasanya dijalankan dengan Redis Sentinel (high availability) atau Redis Cluster (sharding horizontal).",
    codeExample: `# Redis commands
SET user:123 "{\\"name\\": \\"Budi\\"}" EX 300  # Set dengan TTL 5 menit
GET user:123
LPUSH queue:emails "email-data"           # Push ke queue
BLPOP queue:emails 5                    # Pop dari queue (blocking)
PUBLISH channel:news "New article!"     # Pub/Sub
ZADD leaderboard 1500 "player1"         # Sorted set`,
    language: "bash",
    relatedTerms: ["Cache", "Pub/Sub", "Message Queue", "In-Memory"],
  },
  {
    term: "Scalability",
    slug: "scalability",
    category: "System Design",
    shortDefinition: "Kemampuan sistem menangani peningkatan beban dengan menambah resources.",
    fullExplanation:
      "Scalability adalah kemampuan sistem untuk menangani peningkatan beban (traffic, data, users) dengan menambah resources. Dua jenis: Vertical Scaling (Scale Up — upgrade hardware server yang ada: lebih banyak CPU, RAM, SSD. Simple tapi ada limit fisik dan mahal), dan Horizontal Scaling (Scale Out — menambah lebih banyak server. Lebih complex tapi hampir unlimited dan lebih fault-tolerant). Application scaling: Stateless services (mudah scale — tinggal tambah instance), Database scaling (read replicas, sharding — lebih sulit), dan Caching layer (Redis — reduce database load). Autoscaling (otomatis tambah/kurangi instance berdasarkan metrics — CPU usage, request count) adalah standard di cloud environment.",
    relatedTerms: ["Load Balancing", "Horizontal Scaling", "Vertical Scaling", "Cloud"],
  },
  {
    term: "Webhook",
    slug: "webhook",
    category: "System Design",
    shortDefinition: "HTTP callback yang dikirim server ke aplikasi kamu saat event tertentu terjadi.",
    fullExplanation:
      "Webhook adalah mekanisme di mana satu sistem (provider) mengirim HTTP request ke URL aplikasi kamu secara otomatis saat event tertentu terjadi — 'tolong kabari saya kalau X terjadi'. Berbeda dengan polling (aplikasi kamu terus-terusan ngecek 'ada update?'), webhook adalah push-based (provider yang menghubungi kamu). Contoh: Stripe kirim webhook saat pembayaran sukses, GitHub kirim webhook saat ada push ke repository, Twilio kirim webhook saat SMS diterima. Implementasi webhook: Provider konfigurasi URL endpoint kamu → event terjadi → provider kirim HTTP POST ke URL kamu dengan payload event → aplikasi kamu proses dan kirim response 2xx. Security: verifikasi signature webhook (Stripe, GitHub kirim signature header untuk memastikan request berasal dari mereka).",
    codeExample: `// Webhook handler dengan Hono
app.post('/webhooks/stripe', async (c) => {
  const payload = await c.req.text();
  const signature = c.req.header('stripe-signature');
  
  // Verifikasi signature
  const event = stripe.webhooks.constructEvent(
    payload, signature, webhookSecret
  );
  
  if (event.type === 'payment_intent.succeeded') {
    await fulfillOrder(event.data.object);
  }
  
  return c.json({ received: true });
});`,
    language: "typescript",
    relatedTerms: ["API", "Event-Driven", "Integration", "Callback"],
  },

  // ── AI ──────────────────────────────────────────────────
  {
    term: "LLM (Large Language Model)",
    slug: "llm",
    category: "AI",
    shortDefinition: "Model AI yang dilatih pada data teks besar untuk memahami dan menghasilkan bahasa manusia.",
    fullExplanation:
      "LLM (Large Language Model) adalah model deep learning yang dilatih pada corpus teks yang sangat besar (triliunan kata dari internet, buku, kode) untuk memahami dan menghasilkan teks seperti manusia. LLM bekerja dengan memprediksi token berikutnya dalam sequence — namun dengan training data yang masif, mereka mengembangkan kemampuan emergent: reasoning, code generation, translation, summarization, dan creative writing. LLM populer: GPT-4/4o (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta — open weight), dan DeepSeek (open weight). Parameter model: GPT-4 diperkirakan > 1 triliun parameter, Llama 3.1 405B punya 405 miliar parameter. Konteks window: jumlah token yang bisa diproses sekaligus — Claude 3.5 Sonnet bisa 200K token (~500 halaman).",
    relatedTerms: ["Prompt Engineering", "Token", "AI", "GPT"],
  },
  {
    term: "Prompt Engineering",
    slug: "prompt-engineering",
    category: "AI",
    shortDefinition: "Teknik merancang instruksi (prompt) agar LLM menghasilkan output yang optimal.",
    fullExplanation:
      "Prompt Engineering adalah praktik merancang dan mengoptimasi instruksi yang diberikan ke LLM untuk mendapatkan output yang akurat, relevan, dan berkualitas tinggi. Teknik utama: Be Specific (jelaskan persis yang dimau), Provide Context (berikan background information), Use Examples (Few-shot prompting — berikan contoh input-output yang diinginkan), Chain of Thought (minta AI berpikir step-by-step — meningkatkan akurasi reasoning), Role Assignment ('Act as a senior developer'), dan Structured Output (minta output dalam format JSON/markdown spesifik). Anti-patterns: Vague prompts ('buat website'), Overloading (terlalu banyak instruksi sekaligus), dan Assuming Knowledge (tidak memberikan context yang cukup). Prompt engineering adalah skill yang berkembang seiring LLM menjadi bagian dari workflow developer.",
    codeExample: `// Prompt Engineering: Few-shot + Chain of Thought

// ❌ BAD
"Review this code"

// ✅ GOOD
"You are a senior TypeScript developer reviewing code for:
1. Type safety issues
2. Performance bottlenecks
3. Security vulnerabilities

Review this function and suggest improvements:
\`\`\`
async function getUser(id: string) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}
\`\`\`

Format your response as JSON with keys: issues (array), suggestions (array), improvedCode (string)."`,
    language: "text",
    relatedTerms: ["LLM", "AI", "GPT", "Chain of Thought"],
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    slug: "rag",
    category: "AI",
    shortDefinition: "Teknik memberi LLM akses ke knowledge base eksternal untuk jawaban yang factual dan up-to-date.",
    fullExplanation:
      "RAG (Retrieval-Augmented Generation) adalah arsitektur yang menggabungkan LLM dengan knowledge base eksternal. LLM knowledge terbatas pada training data (cutoff date) dan tidak punya akses ke data private perusahaan. RAG mengatasi ini dengan: Retrieval (user query di-embedding jadi vector → dicari di vector database untuk dokumen relevan), dan Generation (dokumen relevan + query digabung jadi prompt → LLM generate jawaban berdasarkan konteks tersebut). Keuntungan RAG: factual accuracy (LLM menjawab berdasarkan dokumen faktual, bukan halusinasi), up-to-date (knowledge base bisa di-update kapan saja), dan data privacy (data sensitif tidak perlu dikirim ke LLM provider). Implementasi: chunk dokumen → buat embedding (OpenAI, Cohere) → simpan di vector DB (Pinecone, Chroma, Qdrant, pgvector) → similarity search saat query.",
    codeExample: `// RAG flow pseudocode
async function ragAnswer(userQuestion) {
  // 1. Convert question to embedding vector
  const queryEmbedding = await embed(userQuestion);
  
  // 2. Retrieve relevant documents from vector DB
  const relevantDocs = await vectorDB.similaritySearch(queryEmbedding, k=5);
  
  // 3. Build augmented prompt
  const context = relevantDocs.map(d => d.content).join('\\n\\n');
  const prompt = \`Context: \${context}\\n\\nQuestion: \${userQuestion}\`;
  
  // 4. Generate answer with context
  return await llm.generate(prompt);
}`,
    language: "typescript",
    relatedTerms: ["LLM", "Embedding", "Vector Database", "AI"],
  },
  {
    term: "Token",
    slug: "token",
    category: "AI",
    shortDefinition: "Unit terkecil teks yang diproses LLM — bisa berupa kata, bagian kata, atau karakter.",
    fullExplanation:
      "Token adalah unit teks yang LLM gunakan untuk memproses dan menghasilkan teks. Token bisa: satu kata ('kucing' = 1 token), bagian kata ('unbelievable' = 'un' + 'believ' + 'able' = 3 token), atau tanda baca ('!' = 1 token). Aturan praktis: 1 token ~ 4 karakter bahasa Inggris, 1 token ~ 1-2 karakter bahasa Indonesia/Asia. Pricing LLM berdasarkan token: input tokens (prompt yang kamu kirim) dan output tokens (respons yang dihasilkan). Context window adalah maksimum token yang bisa diproses sekaligus (input + output). Token counting penting untuk: cost estimation, memastikan prompt muat di context window, dan mengoptimasi prompt (kurangi token = kurangi biaya + lebih cepat). Tool: tokenizer OpenAI untuk melihat token count.",
    codeExample: `# Token estimation (approximate)
# English: ~750 words ≈ 1000 tokens
# Code:    ~1 line ≈ 10-30 tokens
# Indonesian: ~500 kata ≈ 1000 tokens

# Claude 3.5 Sonnet context window: 200K tokens
# GPT-4o context window: 128K tokens`,
    language: "text",
    relatedTerms: ["LLM", "Context Window", "Prompt Engineering"],
  },
  {
    term: "Vector Database",
    slug: "vector-database",
    category: "AI",
    shortDefinition: "Database yang menyimpan dan mencari data berdasarkan similarity (kemiripan), bukan exact match.",
    fullExplanation:
      "Vector Database adalah database yang dirancang untuk menyimpan dan mencari high-dimensional vectors (array angka). Data teks diubah jadi vector numerical menggunakan embedding model — vector yang mirip secara semantik akan berada dekat di ruang vector. Vector DB menggunakan algoritma Approximate Nearest Neighbor (ANN) seperti HNSW untuk mencari vector yang paling mirip dengan query secara efisien — jauh lebih cepat dari brute force. Use cases: semantic search (cari dokumen yang mirip makna, bukan exact keyword), RAG (Retrieval-Augmented Generation), recommendation engine, dan image similarity. Vector DB populer: Pinecone (managed), pgvector (PostgreSQL extension), Chroma (open-source, simple), Qdrant, Weaviate, dan Milvus.",
    codeExample: `-- pgvector example (PostgreSQL extension)
CREATE EXTENSION vector;

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536) -- OpenAI embedding dimension
);

-- Insert with embedding
INSERT INTO documents (content, embedding)
VALUES ('Web development basics', '[0.01, -0.02, ...]');

-- Semantic search (find closest vectors)
SELECT content, embedding <=> '[query-vector]' AS distance
FROM documents
ORDER BY embedding <=> '[query-vector]'
LIMIT 5;`,
    language: "sql",
    relatedTerms: ["RAG", "Embedding", "Semantic Search", "AI"],
  },
];

export const glossaryCategories = [
  "Dasar Web",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Security",
  "Performance",
  "Tools",
  "System Design",
  "AI",
  "General",
] as const;
