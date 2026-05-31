export interface Module {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  chapterCount: number;
  active: boolean;
  level: string;
  phase: string;
  phaseOrder: number;
  prerequisites: string;
  why: string;
}

// ============================================================
// HIERARKI PEMBELAJARAN
//
// FASE = Tahapan besar (seperti semester)
// MODUL = Buku dalam fase (seperti mata kuliah)
// CHAPTER = Bab dalam modul (seperti pertemuan)
// ARTISAN = Konten setiap chapter (penjelasan lengkap + kode)
//
// Fase 1: Fondasi Web (Pemula)
//   M1-M4: Pahami cara kerja web sebelum ngoding
//
// Fase 2: Membangun Aplikasi (Menengah)
//   M5-M8: Dari kode ke aplikasi production-ready
//
// Fase 3: Spesialisasi (Lanjut)
//   M9-M15: Pilih jalur sesuai minat dan karir
//
// Fase 4: Ekosistem Modern (Menengah–Lanjut)
//   M16-M17: Tech stack produktivitas tinggi
//
// Fase 5: Skill Professional (Pemula–Menengah)
//   M18-M21: Tools dan practices industri
//
// Fase 6: Advanced Engineering (Menengah–Lanjut)
//   M22-M27: Scaling, performance, security, dan system design
// ============================================================

export const modules: Module[] = [
  // ============================================================
  // FASE 1: FONDASI WEB — Pahami Cara Kerjanya Sebelum Ngoding
  // ============================================================
  // Prinsip: Kamu tidak bisa membangun rumah tanpa paham fondasi.
  // Fase ini membekali pemahaman fundamental yang sering dilewatkan
  // pemula — sehingga ngoding jadi lebih masuk akal.
  {
    id: 1,
    title: "Dasar Internet & HTTP",
    subtitle: "Bagaimana Data Berjalan di Internet",
    description:
      "Sebelum menulis satu baris kode, pahami dulu: bagaimana browser meminta data ke server? Apa itu HTTP, URL, DNS? Modul ini membekali pemahaman infrastruktur web — sehingga setiap kode yang kamu tulis nanti punya konteks.",
    chapterCount: 6,
    active: true,
    level: "Pemula",
    phase: "Fase 1: Fondasi Web",
    phaseOrder: 1,
    prerequisites: "Tidak ada. Mulai dari nol.",
    why: "Tanpa paham HTTP, kamu akan bingung kenapa API gagal, kenapa butuh autentikasi, dan kenapa website lambat. Ini fondasi untuk semua modul.",
  },
  {
    id: 2,
    title: "Browser & Halaman Web",
    subtitle: "Alat Utama Developer dan Tiga Pilar Web",
    description:
      "Browser bukan sekadar alat browsing — ia adalah environment kerja developer. Pahami bagaimana browser merender halaman (HTML, CSS, JS), mengelola DOM, dan menangani interaksi user. Kuasai DevTools sebagai alat debugging sehari-hari.",
    chapterCount: 5,
    active: true,
    level: "Pemula",
    phase: "Fase 1: Fondasi Web",
    phaseOrder: 2,
    prerequisites: "Modul 1 selesai (memahami HTTP request/response).",
    why: "Setiap kode front-end kamu berjalan di browser. Paham rendering pipeline dan DevTools akan menghemat waktu debugging berjam-jam.",
  },
  {
    id: 3,
    title: "JavaScript & Logika Asinkron",
    subtitle: "Kuasai Bahasa dan Pola Pikir Asinkron",
    description:
      "JavaScript adalah bahasa utama web — tapi cara kerjanya unik: single-threaded tapi bisa multitasking lewat event loop. Modul ini membekali logika fundamental: variabel, fungsi, scope, closures, Promise, async/await, dan event handling.",
    chapterCount: 6,
    active: true,
    level: "Pemula–Menengah",
    phase: "Fase 1: Fondasi Web",
    phaseOrder: 3,
    prerequisites: "Modul 1 dan 2 (paham browser environment dan DOM).",
    why: "Asinkron adalah konsep paling sering bikin bingung pemula. Kalau tidak dikuasai di awal, setiap API call dan interaksi user akan terasa seperti sihir.",
  },
  {
    id: 4,
    title: "Penyimpanan Data",
    subtitle: "Data Harus Disimpan Somewhere — Pahami Pilihannya",
    description:
      "Aplikasi web menyimpan data di berbagai tempat: browser (cookie, localStorage), server (SQL, NoSQL database), atau cloud. Modul ini mengajarkan cara kerja masing-masing, kapan menggunakannya, dan trade-off keamanannya.",
    chapterCount: 5,
    active: true,
    level: "Pemula–Menengah",
    phase: "Fase 1: Fondasi Web",
    phaseOrder: 4,
    prerequisites: "Modul 1 dan 3 (paham HTTP dan JavaScript).",
    why: "Pemula sering bingung: 'Simpan token di mana?' 'Pake SQL atau NoSQL?' Modul ini memberikan framework pengambilan keputusan.",
  },

  // ============================================================
  // FASE 2: MEMBANGUN APLIKASI — Dari Kode ke Aplikasi Nyata
  // ============================================================
  // Prinsip: Setelah paham fondasi, bangun sesuatu yang nyata.
  // Fase ini mengajarkan skill untuk membuat aplikasi production-ready
  // yang aman, cepat, dan bisa di-deploy.
  {
    id: 5,
    title: "API & Autentikasi",
    subtitle: "Aplikasi Modern Berkomunikasi lewat API",
    description:
      "Aplikasi web modern tidak berdiri sendiri — ia berkomunikasi dengan layanan lain lewat API. Modul ini mengajarkan REST API, CORS, autentikasi JWT & OAuth, WebSocket real-time, dan GraphQL. Dengan API, aplikasimu bisa terhubung ke dunia.",
    chapterCount: 7,
    active: true,
    level: "Menengah",
    phase: "Fase 2: Membangun Aplikasi",
    phaseOrder: 5,
    prerequisites: "Modul 1, 3, dan 4 (HTTP, JavaScript, dan storage).",
    why: "Hampir semua aplikasi modern berkomunikasi lewat API. Login with Google? Itu OAuth. Chat real-time? Itu WebSocket. Modul ini membuka akses ke ekosistem web.",
  },
  {
    id: 6,
    title: "Arsitektur Web",
    subtitle: "Pilih Arsitektur yang Tepat untuk Aplikasimu",
    description:
      "SPA, SSR, SSG, monolith, microservices, serverless — begitu banyak pilihan. Modul ini membantu kamu memilih arsitektur yang tepat berdasarkan kebutuhan: SEO, performa, skalabilitas, dan kompleksitas tim.",
    chapterCount: 5,
    active: true,
    level: "Menengah",
    phase: "Fase 2: Membangun Aplikasi",
    phaseOrder: 6,
    prerequisites: "Modul 2 dan 5 (browser rendering dan API).",
    why: "Pemula sering pilih teknologi karena 'trendy' tanpa paham konsekuensinya. Modul ini memberikan framework untuk memilih arsitektur yang tepat.",
  },
  {
    id: 7,
    title: "Keamanan & Performa",
    subtitle: "Aplikasi Production Harus Aman dan Cepat",
    description:
      "Aplikasi yang lambat akan ditinggalkan user. Aplikasi yang tidak aman akan diretas. Modul ini mengajarkan cara mengidentifikasi dan mencegah XSS, CSRF, SQL injection, serta teknik optimasi performa (caching, code splitting, Core Web Vitals).",
    chapterCount: 7,
    active: true,
    level: "Menengah–Lanjut",
    phase: "Fase 2: Membangun Aplikasi",
    phaseOrder: 7,
    prerequisites: "Modul 5 dan 6 (API dan arsitektur).",
    why: "Keamanan dan performa bukan 'nice to have' — mereka adalah requirement. Google ranking dipengaruhi Core Web Vitals. Data breach bisa menghancurkan reputasi.",
  },
  {
    id: 8,
    title: "DevOps & Deployment",
    subtitle: "Kode Selesai? Sekarang Deploy ke Dunia Nyata",
    description:
      "Menulis kode hanya 50% pekerjaan. Modul ini mengajarkan cara mengelola kode (Git), mengotomatisasi testing dan deployment (CI/CD), containerizing dengan Docker, dan monitoring aplikasi di production.",
    chapterCount: 6,
    active: true,
    level: "Menengah–Lanjut",
    phase: "Fase 2: Membangun Aplikasi",
    phaseOrder: 8,
    prerequisites: "Modul 6 dan 7 (arsitektur dan keamanan).",
    why: "Banyak developer stuck di 'works on my machine'. DevOps skill membuat kamu bisa deliver kode ke production dengan percaya diri.",
  },

  // ============================================================
  // FASE 3: SPESIALISASI — Pilih Jalur Sesuai Minat dan Karir
  // ============================================================
  // Prinsip: Setelah menguasai fondasi dan building apps, pilih
  // jalur yang sesuai minat. Setiap modul spesialisasi adalah
  // deep-dive ke topik lanjut yang dicari industri.
  //
  // Jalur Front-End    → M9
  // Jalur Back-End     → M10-M11
  // Jalur Keamanan     → M12
  // Jalur Performa     → M13
  // Jalur Real-time    → M14
  // Jalur API Design   → M15
  // ============================================================
  {
    id: 9,
    title: "Front-End Modern",
    subtitle: "React, TypeScript, dan Ekosistem Modern",
    description:
      "Deep-dive ke ekosistem front-end modern: React (component, hooks, state management), Next.js (SSR, SSG), TypeScript (type safety), Tailwind CSS, dan tools development (Vite, ESLint, Prettier). Untuk yang ingin jadi front-end engineer.",
    chapterCount: 6,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Front-End",
    phaseOrder: 9,
    prerequisites: "Modul 2, 3, dan 6 (browser, JavaScript, arsitektur).",
    why: "React + TypeScript adalah kombinasi paling dicari di industri front-end. Next.js memberikan SEO dan performa yang tidak bisa dicapai React murni.",
  },
  {
    id: 10,
    title: "Microservices Architecture",
    subtitle: "Bangun Sistem Skala Besar dengan Microservices",
    description:
      "Ketika aplikasi tumbuh, monolith menjadi terlalu besar untuk dikelola. Modul ini mengajarkan cara memecah aplikasi menjadi services independen, komunikasi antar service (sync/async), API gateway, distributed tracing, dan saga pattern.",
    chapterCount: 6,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Back-End",
    phaseOrder: 10,
    prerequisites: "Modul 5, 6, dan 8 (API, arsitektur, DevOps).",
    why: "Perusahaan besar (Netflix, Amazon) pakai microservices. Skill ini dicari untuk posisi back-end engineer dan system architect.",
  },
  {
    id: 11,
    title: "Kubernetes & Cloud Native",
    subtitle: "Orkestrasi Container di Cloud",
    description:
      "Docker containerize aplikasi. Kubernetes mengatur container: deploy, scale, heal. Modul ini mengajarkan K8s fundamentals, Helm, GitOps dengan ArgoCD, CI/CD pipeline, dan monitoring cluster.",
    chapterCount: 6,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Back-End",
    phaseOrder: 11,
    prerequisites: "Modul 8 dan 10 (DevOps dan microservices).",
    why: "Kubernetes adalah standar de-facto untuk orkestrasi container. Skill ini dicari untuk posisi DevOps engineer dan platform engineer.",
  },
  {
    id: 12,
    title: "Keamanan Lanjut",
    subtitle: "Jadi Security Engineer: Pentest, Ethical Hacking, Bug Bounty",
    description:
      "Pelajari perspektif penyerang: OWASP Top 10 detail, XSS payload lanjutan, CSRF bypass, SQL injection automation dengan sqlmap, SSRF exploitation, responsible disclosure, dan cara mendapatkan penghasilan dari bug bounty.",
    chapterCount: 4,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Keamanan",
    phaseOrder: 12,
    prerequisites: "Modul 7 (keamanan dasar). Wajib paham HTTP dan JavaScript.",
    why: "Keamanan siber adalah karir dengan permintaan tinggi. Bug bounty (HackerOne, Bugcrowd) bisa jadi sumber penghasilan sampingan.",
  },
  {
    id: 13,
    title: "WebAssembly & High Performance",
    subtitle: "Performa Near-Native di Browser",
    description:
      "WebAssembly membawa performa near-native ke browser. Modul ini mengajarkan konsep WASM, menulis kode Rust yang compile ke WASM, integrasi dengan JavaScript, WebGPU untuk grafis, dan Web Workers untuk parallel processing.",
    chapterCount: 4,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Performa",
    phaseOrder: 13,
    prerequisites: "Modul 2 dan 3 (browser environment dan JavaScript advanced).",
    why: "Game browser (Unity Web), video editing (Photoshop web), dan ML inference — semua pakai WASM. Niche skill dengan demand tinggi.",
  },
  {
    id: 14,
    title: "WebRTC & Real-time Communication",
    subtitle: "Video Call, P2P, dan Live Streaming di Browser",
    description:
      "WebRTC memungkinkan komunikasi real-time peer-to-peer langsung di browser: video call, screen sharing, file transfer P2P. Modul ini mengajarkan signaling, STUN/TURN server, RTCDataChannel, dan media capture.",
    chapterCount: 4,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — Real-time",
    phaseOrder: 14,
    prerequisites: "Modul 3 dan 5 (JavaScript asinkron dan WebSocket).",
    why: "Aplikasi video call (Zoom, Google Meet), live streaming, dan collaborative editing — semua butuh WebRTC. Skill niche yang dicari.",
  },
  {
    id: 15,
    title: "GraphQL Advanced",
    subtitle: "API Query Language untuk Sistem Kompleks",
    description:
      "Setelah memahami GraphQL dasar (Modul 5), pelajari advanced topic: Apollo Federation untuk microservices, subscriptions real-time, DataLoader untuk N+1 problem, persisted queries, dan custom directives.",
    chapterCount: 4,
    active: true,
    level: "Lanjut",
    phase: "Fase 3: Spesialisasi — API Design",
    phaseOrder: 15,
    prerequisites: "Modul 5 (GraphQL dasar) dan 10 (microservices).",
    why: "Apollo Federation adalah solusi GraphQL untuk arsitektur microservices. Dipakai oleh Github, Shopify, dan Airbnb.",
  },

  // ============================================================
  // FASE 4: EKOSISTEM MODERN — Tech Stack Produktivitas Tinggi
  // ============================================================
  // Prinsip: Setelah menguasai spesialisasi, pelajari tools modern
  // yang digunakan industri saat ini untuk produktivitas maksimal.
  // ============================================================
  {
    id: 16,
    title: "Frontend Modern",
    subtitle: "React, Vite, Tailwind CSS, shadcn/ui, dan Radix UI",
    description:
      "Deep-dive ke ekosistem frontend modern yang digunakan startup dan tech company: React dengan hooks dan patterns modern, Vite untuk build tooling super cepat, Tailwind CSS untuk utility-first styling, shadcn/ui untuk komponen UI yang customizable, dan Radix UI untuk accessible primitives.",
    chapterCount: 18,
    active: true,
    level: "Menengah–Lanjut",
    phase: "Fase 4: Ekosistem Modern",
    phaseOrder: 16,
    prerequisites: "Modul 2, 3, dan 9 (browser, JavaScript, dan React dasar).",
    why: "Stack ini (React + Vite + Tailwind + shadcn/ui) adalah kombinasi paling produktif untuk frontend development di 2025. Digunakan oleh Vercel, Tailwind Labs, dan ribuan startup.",
  },
  {
    id: 17,
    title: "Backend Modern",
    subtitle: "Bun, Hono, Drizzle ORM, Redis, Supabase, dan Dokploy",
    description:
      "Kuasai ekosistem backend modern: Bun runtime yang super cepat, Hono framework yang lightweight, Drizzle ORM untuk type-safe SQL, Redis untuk caching dan real-time, Supabase untuk Backend-as-a-Service, dan Dokploy untuk self-hosted deployment.",
    chapterCount: 23,
    active: true,
    level: "Menengah–Lanjut",
    phase: "Fase 4: Ekosistem Modern",
    phaseOrder: 17,
    prerequisites: "Modul 5, 8, dan 10 (API, DevOps, dan microservices).",
    why: "Stack ini merepresentasikan backend modern: cepat, type-safe, dan scalable. Bun + Hono + Drizzle adalah kombinasi yang semakin populer untuk aplikasi JavaScript modern.",
  },

  // ============================================================
  // FASE 5: SKILL PROFESSIONAL — Tools dan Practices Industri
  // ============================================================
  // Prinsip: Setelah menguasai teknologi, pelajari practices dan
  // tools yang digunakan developer profesional di industri.
  // ============================================================
  {
    id: 18,
    title: "TypeScript",
    subtitle: "Type Safety untuk JavaScript Skala Besar",
    description:
      "Pelajari TypeScript dari nol: tipe dasar, functions dan generics, interface vs type alias, utility types, dan konfigurasi production-ready. TypeScript adalah skill wajib untuk development modern — digunakan oleh 90%+ proyek React/Node.",
    chapterCount: 6,
    active: true,
    level: "Pemula–Menengah",
    phase: "Fase 5: Skill Professional",
    phaseOrder: 18,
    prerequisites: "Modul 3 (JavaScript) dan modul 9 (React).",
    why: "TypeScript adalah de facto standard di industri JavaScript. Memahami type system membantu menangkap bug lebih awal, refactoring lebih aman, dan kolaborasi tim lebih efisien.",
  },
  {
    id: 19,
    title: "Testing",
    subtitle: "Unit, Integration, dan E2E Testing",
    description:
      "Kuasai testing dari unit test dengan Vitest, integration test untuk database dan API, E2E testing dengan Playwright, sampai CI/CD integration. Code yang tidak di-test adalah code yang tidak bisa di-refactor dengan percaya diri.",
    chapterCount: 6,
    active: true,
    level: "Menengah",
    phase: "Fase 5: Skill Professional",
    phaseOrder: 19,
    prerequisites: "Modul 3 (JavaScript) dan modul 5 (API).",
    why: "Testing adalah skill production-ready yang sering dilewatkan pemula. Developer profesional menulis test sebagai bagian dari workflow sehari-hari.",
  },
  {
    id: 20,
    title: "AI untuk Developer",
    subtitle: "Coding dengan AI Assistant di Era LLM",
    description:
      "Pelajari cara menggunakan AI sebagai force multiplier: Cursor dan GitHub Copilot, prompt engineering, AI-powered debugging, dan membangun aplikasi dengan LLM integration. Align dengan tagline 'Belajar Web di Era AI'.",
    chapterCount: 5,
    active: true,
    level: "Menengah",
    phase: "Fase 5: Skill Professional",
    phaseOrder: 20,
    prerequisites: "Semua modul sebelumnya. Pengalaman coding nyata.",
    why: "AI mengubah cara developer bekerja. Developer yang pandai menggunakan AI 10x lebih produktif. Modul ini menjadikan AI sebagai coding companion, bukan pengganti thinking.",
  },
  {
    id: 21,
    title: "Git & Team Workflow",
    subtitle: "Version Control dan Kolaborasi Tim",
    description:
      "Kuasai Git dari basic (init, commit, branch, merge) sampai advanced (rebase, stash, cherry-pick), GitHub kolaborasi (Pull Request, code review), GitHub Actions CI/CD, dan team best practices (SemVer, Conventional Commits).",
    chapterCount: 5,
    active: true,
    level: "Pemula–Menengah",
    phase: "Fase 5: Skill Professional",
    phaseOrder: 21,
    prerequisites: "Pengalaman coding dasar. Modul ini bisa dipelajari kapan saja.",
    why: "Git adalah skill fundamental yang dipakai setiap hari oleh setiap developer. Bekerja dalam tim membutuhkan lebih dari sekadar tahu git push — perlu menguasai workflow kolaboratif.",
  },

  // ============================================================
  // FASE 6: ADVANCED ENGINEERING — Scale, Secure, Design
  // ============================================================
  // Prinsip: Engineering excellence membedakan developer biasa
  // dari senior engineer yang bisa membangun sistem scalable.
  {
    id: 22,
    title: "Web Performance",
    subtitle: "Kecepatan sebagai Competitive Advantage",
    description:
      "Kecepatan website langsung mempengaruhi conversion rate, SEO ranking, dan user experience. Pelajari Core Web Vitals, lazy loading, code splitting, caching strategy, dan teknik optimasi performa dari level browser sampai server.",
    chapterCount: 4,
    active: true,
    level: "Menengah",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 5, 6, 7. Familiar dengan React dan backend dasar.",
    why: "Website lambat = kehilangan user. 53% user mobile meninggalkan website yang load lebih dari 3 detik. Performance adalah feature, bukan optimization belakangan.",
  },
  {
    id: 23,
    title: "Accessibility (a11y)",
    subtitle: "Web untuk Semua Orang",
    description:
      "15% populasi dunia memiliki disability. Accessibility bukan cuma moral obligation — itu juga legal requirement dan business opportunity. Pelajari WCAG guidelines, semantic HTML, ARIA attributes, keyboard navigation, dan screen reader compatibility.",
    chapterCount: 4,
    active: true,
    level: "Menengah",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 5, 6. Familiar dengan HTML dan CSS.",
    why: "Accessible website menjangkau lebih banyak user, meningkatkan SEO, dan melindungi dari lawsuit accessibility. Good a11y = good UX for everyone.",
  },
  {
    id: 24,
    title: "State Management Modern",
    subtitle: "Zustand, TanStack Query, dan Context API",
    description:
      "Mengelola state di aplikasi React yang kompleks butuh strategi yang tepat. Pelajari perbedaan client state vs server state, kapan pakai Zustand, kapan pakai TanStack Query, dan best practices untuk form state management.",
    chapterCount: 4,
    active: true,
    level: "Menengah",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 6, 7. Sudah membangun beberapa aplikasi React.",
    why: "State management yang buruk menyebabkan bug sulit ditrace, re-render berlebihan, dan race condition. Skill ini membedakan junior dari mid-level React developer.",
  },
  {
    id: 25,
    title: "Database Engineering",
    subtitle: "Indexing, Query Optimization, dan Scaling",
    description:
      "Database adalah bottleneck paling umum di aplikasi web. Pelajari cara kerja indexing, cara membaca execution plan, query optimization techniques, transaction management, dan strategi scaling dari replication sampai sharding.",
    chapterCount: 5,
    active: true,
    level: "Menengah-Lanjut",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 7, 8, 10. Familiar dengan SQL dan relational database.",
    why: "Satu query lambat bisa memperlambat seluruh aplikasi. Database engineering adalah skill yang sangat dicari dan dibayar mahal di industri.",
  },
  {
    id: 26,
    title: "Web Security Advanced",
    subtitle: "OWASP, JWT Security, XSS/CSRF, dan Security Hardening",
    description:
      "Security bukan feature — itu adalah process. Pelajari OWASP Top 10, implementasi JWT yang aman, XSS dan CSRF prevention, Content Security Policy, security headers, rate limiting, dan dependency vulnerability scanning.",
    chapterCount: 4,
    active: true,
    level: "Menengah",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 7, 8. Familiar dengan backend development dan autentikasi.",
    why: "Security breach bisa menghancurkan reputasi dan bisnis. Security awareness adalah responsibility setiap developer, bukan cuma security team.",
  },
  {
    id: 27,
    title: "System Design untuk Web",
    subtitle: "Arsitektur Scalable dari Ratusan ke Jutaan User",
    description:
      "Kemampuan merancang sistem yang scalable adalah skill paling dicari untuk senior engineer. Pelajari load balancing, caching layers, message queues, database replication dan sharding, CAP theorem, dan microservices architecture.",
    chapterCount: 4,
    active: true,
    level: "Menengah-Lanjut",
    phase: "Fase 6: Advanced Engineering",
    phaseOrder: 6,
    prerequisites: "Modul 7, 8, 10, 22, 25. Familiar dengan backend, database, dan caching.",
    why: "System design interview adalah gate untuk posisi senior+ di semua tech company besar. Skill ini juga esensial untuk membangun produk yang benar-benar scalable.",
  },
];

// Fase labels untuk UI
export const phases = [
  {
    name: "Fase 1: Fondasi Web",
    description: "Pahami cara kerja web sebelum ngoding. 4 modul untuk pemahaman fundamental.",
    modules: [1, 2, 3, 4],
    color: "var(--phase-1)",
    level: "Pemula",
  },
  {
    name: "Fase 2: Membangun Aplikasi",
    description: "Dari kode ke aplikasi production-ready. 4 modul untuk skill building.",
    modules: [5, 6, 7, 8],
    color: "var(--phase-2)",
    level: "Menengah",
  },
  {
    name: "Fase 3: Spesialisasi",
    description: "Pilih jalur sesuai minat dan karir. 7 modul deep-dive lanjut.",
    modules: [9, 10, 11, 12, 13, 14, 15],
    color: "var(--phase-3)",
    level: "Lanjut",
  },
  {
    name: "Fase 4: Ekosistem Modern",
    description: "Tech stack produktivitas tinggi untuk development modern. 2 modul praktis.",
    modules: [16, 17],
    color: "var(--phase-4)",
    level: "Menengah–Lanjut",
  },
  {
    name: "Fase 5: Skill Professional",
    description: "Tools dan practices yang digunakan developer profesional di industri. 4 modul essential.",
    modules: [18, 19, 20, 21],
    color: "var(--phase-5)",
    level: "Pemula–Menengah",
  },
  {
    name: "Fase 6: Advanced Engineering",
    description: "Engineering excellence untuk skala besar. 6 modul advanced: performance, accessibility, state management, database, security, dan system design.",
    modules: [22, 23, 24, 25, 26, 27],
    color: "var(--phase-3)",
    level: "Menengah–Lanjut",
  },
];

// Learning paths
export const learningPaths = [
  {
    name: "Jalur Front-End Engineer",
    description: "Fokus pada tampilan dan interaksi user",
    modules: [1, 2, 3, 4, 5, 6, 7, 9, 16, 18, 19],
    icon: "monitor",
  },
  {
    name: "Jalur Back-End Engineer",
    description: "Fokus pada server, database, dan API",
    modules: [1, 3, 4, 5, 6, 8, 10, 11, 17, 18, 19, 21],
    icon: "server",
  },
  {
    name: "Jalur Full-Stack Developer",
    description: "Kuasai front-end dan back-end",
    modules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 21],
    icon: "layers",
  },
  {
    name: "Jalur DevOps Engineer",
    description: "Fokus pada infrastruktur dan deployment",
    modules: [1, 5, 6, 7, 8, 10, 11, 17, 19, 21],
    icon: "cloud",
  },
  {
    name: "Jalur Security Engineer",
    description: "Fokus pada keamanan aplikasi web",
    modules: [1, 2, 3, 5, 6, 7, 12, 18, 19],
    icon: "shield",
  },
  {
    name: "Jalur Modern Stack Developer",
    description: "Kuasai tech stack produktivitas tinggi terbaru",
    modules: [1, 2, 3, 4, 5, 6, 16, 17, 18, 20],
    icon: "rocket",
  },
  {
    name: "Jalur Profesional Developer",
    description: "Skill production-ready untuk karir developer",
    modules: [1, 2, 3, 4, 5, 6, 18, 19, 20, 21],
    icon: "briefcase",
  },
  {
    name: "Jalur Performance Engineer",
    description: "Optimasi performa dan skalabilitas sistem",
    modules: [1, 2, 3, 5, 6, 7, 10, 22, 25, 27],
    icon: "zap",
  },
  {
    name: "Jalur Senior Full-Stack",
    description: "Roadmap dari mid-level ke senior engineer",
    modules: [1, 2, 3, 5, 6, 7, 8, 10, 16, 18, 22, 24, 25, 26, 27],
    icon: "trending-up",
  },
  {
    name: "Jalur Security Specialist",
    description: "Keamanan aplikasi web dari fundamentals sampai advanced",
    modules: [1, 2, 3, 5, 7, 8, 12, 18, 26],
    icon: "shield-check",
  },
];
