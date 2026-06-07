/* =============================================
   CarbonTrace — script.js
   Dark mode | Language toggle | Navbar scroll
   ============================================= */

// ── DARK MODE ──────────────────────────────────
function applyDark(on) {
  document.body.classList.toggle('dark', on);
  localStorage.setItem('ecoDark', on ? '1' : '0');
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = on ? '☀️' : '🌙';
}

function toggleDark() {
  applyDark(!document.body.classList.contains('dark'));
}

// ── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── NAVBAR SCROLL SHADOW ──────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 10);
});

// ── LANGUAGE DICTIONARY ───────────────────────
const DICT = {
  id: {
    // Navbar
    beranda: 'Beranda', materi: 'Materi', about: 'About Us',
    'nav-beranda': 'Beranda', 'nav-materi': 'Materi',

    // Hero (index.html)
    'hero-badge': '🌍 Saatnya Bertindak untuk Bumi',
    'hero-title': 'Ukur <span class="highlight">Jejak Karbon</span><br/>Kamu Sekarang',
    'hero-desc': 'CarbonTrace membantu kamu memahami dampak aktivitas sehari-hari terhadap lingkungan. Hitung emisi karbon, pelajari sejarahnya, dan ambil langkah nyata untuk bumi yang lebih baik.',
    'btn-mulai': '<i class="fas fa-calculator"></i> Mulai Kalkulasi',
    'btn-pelajari': '<i class="fas fa-info-circle"></i> Pelajari Lebih',
    'stat-1': 'Ton CO₂/Tahun', 'stat-2': 'Target Suhu Global', 'stat-3': 'Target Net Zero',

    // Materi page (features)
    'feat-title': 'Fitur Unggulan',
    'feat-sub': 'Semua yang kamu butuhkan untuk memahami dan mengurangi jejak karbon',
    'materi-title': '📚 Materi CarbonTrace',
    'materi-sub': 'Semua yang kamu butuhkan untuk memahami dan mengurangi jejak karbon',
    'materi-section-title': 'Pilih Materi yang Ingin Dipelajari',
    'materi-section-sub': 'Klik salah satu kartu di bawah untuk mulai belajar tentang jejak karbon dari berbagai sudut pandang',
    'f1-title': 'Kalkulator Karbon',
    'f1-desc': 'Hitung emisi dari listrik, BBM, dan perjalanan kendaraan secara akurat menggunakan rumus standar internasional.',
    'f1-tag': 'DPK PPLG',
    'f2-title': 'Sejarah Emisi',
    'f2-desc': 'Telusuri perjalanan revolusi industri dan dampaknya terhadap emisi karbon global dari abad ke-18 hingga kini.',
    'f2-tag': 'Sejarah',
    'f3-title': 'Tips Sehat',
    'f3-desc': 'Aktivitas fisik yang ramah lingkungan untuk tubuh dan bumi yang lebih sehat. Hidup aktif, emisi minim!',
    'f3-tag': 'PJOK',
    'f4-title': 'Tokoh Lingkungan',
    'f4-desc': 'Inspirasi dari para pejuang lingkungan dunia seperti Greta Thunberg dan Wangari Maathai yang mengubah sejarah.',
    'f4-tag': 'Bahasa Indonesia',
    'f5-title': 'Pesan Moral',
    'f5-desc': 'Refleksi spiritual dan etika menjaga bumi sebagai amanah Tuhan dari berbagai perspektif agama.',
    'f5-tag': 'Agama',
    'f6-title': 'Pacelathon',
    'f6-desc': 'Pacelathon bab njaga lingkungan ngangge basa Jawa ngoko lan krama. Muatan lokal berwawasan lingkungan.',
    'f6-tag': 'Muatan Lokal',
    'f7-title': 'Berkas Tambahan',
    'f7-desc': 'Unduh dan lihat dokumen pendukung proyek CarbonTrace, termasuk laporan, logbook, dan referensi materi pembelajaran.',
    'f7-tag': 'Beberapa Mapel',
    'materi-cta-title': 'Siap Mengurangi Jejak Karbon Kamu?',
    'materi-cta-desc': 'Mulai dengan menghitung emisi harianmu menggunakan Kalkulator Karbon CarbonTrace.',
    'materi-cta-btn': '<i class="fas fa-calculator"></i> Buka Kalkulator — Gratis',

    // How It Works (index.html)
    'how-title': 'Cara Kerja', 'how-sub': '3 langkah mudah untuk mengetahui jejak karbon kamu',
    'step1-title': 'Input Data', 'step1-desc': 'Masukkan penggunaan listrik, konsumsi BBM, dan jarak perjalanan kamu per hari/minggu.',
    'step2-title': 'Kalkulasi Otomatis', 'step2-desc': 'Sistem menghitung emisi menggunakan rumus standar internasional secara otomatis.',
    'step3-title': 'Lihat Hasilnya', 'step3-desc': 'Dapatkan laporan lengkap kategori emisi dan saran praktis untuk menguranginya.',

    // CTA & Footer
    'cta-title': 'Siap Mengurangi Jejak Karbon Kamu?',
    'cta-desc': 'Bergabunglah dengan ribuan orang yang sudah peduli terhadap lingkungan.',
    'cta-btn': '<i class="fas fa-leaf"></i> Mulai Sekarang — Gratis',
    'footer-desc': 'Platform edukasi jejak karbon untuk generasi muda peduli lingkungan.',
    'footer-menu': 'Menu', 'footer-info-title': 'Info',
    'footer-info-p1': 'Proyek RPL Final', 'footer-info-p2': 'SMA/SMK 2025',
    'footer-copy': 'Dibuat dengan ❤️ untuk bumi yang lebih baik',
    'footer-quote-text': '🌿 Rawatlah bumi dengan bijak, karena kebaikan kecil hari ini akan menjadi keberkahan bagi kehidupan di masa depan',
    'back-to-materi': '← Kembali ke Materi',

    // Calculator page
    'calc-title': '🧮 Kalkulator Jejak Karbon',
    'calc-sub': 'Masukkan data aktivitas harianmu untuk menghitung emisi CO₂',
    'form-title': '📋 Input Data Aktivitas',
    'lbl-listrik': '<i class="fas fa-bolt"></i> Penggunaan Listrik (kWh/hari)',
    'lbl-bbm': '<i class="fas fa-gas-pump"></i> Konsumsi BBM (liter/minggu)',
    'lbl-jarak': '<i class="fas fa-route"></i> Jarak Perjalanan (km/hari)',
    'hint-listrik': 'Rata-rata rumah tangga: 5–20 kWh/hari',
    'hint-bbm': 'Motor: ±3–7 liter/minggu | Mobil: ±15–30 liter/minggu',
    'hint-jarak': 'Total jarak berkendara kendaraan bermotor per hari',
    'btn-hitung': '<i class="fas fa-calculator"></i> Hitung Emisi',
    'btn-reset': '<i class="fas fa-redo"></i> Reset',
    'rumus-title': '📐 Rumus Perhitungan',
    'hasil-title': '📊 Hasil Perhitungan',
    'per-hari': 'per hari',
    'breakdown-title': 'Rincian Emisi:',
    'br-listrik': 'Listrik', 'br-bbm': 'BBM', 'br-jarak': 'Jarak',
    'btn-simpan': '<i class="fas fa-save"></i> Simpan Riwayat',
    'riwayat-title': '📅 Riwayat Perhitungan',
    'btn-hapus-riwayat': '<i class="fas fa-trash"></i> Hapus Semua Riwayat',
    'manual-title': '📚 Contoh Perhitungan Manual',

    // History page
    'hist-title': '📜 Sejarah Emisi Karbon',
    'hist-sub': 'Perjalanan panjang revolusi industri dan dampaknya terhadap lingkungan',
    'hist-intro': 'Emisi CO₂ yang mengancam iklim bumi tidak terjadi dalam semalam. Ini adalah warisan dari empat gelombang revolusi industri yang mengubah cara manusia bekerja, berproduksi, dan mengonsumsi. Memahami sejarah ini adalah kunci untuk mengambil langkah yang tepat di masa depan.',
    'timeline-title': 'Timeline Revolusi Industri & Emisi Karbon',
    'rev1-title': 'Revolusi Industri 1.0',
    'rev1-p1': 'Revolusi Industri Pertama dimulai di Inggris pada pertengahan abad ke-18. Penemuan mesin uap oleh James Watt (1769) menjadi titik balik sejarah manusia. Untuk pertama kalinya, manusia tidak lagi bergantung sepenuhnya pada tenaga otot atau angin.',
    'rev1-p2': 'Batubara menjadi bahan bakar utama yang menggerakkan mesin-mesin pabrik, lokomotif, dan kapal. Penggunaan batubara secara masif inilah yang memulai peningkatan emisi CO₂ secara signifikan di atmosfer bumi.',
    'rev1-emisi': 'Emisi/tahun (estimasi)', 'rev1-pusat': 'Pusat Revolusi', 'rev1-energi': 'Sumber Energi Utama',
    'rev1-dampak-title': 'Dampak Lingkungan:',
    'rev1-d1': 'Polusi udara pertama akibat asap pabrik',
    'rev1-d2': 'Deforestasi untuk bahan bakar dan lahan pabrik',
    'rev1-d3': 'Pencemaran sungai di kota-kota industri',
    'rev2-title': 'Revolusi Industri 2.0',
    'rev2-p1': 'Revolusi Industri Kedua ditandai dengan penggunaan listrik, pengembangan industri baja, dan mulai digunakannya minyak bumi sebagai bahan bakar. Thomas Edison dan Nikola Tesla menjadi tokoh sentral era ini.',
    'rev2-p2': 'Produksi massal mulai diperkenalkan oleh Henry Ford. Jalur perakitan (assembly line) memungkinkan produksi mobil dan barang-barang konsumsi secara besar-besaran, yang secara langsung meningkatkan konsumsi energi dan emisi karbon global.',
    'rev2-emisi': 'Emisi/tahun', 'rev2-pusat': 'Pusat Revolusi', 'rev2-energi': 'Sumber Energi',
    'rev2-dampak-title': 'Dampak Lingkungan:',
    'rev2-d1': 'Industri minyak bumi mulai mencemari tanah dan laut',
    'rev2-d2': 'Polusi udara kota meningkat drastis',
    'rev2-d3': 'Eksploitasi sumber daya alam besar-besaran dimulai',
    'rev3-title': 'Revolusi Industri 3.0',
    'rev3-p1': 'Revolusi Industri Ketiga ditandai dengan kemunculan komputer, elektronik, dan teknologi informasi. Era ini membawa otomasi industri, internet, dan revolusi digital yang mengubah cara kerja manusia secara fundamental.',
    'rev3-p2': 'Meski teknologi berkembang, emisi karbon terus meningkat karena ekspansi industri global, pertumbuhan populasi, dan konsumsi energi yang belum beralih ke energi terbarukan. Di era inilah kesadaran akan perubahan iklim mulai muncul dengan lahirnya IPCC pada 1988.',
    'rev3-emisi': 'Emisi/tahun', 'rev3-pusat': 'Cakupan', 'rev3-energi': 'Energi Baru',
    'rev3-dampak-title': 'Dampak Lingkungan:',
    'rev3-d1': 'Konsentrasi CO₂ melewati 350 ppm untuk pertama kali',
    'rev3-d2': 'Penipisan lapisan ozon ditemukan (1985)',
    'rev3-d3': 'KTT Bumi Rio de Janeiro pertama kali membahas perubahan iklim (1992)',
    'rev4-title': 'Revolusi Industri 4.0',
    'rev4-p1': 'Revolusi Industri Keempat adalah era kecerdasan buatan (AI), Internet of Things (IoT), big data, robotika, dan konektivitas ultra-cepat. Batas antara dunia fisik, digital, dan biologis semakin kabur.',
    'rev4-p2': 'Di sisi lain, era ini juga membawa harapan baru. Energi surya, angin, dan baterai penyimpanan semakin terjangkau. Perjanjian Paris 2015 menetapkan target pembatasan kenaikan suhu global 1,5°C. Indonesia menargetkan net zero emission pada 2060.',
    'rev4-emisi': 'Emisi/tahun (2023)', 'rev4-target': 'Target Net Zero Global', 'rev4-energi': 'Target Indonesia 2025',
    'rev4-dampak-title': 'Peluang & Tantangan:',
    'rev4-d1': 'Kendaraan listrik dan solar panel menjadi makin terjangkau',
    'rev4-d2': 'Data center dan blockchain mengonsumsi energi sangat besar',
    'rev4-d3': 'Generasi muda mendorong gerakan zero waste dan climate action',
    'baca-selengkapnya': 'Baca selengkapnya ▼',

    // Biography page
    'bio-title': '🌟 Biografi Tokoh Lingkungan',
    'bio-sub': 'Mengenal para pejuang bumi yang menginspirasi dunia',
    'bio-intro': 'Teks biografi adalah jenis teks naratif objektif yang berisi kisah atau riwayat hidup seseorang yang ditulis oleh orang lain (bukan diri sendiri). Teks ini dibuat berdasarkan fakta dan pengalaman nyata dengan tujuan untuk memberikan informasi, inspirasi, serta keteladanan kepada pembaca.',
    'orientasi': 'Orientasi', 'peristiwa': 'Peristiwa Penting', 'reorientasi': 'Reorientasi',
    'aleta-quote': '"Hutan, tanah, air, dan batu adalah bagian yang sangat penting bagi kehidupan masyarakat kami."',
    'aleta-o1': 'Aleta Baun adalah seorang aktivis lingkungan hidup yang berasal dari Pulau Timor, Nusa Tenggara Timur. Ia dikenal karena perjuangannya dalam menjaga hutan dan sumber daya alam yang menjadi sumber kehidupan masyarakat adat di daerahnya.',
    'aleta-o2': 'Aleta Baun lahir pada tahun 1966 di Mollo, Timor Tengah Selatan. Sejak kecil, ia sudah diajarkan untuk mencintai alam dan menjaga kelestarian lingkungan. Menurutnya, hutan, tanah, air, dan batu merupakan bagian yang sangat penting bagi kehidupan masyarakat setempat.',
    'ae1-title': 'Penolakan Tambang Marmer',
    'ae1-desc': 'Pada awal tahun 2000-an, Aleta Baun memimpin masyarakat untuk menolak kegiatan penambangan marmer yang dianggap dapat merusak lingkungan dan mengancam kehidupan warga. Bersama para perempuan adat, ia melakukan aksi damai dengan menenun di lokasi tambang sebagai bentuk protes terhadap kerusakan alam.',
    'ae2-title': 'Aksi Damai Berbulan-bulan',
    'ae2-desc': 'Aksi tersebut berlangsung selama berbulan-bulan. Para perempuan tetap menenun di sekitar area tambang sebagai simbol bahwa mereka ingin mempertahankan tanah dan hutan yang menjadi sumber kehidupan masyarakat Mollo. Meskipun menghadapi berbagai tantangan, mereka tetap berjuang dengan cara yang damai dan tidak menggunakan kekerasan.',
    'ae3-title': 'Edukasi Lingkungan untuk Generasi Muda',
    'ae3-desc': 'Selain mengajak masyarakat menolak penambangan, Aleta Baun juga aktif memberikan pemahaman tentang pentingnya menjaga lingkungan kepada generasi muda. Ia sering terlibat dalam kegiatan pelestarian alam, seperti menanam pohon dan menjaga sumber mata air agar tetap bersih dan terawat.',
    'ae4-title': 'Goldman Environmental Prize',
    'ae4-desc': 'Perjuangan yang dilakukan Aleta Baun akhirnya membuahkan hasil. Beberapa kegiatan penambangan berhasil dihentikan sehingga kawasan hutan dan pegunungan di wilayah Mollo tetap terjaga. Atas dedikasinya dalam melindungi lingkungan, ia menerima berbagai penghargaan, salah satunya penghargaan internasional berupa Goldman Environmental Prize pada tahun 2013.',
    'aleta-r1': 'Sampai sekarang, Aleta Baun masih menjadi inspirasi bagi banyak orang untuk menjaga lingkungan dan menghargai kearifan lokal. Semangat dan perjuangannya menunjukkan bahwa setiap orang bisa ikut berperan dalam melestarikan alam demi masa depan yang lebih baik.',
    'aleta-r2': 'Kisah hidup Aleta Baun membuktikan bahwa perubahan dapat dimulai dari kepedulian terhadap lingkungan sekitar. Dengan keberanian, kerja sama, dan rasa cinta terhadap alam, ia berhasil menggerakkan masyarakat untuk melindungi tanah kelahiran mereka dari kerusakan.',
  },

  en: {
    // Navbar
    beranda: 'Home', materi: 'Materials', about: 'About Us',
    'nav-beranda': 'Home', 'nav-materi': 'Materials',

    // Hero (index.html)
    'hero-badge': '🌍 Time to Act for the Earth',
    'hero-title': 'Measure Your <span class="highlight">Carbon Footprint</span><br/>Right Now',
    'hero-desc': 'CarbonTrace helps you understand the impact of daily activities on the environment. Calculate carbon emissions, learn the history, and take real steps for a better planet.',
    'btn-mulai': '<i class="fas fa-calculator"></i> Start Calculating',
    'btn-pelajari': '<i class="fas fa-info-circle"></i> Learn More',
    'stat-1': 'Tons CO₂/Year', 'stat-2': 'Global Temp. Target', 'stat-3': 'Net Zero Target',

    // Materi page (features)
    'feat-title': 'Key Features',
    'feat-sub': 'Everything you need to understand and reduce your carbon footprint',
    'materi-title': '📚 CarbonTrace Materials',
    'materi-sub': 'Everything you need to understand and reduce your carbon footprint',
    'materi-section-title': 'Choose a Topic to Learn',
    'materi-section-sub': 'Click one of the cards below to start learning about carbon footprint from different perspectives',
    'f1-title': 'Carbon Calculator',
    'f1-desc': 'Accurately calculate emissions from electricity, fuel, and vehicle travel using international standard formulas.',
    'f1-tag': 'DPK PPLG',
    'f2-title': 'Emissions History',
    'f2-desc': 'Trace the industrial revolution journey and its impact on global carbon emissions from the 18th century to today.',
    'f2-tag': 'History',
    'f3-title': 'Health Tips',
    'f3-desc': 'Eco-friendly physical activities for a healthier you and a healthier planet. Stay active, minimize emissions!',
    'f3-tag': 'Physical Education',
    'f4-title': 'Environmental Figures',
    'f4-desc': 'Inspiration from world environmental champions like Greta Thunberg and Wangari Maathai who changed history.',
    'f4-tag': 'Indonesian Language',
    'f5-title': 'Moral Message',
    'f5-desc': 'Spiritual reflection and ethics of caring for the Earth as a divine trust from various religious perspectives.',
    'f5-tag': 'Religion',
    'f6-title': 'Pachelaton',
    'f6-desc': 'Dialogue about environmental protection in Javanese ngoko and krama. Locally-rooted environmental content.',
    'f6-tag': 'Local Content',
    'f7-title': 'Additional Files',
    'f7-desc': 'Download and view supporting documents for the CarbonTrace project, including reports, logbooks, and learning references.',
    'f7-tag': 'Some Subjects',
    'materi-cta-title': 'Ready to Reduce Your Carbon Footprint?',
    'materi-cta-desc': 'Start by calculating your daily emissions using the CarbonTrace Carbon Calculator.',
    'materi-cta-btn': '<i class="fas fa-calculator"></i> Open Calculator — Free',

    // How It Works (index.html)
    'how-title': 'How It Works', 'how-sub': '3 easy steps to know your carbon footprint',
    'step1-title': 'Input Data', 'step1-desc': 'Enter your daily electricity usage, weekly fuel consumption, and daily travel distance.',
    'step2-title': 'Auto Calculation', 'step2-desc': 'The system calculates emissions using international standard formulas automatically.',
    'step3-title': 'View Results', 'step3-desc': 'Get a full report of your emission category and practical tips to reduce it.',

    // CTA & Footer
    'cta-title': 'Ready to Reduce Your Carbon Footprint?',
    'cta-desc': 'Join thousands of people who already care about the environment.',
    'cta-btn': '<i class="fas fa-leaf"></i> Start Now — Free',
    'footer-desc': 'A carbon footprint education platform for the environmentally conscious youth.',
    'footer-menu': 'Menu', 'footer-info-title': 'Info',
    'footer-info-p1': 'Final Software Engineering Project', 'footer-info-p2': 'Senior High School / Vocational 2025',
    'footer-copy': 'Made with ❤️ for a better Earth',
    'footer-quote-text': '🌿 Treat the Earth wisely, for every small act of goodness today will be a blessing for life in the future',
    'back-to-materi': '← Back to Materials',

    // Calculator page
    'calc-title': '🧮 Carbon Footprint Calculator',
    'calc-sub': 'Enter your daily activity data to calculate CO₂ emissions',
    'form-title': '📋 Activity Data Input',
    'lbl-listrik': '<i class="fas fa-bolt"></i> Electricity Usage (kWh/day)',
    'lbl-bbm': '<i class="fas fa-gas-pump"></i> Fuel Consumption (liters/week)',
    'lbl-jarak': '<i class="fas fa-route"></i> Travel Distance (km/day)',
    'hint-listrik': 'Average household: 5–20 kWh/day',
    'hint-bbm': 'Motorcycle: ±3–7 L/week | Car: ±15–30 L/week',
    'hint-jarak': 'Total daily motorized vehicle travel distance',
    'btn-hitung': '<i class="fas fa-calculator"></i> Calculate Emissions',
    'btn-reset': '<i class="fas fa-redo"></i> Reset',
    'rumus-title': '📐 Calculation Formula',
    'hasil-title': '📊 Results',
    'per-hari': 'per day',
    'breakdown-title': 'Emission Breakdown:',
    'br-listrik': 'Electricity', 'br-bbm': 'Fuel', 'br-jarak': 'Distance',
    'btn-simpan': '<i class="fas fa-save"></i> Save History',
    'riwayat-title': '📅 Calculation History',
    'btn-hapus-riwayat': '<i class="fas fa-trash"></i> Clear All History',
    'manual-title': '📚 Manual Calculation Examples',

    // History page
    'hist-title': '📜 Carbon Emission History',
    'hist-sub': 'The long journey of industrial revolutions and their environmental impact',
    'hist-intro': 'CO₂ emissions threatening Earth\'s climate did not happen overnight. They are the legacy of four waves of industrial revolution that transformed how humans work, produce, and consume. Understanding this history is key to taking the right steps in the future.',
    'timeline-title': 'Industrial Revolution & Carbon Emission Timeline',
    'rev1-title': 'Industrial Revolution 1.0',
    'rev1-p1': 'The First Industrial Revolution began in England in the mid-18th century. James Watt\'s invention of the steam engine (1769) became a historic turning point for humanity. For the first time, humans no longer depended entirely on muscle power or wind.',
    'rev1-p2': 'Coal became the primary fuel powering factory machines, locomotives, and ships. This massive use of coal is what began the significant increase of CO₂ emissions in Earth\'s atmosphere.',
    'rev1-emisi': 'Emissions/year (estimate)', 'rev1-pusat': 'Revolution Center', 'rev1-energi': 'Main Energy Source',
    'rev1-dampak-title': 'Environmental Impact:',
    'rev1-d1': 'First air pollution from factory smoke',
    'rev1-d2': 'Deforestation for fuel and factory land',
    'rev1-d3': 'River pollution in industrial cities',
    'rev2-title': 'Industrial Revolution 2.0',
    'rev2-p1': 'The Second Industrial Revolution was marked by the use of electricity, the development of the steel industry, and the beginning use of petroleum as fuel. Thomas Edison and Nikola Tesla became the central figures of this era.',
    'rev2-p2': 'Mass production was introduced by Henry Ford. The assembly line enabled mass production of cars and consumer goods, which directly increased global energy consumption and carbon emissions.',
    'rev2-emisi': 'Emissions/year', 'rev2-pusat': 'Revolution Center', 'rev2-energi': 'Energy Sources',
    'rev2-dampak-title': 'Environmental Impact:',
    'rev2-d1': 'Petroleum industry began polluting soil and oceans',
    'rev2-d2': 'Urban air pollution increased drastically',
    'rev2-d3': 'Large-scale natural resource exploitation began',
    'rev3-title': 'Industrial Revolution 3.0',
    'rev3-p1': 'The Third Industrial Revolution was marked by the emergence of computers, electronics, and information technology. This era brought industrial automation, the internet, and the digital revolution that fundamentally changed how humans work.',
    'rev3-p2': 'Despite technological advances, carbon emissions continued to rise due to global industrial expansion, population growth, and energy consumption that had not yet shifted to renewables. In this era, awareness of climate change began to emerge with the founding of the IPCC in 1988.',
    'rev3-emisi': 'Emissions/year', 'rev3-pusat': 'Coverage', 'rev3-energi': 'New Energy',
    'rev3-dampak-title': 'Environmental Impact:',
    'rev3-d1': 'CO₂ concentration exceeded 350 ppm for the first time',
    'rev3-d2': 'Ozone layer depletion discovered (1985)',
    'rev3-d3': 'Rio de Janeiro Earth Summit first addressed climate change (1992)',
    'rev4-title': 'Industrial Revolution 4.0',
    'rev4-p1': 'The Fourth Industrial Revolution is the era of artificial intelligence (AI), Internet of Things (IoT), big data, robotics, and ultra-fast connectivity. The boundaries between the physical, digital, and biological worlds are increasingly blurred.',
    'rev4-p2': 'On the other hand, this era also brings new hope. Solar energy, wind power, and storage batteries are becoming more affordable. The 2015 Paris Agreement set a target to limit global temperature increase to 1.5°C. Indonesia targets net zero emissions by 2060.',
    'rev4-emisi': 'Emissions/year (2023)', 'rev4-target': 'Global Net Zero Target', 'rev4-energi': 'Indonesia 2025 Target',
    'rev4-dampak-title': 'Opportunities & Challenges:',
    'rev4-d1': 'Electric vehicles and solar panels becoming increasingly affordable',
    'rev4-d2': 'Data centers and blockchain consume enormous amounts of energy',
    'rev4-d3': 'Youth are driving zero waste and climate action movements',
    'baca-selengkapnya': 'Read more ▼',

    // Biography page
    'bio-title': '🌟 Environmental Figures Biography',
    'bio-sub': 'Getting to know the Earth warriors who inspired the world',
    'bio-intro': 'A biographical text is an objective narrative that tells the life story of a person written by someone else. It is based on real facts and experiences, aiming to provide information, inspiration, and role models for readers.',
    'orientasi': 'Orientation', 'peristiwa': 'Key Events', 'reorientasi': 'Re-orientation',
    'aleta-quote': '"Forest, land, water, and stone are very important parts of our community\'s life."',
    'aleta-o1': 'Aleta Baun is an environmental activist from the island of Timor, East Nusa Tenggara. She is known for her struggle to protect forests and natural resources that are the lifeblood of indigenous communities in the region.',
    'aleta-o2': 'Aleta Baun was born in 1966 in Mollo, South Central Timor. From a young age, she was taught to love nature and preserve the environment. According to her, forests, land, water, and stone are very important parts of local community life.',
    'ae1-title': 'Opposition to Marble Mining',
    'ae1-desc': 'In the early 2000s, Aleta Baun led the community to oppose marble mining activities considered harmful to the environment and threatening to the lives of residents. Together with indigenous women, she staged a peaceful protest by weaving at the mining site as a form of resistance against environmental destruction.',
    'ae2-title': 'Months-Long Peaceful Protest',
    'ae2-desc': 'The action lasted for months. The women continued weaving around the mining area as a symbol of their will to protect the land and forests that are the source of life for the Mollo community. Despite facing various challenges, they continued to fight peacefully without resorting to violence.',
    'ae3-title': 'Environmental Education for Youth',
    'ae3-desc': 'In addition to mobilizing the community against mining, Aleta Baun also actively educated youth about the importance of protecting the environment. She was often involved in conservation activities, such as tree planting and maintaining water springs to keep them clean and well-preserved.',
    'ae4-title': 'Goldman Environmental Prize',
    'ae4-desc': 'Aleta Baun\'s struggle ultimately paid off. Several mining operations were successfully halted, keeping the forests and mountains of the Mollo region intact. For her dedication to environmental protection, she received various awards, including the prestigious Goldman Environmental Prize in 2013.',
    'aleta-r1': 'To this day, Aleta Baun remains an inspiration for many people to protect the environment and honor local wisdom. Her spirit and struggle show that everyone can play a role in preserving nature for a better future.',
    'aleta-r2': 'The life story of Aleta Baun proves that change can begin with caring about the surrounding environment. With courage, teamwork, and love for nature, she successfully mobilized the community to protect their homeland from destruction.',
  }
};

// ── LANGUAGE TOGGLE ───────────────────────────
let currentLang = localStorage.getItem('ecoLang') || 'id';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ecoLang', lang);

  const d = DICT[lang];
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.getAttribute('data-id');
    if (d[key] !== undefined) el.innerHTML = d[key];
  });

  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'id' ? '🌐 EN' : '🌐 ID';
  document.documentElement.lang = lang;

  // Update search placeholder for kontak-guru page
  const searchEl = document.getElementById('guruSearch');
  if (searchEl) {
    searchEl.placeholder = lang === 'id'
      ? '🔍 Cari nama guru atau mata pelajaran...'
      : '🔍 Search teacher name or subject...';
  }
}

function toggleLang() {
  applyLang(currentLang === 'id' ? 'en' : 'id');
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('ecoDark') === '1') applyDark(true);
  applyLang(localStorage.getItem('ecoLang') || 'id');
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
    else a.classList.remove('active');
  });
  observeAnimations();
});

// ── SCROLL ANIMATIONS ─────────────────────────
function observeAnimations() {
  const targets = document.querySelectorAll(
    '.feature-card, .step-card, .health-card, .bio-card, .moral-card, .pacelathon-card, .manual-card, .conclusion-card'
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.5s ease both';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(t => io.observe(t));
}
// ── EXTENDED DICT — injected additions ─────────────
(function() {
  const ext = {
    id: {
      // About page
      'about-title': '🌐 Tentang CarbonTrace',
      'about-sub': 'Kalkulator jejak karbon untuk generasi penerus',
      'about-what-h': 'Apa itu CarbonTrace?',
      'about-mv1-h': 'Misi Kami',
      'about-mv2-h': 'Visi Kami',
      'about-how-h': '📖 Cara Menggunakan CarbonTrace',
      'about-tech-h': '🛠️ Teknologi yang Digunakan',
      'about-ack-h': '🙏 Ucapan Terima Kasih',

      // Health page
      'health-title': '🏃 Tips Hidup Sehat & Ramah Lingkungan',
      'health-sub': 'Pendidikan Jasmani, Olahraga, dan Kesehatan — Aktivitas aktif untuk tubuh dan bumi',
      'health-intro-p': 'Hidup sehat dan menjaga lingkungan bukan dua hal yang berbeda — keduanya saling berkaitan erat. Saat kamu memilih berjalan kaki daripada naik motor, kamu tidak hanya membakar kalori, tetapi juga mengurangi emisi karbon. PJOK mengajarkan kita bahwa tubuh yang aktif adalah fondasi kehidupan yang berkualitas.',
      'health-secA-h': 'Analisis Gaya Hidup Aktif dan Emisi Karbon',
      'health-secA-p': 'Indikator Kinerja: Menghitung dan membandingkan selisih jejak karbon',
      'health-secB-h': 'Kebugaran Kardiorespiratori & Lingkungan',
      'health-secB-p': 'Indikator Kinerja: Korelasi ilmiah udara bersih dengan kesehatan jantung dan paru-paru',
      'health-secC-h': 'Penerapan K3 Ergonomis Saat Menggunakan Komputer',
      'health-secC-p': 'Indikator Kinerja: Praktekkan kaidah ergonomi komputer yang benar',
      'health-secD-h': 'Manajemen Rehat Kerja (Istirahat Aktif)',
      'health-secD-p': 'Indikator Kinerja: Susun dan lakukan gerakan peregangan otot dinamis',
      'health-secE-h': 'Tips Gaya Hidup Aktif & Ramah Lingkungan',
      'health-secE-p': 'Indikator Kinerja: Panduan tips kesehatan yang dapat diintegrasikan ke aplikasi web',
      'health-secF-h': 'Tabel Perbandingan: Aktivitas Fisik vs Kendaraan Bermotor',
      'health-secF-p': 'Data perbandingan untuk jarak 10 km',

      // Infor page
      'infor-title': '🖥️ Perancangan Kalkulator Karbon',
      'infor-sub': 'Dekomposisi sistem, flowchart, logika, tipe data, dan validasi alur',
      'infor-sec1-h': 'Dekomposisi Masalah',
      'infor-sec2-h': 'Rancangan Flowchart',
      'infor-sec3-h': 'Logika Percabangan (If-Else)',
      'infor-sec4-h': 'Pemetaan Tipe Data',
      'infor-sec5-h': 'Validasi Alur — Trace Table Testing',

      // IPAS page
      'ipas-title': '📜 Sejarah & Analisis Emisi Karbon',
      'ipas-sub': 'Penyelidikan data, analisis ilmiah, dan solusi nyata untuk masa depan bumi yang lebih baik',
      'ipas-sec1-h': 'Penyelidikan Data',
      'ipas-sec2-h': 'Analisis Emisi Karbon',
      'ipas-sec3-h': 'Korelasi Ekologis',
      'ipas-sec4-h': 'Bukti Ilmiah',
      'ipas-sec5-h': 'Refleksi Solutif',

      // Jawa page
      'jawa-title': '🎋 Pacelathon Basa Jawa',
      'jawa-sub': 'Wicara bab njaga lingkungan ngangge basa Jawa',
      'jawa-sec1-h': 'Tingkatan Basa Jawa',
      'jawa-sec2-h': '📚 Kamus Istilah Lingkungan — Basa Jawa',

      // Moral page
      'moral-title': '🕌 Khotbah: Menjaga Lingkungan & Hemat Energi sebagai Wujud Iman',
      'moral-sub': 'Pendidikan Agama Islam · Tanggung jawab manusia sebagai khalifah di bumi',
      'moral-ikrar-title': '📝 Ikrar Menjaga Lingkungan & Hemat Energi',
      'moral-body1': 'Hadirin yang dirahmati Allah, lingkungan hidup yang bersih dan lestari adalah nikmat Allah yang wajib kita jaga dan syukuri. Sebagai khalifah di bumi, manusia diberi amanah untuk merawat alam, bukan merusaknya.',
      'moral-body2': 'Kerusakan lingkungan bukan hanya masalah ekologi — ini adalah masalah moral dan spiritual. Ketika kita membuang sampah sembarangan, boros energi, atau merusak alam, kita sedang melanggar amanah Allah SWT.',
      'moral-body3': 'Saudaraku yang dirahmati Allah, mari kita jadikan kepedulian lingkungan sebagai bagian dari ibadah harian kita. Mematikan lampu yang tidak diperlukan, menghemat air, memilah sampah — semua itu adalah amal kebaikan.',
      'moral-body4': 'Energi yang kita gunakan setiap hari sebagian besar masih berasal dari bahan bakar fosil yang mencemari udara dan mempercepat perubahan iklim. Islam mengajarkan kita untuk tidak boros dan tidak merusak — prinsip yang sejalan dengan gaya hidup hijau.',

      // PP page
      'pp-title': '👥 Pembagian Tugas Tim',
      'pp-sub': 'Struktur kerja dan tanggung jawab masing-masing anggota dalam proyek CarbonTrace',
      'pp-sec1-h': 'Anggota Kelompok',
      'pp-sec1-p': '6 siswa bekerja sama membangun platform edukasi jejak karbon yang terintegrasi',
      'pp-sec2-h': 'Tabel Pembagian Tugas Lengkap',
      'pp-sec2-p': 'Rincian tugas teknis dan materi setiap anggota dalam proyek CarbonTrace',
      'pp-sec3-h': 'Bukti Saling Membantu dalam Debugging',
      'pp-sec3-p': 'Dokumentasi kegiatan peer debugging antar anggota tim dalam menyelesaikan kendala error kode',
      'pp-sec4-h': '📅 Timeline Pengerjaan Proyek',
      'pp-sec4-p': 'Jadwal kerja selama 6 minggu pengembangan CarbonTrace',
      'pp-sec5-h': 'Siap Mengurangi Jejak Karbon Kamu?',
      'pp-sec5-p': 'Mulai dengan menghitung emisi harianmu menggunakan Kalkulator Karbon CarbonTrace.',

      // Kontak Guru page
      'kontak-title': '👨‍🏫 Kontak Guru Pengampu',
      'kontak-sub': 'Daftar guru pengampu Projek RPL SMK Negeri 4 Kendal · Tahun Pelajaran 2025/2026',
      'kontak-section-sub': 'Data guru pengampu kelas X PPLG SMK Negeri 4 Kendal.',
      'kontak-stat-guru': 'Guru Pengampu',
      'kontak-stat-kelas': 'Kelas',
      'kontak-stat-tahun': 'Tahun Pelajaran',
      'kontak-all-title': '📋 Semua Guru Pengampu',
      'kontak-divider': 'Mapel Normatif & Adaptif',

      // Profil page
      'profil-title': '👤 Profil Siswa',
      'profil-sub': 'Data lengkap anggota kelompok Projek RPL — X PPLG · SMK Negeri 4 Kendal',
      'profil-section-title': '📋 Anggota Kelompok',
      'profil-section-sub': 'Data profil anggota kelompok Projek RPL Tahun Pelajaran 2025/2026.',
      'profil-lampiran-sub': 'Foto dokumen, karya, dan portofolio kelompok.',

      // Senbud page
      'senbud-sec1-h': '🎨 Penyusunan Moodboard',
      'senbud-sec2-h': '🔤 Tipografi & Keterbacaan',
      'senbud-sec3-h': '🖥️ Desain Komponen UI & Wireframe',
      'senbud-sub1-h': '🌈 Palet Warna Ekologi-Digital CarbonTrace',
      'senbud-sub2-h': '🧠 Filosofi Pemilihan Warna',
      'senbud-sub3-h': '📏 Hierarki Tipografi',
      'senbud-sub4-h': '✅ Do & ❌ Don\'t Tipografi Web',
      'senbud-sub5-h': '🖼️ Wireframe Halaman Web CarbonTrace',

      // Senbud uses hist-title/sub keys already for page hero
      'hist-title': '📜 Sejarah Emisi Karbon',  // keep existing for history.html, override per-page via data-id
      'hist-sub': 'Perjalanan panjang revolusi industri dan dampaknya terhadap lingkungan',
    },
    en: {
      // About page
      'about-title': '🌐 About CarbonTrace',
      'about-sub': 'A carbon footprint calculator built for the next generation',
      'about-what-h': 'What is CarbonTrace?',
      'about-mv1-h': 'Our Mission',
      'about-mv2-h': 'Our Vision',
      'about-how-h': '📖 How to Use CarbonTrace',
      'about-tech-h': '🛠️ Technology Used',
      'about-ack-h': '🙏 Acknowledgments',

      // Health page
      'health-title': '🏃 Healthy & Eco-Friendly Living Tips',
      'health-sub': 'Physical Education, Sports, and Health — Active activities for your body and the Earth',
      'health-intro-p': 'Living healthy and protecting the environment are not two separate things — they are closely interconnected. When you choose to walk instead of riding a motorcycle, you not only burn calories but also reduce carbon emissions. PE teaches us that an active body is the foundation of a quality life.',
      'health-secA-h': 'Analysis of Active Lifestyles and Carbon Emissions',
      'health-secA-p': 'Performance Indicator: Calculate and compare carbon footprint differences',
      'health-secB-h': 'Cardiorespiratory Fitness & the Environment',
      'health-secB-p': 'Performance Indicator: Scientific correlation between clean air and heart and lung health',
      'health-secC-h': 'Ergonomic Safety (K3) When Using a Computer',
      'health-secC-p': 'Performance Indicator: Practice correct computer ergonomics principles',
      'health-secD-h': 'Work Break Management (Active Rest)',
      'health-secD-p': 'Performance Indicator: Plan and perform dynamic muscle stretching movements',
      'health-secE-h': 'Active & Eco-Friendly Lifestyle Tips',
      'health-secE-p': 'Performance Indicator: Health tips that can be integrated into a web application',
      'health-secF-h': 'Comparison Table: Physical Activity vs Motor Vehicles',
      'health-secF-p': 'Comparison data for a distance of 10 km',

      // Infor page
      'infor-title': '🖥️ Carbon Calculator Design',
      'infor-sub': 'System decomposition, flowchart, logic, data types, and flow validation',
      'infor-sec1-h': 'Problem Decomposition',
      'infor-sec2-h': 'Flowchart Design',
      'infor-sec3-h': 'Branching Logic (If-Else)',
      'infor-sec4-h': 'Data Type Mapping',
      'infor-sec5-h': 'Flow Validation — Trace Table Testing',

      // IPAS page
      'ipas-title': '📜 History & Analysis of Carbon Emissions',
      'ipas-sub': 'Data investigation, scientific analysis, and real solutions for a better future for the Earth',
      'ipas-sec1-h': 'Data Investigation',
      'ipas-sec2-h': 'Carbon Emission Analysis',
      'ipas-sec3-h': 'Ecological Correlation',
      'ipas-sec4-h': 'Scientific Evidence',
      'ipas-sec5-h': 'Solution Reflection',

      // Jawa page
      'jawa-title': '🎋 Javanese Dialogue (Pacelathon)',
      'jawa-sub': 'Dialogue about environmental protection in Javanese language',
      'jawa-sec1-h': 'Levels of Javanese Language',
      'jawa-sec2-h': '📚 Environmental Vocabulary — Javanese',

      // Moral page
      'moral-title': '🕌 Sermon: Protecting the Environment & Saving Energy as an Act of Faith',
      'moral-sub': 'Islamic Religious Education · Human responsibility as stewards of the Earth',
      'moral-ikrar-title': '📝 Pledge to Protect the Environment & Save Energy',
      'moral-body1': 'Dear congregation blessed by Allah, a clean and sustainable environment is a blessing from Allah that we must protect and be grateful for. As stewards of the Earth, humans are entrusted with the responsibility to care for nature, not to destroy it.',
      'moral-body2': 'Environmental destruction is not just an ecological problem — it is a moral and spiritual issue. When we litter carelessly, waste energy, or damage nature, we are violating the trust given to us by Allah SWT.',
      'moral-body3': 'My brothers and sisters blessed by Allah, let us make environmental awareness a part of our daily acts of worship. Turning off unnecessary lights, conserving water, sorting trash — all of these are acts of goodness.',
      'moral-body4': 'Most of the energy we use every day still comes from fossil fuels that pollute the air and accelerate climate change. Islam teaches us not to be wasteful or destructive — principles that align perfectly with a green lifestyle.',

      // PP page
      'pp-title': '👥 Team Task Division',
      'pp-sub': 'Work structure and responsibilities of each member in the CarbonTrace project',
      'pp-sec1-h': 'Group Members',
      'pp-sec1-p': '6 students collaborating to build an integrated carbon footprint education platform',
      'pp-sec2-h': 'Full Task Division Table',
      'pp-sec2-p': 'Technical and subject task details for each member in the CarbonTrace project',
      'pp-sec3-h': 'Mutual Debugging Assistance',
      'pp-sec3-p': 'Documentation of peer debugging activities among team members in resolving code error issues',
      'pp-sec4-h': '📅 Project Development Timeline',
      'pp-sec4-p': '6-week work schedule for CarbonTrace development',
      'pp-sec5-h': 'Ready to Reduce Your Carbon Footprint?',
      'pp-sec5-p': 'Start by calculating your daily emissions using the CarbonTrace Carbon Calculator.',

      // Kontak Guru page
      'kontak-title': '👨‍🏫 Teacher Contact Information',
      'kontak-sub': 'List of supervising teachers for the RPL Project at SMK Negeri 4 Kendal · Academic Year 2025/2026',
      'kontak-section-sub': 'Supervising teachers for class X PPLG at SMK Negeri 4 Kendal.',
      'kontak-stat-guru': 'Supervising Teachers',
      'kontak-stat-kelas': 'Class',
      'kontak-stat-tahun': 'Academic Year',
      'kontak-all-title': '📋 All Supervising Teachers',
      'kontak-divider': 'Normative & Adaptive Subjects',

      // Profil page
      'profil-title': '👤 Student Profiles',
      'profil-sub': 'Complete data of RPL Project group members — X PPLG · SMK Negeri 4 Kendal',
      'profil-section-title': '📋 Group Members',
      'profil-section-sub': 'Profile data of RPL Project group members for Academic Year 2025/2026.',
      'profil-lampiran-sub': 'Photos of documents, works, and group portfolios.',

      // Senbud page
      'senbud-sec1-h': '🎨 Moodboard Creation',
      'senbud-sec2-h': '🔤 Typography & Readability',
      'senbud-sec3-h': '🖥️ UI Component Design & Wireframe',
      'senbud-sub1-h': '🌈 CarbonTrace Eco-Digital Color Palette',
      'senbud-sub2-h': '🧠 Color Selection Philosophy',
      'senbud-sub3-h': '📏 Typography Hierarchy',
      'senbud-sub4-h': '✅ Do & ❌ Don\'t Web Typography',
      'senbud-sub5-h': '🖼️ CarbonTrace Web Page Wireframes',

      // Senbud page hero (reuses hist-title key)
      'hist-title': '📜 Carbon Emission History',
      'hist-sub': 'The long journey of industrial revolutions and their environmental impact',
    }
  };

  // Merge into main DICT
  Object.keys(ext).forEach(lang => {
    Object.assign(DICT[lang], ext[lang]);
  });
})();

// ── SENBUD page hero fix ────────────────────────────
(function() {
  DICT.id['senbud-title'] = '🎨 Seni & Budaya Digital';
  DICT.id['senbud-sub-hero'] = 'Moodboard, Tipografi, dan Desain UI & Wireframe Web CarbonTrace';
  DICT.en['senbud-title'] = '🎨 Digital Arts & Culture';
  DICT.en['senbud-sub-hero'] = 'Moodboard, Typography, and UI & Wireframe Design of CarbonTrace';

  // Fix history page - ensure hist-title/sub remain correct for history.html
  // (they were already in the original DICT, so no override needed)
})();

// ── MATEMATIKA page translations ──────────────────
(function() {
  DICT.id['math-title'] = ' Perhitungan Emisi Carbon';
  DICT.id['math-sub'] = 'Analisis Skenario Lonjakan Emisi Carbon Serta Perhitungan Lonjakan Emisi Dan Tabel Lonjakan Emisi Carbon';
  DICT.en['math-title'] = ' Carbon Emission Calculations';
  DICT.en['math-sub'] = 'Analysis of Carbon Emission Surge Scenarios, Calculations, and Carbon Emission Surge Tables';
})();

// ── DOKUMEN page translations ──────────────────────
(function() {
  DICT.id['dokumen-title'] = '📄 Berkas Tambahan';
  DICT.id['dokumen-sub'] = 'Unduh dan lihat dokumen pendukung proyek CarbonTrace';
  DICT.en['dokumen-title'] = '📄 Additional Files';
  DICT.en['dokumen-sub'] = 'Download and view supporting documents for the CarbonTrace project';
})();

// ── DOKUMEN page full translations ─────────────────
(function() {
  Object.assign(DICT.id, {
    'dokumen-title': '📄 Berkas Tambahan',
    'dokumen-sub': 'Unduh dan lihat dokumen pendukung proyek CarbonTrace berdasarkan mata pelajaran',
    'dokumen-sec-h': 'Pilih Dokumen yang Ingin Dilihat',
    'dokumen-sec-p': 'Klik salah satu kartu di bawah untuk membuka dokumen pendukung sesuai mata pelajaran',
    'dok-card1-h': 'Tabel Emisi Harian Lembar Kerja',
    'dok-card1-p': 'Rumus perhitungan emisi karbon, lembar kerja statistik, dan soal latihan bertema lingkungan hidup.',
    'dok-card1-tag': 'Matematika',
    'dok-card2-h': 'Wireframe Estetis Web',
    'dok-card2-p': 'Panduan membuat poster lingkungan, naskah drama, dan referensi karya seni dari bahan daur ulang.',
    'dok-card2-tag': 'Seni Budaya',
    'dok-card3-h': 'Pembagian Tugas',
    'dok-card3-p': 'Nilai Pancasila dalam pelestarian lingkungan, gotong royong, serta hak dan kewajiban warga negara.',
    'dok-card3-tag': 'Pendidikan Pancasila',
    'dok-card4-h': 'Referensi Ilmiah Faktor Emisi',
    'dok-card4-p': 'Penyelidikan Ilmiah Guna Menemukan Koefisien Faktor Emisi Karbon.',
    'dok-card4-tag': 'Projek IPAS',
    'dok-card5-h': 'Flowchart',
    'dok-card5-p': 'Dokumentasi proyek CarbonTrace, flowchart kalkulator karbon, dan panduan literasi digital lingkungan.',
    'dok-card5-tag': 'Informatika',
  });
  Object.assign(DICT.en, {
    'dokumen-title': '📄 Additional Files',
    'dokumen-sub': 'Download and view supporting documents for the CarbonTrace project by subject',
    'dokumen-sec-h': 'Choose the Document You Want to View',
    'dokumen-sec-p': 'Click one of the cards below to open the supporting document for the relevant subject',
    'dok-card1-h': 'Daily Emission Table — Worksheet',
    'dok-card1-p': 'Carbon emission calculation formulas, statistics worksheets, and practice problems with an environmental theme.',
    'dok-card1-tag': 'Mathematics',
    'dok-card2-h': 'Aesthetic Web Wireframe',
    'dok-card2-p': 'Guide to creating environmental posters, drama scripts, and references for artwork from recycled materials.',
    'dok-card2-tag': 'Arts & Culture',
    'dok-card3-h': 'Task Division',
    'dok-card3-p': 'Pancasila values in environmental conservation, mutual cooperation, and the rights and duties of citizens.',
    'dok-card3-tag': 'Pancasila Education',
    'dok-card4-h': 'Scientific Reference — Emission Factors',
    'dok-card4-p': 'Scientific Investigation to Determine Carbon Emission Factor Coefficients.',
    'dok-card4-tag': 'IPAS Project',
    'dok-card5-h': 'Flowchart',
    'dok-card5-p': 'CarbonTrace project documentation, carbon calculator flowchart, and digital environmental literacy guide.',
    'dok-card5-tag': 'Informatics',
  });
})();

// ── COMPREHENSIVE TRANSLATIONS — calculator, history, health, biography, moral, jawa ──
(function() {
  // ── NAVIGATION (shared across all pages) ──
  Object.assign(DICT.id, {
    'beranda': 'Beranda',
    'materi': 'Materi',
    'about': 'About Us',
    'nav-profil': 'Profil Siswa',
    'nav-kontak': 'Kontak Guru',

    // ── CALCULATOR ──
    'calc-step1': '1. Transportasi',
    'calc-step2': '2. Energi Rumah',
    'calc-step3': '3. Makanan',
    'calc-step4': '4. Belanja',
    'calc-h-transport': 'Transportasi',
    'calc-h-energy': 'Energi Rumah Tangga',
    'calc-h-food': 'Pola Makan',
    'calc-h-shop': 'Belanja & Sampah',
    'calc-lbl-jarak': 'Jarak tempuh kendaraan pribadi:',
    'calc-lbl-jenis': 'Jenis kendaraan:',
    'calc-opt-mobil': 'Mobil bensin',
    'calc-opt-motor': 'Motor',
    'calc-lbl-umum': 'Frekuensi transportasi umum:',
    'calc-lbl-pesawat': 'Frekuensi penerbangan:',
    'calc-lbl-jarakpen': 'Rata-rata jarak penerbangan:',
    'calc-opt-pendek': '&lt; 500 km',
    'calc-opt-sedang': '500 - 2000 km',
    'calc-opt-panjang': '&gt; 2000 km',
    'calc-btn-next': 'Selanjutnya',
    'calc-btn-prev': 'Kembali',
    'calc-lbl-listrik': 'Tagihan listrik bulanan:',
    'calc-lbl-lpg': 'Penggunaan LPG:',
    'calc-lbl-penghuni': 'Jumlah penghuni rumah:',
    'calc-lbl-sapi': 'Konsumsi daging sapi:',
    'calc-lbl-ayam': 'Konsumsi ayam/ikan:',
    'calc-lbl-susu': 'Konsumsi produk susu:',
    'calc-lbl-pakaian': 'Pakaian baru:',
    'calc-lbl-elektronik': 'Elektronik baru:',
    'calc-lbl-sampah': 'Produksi sampah plastik:',
    'calc-btn-hitung': 'Hitung Jejak Karbon',
    'calc-hasil-title': 'Hasil Jejak Karbon Tahunan',
    'calc-res-transport': 'Transportasi',
    'calc-res-energy': 'Energi Rumah',
    'calc-res-food': 'Makanan',
    'calc-res-shop': 'Belanja & Sampah',
    'calc-total': 'Total Jejak Karbon:',
    'calc-btn-reset': 'Hitung Ulang',

    // ── HEALTH ──
    'health-c1': 'Udara Bersih',
    'health-c2': 'Kurangi Emisi',
    'health-c3': 'Kesehatan Jantung',
    'health-c4': 'Ruang Hijau',
    'health-ergo1': 'Posisi Monitor',
    'health-ergo2': 'Posisi Duduk',
    'health-ergo3': 'Posisi Tangan',
    'health-ergo4': 'Pencahayaan',
    'health-str1': 'Peregangan Leher',
    'health-str2': 'Bahu & Lengan',
    'health-str3': 'Punggung & Tulang Belakang',
    'health-str4': 'Pergelangan Tangan & Jari',
    'health-str5': 'Kaki & Pergelangan Kaki',
    'health-str6': 'Pernapasan Dalam (Box Breathing)',
    'health-sched': 'Jadwal Rehat Kerja yang Disarankan',
    'health-tip1': 'Jalan Kaki / Bersepeda',
    'health-tip2': 'Transportasi Umum',
    'health-tip3': 'Hemat Listrik',
    'health-tip4': 'Olahraga Rutin',
    'health-tip5': 'Pola Makan Sehat',
    'health-tip6': 'Istirahat Cukup',
    'health-th1': 'Aktivitas',
    'health-th2': 'Kalori Terbakar',
    'health-th3': 'Emisi CO₂',
    'health-th4': 'Visualisasi Emisi',
    'health-th5': 'Waktu Tempuh',

    // ── MORAL ──
    'moral-tab1': '📖 Larangan Merusak Bumi',
    'moral-tab2': '⚡ Bahaya Israf & Hemat Energi',
    'moral-tab3': '🌿 Penutup & Ikrar',
    'moral-pledge-btn': '🌿 Saya Berjanji Menjaga Bumi & Hemat Energi',
    'moral-li1': 'Tidak membuang sampah sembarangan di jalan maupun di sungai',
    'moral-li2': 'Tidak menebang pohon secara liar tanpa izin dan keperluan yang jelas',
    'moral-li3': 'Tidak mencemari sumber air dengan limbah atau sampah plastik',
    'moral-li4': 'Ikut serta dalam kegiatan bersih lingkungan di rumah dan sekolah',
    'moral-li5': 'Merawat tanaman dan tidak menyiksa hewan tanpa alasan yang dibenarkan',

    // ── JAWA ──
    'jawa-ngoko': 'Basa Ngoko',
    'jawa-krama': 'Basa Krama',
    'jawa-inggil': 'Krama Inggil',
    'jawa-dialog-title': 'Rembug Babagan Lingkungan Gesang lan Ngurangi Emisi Karbon',
    'jawa-dialog-setting': '🌍 Papan: Ing sekolah | Basa Jawa Krama',
  });

  Object.assign(DICT.en, {
    // ── NAVIGATION ──
    'beranda': 'Home',
    'materi': 'Materials',
    'about': 'About Us',
    'nav-profil': 'Student Profiles',
    'nav-kontak': 'Teacher Contact',

    // ── CALCULATOR ──
    'calc-step1': '1. Transportation',
    'calc-step2': '2. Home Energy',
    'calc-step3': '3. Food',
    'calc-step4': '4. Shopping',
    'calc-h-transport': 'Transportation',
    'calc-h-energy': 'Household Energy',
    'calc-h-food': 'Diet',
    'calc-h-shop': 'Shopping & Waste',
    'calc-lbl-jarak': 'Personal vehicle distance:',
    'calc-lbl-jenis': 'Vehicle type:',
    'calc-opt-mobil': 'Gasoline car',
    'calc-opt-motor': 'Motorcycle',
    'calc-lbl-umum': 'Public transport frequency:',
    'calc-lbl-pesawat': 'Flight frequency:',
    'calc-lbl-jarakpen': 'Average flight distance:',
    'calc-opt-pendek': '&lt; 500 km',
    'calc-opt-sedang': '500 - 2000 km',
    'calc-opt-panjang': '&gt; 2000 km',
    'calc-btn-next': 'Next',
    'calc-btn-prev': 'Back',
    'calc-lbl-listrik': 'Monthly electricity bill:',
    'calc-lbl-lpg': 'LPG usage:',
    'calc-lbl-penghuni': 'Number of household members:',
    'calc-lbl-sapi': 'Beef consumption:',
    'calc-lbl-ayam': 'Chicken/fish consumption:',
    'calc-lbl-susu': 'Dairy product consumption:',
    'calc-lbl-pakaian': 'New clothing:',
    'calc-lbl-elektronik': 'New electronics:',
    'calc-lbl-sampah': 'Plastic waste production:',
    'calc-btn-hitung': 'Calculate Carbon Footprint',
    'calc-hasil-title': 'Annual Carbon Footprint Results',
    'calc-res-transport': 'Transportation',
    'calc-res-energy': 'Home Energy',
    'calc-res-food': 'Food',
    'calc-res-shop': 'Shopping & Waste',
    'calc-total': 'Total Carbon Footprint:',
    'calc-btn-reset': 'Recalculate',

    // ── HEALTH ──
    'health-c1': 'Clean Air',
    'health-c2': 'Reduce Emissions',
    'health-c3': 'Heart Health',
    'health-c4': 'Green Spaces',
    'health-ergo1': 'Monitor Position',
    'health-ergo2': 'Sitting Position',
    'health-ergo3': 'Hand Position',
    'health-ergo4': 'Lighting',
    'health-str1': 'Neck Stretch',
    'health-str2': 'Shoulders & Arms',
    'health-str3': 'Back & Spine',
    'health-str4': 'Wrists & Fingers',
    'health-str5': 'Legs & Ankles',
    'health-str6': 'Deep Breathing (Box Breathing)',
    'health-sched': 'Recommended Work Break Schedule',
    'health-tip1': 'Walking / Cycling',
    'health-tip2': 'Public Transport',
    'health-tip3': 'Save Electricity',
    'health-tip4': 'Regular Exercise',
    'health-tip5': 'Healthy Diet',
    'health-tip6': 'Adequate Rest',
    'health-th1': 'Activity',
    'health-th2': 'Calories Burned',
    'health-th3': 'CO₂ Emissions',
    'health-th4': 'Emission Visualization',
    'health-th5': 'Travel Time',

    // ── MORAL ──
    'moral-tab1': '📖 Prohibition Against Harming the Earth',
    'moral-tab2': '⚡ The Danger of Wastefulness & Saving Energy',
    'moral-tab3': '🌿 Closing & Pledge',
    'moral-pledge-btn': '🌿 I Pledge to Protect the Earth & Save Energy',
    'moral-li1': 'Not littering on roads or in rivers',
    'moral-li2': 'Not illegally cutting down trees without permission or clear necessity',
    'moral-li3': 'Not polluting water sources with waste or plastic trash',
    'moral-li4': 'Participating in environmental clean-up activities at home and school',
    'moral-li5': 'Caring for plants and not harming animals without justifiable reason',

    // ── JAWA ──
    'jawa-ngoko': 'Ngoko Style (Informal)',
    'jawa-krama': 'Krama Style (Formal)',
    'jawa-inggil': 'Krama Inggil (Highest Respect)',
    'jawa-dialog-title': 'Discussion on the Environment and Reducing Carbon Emissions',
    'jawa-dialog-setting': '🌍 Setting: At school | Javanese Krama language',
  });
})();

// ── HEALTH PAGE — missing section translations ──────────────────────────────
(function() {
  Object.assign(DICT.id, {
    'health-secA-h': 'Analisis Gaya Hidup Aktif dan Emisi Karbon',
    'health-secA-p': 'Indikator Kinerja: Menghitung dan membandingkan selisih jejak karbon',
    'health-secB-h': 'Kebugaran Kardiorespiratori & Lingkungan',
    'health-secB-p': 'Indikator Kinerja: Korelasi ilmiah udara bersih dengan kesehatan jantung dan paru-paru',
    'health-secC-h': 'Penerapan K3 Ergonomis Saat Menggunakan Komputer',
    'health-secC-p': 'Indikator Kinerja: Praktekkan kaidah ergonomi komputer yang benar',
    'health-secD-h': 'Manajemen Rehat Kerja (Istirahat Aktif)',
    'health-secD-p': 'Indikator Kinerja: Susun dan lakukan gerakan peregangan otot dinamis',
    'health-secE-h': 'Tips Gaya Hidup Aktif & Ramah Lingkungan',
    'health-secE-p': 'Indikator Kinerja: Panduan tips kesehatan yang dapat diintegrasikan ke aplikasi web',
    'health-secF-h': 'Tabel Perbandingan: Aktivitas Fisik vs Kendaraan Bermotor',
    'health-secF-p': 'Data perbandingan untuk jarak 10 km',
  });
  Object.assign(DICT.en, {
    'health-secA-h': 'Active Lifestyle Analysis & Carbon Emissions',
    'health-secA-p': 'Performance Indicator: Calculate and compare carbon footprint differences',
    'health-secB-h': 'Cardiorespiratory Fitness & the Environment',
    'health-secB-p': 'Performance Indicator: Scientific correlation between clean air and heart and lung health',
    'health-secC-h': 'Ergonomic Health & Safety When Using a Computer',
    'health-secC-p': 'Performance Indicator: Practice correct computer ergonomics principles',
    'health-secD-h': 'Work Break Management (Active Rest)',
    'health-secD-p': 'Performance Indicator: Plan and perform dynamic muscle stretching exercises',
    'health-secE-h': 'Active & Eco-Friendly Lifestyle Tips',
    'health-secE-p': 'Performance Indicator: Health tips guide that can be integrated into a web application',
    'health-secF-h': 'Comparison Table: Physical Activity vs Motor Vehicles',
    'health-secF-p': 'Comparison data for a distance of 10 km',
  });
})();

// ── MISSING TRANSLATIONS — all pages ──────────────────────────────────────
(function() {
  Object.assign(DICT.id, {
    // ── INDEX / HERO ──
    'hero-badge': '🌍 Saatnya Bertindak untuk Bumi',
    'hero-title': 'Ukur <span class="highlight">Jejak Karbon</span><br />Kamu Sekarang',
    'hero-desc': 'CarbonTrace membantu kamu memahami dampak aktivitas sehari-hari terhadap lingkungan. Hitung emisi karbon, pelajari sejarahnya, dan ambil langkah nyata untuk bumi yang lebih baik.',
    'btn-mulai': '<i class="fas fa-calculator"></i> Mulai Kalkulasi',
    'btn-pelajari': '<i class="fas fa-info-circle"></i> Pelajari Lebih',
    'stat-1': 'Ton CO₂/Tahun',
    'stat-2': 'Target Suhu Global',
    'stat-3': 'Target Net Zero',
    'how-title': 'Cara Kerja',
    'how-sub': '3 langkah mudah untuk mengetahui jejak karbon kamu',
    'step1-title': 'Input Data',
    'step1-desc': 'Masukkan penggunaan listrik, konsumsi BBM, dan jarak perjalanan kamu per hari/minggu.',
    'step2-title': 'Kalkulasi Otomatis',
    'step2-desc': 'Sistem menghitung emisi menggunakan rumus standar internasional secara otomatis.',
    'step3-title': 'Lihat Hasilnya',
    'step3-desc': 'Dapatkan laporan lengkap kategori emisi dan saran praktis untuk menguranginya.',
    'cta-title': 'Siap Mengurangi Jejak Karbon Kamu?',
    'cta-desc': 'Bergabunglah dengan ribuan orang yang sudah peduli terhadap lingkungan.',
    'cta-btn': '<i class="fas fa-leaf"></i> Mulai Sekarang — Gratis',
    'footer-desc': 'Platform edukasi jejak karbon untuk generasi muda peduli lingkungan.',
    'footer-menu': 'Menu',
    'footer-info-title': 'Info',
    'footer-copy': 'Dibuat dengan ❤️ untuk bumi yang lebih baik',
    'footer-quote-text': '🌿 Rawatlah bumi dengan bijak, karena kebaikan kecil hari ini akan menjadi keberkahan bagi kehidupan di masa depan',
    'nav-beranda': 'Beranda',
    'nav-materi': 'Materi',

    // ── MATERI ──
    'materi-section-title': 'Pilih Materi yang Ingin Dipelajari',
    'materi-section-sub': 'Klik salah satu kartu di bawah untuk mulai belajar tentang jejak karbon dari berbagai sudut pandang',
    'materi-cta-title': 'Siap Mengurangi Jejak Karbon Kamu?',
    'materi-cta-desc': 'Mulai dengan menghitung emisi harianmu menggunakan Kalkulator Karbon CarbonTrace.',
    'materi-cta-btn': 'Buka Kalkulator — Gratis',
    'f1-title': 'Kalkulator Karbon',
    'f1-desc': 'Hitung emisi dari listrik, BBM, dan perjalanan kendaraan secara akurat menggunakan rumus standar internasional.',
    'f1-tag': 'DPK PPLG',
    'f2-title': 'Sejarah Emisi',
    'f2-desc': 'Telusuri perjalanan revolusi industri dan dampaknya terhadap emisi karbon global dari abad ke-18 hingga kini.',
    'f2-tag': 'Sejarah',
    'f3-title': 'Tips Sehat',
    'f3-desc': 'Aktivitas fisik yang ramah lingkungan untuk tubuh dan bumi yang lebih sehat. Hidup aktif, emisi minim!',
    'f3-tag': 'PJOK',
    'f4-title': 'Tokoh Lingkungan',
    'f4-desc': 'Inspirasi dari para pejuang lingkungan dunia seperti Greta Thunberg dan Wangari Maathai yang mengubah sejarah.',
    'f4-tag': 'Bahasa Indonesia',
    'f5-title': 'Pesan Moral',
    'f5-desc': 'Refleksi spiritual dan etika menjaga bumi sebagai amanah Tuhan dari berbagai perspektif agama.',
    'f5-tag': 'Agama',
    'f6-title': 'Basa Jawa',
    'f6-desc': 'Pacelathon bab njaga lingkungan ngangge basa Jawa ngoko lan krama. Muatan lokal berwawasan lingkungan.',
    'f6-tag': 'Muatan Lokal',
    'f7-title': 'Berkas Tambahan',
    'f7-desc': 'Unduh dan lihat dokumen pendukung proyek CarbonTrace, termasuk laporan, logbook, dan referensi materi pembelajaran.',
    'f7-tag': 'Beberapa Mapel',

    // ── CALCULATOR ──
    'calc-title': '🧮 Kalkulator Jejak Karbon',
    'calc-sub': 'Masukkan data aktivitas harianmu untuk menghitung emisi CO₂',

    // ── HISTORY ──
    'hist-intro': 'Emisi karbon dioksida (CO₂) yang mengancam iklim bumi tidak terjadi dalam semalam. Ia merupakan warisan dari empat gelombang revolusi industri yang mengubah cara manusia bekerja, berproduksi, dan berkonsumsi. Memahami sejarah ini adalah kunci untuk mengambil langkah yang tepat di masa depan.',
    'timeline-title': 'Timeline Revolusi Industri & Emisi Karbon',
    'rev1-title': 'Revolusi Industri 1.0',
    'rev1-p1': 'Revolusi Industri Pertama dimulai di Inggris pada pertengahan abad ke-18. Penemuan mesin uap oleh James Watt (1769) menjadi titik balik sejarah manusia. Untuk pertama kalinya, manusia tidak lagi bergantung sepenuhnya pada tenaga otot atau angin.',
    'rev1-p2': 'Batubara menjadi bahan bakar utama yang menggerakkan mesin-mesin pabrik, lokomotif, dan kapal. Penggunaan batubara secara masif inilah yang memulai peningkatan emisi CO₂ secara signifikan di atmosfer bumi.',
    'rev1-emisi': 'Emisi/tahun (estimasi)',
    'rev1-pusat': 'Pusat Revolusi',
    'rev1-energi': 'Sumber Energi Utama',
    'rev1-dampak-title': 'Dampak Lingkungan:',
    'rev1-d1': 'Polusi udara pertama akibat asap pabrik',
    'rev1-d2': 'Deforestasi untuk bahan bakar dan lahan pabrik',
    'rev1-d3': 'Pencemaran sungai di kota-kota industri',
    'rev2-title': 'Revolusi Industri 2.0',
    'rev2-p1': 'Revolusi Industri Kedua ditandai dengan penggunaan listrik, pengembangan industri baja, dan mulai digunakannya minyak bumi sebagai bahan bakar. Thomas Edison dan Nikola Tesla menjadi tokoh sentral era ini.',
    'rev2-p2': 'Produksi massal mulai diperkenalkan oleh Henry Ford. Jalur perakitan (assembly line) memungkinkan produksi mobil dan barang-barang konsumsi secara besar-besaran, yang secara langsung meningkatkan konsumsi energi dan emisi karbon global.',
    'rev2-emisi': 'Emisi/tahun',
    'rev2-pusat': 'Pusat Revolusi',
    'rev2-energi': 'Sumber Energi',
    'rev2-dampak-title': 'Dampak Lingkungan:',
    'rev2-d1': 'Industri minyak bumi mulai mencemari tanah dan laut',
    'rev2-d2': 'Polusi udara kota meningkat drastis',
    'rev2-d3': 'Eksploitasi sumber daya alam besar-besaran dimulai',
    'rev3-title': 'Revolusi Industri 3.0',
    'rev3-p1': 'Revolusi Industri Ketiga ditandai dengan kemunculan komputer, elektronik, dan teknologi informasi. Era ini membawa otomasi industri, internet, dan revolusi digital yang mengubah cara hidup manusia.',
    'rev3-p2': 'Meski teknologi berkembang, emisi karbon terus meningkat karena ekspansi industri global, pertumbuhan populasi, dan konsumsi energi yang belum beralih ke energi terbarukan.',
    'rev3-emisi': 'Emisi/tahun',
    'rev3-pusat': 'Cakupan',
    'rev3-energi': 'Energi Baru',
    'rev3-dampak-title': 'Dampak Lingkungan:',
    'rev3-d1': 'Konsentrasi CO₂ melewati 350 ppm untuk pertama kali',
    'rev3-d2': 'Penipisan lapisan ozon ditemukan (1985)',
    'rev3-d3': 'KTT Bumi Rio de Janeiro pertama kali membahas perubahan iklim (1992)',
    'rev4-title': 'Revolusi Industri 4.0',
    'rev4-p1': 'Revolusi Industri Keempat adalah era kecerdasan buatan (AI), Internet of Things (IoT), big data, robotika, dan konektivitas ultra-cepat. Batas antara dunia fisik, digital, dan biologis semakin kabur.',
    'rev4-p2': 'Di sisi lain, era ini juga membawa harapan baru. Energi surya, angin, dan baterai penyimpanan semakin terjangkau. Perjanjian Paris 2015 menetapkan target pembatasan kenaikan suhu global.',
    'rev4-emisi': 'Emisi/tahun (2023)',
    'rev4-energi': 'Target Indonesia 2025',
    'rev4-target': 'Target Net Zero Global',
    'rev4-dampak-title': 'Peluang & Tantangan:',
    'rev4-d1': 'Kendaraan listrik dan solar panel menjadi makin terjangkau',
    'rev4-d2': 'Data center dan blockchain mengonsumsi energi sangat besar',
    'rev4-d3': 'Generasi muda mendorong gerakan zero waste dan climate action',

    // ── BIOGRAPHY ──
    'bio-title': '🌟 Biografi Tokoh Lingkungan',
    'bio-sub': 'Mengenal para pejuang bumi yang menginspirasi dunia',
    'bio-intro': 'Teks biografi adalah jenis teks naratif objektif yang berisi kisah atau riwayat hidup seseorang yang ditulis oleh orang lain (bukan diri sendiri). Teks ini dibuat berdasarkan fakta dan pengalaman nyata sang tokoh.',
    'orientasi': 'Orientasi',
    'peristiwa': 'Peristiwa Penting',
    'reorientasi': 'Reorientasi',
    'baca-selengkapnya': 'Baca selengkapnya ▼',
    'back-to-materi': '← Kembali ke Dokumen',
    'ae1-title': 'Penolakan Tambang Marmer',
    'ae1-desc': 'Pada awal tahun 2000-an, Aleta Baun memimpin masyarakat untuk menolak kegiatan penambangan marmer yang dianggap dapat merusak lingkungan dan mengancam kehidupan warga.',
    'ae2-title': 'Aksi Damai Berbulan-bulan',
    'ae2-desc': 'Aksi tersebut berlangsung selama berbulan-bulan. Para perempuan tetap menenun di sekitar area tambang sebagai simbol bahwa mereka ingin mempertahankan tanah dan hutan yang menjadi sumber kehidupan masyarakat Mollo.',
    'ae3-title': 'Edukasi Lingkungan untuk Generasi Muda',
    'ae3-desc': 'Selain mengajak masyarakat menolak penambangan, Aleta Baun juga aktif memberikan pemahaman tentang pentingnya menjaga lingkungan kepada generasi muda. Ia sering terlibat dalam kegiatan konservasi seperti penanaman pohon dan menjaga sumber mata air.',
    'ae4-title': 'Goldman Environmental Prize',
    'ae4-desc': 'Perjuangan yang dilakukan Aleta Baun akhirnya membuahkan hasil. Beberapa kegiatan penambangan berhasil dihentikan sehingga kawasan hutan dan pegunungan di wilayah Mollo tetap terjaga. Atas dedikasinya dalam perlindungan lingkungan, ia menerima penghargaan bergengsi Goldman Environmental Prize pada tahun 2013.',
    'aleta-o1': 'Aleta Baun adalah seorang aktivis lingkungan hidup yang berasal dari Pulau Timor, Nusa Tenggara Timur. Ia dikenal karena perjuangannya dalam menjaga hutan dan sumber daya alam yang menjadi kehidupan masyarakat adat Mollo.',
    'aleta-o2': 'Aleta Baun lahir pada tahun 1966 di Mollo, Timor Tengah Selatan. Sejak kecil, ia sudah diajarkan untuk mencintai alam dan menjaga kelestarian lingkungan. Menurutnya, hutan, tanah, air, dan batu adalah bagian yang sangat penting bagi kehidupan masyarakat.',
    'aleta-quote': '"Hutan, tanah, air, dan batu adalah bagian yang sangat penting bagi kehidupan masyarakat kami."',
    'aleta-r1': 'Sampai sekarang, Aleta Baun masih menjadi inspirasi bagi banyak orang untuk menjaga lingkungan dan menghargai kearifan lokal. Semangat dan perjuangannya menunjukkan bahwa setiap orang bisa berperan dalam melestarikan alam untuk masa depan yang lebih baik.',
    'aleta-r2': 'Kisah hidup Aleta Baun membuktikan bahwa perubahan dapat dimulai dari kepedulian terhadap lingkungan sekitar. Dengan keberanian, kerja sama, dan rasa cinta terhadap alam, ia berhasil menggerakkan masyarakat untuk melindungi tanah airnya dari kerusakan.',

    // ── SENBUD ──
    'senbud-title': '🎨 Seni & Budaya Digital',
    'senbud-sub-hero': 'Moodboard, Tipografi, dan Desain UI & Wireframe Web CarbonTrace',

    // ── MATEMATIKA ──
    'math-title': 'Perhitungan Emisi Carbon',
    'math-sub': 'Analisis Skenario Lonjakan Emisi Carbon Serta Perhitungan Lonjakan Emisi Dan Tabel Lonjakan Emisi Carbon',
  });

  Object.assign(DICT.en, {
    // ── INDEX / HERO ──
    'hero-badge': '🌍 Time to Act for the Earth',
    'hero-title': 'Measure Your <span class="highlight">Carbon Footprint</span><br />Right Now',
    'hero-desc': 'CarbonTrace helps you understand the impact of your daily activities on the environment. Calculate carbon emissions, learn about its history, and take real steps for a better planet.',
    'btn-mulai': '<i class="fas fa-calculator"></i> Start Calculating',
    'btn-pelajari': '<i class="fas fa-info-circle"></i> Learn More',
    'stat-1': 'Tons CO₂/Year',
    'stat-2': 'Global Temperature Target',
    'stat-3': 'Net Zero Target',
    'how-title': 'How It Works',
    'how-sub': '3 easy steps to find out your carbon footprint',
    'step1-title': 'Enter Data',
    'step1-desc': 'Input your electricity usage, fuel consumption, and daily/weekly travel distance.',
    'step2-title': 'Auto Calculation',
    'step2-desc': 'The system calculates emissions using international standard formulas automatically.',
    'step3-title': 'See the Results',
    'step3-desc': 'Get a complete report on emission categories and practical tips to reduce them.',
    'cta-title': 'Ready to Reduce Your Carbon Footprint?',
    'cta-desc': 'Join thousands of people who already care about the environment.',
    'cta-btn': '<i class="fas fa-leaf"></i> Start Now — Free',
    'footer-desc': 'Carbon footprint education platform for environmentally conscious youth.',
    'footer-menu': 'Menu',
    'footer-info-title': 'Info',
    'footer-copy': 'Made with ❤️ for a better earth',
    'footer-quote-text': '🌿 Care for the earth wisely, for small acts of kindness today will be a blessing for life in the future',
    'nav-beranda': 'Home',
    'nav-materi': 'Subjects',

    // ── MATERI ──
    'materi-section-title': 'Choose the Subject You Want to Learn',
    'materi-section-sub': 'Click one of the cards below to start learning about carbon footprints from various perspectives',
    'materi-cta-title': 'Ready to Reduce Your Carbon Footprint?',
    'materi-cta-desc': 'Start by calculating your daily emissions using the CarbonTrace Carbon Calculator.',
    'materi-cta-btn': 'Open Calculator — Free',
    'f1-title': 'Carbon Calculator',
    'f1-desc': 'Accurately calculate emissions from electricity, fuel, and vehicle travel using international standard formulas.',
    'f1-tag': 'DPK PPLG',
    'f2-title': 'Emission History',
    'f2-desc': 'Trace the journey of the industrial revolution and its impact on global carbon emissions from the 18th century to today.',
    'f2-tag': 'History',
    'f3-title': 'Healthy Tips',
    'f3-desc': 'Eco-friendly physical activities for a healthier body and planet. Active living, minimal emissions!',
    'f3-tag': 'PE / Sports',
    'f4-title': 'Environmental Figures',
    'f4-desc': 'Inspiration from world environmental champions like Greta Thunberg and Wangari Maathai who changed history.',
    'f4-tag': 'Indonesian Language',
    'f5-title': 'Moral Message',
    'f5-desc': 'Spiritual reflection and ethics of caring for the earth as a divine trust from various religious perspectives.',
    'f5-tag': 'Religion',
    'f6-title': 'Javanese Language',
    'f6-desc': 'A dialogue about protecting the environment using Javanese ngoko and krama. Local content with an environmental vision.',
    'f6-tag': 'Local Content',
    'f7-title': 'Additional Files',
    'f7-desc': 'Download and view supporting documents for the CarbonTrace project, including reports, logbooks, and learning material references.',
    'f7-tag': 'Some Subjects',

    // ── CALCULATOR ──
    'calc-title': '🧮 Carbon Footprint Calculator',
    'calc-sub': 'Enter your daily activity data to calculate CO₂ emissions',

    // ── HISTORY ──
    'hist-intro': 'The carbon dioxide (CO₂) emissions threatening the earth\'s climate did not happen overnight. They are the legacy of four waves of industrial revolution that changed the way humans work, produce, and consume. Understanding this history is the key to taking the right steps in the future.',
    'timeline-title': 'Industrial Revolution & Carbon Emissions Timeline',
    'rev1-title': 'Industrial Revolution 1.0',
    'rev1-p1': 'The First Industrial Revolution began in England in the mid-18th century. The invention of the steam engine by James Watt (1769) became a turning point in human history. For the first time, humans were no longer fully dependent on muscle power or wind.',
    'rev1-p2': 'Coal became the main fuel powering factory machines, locomotives, and ships. This massive use of coal began the significant increase in CO₂ emissions in the earth\'s atmosphere.',
    'rev1-emisi': 'Emissions/year (estimate)',
    'rev1-pusat': 'Revolution Hub',
    'rev1-energi': 'Main Energy Source',
    'rev1-dampak-title': 'Environmental Impact:',
    'rev1-d1': 'First air pollution from factory smoke',
    'rev1-d2': 'Deforestation for fuel and factory land',
    'rev1-d3': 'River pollution in industrial cities',
    'rev2-title': 'Industrial Revolution 2.0',
    'rev2-p1': 'The Second Industrial Revolution was marked by the use of electricity, the development of the steel industry, and the beginning of petroleum as fuel. Thomas Edison and Nikola Tesla were the central figures of this era.',
    'rev2-p2': 'Mass production was introduced by Henry Ford. The assembly line enabled large-scale production of cars and consumer goods, which directly increased global energy consumption and carbon emissions.',
    'rev2-emisi': 'Emissions/year',
    'rev2-pusat': 'Revolution Hub',
    'rev2-energi': 'Energy Source',
    'rev2-dampak-title': 'Environmental Impact:',
    'rev2-d1': 'Petroleum industry began polluting land and sea',
    'rev2-d2': 'Urban air pollution increased drastically',
    'rev2-d3': 'Large-scale exploitation of natural resources began',
    'rev3-title': 'Industrial Revolution 3.0',
    'rev3-p1': 'The Third Industrial Revolution was marked by the emergence of computers, electronics, and information technology. This era brought industrial automation, the internet, and a digital revolution that changed the way people live.',
    'rev3-p2': 'Despite technological advances, carbon emissions continued to rise due to global industrial expansion, population growth, and energy consumption that had not yet shifted to renewable energy.',
    'rev3-emisi': 'Emissions/year',
    'rev3-pusat': 'Coverage',
    'rev3-energi': 'New Energy',
    'rev3-dampak-title': 'Environmental Impact:',
    'rev3-d1': 'CO₂ concentration exceeded 350 ppm for the first time',
    'rev3-d2': 'Ozone layer depletion discovered (1985)',
    'rev3-d3': 'Rio de Janeiro Earth Summit first discussed climate change (1992)',
    'rev4-title': 'Industrial Revolution 4.0',
    'rev4-p1': 'The Fourth Industrial Revolution is the era of artificial intelligence (AI), the Internet of Things (IoT), big data, robotics, and ultra-fast connectivity. The boundaries between the physical, digital, and biological worlds are becoming blurred.',
    'rev4-p2': 'On the other hand, this era also brings new hope. Solar energy, wind energy, and storage batteries are becoming more affordable. The 2015 Paris Agreement set targets for limiting global temperature rise.',
    'rev4-emisi': 'Emissions/year (2023)',
    'rev4-energi': 'Indonesia 2025 Target',
    'rev4-target': 'Global Net Zero Target',
    'rev4-dampak-title': 'Opportunities & Challenges:',
    'rev4-d1': 'Electric vehicles and solar panels become increasingly affordable',
    'rev4-d2': 'Data centers and blockchain consume enormous amounts of energy',
    'rev4-d3': 'Young people drive the zero waste and climate action movement',

    // ── BIOGRAPHY ──
    'bio-title': '🌟 Biography of Environmental Figures',
    'bio-sub': 'Getting to know the earth\'s warriors who inspire the world',
    'bio-intro': 'A biography is an objective narrative text containing the life story of a person written by someone else (not the subject themselves). It is based on real facts and the actual experiences of the subject.',
    'orientasi': 'Orientation',
    'peristiwa': 'Key Events',
    'reorientasi': 'Reorientation',
    'baca-selengkapnya': 'Read more ▼',
    'back-to-materi': '← Back to Documents',
    'ae1-title': 'Marble Mining Rejection',
    'ae1-desc': 'In the early 2000s, Aleta Baun led the community to oppose marble mining activities that were considered harmful to the environment and threatening to the livelihoods of residents.',
    'ae2-title': 'Months-Long Peaceful Protest',
    'ae2-desc': 'The action lasted for months. The women continued weaving around the mining area as a symbol of their will to protect the land and forests that are the source of life for the Mollo community.',
    'ae3-title': 'Environmental Education for Youth',
    'ae3-desc': 'In addition to mobilizing the community against mining, Aleta Baun also actively educated youth about the importance of protecting the environment. She was often involved in conservation activities, such as tree planting and maintaining water springs.',
    'ae4-title': 'Goldman Environmental Prize',
    'ae4-desc': 'Aleta Baun\'s struggle ultimately paid off. Several mining operations were successfully halted, keeping the forests and mountains of the Mollo region intact. For her dedication to environmental protection, she received the prestigious Goldman Environmental Prize in 2013.',
    'aleta-o1': 'Aleta Baun is an environmental activist from Timor Island, East Nusa Tenggara. She is known for her struggle to protect the forests and natural resources that sustain the lives of the Mollo indigenous community.',
    'aleta-o2': 'Aleta Baun was born in 1966 in Mollo, South Central Timor. From a young age, she was taught to love nature and preserve the environment. According to her, forests, land, water, and stone are extremely important to the lives of her community.',
    'aleta-quote': '"Forests, land, water, and stone are extremely important parts of the lives of our community."',
    'aleta-r1': 'To this day, Aleta Baun remains an inspiration for many people to protect the environment and honor local wisdom. Her spirit and struggle show that everyone can play a role in preserving nature for a better future.',
    'aleta-r2': 'The life story of Aleta Baun proves that change can begin with caring about the surrounding environment. With courage, teamwork, and love for nature, she successfully mobilized the community to protect their homeland from destruction.',

    // ── SENBUD ──
    'senbud-title': '🎨 Digital Arts & Culture',
    'senbud-sub-hero': 'Moodboard, Typography, and UI & Wireframe Design for CarbonTrace Web',

    // ── MATEMATIKA ──
    'math-title': 'Carbon Emission Calculations',
    'math-sub': 'Scenario Analysis of Carbon Emission Surges, Emission Surge Calculations, and Carbon Emission Surge Tables',
  });
})();
