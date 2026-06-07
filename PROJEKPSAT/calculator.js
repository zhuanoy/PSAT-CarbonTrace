// Faktor Emisi (kg CO2/unit)
const EMISI = {
    transportasi: {
        mobil: 0.21, 
        motor: 0.11, 
        umum: 0.04,   
        pesawat: {
            pendek: 0.255 * 500,
            sedang: 0.255 * 1250,
            panjang: 0.255 * 3000
        }
    },
    energi: {
        listrik: 0.87,  
        lpg: 2.98, 
    },
    makanan: {
        sapi: 27,
        ayam: 6.9,
        nabati: 2,
        susu: 3.2    
    },
    belanja: {
        pakaian: 25, 
        elektronik: 300,  
        sampahPlastik: 6  
    }
};

// Helper: ambil nilai input
function getValue(id) {
    return parseFloat(document.getElementById(id).value);
}

// Bind slider label
function bindSliderLabel(sliderId, labelId, suffix = '') {
    const slider = document.getElementById(sliderId);
    const label = document.getElementById(labelId);
    if (slider && label) {
        const update = () => { label.innerText = slider.value + suffix; };
        slider.addEventListener('input', update);
        update();
    }
}

// Inisialisasi semua slider
bindSliderLabel('jarakTempuh', 'jarakTempuhValue', ' km');
bindSliderLabel('frekuensiUmum', 'frekuensiUmumValue', ' hari');
bindSliderLabel('listrik', 'listrikValue', ' kWh');
bindSliderLabel('lpg', 'lpgValue', ' tabung');
bindSliderLabel('penghuni', 'penghuniValue', ' org');
bindSliderLabel('dagingSapi', 'dagingSapiValue', ' porsi');
bindSliderLabel('ayam', 'ayamValue', ' porsi');
bindSliderLabel('susu', 'susuValue', ' porsi');
bindSliderLabel('pakaian', 'pakaianValue', ' item');
bindSliderLabel('elektronik', 'elektronikValue', ' item');
bindSliderLabel('sampah', 'sampahValue', ' kg');

// Navigasi step
const stepBtns = document.querySelectorAll('.step-btn');
const stepContents = document.querySelectorAll('.step-content');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const calculateBtn = document.querySelector('.calculate-btn');
const resetBtn = document.querySelector('.reset-btn');
const resultsDiv = document.getElementById('results');

function showStep(stepNumber) {
    stepContents.forEach(content => content.classList.remove('active'));
    document.getElementById(`step${stepNumber}`).classList.add('active');
    stepBtns.forEach(btn => {
        if (parseInt(btn.dataset.step) === stepNumber) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const nextStep = parseInt(btn.dataset.next);
        if (nextStep) showStep(nextStep);
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const prevStep = parseInt(btn.dataset.prev);
        if (prevStep) showStep(prevStep);
    });
});

stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const step = parseInt(btn.dataset.step);
        showStep(step);
    });
});

// Fungsi perhitungan utama
function hitungJejakKarbon() {
    // --- TRANSPORTASI ---
    const jarakHarian = getValue('jarakTempuh');
    const jenis = document.getElementById('jenisKendaraan').value;
    const emisiPerKm = jenis === 'mobil' ? EMISI.transportasi.mobil : EMISI.transportasi.motor;
    const co2KendaraanPribadiTahunan = jarakHarian * emisiPerKm * 365;

    const frekUmumHariPerMinggu = getValue('frekuensiUmum');
    const jarakUmumPerHari = 10;
    const co2UmumTahunan = frekUmumHariPerMinggu * jarakUmumPerHari * EMISI.transportasi.umum * 52;

    const frekPesawatTahun = getValue('frekuensiPesawat');
    const jarakPesawatType = document.getElementById('jarakPenerbangan').value;
    const emisiPerPenerbangan = EMISI.transportasi.pesawat[jarakPesawatType];
    const co2PesawatTahunan = frekPesawatTahun * emisiPerPenerbangan;

    const totalTransportasi = co2KendaraanPribadiTahunan + co2UmumTahunan + co2PesawatTahunan;

    // --- ENERGI RUMAH ---
    const listrikBulananKwh = getValue('listrik');
    const co2ListrikTahunan = listrikBulananKwh * EMISI.energi.listrik * 12;

    const lpgTabungPerBulan = getValue('lpg');
    const co2LpgTahunan = lpgTabungPerBulan * 3 * EMISI.energi.lpg * 12;

    const jumlahPenghuni = getValue('penghuni');
    const totalEnergiPerOrang = (co2ListrikTahunan + co2LpgTahunan) / jumlahPenghuni;

    // --- MAKANAN ---
    const porsiSapiMinggu = getValue('dagingSapi');
    const kgSapiTahun = porsiSapiMinggu * 0.2 * 52;
    const co2Sapi = kgSapiTahun * EMISI.makanan.sapi;

    const porsiAyamMinggu = getValue('ayam');
    const kgAyamTahun = porsiAyamMinggu * 0.2 * 52;
    const co2Ayam = kgAyamTahun * EMISI.makanan.ayam;

    const porsiSusuHari = getValue('susu');
    const kgSusuTahun = porsiSusuHari * 0.25 * 365;
    const co2Susu = kgSusuTahun * EMISI.makanan.susu;

    const totalMakanan = co2Sapi + co2Ayam + co2Susu;

    // --- BELANJA ---
    const pakaianPerTahun = getValue('pakaian');
    const co2Pakaian = pakaianPerTahun * EMISI.belanja.pakaian;

    const elektronikPerTahun = getValue('elektronik');
    const co2Elektronik = elektronikPerTahun * EMISI.belanja.elektronik;

    const sampahMingguKg = getValue('sampah');
    const co2SampahTahunan = sampahMingguKg * EMISI.belanja.sampahPlastik * 52;

    const totalBelanja = co2Pakaian + co2Elektronik + co2SampahTahunan;

    // GRAND TOTAL
    const grandTotal = totalTransportasi + totalEnergiPerOrang + totalMakanan + totalBelanja;

    // Update DOM
    document.getElementById('co2Transport').innerText = Math.round(totalTransportasi).toLocaleString() + ' kg CO2/tahun';
    document.getElementById('co2Energi').innerText = Math.round(totalEnergiPerOrang).toLocaleString() + ' kg CO2/tahun';
    document.getElementById('co2Makanan').innerText = Math.round(totalMakanan).toLocaleString() + ' kg CO2/tahun';
    document.getElementById('co2Belanja').innerText = Math.round(totalBelanja).toLocaleString() + ' kg CO2/tahun';
    document.getElementById('totalCO2').innerText = Math.round(grandTotal).toLocaleString();

    // Level dan perbandingan
    let levelText = '';
    let levelClass = '';
    if (grandTotal < 3000) {
        levelText = 'Rendah (Emisi rendah)';
        levelClass = 'level-rendah';
    } else if (grandTotal >= 3000 && grandTotal < 7500) {
        levelText = 'Sedang';
        levelClass = 'level-sedang';
    } else if (grandTotal >= 7500 && grandTotal <= 12000) {
        levelText = 'Tinggi';
        levelClass = 'level-tinggi';
    } else {
        levelText = 'Sangat Tinggi';
        levelClass = 'level-sangat-tinggi';
    }

    const levelDiv = document.getElementById('levelIndicator');
    levelDiv.innerHTML = `<span class="${levelClass}">Level: ${levelText}</span>`;

    const rataIndonesia = 7500;
    const rataGlobal = 4000;
    const bandingIndo = grandTotal > rataIndonesia
        ? `${Math.round((grandTotal / rataIndonesia - 1) * 100)}% lebih tinggi`
        : `${Math.round((1 - grandTotal / rataIndonesia) * 100)}% lebih rendah`;
    const bandingGlobal = grandTotal > rataGlobal
        ? `${Math.round((grandTotal / rataGlobal - 1) * 100)}% lebih tinggi`
        : `${Math.round((1 - grandTotal / rataGlobal) * 100)}% lebih rendah`;

    document.getElementById('comparison').innerHTML = `
        <p>Perbandingan: Rata-rata Indonesia (rerata 7.500 kg/tahun): ${bandingIndo}</p>
        <p>Rata-rata Global (rerata 4.000 kg/tahun): ${bandingGlobal}</p>
    `;

    // Tampilkan hasil dan sembunyikan step
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    resultsDiv.style.display = 'block';
}

calculateBtn.addEventListener('click', () => {
    hitungJejakKarbon();
});

resetBtn.addEventListener('click', () => {
    // Reset semua input ke nilai default
    document.getElementById('jarakTempuh').value = 0;
    document.getElementById('frekuensiUmum').value = 0;
    document.getElementById('frekuensiPesawat').value = 0;
    document.getElementById('listrik').value = 0;
    document.getElementById('lpg').value = 0;
    document.getElementById('penghuni').value = 1;
    document.getElementById('dagingSapi').value = 0;
    document.getElementById('ayam').value = 0;
    document.getElementById('susu').value = 0;
    document.getElementById('pakaian').value = 0;
    document.getElementById('elektronik').value = 0;
    document.getElementById('sampah').value = 0;
    document.getElementById('jenisKendaraan').value = 'mobil';
    document.getElementById('jarakPenerbangan').value = 'pendek';

    // Refresh semua label
    const events = ['input', 'change'];
    const allSliders = document.querySelectorAll('input[type="range"], input[type="number"]');
    allSliders.forEach(slider => {
        events.forEach(ev => {
            slider.dispatchEvent(new Event(ev));
        });
    });

    resultsDiv.style.display = 'none';
    showStep(1);
});
